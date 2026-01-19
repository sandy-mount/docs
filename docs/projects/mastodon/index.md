---
title: Mastodon
description: Self-hosted ActivityPub social networking
---

# Mastodon

**The leading ActivityPub server implementation.** Self-hosted, federated microblogging.

## Overview

Mastodon is the flagship of the Fediverse — a decentralized social network where anyone can run their own server while remaining connected to the broader network via ActivityPub.

## Key Features

### Federation

```
┌─────────────────┐         ┌─────────────────┐
│  mastodon.social│         │ fosstodon.org   │
│    (Server A)   │◄───────►│   (Server B)    │
└────────┬────────┘   AP    └────────┬────────┘
         │                           │
         │ Your posts               │ Their posts
         │ reach their             │ appear in
         │ followers               │ your feed
         ▼                           ▼
┌─────────────────────────────────────────────┐
│           Unified Social Experience          │
└─────────────────────────────────────────────┘
```

- **Choose your server** — Join any instance or run your own
- **Follow anyone** — Across any ActivityPub server
- **No lock-in** — Move servers, keep followers
- **Interoperable** — Works with Pleroma, Pixelfed, PeerTube, etc.

### Content Features

- **500 character posts** (default, configurable)
- **Content warnings** — Hide sensitive content
- **Image descriptions** — Accessibility support
- **Polls** — Multiple choice voting
- **Threads** — Long-form via reply chains
- **Bookmarks** — Save posts privately
- **Lists** — Organize follows

### Privacy Controls

| Visibility | Who sees it |
|------------|-------------|
| **Public** | Everyone, appears in feeds |
| **Unlisted** | Anyone with link, not in feeds |
| **Followers-only** | Only your followers |
| **Direct** | Only mentioned users |

### Moderation

- **Server-level rules** — Each instance sets policies
- **User controls** — Mute, block, filter
- **Report system** — Flag problematic content
- **Domain blocks** — Defederate from bad actors
- **Secure mode** — Require signed requests

## Self-Hosting

### Why Self-Host?

- **Complete control** — Your rules, your moderation
- **Custom branding** — Your domain, your identity
- **No algorithm** — Chronological by default
- **Privacy** — Your data on your server
- **Independence** — Can't be deplatformed

### Requirements

- **Domain name** — your-instance.social
- **Server** — VPS, dedicated, or cloud
- **PostgreSQL** — Database
- **Redis** — Caching
- **Storage** — For media (S3 optional)

### Docker Deployment

```yaml
# docker-compose.yml
version: '3'
services:
  db:
    image: postgres:14-alpine
    volumes:
      - ./postgres:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: password

  redis:
    image: redis:7-alpine

  web:
    image: tootsuite/mastodon
    command: bash -c "rm -f /mastodon/tmp/pids/server.pid; bundle exec rails s -p 3000"
    depends_on:
      - db
      - redis
    ports:
      - "3000:3000"
    volumes:
      - ./public/system:/mastodon/public/system
```

### Configuration

```bash
# .env.production

# Federation
LOCAL_DOMAIN=your-instance.social
WEB_DOMAIN=your-instance.social

# Database
DB_HOST=db
DB_USER=mastodon
DB_PASS=password
DB_NAME=mastodon_production

# Redis
REDIS_HOST=redis

# Secrets (generate with rake secret)
SECRET_KEY_BASE=...
OTP_SECRET=...

# Storage (optional S3)
S3_ENABLED=true
S3_BUCKET=your-bucket
```

## ActivityPub Implementation

Mastodon fully implements:

- **Server-to-Server** — Federation with other instances
- **Client-to-Server** — API for clients
- **WebFinger** — User discovery (@user@domain)
- **HTTP Signatures** — Request authentication

### Mastodon API

Third-party apps use the REST API:

```javascript
// Fetch home timeline
const response = await fetch('https://mastodon.social/api/v1/timelines/home', {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
});

const posts = await response.json();
```

Many Nostr apps (like Ditto) implement the Mastodon API for compatibility.

## Comparison with Nostr

| Aspect | Mastodon | Nostr |
|--------|----------|-------|
| Identity | Server-based | Key-based |
| Data location | Server stores | Relays store |
| Migration | Possible, complex | Easy (keys) |
| Moderation | Server admins | Client-side |
| Protocol | ActivityPub | Nostr |

## Bridging

Connect Mastodon to Nostr via [Ditto](/projects/ditto) or Mostr:

```
Nostr user ──► Mostr bridge ──► Mastodon
                    │
                    ▼
            Appears as @user@mostr.pub
```

## Popular Instances

| Instance | Focus |
|----------|-------|
| mastodon.social | General (flagship) |
| fosstodon.org | Open source |
| infosec.exchange | Security |
| hachyderm.io | Tech |
| mas.to | General |

Or run your own!

## Links

- **Website:** [joinmastodon.org](https://joinmastodon.org/)
- **GitHub:** [mastodon/mastodon](https://github.com/mastodon/mastodon)
- **Docs:** [docs.joinmastodon.org](https://docs.joinmastodon.org/)
- **Find instances:** [instances.social](https://instances.social/)

## See Also

- [ActivityPub Protocol](/protocols/activitypub) — The protocol
- [Federation](/concepts/federation) — The concept
- [Ditto](/projects/ditto) — Nostr + ActivityPub bridge
- [FedBox](/projects/fedbox) — Generic AP server
