// redisdb/redis.go
package cacher

import (
	"context"
	"database/sql"
	"fmt"
	"time"

	"log/slog"

	"github.com/redis/go-redis/v9"
)

// Init initializes Redis and ensures data is loaded from Postgres if needed
func Init(ctx context.Context, db *sql.DB, redisAddr string, logger *slog.Logger) *redis.Client {
	rdb := redis.NewClient(&redis.Options{
		Addr: redisAddr,
		DB:   0,
	})

	// Test connection
	if err := rdb.Ping(ctx).Err(); err != nil {
		logger.Error("Redis connection failed", "error", err)
		panic(fmt.Sprintf("Redis connection failed: %v", err))
	}

	// Check if Redis is empty and rebuild if needed
	if isRedisEmpty(ctx, rdb) {
		logger.Info("Redis is empty, rebuilding from Postgres...")
		if err := RebuildRedisFromPostgres(ctx, db, rdb, logger); err != nil {
			logger.Error("Failed to rebuild Redis", "error", err)
			panic(fmt.Sprintf("Failed to rebuild Redis: %v", err))
		}
	}

	// Start background monitor
	go monitorRedis(ctx, rdb, db, logger)

	logger.Info("Redis initialized successfully")
	return rdb
}

// Check if Redis has no ad:* keys
func isRedisEmpty(ctx context.Context, rdb *redis.Client) bool {
	iter := rdb.Scan(ctx, 0, "ad:*", 1).Iterator()
	return !iter.Next(ctx)
}

// Background monitor to detect flush/restart
func monitorRedis(ctx context.Context, rdb *redis.Client, db *sql.DB, logger *slog.Logger) {
	ticker := time.NewTicker(30 * time.Second)
	defer ticker.Stop()

	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
			if err := rdb.Ping(ctx).Err(); err != nil {
				logger.Error("Redis down", "error", err)
				continue
			}

			if isRedisEmpty(ctx, rdb) {
				logger.Warn("Redis was flushed, rebuilding...")
				if err := RebuildRedisFromPostgres(ctx, db, rdb, logger); err != nil {
					logger.Error("Failed to rebuild Redis", "error", err)
				}
			}
		}
	}
}

func RebuildRedisFromPostgres(ctx context.Context, db *sql.DB, rdb *redis.Client, logger *slog.Logger) error {
	query := `
		SELECT a.ad_id,
       a.name,
       COALESCE(c.clicks, 0) AS clicks
FROM ads a
LEFT JOIN (
    SELECT ad_id, COUNT(*) AS clicks
    FROM ad_clicks
    GROUP BY ad_id
) c ON a.ad_id = c.ad_id;
	`

	rows, err := db.Query(query)
	if err != nil {
		logger.Error("DB query failed", "error", err)
		return fmt.Errorf("db query failed: %w", err)
	}
	defer rows.Close()

	pipe := rdb.Pipeline()
	count := 0

	for rows.Next() {
		var adID string
		var name string
		var clicks int64

		if err := rows.Scan(&adID, &name, &clicks); err != nil {
			logger.Error("Row scan failed", "error", err)
			return fmt.Errorf("row scan failed: %w", err)
		}

		key := "ad:" + adID
		logger.Info("Preparing Redis insert", "key", key, "id", adID, "name", name, "clicks", clicks)

		pipe.HSet(ctx, key, map[string]interface{}{
			"id":     adID,
			"name":   name,
			"clicks": clicks,
		})

		count++
	}

	if count == 0 {
		logger.Warn("No rows fetched from Postgres, skipping Redis rebuild")
		return nil
	}

	logger.Info("Executing Redis pipeline", "ads_count", count)
	_, err = pipe.Exec(ctx)
	if err != nil {
		logger.Error("Redis pipeline exec failed", "error", err)
		return fmt.Errorf("redis pipeline exec failed: %w", err)
	}

	logger.Info("Redis rebuild finished successfully")
	return nil
}
