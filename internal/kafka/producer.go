// internal/kafka/producer.go
package kafka

import (
	"context"

	"ads-service/internal/models"

	"github.com/segmentio/kafka-go"
)

type Producer struct {
	writer  *kafka.Writer
	metrics *models.Metrics
}

func NewProducer(brokers []string, topic string, metrics *models.Metrics) *Producer {
	return &Producer{
		writer: kafka.NewWriter(kafka.WriterConfig{
			Brokers:  brokers,
			Topic:    topic,
			Balancer: &kafka.LeastBytes{},
		}),
		metrics: metrics,
	}
}

func (p *Producer) Publish(ctx context.Context, key, value []byte) error {
	p.metrics.EventsProcessed.WithLabelValues("clicks").Inc()
	return p.writer.WriteMessages(ctx, kafka.Message{
		Key:   key,
		Value: value,
	})
}

func (p *Producer) Close() error {
	return p.writer.Close()
}
