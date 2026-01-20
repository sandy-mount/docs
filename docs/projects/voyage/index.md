---
title: Voyage
description: Lightweight Android Nostr client
---

# Voyage

**Minimal data, maximum Nostr.** Android client for slow connections and limited data plans.

## Overview

Voyage is a lightweight Android Nostr client optimized for minimal data usage. It uses text-only feeds, offline caching, and intelligent relay connections to work well on slow networks.

## Key Features

### Data-Efficient Design

```
┌─────────────────────────────────────────────────────────────────┐
│                     Voyage Data Savings                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Traditional Client                                           │
│   ├── Images: 500KB-5MB each                                   │
│   ├── Videos: 10MB-100MB each                                  │
│   ├── Multiple relay connections                               │
│   └── Total: Gigabytes per session                             │
│                                                                 │
│   Voyage                                                        │
│   ├── Text only: ~1KB per post                                 │
│   ├── Minimal relay connections (outbox model)                 │
│   ├── Local caching                                            │
│   └── Total: Megabytes per session                             │
│                                                                 │
│   Perfect for: Limited data plans, slow connections, travel    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Text-only feed** | No images or videos |
| **Offline capable** | Local post caching |
| **Outbox model** | Minimal relay connections |
| **External signing** | Works with Amber |
| **Topic discovery** | Popular hashtags on startup |

### Outbox Relay Model

```
┌─────────────────────────────────────────────────────────────────┐
│                     Outbox Model                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Traditional: Connect to 10+ relays simultaneously            │
│   • High bandwidth                                              │
│   • Redundant data                                              │
│   • Battery drain                                               │
│                                                                 │
│   Voyage Outbox: Connect only to user's write relays           │
│   • Minimal connections                                         │
│   • No redundant data                                           │
│   • Battery efficient                                           │
│                                                                 │
│   Following Alice?                                              │
│   → Read her NIP-65 relay list                                 │
│   → Connect only to her write relays                           │
│   → Fetch her posts                                             │
│   → Disconnect                                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Usage

### Feed Types

- **Home** — Posts from followed accounts
- **Topics** — Hashtag-based discovery
- **Profile** — Individual user view
- **Inbox** — Replies and mentions

### Offline Mode

- Posts cached locally
- Read feed without connection
- Queue replies for later
- Sync when online

### Key Management

Works with external signers:
- Amber (NIP-46)
- Citrine (local key store)

## Technical Details

| Component | Implementation |
|-----------|----------------|
| Platform | Android (native) |
| Signing | External (Amber/Citrine) |
| Caching | SQLite local database |
| Relays | NIP-65 outbox model |
| UI | Material Design |

## Comparison

| Feature | Voyage | Amethyst | Primal |
|---------|--------|----------|--------|
| Platform | Android | Android | Multi |
| Data usage | Minimal | Normal | Normal |
| Images | No | Yes | Yes |
| Offline | Yes | Limited | No |
| External sign | Yes | Yes | No |

## Installation

Available on:
- **F-Droid** (IzzyOnDroid repo)
- **GitHub Releases**

```bash
# F-Droid (IzzyOnDroid)
Add repo: https://apt.izzysoft.de/fdroid/
Search: Voyage
```

## Use Cases

1. **Travelers** — Stay connected on hotel WiFi
2. **Data caps** — Use Nostr without burning data
3. **Developing regions** — Works on slow networks
4. **Battery savers** — Minimal background activity

## Links

- **GitHub:** [dluvian/voyage](https://github.com/dluvian/voyage)
- **F-Droid:** [IzzyOnDroid](https://apt.izzysoft.de/fdroid/index/apk/com.dluvian.voyage)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Amber](/projects/amber) — Key management
- [Amethyst](/projects/amethyst) — Full-featured Android client
