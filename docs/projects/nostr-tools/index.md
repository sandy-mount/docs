---
title: nostr-tools
description: JavaScript library for Nostr development
---

# nostr-tools

**The essential JavaScript library for Nostr development.** Create keys, sign events, connect to relays.

## Overview

nostr-tools is the go-to library for building Nostr applications in JavaScript/TypeScript. It provides everything from key generation to relay management to NIP implementations.

## Installation

```bash
# npm
npm install nostr-tools

# JSR (Deno/modern runtimes)
npx jsr add @nostr/tools
```

Requires TypeScript >= 5.0 if using TypeScript.

## Core Features

### Key Generation

```javascript
import { generateSecretKey, getPublicKey } from 'nostr-tools/pure';

// Generate new keypair
const sk = generateSecretKey();  // Uint8Array
const pk = getPublicKey(sk);     // hex string (npub derivable)

console.log('Public key:', pk);
// Keep sk secret!
```

### Creating Events

```javascript
import { finalizeEvent, verifyEvent } from 'nostr-tools/pure';

const event = finalizeEvent({
  kind: 1,  // Text note
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: 'Hello, Nostr!'
}, sk);

// Event now has id and sig
console.log('Event ID:', event.id);

// Verify the event
const isValid = verifyEvent(event);
```

### Connecting to Relays

```javascript
import { Relay } from 'nostr-tools/relay';

// Connect to a relay
const relay = await Relay.connect('wss://relay.damus.io');
console.log('Connected to', relay.url);

// Subscribe to events
const sub = relay.subscribe([
  { kinds: [1], limit: 10 }
], {
  onevent(event) {
    console.log('Received:', event.content);
  },
  oneose() {
    console.log('End of stored events');
  }
});

// Publish an event
await relay.publish(event);

// Close subscription when done
sub.close();
```

### Relay Pool

Manage multiple relays:

```javascript
import { SimplePool } from 'nostr-tools/pool';

const pool = new SimplePool();

// Publish to multiple relays
await Promise.all(
  pool.publish(['wss://relay1.example', 'wss://relay2.example'], event)
);

// Query across relays
const events = await pool.querySync(
  ['wss://relay1.example', 'wss://relay2.example'],
  { kinds: [1], authors: [pk], limit: 20 }
);

// Subscribe across relays
const sub = pool.subscribeMany(
  ['wss://relay1.example', 'wss://relay2.example'],
  [{ kinds: [1], limit: 10 }],
  {
    onevent(event) {
      console.log(event);
    }
  }
);
```

## NIP Implementations

### NIP-19: Bech32 Encoding

```javascript
import { nip19 } from 'nostr-tools';

// Encode
const npub = nip19.npubEncode(pk);     // npub1...
const nsec = nip19.nsecEncode(sk);     // nsec1...
const note = nip19.noteEncode(eventId); // note1...

// Decode
const { type, data } = nip19.decode(npub);
// type: 'npub', data: hex pubkey
```

### NIP-04: Encrypted DMs

```javascript
import { nip04 } from 'nostr-tools';

// Encrypt
const ciphertext = await nip04.encrypt(sk, recipientPk, 'Secret message');

// Decrypt
const plaintext = await nip04.decrypt(sk, senderPk, ciphertext);
```

### NIP-44: Newer Encryption

```javascript
import { nip44 } from 'nostr-tools';

// Encrypt with NIP-44 (recommended for new apps)
const ciphertext = nip44.encrypt(sk, recipientPk, 'Secret message');

// Decrypt
const plaintext = nip44.decrypt(sk, senderPk, ciphertext);
```

### NIP-98: HTTP Auth

```javascript
import { finalizeEvent } from 'nostr-tools';

// Create auth event
const authEvent = finalizeEvent({
  kind: 27235,
  created_at: Math.floor(Date.now() / 1000),
  tags: [
    ['u', 'https://api.example.com/resource'],
    ['method', 'GET']
  ],
  content: ''
}, sk);

// Use in Authorization header
const response = await fetch('https://api.example.com/resource', {
  headers: {
    'Authorization': `Nostr ${btoa(JSON.stringify(authEvent))}`
  }
});
```

## Advanced Features

### WebAssembly Support

For better performance in browsers:

```javascript
import { setNostrWasm, generateSecretKey, finalizeEvent } from 'nostr-tools/wasm';
import { initNostrWasm } from 'nostr-wasm';

// Initialize WASM
const wasm = await initNostrWasm();
setNostrWasm(wasm);

// Now operations use WASM
const sk = generateSecretKey();
```

### Custom WebSocket Implementation

```javascript
import { useWebSocketImplementation } from 'nostr-tools/pool';
import WebSocket from 'ws';  // Node.js

useWebSocketImplementation(WebSocket);
```

### Relay Ping/Reconnect

```javascript
const pool = new SimplePool({
  enablePing: true,      // Heartbeat to detect disconnects
  enableReconnect: true  // Auto-reconnect with exponential backoff
});
```

### NIP-46: Remote Signing (Bunker)

```javascript
import { BunkerSigner } from 'nostr-tools/nip46';

// Connect to a remote signer
const signer = new BunkerSigner(
  clientSecretKey,
  'bunker://pubkey?relay=wss://relay.example'
);

await signer.connect();

// Sign events remotely
const event = await signer.signEvent({
  kind: 1,
  content: 'Signed by bunker',
  tags: [],
  created_at: Math.floor(Date.now() / 1000)
});
```

## Higher-Level Libraries

For more abstraction, see [@nostr/gadgets](https://jsr.io/@nostr/gadgets) which builds on nostr-tools.

## Links

- **npm:** [nostr-tools](https://www.npmjs.com/package/nostr-tools)
- **JSR:** [@nostr/tools](https://jsr.io/@nostr/tools)
- **GitHub:** [nbd-wtf/nostr-tools](https://github.com/nbd-wtf/nostr-tools)

## See Also

- [Nostr Protocol](/protocols/nostr) — Protocol documentation
- [Nostr Getting Started](/guides/nostr-getting-started) — Tutorial
- [Noskey](/projects/noskey) — CLI key generation
- [Authentication](/guides/authentication#nip-98) — NIP-98 auth
