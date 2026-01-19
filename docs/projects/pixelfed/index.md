---
title: Pixelfed
description: Federated image sharing platform
---

# Pixelfed

**Decentralized Instagram alternative.** Photo and video sharing in the Fediverse.

## Overview

Pixelfed is a free, open-source image sharing platform that federates via ActivityPub. Created by Daniel Supernault in 2018, it provides an Instagram-like experience without algorithms, ads, or centralized control.

## Key Features

### Instagram-Style Interface

```
┌─────────────────────────────────────────────────────┐
│                   Pixelfed                           │
├─────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────┐│
│  │                                                  ││
│  │              📷 Your Photo Feed                  ││
│  │                                                  ││
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐        ││
│  │  │  📸     │  │  📸     │  │  📸     │        ││
│  │  │ Photo 1 │  │ Photo 2 │  │ Photo 3 │        ││
│  │  └─────────┘  └─────────┘  └─────────┘        ││
│  │                                                  ││
│  │  ♥️ 42 likes    💬 5 comments    ↗️ Share       ││
│  │                                                  ││
│  └─────────────────────────────────────────────────┘│
│                                                      │
│  🏠 Home    🔍 Discover    ➕ Post    ❤️    👤      │
└─────────────────────────────────────────────────────┘
```

### No Algorithm

- **Chronological timeline** — See posts in order
- **No content manipulation** — What you post is what followers see
- **No promoted content** — No ads or sponsored posts
- **No engagement tricks** — No infinite scroll manipulation

### Privacy-Focused

| Feature | Description |
|---------|-------------|
| **No tracking** | No third-party analytics |
| **GDPR compliant** | European privacy standards |
| **Data export** | Download your data |
| **Account migration** | Move to another instance |
| **Visibility controls** | Public, unlisted, followers-only |

### Federation

Connect with the entire Fediverse:

```
┌─────────────────────────────────────────────────────┐
│                    Fediverse                         │
├─────────────────────────────────────────────────────┤
│                                                      │
│   ┌──────────┐        ┌──────────┐                  │
│   │ Pixelfed │◄──────►│ Mastodon │                  │
│   │  📷      │   AP   │  💬      │                  │
│   └──────────┘        └──────────┘                  │
│        │                    │                        │
│        │    ActivityPub     │                        │
│        │                    │                        │
│   ┌────▼─────┐        ┌────▼─────┐                  │
│   │ PeerTube │        │ Pleroma  │                  │
│   │  🎬      │        │  💬      │                  │
│   └──────────┘        └──────────┘                  │
│                                                      │
│   Your Pixelfed posts appear in Mastodon feeds!     │
└─────────────────────────────────────────────────────┘
```

### Content Features

| Feature | Description |
|---------|-------------|
| **Photo posts** | Single or multiple images |
| **Stories** | Ephemeral content (24hr) |
| **Video** | Short video clips |
| **Collections** | Organize posts into albums |
| **Filters** | Image editing tools |
| **Alt text** | Accessibility support |
| **Hashtags** | Discover content |
| **Direct messages** | Private conversations |

## Platforms

### Mobile Apps (2025)

Official apps now available:

| Platform | Status |
|----------|--------|
| **Android** | Google Play — #1 in Social |
| **iOS** | App Store |

Third-party apps:
- PixelDroid (Android, F-Droid)
- Vernissage (iOS)

### Web Interface

Access any instance via browser at their domain.

## Self-Hosting

### Requirements

- PHP 8.1+
- MySQL/MariaDB or PostgreSQL
- Redis
- Nginx/Apache
- Composer
- Storage for media

### Docker Installation

```yaml
# docker-compose.yml
version: '3'
services:
  db:
    image: mariadb:10
    volumes:
      - ./mysql:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: pixelfed

  redis:
    image: redis:alpine

  app:
    image: pixelfed/pixelfed
    depends_on:
      - db
      - redis
    ports:
      - "8080:80"
    volumes:
      - ./storage:/var/www/storage
    environment:
      APP_NAME: "My Pixelfed"
      APP_URL: "https://pixelfed.example.com"
      DB_CONNECTION: mysql
      DB_HOST: db
      DB_DATABASE: pixelfed
```

### Manual Installation

```bash
# Clone
git clone https://github.com/pixelfed/pixelfed.git
cd pixelfed

# Install dependencies
composer install --no-dev

# Configure
cp .env.example .env
php artisan key:generate

# Edit .env with your settings

# Database
php artisan migrate --force
php artisan import:cities

# Storage
php artisan storage:link

# Optimize
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Configuration

```bash
# .env essential settings

APP_NAME="My Pixelfed"
APP_URL=https://pixelfed.example.com
APP_DOMAIN="pixelfed.example.com"

# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=pixelfed
DB_USERNAME=pixelfed
DB_PASSWORD=secret

# ActivityPub
ACTIVITY_PUB=true
AP_REMOTE_FOLLOW=true
AP_INBOX=true
AP_OUTBOX=true
AP_SHAREDINBOX=true

# Features
OPEN_REGISTRATION=true
ENFORCE_EMAIL_VERIFICATION=true
MAX_PHOTO_SIZE=15000  # KB
MAX_ALBUM_LENGTH=10
```

## Instance Discovery

Popular public instances:

| Instance | Focus |
|----------|-------|
| pixelfed.social | Flagship |
| pixelfed.art | Art/Artists |
| pix.diaspodon.fr | French community |
| pixel.tchncs.de | German tech |

Or run your own!

## Comparison with Instagram

| Aspect | Pixelfed | Instagram |
|--------|----------|-----------|
| Algorithm | None | Heavy |
| Ads | None | Many |
| Data ownership | You | Meta |
| Open source | Yes | No |
| Federation | Yes | No |
| Stories | Yes | Yes |
| Reels | No | Yes |
| Shopping | No | Yes |

## Links

- **Website:** [pixelfed.org](https://pixelfed.org/)
- **GitHub:** [pixelfed/pixelfed](https://github.com/pixelfed/pixelfed)
- **Docs:** [docs.pixelfed.org](https://docs.pixelfed.org/)
- **Find instances:** [fedidb.org/software/pixelfed](https://fedidb.org/software/pixelfed)

## See Also

- [ActivityPub Protocol](/protocols/activitypub) — The protocol
- [Mastodon](/projects/mastodon) — Microblogging server
- [Pleroma](/projects/pleroma) — Lightweight server
- [Federation](/concepts/federation) — The concept
