CREATE TABLE ads (
    ad_id   UUID PRIMARY KEY,
    name   TEXT,
    campaign_id   UUID, -- user who owns the ad
    media_url   TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
