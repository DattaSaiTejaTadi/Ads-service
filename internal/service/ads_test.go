package service

import (
	"testing"
	"time"

	"ads-service/internal/models"
	"log/slog"

	"github.com/gofiber/fiber/v3"
	"github.com/syntaxLabz/errors/pkg/httperrors"
)

type mockCache struct {
	clicks []models.Click
	count  int64
	err    *httperrors.Error
}

func (m *mockCache) GetCountForTimeRange(ctx fiber.Ctx, adID string, start, end int64) (int64, *httperrors.Error) {
	return m.count, m.err
}
func (m *mockCache) RetrieveAllClicks(ctx fiber.Ctx) ([]models.Click, *httperrors.Error) {
	return m.clicks, m.err
}

type mockStore struct {
	ads   []models.Ads
	count int
	err   *httperrors.Error
}

func (m *mockStore) RetrieveClickCountForTimeRange(ctx fiber.Ctx, adID string, start, end time.Time) (int, *httperrors.Error) {
	return m.count, m.err
}
func (m *mockStore) RetrieveAds(ctx fiber.Ctx) ([]models.Ads, *httperrors.Error) {
	return m.ads, m.err
}

func TestRetrieveClicks(t *testing.T) {
	logger := slog.Default()
	cache := &mockCache{count: 10}
	store := &mockStore{count: 5}
	svc := NewAdsService(cache, logger, store)

	// Valid range, start < today, should use store
	req := models.RetrieveClicksRequest{
		AdID:  "test-ad",
		Start: time.Now().AddDate(0, 0, -1).Format(time.RFC3339),
		End:   time.Now().Format(time.RFC3339),
	}
	clicks, err := svc.RetrieveClicks(nil, req)
	if err != nil {
		t.Errorf("expected nil error, got %v", err)
	}
	if clicks.TotalClicks != 5 {
		t.Errorf("expected 5 clicks, got %d", clicks.TotalClicks)
	}

	// Valid range, start >= today, should use cache
	req = models.RetrieveClicksRequest{
		AdID:  "test-ad",
		Start: time.Now().Format(time.RFC3339),
		End:   time.Now().Add(time.Hour).Format(time.RFC3339),
	}
	clicks, err = svc.RetrieveClicks(nil, req)
	if err != nil {
		t.Errorf("expected nil error, got %v", err)
	}
	if clicks.TotalClicks != 10 {
		t.Errorf("expected 10 clicks, got %d", clicks.TotalClicks)
	}

	// Invalid time format
	req = models.RetrieveClicksRequest{
		AdID:  "test-ad",
		Start: "invalid",
		End:   time.Now().Format(time.RFC3339),
	}
	_, err = svc.RetrieveClicks(nil, req)
	if err == nil {
		t.Errorf("expected error for invalid start time")
	}

	// start >= end
	now := time.Now().Format(time.RFC3339)
	req = models.RetrieveClicksRequest{
		AdID:  "test-ad",
		Start: now,
		End:   now,
	}
	_, err = svc.RetrieveClicks(nil, req)
	if err == nil {
		t.Errorf("expected error for start >= end")
	}
}

func TestRetrieveAllClicks(t *testing.T) {
	logger := slog.Default()
	cache := &mockCache{clicks: []models.Click{{ID: "ad1", Name: "A", Clicks: "5"}}}
	svc := NewAdsService(cache, logger, nil)

	clicks, err := svc.RetrieveAllClicks(nil)
	if err != nil {
		t.Errorf("expected nil error, got %v", err)
	}
	if len(clicks) != 1 {
		t.Errorf("expected 1 click, got %d", len(clicks))
	}

	// Error case
	cache.err = httperrors.NewServerError()
	_, err = svc.RetrieveAllClicks(nil)
	if err == nil {
		t.Errorf("expected error, got nil")
	}
}

func TestRetrieveAds(t *testing.T) {
	logger := slog.Default()
	store := &mockStore{ads: []models.Ads{{Name: "Ad1"}}}
	svc := NewAdsService(nil, logger, store)

	ads, err := svc.RetrieveAds(nil)
	if err != nil {
		t.Errorf("expected nil error, got %v", err)
	}
	if len(ads) != 1 {
		t.Errorf("expected 1 ad, got %d", len(ads))
	}

	// Error case
	store.err = httperrors.NewServerError()
	_, err = svc.RetrieveAds(nil)
	if err == nil {
		t.Errorf("expected error, got nil")
	}
}
