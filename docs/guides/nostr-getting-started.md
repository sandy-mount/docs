---
sidebar_position: 5
title: Nostr Getting Started
description: Build with Nostr events and relays
---

# Nostr Getting Started

**Connect to relays, create events, and build Nostr clients.**

## Prerequisites

```bash
npm install nostr-tools
```

## Generate Keys

```javascript
import { generateSecretKey, getPublicKey } from 'nostr-tools';

const sk = generateSecretKey(); // Uint8Array
const pk = getPublicKey(sk);    // hex string

console.log('Public key (npub):', pk);
// Store sk securely!
```

## Connect to Relays

```javascript
import { Relay } from 'nostr-tools/relay';

const relay = await Relay.connect('wss://relay.damus.io');
console.log('Connected to', relay.url);
```

## Subscribe to Events

```javascript
const sub = relay.subscribe([
  { kinds: [1], limit: 10 }  // Recent text notes
], {
  onevent(event) {
    console.log('Got event:', event);
  },
  oneose() {
    console.log('End of stored events');
  }
});

// Later: sub.close();
```

## Publish Events

```javascript
import { finalizeEvent } from 'nostr-tools';

const event = finalizeEvent({
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: 'Hello, Nostr!'
}, sk);

await relay.publish(event);
```

## Event Kinds

| Kind | Purpose |
|------|---------|
| 0 | Profile metadata |
| 1 | Text note |
| 3 | Contact list |
| 4 | Encrypted DM |
| 7 | Reaction |

## Next Steps

- [Nostr Protocol](/protocols/nostr) — Full protocol details
- [NIP-98](/guides/authentication#nip-98) — HTTP authentication
- [Noskey](/projects/noskey) — CLI key generation
