---
title: Wherostr
description: Location-based social on Nostr
---

# Wherostr

**Share where you are.** Location-based social networking on Nostr.

## Overview

Wherostr is a geo-social application that brings location sharing to Nostr. Check in at places, see where others are, and explore the world through a decentralized lens.

## Key Features

### Location Features

```
┌─────────────────────────────────────────────────────────────────┐
│                     Wherostr Concept                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                    World Map                             │  │
│   │                                                          │  │
│   │        📍 Alice checked in                              │  │
│   │              at Coffee Shop                              │  │
│   │                                                          │  │
│   │                   📍 Bob is here                        │  │
│   │                      at Conference                       │  │
│   │                                                          │  │
│   │   📍 Carol                                              │  │
│   │      traveling                                           │  │
│   │                                                          │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   Check-ins • Place discovery • Travel sharing                 │
│   All on Nostr • Your keys • Your data                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Location pinning** | Mark where you are |
| **Check-ins** | Share visits to places |
| **Map view** | See friends on a map |
| **Native apps** | iOS and Android |
| **Nostr identity** | Use your existing keys |

### Privacy Considerations

Location sharing requires trust:

| Control | Description |
|---------|-------------|
| Opt-in sharing | Only share when you choose |
| Precision control | Share city, not exact address |
| Delete anytime | Remove location posts |
| Key ownership | No corporate tracking |

## Usage

### Check In

1. Open Wherostr
2. Allow location access
3. Select a place or pin location
4. Add optional note
5. Post to Nostr

### Explore

- **Map view** — See check-ins nearby
- **Following** — Where your friends have been
- **Discover** — Popular places
- **History** — Your check-in history

### Social Features

- React to check-ins
- Comment on locations
- Follow travelers
- Zap location posts

## Technical Details

| Component | Implementation |
|-----------|----------------|
| Platform | iOS, Android |
| Protocol | Nostr |
| Maps | Native map SDK |
| Location | Device GPS |
| Storage | Nostr relays |

## Use Cases

1. **Travel** — Share your journey
2. **Events** — Find who's at a conference
3. **Recommendations** — Discover places through friends
4. **Memories** — Location-tagged posts

## Comparison

| Feature | Wherostr | Swarm | Google Maps |
|---------|----------|-------|-------------|
| Protocol | Nostr | Proprietary | Proprietary |
| Data ownership | User | Company | Company |
| Identity | Keys | Account | Google account |
| Monetization | None | Ads | Ads |

## Privacy Note

Location data is sensitive. Wherostr lets you:
- Control when to share
- Choose precision level
- Use any Nostr identity
- No corporate tracking

But remember: posts on Nostr are public. Be mindful of what you share.

## Links

- **Company:** [MAPBOSS](https://mapboss.co.th/our-products/wherostr/)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Amethyst](/projects/amethyst) — Android Nostr client
- [Damus](/projects/damus) — iOS Nostr client
