package models

import (
	"time"

	"github.com/google/uuid"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/syntaxLabz/errors/pkg/httperrors"
)

type ClickEvent struct {
	ClickID   string    `json:"clickId"`
	Name      string    `json:"name"`
	AdID      string    `json:"ad_id"`
	IP        string    `json:"ip"`
	Timestamp time.Time `json:"timestamp"`
}

type ClicksOverRange struct {
	AdID        string `json:"ad_id"`
	TotalClicks int    `json:"totalclicks"`
	Start       string `json:"startDateTime"`
	End         string `json:"endDateTime"`
}

type RetrieveClicksRequest struct {
	AdID  string `json:"ad_id"`
	Start string `json:"startDateTime"`
	End   string `json:"endDateTime"`
}

type Click struct {
	ID     string `json:"ad_id"`
	Name   string `json:"name"`
	Clicks string `json:"total_clicks"`
}

type Response struct {
	Data any `json:"data"`
}

type Ads struct {
	Id         uuid.UUID `json:"id"`
	Name       string    `json:"name"`
	CampaignId uuid.UUID `json:"campaignId"`
	Media      string    `json:"media"`
	CreatedAt  time.Time `json:"createdAt"`
}

type Metrics struct {
	RequestCounter  *prometheus.CounterVec
	RequestDuration *prometheus.HistogramVec
	ErrorCounter    *prometheus.CounterVec
	CacheHits       *prometheus.CounterVec
	CacheMisses     *prometheus.CounterVec
	EventsProcessed *prometheus.CounterVec
	EventsConsumed  *prometheus.CounterVec
}

// Validate checks if all fields in ClickEvent are present and valid.
func (c *ClickEvent) Validate() *httperrors.Error {
	if c.ClickID == "" || c.Name == "" || c.AdID == "" || c.IP == "" || c.Timestamp.IsZero() {
		return httperrors.BodyValidationError(httperrors.Details{
			Field: "ClickEvent",
			Error: "one or more required fields are missing",
		})
	}
	if _, err := uuid.Parse(c.ClickID); err != nil {
		return httperrors.BodyValidationError(httperrors.Details{
			Field: "clickId",
			Error: "must be a valid UUID",
		})
	}
	if _, err := uuid.Parse(c.AdID); err != nil {
		return httperrors.BodyValidationError(httperrors.Details{
			Field: "ad_id",
			Error: "must be a valid UUID",
		})
	}
	return nil
}
