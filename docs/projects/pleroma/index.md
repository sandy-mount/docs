---
title: Pleroma
description: Lightweight ActivityPub server
---

# Pleroma

**Lightweight, efficient ActivityPub server.** Run your own fediverse instance on minimal hardware.

## Overview

Pleroma is a free, open-source social networking server implementing ActivityPub. Known for its efficiency, Pleroma can run on low-power devices like a Raspberry Pi while still providing full fediverse compatibility.

## Key Features

### Lightweight Design

```
Resource Comparison (approximate):

Mastodon:  ████████████████████ 2GB+ RAM
Pleroma:   ████ 512MB RAM

Mastodon:  ████████████████████ Multi-container
Pleroma:   ████ Single binary

Perfect for:
- Raspberry Pi
- Low-cost VPS
- Personal instances
- Resource-constrained environments
```

### Full Federation

Pleroma federates with all ActivityPub servers:

```
┌──────────────────────────────────────────────────────┐
│                    Fediverse                          │
├──────────────────────────────────────────────────────┤
│                                                       │
│  ┌─────────┐  ┌──────────┐  ┌─────────┐            │
│  │Mastodon │  │  Pleroma │  │Pixelfed │            │
│  └────┬────┘  └────┬─────┘  └────┬────┘            │
│       │            │              │                  │
│       └────────────┼──────────────┘                  │
│                    │                                  │
│              ActivityPub                             │
│                    │                                  │
│       ┌────────────┼──────────────┐                  │
│       │            │              │                  │
│  ┌────┴────┐  ┌────┴─────┐  ┌────┴────┐            │
│  │PeerTube │  │ Misskey  │  │Friendica│            │
│  └─────────┘  └──────────┘  └─────────┘            │
│                                                       │
└──────────────────────────────────────────────────────┘
```

### Mastodon API Compatibility

Use any Mastodon client with Pleroma:

```javascript
// Same API works for both
const response = await fetch('https://pleroma.example/api/v1/timelines/home', {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
});
```

Supported clients:
- Tusky (Android)
- Toot! (iOS)
- Pinafore (Web)
- Fedilab (Android)
- Any Mastodon-compatible app

### Pleroma Extensions

Additional features beyond Mastodon API:

| Feature | Description |
|---------|-------------|
| **Custom reactions** | Emoji reactions on posts |
| **Quote posts** | Quote and comment |
| **Bookmark folders** | Organize bookmarks |
| **Rich media** | Better embed handling |
| **MRF** | Message Rewrite Facility |
| **Chat** | Pleroma-specific chat |

### Message Rewrite Facility (MRF)

Powerful moderation through content filtering:

```elixir
# Example MRF policy
defmodule Pleroma.Web.ActivityPub.MRF.SimplePolicy do
  # Reject from specific instances
  reject: ["spam.instance"],

  # Media removal
  media_removal: ["nsfw.instance"],

  # Followers-only enforcement
  followers_only: ["locked.instance"],

  # Report forwarding
  report_removal: []
end
```

## Technical Stack

| Component | Technology |
|-----------|------------|
| Language | Elixir |
| Framework | Phoenix |
| Database | PostgreSQL |
| Frontend | Pleroma-FE (Vue.js) |
| Protocol | ActivityPub |

## Installation

### OTP Releases (Recommended)

For Linux (glibc or musl) on x86/arm:

```bash
# Download latest release
wget https://git.pleroma.social/api/v4/projects/2/jobs/artifacts/stable/download?job=amd64-musl -O pleroma.zip

# Extract
unzip pleroma.zip -d /opt/pleroma

# Configure
cp /opt/pleroma/config/config.exs.example /opt/pleroma/config/prod.secret.exs

# Setup database
/opt/pleroma/bin/pleroma_ctl migrate

# Start
/opt/pleroma/bin/pleroma daemon
```

### From Source

```bash
# Clone
git clone https://git.pleroma.social/pleroma/pleroma.git
cd pleroma

# Install dependencies
mix deps.get

# Configure
cp config/dev.exs.example config/dev.secret.exs
# Edit config/dev.secret.exs

# Setup database
mix ecto.create
mix ecto.migrate

# Start
mix phx.server
```

### Docker

```yaml
# docker-compose.yml
version: '3'
services:
  db:
    image: postgres:14-alpine
    volumes:
      - ./postgres:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: pleroma
      POSTGRES_USER: pleroma
      POSTGRES_PASSWORD: pleroma

  pleroma:
    image: git.pleroma.social:5050/pleroma/pleroma
    depends_on:
      - db
    ports:
      - "4000:4000"
    volumes:
      - ./uploads:/var/lib/pleroma/uploads
      - ./static:/var/lib/pleroma/static
      - ./config.exs:/etc/pleroma/config.exs
```

### Package Managers

Available for:
- **YunoHost** — One-click install
- **NixOS** — Nix package
- **Arch Linux** — AUR
- **Gentoo** — GURU overlay

### Raspberry Pi

Flash the community-maintained image:
```bash
# Download from github.com/guysoft/PleromaPi
# Flash to SD card
# Boot and configure
```

## Configuration

### Basic Setup

```elixir
# config/prod.secret.exs

config :pleroma, Pleroma.Web.Endpoint,
  url: [host: "pleroma.example.com", scheme: "https", port: 443]

config :pleroma, :instance,
  name: "My Pleroma",
  email: "admin@example.com",
  description: "A cozy Pleroma instance",
  limit: 5000,  # Character limit
  registrations_open: true

config :pleroma, Pleroma.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "pleroma",
  password: "your_password",
  database: "pleroma",
  hostname: "localhost"
```

### Federation Settings

```elixir
config :pleroma, :mrf,
  policies: [
    Pleroma.Web.ActivityPub.MRF.SimplePolicy
  ]

config :pleroma, :mrf_simple,
  reject: [],
  accept: [],
  media_removal: [],
  media_nsfw: [],
  federated_timeline_removal: []
```

## Recent Updates (2.7+)

- **IPFS uploads** — Decentralized file storage
- **Bookmark categories** — Organize saves
- **Improved theming** — Better customization
- **Quote posts** — Added in 2.6
- **Custom emoji reactions** — Added in 2.6

## Comparison

| Feature | Pleroma | Mastodon | Misskey |
|---------|---------|----------|---------|
| Memory usage | ~500MB | ~2GB+ | ~1GB |
| Character limit | Configurable | 500 (default) | Configurable |
| Reactions | Custom emoji | ❤️ only | Custom |
| Quote posts | Yes | No | Yes |
| MRF | Yes | Limited | No |
| API | Mastodon + extensions | Mastodon | Own API |

## Links

- **Website:** [pleroma.social](https://pleroma.social/)
- **GitLab:** [git.pleroma.social/pleroma/pleroma](https://git.pleroma.social/pleroma/pleroma)
- **Docs:** [docs.pleroma.social](https://docs.pleroma.social/)

## See Also

- [ActivityPub Protocol](/protocols/activitypub) — The protocol
- [Mastodon](/projects/mastodon) — Larger ActivityPub server
- [Federation](/concepts/federation) — The concept
- [Ditto](/projects/ditto) — Nostr + ActivityPub bridge
