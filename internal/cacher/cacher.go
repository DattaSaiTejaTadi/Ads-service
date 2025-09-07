package cacher

import (
	"log/slog"
	"strconv"
	"strings"

	"ads-service/internal/models"

	"github.com/gofiber/fiber/v3"
	"github.com/redis/go-redis/v9"
	"github.com/syntaxLabz/errors/pkg/httperrors"
)

type cacher struct {
	client  *redis.Client
	log     *slog.Logger
	metrics *models.Metrics
}

func NewCacher(client *redis.Client, logger *slog.Logger, metrics *models.Metrics) *cacher {
	return &cacher{client: client, log: logger, metrics: metrics}
}

func (c *cacher) GetCountForTimeRange(ctx fiber.Ctx, adID string, start, end int64) (int64, *httperrors.Error) {
	key := "ad:" + adID + ":clicks:zset" // ✅ match your storage key
	count, err := c.client.ZCount(
		ctx,
		key,
		strconv.FormatInt(start, 10),
		strconv.FormatInt(end, 10),
	).Result()

	if err != nil {
		c.metrics.CacheMisses.WithLabelValues("GetCountForTimeRange").Inc()
		return 0, httperrors.NewDBError()
	}
	c.metrics.CacheHits.WithLabelValues("GetCountForTimeRange").Inc()
	return count, nil
}

func (c *cacher) RetrieveAllClicks(ctx fiber.Ctx) ([]models.Click, *httperrors.Error) {
	var result []models.Click
	var cursor uint64

	for {
		// Scan for all ad keys
		keys, newCursor, err := c.client.Scan(ctx, cursor, "ad:*", 100).Result()
		if err != nil {
			c.metrics.CacheMisses.WithLabelValues("RetrieveAllClicks").Inc()
			return nil, httperrors.NewDBError()
		}
		cursor = newCursor

		for _, key := range keys {
			// Skip ZSET keys
			if strings.HasSuffix(key, ":clicks:zset") {
				continue
			}

			// Get hash values
			hash, err := c.client.HGetAll(ctx, key).Result()
			if err != nil {
				return nil, httperrors.NewDBError()
			}

			if len(hash) == 0 {
				continue // skip empty hashes
			}

			// Build Click struct
			click := models.Click{
				ID:     hash["id"],
				Name:   hash["name"],
				Clicks: hash["clicks"],
			}

			result = append(result, click)
		}

		if cursor == 0 {
			break // finished scanning
		}
	}

	return result, nil
}
