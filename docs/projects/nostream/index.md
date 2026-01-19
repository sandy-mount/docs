---
title: nostream
description: Nostr relay in TypeScript
---

# nostream

**Production-ready Nostr relay.** TypeScript implementation with PostgreSQL backend.

## Overview

nostream is a Nostr relay written in TypeScript, designed for production deployments. It uses PostgreSQL for storage, providing a robust and scalable solution for running your own relay.

## Key Features

### Production Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    nostream                              │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─────────────────────────────────────────────────────┐│
│  │              WebSocket Server                       ││
│  │         (handles client connections)                ││
│  └─────────────────────────────────────────────────────┘│
│                         │                                │
│                         ▼                                │
│  ┌─────────────────────────────────────────────────────┐│
│  │              Event Processing                       ││
│  │    (validation, rate limiting, filtering)          ││
│  └─────────────────────────────────────────────────────┘│
│                         │                                │
│                         ▼                                │
│  ┌─────────────────────────────────────────────────────┐│
│  │               PostgreSQL                            ││
│  │       (persistent event storage)                    ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### PostgreSQL Storage

| Benefit | Description |
|---------|-------------|
| **Reliability** | ACID compliance |
| **Scalability** | Handles large datasets |
| **Querying** | Complex filter support |
| **Backups** | Standard PostgreSQL tools |

### NIP Support

| NIP | Feature |
|-----|---------|
| NIP-01 | Basic protocol |
| NIP-02 | Contact lists |
| NIP-04 | Encrypted DMs |
| NIP-09 | Event deletion |
| NIP-11 | Relay information |
| NIP-12 | Generic tag queries |
| NIP-15 | End of stored events |
| NIP-16 | Event treatment |
| NIP-20 | Command results |
| NIP-22 | Event created_at limits |
| NIP-26 | Delegated events |
| NIP-28 | Public chat |
| NIP-33 | Parameterized replaceable |
| NIP-40 | Expiration timestamp |
| NIP-42 | Authentication |

### Payment Integration

Monetize your relay:

```yaml
payments:
  enabled: true
  processor: lnbits
  feeSchedules:
    admission:
      - amount: 1000
        description: "1 year access"
```

Support for:
- LNURL
- Zebedee
- LNbits
- nodeless

## Installation

### Docker (Recommended)

```yaml
# docker-compose.yml
version: '3'
services:
  nostream:
    image: cameri/nostream:latest
    depends_on:
      - postgres
      - redis
    ports:
      - "8008:8008"
    environment:
      RELAY_PORT: 8008
      DB_HOST: postgres
      DB_PORT: 5432
      DB_NAME: nostream
      DB_USER: nostream
      DB_PASSWORD: nostream
      REDIS_HOST: redis

  postgres:
    image: postgres:14-alpine
    volumes:
      - ./data/postgres:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: nostream
      POSTGRES_PASSWORD: nostream
      POSTGRES_DB: nostream

  redis:
    image: redis:7-alpine
```

### From Source

```bash
git clone https://github.com/Cameri/nostream.git
cd nostream

# Install dependencies
npm install

# Configure
cp .env.example .env
# Edit .env with your settings

# Run migrations
npm run db:migrate

# Start
npm start
```

## Configuration

### Basic Settings

```yaml
# settings.yaml

info:
  relay_url: wss://relay.example.com
  name: My Relay
  description: A nostream relay
  pubkey: <your-npub>
  contact: admin@example.com

limits:
  event:
    eventId:
      minLeadingZeroBits: 0
    kind:
      whitelist: []
      blacklist: []
    pubkey:
      minLeadingZeroBits: 0
      whitelist: []
      blacklist: []
    createdAt:
      maxPositiveDelta: 900
      maxNegativeDelta: 0

  message:
    rateLimits:
      - period: 60000
        rate: 60

  client:
    subscription:
      maxSubscriptions: 10
      maxFilters: 10
```

### Rate Limiting

```yaml
limits:
  message:
    rateLimits:
      - period: 60000    # 1 minute
        rate: 60         # 60 events
      - period: 3600000  # 1 hour
        rate: 1000       # 1000 events
```

### Event Filtering

```yaml
limits:
  event:
    kind:
      whitelist: [0, 1, 3, 4, 5, 6, 7]  # Only these kinds
      # or
      blacklist: [30000]                 # Block these kinds
```

## Comparison

| Feature | nostream | strfry |
|---------|----------|--------|
| Language | TypeScript | C++ |
| Database | PostgreSQL | LMDB |
| Memory usage | Higher | Lower |
| Query flexibility | High | Medium |
| Scaling | Horizontal | Vertical |
| Payments | Built-in | Plugin |

## Operations

### Monitoring

nostream provides metrics for:
- Connection counts
- Event throughput
- Database performance
- Error rates

### Backups

```bash
# PostgreSQL backup
pg_dump nostream > backup.sql

# Restore
psql nostream < backup.sql
```

### Scaling

- Run multiple nostream instances
- Use PostgreSQL replication
- Load balance with nginx

## Links

- **GitHub:** [Cameri/nostream](https://github.com/Cameri/nostream)
- **Docker Hub:** [cameri/nostream](https://hub.docker.com/r/cameri/nostream)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [strfry](/projects/strfry) — C++ relay alternative
- [Alby](/projects/alby) — Payment integration
