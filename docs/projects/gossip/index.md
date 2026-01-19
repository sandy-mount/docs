---
title: Gossip
description: Desktop Nostr client with outbox model
---

# Gossip

**Native desktop Nostr client.** Privacy-focused with intelligent relay management.

## Overview

Gossip is a desktop Nostr client written in Rust, known for pioneering the outbox model for relay selection. It provides a native, performant experience with strong privacy features.

## Key Features

### Outbox Model Pioneer

```
┌─────────────────────────────────────────────────────────┐
│                   Outbox Model                           │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Traditional:                                           │
│  Connect to fixed list of popular relays               │
│  Hope everyone you follow is there                     │
│                                                          │
│  Gossip Outbox Model:                                   │
│  1. Read user's relay list (NIP-65)                    │
│  2. Connect to their write relays                      │
│  3. Fetch their content directly                       │
│                                                          │
│  Result: Better decentralization, less missing content │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Native Desktop

| Feature | Benefit |
|---------|---------|
| **Rust** | Fast, memory-safe |
| **Native UI** | OS-integrated |
| **Local storage** | Your data stays local |
| **No browser** | Direct relay connections |

### Privacy Features

- **Local key storage** — Never leaves your machine
- **Selective relay connections** — Only connect where needed
- **No tracking** — No analytics or telemetry
- **Tor support** — Optional onion routing

## Core Features

| Feature | Description |
|---------|-------------|
| **Feed** | Chronological timeline |
| **Threads** | Full conversation view |
| **DMs** | Encrypted messages |
| **Profiles** | View and edit |
| **Relay management** | Fine-grained control |
| **Zaps** | Lightning payments |

## Installation

### Linux

```bash
# Flatpak
flatpak install flathub com.mikedilger.gossip

# Or build from source
git clone https://github.com/mikedilger/gossip.git
cd gossip
cargo build --release
```

### macOS

Download from GitHub releases or build from source.

### Windows

Download installer from GitHub releases.

## Configuration

### Key Import

```
Settings → Identity → Import nsec
```

### Relay Settings

```
Settings → Relays

Write relays: Where your posts go
Read relays: Where to fetch others' posts
Advertise relays: Published in NIP-65
```

### Privacy Options

```
Settings → Privacy

□ Use Tor
□ Verify signatures only for followed
□ Prefer local cache
```

## Outbox Implementation

Gossip reads NIP-65 relay lists:

```json
{
  "kind": 10002,
  "tags": [
    ["r", "wss://relay.damus.io", "write"],
    ["r", "wss://nos.lol", "read"],
    ["r", "wss://relay.nostr.band"]
  ]
}
```

Then connects strategically:
- Write to your write relays
- Read from follows' write relays
- Discover relays as needed

## Comparison

| Feature | Gossip | Damus | Web clients |
|---------|--------|-------|-------------|
| Platform | Desktop | iOS | Browser |
| Language | Rust | Swift | JS |
| Outbox model | Pioneer | Yes | Varies |
| Local storage | Full | App | IndexedDB |
| Privacy | High | Medium | Varies |

## Links

- **GitHub:** [mikedilger/gossip](https://github.com/mikedilger/gossip)
- **Releases:** GitHub releases page
- **Developer:** Mike Dilger

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Amethyst](/projects/amethyst) — Also uses outbox
- [Coracle](/projects/coracle) — Web client with outbox
- [NDK](/projects/ndk) — Library with outbox support
