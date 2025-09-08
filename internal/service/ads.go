package service

import (
	"log/slog"
	"time"

	"ads-service/internal/cacher"
	"ads-service/internal/models"
	"ads-service/internal/store"

	"github.com/gofiber/fiber/v3"
	"github.com/syntaxLabz/errors/pkg/httperrors"
)

type service struct {
	cache  cacher.Cache
	logger *slog.Logger
	store  store.Ads
}

func NewAdsService(cache cacher.Cache, logger *slog.Logger, store store.Ads) *service {
	return &service{
		cache:  cache,
		logger: logger,
		store:  store,
	}
}

// RetrieveClicks returns the number of clicks for an ad in a given time range.
func (c *service) RetrieveClicks(ctx fiber.Ctx, clickRange models.RetrieveClicksRequest) (models.ClicksOverRange, *httperrors.Error) {
	// Parse start time
	startTime, err := time.Parse(time.RFC3339, clickRange.Start)
	if err != nil {
		c.logger.Error("Invalid start time format", slog.Any("error", err))
		return models.ClicksOverRange{}, httperrors.BodyValidationError(httperrors.Details{
			Field: "start",
			Error: err.Error(),
		})
	}

	// Parse end time
	endTime, err := time.Parse(time.RFC3339, clickRange.End)
	if err != nil {
		c.logger.Error("Invalid end time format", slog.Any("error", err))
		return models.ClicksOverRange{}, httperrors.BodyValidationError(httperrors.Details{
			Field: "end",
			Error: err.Error(),
		})
	}

	// Validate time range
	if !startTime.Before(endTime) {
		c.logger.Warn("Start time is not before end time", slog.String("start", clickRange.Start), slog.String("end", clickRange.End))
		return models.ClicksOverRange{}, httperrors.BodyValidationError(httperrors.Details{
			Field: "range",
			Error: "start must be before end",
		})
	}

	now := time.Now()
	var totalClick int
	var dbErr *httperrors.Error

	// Compare only the date part (year, month, day)
	startDate := time.Date(startTime.Year(), startTime.Month(), startTime.Day(), 0, 0, 0, 0, startTime.Location())
	todayDate := time.Date(now.Year(), now.Month(), now.Day(), 0, 0, 0, 0, now.Location())

	if startDate.Before(todayDate) {
		// For past data, use Postgres
		totalClick, dbErr = c.store.RetrieveClickCountForTimeRange(ctx, clickRange.AdID, startTime, endTime)
		if dbErr != nil {
			c.logger.Error("Postgres error in RetrieveClickCountForTimeRange", slog.Any("error", dbErr))
			return models.ClicksOverRange{}, dbErr
		}

	} else {
		// For future/current, use cache
		count, cacheError := c.cache.GetCountForTimeRange(ctx, clickRange.AdID, startTime.UnixMilli(), endTime.UnixMilli())
		if cacheError != nil {
			c.logger.Error("Cache error in GetCountForTimeRange", slog.Any("error", cacheError))
			return models.ClicksOverRange{}, cacheError
		}

		totalClick = int(count)
	}

	clickPerRange := models.ClicksOverRange{
		AdID:        clickRange.AdID,
		TotalClicks: totalClick,
		Start:       clickRange.Start,
		End:         clickRange.End,
	}

	return clickPerRange, nil
}

// RetrieveAllClicks returns all click records from cache.
func (c *service) RetrieveAllClicks(ctx fiber.Ctx) ([]models.Click, *httperrors.Error) {
	clicks, err := c.cache.RetrieveAllClicks(ctx)
	if err != nil {
		c.logger.Error("Error retrieving all clicks from cache", slog.Any("error", err))
		return nil, err
	}

	return clicks, nil
}

// RetrieveAds returns all ads from the store.
func (c *service) RetrieveAds(ctx fiber.Ctx) ([]models.Ads, *httperrors.Error) {
	ads, err := c.store.RetrieveAds(ctx)
	if err != nil {
		c.logger.Error("Error retrieving ads from store", slog.Any("error", err))
		return nil, err
	}

	return ads, nil
}
