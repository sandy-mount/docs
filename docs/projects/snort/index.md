---
title: Snort
description: Feature-packed Nostr web client
---

# Snort

**Feature-packed Nostr web UI.** Fast, decentralized, and accessible from any browser.

## Overview

Snort is a web-based Nostr client built with React, focusing on speed and efficiency while offering a comprehensive feature set. No app download required — just open your browser and go.

## Key Features

### Web-First Design

```
┌─────────────────────────────────────────────────────┐
│                    Browser                           │
│  ┌─────────────────────────────────────────────────┐│
│  │               snort.social                       ││
│  ├─────────────────────────────────────────────────┤│
│  │  ┌─────────┐  ┌──────────┐  ┌────────────────┐ ││
│  │  │  Feed   │  │ Messages │  │  Notifications │ ││
│  │  └─────────┘  └──────────┘  └────────────────┘ ││
│  │                                                  ││
│  │  Works on: Desktop, Mobile, Any OS              ││
│  └─────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────┘
```

- **No installation** — Runs in any modern browser
- **Cross-platform** — Desktop, tablet, phone
- **Light & fast** — Optimized React codebase
- **Responsive** — Adapts to screen size

### Content Features

| Feature | Description |
|---------|-------------|
| **Posts** | Full microblogging support |
| **Media** | Images, videos, audio |
| **Zaps** | Lightning payments |
| **DMs** | Encrypted messages |
| **Reactions** | Custom emoji support |
| **Bookmarks** | Save posts |
| **Lists** | Organize follows |

### Recent Updates (v0.3+)

- **Redesigned relay management** — Better relay UI
- **Relay uptime reporting** — via nostr.watch NIP
- **New note designer** — Media attachment UI
- **NIP-96 media browser** — Upload via server list
- **NIP-89 app handlers** — Unknown event support
- **Web of Trust filter** — Filter replies by WoT
- **Trending widgets** — People, articles sidebar
- **NIP-55 Amber signer** — Android signing support
- **Profile QR codes** — npub/nprofile selector

### Key Management

Use with browser extensions for secure signing:

```
┌─────────────────┐         ┌─────────────────┐
│     Snort       │◄───────►│  Alby / nos2x   │
│  (web client)   │ NIP-07  │   (extension)   │
└─────────────────┘         └────────┬────────┘
                                     │
                                     │ Keys stored
                                     │ in extension
                                     ▼
                            ┌─────────────────┐
                            │ Browser Storage │
                            └─────────────────┘
```

Supported signers:
- **Alby** — Lightning + Nostr
- **nos2x** — Simple NIP-07
- **Amber** — Android (NIP-55)
- **Nostr Connect** — Remote signing

### Zap Integration

Send and receive Lightning payments:

```
┌──────────────────────────────────────────┐
│              Zap Flow                     │
├──────────────────────────────────────────┤
│                                          │
│  1. Click ⚡ on any post                 │
│  2. Choose amount (or custom)            │
│  3. Sign zap request                     │
│  4. Pay invoice via wallet               │
│  5. Zap appears on post                  │
│                                          │
└──────────────────────────────────────────┘
```

### Privacy Controls

| Setting | Description |
|---------|-------------|
| **Followers-only** | Limit who sees replies |
| **Content warnings** | Hide sensitive content |
| **Mute words** | Filter by keywords |
| **Block users** | Hide specific accounts |
| **WoT filter** | Trust-based filtering |

## Getting Started

### Web Access

1. Go to [snort.social](https://snort.social/)
2. Click "Get Started"
3. Create account or import keys
4. Start following and posting

### Self-Hosting

```bash
git clone https://github.com/v0l/snort
cd snort

# Install dependencies
yarn install

# Development
yarn dev

# Production build
yarn build
```

### Docker

```bash
docker run -p 3000:3000 ghcr.io/v0l/snort:latest
```

### Umbrel

Available in the Umbrel App Store for easy self-hosting.

## Architecture

Built with modern web technologies:

```
┌─────────────────────────────────────────┐
│              Snort                       │
├─────────────────────────────────────────┤
│  React + TypeScript                      │
│  ┌─────────────────────────────────────┐│
│  │  State Management (React Query)     ││
│  ├─────────────────────────────────────┤│
│  │  WebSocket Relay Connections        ││
│  ├─────────────────────────────────────┤│
│  │  IndexedDB Local Cache              ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

## Comparison

| Feature | Snort | Primal | Iris |
|---------|-------|--------|------|
| Platform | Web | Multi | Web |
| Self-hostable | Yes | No | Yes |
| Open source | Yes | Yes | Yes |
| Caching | Local | Server | Local |
| WoT filter | Yes | No | No |

## NIP Support

Snort implements many NIPs:

| NIP | Feature |
|-----|---------|
| NIP-01 | Basic protocol |
| NIP-05 | DNS verification |
| NIP-07 | Browser signing |
| NIP-09 | Event deletion |
| NIP-25 | Reactions |
| NIP-55 | Android signing |
| NIP-57 | Zaps |
| NIP-89 | App handlers |
| NIP-96 | File uploads |

## Links

- **Website:** [snort.social](https://snort.social/)
- **GitHub:** [v0l/snort](https://github.com/v0l/snort)
- **Umbrel:** [apps.umbrel.com/app/snort](https://apps.umbrel.com/app/snort)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Primal](/projects/primal) — Cross-platform client
- [Damus](/projects/damus) — iOS client
- [Amethyst](/projects/amethyst) — Android client
