---
title: Satellite
description: Nostr web client with CDN
---

# Satellite

**Nostr client with global CDN.** Fast, reliable access to Nostr content.

## Overview

Satellite is a Nostr web client that uses a CDN infrastructure for fast content delivery. It provides a polished user experience with reliable media hosting and global performance.

## Key Features

### CDN Infrastructure

```
┌─────────────────────────────────────────────────────────┐
│                   Satellite CDN                          │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  User uploads image                                     │
│            │                                             │
│            ▼                                             │
│  Satellite CDN stores and distributes                   │
│            │                                             │
│            ├──► Edge node (US)                          │
│            ├──► Edge node (EU)                          │
│            └──► Edge node (Asia)                        │
│                                                          │
│  Fast loading worldwide                                 │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Content Features

| Feature | Description |
|---------|-------------|
| **Posts** | Standard microblogging |
| **Media** | Images, videos via CDN |
| **Profiles** | View and edit |
| **Zaps** | Lightning payments |
| **Search** | Find content |

### Media Hosting

- Reliable uploads
- Global delivery
- Image optimization
- Video support

## Access

- **Web:** satellite.earth

## Comparison

| Feature | Satellite | Snort | Primal |
|---------|-----------|-------|--------|
| CDN | Built-in | No | Yes |
| Media hosting | Yes | External | Yes |
| Open source | Partial | Yes | Yes |

## Links

- **Website:** [satellite.earth](https://satellite.earth/)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Blossom](/projects/blossom) — Decentralized media
- [Primal](/projects/primal) — Another cached client
