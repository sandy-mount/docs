---
title: Zapstr
description: Nostr music and audio streaming
---

# Zapstr

**Music and podcasts on Nostr.** Share, discover, and zap audio content.

## Overview

Zapstr is a media-focused Nostr client for audio content. It allows artists and podcasters to publish music and audio directly to Nostr, where listeners can discover, stream, and support creators with Lightning payments.

## Key Features

### Audio-First Design

```
┌─────────────────────────────────────────────────────────┐
│                      Zapstr                              │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  🎵 Now Playing: Artist Name - Track Title              │
│  ━━━━━━━━━━━━━●━━━━━━━━━━━━━━━━━━━  2:34 / 4:12        │
│  [⏮] [⏯] [⏭]     [🔀] [🔁]     ⚡ Zap                  │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  📻 Music Feed                                          │
│  ├── 🎵 New Release - Bitcoin Song                     │
│  ├── 🎵 Podcast Episode - Nostr Talk #42               │
│  └── 🎵 Remix - Lightning Beats                        │
│                                                          │
│  [Discover] [Following] [Playlists] [Library]           │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Kind 31337 Events

Zapstr uses a specialized event kind for audio tracks:

```json
{
  "kind": 31337,
  "tags": [
    ["d", "unique-track-id"],
    ["title", "Track Name"],
    ["artist", "Artist Name"],
    ["url", "https://audio-url.mp3"],
    ["duration", "252"],
    ["c", "music"],
    ["c", "electronic"]
  ],
  "content": "Description of the track"
}
```

### Value 4 Value

```
┌─────────────────────────────────────────────────────────┐
│                   Value 4 Value                          │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Listener enjoys track                                  │
│         │                                                │
│         ▼                                                │
│  ⚡ Zap the track                                        │
│         │                                                │
│         ▼                                                │
│  Sats go directly to:                                   │
│  ├── Artist (primary)                                   │
│  └── Split recipients (collaborators, etc.)            │
│                                                          │
│  No middleman. Direct creator support.                  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Cross-Platform Embeds

Share Zapstr content across Nostr:

```markdown
<!-- Copy a Zapstr link -->
https://zapstr.live/track/abc123

<!-- Paste in Habla, Coracle, etc. -->
<!-- Renders as embedded audio player -->
```

Compatible clients:
- Habla (long-form articles)
- Amethyst
- Primal
- Other NIP-94 aware clients

### Podcasting

| Feature | Description |
|---------|-------------|
| **Episodes** | Full podcast support |
| **RSS import** | Bring existing shows |
| **Chapters** | Episode navigation |
| **Transcripts** | Text versions |
| **Zap splits** | Multi-host payments |

## For Artists

### Publishing Music

1. Create account or login with Nostr key
2. Upload audio file
3. Add metadata (title, artist, cover art)
4. Set categories/tags
5. Publish to relays

### Ownership Options

```
Option 1: Music Feed Publishing
┌─────────────────────────────────────────┐
│  Music Feed publishes on your behalf    │
│  Good for onboarding new artists        │
└─────────────────────────────────────────┘

Option 2: Self-Publishing
┌─────────────────────────────────────────┐
│  Publish with your own npub             │
│  Full ownership and control             │
└─────────────────────────────────────────┘
```

### Revenue

- **Direct zaps** — Listeners pay you directly
- **No platform cut** — 100% of zaps are yours
- **Instant settlement** — Lightning is fast
- **Global audience** — No geographic restrictions

## For Listeners

### Discovery

| Method | Description |
|--------|-------------|
| **Feed** | Latest uploads |
| **Following** | Artists you follow |
| **Categories** | Browse by genre |
| **Search** | Find specific content |
| **Trending** | Popular tracks |

### Playback

- Stream in browser
- Background play
- Queue management
- Playback history

### Supporting Artists

1. Find a track you enjoy
2. Click the zap button
3. Choose amount
4. Confirm payment
5. Artist receives sats instantly

## Integration

### With Other Clients

Zapstr tracks can be:
- Embedded in Habla articles
- Shared on Amethyst/Primal
- Referenced in any Nostr client
- Played from event links

### With Podcasting 2.0

Zapstr aligns with Podcasting 2.0 value tags:
- Value splits
- Streaming sats
- Chapter support
- Transcripts

## Technical Details

### Event Structure

Audio tracks use kind 31337 (addressable events):

| Tag | Purpose |
|-----|---------|
| `d` | Unique identifier |
| `title` | Track name |
| `artist` | Creator name |
| `url` | Audio file URL |
| `duration` | Length in seconds |
| `c` | Categories |
| `thumb` | Cover art |

### Storage

Audio files can be hosted on:
- Blossom servers
- Traditional CDNs
- Self-hosted servers
- IPFS (if supported)

## Use Cases

### Musicians

- Release singles and albums
- Build direct fan relationships
- Receive instant payments
- Own your distribution

### Podcasters

- Publish episodes to Nostr
- Import from existing RSS
- Monetize with value 4 value
- Cross-post to other platforms

### Listeners

- Discover new music
- Support artists directly
- Build playlists
- Ad-free experience

## Links

- **Website:** [zapstr.live](https://zapstr.live/)
- **GitHub:** [zapstr/zapstr](https://github.com/zapstr/zapstr)
- **Kind 31337:** Audio track standard

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Habla](/projects/habla) — Embed audio in articles
- [Alby](/projects/alby) — Lightning payments
- [Highlighter](/projects/highlighter) — Highlights app
