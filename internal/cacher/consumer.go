package cacher

import (
	"context"
	"time"

	"ads-service/internal/models"

	"github.com/redis/go-redis/v9"
)

// ProcessClickEventPipeline batches Redis operations for a ClickEvent using pipelining.
func (r *ConsumerService) ProcessClickEventPipeline(evt models.ClickEvent) error {
	if evt.AdID == "" || evt.ClickID == "" || evt.IP == "" {
		return nil // skip invalid events
	}

	zsetKey := "ad:" + evt.AdID + ":clicks:zset"
	metricsKey := "ad:" + evt.AdID

	member := evt.ClickID + ":" + evt.IP
	tsMillis := evt.Timestamp.UnixNano() / int64(time.Millisecond)

	// Check if member already exists in ZSET
	exists, err := r.client.ZScore(context.Background(), zsetKey, member).Result()
	if err != nil && err != redis.Nil {
		return err
	}
	if err == nil && exists > 0 {
		// already exists, skip
		return nil
	}

	// Build pipeline
	pipe := r.client.Pipeline()

	// Add to ZSET
	pipe.ZAdd(context.Background(), zsetKey, redis.Z{
		Score:  float64(tsMillis),
		Member: member,
	})

	// Increment counters in hash
	pipe.HIncrBy(context.Background(), metricsKey, "total_clicks", 1)
	pipe.HIncrBy(context.Background(), metricsKey, "clicks", 1)

	// Expire
	pipe.Expire(context.Background(), zsetKey, 86400*time.Second)
	pipe.Expire(context.Background(), metricsKey, 86400*time.Second)

	_, err = pipe.Exec(context.Background())
	return err
}

// ConsumerService handles Redis operations for the consumer.
type ConsumerService struct {
	client  *redis.Client
}

func NewConsumerService(client *redis.Client) *ConsumerService {
	return &ConsumerService{client: client}
}
