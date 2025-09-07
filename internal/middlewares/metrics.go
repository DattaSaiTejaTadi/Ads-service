package middlewares

import (
	"time"

	"github.com/gofiber/fiber/v3"
	"github.com/prometheus/client_golang/prometheus"
)

type Metrics struct {
	RequestCount    *prometheus.CounterVec
	RequestDuration *prometheus.HistogramVec
}

func MetricsMiddleware(metrics *Metrics) fiber.Handler {
	return func(c fiber.Ctx) error {
		// Start timer
		start := time.Now()

		// Process request
		err := c.Next()

		// Record metrics
		metrics.RequestDuration.WithLabelValues(c.Method(), c.Path()).Observe(time.Since(start).Seconds())
		metrics.RequestCount.WithLabelValues(c.Method(), c.Path()).Inc()
		

		return err
	}
}
