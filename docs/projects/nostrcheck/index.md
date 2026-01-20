---
title: Nostrcheck
description: NIP-05 verification and file hosting service
---

# Nostrcheck

**Identity and hosting for Nostr.** NIP-05 verification, file hosting, and more.

## Overview

Nostrcheck is a comprehensive service providing NIP-05 identity verification, file hosting, and relay infrastructure for the Nostr ecosystem. Free to use.

## Key Features

### Services Offered

```
┌─────────────────────────────────────────────────────────────────┐
│                      Nostrcheck Services                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   NIP-05 Verification                                          │
│   └── Map public keys to human-readable identifiers            │
│       alice@nostrcheck.me → npub1abc...                        │
│                                                                 │
│   File Hosting                                                  │
│   └── Upload images, videos via NIP-94/96                      │
│   └── Blossom protocol support                                 │
│                                                                 │
│   Relay Service                                                 │
│   └── Nostr relay infrastructure                               │
│                                                                 │
│   Lightning Redirects                                           │
│   └── Lightning address routing                                │
│                                                                 │
│   Nostr Wallet Connect                                          │
│   └── NWC integration via LNbits                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### NIP-05 Verification

Human-readable Nostr identifiers:
```
alice@nostrcheck.me
```

This maps to your public key and provides:
- Easier sharing of identity
- Verification display in clients
- Relay hints for discovery

### File Hosting

| Protocol | Description |
|----------|-------------|
| **NIP-94** | File metadata |
| **NIP-96** | HTTP file storage |
| **Blossom** | Decentralized media |

### Validation Tools

- NIP-05 checker
- DNS validation
- Verification testing

## Usage

### Get NIP-05 Identifier

1. Visit nostrcheck.me
2. Connect with your Nostr key
3. Choose your username
4. Add to your profile

### Upload Files

1. Authenticate with Nostr
2. Upload via web interface or API
3. Get permanent URL
4. Use in posts

## Technical Details

| Feature | Implementation |
|---------|----------------|
| Auth | Nostr-based |
| Storage | NIP-94/96, Blossom |
| Lightning | LNbits integration |
| API | CORS-compliant |
| Format | JSON |

## Comparison

| Feature | Nostrcheck | Nostr.build |
|---------|------------|-------------|
| NIP-05 | Yes | No |
| File hosting | Yes | Yes |
| Relay | Yes | No |
| Lightning | Yes | No |
| Free | Yes | Yes (limited) |

## Links

- **Website:** [nostrcheck.me](https://nostrcheck.me/)
- **GitHub:** [quentintaranpino/nostrcheck-server](https://github.com/quentintaranpino/nostrcheck-server)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Nostr.build](/projects/nostr-build) — Media hosting
- [Blossom](/projects/blossom) — Decentralized media
