---
title: Mostr
description: Bridge between Nostr and ActivityPub
---

# Mostr

**Nostr-Fediverse bridge.** Follow Mastodon users from Nostr and vice versa.

## Overview

Mostr bridges the Nostr protocol with ActivityPub, enabling cross-platform communication between Nostr clients and Fediverse servers like Mastodon. It translates posts bidirectionally, allowing users to follow and interact across protocol boundaries.

## Key Features

### Bidirectional Bridge

```
┌─────────────────────────────────────────────────────────────────┐
│                        Mostr Bridge                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Nostr                     Mostr                    Fediverse  │
│  ┌──────────┐            ┌──────────┐            ┌──────────┐  │
│  │  Client  │◄──────────►│  Bridge  │◄──────────►│ Mastodon │  │
│  │ (Damus)  │            │          │            │  Server  │  │
│  └──────────┘            └──────────┘            └──────────┘  │
│                               │                                 │
│                               │                                 │
│  Nostr events ◄──────────────►  ActivityPub objects            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Cross-Protocol Features

| Action | Nostr → Fediverse | Fediverse → Nostr |
|--------|-------------------|-------------------|
| **Follow** | Follow Mastodon users | Follow Nostr users |
| **Posts** | Notes become toots | Toots become notes |
| **Replies** | Reply to Fediverse posts | Reply to Nostr posts |
| **Reactions** | Likes bridge | Likes bridge |
| **Reposts** | Boosts bridge | Reposts bridge |

### How It Works

From Nostr:
```
Follow: @user@mastodon.social_at_mostr.pub

This translates to:
Nostr client → Mostr relay → ActivityPub federation → Mastodon
```

From Fediverse:
```
Follow: @npub1...@mostr.pub

Mastodon server → Mostr ActivityPub inbox → Nostr relay
```

## Technical Architecture

Mostr operates as both:
- A Nostr relay (accepts/publishes events)
- An ActivityPub server (federates with Fediverse)

```
┌─────────────────────────────────────────────────────────────────┐
│                    Mostr Architecture                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐                       ┌──────────────┐       │
│  │ Nostr Relay  │                       │ ActivityPub  │       │
│  │  Interface   │                       │    Server    │       │
│  └──────┬───────┘                       └──────┬───────┘       │
│         │                                      │                │
│         │          ┌──────────────┐           │                │
│         └─────────►│  Translator  │◄──────────┘                │
│                    │              │                             │
│                    │ Event ↔ Object│                            │
│                    └──────────────┘                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Usage

### Following Fediverse from Nostr

1. Find a Fediverse user: `@alice@mastodon.social`
2. Convert to Mostr format: `alice@mastodon.social_at_mostr.pub`
3. Follow in your Nostr client

### Following Nostr from Fediverse

1. Get your npub: `npub1abc123...`
2. Fediverse users follow: `@npub1abc123...@mostr.pub`

## Limitations

- Not all post types translate perfectly
- Some Fediverse features (polls, etc.) may not bridge
- Relies on Mostr infrastructure

## Comparison

| Feature | Mostr | Bridgy Fed | Direct |
|---------|-------|------------|--------|
| Nostr-ActivityPub | Yes | No | N/A |
| IndieWeb-ActivityPub | No | Yes | N/A |
| Nostr-Bluesky | Partial | Yes | N/A |
| Self-hostable | Limited | Yes | N/A |

## Links

- **Website:** [mostr.pub](https://mostr.pub/)
- **By:** Soapbox

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [ActivityPub](/protocols/activitypub) — Fediverse protocol
- [Mastodon](/projects/mastodon) — Fediverse server
