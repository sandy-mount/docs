---
title: Zap.stream
description: Nostr live streaming with Bitcoin
---

# Zap.stream

**Live streaming on Nostr.** Stream, chat, and earn Bitcoin in real-time.

## Overview

Zap.stream is a live streaming platform built on Nostr (NIP-53). Stream directly to your audience, receive zaps during broadcasts, and own your content on an open protocol — no corporate middleman required.

## Key Features

### Nostr-Native Streaming

```
┌─────────────────────────────────────────────────────────┐
│                    Zap.stream                            │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─────────────────────────────────────────────────────┐│
│  │                                                      ││
│  │               🔴 LIVE                                ││
│  │                                                      ││
│  │          [Video Stream]                             ││
│  │                                                      ││
│  │                                                      ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
│  Streamer: @alice    ⚡ 42,000 sats zapped              │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐│
│  │  💬 Chat                                            ││
│  │  bob: Great stream! ⚡500                           ││
│  │  carol: Learning so much                           ││
│  │  dave: ⚡1000 keep it up!                           ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
│  [⚡ Zap Streamer]  [⚡ Zap Chat]                        │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Live Zapping

```
┌─────────────────────────────────────────────────────────┐
│                Real-Time Monetization                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Viewer watches stream                                  │
│         │                                                │
│         ▼                                                │
│  ⚡ Click "Zap Streamer"                                │
│         │                                                │
│         ▼                                                │
│  Choose amount (100, 500, 1000 sats)                   │
│         │                                                │
│         ▼                                                │
│  Lightning payment instant                              │
│         │                                                │
│         ▼                                                │
│  Streamer sees zap on screen                           │
│  Viewer appears in chat                                 │
│                                                          │
│  100% goes to creator. No platform cut.                │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Multi-Platform Restreaming

Stream once, reach everywhere:

```
┌─────────────────────────────────────────────────────────┐
│                   Restreaming                            │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Your OBS → Zap.stream                                  │
│                  │                                       │
│                  ├──► Nostr (zap.stream)                │
│                  ├──► Twitch (automatic)                │
│                  └──► YouTube (automatic)               │
│                                                          │
│  One stream. Multiple platforms. Maximum reach.         │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### NIP-53 Live Events

Streams are Nostr events:

```json
{
  "kind": 30311,
  "tags": [
    ["d", "unique-stream-id"],
    ["title", "My Live Stream"],
    ["summary", "Talking about Nostr"],
    ["streaming", "https://zap.stream/stream/abc"],
    ["status", "live"],
    ["starts", "1234567890"],
    ["p", "guest-npub", "relay", "host"]
  ],
  "content": ""
}
```

Benefits:
- Discoverable across Nostr clients
- Comments via Nostr events
- Portable stream metadata

## Features

| Feature | Description |
|---------|-------------|
| **HD Streaming** | Up to 1080p |
| **Live chat** | Nostr-native |
| **Zap streamers** | Direct tips |
| **Zap chatters** | Reward engagement |
| **Custom emojis** | Nostr emoji sets |
| **Restreaming** | Twitch/YouTube |
| **VOD** | Archived streams |
| **Clips** | Highlight moments |

## Getting Started

### For Streamers

1. **Login with Nostr** — Extension or nsec
2. **Get stream key** — From dashboard
3. **Configure OBS**:
   ```
   Server: rtmp://zap.stream/live
   Key: your-stream-key
   ```
4. **Start streaming** — Go live in OBS
5. **Receive zaps** — Watch sats flow in

### OBS Settings

Recommended settings:

| Setting | Value |
|---------|-------|
| **Encoder** | x264 or NVENC |
| **Bitrate** | 3000-6000 kbps |
| **Resolution** | 1920x1080 |
| **FPS** | 30 or 60 |
| **Keyframe** | 2 seconds |

### For Viewers

1. Visit [zap.stream](https://zap.stream/)
2. Browse live streams
3. Login to chat and zap
4. Support creators directly

## Pricing

| Plan | Cost |
|------|------|
| **Streaming** | 21 sats/minute |
| **Viewing** | Free |
| **Zaps** | 100% to creator |

Pay as you stream with Lightning.

## Comparison with Twitch

| Aspect | Zap.stream | Twitch |
|--------|------------|--------|
| Ownership | You | Amazon |
| Monetization | Direct zaps | Subscriptions + bits |
| Platform cut | 0% | ~50% |
| Algorithm | None | Heavy |
| Censorship | Decentralized | Platform rules |
| Chat | Nostr-native | Proprietary |
| Portability | Full | None |

## Content Types

### Gaming

- Live gameplay
- eSports
- Retro gaming
- Speed runs

### Tech

- Coding streams
- Bitcoin/Nostr development
- Tutorials
- Q&A sessions

### Creative

- Music production
- Art creation
- Podcast recording
- Talk shows

### Education

- Workshops
- Lectures
- Demonstrations
- AMAs

## Technical Details

### Infrastructure

```
OBS ──► Zap.stream ──► CDN ──► Viewers
            │
            ├── Nostr relay (events)
            ├── Chat (Nostr)
            └── Zaps (Lightning)
```

### Supported Inputs

- RTMP from OBS/Streamlabs
- Cloudflare streaming
- Custom RTMP sources

### Output

- HLS for playback
- Nostr events for discovery
- Lightning for payments

## Mobile App

Available on Google Play:
- Watch streams
- Chat and zap
- Browse live content

## Links

- **Website:** [zap.stream](https://zap.stream/)
- **GitHub:** [v0l/zap.stream](https://github.com/v0l/zap.stream)
- **NIP-53:** Live activities spec

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Alby](/projects/alby) — For zap payments
- [noStrudel](/projects/nostrudel) — Also supports NIP-53
- [Zapstr](/projects/zapstr) — Audio streaming
