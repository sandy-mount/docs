---
title: Nostr.band
description: Search engine and analytics for Nostr
---

# Nostr.band

**Search and discover on Nostr.** Find profiles, content, and track network growth.

## Overview

Nostr.band is a search engine and statistics platform for the Nostr network. It indexes content from relays, provides search functionality, and offers analytics on network health and growth.

## Key Features

### Search Engine

```
┌─────────────────────────────────────────────────────────────────┐
│                     Nostr.band Search                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Search for:                                                    │
│  ├── Profiles by name or npub                                  │
│  ├── Notes by keyword                                          │
│  ├── Hashtags and topics                                       │
│  └── NIP-05 addresses                                          │
│                                                                 │
│  Results filtered by:                                           │
│  ├── Relevance                                                 │
│  ├── Recency                                                   │
│  └── Trust (people you follow)                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Network Statistics

| Metric | Description |
|--------|-------------|
| **Daily Active Users** | Users posting in last 24h |
| **Weekly Active Users** | Users posting in last 7d |
| **New Users** | Daily signups |
| **Retention** | 30-day return rate |
| **Total Events** | Notes indexed |

### Trending Content

- Trending profiles to follow
- Popular notes and discussions
- Rising hashtags
- Active communities

## Analytics Dashboard

```
┌─────────────────────────────────────────────────────────────────┐
│                   stats.nostr.band                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Users with profiles:    ~1M+                                  │
│  Total events indexed:   300M+                                  │
│                                                                 │
│  Daily active:  ████████████░░░░░░░░  25k                      │
│  Weekly active: ██████████████████░░  85k                      │
│                                                                 │
│  Historical views: 2 months | 6 months | All time              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Developer Features

### Embeddable Widgets

Embed Nostr content on any website:
```html
<script src="https://nostr.band/embed.js"></script>
<nostr-embed note="note1..."></nostr-embed>
```

### RSS Feeds

Create alerts for keywords:
```
https://nostr.band/rss?q=bitcoin
```

## Authentication

Login with Nostr extensions:
- Alby
- nos2x
- Nostore (Safari)

## Trust Filtering

When logged in:
- See content from people you follow
- Filter out spam and unknown accounts
- Personalized search results

## Use Cases

1. **Discovery** — Find new accounts to follow
2. **Research** — Track topics and trends
3. **Monitoring** — Watch for mentions
4. **Analytics** — Understand network growth

## Links

- **Search:** [nostr.band](https://nostr.band/)
- **Statistics:** [stats.nostr.band](https://stats.nostr.band/)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Nostr.watch](/projects/nostr-watch) — Relay monitoring
- [Primal](/projects/primal) — Cached client with search
