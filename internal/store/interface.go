package store

import (
	"time"

	"ads-service/internal/models"

	"github.com/gofiber/fiber/v3"
	"github.com/syntaxLabz/errors/pkg/httperrors"
)

type Ads interface {
	RetrieveAds(ctx fiber.Ctx) ([]models.Ads, *httperrors.Error)
	RetrieveClickCountForTimeRange(ctx fiber.Ctx, adID string, start, end time.Time) (int, *httperrors.Error)
}
