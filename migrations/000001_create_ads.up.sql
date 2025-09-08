CREATE TABLE ads (
    ad_id   UUID PRIMARY KEY,
    name   TEXT,
    campaign_id   UUID, -- user who owns the ad
    media_url   TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO ads (ad_id, name, campaign_id, media_url, created_at) VALUES
('74bb7845-5133-4d7e-bfc4-30747fe38f1d', 'Ad One', '11111111-1111-1111-1111-111111111111', 'https://example.com/media/ad1.png', NOW()),
('64bb7845-5133-4d7e-bfc4-30747fe38f1d', 'Ad Two', '22222222-2222-2222-2222-222222222222', 'https://example.com/media/ad2.png', NOW()),
('12c9a5a1-2f2b-4c3d-8e9a-1b2c3d4e5f60', 'Ad Three', '33333333-3333-3333-3333-333333333333', 'https://example.com/media/ad3.png', NOW()),
('23d9b6b2-3a3c-4d4e-9f0b-2c3d4e5f6a71', 'Ad Four', '44444444-4444-4444-4444-444444444444', 'https://example.com/media/ad4.png', NOW()),
('34e0c7c3-4b4d-5e5f-0a1c-3d4e5f6a7b82', 'Ad Five', '55555555-5555-5555-5555-555555555555', 'https://example.com/media/ad5.png', NOW());
