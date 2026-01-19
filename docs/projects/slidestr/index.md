---
title: Slidestr
description: Media-focused Nostr browsing
---

# Slidestr

**Immersive media on Nostr.** Browse images and videos in a streamlined interface.

## Overview

Slidestr is a media-focused Nostr client that emphasizes visual content browsing. It provides a streamlined interface for viewing images and videos posted to Nostr, with support for remote signing via NIP-46.

## Key Features

### Media-First Interface

```
┌─────────────────────────────────────────────────────────────────┐
│                       Slidestr                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │                                                         │   │
│  │              [Full-screen media view]                   │   │
│  │                                                         │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ◄ Previous     ● ● ● ○ ○     Next ►                           │
│                                                                 │
│  Browse media from your feed or explore                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Gallery view** | Browse media collections |
| **Full screen** | Immersive viewing mode |
| **Images** | Photos and graphics |
| **Videos** | Video playback support |
| **Compact UI** | Minimal distractions |

### NIP-46 Remote Signing

Secure key management:
- Keys stay in your signer (Amber, nsec.app)
- Slidestr requests signatures
- Works on mobile web without exposing keys

```
┌─────────────────────────────────────────────────────────────────┐
│                    Remote Signing Flow                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Slidestr ──────────────────────► Signer (Amber/nsec.app)      │
│     │                                    │                      │
│     │  "Sign this event"                 │                      │
│     │ ◄──────────────────────────────────┘                      │
│     │        "Here's the signature"                             │
│     ▼                                                           │
│  Post to relay (nsec never exposed)                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Use Cases

### Photo Sharing

- Browse photography posts
- View art collections
- Explore memes and graphics

### Content Discovery

- Find visual content on Nostr
- Explore by hashtag
- Follow media-focused accounts

### Mobile Browsing

- Touch-optimized interface
- Swipe navigation
- Works well on phones

## Platform

| Platform | Status |
|----------|--------|
| **Web** | Available |
| **Mobile Web** | Optimized |

## Security

With NIP-46 support:
- No keys stored in browser
- Revocable access
- Granular permissions

## Comparison

| Feature | Slidestr | Iris | Snort |
|---------|----------|------|-------|
| Focus | Media | General | General |
| NIP-46 | Yes | Limited | No |
| Full-screen | Yes | No | No |
| Minimal UI | Yes | No | No |

## Links

- **Website:** [slidestr.net](https://slidestr.net/)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [nsec.app](/projects/nsec-app) — Web-based signer
- [Amber](/projects/amber) — Android signer
