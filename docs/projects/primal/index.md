---
title: Primal
description: Cross-platform Nostr client with built-in wallet
---

# Primal

**Nostr client with built-in Bitcoin wallet.** Available on web, iOS, and Android.

## Overview

Primal combines social networking with Bitcoin payments in one polished app. Known for its smooth UI and excellent onboarding, it's often recommended for Nostr newcomers.

## Key Features

### Easy Onboarding
- Simple account creation
- No technical knowledge required
- Guided setup process
- Pre-configured relay list

### Built-in Bitcoin Wallet

```
┌─────────────────────────────────────────┐
│              Primal App                  │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────┐    ┌─────────────┐    │
│  │   Social    │    │   Wallet    │    │
│  │    Feed     │    │   (Sats)    │    │
│  └─────────────┘    └─────────────┘    │
│         │                  │            │
│         └────────┬─────────┘            │
│                  │                      │
│            ┌─────▼─────┐               │
│            │   Zaps    │               │
│            │  ⚡ Easy  │               │
│            └───────────┘               │
│                                         │
└─────────────────────────────────────────┘
```

- Custodial Lightning wallet built-in
- Send/receive sats without external apps
- One-tap zapping
- NWC support for external wallets

### Content Discovery (v2.0+)

| Tab | Content |
|-----|---------|
| **Home** | Your follows' posts |
| **Reads** | Long-form articles |
| **Explore** | Trending content |
| **Search** | Advanced queries |

### Feed Marketplace

Discover and subscribe to curated feeds created by others — like RSS for social media.

### Premium Features ($7/month)

- **Primal Name** — Custom NIP-05 identifier
- **Verified badge**
- **Power user tools**
- **Support development**

## Platforms

| Platform | Status |
|----------|--------|
| **Web** | [primal.net](https://primal.net) |
| **iOS** | App Store |
| **Android** | Google Play |

## Content Experience

### Short-form
Standard microblogging posts with:
- Text up to 10,000 characters
- Images and media
- Hashtags and mentions
- Reactions and zaps

### Long-form (Reads)

Dedicated reading experience:
- Clean article layout
- Bookmarking
- Separate bookmark list
- (Composition on desktop only)

### Media

- Inline players for YouTube, Spotify, Tidal, X
- Image galleries
- Video support (links on mobile)

## Recent Updates (v2.1+)

- **NWC support** — Connect external wallets
- **Improved feeds** — Richer, smoother experience
- **Better embeds** — More platform support
- **Android signer** — Amber integration (v2.2.13)

## Getting Started

### Web
1. Go to [primal.net](https://primal.net)
2. Click "Create Account" or import keys
3. Follow suggested accounts
4. Start posting

### Mobile
1. Download from App Store / Google Play
2. Create account or scan nsec QR
3. Set up wallet (optional)
4. Explore content

## Architecture

Primal runs its own caching infrastructure:

```
┌─────────────────────────────────────────┐
│            Primal Client                 │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│          Primal Cache Servers           │
│  (Index, search, recommendations)       │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│           Nostr Relays                  │
│      (Decentralized storage)            │
└─────────────────────────────────────────┘
```

This provides:
- Fast search
- Trending algorithms
- Social graph analysis
- Quick feed loading

## Open Source

All Primal apps are open source:
- [primal-web-app](https://github.com/PrimalHQ/primal-web-app)
- [primal-android-app](https://github.com/PrimalHQ/primal-android-app)
- [primal-ios-app](https://github.com/PrimalHQ/primal-ios-app)

## Comparison

| Feature | Primal | Damus | Amethyst |
|---------|--------|-------|----------|
| Platform | All | iOS | Android |
| Built-in wallet | Yes | No | No |
| Caching layer | Yes | No | No |
| Reads tab | Yes | No | No |
| Open source | Yes | Yes | Yes |

## Links

- **Website:** [primal.net](https://primal.net/)
- **iOS:** [App Store](https://apps.apple.com/app/primal/id1673134518)
- **Android:** [Google Play](https://play.google.com/store/apps/details?id=net.primal.android)
- **GitHub:** [PrimalHQ](https://github.com/PrimalHQ)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Damus](/projects/damus) — iOS-native client
- [Amethyst](/projects/amethyst) — Android-native client
- [nostr-tools](/projects/nostr-tools) — Build your own
