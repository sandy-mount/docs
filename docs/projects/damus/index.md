---
title: Damus
description: Nostr client for iOS
---

# Damus

**The premier Nostr client for iOS.** No ads, no algorithms, no censorship.

## Overview

Damus brought Nostr to the App Store, making decentralized social networking accessible to iPhone users. It combines a clean interface with powerful features including Lightning payments (Zaps).

## Key Features

### Decentralization
- **No account required** — Start with just cryptographic keys
- **No data collection** — Your keys, your data
- **Censorship-resistant** — No central authority can ban you
- **Portable identity** — Take your account anywhere

### Lightning Integration

Send and receive Bitcoin via the Lightning Network:

```
┌─────────────┐     Zap      ┌─────────────┐
│    You      │─────────────►│   Creator   │
│  (Damus)    │   ⚡ sats    │  (any app)  │
└─────────────┘              └─────────────┘
```

- **Zaps** — Tip content creators with sats
- **Nostr Wallet Connect** — Quick zapping
- **Coinos** — One-click wallet setup
- **Strike integration** — Easy Lightning access

### Privacy & Security

- **Keys in Secure Enclave** — Private keys stored in iOS Keychain
- **End-to-end encryption** — Private DMs
- **No tracking** — Zero data collection
- **Open source** — Auditable code

### Content Features

- **Note feeds** — Chronological timeline
- **Direct messages** — Encrypted conversations
- **Media support** — Images, videos, GIFs
- **Hashtags** — Discover content by topic
- **Threads** — Conversation threading
- **Reactions** — Unicode emoji reactions (iOS 18.4+)

### Recent Updates (2025)

- **NIP-65** — Relay list support for better discovery
- **NIP-42** — Relay authentication
- **Edge-to-edge video** — Immersive media player
- **Camera integration** — Record and post video directly
- **QR codes** — Easy profile sharing
- **Mute hashtags** — Filter unwanted content
- **Hellthread hiding** — Clean up noisy threads

## Installation

Available on the App Store for:
- **iOS** 16.0+
- **macOS** 13.0+ (Apple Silicon)
- **visionOS** 1.0+ (Apple Vision Pro)

[Download on App Store](https://apps.apple.com/us/app/damus/id1628663131)

## Getting Started

### 1. Create Account
Generate keys automatically or import existing nsec.

### 2. Set Up Wallet (Optional)
Connect a Lightning wallet for Zaps:
- Coinos (one-click setup)
- Strike
- Any NWC-compatible wallet

### 3. Find People
- Search by npub or NIP-05
- Browse trending hashtags
- Check who others follow

### 4. Post
Write notes, add media, use hashtags.

## Damus Purple

Premium membership ($6.99/month) supports development:
- Custom profile badge
- Exclusive features
- Help keep Damus independent

## For Developers

Damus is fully open source:

```bash
git clone https://github.com/damus-io/damus.git
cd damus
# Open in Xcode
open damus.xcodeproj
```

Built with:
- Swift / SwiftUI
- Native iOS frameworks
- Custom Nostr implementation

## Links

- **Website:** [damus.io](https://damus.io/)
- **App Store:** [Damus](https://apps.apple.com/us/app/damus/id1628663131)
- **GitHub:** [damus-io/damus](https://github.com/damus-io/damus)
- **Nostr:** `npub18m76awca3y37hkvuneavuw6pjj4525fw90necxmadrvjg0sdy6qsngq955`

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Amethyst](/projects/amethyst) — Android client
- [Primal](/projects/primal) — Cross-platform client
- [nostr-tools](/projects/nostr-tools) — JavaScript library
