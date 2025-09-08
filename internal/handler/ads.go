// internal/handler/click.go
package handler

import (
	"context"
	"encoding/json"
	"log/slog"

	"ads-service/internal/kafka"
	"ads-service/internal/models"
	"ads-service/internal/service"

	"github.com/gofiber/fiber/v3"
	"github.com/syntaxLabz/errors/pkg/httperrors"
)

type handler struct {
	producer *kafka.Producer
	service  service.Ads
	logger   *slog.Logger
	metrics  *models.Metrics
}

func NewAdsHandler(producer *kafka.Producer, service service.Ads, log *slog.Logger, metrics *models.Metrics) *handler {
	return &handler{producer: producer, service: service, logger: log, metrics: metrics}
}

func (h *handler) HandleClick(c fiber.Ctx) error {
	// HandleClick processes a click event and publishes it to Kafka.
	var evt models.ClickEvent

	// Bind and validate request body
	if err := c.Bind().JSON(&evt); err != nil {
		h.logger.Error("Invalid click event payload", slog.Any("error", err))

		statuscode, errresp := httperrors.BodyValidationError().ErrorResponse()
		h.metrics.ErrorCounter.WithLabelValues(c.Method(), c.Path(), "400").Inc()
		c.Status(statuscode).JSON(errresp)

		return nil
	}

	//schema validation
	if validationError := evt.Validate(); validationError != nil {
		h.logger.Error("Click event validation failed", slog.Any("error", validationError))
		h.metrics.ErrorCounter.WithLabelValues(c.Method(), c.Path(), "422").Inc()

		statuscode, errresp := validationError.ErrorResponse()
		c.Status(statuscode).JSON(errresp)

		return nil
	}

	// Marshal event to JSON
	data, err := json.Marshal(evt)
	if err != nil {
		h.logger.Error("Failed to marshal click event", slog.Any("error", err))
		h.metrics.ErrorCounter.WithLabelValues(c.Method(), c.Path(), "500").Inc()

		statuscode, errresp := httperrors.NewServerError().ErrorResponse()
		c.Status(statuscode).JSON(errresp)

		return nil
	}

	// Publish event asynchronously
	go func() {
		err := h.producer.Publish(context.Background(), []byte(evt.AdID), data)
		if err != nil {
			h.logger.Error("Failed to publish click event", slog.Any("error", err))
		}
	}()

	h.logger.Debug("Click event received", slog.String("adID", evt.AdID))

	c.Status(fiber.StatusOK).JSON(models.Response{Data: "click event received"})
	return nil
}
func (h *handler) HandleRetrieveClicks(c fiber.Ctx) error {
	// HandleRetrieveClicks returns analytics for a specific ad in a time range.
	// Extract path param
	adID := c.Params("id")
	if adID == "" {
		h.logger.Warn("Missing adID path param")
		h.metrics.ErrorCounter.WithLabelValues(c.Method(), c.Path(), "400").Inc()

		statuscode, errresp := httperrors.BodyValidationError(httperrors.Details{
			Field: "id",
			Error: "id path param is required",
		}).ErrorResponse()
		c.Status(statuscode).JSON(errresp)

		return nil
	}

	// Extract query params
	startStr := c.Query("startDateTime")
	endStr := c.Query("endDateTime")

	if startStr == "" || endStr == "" {
		h.logger.Warn("Missing startDateTime or endDateTime query param")
		h.metrics.ErrorCounter.WithLabelValues(c.Method(), c.Path(), "400").Inc()

		statuscode, errresp := httperrors.BodyValidationError(httperrors.Details{
			Field: "query",
			Error: "startDateTime and endDateTime query params are required",
		}).ErrorResponse()
		c.Status(statuscode).JSON(errresp)

		return nil
	}

	// Build request struct
	clickRequest := models.RetrieveClicksRequest{
		AdID:  adID,
		Start: startStr,
		End:   endStr,
	}

	// Call service
	clicks, err := h.service.RetrieveClicks(c, clickRequest)
	if err != nil {
		h.logger.Error("Error retrieving clicks", slog.Any("error", err))
		h.metrics.ErrorCounter.WithLabelValues(c.Method(), c.Path(), "500").Inc()

		statuscode, errresp := err.ErrorResponse()
		c.Status(statuscode).JSON(errresp)

		return nil
	}

	h.logger.Debug("Clicks analytics retrieved", slog.String("adID", adID))
	c.Status(fiber.StatusOK).JSON(models.Response{Data: clicks})
	return nil
}

func (h *handler) RetrieveAllClicks(c fiber.Ctx) error {
	// RetrieveAllClicks returns all click records.
	clicks, err := h.service.RetrieveAllClicks(c)
	if err != nil {
		h.logger.Error("Error retrieving all clicks", slog.Any("error", err))
		h.metrics.ErrorCounter.WithLabelValues(c.Method(), c.Path(), "500").Inc()

		statuscode, errresp := httperrors.NewServerError().ErrorResponse()
		c.Status(statuscode).JSON(errresp)

		return nil
	}
	h.logger.Debug("All clicks retrieved", slog.Int("count", len(clicks)))
	c.Status(fiber.StatusOK).JSON(models.Response{Data: clicks})
	return nil
}

func (h *handler) RetrieveAds(c fiber.Ctx) error {
	// RetrieveAds returns all ads.
	ads, err := h.service.RetrieveAds(c)
	if err != nil {
		h.logger.Error("Error retrieving ads", slog.Any("error", err))
		h.metrics.ErrorCounter.WithLabelValues(c.Method(), c.Path(), "500").Inc()

		statuscode, errresp := httperrors.NewServerError().ErrorResponse()
		c.Status(statuscode).JSON(errresp)

		return nil
	}

	h.logger.Debug("All ads retrieved", slog.Int("count", len(ads)))
	c.Status(fiber.StatusOK).JSON(models.Response{Data: ads})
	return nil
}
