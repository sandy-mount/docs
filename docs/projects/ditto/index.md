---
sidebar_position: 1
title: Ditto
description: Cross-protocol bridge - ActivityPub ↔ Nostr
---

# Ditto

**A social media server bridging Nostr and the Fediverse.** Post once, reach both networks. Built by Soapbox.

## Overview

Ditto is more than a bridge — it's a full social media server built on Nostr that speaks ActivityPub. It implements the Mastodon API, meaning 50+ existing Mastodon apps work with it out of the box.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                        Ditto                             │
├─────────────────────────────────────────────────────────┤
│   Mastodon API    │    Nostr Relay    │   Mostr Bridge  │
│   (compatibility) │    (built-in)     │   (AP ↔ Nostr)  │
├─────────────────────────────────────────────────────────┤
│                    Nostr Protocol                        │
└─────────────────────────────────────────────────────────┘
         │                                    │
         ▼                                    ▼
┌─────────────────┐                ┌─────────────────┐
│  Nostr Network  │                │    Fediverse    │
│  (relays)       │                │  (AP servers)   │
└─────────────────┘                └─────────────────┘
```

## Key Features

### Built-in Nostr Relay
Ditto includes a full Nostr relay. Your community's posts are stored locally and replicated to the broader Nostr network.

### Mastodon API Compatible
Since Ditto implements the Mastodon API, you can use:
- **Tusky** (Android)
- **Ice Cubes** (iOS)
- **Pinafore** (Web)
- **Elk** (Web)
- And 50+ other Mastodon clients

### Mostr Bridge
The Mostr bridge translates between protocols:

| Direction | What Happens |
|-----------|--------------|
| **Nostr → Fediverse** | Your Nostr posts appear on Mastodon, Pleroma, Misskey |
| **Fediverse → Nostr** | Follow Fediverse users from Nostr clients |
| **Replies** | Comments bridge both ways |
| **Reactions** | Likes translate to reactions |

### Additional Bridges
- **Bluesky** — Via Bridgy Fed integration
- **More coming** — Extensible bridge architecture

### Self-Service NIP-05
Users can claim `username@yourdomain.com` identifiers directly, no admin intervention needed.

### Bitcoin Lightning
Built-in support for Lightning payments and zaps.

### Custom Branding
Customize themes, logos, and styling for your community.

## Why Use Ditto?

### For Community Builders
- Host your own social network
- Your community, your rules
- No ads, no tracking
- Data portability via Nostr

### For Users
- One account, multiple networks
- Use familiar Mastodon apps
- Keep your Nostr identity
- Censorship-resistant foundation

### For Developers
- Open source (AGPL-3.0)
- Modular architecture
- Well-documented APIs
- Active development

## Quick Start

### Using Docker (Recommended)
```bash
# Clone the repository
git clone https://github.com/soapbox-pub/ditto.git
cd ditto

# Configure
cp .env.example .env
# Edit .env with your settings

# Start
docker-compose up -d
```

### Using Deno
```bash
# Install Deno
curl -fsSL https://deno.land/install.sh | sh

# Clone and run
git clone https://github.com/soapbox-pub/ditto.git
cd ditto
deno task start
```

## Configuration

Key configuration options:

```env
# Domain settings
DITTO_DOMAIN=social.example.com

# Database
DATABASE_URL=postgres://user:pass@localhost/ditto

# Nostr settings
DITTO_NSEC=nsec1...  # Server's Nostr identity

# Bridge settings
MOSTR_ENABLED=true
```

## Recent Updates (Ditto 1.3+)

- **Explore Tab** — Discover people and posts across Nostr
- **Improved Search** — Find users and content more easily
- **Event Fetching** — Better relay coordination
- **Cashu Nutzaps** — Coming soon: wallet integration

## Comparison

| Feature | Mastodon | Ditto |
|---------|----------|-------|
| Protocol | ActivityPub only | Nostr + ActivityPub |
| Identity | Server-bound | Portable (Nostr keys) |
| Censorship resistance | Moderate | High |
| App compatibility | Native | Via Mastodon API |
| Self-hosting | Complex | Simpler |

## Links

- **Website:** [soapbox.pub/ditto](https://soapbox.pub/ditto)
- **Docs:** [docs.soapbox.pub/ditto](https://docs.soapbox.pub/ditto/install/)
- **GitHub:** [soapbox-pub/ditto](https://github.com/soapbox-pub/ditto)
- **Blog:** [Ditto Announcements](https://soapbox.pub/blog/ditto-1.3/)

## See Also

- [ActivityPub Protocol](/protocols/activitypub) — Federation protocol
- [Nostr Protocol](/protocols/nostr) — Event protocol
- [Federation](/concepts/federation) — The concept
- [FedBox](/projects/fedbox) — Alternative AP server
