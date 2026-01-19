---
title: Stacker News
description: Hacker News with Bitcoin rewards
---

# Stacker News

**Get paid for quality content.** Bitcoin-powered social news.

## Overview

Stacker News is a Hacker News-style forum where users earn Bitcoin (satoshis) for creating and curating content. Unlike traditional platforms where karma is worthless, Stacker News pays real Bitcoin via Lightning Network.

## Key Features

### Earn Bitcoin

```
┌─────────────────────────────────────────────────────────────────┐
│                     Stacker News                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Traditional Reddit/HN:                                       │
│   Post ──► Upvotes ──► Karma (worthless)                       │
│                                                                 │
│   Stacker News:                                                 │
│   Post ──► Zaps ──► Sats (real Bitcoin!)                       │
│                                                                 │
│   Quality content = real money                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Zap to upvote** | Send sats to content you like |
| **Earn sats** | Get paid for quality posts |
| **Territories** | Community-owned spaces |
| **No custody** | Platform never holds your funds |
| **Cowboy Credits** | Onboarding for new users |

### Territories

Community-owned spaces (like subreddits):
- Founders earn 70% of posting fees
- 21% from zaps to founders
- Custom moderation rules
- Topic-focused discussions

### Revenue Model

```
┌─────────────────────────────────────────────────────────────────┐
│                    Revenue Distribution                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Posting fees:                                                 │
│   ├── 70% → Territory founder                                  │
│   └── 30% → Platform                                           │
│                                                                 │
│   Zaps on posts:                                                │
│   ├── 79% → Content creator                                    │
│   └── 21% → Territory founder                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Topics

Popular territories:
- Bitcoin
- Lightning
- Nostr
- Technology
- Finance
- Memes

## Technical Stack

| Component | Technology |
|-----------|------------|
| Frontend | Next.js |
| API | GraphQL |
| Database | PostgreSQL (Prisma) |
| Lightning | lnd |

## Cowboy Credits

Onboarding system for new users:
- Start without a Lightning wallet
- Earn credits through participation
- Convert to real sats later

## Comparison

| Feature | Stacker News | Hacker News | Reddit |
|---------|--------------|-------------|--------|
| Rewards | Bitcoin | None | None |
| Karma value | Real money | Status only | Status only |
| Censorship | Community | Centralized | Centralized |
| Open source | Yes | No | No |

## Links

- **Website:** [stacker.news](https://stacker.news/)
- **GitHub:** [stackernews/stacker.news](https://github.com/stackernews/stacker.news)

## See Also

- [Nostr Protocol](/protocols/nostr) — Related protocol
- [LNbits](/projects/lnbits) — Lightning wallet
- [Alby](/projects/alby) — Browser extension
