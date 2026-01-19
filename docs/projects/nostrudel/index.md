---
title: noStrudel
description: Feature-rich Nostr exploration client
---

# noStrudel

**A sandbox for exploring Nostr.** Maximum features, full protocol visibility.

## Overview

noStrudel is a web client designed to let users explore the Nostr protocol in depth. Unlike clients that hide complexity, noStrudel exposes as much information as possible, making it ideal for developers, power users, and anyone who wants to understand how Nostr works under the hood.

## Key Features

### Protocol Transparency

```
┌─────────────────────────────────────────────────────────┐
│                   noStrudel Philosophy                   │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Most clients:                                          │
│  ┌─────────────────────────────────────────────────────┐│
│  │  Events ──► Hidden ──► Pretty UI                   ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
│  noStrudel:                                             │
│  ┌─────────────────────────────────────────────────────┐│
│  │  Events ──► Visible ──► Pretty UI + Raw Data       ││
│  │                                                      ││
│  │  See the JSON behind every note                     ││
│  │  Inspect relay responses                            ││
│  │  View event signatures                              ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Thread Exploration

```
┌─────────────────────────────────────────────────────────┐
│                    Thread View                           │
├─────────────────────────────────────────────────────────┤
│  Tabs:                                                   │
│  [Replies] [Quotes] [Zaps] [Reactions] [Raw]            │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐│
│  │  Original Note                                      ││
│  │  "Hello Nostr world!"                              ││
│  │                                                      ││
│  │  ├── Reply 1                                        ││
│  │  │   └── Nested reply                              ││
│  │  ├── Reply 2                                        ││
│  │  └── Reply 3                                        ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
│  See quotes, zaps, and reactions in dedicated tabs     │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Maximum NIP Support

| Category | NIPs Supported |
|----------|----------------|
| Core | NIP-01, 02, 04, 09 |
| Discovery | NIP-05, 19 |
| Media | NIP-94, 96 |
| Wallet | NIP-47 (NWC), 57 (zaps) |
| Auth | NIP-07, 42, 46, 49 |
| Communities | NIP-72 |
| Wikis | Wiki articles |

### Security Features

| Feature | Description |
|---------|-------------|
| **NIP-49 encryption** | Encrypt nsec with password |
| **NIP-42 auth** | Relay authentication |
| **WASM verification** | Fast signature checks |
| **Extension support** | Alby, nos2x, Amber |

### Special Features

| Feature | Description |
|---------|-------------|
| **Blindspot feeds** | See what you're missing |
| **Blossom uploads** | Decentralized media |
| **Wiki editing** | View and edit articles |
| **Launchpad** | Quick access dashboard |
| **Raw event view** | See underlying JSON |

## Getting Started

### Web Access

1. Go to [nostrudel.ninja](https://nostrudel.ninja/)
2. Login with browser extension (recommended)
3. Or set encryption password for nsec
4. Explore the protocol

### Self-Hosting

```bash
# Clone repository
git clone https://github.com/hzrd149/nostrudel.git
cd nostrudel

# Install dependencies
pnpm install

# Development
pnpm dev

# Build for production
pnpm build
```

### Docker

```bash
docker run -p 8080:80 ghcr.io/hzrd149/nostrudel
```

## Login Options

| Method | Security | Recommended |
|--------|----------|-------------|
| **Browser extension** | High | Yes |
| **Encrypted nsec** | Medium | Yes |
| **NIP-46 bunker** | High | Yes |
| **Raw nsec** | Low | No |

> ⚠️ Web clients have XSS risk. Use browser extensions when possible.

## Interface

### Main Sections

| Section | Description |
|---------|-------------|
| **Home** | Your feed |
| **Notifications** | Mentions, replies, zaps |
| **Messages** | DMs |
| **Communities** | Group discussions |
| **Relays** | Manage connections |
| **Tools** | Developer utilities |

### Developer Tools

- **Event inspector** — View raw JSON
- **Relay debugger** — Monitor connections
- **Signature verifier** — Check event validity
- **NIP tester** — Test protocol features

## Configuration

### Relay Authentication (NIP-42)

Enable for authenticated relays:

```
Settings → Advanced → Enable NIP-42

Supported relays:
- nostr.wine
- relay.snort.social
- Other authenticated relays
```

### Blossom Uploads

Enable decentralized media:

```
Settings → Media → Enable Blossom
Add servers:
- blossom.oxtr.dev
- Your own Blossom server
```

### Performance

```
Settings → Advanced → Enable nostr-wasm

Uses WebAssembly for faster:
- Signature verification
- Event processing
- Cryptographic operations
```

## Use Cases

### For Developers

- Inspect event structure
- Debug relay connections
- Test NIP implementations
- Learn protocol details

### For Power Users

- Maximum feature access
- Fine-grained control
- See what other clients hide
- Blindspot detection

### For Curious Users

- Understand how Nostr works
- Explore the protocol
- Learn by doing

## Comparison

| Feature | noStrudel | Snort | Primal |
|---------|-----------|-------|--------|
| Raw events | Yes | No | No |
| NIP coverage | Maximum | High | Medium |
| Self-host | Yes | Yes | No |
| Blindspot feeds | Yes | No | No |
| Wiki support | Yes | No | No |
| Target user | Power/Dev | General | General |

## Links

- **Website:** [nostrudel.ninja](https://nostrudel.ninja/)
- **GitHub:** [hzrd149/nostrudel](https://github.com/hzrd149/nostrudel)
- **Developer:** hzrd149

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Snort](/projects/snort) — Simpler web client
- [Coracle](/projects/coracle) — WoT-focused client
- [Alby](/projects/alby) — Browser extension
