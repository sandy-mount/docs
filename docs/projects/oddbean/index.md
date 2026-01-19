---
title: Oddbean
description: Discussion-focused Nostr client
---

# Oddbean

**Hacker News meets Nostr.** Transparent algorithms, text-focused discussions.

## Overview

Oddbean is a Nostr client inspired by Hacker News and Reddit, emphasizing transparent algorithms, fast loading, and text-focused discussions without distractions.

## Key Features

### Philosophy

```
┌─────────────────────────────────────────────────────────────────┐
│                      Oddbean Principles                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ✓ Transparent algorithms (view and fork)                     │
│   ✓ No cookies                                                 │
│   ✓ No tracking                                                │
│   ✓ No pop-ups                                                 │
│   ✓ No dark patterns                                           │
│   ✓ JavaScript optional (only for posting)                     │
│   ✓ Text-focused (no images)                                   │
│   ✓ Fully interoperable with Nostr                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Feed-based** | Curated lists of events |
| **Transparent** | See how content is ranked |
| **Fast** | Minimal, efficient design |
| **Text-only** | Pure discussion, no images |
| **No login** | Read without account |
| **Interoperable** | Works with all Nostr clients |

### Transparent Algorithms

- View the ranking algorithm
- Fork and modify
- Understand why content appears

### Minimalist Design

No distractions:
- No images (text discussions only)
- No ads
- No algorithmic manipulation
- Clean, fast interface

## Technical Details

- Written in C
- Built into strfry relay
- No JavaScript required for reading
- NIP-07 for posting

## Authentication

Uses NIP-07 browser extensions:
- nos2x
- Alby
- Other signers

## Comparison

| Feature | Oddbean | Hacker News | Reddit |
|---------|---------|-------------|--------|
| Protocol | Nostr | Proprietary | Proprietary |
| Algorithms | Transparent | Hidden | Hidden |
| Tracking | None | Some | Heavy |
| JS required | Posting only | Yes | Yes |
| Open source | Yes | No | No |

## Links

- **Website:** [oddbean.com](https://oddbean.com/)
- **About:** [oddbean.com/about](https://oddbean.com/about)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Stacker News](/projects/stacker-news) — Bitcoin-powered news
- [strfry](/projects/strfry) — Relay infrastructure
