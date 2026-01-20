---
title: Lume
description: Cross-platform Nostr desktop client
---

# Lume

**Nostr for big screens.** Multi-column, multi-account desktop client.

## Overview

Lume is a cross-platform Nostr desktop client designed for power users who want to manage multiple accounts and custom feeds on larger screens. Built with Tauri for performance.

## Key Features

### Multi-Column Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                          Lume                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐  │
│  │ Home Feed  │ │ #bitcoin   │ │ Mentions   │ │ Account 2  │  │
│  │            │ │            │ │            │ │            │  │
│  │ [note]     │ │ [note]     │ │ [mention]  │ │ [note]     │  │
│  │ [note]     │ │ [note]     │ │ [mention]  │ │ [note]     │  │
│  │ [note]     │ │ [note]     │ │ [mention]  │ │ [note]     │  │
│  │ [note]     │ │ [note]     │ │ [mention]  │ │ [note]     │  │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘  │
│                                                                 │
│  Multiple columns • Multiple accounts • Custom feeds           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Multi-account** | Use multiple Nostr identities |
| **Multi-column** | Custom column layout |
| **Custom feeds** | Hashtags, groups, lists |
| **Event caching** | SQL-based local database |
| **Custom relays** | Full relay configuration |
| **Discovery** | Find groups and interests |

### Performance

- Built with Tauri (Rust backend)
- Events cached in local database
- SQL queries for fast fetching
- Efficient memory usage

## Platforms

| Platform | Status |
|----------|--------|
| **Windows** | Available |
| **macOS** | Available |
| **Linux** | Available |

## Use Cases

### Power Users

- Monitor multiple topics simultaneously
- Manage multiple identities
- Create specialized feeds
- Track specific hashtags

### Content Creators

- Watch engagement across accounts
- Monitor mentions
- Track hashtag performance

## Comparison

| Feature | Lume | Damus | Amethyst |
|---------|------|-------|----------|
| Platform | Desktop | iOS | Android |
| Multi-column | Yes | No | No |
| Multi-account | Yes | No | Limited |
| Custom feeds | Yes | Limited | Yes |
| Local caching | SQL DB | Yes | Yes |

## Links

- **Website:** [lume.nu](https://lume.nu/)
- **GitHub:** [luminous-devs/lume](https://github.com/luminous-devs/lume)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Gossip](/projects/gossip) — Desktop client
- [Coop](/projects/coop) — Desktop messaging
