// redisdb/redis.go
package cacher

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"time"

	"github.com/redis/go-redis/v9"
)

var RDB *redis.Client

// Init initializes Redis and ensures data is loaded from Postgres if needed
func Init(ctx context.Context, db *sql.DB, redisAddr string) *redis.Client {
	RDB = redis.NewClient(&redis.Options{
		Addr: redisAddr,
		DB:   0,
	})

	// Test connection
	if err := RDB.Ping(ctx).Err(); err != nil {
		log.Fatalf("❌ Redis connection failed: %v", err)
	}

	// Check if Redis is empty and rebuild if needed
	if isRedisEmpty(ctx) {
		log.Println("⚠️ Redis is empty, rebuilding from Postgres...")
		if err := RebuildRedisFromPostgres(ctx, db, RDB); err != nil {
			log.Fatalf("❌ Failed to rebuild Redis: %v", err)
		}
	}

	// Start background monitor
	go monitorRedis(ctx, db)

	log.Println("✅ Redis initialized successfully")
	return RDB
}

// Check if Redis has no ad:* keys
func isRedisEmpty(ctx context.Context) bool {
	iter := RDB.Scan(ctx, 0, "ad:*", 1).Iterator()
	return !iter.Next(ctx)
}

// Background monitor to detect flush/restart
func monitorRedis(ctx context.Context, db *sql.DB) {
	ticker := time.NewTicker(30 * time.Second)
	defer ticker.Stop()

	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
			if err := RDB.Ping(ctx).Err(); err != nil {
				log.Printf("❌ Redis down: %v\n", err)
				continue
			}

			if isRedisEmpty(ctx) {
				log.Println("⚠️ Redis was flushed, rebuilding...")
				if err := RebuildRedisFromPostgres(ctx, db, RDB); err != nil {
					log.Printf("❌ Failed to rebuild Redis: %v\n", err)
				}
			}
		}
	}
}

func RebuildRedisFromPostgres(ctx context.Context, db *sql.DB, rdb *redis.Client) error {
	query := `
        SELECT ad_id,
               MAX(name) AS name,
               COUNT(*) AS clicks
        FROM ad_clicks
        GROUP BY ad_id;
    `

	rows, err := db.Query(query)
	if err != nil {
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
			return fmt.Errorf("row scan failed: %w", err)
		}

		key := "ad:" + adID
		fmt.Printf("➡️ Preparing Redis insert | key=%s | id=%s | name=%s | clicks=%d\n",
			key, adID, name, clicks)

		pipe.HSet(ctx, key, map[string]interface{}{
			"id":     adID,
			"name":   name,
			"clicks": clicks,
		})

		count++
	}

	if count == 0 {
		fmt.Println("⚠️ No rows fetched from Postgres, skipping Redis rebuild")
		return nil
	}

	fmt.Printf("🚀 Executing Redis pipeline with %d ads...\n", count)
	_, err = pipe.Exec(ctx)
	if err != nil {
		return fmt.Errorf("redis pipeline exec failed: %w", err)
	}

	fmt.Println("✅ Redis rebuild finished successfully")
	return nil
}
