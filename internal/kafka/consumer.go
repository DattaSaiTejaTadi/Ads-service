package kafka

import (
	"context"

	"ads-service/internal/models"

	"github.com/segmentio/kafka-go"
)

// Consumer wraps a kafka.Reader for consuming messages.
type Consumer struct {
	reader  *kafka.Reader
	metrics *models.Metrics
}

// NewConsumer creates a new Kafka consumer.
func NewConsumer(brokers []string, groupID, topic string, metrics *models.Metrics) *Consumer {
	reader := kafka.NewReader(kafka.ReaderConfig{
		Brokers: brokers,
		GroupID: groupID,
		Topic:   topic,
	})
	return &Consumer{reader: reader, metrics: metrics}
}

// FetchMessage reads a message from Kafka.
func (c *Consumer) FetchMessage(ctx context.Context) (kafka.Message, error) {
	c.metrics.EventsConsumed.WithLabelValues("clicks").Inc()
	return c.reader.FetchMessage(ctx)
}

// CommitMessages commits a batch of messages.
func (c *Consumer) CommitMessages(ctx context.Context, msgs ...kafka.Message) error {
	return c.reader.CommitMessages(ctx, msgs...)
}

// Close closes the Kafka reader.
func (c *Consumer) Close() error {
	return c.reader.Close()
}
