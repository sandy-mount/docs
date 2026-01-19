---
title: PeerTube
description: Federated video hosting platform
---

# PeerTube

**Decentralized video platform.** YouTube alternative powered by ActivityPub and peer-to-peer streaming.

## Overview

PeerTube is a free, open-source video hosting platform that federates via ActivityPub. Started by Framasoft, it creates a network of interconnected video servers that share bandwidth through peer-to-peer technology.

## Key Features

### Federation

```
┌─────────────────────────────────────────────────────────┐
│                   PeerTube Network                       │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────┐        ┌──────────────┐               │
│  │  Instance A  │◄──────►│  Instance B  │               │
│  │  videos.org  │   AP   │  tube.social │               │
│  └──────┬───────┘        └──────┬───────┘               │
│         │                       │                        │
│         │    ActivityPub        │                        │
│         │                       │                        │
│  ┌──────▼───────┐        ┌──────▼───────┐               │
│  │  Instance C  │◄──────►│  Mastodon    │               │
│  │  peertube.io │        │  (comments)  │               │
│  └──────────────┘        └──────────────┘               │
│                                                          │
│  Videos on A appear in B's feed                         │
│  Mastodon users can comment on PeerTube videos          │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Peer-to-Peer Streaming

```
Traditional Video:
Server ───────────────► All viewers
         (bandwidth)

PeerTube P2P:
Server ──► Viewer A ──┐
              │       │
              ▼       ▼
         Viewer B ◄─► Viewer C

Viewers share pieces with each other
Server load stays low even when video goes viral
```

Technologies:
- **WebRTC** — Browser-to-browser streaming
- **HLS** — HTTP Live Streaming fallback
- **WebTorrent** — Peer-to-peer protocol

### Channel System

```
┌─────────────────────────────────────────┐
│           Your PeerTube Account          │
├─────────────────────────────────────────┤
│                                          │
│  Channel: Tech Tutorials                │
│  ├── Video: Linux Basics                │
│  ├── Video: Docker Guide                │
│  └── Followers: 1,234                   │
│                                          │
│  Channel: Gaming                        │
│  ├── Video: Game Review                 │
│  └── Followers: 567                     │
│                                          │
│  Channels can be followed via:          │
│  ├── PeerTube                           │
│  ├── Mastodon                           │
│  ├── Pleroma                            │
│  └── Any ActivityPub platform           │
│                                          │
└─────────────────────────────────────────┘
```

### Content Features

| Feature | Description |
|---------|-------------|
| **Videos** | Upload any format |
| **Live streaming** | Real-time broadcasts |
| **Playlists** | Organize videos |
| **Captions** | Subtitle support |
| **Comments** | Federated discussions |
| **Chapters** | Video sections |
| **Transcoding** | Automatic quality options |

## Self-Hosting

### Requirements

- Node.js 18+
- PostgreSQL
- Redis
- FFmpeg
- Storage (local or S3)

### Docker Installation

```yaml
# docker-compose.yml
version: '3'
services:
  peertube:
    image: chocobozzz/peertube:production-bookworm
    depends_on:
      - postgres
      - redis
    ports:
      - "9000:9000"
    volumes:
      - ./data:/data
      - ./config:/config
    environment:
      PEERTUBE_DB_USERNAME: peertube
      PEERTUBE_DB_PASSWORD: peertube
      PEERTUBE_WEBSERVER_HOSTNAME: tube.example.com
      PEERTUBE_WEBSERVER_PORT: 443
      PEERTUBE_WEBSERVER_HTTPS: true

  postgres:
    image: postgres:13-alpine
    volumes:
      - ./postgres:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: peertube
      POSTGRES_PASSWORD: peertube
      POSTGRES_DB: peertube

  redis:
    image: redis:6-alpine
```

### Configuration

```yaml
# config/production.yaml

webserver:
  https: true
  hostname: 'tube.example.com'
  port: 443

database:
  hostname: 'postgres'
  port: 5432
  name: 'peertube'
  username: 'peertube'
  password: 'peertube'

redis:
  hostname: 'redis'

smtp:
  hostname: 'smtp.example.com'
  port: 587
  username: 'noreply@example.com'
  password: 'password'
  from_address: 'noreply@example.com'

storage:
  videos: '/data/videos/'
  streaming_playlists: '/data/streaming-playlists/'

transcoding:
  enabled: true
  threads: 2
  resolutions:
    0p: false
    144p: false
    240p: true
    360p: true
    480p: true
    720p: true
    1080p: true
    1440p: false
    2160p: false
```

## Privacy & Moderation

### Instance Rules

Each instance sets its own policies:
- Content guidelines
- Registration (open, approval, closed)
- Federation policies
- NSFW handling

### Moderation Tools

| Tool | Description |
|------|-------------|
| **Video moderation** | Review uploads |
| **Auto-blacklist** | First upload review |
| **Reports** | User flagging |
| **Instance blocking** | Defederate |
| **User banning** | Account removal |
| **Plugins** | Extend moderation |

## Network Stats (2025)

| Metric | Value |
|--------|-------|
| Active instances | ~1,900 |
| Registered users | ~815,000 |
| Hosted videos | ~1,500,000 |

## Comparison with YouTube

| Aspect | PeerTube | YouTube |
|--------|----------|---------|
| Ownership | Distributed | Google |
| Algorithm | None | Heavy |
| Ads | Optional | Required |
| Data collection | Minimal | Extensive |
| Monetization | Donations/tips | Ad revenue |
| Censorship | Instance choice | Platform rules |
| Open source | Yes | No |

## Finding Instances

- **Sepia Search:** [search.joinpeertube.org](https://search.joinpeertube.org/) — Federated video search
- **Instance list:** [instances.joinpeertube.org](https://instances.joinpeertube.org/)

## Plugins

Extend PeerTube functionality:

| Plugin | Description |
|--------|-------------|
| **Auto-mute** | Automatic moderation |
| **RSS feed** | Enhanced feeds |
| **Video filters** | Content filtering |
| **Auth LDAP** | Enterprise login |
| **Analytics** | View statistics |

## Links

- **Website:** [joinpeertube.org](https://joinpeertube.org/)
- **GitHub:** [Chocobozzz/PeerTube](https://github.com/Chocobozzz/PeerTube)
- **Docs:** [docs.joinpeertube.org](https://docs.joinpeertube.org/)
- **Framasoft:** [framasoft.org](https://framasoft.org/)

## See Also

- [ActivityPub Protocol](/protocols/activitypub) — The protocol
- [Mastodon](/projects/mastodon) — Microblogging server
- [Pixelfed](/projects/pixelfed) — Image sharing
- [Federation](/concepts/federation) — The concept
