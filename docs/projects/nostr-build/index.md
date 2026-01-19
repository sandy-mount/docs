---
title: Nostr.build
description: Media hosting for the Nostr ecosystem
---

# Nostr.build

**Free media hosting for Nostr.** Upload images and videos, get shareable links.

## Overview

Nostr.build is a media hosting service designed for the Nostr ecosystem. It provides free image and video uploads with privacy features, returning URLs that can be embedded in Nostr posts.

## Key Features

### Media Uploads

```
┌─────────────────────────────────────────────────────────────────┐
│                      Nostr.build                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Supported formats:                                             │
│  ├── Images: .jpg, .png, .gif, .webp                           │
│  ├── Videos: .mp4, .mov, .webm                                 │
│  └── Audio: .mp3                                               │
│                                                                 │
│  Upload ──► Process ──► CDN ──► Shareable URL                  │
│                │                                                │
│                ▼                                                │
│         Strip metadata                                         │
│         (location, device info)                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Privacy Features

| Feature | Description |
|---------|-------------|
| **Metadata stripping** | Removes EXIF data including location |
| **Anonymous uploads** | No account required for basic use |
| **No tracking** | Minimal analytics |

### Blossom Integration

Works with the Blossom protocol:
- Upload to multiple servers simultaneously
- Decentralized media backup
- Censorship resistance

## Account Tiers

### Free Tier

- Basic uploads
- Standard file size limits
- Public media library access

### Paid Tier (Bitcoin only)

- Higher upload limits
- Private media repository
- Priority processing
- Supports development

## Usage

### Web Upload

1. Go to [nostr.build](https://nostr.build/)
2. Drag and drop or select file
3. Copy the returned URL
4. Paste in your Nostr post

### API Access

Free API for Nostr/Bitcoin projects:
```bash
curl -X POST https://nostr.build/api/upload \
  -F "file=@image.jpg"
```

Returns:
```json
{
  "url": "https://image.nostr.build/abc123.jpg"
}
```

## Integration

Works with most Nostr clients:
- Damus
- Amethyst
- Primal
- Snort
- Many others auto-detect nostr.build URLs

## Self-Hosting

Open source — run your own instance:
- Full control over media
- Custom domain
- Private uploads only

## Comparison

| Feature | Nostr.build | Blossom | Satellite |
|---------|-------------|---------|-----------|
| Free tier | Yes | Varies | Yes |
| Metadata strip | Yes | Optional | Yes |
| Blossom support | Yes | Native | Partial |
| Self-host | Yes | Yes | No |
| Payment | BTC only | Varies | Various |

## Links

- **Website:** [nostr.build](https://nostr.build/)
- **GitHub:** [nostrbuild/nostr.build](https://github.com/nostrbuild/nostr.build)

## See Also

- [Blossom](/projects/blossom) — Decentralized media protocol
- [Satellite](/projects/satellite) — CDN-backed client
- [Nostr Protocol](/protocols/nostr) — The protocol
