---
sidebar_position: 3
title: Nosdav
description: WebDAV storage with Nostr authentication
---

# Nosdav

**WebDAV-compatible storage with Nostr authentication.** HTTP file storage meets cryptographic identity.

## The Idea

Nosdav combines:
- **WebDAV** — Standard HTTP protocol for file management
- **Nostr** — Cryptographic authentication via NIP-98

No passwords. No accounts. Just sign with your Nostr key.

## How It Works

```
┌─────────────┐     NIP-98 Auth     ┌─────────────┐
│   Client    │────────────────────►│   Nosdav    │
│  (Nostr key)│                     │   Server    │
└─────────────┘                     └─────────────┘
       │                                   │
       │ GET/PUT/DELETE                    │
       │ + Authorization header            │
       └───────────────────────────────────┘
```

1. Client creates a Nostr event (kind 27235)
2. Event is base64-encoded in Authorization header
3. Server verifies the signature
4. If valid, the request proceeds

## Authentication

NIP-98 authentication header:

```http
GET /files/document.txt HTTP/1.1
Authorization: Nostr <base64-encoded-event>
```

The event contains:
- URL being accessed
- HTTP method
- Timestamp (prevents replay)
- Your signature

## Quick Start

```bash
# Start a Nosdav server
npx nosdav

# Upload a file (with nostr-tools)
curl -X PUT https://nosdav.example/files/test.txt \
  -H "Authorization: Nostr $(nostr-sign)" \
  -d "Hello, Nosdav!"
```

## Use Cases

### Personal File Storage
Store files accessible with your Nostr identity.

### Pod Backend
Use Nosdav as storage for Solid-like data.

### Encrypted Storage
Client-side encrypt before upload — only you can read.

### Shared Spaces
Multiple Nostr users can have access to shared directories.

## Links

- **Website:** [nosdav.com](https://nosdav.com)
- **GitHub:** [nosdav/nosdav](https://github.com/nosdav/nosdav)
- **NIP-98:** [HTTP Auth spec](https://github.com/nostr-protocol/nips/blob/master/98.md)

## See Also

- [Nostr Protocol](/protocols/nostr) — The underlying identity system
- [NIP-98](/guides/authentication#nip-98) — HTTP authentication spec
- [Solid Protocol](/protocols/solid) — Similar concepts, different approach
