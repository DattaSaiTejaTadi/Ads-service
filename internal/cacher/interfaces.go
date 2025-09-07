package cacher

import (
	"ads-service/internal/models"

	"github.com/gofiber/fiber/v3"
	"github.com/syntaxLabz/errors/pkg/httperrors"
)

type Cache interface {
	GetCountForTimeRange(ctx fiber.Ctx, adID string, start, end int64) (int64, *httperrors.Error)
	RetrieveAllClicks(ctx fiber.Ctx) ([]models.Click, *httperrors.Error)
}
