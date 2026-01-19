---
title: Fonstr
description: Nostr-based music and audio platform
---

# Fonstr

**Decentralized music on Nostr.** Publish, discover, and stream audio with cryptographic ownership.

## Overview

Fonstr brings music distribution to Nostr:

- **Artists own their content** — Signed with Nostr keys
- **No middlemen** — Direct artist-to-listener
- **Censorship-resistant** — Distributed across relays
- **Zaps for payments** — Lightning Network micropayments

## How It Works

```
┌─────────────┐     publish     ┌─────────────┐
│   Artist    │────────────────►│   Relays    │
│  (nsec)     │                 │             │
└─────────────┘                 └──────┬──────┘
                                       │
                                       │ stream
                                       ▼
                                ┌─────────────┐
                                │  Listeners  │
                                │  (zaps ⚡)   │
                                └─────────────┘
```

### Audio Events

Fonstr uses custom Nostr event kinds for audio:

- Track metadata (title, artist, duration)
- Album/playlist organization
- Streaming URLs
- Zap receipts

## Features

- Upload and publish tracks
- Create albums and playlists
- Receive zaps per play
- Follow artists
- Discover new music

## Links

- **Website:** [fonstr.com](https://fonstr.com)

## See Also

- [Nostr Protocol](/protocols/nostr) — The underlying protocol
- [Nosdav](/projects/nosdav) — File storage with Nostr auth
