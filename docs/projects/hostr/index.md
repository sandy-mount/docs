---
title: Hostr
description: Decentralized web hosting on Nostr
---

# Hostr

**Host websites on Nostr.** Deploy SPAs to relay infrastructure.

## Overview

Hostr is a command-line tool for hosting Single Page Applications (SPAs) and static content using Nostr relay infrastructure. Censorship-resistant, decentralized web hosting.

## Key Features

### Decentralized Hosting

```
┌─────────────────────────────────────────────────────────────────┐
│                       Hostr Architecture                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Traditional Hosting:                                          │
│   Website ──► Single server ──► Single point of failure       │
│                                                                 │
│   Hostr:                                                        │
│   Website ──► Nostr event ──► Multiple relays                  │
│                    │                                            │
│                    ├──► Relay A                                │
│                    ├──► Relay B                                │
│                    └──► Relay C                                │
│                                                                 │
│   Distributed, redundant, censorship-resistant                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Deploy SPAs** | HTML, CSS, JavaScript |
| **Multi-relay** | Deploy to multiple relays |
| **CLI tool** | Command-line interface |
| **Free** | Use any Nostr relay |
| **Censorship-resistant** | Distributed hosting |

### Supported Content

- HTML files
- CSS stylesheets
- JavaScript files
- Static assets
- Single Page Applications

## Usage

### Deploy a Website

```bash
# Initialize
hostr init

# Add relays
hostr add-relay wss://relay.example.com

# Deploy
hostr deploy ./dist
```

### Commands

| Command | Description |
|---------|-------------|
| `init` | Initialize project |
| `deploy` | Deploy to relays |
| `add-relay` | Add relay endpoint |
| `remove-relay` | Remove relay |
| `list-relay` | Show configured relays |
| `start` | Start local server |

## Technical Details

- Written in Go
- Files stored as Nostr events
- Uses relay network for distribution
- Related: NIP-96 (HTTP File Storage)

## Use Cases

1. **Personal sites** — Host your portfolio
2. **Documentation** — Static docs hosting
3. **Dapps** — Decentralized frontends
4. **Landing pages** — Campaign pages

## Comparison

| Feature | Hostr | Vercel | IPFS |
|---------|-------|--------|------|
| Protocol | Nostr | HTTP | IPFS |
| Censorship | Resistant | Platform | Resistant |
| Cost | Free (relays) | Freemium | Variable |
| Speed | Relay-dependent | Fast CDN | Variable |

## Links

- **GitHub:** [studiokaiji/nostr-webhost](https://github.com/studiokaiji/nostr-webhost)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [strfry](/projects/strfry) — High-performance relay
- [Blossom](/projects/blossom) — Media hosting
