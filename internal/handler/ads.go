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
		return c.Status(statuscode).JSON(errresp)
	}

	//schema validation
	if validationError := evt.Validate(); validationError != nil {
		h.logger.Error("Click event validation failed", slog.Any("error", validationError))
		h.metrics.ErrorCounter.WithLabelValues(c.Method(), c.Path(), "422").Inc()
		statuscode, errresp := validationError.ErrorResponse()
		return c.Status(statuscode).JSON(errresp)
	}

	// Marshal event to JSON
	data, err := json.Marshal(evt)
	if err != nil {
		h.logger.Error("Failed to marshal click event", slog.Any("error", err))
		h.metrics.ErrorCounter.WithLabelValues(c.Method(), c.Path(), "500").Inc()
		statuscode, errresp := httperrors.NewServerError().ErrorResponse()
		return c.Status(statuscode).JSON(errresp)
	}

	// Publish event asynchronously
	go func() {
		err := h.producer.Publish(context.Background(), []byte(evt.AdID), data)
		if err != nil {
			h.logger.Error("Failed to publish click event", slog.Any("error", err))
		}
	}()

	h.logger.Info("Click event received", slog.String("adID", evt.AdID))

	return c.Status(fiber.StatusOK).JSON(models.Response{Data: "click event received"})
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
		return c.Status(statuscode).JSON(errresp)
	}

	// Extract query params
	startStr := c.Query("start")
	endStr := c.Query("end")

	if startStr == "" || endStr == "" {
		h.logger.Warn("Missing start or end query param")
		h.metrics.ErrorCounter.WithLabelValues(c.Method(), c.Path(), "400").Inc()
		statuscode, errresp := httperrors.BodyValidationError(httperrors.Details{
			Field: "query",
			Error: "start and end query params are required",
		}).ErrorResponse()
		return c.Status(statuscode).JSON(errresp)
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
		return c.Status(statuscode).JSON(errresp)
	}

	h.logger.Info("Clicks analytics retrieved", slog.String("adID", adID))
	return c.Status(fiber.StatusOK).JSON(models.Response{Data: clicks})
}

func (h *handler) RetrieveAllClicks(c fiber.Ctx) error {
	// RetrieveAllClicks returns all click records.
	clicks, err := h.service.RetrieveAllClicks(c)
	if err != nil {
		h.logger.Error("Error retrieving all clicks", slog.Any("error", err))
		h.metrics.ErrorCounter.WithLabelValues(c.Method(), c.Path(), "500").Inc()
		statuscode, errresp := httperrors.NewServerError().ErrorResponse()
		return c.Status(statuscode).JSON(errresp)
	}
	h.logger.Info("All clicks retrieved", slog.Int("count", len(clicks)))
	return c.Status(fiber.StatusOK).JSON(models.Response{Data: clicks})
}

func (h *handler) RetrieveAds(c fiber.Ctx) error {
	// RetrieveAds returns all ads.
	ads, err := h.service.RetrieveAds(c)
	if err != nil {
		h.logger.Error("Error retrieving ads", slog.Any("error", err))
		h.metrics.ErrorCounter.WithLabelValues(c.Method(), c.Path(), "500").Inc()
		statuscode, errresp := httperrors.NewServerError().ErrorResponse()
		return c.Status(statuscode).JSON(errresp)
	}

	h.logger.Info("All ads retrieved", slog.Int("count", len(ads)))
	return c.Status(fiber.StatusOK).JSON(models.Response{Data: ads})
}
