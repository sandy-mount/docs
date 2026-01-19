---
title: Nostur
description: Native macOS and iOS Nostr client
---

# Nostur

**Native Apple experience for Nostr.** Feature-rich client for macOS and iOS.

## Overview

Nostur is a native Nostr client for Apple platforms, emphasizing quality design and advanced features. It provides a polished experience for power users while maintaining accessibility for newcomers.

## Key Features

### Native Apple Design

```
┌─────────────────────────────────────────────────────────────────┐
│                        Nostur                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Built for Apple:                                               │
│  ├── Native SwiftUI interface                                  │
│  ├── macOS and iOS optimized                                   │
│  ├── System integration (widgets, notifications)               │
│  ├── iCloud sync support                                       │
│  └── Keyboard shortcuts (macOS)                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Advanced Features

| Feature | Description |
|---------|-------------|
| **Voice messages** | "Yaks" - quick audio notes |
| **Blossom uploads** | Decentralized media storage |
| **Web of Trust** | Spam filtering based on follows |
| **Relay Autopilot** | Automatic relay discovery |
| **Multi-account** | Switch between identities |
| **nsecBunker** | External signer support |

### Web of Trust

Nostur implements sophisticated spam filtering:

```
┌─────────────────────────────────────────────────────────────────┐
│                    Web of Trust Filtering                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   You follow ──► Your follows ──► Their follows                │
│        │              │                │                        │
│        ▼              ▼                ▼                        │
│   Trust level 1   Trust level 2   Trust level 3                │
│                                                                 │
│   Content from trusted accounts shown                          │
│   Spam from unknown accounts filtered                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Media Features

- Video uploads and playback
- Image galleries
- Blossom protocol for decentralized hosting
- HEIC format support

## Platforms

| Platform | Status |
|----------|--------|
| **macOS** | Available (12+) |
| **iOS** | Available (iPhone, iPad) |

## Unique Features

### Backup & Recovery

- Automatic backup of contacts
- Detects accidental deletions
- Offers recovery options

### Nostr Nests Integration

- Join live audio rooms
- Participate in discussions
- Voice-based social features

## Comparison

| Feature | Nostur | Damus | Spring |
|---------|--------|-------|--------|
| macOS | Yes | No | No |
| iOS | Yes | Yes | Yes |
| Voice messages | Yes | No | No |
| Blossom | Yes | No | No |
| Web of Trust | Advanced | Basic | Basic |
| Multi-account | Yes | No | No |

## Links

- **Website:** [nostur.com](https://nostur.com/)
- **App Store:** Search "Nostur"

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Damus](/projects/damus) — iOS alternative
- [Blossom](/projects/blossom) — Decentralized media
