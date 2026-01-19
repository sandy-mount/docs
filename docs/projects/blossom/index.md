---
title: Blossom
description: Decentralized media hosting for Nostr
---

# Blossom

**Blobs Stored Simply on Mediaservers.** Decentralized, censorship-resistant media hosting for Nostr.

## Overview

Blossom is a protocol for storing and retrieving binary data (images, videos, audio) across multiple servers. Using hash-based addressing and Nostr for authorization, Blossom ensures your media remains available even if individual servers go down.

## How It Works

```
┌─────────────────────────────────────────────────────────┐
│                   Blossom Protocol                       │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  1. Upload image to Blossom server                      │
│     ┌───────────────────────────────────────────────┐  │
│     │  image.jpg ──► SHA256 hash ──► Store blob     │  │
│     │  Result: abc123...                             │  │
│     └───────────────────────────────────────────────┘  │
│                                                          │
│  2. Publish Nostr event with hash                       │
│     ┌───────────────────────────────────────────────┐  │
│     │  Event references: https://server.com/abc123  │  │
│     └───────────────────────────────────────────────┘  │
│                                                          │
│  3. Any client can fetch from any Blossom server        │
│     ┌───────────────────────────────────────────────┐  │
│     │  Server A down? → Try Server B with same hash │  │
│     │  Same file, verified by hash                   │  │
│     └───────────────────────────────────────────────┘  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Key Features

### Hash-Based Addressing

Files are addressed by their SHA-256 hash:

```
┌─────────────────────────────────────────┐
│  File: photo.jpg                         │
│  Hash: a1b2c3d4e5f6...                  │
│                                          │
│  URL: https://blossom.server/a1b2c3d4   │
│                                          │
│  Any server with this hash = same file  │
│  Hash verifies file integrity            │
└─────────────────────────────────────────┘
```

Benefits:
- **Verification** — Prove you got the right file
- **Deduplication** — Same file, one hash
- **Server-agnostic** — Get from any mirror

### Mirroring

```
┌─────────────────────────────────────────────────────────┐
│                   Mirror Setup                           │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Primary Server: blossom.example.com                    │
│  Mirrors:                                                │
│  ├── blossom.nostr.build                               │
│  └── cdn.backup.com                                     │
│                                                          │
│  Upload Flow:                                           │
│  File → Primary → Auto-mirror to backups               │
│                                                          │
│  Retrieval Flow:                                        │
│  Primary down? → Try Mirror 1 → Try Mirror 2           │
│                                                          │
│  Always available, always the same file                 │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Nostr Integration

Your Blossom settings are published to Nostr:

```json
{
  "kind": 10063,
  "tags": [
    ["server", "https://blossom.primary.com", "primary"],
    ["server", "https://blossom.mirror.com", "mirror"]
  ],
  "content": ""
}
```

Clients read your settings to know where to fetch your media.

### Censorship Resistance

| Scenario | Traditional Hosting | Blossom |
|----------|--------------------:|--------:|
| Server bans you | Content gone | Use another server |
| Server goes down | Content unavailable | Mirrors still work |
| Regional block | Can't access | Try different server |

## BUD Specifications

Blossom is defined by BUDs (Blossom Upgrade Documents):

| BUD | Name | Description |
|-----|------|-------------|
| BUD-01 | Basic Operations | Upload, download, delete |
| BUD-02 | Blob Descriptors | Metadata for blobs |
| BUD-04 | Mirroring | Auto-copy to backups |
| BUD-05 | Media Endpoints | Standard URLs |
| BUD-06 | HEAD Requests | Check existence |
| BUD-08 | File Metadata | Extended info |

## NIP-B7

The Nostr Integration Proposal for Blossom:

```json
{
  "kind": 1,
  "content": "Check out this image!",
  "tags": [
    ["imeta",
      "url https://blossom.server/abc123",
      "x abc123...",
      "m image/jpeg",
      "dim 1920x1080",
      "blurhash LKJHGF..."
    ]
  ]
}
```

Clients supporting NIP-B7:
- Know the file hash
- Can verify downloads
- Can find mirrors if needed

## Public Servers

| Server | Provider | Features |
|--------|----------|----------|
| blossom.nostr.build | nostr.build | Global CDN |
| blossom.primal.net | Primal | Default in Primal |
| Various self-hosted | Community | Your own control |

### Using nostr.build

```
Upload: POST https://blossom.nostr.build/upload
Fetch:  GET https://npub...blossom.nostr.build/hash
```

Each user gets their own subdomain for organization.

## Client Support

| Client | Blossom Support |
|--------|-----------------|
| **Primal** | Native, default |
| **noStrudel** | Optional, settings |
| **Amethyst** | Supported |
| **Coracle** | Supported |

## Running Your Own

### Docker

```yaml
# docker-compose.yml
version: '3'
services:
  blossom:
    image: hzrd149/blossom:latest
    ports:
      - "3000:3000"
    volumes:
      - ./data:/app/data
    environment:
      PUBLIC_URL: https://blossom.yourdomain.com
```

### Configuration

```json
{
  "port": 3000,
  "dataDir": "./data",
  "maxUploadSize": 100000000,
  "allowedMimeTypes": [
    "image/*",
    "video/*",
    "audio/*"
  ]
}
```

## Authorization

Uploads require Nostr-signed auth events:

```json
{
  "kind": 24242,
  "tags": [
    ["t", "upload"],
    ["size", "1234567"],
    ["x", "sha256hash"]
  ],
  "content": ""
}
```

The signature proves you own the keypair, authorizing the upload.

## Comparison

| Feature | Blossom | IPFS | Traditional CDN |
|---------|---------|------|-----------------|
| Addressing | Hash | Hash | URL |
| Authorization | Nostr | None | API keys |
| Mirroring | Native | P2P | Manual |
| Nostr integration | Native | None | None |
| Self-hosting | Easy | Complex | Complex |

## Use Cases

### Social Media

- Profile pictures
- Post images/videos
- Media in DMs

### Content Publishing

- Blog images
- Podcast hosting
- Video content

### Backups

- Redundant storage
- Personal archives
- Distributed hosting

## Links

- **Specification:** [github.com/hzrd149/blossom](https://github.com/hzrd149/blossom)
- **NIP-B7:** [nips.nostr.com/B7](https://nips.nostr.com/B7)
- **nostr.build:** [blossom.nostr.build](https://blossom.nostr.build/)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [noStrudel](/projects/nostrudel) — Client with Blossom support
- [Primal](/projects/primal) — Native Blossom integration
- [Zapstr](/projects/zapstr) — Audio hosting
