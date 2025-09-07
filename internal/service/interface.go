package service

import (
	"ads-service/internal/models"

	"github.com/gofiber/fiber/v3"
	"github.com/syntaxLabz/errors/pkg/httperrors"
)

type Ads interface {
	RetrieveClicks(ctx fiber.Ctx, clickRange models.RetrieveClicksRequest) (models.ClicksOverRange, *httperrors.Error)
	RetrieveAllClicks(ctx fiber.Ctx) ([]models.Click, *httperrors.Error)
	RetrieveAds(ctx fiber.Ctx) ([]models.Ads, *httperrors.Error)
}
