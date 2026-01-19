---
title: Bridgy Fed
description: Bridge between IndieWeb, Fediverse, and Bluesky
---

# Bridgy Fed

**Connect the decentralized web.** Bridge IndieWeb, ActivityPub, and Bluesky.

## Overview

Bridgy Fed connects different decentralized protocols, enabling websites to become Fediverse accounts and bridging between ActivityPub and Bluesky. It turns any website with microformats into a full participant in federated social networks.

## Key Features

### Multi-Protocol Bridge

```
┌─────────────────────────────────────────────────────────────────┐
│                     Bridgy Fed Bridge                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   IndieWeb                                          Bluesky     │
│  (Your website)                                   (AT Protocol) │
│       │                                                │        │
│       │              ┌──────────────┐                 │        │
│       └─────────────►│  Bridgy Fed  │◄────────────────┘        │
│                      │              │                           │
│       ┌─────────────►│   Bridge     │◄────────────────┐        │
│       │              └──────────────┘                 │        │
│       │                                               │        │
│   ActivityPub                                     Future:      │
│  (Fediverse)                                  Farcaster, Nostr │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Supported Protocols

| Protocol | Status | Account Format |
|----------|--------|----------------|
| **IndieWeb** | Full | Your domain |
| **ActivityPub** | Full | @domain@web.brid.gy |
| **AT Protocol** | Full | @domain.web.brid.gy |
| **Farcaster** | Planned | TBD |
| **Nostr** | Considered | TBD |

### Website to Fediverse

Turn your website into a Fediverse account:

```
Your website: https://alice.com

Fediverse users can follow: @alice.com@web.brid.gy
Bluesky users can follow: @alice.com.web.brid.gy
```

### Interactions

| Action | How It Works |
|--------|--------------|
| **Post** | Publish on your site with microformats |
| **Reply** | Add in-reply-to on your site |
| **Like** | Add like-of on your site |
| **Repost** | Add repost-of on your site |
| **Follow** | Others follow your bridged account |

### Webmention Integration

Interactions flow back to your site:
```
Fediverse reply ──► Bridgy Fed ──► Webmention to your site
```

## Setup

### For IndieWeb Sites

1. Have a website with microformats2
2. Support webmentions (sending and receiving)
3. Sign up at [fed.brid.gy](https://fed.brid.gy/)
4. Users can now follow your domain

### Requirements

```
┌─────────────────────────────────────────────────────────────────┐
│                  Website Requirements                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Microformats2:                                                 │
│  ├── h-card for author info                                    │
│  ├── h-entry for posts                                         │
│  └── u-* and p-* properties                                    │
│                                                                 │
│  Webmentions:                                                   │
│  ├── Send webmentions for interactions                         │
│  └── Receive webmentions from bridge                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Technical Details

- **Platform:** Google App Engine
- **Language:** Python
- **Library:** Granary for protocol translation
- **Open source:** Yes

## Comparison

| Feature | Bridgy Fed | Mostr |
|---------|------------|-------|
| IndieWeb support | Yes | No |
| Nostr-ActivityPub | No | Yes |
| Bluesky bridge | Yes | Partial |
| Self-hostable | Yes | Limited |
| Website accounts | Yes | No |

## Links

- **Website:** [fed.brid.gy](https://fed.brid.gy/)
- **Documentation:** [fed.brid.gy/docs](https://fed.brid.gy/docs)
- **GitHub:** [snarfed/bridgy-fed](https://github.com/snarfed/bridgy-fed)

## See Also

- [ActivityPub](/protocols/activitypub) — Federation protocol
- [Mostr](/projects/mostr) — Nostr-ActivityPub bridge
- [WebFinger](/projects/webfinger) — User discovery
