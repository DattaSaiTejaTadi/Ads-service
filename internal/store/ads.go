package store

import (
	"database/sql"
	"log/slog"
	"time"

	"ads-service/internal/models"

	"github.com/gofiber/fiber/v3"
	"github.com/syntaxLabz/errors/pkg/httperrors"
)

type store struct {
	db      *sql.DB
	log     *slog.Logger
	metrics *models.Metrics
}

func NewAdsStore(db *sql.DB, logger *slog.Logger, metrics *models.Metrics) *store {
	return &store{db: db, log: logger, metrics: metrics}
}

func (s *store) RetrieveAds(ctx fiber.Ctx) ([]models.Ads, *httperrors.Error) {
	s.log.Info("Querying ads table")
	rows, err := s.db.Query("SELECT ad_id, name, campaign_id, media_url, created_at FROM ads")
	if err != nil {
		s.log.Error("DB query error", slog.Any("error", err))
		return nil, httperrors.NewDBError()
	}
	defer rows.Close()

	var ads []models.Ads
	for rows.Next() {
		var ad models.Ads
		err := rows.Scan(&ad.Id, &ad.Name, &ad.CampaignId, &ad.Media, &ad.CreatedAt)
		if err != nil {
			s.log.Error("DB scan error", slog.Any("error", err))
			return nil, httperrors.NewDBError()
		}
		ads = append(ads, ad)
	}
	if err := rows.Err(); err != nil {
		s.log.Error("DB rows error", slog.Any("error", err))
		return nil, httperrors.NewDBError()
	}
	s.log.Info("Ads query successful", slog.Int("count", len(ads)))
	return ads, nil
}

func (s *store) RetrieveClickCountForTimeRange(ctx fiber.Ctx, adID string, start, end time.Time) (int, *httperrors.Error) {
	s.log.Info("Querying ad_clicks for time range", slog.String("adID", adID), slog.Time("start", start), slog.Time("end", end))
	var count int
	err := s.db.QueryRow("SELECT COUNT(*) FROM ad_clicks WHERE ad_Id = $1 AND ts BETWEEN $2 AND $3", adID, start, end).Scan(&count)
	if err != nil {
		s.log.Error("DB error", slog.Any("error", err))
		return 0, httperrors.NewDBError()
	}
	s.log.Info("Click count query successful", slog.Int("count", count))
	return count, nil
}
