// cmd/api/main.go
package main

import (
	"context"
	"log/slog"
	"os"

	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	_ "github.com/lib/pq"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	"github.com/valyala/fasthttp/fasthttpadaptor"

	"ads-service/internal/cacher"
	"ads-service/internal/handler"
	"ads-service/internal/kafka"
	"ads-service/internal/metrics"
	"ads-service/internal/middlewares"
	"ads-service/internal/service"
	"ads-service/internal/store"

	"github.com/gofiber/fiber/v3"
	"github.com/syntaxLabz/configManager/pkg/configManager"
)

func main() {
	app := fiber.New()
	metrics := metrics.NewMetrics()
	metricsMiddleware := middlewares.Metrics{
		RequestCount:    metrics.RequestCounter,
		RequestDuration: metrics.RequestDuration,
	}
	app.Use(middlewares.MetricsMiddleware(&metricsMiddleware))

	configs := configManager.New()
	log := slog.New(slog.NewJSONHandler(os.Stdout, nil))
	slog.SetDefault(log)

	store.RunMigrations(configs)
	db := store.InitializeDB(configs, "")
	if db == nil {
		log.Error("Database connection failed")
	}
	defer db.Close()

	producer := kafka.NewProducer([]string{configs.GetConfig("KAFKA_ADDRESS")}, configs.GetConfig("KAFKA_TOPIC"), metrics)
	defer producer.Close()

	rdb := cacher.Init(context.Background(), db, configs.GetConfig("redis_addr"))
	defer rdb.Close()

	store := store.NewAdsStore(db, log, metrics)
	redisClient := cacher.NewCacher(rdb, log, metrics)
	clicksService := service.NewAdsService(redisClient, log, store)
	adsHandler := handler.NewAdsHandler(producer, clicksService, log, metrics)
	// Import the fasthttpadaptor package at the top:
	// "github.com/valyala/fasthttp/fasthttpadaptor"

	app.Get("/metrics", func(c fiber.Ctx) error {
		fasthttpadaptor.NewFastHTTPHandler(promhttp.Handler())(c.RequestCtx())
		return nil
	})

	app.Post("/ads/click", adsHandler.HandleClick)
	app.Get("/ads/:id/analytics", adsHandler.HandleRetrieveClicks)
	app.Get("/ads/analytics", adsHandler.RetrieveAllClicks)
	app.Get("/ads", adsHandler.RetrieveAds)

	app.Listen(":" + configs.GetConfig("PORT"))
}
