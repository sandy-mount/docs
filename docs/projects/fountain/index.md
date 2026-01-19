---
title: Fountain
description: Podcast app with Bitcoin streaming
---

# Fountain

**Podcast app with streaming sats.** Listen to podcasts, support creators with Bitcoin.

## Overview

Fountain is a podcast app implementing Podcasting 2.0 features, including streaming sats (value-for-value payments) to podcast creators. It bridges traditional podcasting with the Lightning Network.

## Key Features

### Streaming Sats

```
┌─────────────────────────────────────────────────────────┐
│                    Fountain                              │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  🎙️ Podcast Name - Episode 42                           │
│  ━━━━━━━━━━━━━●━━━━━━━━━━━━━━━━━━━  45:23 / 1:24:00    │
│                                                          │
│  ⚡ Streaming: 100 sats/min                             │
│  💰 Session: 4,523 sats                                 │
│                                                          │
│  [⏮] [⏯] [⏭]     [1x] [Boost] [Clip]                  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Podcasting 2.0

| Feature | Description |
|---------|-------------|
| **Value tags** | Streaming payments |
| **Chapters** | Episode navigation |
| **Transcripts** | Full text |
| **Splits** | Multi-host payments |
| **Clips** | Share highlights |
| **Comments** | Social interaction |

### For Listeners

| Feature | Description |
|---------|-------------|
| **Discover** | Browse podcasts |
| **Subscribe** | Follow shows |
| **Download** | Offline listening |
| **Stream sats** | Support creators |
| **Boost** | One-time tips |
| **Clips** | Share moments |

### For Creators

| Feature | Description |
|---------|-------------|
| **Direct payments** | No middleman |
| **Splits** | Divide among hosts |
| **Analytics** | See who's listening |
| **Engagement** | Comments and boosts |

## Nostr Integration

Fountain connects to Nostr:

- Comments sync with Nostr
- Clips posted as notes
- Profile linked to npub
- Cross-platform social

## Value 4 Value Model

```
Traditional Podcast Ads:
Listener ──► Ads ──► Network ──► Podcast
            (annoying)  -50%      royalties

Fountain V4V:
Listener ─────────────────────► Podcast
           streaming sats
           direct, no ads
```

## Platforms

| Platform | Status |
|----------|--------|
| **iOS** | Available |
| **Android** | Available |
| **Web** | fountain.fm |

## Getting Started

1. Download Fountain app
2. Create account
3. Browse or import podcasts
4. Connect Lightning wallet
5. Start streaming

## Links

- **Website:** [fountain.fm](https://fountain.fm/)
- **iOS:** App Store
- **Android:** Google Play

## See Also

- [Alby](/projects/alby) — Lightning wallet
- [Wavlake](/projects/wavlake) — Music streaming
- [Nostr Protocol](/protocols/nostr) — Social layer
- [Cashu](/projects/cashu) — Ecash alternative
