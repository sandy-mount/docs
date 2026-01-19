---
sidebar_position: 4
title: Nostr
description: Censorship-resistant events with cryptographic identity
---

# Nostr

**Nostr (Notes and Other Stuff Transmitted by Relays)** is a simple, censorship-resistant protocol for decentralized communication.

## Core Concepts

### Events

Everything in Nostr is an event — a signed JSON object:

```json
{
  "id": "abc123...",
  "pubkey": "npub1...",
  "created_at": 1234567890,
  "kind": 1,
  "tags": [],
  "content": "Hello, Nostr!",
  "sig": "signature..."
}
```

Key properties:
- **id** — SHA256 hash of the event
- **pubkey** — Author's public key
- **sig** — Schnorr signature proving authorship
- **kind** — Event type (1 = text note, 0 = profile, etc.)

### Keys

Your identity is a keypair:

- **nsec** — Private key (keep secret!)
- **npub** — Public key (your identity)

No registration. No username. Just cryptographic keys.

```bash
# Generate with noskey
noskey generate
# npub1abc123...
# nsec1xyz789...
```

### Relays

Relays are dumb servers that store and forward events:

```
┌─────────┐     ┌─────────┐     ┌─────────┐
│ Client  │────►│  Relay  │◄────│ Client  │
│ (write) │     │ (store) │     │ (read)  │
└─────────┘     └─────────┘     └─────────┘
```

- Clients publish events to relays
- Clients subscribe to events from relays
- Relays don't verify identity — the signature does

### Multiple Relays

Users connect to multiple relays for redundancy:

```javascript
const relays = [
  "wss://relay.damus.io",
  "wss://relay.nostr.band",
  "wss://nostr.wine"
];
```

If one relay goes down or censors you, others still have your events.

## Event Kinds

| Kind | Purpose |
|------|---------|
| 0 | Profile metadata |
| 1 | Text note (tweet-like) |
| 3 | Contact list (follows) |
| 4 | Encrypted direct message |
| 7 | Reaction (like) |
| 1984 | Report |
| 30023 | Long-form content |

## NIPs (Nostr Implementation Possibilities)

NIPs are specifications for Nostr features:

| NIP | Description |
|-----|-------------|
| [NIP-01](https://github.com/nostr-protocol/nips/blob/master/01.md) | Basic protocol |
| [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md) | DNS-based verification |
| [NIP-19](https://github.com/nostr-protocol/nips/blob/master/19.md) | bech32 encoding |
| [NIP-98](https://github.com/nostr-protocol/nips/blob/master/98.md) | HTTP Auth |

### NIP-98: HTTP Authentication

Nostr events can authenticate HTTP requests:

```http
GET /protected-resource HTTP/1.1
Authorization: Nostr <base64-encoded-event>
```

This lets you use your Nostr identity to authenticate to any HTTP service — including Solid pods via [Nosdav](/projects/nosdav).

## Communication

### WebSocket Protocol

Clients communicate with relays via WebSocket:

```javascript
// Subscribe to events
["REQ", "subscription-id", {
  "kinds": [1],
  "authors": ["npub1abc..."],
  "limit": 10
}]

// Publish an event
["EVENT", { /* event object */ }]

// Close subscription
["CLOSE", "subscription-id"]
```

### Filters

Query events with filters:

```json
{
  "kinds": [1],           // Text notes
  "authors": ["npub1..."], // From these pubkeys
  "since": 1234567890,    // After this timestamp
  "#t": ["bitcoin"],      // With this hashtag
  "limit": 50
}
```

## Implementations

### Clients

- **[Damus](https://damus.io)** — iOS client
- **[Amethyst](https://github.com/vitorpamplona/amethyst)** — Android client
- **[Snort](https://snort.social)** — Web client
- **[Primal](https://primal.net)** — Web/mobile client

### Relays

- **[strfry](https://github.com/hoytech/strfry)** — High-performance C++ relay
- **[nostream](https://github.com/Cameri/nostream)** — TypeScript relay

### Libraries

- **[nostr-tools](https://github.com/nbd-wtf/nostr-tools)** — JavaScript library
- **[Nostr Components](/projects/nostr-components)** — Web components

## Quick Example

```javascript
import { generateSecretKey, getPublicKey, finalizeEvent } from 'nostr-tools';

// Generate keys
const sk = generateSecretKey();
const pk = getPublicKey(sk);

// Create and sign an event
const event = finalizeEvent({
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: 'Hello, Nostr!'
}, sk);

// Publish to relay
const ws = new WebSocket('wss://relay.damus.io');
ws.onopen = () => ws.send(JSON.stringify(['EVENT', event]));
```

## Learn More

- [nostr.com](https://nostr.com) — Protocol overview
- [Nostr User Guide](/projects/nostr-userguide) — Getting started
- [Nostr Dev Guide](/projects/nostr-devguide) — Building on Nostr
- [did:nostr](/projects/did-nostr) — DIDs using Nostr keys
