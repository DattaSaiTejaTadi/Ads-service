CREATE TABLE ad_clicks (
    click_id     UUID        NOT NULL,
    ad_id        UUID        NOT NULL,
    name        VARCHAR(30) NOT NULL,
    ip           INET        NOT NULL,
    ts           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (click_id, ad_id, ip)
);
