
# Ads Click Tracking API

[![Go Version](https://img.shields.io/badge/Go-1.19+-00ADD8?style=flat&logo=go)](https://golang.org/) [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13+-316192?style=flat&logo=postgresql)](https://postgresql.org/) [![Redis](https://img.shields.io/badge/Redis-6+-DC382D?style=flat&logo=redis)](https://redis.io/) [![Apache Kafka](https://img.shields.io/badge/Apache%20Kafka-2.8+-231F20?style=flat&logo=apache-kafka)](https://kafka.apache.org/)

A high-performance backend system for tracking ad clicks, storing events, and generating real-time analytics. Built with **Go**, **PostgreSQL**, **Redis**, and **Kafka** to handle high-throughput click streams efficiently.

## Table of Contents

-   [Features](https://claude.ai/chat/7b8dd621-9e9c-4a9e-9070-07a44d6fb245#features)
-   [Architecture](https://claude.ai/chat/7b8dd621-9e9c-4a9e-9070-07a44d6fb245#architecture)
-   [Installation](https://claude.ai/chat/7b8dd621-9e9c-4a9e-9070-07a44d6fb245#installation)
-   [Configuration](https://claude.ai/chat/7b8dd621-9e9c-4a9e-9070-07a44d6fb245#configuration)
-   [API Documentation](https://claude.ai/chat/7b8dd621-9e9c-4a9e-9070-07a44d6fb245#api-documentation)
-   [Design Overview](https://claude.ai/chat/7b8dd621-9e9c-4a9e-9070-07a44d6fb245#design-overview)
-   [Performance Testing](https://claude.ai/chat/7b8dd621-9e9c-4a9e-9070-07a44d6fb245#performance-testing)
-   [Contributing](https://claude.ai/chat/7b8dd621-9e9c-4a9e-9070-07a44d6fb245#contributing)
-   [License](https://claude.ai/chat/7b8dd621-9e9c-4a9e-9070-07a44d6fb245#license)

## Features

-   🚀 **High-throughput** click event processing
-   📊 **Real-time analytics** with time-range queries
-   🔄 **Kafka-based** event streaming
-   ⚡ **Redis caching** for fast data retrieval
-   🗄️ **PostgreSQL** for persistent storage
-   🛡️ **Request validation** and error handling
-   🔧 **Docker support** for easy deployment
-   📈 **Load tested** up to 90k events in 50 seconds

## Architecture

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Client    │───▶│  API Layer  │───▶│   Kafka     │
└─────────────┘    └─────────────┘    └─────────────┘
                           │                   │
                           ▼                   ▼
                   ┌─────────────┐    ┌─────────────┐
                   │   Redis     │    │  Consumer   │
                   │   Cache     │    │ Worker Pool │
                   └─────────────┘    └─────────────┘
                           ▲                   │
                           │                   ▼
                           └───────────┌─────────────┐
                                      │ PostgreSQL  │
                                      │  Database   │
                                      └─────────────┘

```

## Installation

### Prerequisites

-   Go 1.19 or higher
-   Docker and Docker Compose
-   PostgreSQL 13+
-   Redis 6+
-   Apache Kafka 2.8+

### Using Docker

1.  Clone the repository:

```bash
git clone https://github.com/your-username/ads-click-tracking.git
cd ads-click-tracking

```

2.  Build and run with Docker:

```bash
docker build -t ads-click-api .
docker run --env-file ./configs/.env -p 8080:8080 ads-click-api

```

### Manual Setup

1.  Install dependencies:

```bash
go mod download

```

2.  Set up your environment variables (see [Configuration](https://claude.ai/chat/7b8dd621-9e9c-4a9e-9070-07a44d6fb245#configuration))
    
3.  Run the application:
    

```bash
go run main.go

```

## Configuration

### Environment Variables

Create a `.env` file in the `/configs` folder with the following variables:

```env
# Database Configuration
DB_HOST=localhost
DB_PASSWORD=example
DB_USER=postgres
DB_PORT=5432
DB_DIALECT=postgres
DB_NAME=ads
DB_SSL=disable

# Redis Configuration
REDIS_ADDR=localhost:6379
REDIS_PASSWORD=
REDIS_DB=0

# Server Configuration
PORT=8080

# Kafka Configuration
KAFKA_ADDRESS=localhost:9092
KAFKA_TOPIC=clicks

```

### Docker Compose (Optional)

For a complete development setup with all dependencies:

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:13
    environment:
      POSTGRES_DB: ads
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: example
    ports:
      - "5432:5432"
  
  redis:
    image: redis:6-alpine
    ports:
      - "6379:6379"
  
  kafka:
    image: confluentinc/cp-kafka:latest
    environment:
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
    ports:
      - "9092:9092"

```

## API Documentation

### Base URL

```
http://localhost:8080

```

### Endpoints

#### 1. Get All Ads

Retrieve metadata for all ads.

**Request:**

```bash
GET /ads

```

**Response:**

```json
{
  "data": [
    {
      "id": "74bb7845-5133-4d7e-bfc4-30747fe38f1d",
      "name": "Ad One",
      "campaignId": "11111111-1111-1111-1111-111111111111",
      "media": "https://example.com/media/ad1.png",
      "createdAt": "2025-09-06T17:02:09.623528Z"
    }
  ]
}

```

#### 2. Get All Ads Analytics

Retrieve total clicks for all ads.

**Request:**

```bash
GET /ads/analytics

```

**Response:**

```json
{
  "data": [
    {
      "ad_id": "44bb7845-5133-4d7e-bfc4-30747fe38f1d",
      "name": "mc donals",
      "total_clicks": "2"
    },
    {
      "ad_id": "64bb7845-5133-4d7e-bfc4-30747fe38f1d",
      "name": "clash of clans",
      "total_clicks": "184505"
    }
  ]
}

```

#### 3. Get Analytics for Specific Ad

Retrieve clicks for a specific ad within a time range.

**Request:**

```bash
GET /ads/{ad_id}/analytics?start={start_time}&end={end_time}

```

**Parameters:**

-   `ad_id` (required): UUID of the ad
-   `start` (required): Start timestamp in RFC3339 format
-   `end` (required): End timestamp in RFC3339 format

**Example:**

```bash
curl "http://localhost:8080/ads/64bb7845-5133-4d7e-bfc4-30747fe38f1d/analytics?start=2025-09-05T10%3A00%3A00Z&end=2025-09-06T10%3A05%3A00Z"

```

**Response:**

```json
{
  "data": {
    "ad_id": "64bb7845-5133-4d7e-bfc4-30747fe38f1d",
    "totalclicks": 180905,
    "start": "2025-09-05T10:00:00Z",
    "end": "2025-09-06T10:05:00Z"
  }
}

```

#### 4. Publish Click Event

Publish a new ad click event to the system.

**Request:**

```bash
POST /ads/click
Content-Type: application/json

```

**Body:**

```json
{
  "clickId": "5dbb7845-5133-4d7e-bfc4-30ea7fe38f1f",
  "ad_id": "44bb7845-5133-4d7e-bfc4-30747fe38f1d",
  "name": "mc donalds",
  "ip": "127.0.0.1",
  "timestamp": "2025-09-06T00:37:45.123Z"
}

```

**Response:**

```json
{
  "data": "click event received"
}

```

### Error Responses

All endpoints return standardized error responses:

```json
{
  "errors": {
    "code": "BAD_REQUEST",
    "message": "Body validation failed.",
    "details": [
      {
        "field": "end",
        "error": "parsing time \"2025-09-06T1\" as \"2006-01-02T15:04:05Z07:00\": cannot parse \"\" as \":\""
      }
    ],
    "timestamp": "2025-09-06T17:03:27Z"
  }
}

```

## Design Overview

### Consumer Architecture

The system uses a **worker pool pattern** for high-throughput event consumption:

-   **Kafka Consumer**: Processes click events from Kafka topics
-   **Redis Pipeline**: Enables fast batch writes to Redis cache
-   **PostgreSQL Bulk Insert**: Efficiently stores events in the database
-   **Duplicate Detection**: Both Redis and PostgreSQL consumers check for duplicate records

### API Layer

-   **REST Endpoints**: Clean, RESTful API design
-   **Request Validation**: Comprehensive payload and query parameter validation
-   **Consistent Responses**: Standardized success and error response formats
-   **Error Handling**: Detailed error messages with field-level validation

### Data Flow

1.  **Click Event**: Client sends click event to `/ads/click` endpoint
2.  **Kafka Publishing**: Event is published to Kafka topic
3.  **Consumer Processing**: Worker pool consumes events from Kafka
4.  **Caching**: Events are cached in Redis for fast retrieval
5.  **Persistence**: Events are bulk-inserted into PostgreSQL
6.  **Analytics**: Real-time analytics are served from both Redis and PostgreSQL

## Performance Testing

Comprehensive load testing was performed using **Apache JMeter**:

```
┌───────┬────────────┬──────────────┬──────────┬──────────────┐
│ Users │ Iterations │ Total Events │ Duration │ Result       │
├───────┼────────────┼──────────────┼──────────┼──────────────┤
│  100  │    100     │   10,000     │ ~50 sec  │ ✅ Success   │
│  200  │    200     │   40,000     │ ~50 sec  │ ✅ Success   │
│  300  │    300     │   90,000     │ ~50 sec  │ ✅ Success   │
└───────┴────────────┴──────────────┴──────────┴──────────────┘

```

### Test Scenarios

Each test simulated the complete flow:

1.  **Publishing** click events via REST API
2.  **Consuming** events from Kafka
3.  **Storing** events in Redis and PostgreSQL
4.  **Querying** analytics data

### Results

-   ✅ Successfully handled up to **90,000 events** in ~50 seconds
-   ✅ Zero failures or data loss during peak load
-   ✅ Consistent response times under high concurrency
-   ✅ Efficient resource utilization across all components

## Contributing

1.  Fork the repository
2.  Create a feature branch (`git checkout -b feature/amazing-feature`)
3.  Commit your changes (`git commit -m 'Add some amazing feature'`)
4.  Push to the branch (`git push origin feature/amazing-feature`)
5.  Open a Pull Request

----------

## Summary

This **Ads Click Tracking API** provides:

-   🎯 **High-performance** click tracking with Kafka as message broker
-   ⚡ **Worker pools** and **dual storage** (Redis + PostgreSQL) for optimal throughput
-   🔄 **Event-driven architecture** with API layer publishing to Kafka only
-   📊 **Real-time analytics** with flexible time-range queries
-   🧪 **Load tested** and proven to handle 90k+ events efficiently
-   🐳 **Docker-ready** for easy deployment and scaling

Perfect for applications requiring real-time ad performance monitoring and analytics at scale.