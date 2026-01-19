---
title: Yana
description: Cross-platform Nostr client optimized for all devices
---

# Yana

**Yet Another Nostr Application.** Performance-optimized for slower devices.

## Overview

Yana is a cross-platform Nostr client designed to work well on any device, including older or lower-powered hardware. It emphasizes battery efficiency, smart caching, and a modular feature set.

## Key Features

### Cross-Platform Support

| Platform | Status |
|----------|--------|
| **iOS** | Available |
| **Android** | Available |
| **macOS** | Available |
| **Windows** | Available |

### Performance Optimization

```
┌─────────────────────────────────────────────────────────────────┐
│                   Yana Performance Design                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Smart Caching:                                                 │
│  ├── Intelligent data prefetch                                 │
│  ├── Battery-aware sync                                        │
│  ├── Bandwidth optimization                                    │
│  └── Works well on older devices                               │
│                                                                 │
│  Gossip Model:                                                  │
│  ├── Inbox/outbox relay discovery                              │
│  ├── Follows user-specified relay preferences                  │
│  └── Better decentralization                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Feed** | Posts from followed accounts |
| **Replies** | Full thread support |
| **Notifications** | Mentions and reactions |
| **Relay management** | NIP-51 relay lists |
| **Zaps** | Nostr Wallet Connect |
| **Read-only mode** | View any profile without login |

### Nostr Wallet Connect

Built-in NWC support:
- View wallet balance
- One-tap zaps
- Connect to external wallets

### Gossip Model

Uses inbox/outbox relay discovery:
```
┌─────────────────────────────────────────────────────────────────┐
│                    Gossip Relay Model                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   You                                                           │
│   ├── Read from: followers' outbox relays                      │
│   └── Write to: your outbox relays                             │
│                                                                 │
│   Followers                                                     │
│   ├── Read from: your outbox relays                            │
│   └── Write to: their outbox relays                            │
│                                                                 │
│   Result: No central relay dependency                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## NIP Support

| NIP | Feature |
|-----|---------|
| NIP-51 | Lists (relay lists, mutes) |
| NIP-65 | Relay list metadata |
| NIP-47 | Nostr Wallet Connect |

## Comparison

| Feature | Yana | Damus | Amethyst |
|---------|------|-------|----------|
| iOS | Yes | Yes | No |
| Android | Yes | No | Yes |
| Desktop | Yes | No | No |
| Battery optimization | Priority | Standard | Standard |
| Gossip model | Yes | Partial | Yes |

## Links

- **Website:** [yana.do](https://yana.do/)
- **GitHub:** [frnandu/yana](https://github.com/frnandu/yana)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Damus](/projects/damus) — iOS client
- [Gossip](/projects/gossip) — Desktop client with gossip model
