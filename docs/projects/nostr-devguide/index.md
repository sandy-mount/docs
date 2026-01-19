---
title: Nostr Developer Guide
description: Building applications on Nostr
---

# Nostr Developer Guide

**Build on Nostr.** Libraries, patterns, and best practices for developers.

## Overview

This guide covers:

- Protocol fundamentals
- Client development
- Relay implementation
- NIP compliance
- Best practices

## Quick Start

```bash
npm install nostr-tools
```

```javascript
import { generateSecretKey, getPublicKey, finalizeEvent } from 'nostr-tools';

// Generate identity
const sk = generateSecretKey();
const pk = getPublicKey(sk);

// Create an event
const event = finalizeEvent({
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: 'Hello, Nostr!'
}, sk);

console.log(event);
```

## Libraries

### JavaScript/TypeScript
- **nostr-tools** — Full-featured library
- **nostr-components** — Web components

### Other Languages
- **rust-nostr** — Rust
- **python-nostr** — Python
- **go-nostr** — Go

## Key Concepts

### Events

Everything is an event — a signed JSON object:

```json
{
  "id": "<sha256 hash>",
  "pubkey": "<hex public key>",
  "created_at": 1234567890,
  "kind": 1,
  "tags": [["p", "..."], ["e", "..."]],
  "content": "message",
  "sig": "<schnorr signature>"
}
```

### Kinds

| Kind | Purpose |
|------|---------|
| 0 | Profile metadata |
| 1 | Text note |
| 3 | Contact list |
| 4 | Encrypted DM |
| 5 | Deletion |
| 7 | Reaction |

### Tags

Tags add metadata and enable referencing:

- `["p", "<pubkey>"]` — Mention a user
- `["e", "<event-id>"]` — Reference an event
- `["t", "hashtag"]` — Hashtag

### Relay Communication

WebSocket protocol with simple message types:

```javascript
// Subscribe
["REQ", "sub-id", { kinds: [1], limit: 10 }]

// Publish
["EVENT", { /* event */ }]

// Close subscription
["CLOSE", "sub-id"]
```

## Links

- **Full Guide:** [nostrcg.github.io/devguide](https://nostrcg.github.io/devguide/)
- **NIPs:** [github.com/nostr-protocol/nips](https://github.com/nostr-protocol/nips)
- **nostr-tools:** [github.com/nbd-wtf/nostr-tools](https://github.com/nbd-wtf/nostr-tools)

## See Also

- [Nostr Protocol](/protocols/nostr) — Protocol details
- [Nostr Getting Started](/guides/nostr-getting-started) — Tutorial
- [Authentication](/guides/authentication) — NIP-98
