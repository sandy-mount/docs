---
title: Amethyst
description: Feature-complete Nostr client for Android
---

# Amethyst

**The most feature-complete Nostr client for Android.** Three experiences in one app.

## Overview

Amethyst, developed by Vitor Pamplona, is the go-to Nostr client for Android. With over 100 contributors, it offers an incredibly rich feature set while maintaining an intuitive interface.

## Three Experiences

Amethyst provides three distinct modes:

| Mode | Description |
|------|-------------|
| **Feeds** | Traditional social media timeline |
| **Chats** | Group chats and direct messages |
| **Stories** | Media-focused ephemeral content |

## Key Features

### Outbox Model

Amethyst pioneered the outbox model for relay management:

```
Old model: User manually configures relays
New model: Amethyst auto-discovers relays based on follows

┌──────────────┐
│   Your Feed  │
└──────┬───────┘
       │ Amethyst analyzes your follows
       ▼
┌──────────────┐
│ Auto-compile │
│ relay list   │
│ from follows │
└──────┬───────┘
       │ Connect only to relevant relays
       ▼
┌──────────────┐
│ Efficient    │
│ data fetch   │
└──────────────┘
```

No more guessing which relays to add — Amethyst handles it.

### Privacy & Security

- **Android KeyStore** — Private keys stored securely
- **Tor support** — Built-in Tor network option
- **Orbot compatible** — Use with Tor proxy
- **End-to-end encryption** — NIP-04/NIP-44 DMs
- **No data collection** — All traffic goes to relays

### External Signer Support

Use Amber or other NIP-46 signers:

```
┌───────────┐         ┌───────────┐
│ Amethyst  │◄───────►│  Amber    │
│ (client)  │  NIP-46 │ (signer)  │
└───────────┘         └───────────┘
                           │
                           │ nsec stored
                           │ securely here
                           ▼
                      ┌───────────┐
                      │  KeyStore │
                      └───────────┘
```

Your nsec never touches Amethyst.

### Content Features

- **Rich media** — Images, videos, GIFs
- **Image galleries** — Multi-image posts
- **Video recording** — Record and post directly
- **Zaps** — Lightning payments
- **NWC deep links** — Quick wallet connection
- **Reactions** — Full emoji support
- **Bookmarks** — Save posts for later
- **Lists** — Organize follows

### Recent Updates (2025)

- Video recording button on new posts
- Multiple signer support
- Follow list cloning
- Missing outbox relay detection
- Image gallery improvements

## Installation

Available on:
- **Google Play Store**
- **F-Droid**
- **GitHub Releases** (APK)

[Download on Google Play](https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst)

## Architecture

Amethyst is a Kotlin multiplatform project:

```
┌─────────────────────────────────────────┐
│              Amethyst                    │
│         (Android Native App)             │
├─────────────────────────────────────────┤
│              Commons                     │
│    (Shared UI - Compose Multiplatform)  │
├─────────────────────────────────────────┤
│               Quartz                     │
│    (Nostr Protocol - Kotlin MP)         │
└─────────────────────────────────────────┘
```

- **Amethyst** — Android-specific code
- **Quartz** — Nostr protocol implementation (KMP)
- **Commons** — Shared UI components
- **DesktopApp** — Compose Desktop version

## Building from Source

```bash
git clone https://github.com/vitorpamplona/amethyst.git
cd amethyst

# Open in Android Studio
# Build > Make Project
```

Requirements:
- Android Studio
- JDK 17+
- Android SDK

## Configuration

### Relay Management
Amethyst uses outbox model by default, but you can:
- Add/remove specific relays
- Set read/write preferences
- Configure paid relays

### Privacy Options
- Enable Tor (requires Orbot or built-in)
- Use external signer (Amber)
- Configure DM encryption

## Comparison with Other Clients

| Feature | Amethyst | Damus | Primal |
|---------|----------|-------|--------|
| Platform | Android | iOS | Multi |
| Outbox model | Yes | Partial | No |
| Tor built-in | Yes | No | No |
| External signer | Yes | No | No |
| Stories | Yes | No | No |
| Open source | Yes | Yes | Yes |

## Links

- **Google Play:** [Amethyst](https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst)
- **GitHub:** [vitorpamplona/amethyst](https://github.com/vitorpamplona/amethyst)
- **OpenSats:** [Amethyst funding](https://opensats.org/projects/amethyst)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Damus](/projects/damus) — iOS client
- [Primal](/projects/primal) — Cross-platform client
- [Noskey](/projects/noskey) — Key generation
