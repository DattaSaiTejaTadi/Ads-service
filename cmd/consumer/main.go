package main

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"os/signal"
	"sync"
	"syscall"
	"time"

	"log/slog"

	redisconsumer "ads-service/internal/cacher"
	"ads-service/internal/kafka"
	"ads-service/internal/metrics"
	"ads-service/internal/models"
	"ads-service/internal/store"
	"ads-service/internal/worker"

	_ "github.com/lib/pq"
	"github.com/redis/go-redis/v9"
	kafkago "github.com/segmentio/kafka-go"
	"github.com/syntaxLabz/configManager/pkg/configManager"
)

const (
	batchSize       = 5000
	workerCount     = 40
	processChanSize = 20000
	commitChanSize  = 10000
	flushTimeout    = 500 * time.Millisecond
)

var (
	totalProcessed int64
	mu             sync.Mutex
)

func batchInsertClickEvents(db *sql.DB, events []models.ClickEvent) error {
	if len(events) == 0 {
		return nil
	}
	query := "INSERT INTO ad_clicks (click_id, ad_id, name, ip, ts) VALUES "
	args := []interface{}{}
	for i, evt := range events {
		if i > 0 {
			query += ","
		}
		query += fmt.Sprintf("($%d, $%d, $%d, $%d, $%d)", i*5+1, i*5+2, i*5+3, i*5+4, i*5+5)
		args = append(args, evt.ClickID, evt.AdID, evt.Name, evt.IP, evt.Timestamp)
	}
	query += " ON CONFLICT DO NOTHING"
	_, err := db.Exec(query, args...)
	if err != nil {
		slog.Error("Postgres batch insert failed", slog.Any("error", err))
	}
	return err
}

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	// Handle shutdown signals
	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, syscall.SIGINT, syscall.SIGTERM)
	go func() {
		<-sigCh
		slog.Info("Received shutdown signal, shutting down gracefully")
		cancel()
	}()

	metrics := metrics.NewMetrics()
	configs := configManager.New()
	// Kafka consumer setup
	kafkaConsumer := kafka.NewConsumer(
		[]string{configs.GetConfig("KAFKA_ADDRESS")},
		"redis-consumer",
		configs.GetConfig("KAFKA_TOPIC"),
		metrics,
	)
	defer kafkaConsumer.Close()

	// Redis client setup
	rdb := redis.NewClient(&redis.Options{
		Addr:         configs.GetConfig("redis_addr"),
		DB:           0,
		PoolSize:     workerCount * 2,
		MinIdleConns: workerCount,
	})
	if err := rdb.Ping(ctx).Err(); err != nil {
		slog.Error("Could not connect to Redis", slog.Any("error", err))
		os.Exit(1)
	}
	defer rdb.Close()

	// Postgres setup

	db := store.InitializeDB(configs, "")
	if db == nil {
		log.Fatal("Database connection failed")
	}
	defer db.Close()

	redisConsumer := redisconsumer.NewConsumerService(rdb)

	slog.Info("Consumer started and connected to Redis and Postgres")

	// Channel for committing offsets
	commitCh := make(chan interface{}, commitChanSize)

	// Channel for batch Postgres inserts
	pgBatchCh := make(chan models.ClickEvent, processChanSize)

	// Worker pool for processing events
	pool := worker.NewPool(ctx, workerCount, func(ctx context.Context, payload interface{}) {
		msg, ok := payload.(kafkago.Message)
		if !ok {
			slog.Debug("Worker received non-Kafka message payload", slog.Any("payload", payload))
			return
		}

		slog.Debug("Worker received Kafka message", slog.Any("offset", msg.Offset), slog.Any("partition", msg.Partition))
		var evt models.ClickEvent
		if err := json.Unmarshal(msg.Value, &evt); err != nil {
			slog.Warn("Failed to unmarshal Kafka message", slog.Any("error", err), slog.Any("raw", string(msg.Value)))
			return
		}

		slog.Debug("Unmarshalled event", slog.Any("event", evt))
		// Validate event fields
		if evt.AdID == "" || evt.ClickID == "" || evt.IP == "" {
			slog.Warn("Skipping event due to missing fields", slog.Any("event", evt))
			return
		}

		// Use ConsumerService for Redis pipelining
		err := redisConsumer.ProcessClickEventPipeline(evt)
		if err != nil {
			slog.Error("Redis pipeline failed", slog.Any("error", err), slog.Any("event", evt))
			return
		}

		slog.Debug("Redis pipeline succeeded", slog.Any("event", evt))
		// Add to Postgres batch channel
		pgBatchCh <- evt
		slog.Debug("Event added to Postgres batch channel", slog.Any("event", evt))
		commitCh <- msg // Pass the original Kafka message for offset commit
		slog.Debug("Kafka message added to commit channel", slog.Any("offset", msg.Offset))
	})

	defer pool.Stop()

	go func() {
		for {
			msg, err := kafkaConsumer.FetchMessage(ctx)
			if err != nil {
				if ctx.Err() != nil {
					slog.Debug("Kafka fetch loop exiting due to context cancel")
					return
				}

				slog.Warn("Kafka fetch error", slog.Any("error", err))
				continue
			}

			slog.Debug("Fetched Kafka message", slog.Any("offset", msg.Offset), slog.Any("partition", msg.Partition))
			pool.Submit(msg)
		}
	}()

	// Batch and insert into Postgres
	go func() {
		batch := make([]models.ClickEvent, 0, batchSize)
		ticker := time.NewTicker(flushTimeout)
		defer ticker.Stop()

		for {
			select {
			case <-ctx.Done():
				if len(batch) > 0 {
					slog.Debug("Flushing Postgres batch due to shutdown", slog.Any("batch_size", len(batch)))
					err := batchInsertClickEvents(db, batch)
					if err != nil {
						slog.Error("Failed to insert batch into Postgres", slog.Any("error", err))
					}
				}

				return
			case evt := <-pgBatchCh:
				batch = append(batch, evt)
				slog.Debug("Event added to Postgres batch", slog.Any("current_batch_size", len(batch)))
				if len(batch) >= batchSize {
					slog.Debug("Flushing Postgres batch due to batchSize", slog.Any("batch_size", len(batch)))
					err := batchInsertClickEvents(db, batch)
					if err != nil {
						slog.Error("Failed to insert batch into Postgres", slog.Any("error", err))
					}
					batch = batch[:0]
				}

			case <-ticker.C:
				if len(batch) > 0 {
					slog.Debug("Flushing Postgres batch due to flushTimeout", slog.Any("batch_size", len(batch)))
					err := batchInsertClickEvents(db, batch)
					if err != nil {
						slog.Error("Failed to insert batch into Postgres", slog.Any("error", err))
					}
					batch = batch[:0]
				}
			}
		}
	}()

	// Commit offsets (stub, you may need to adapt this for your actual offset commit logic)
	go func() {
		batch := make([]kafkago.Message, 0, batchSize)
		ticker := time.NewTicker(flushTimeout)
		defer ticker.Stop()
		for {
			select {
			case <-ctx.Done():
				if len(batch) > 0 {
					slog.Debug("Committing Kafka offsets due to shutdown", slog.Any("batch_size", len(batch)))
					if err := kafkaConsumer.CommitMessages(ctx, batch...); err != nil {
						slog.Warn("Commit failed", slog.Any("error", err))
					}
				}
				return
			case m := <-commitCh:
				msg, ok := m.(kafkago.Message)
				if !ok {
					slog.Debug("Commit channel received non-Kafka message", slog.Any("msg", m))
					continue
				}
				batch = append(batch, msg)
				slog.Debug("Kafka message added to commit batch", slog.Any("offset", msg.Offset), slog.Any("current_batch_size", len(batch)))
				if len(batch) >= batchSize {
					slog.Debug("Committing Kafka offsets due to batchSize", slog.Any("batch_size", len(batch)))
					if err := kafkaConsumer.CommitMessages(ctx, batch...); err != nil {
						slog.Warn("Commit failed", slog.Any("error", err))
					}
					batch = batch[:0]
				}
			case <-ticker.C:
				if len(batch) > 0 {
					slog.Debug("Committing Kafka offsets due to flushTimeout", slog.Any("batch_size", len(batch)))
					if err := kafkaConsumer.CommitMessages(ctx, batch...); err != nil {
						slog.Warn("Commit failed", slog.Any("error", err))
					}
					batch = batch[:0]
				}
			}
		}
	}()

	<-ctx.Done()
	slog.Info("Consumer shutdown complete")
}
