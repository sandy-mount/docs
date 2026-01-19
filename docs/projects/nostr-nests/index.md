---
title: Nostr Nests
description: Live audio rooms on Nostr
---

# Nostr Nests

**Audio spaces on Nostr.** Live conversations with Lightning integration.

## Overview

Nostr Nests is an audio space platform for live conversations on Nostr. It supports chatting, live podcast recordings, micro-conferences, and more — with built-in zap support for payments.

## Key Features

### Live Audio Rooms

```
┌─────────────────────────────────────────────────────────────────┐
│                      Nostr Nests                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────┐      │
│   │  🎙️ Bitcoin Development Hangout                     │      │
│   │  ─────────────────────────────────────────────────  │      │
│   │                                                     │      │
│   │  Speakers:                                          │      │
│   │  [👤 Alice] [👤 Bob] [👤 Carol]                     │      │
│   │                                                     │      │
│   │  Listeners: 47                                      │      │
│   │                                                     │      │
│   │  [🎤 Request to speak]  [⚡ Zap room]              │      │
│   └─────────────────────────────────────────────────────┘      │
│                                                                 │
│   Live chat (troll box) alongside audio                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Audio rooms** | Host or join live conversations |
| **Live chat** | Text chat alongside audio |
| **Zaps** | Send sats to speakers or room |
| **Zap splits** | Revenue sharing for hosts |
| **Recording** | Live podcast recording |

### Zap Splits

Revenue sharing via NIP-57 zap tags:
- Multiple recipients per zap
- Configurable split percentages
- Automatic distribution

## Technical Details

### NIP-53 Live Events

```json
{
  "kind": 30311,
  "tags": [
    ["d", "room-id"],
    ["title", "Bitcoin Dev Hangout"],
    ["summary", "Weekly discussion"],
    ["streaming", "wss+livekit://..."],
    ["status", "live"]
  ]
}
```

### Architecture

| Component | Technology |
|-----------|------------|
| Audio | LiveKit |
| Protocol | NIP-53 (live events) |
| Chat | Kind 1311 |
| Auth | NIP-98 |

## Use Cases

1. **Podcasts** — Record live with audience
2. **Discussions** — Topic-based conversations
3. **AMAs** — Ask me anything sessions
4. **Conferences** — Multi-speaker events

## Comparison

| Feature | Nostr Nests | Twitter Spaces | Clubhouse |
|---------|-------------|----------------|-----------|
| Protocol | Nostr | Proprietary | Proprietary |
| Payments | Lightning | No | No |
| Open source | Yes | No | No |
| Censorship | Resistant | Platform rules | Platform rules |

## Links

- **Website:** [nostrnests.com](https://nostrnests.com/)
- **GitHub:** [nostrnests/nests](https://github.com/nostrnests/nests)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Zap.stream](/projects/zapstream) — Live streaming
- [Fountain](/projects/fountain) — Podcasts with zaps
