---
title: Nostr.watch
description: Relay monitoring and discovery platform
---

# Nostr.watch

**Monitor and discover Nostr relays.** Real-time status, NIP support, and performance metrics.

## Overview

Nostr.watch is a comprehensive relay monitoring platform. It discovers relays across the network, checks their status, validates NIP support, and provides detailed information for users and developers choosing relays.

## Key Features

### Relay Discovery

```
┌─────────────────────────────────────────────────────────────────┐
│                    Nostr.watch Discovery                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Sources:                                                       │
│  ├── Known relay lists                                         │
│  ├── NIP-65 relay recommendations                              │
│  ├── User submissions                                          │
│  └── Network scraping                                          │
│                                                                 │
│  For each relay:                                                │
│  ├── Liveness check (WebSocket)                                │
│  ├── NIP-11 info document                                      │
│  ├── Geographic location                                       │
│  ├── SSL certificate status                                    │
│  └── NIP compliance testing                                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Relay Information

| Field | Description |
|-------|-------------|
| **Status** | Online/offline |
| **Location** | Geographic region |
| **Supported NIPs** | Protocol features |
| **Latency** | Response time |
| **Uptime** | Historical availability |
| **Payment** | Free/paid status |

### NIP Compliance

Tests relays against their advertised NIPs:
- Verifies actual NIP support vs claims
- Identifies broken or incomplete implementations
- Helps users choose compliant relays

## Monitoring Dashboard

```
┌─────────────────────────────────────────────────────────────────┐
│                    Relay Status Board                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Relay                    Status   Latency   NIPs               │
│  ─────────────────────────────────────────────────────────────  │
│  wss://relay.damus.io     ✓ UP     45ms     01,02,04,09...     │
│  wss://nos.lol            ✓ UP     52ms     01,02,04,11...     │
│  wss://relay.nostr.band   ✓ UP     38ms     01,02,04,09...     │
│  wss://relay.example      ✗ DOWN   ---      ---                 │
│                                                                 │
│  Total: 847 relays | Online: 623 | Offline: 224                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## NIP-66 Support

Implements NIP-66 for relay monitoring events:
- Publishes relay status to Nostr
- Aggregates data from multiple monitors
- Enables decentralized relay discovery

## Use Cases

### For Users

- Find reliable relays
- Check if your relay is online
- Discover relays in your region
- Verify NIP support before connecting

### For Relay Operators

- Monitor your relay's status
- See how you compare to others
- Identify issues quickly
- Track uptime history

### For Developers

- Test NIP implementations
- Find relays supporting specific NIPs
- Build relay recommendation systems

## Technical Details

- Built in TypeScript
- Deno runtime (Node.js being phased out)
- Extensible library architecture
- Open source

## Links

- **Website:** [nostr.watch](https://nostr.watch/)
- **GitHub:** [sandwichfarm/nostr-watch](https://github.com/sandwichfarm/nostr-watch)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [strfry](/projects/strfry) — High-performance relay
- [nostream](/projects/nostream) — TypeScript relay
