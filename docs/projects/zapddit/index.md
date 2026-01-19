---
title: Zapddit
description: Reddit-style Nostr client
---

# Zapddit

**Reddit on Nostr.** Hashtags as communities, zaps as votes.

## Overview

Zapddit is a Reddit-style client for Nostr where hashtags replace subreddits and Bitcoin zaps replace upvotes/downvotes. Follow topics, curate content, and earn sats.

## Key Features

### Reddit-Style Interface

```
┌─────────────────────────────────────────────────────────────────┐
│                       Zapddit                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Reddit:                        Zapddit:                       │
│   r/bitcoin ─────────────────►  #bitcoin                       │
│   r/nostr ───────────────────►  #nostr                         │
│   r/coffeechain ─────────────►  #coffeechain                   │
│                                                                 │
│   Upvote ────────────────────►  Upzap (send sats)              │
│   Downvote ──────────────────►  Downzap (send sats elsewhere)  │
│   Karma ─────────────────────►  Real Bitcoin                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Follow hashtags** | Subscribe to topics |
| **Mute hashtags** | Filter unwanted topics |
| **Upzaps** | Appreciate content with sats |
| **Downzaps** | Disagree by zapping elsewhere |
| **Chronological** | Recent posts from follows |

### Hashtag Communities

Instead of subreddits:
- #bitcoin — Bitcoin discussions
- #nostr — Protocol talk
- #coffeechain — Coffee enthusiasts
- #foodstr — Food posts
- Any hashtag works!

## Zap-Based Voting

### Upzaps

Like a post = send sats to author:
- Express appreciation
- Author earns real Bitcoin
- More zaps = more visibility

### Downzaps

Disagree = send sats to chosen recipient:
- Doesn't harm author
- Redirects value elsewhere
- Non-punitive disagreement

## Usage

1. Connect with your Nostr key
2. Follow hashtags that interest you
3. Browse the feed
4. Upzap posts you like
5. Post to hashtags

## Comparison

| Feature | Zapddit | Reddit | Nostr clients |
|---------|---------|--------|---------------|
| Communities | Hashtags | Subreddits | Limited |
| Voting | Zaps (sats) | Points | Likes |
| Censorship | Resistant | Centralized | Resistant |
| Earnings | Yes | No | Varies |

## Links

- **Website:** [zapddit.com](https://zapddit.com/)
- **GitHub:** [vivganes/zapddit](https://github.com/vivganes/zapddit)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Stacker News](/projects/stacker-news) — Similar concept
- [Listr](/projects/listr) — Hashtag lists
