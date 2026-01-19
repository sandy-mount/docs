---
title: NDK
description: Nostr Development Kit for building applications
---

# NDK

**The comprehensive toolkit for building Nostr applications.** Modern, performant, and framework-ready.

## Overview

NDK (Nostr Development Kit) is a monorepo containing everything needed to build modern Nostr clients. From reactive UI bindings to advanced protocols like Web of Trust and Negentropy sync, NDK provides the building blocks for professional Nostr applications.

## Key Features

### Modern Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Your App                          │
├─────────────────────────────────────────────────────┤
│     Framework Bindings (Svelte/React/React Native)  │
├─────────────────────────────────────────────────────┤
│                    NDK Core                          │
│  ┌─────────┐  ┌──────────┐  ┌────────────────────┐ │
│  │ Events  │  │ Signers  │  │ Wallet Integration │ │
│  └─────────┘  └──────────┘  └────────────────────┘ │
│  ┌─────────┐  ┌──────────┐  ┌────────────────────┐ │
│  │ Relays  │  │ Caching  │  │ Web of Trust       │ │
│  └─────────┘  └──────────┘  └────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

- **TypeScript** — Full type safety
- **Reactive** — Built for modern UI frameworks
- **Modular** — Use only what you need
- **Well-documented** — Comprehensive API docs

### Framework Support

| Framework | Package | Status |
|-----------|---------|--------|
| **Svelte 5** | @nostr-dev-kit/ndk-svelte | First-class |
| **React** | @nostr-dev-kit/ndk-react | Full support |
| **React Native** | @nostr-dev-kit/ndk-mobile | Mobile-ready |
| **Vanilla JS** | @nostr-dev-kit/ndk | Core |

### Outbox Model

NDK pioneered outbox model support for intelligent relay management:

```javascript
import NDK from '@nostr-dev-kit/ndk';

const ndk = new NDK({
  outboxRelayUrls: ['wss://purplepag.es'],
  enableOutboxModel: true,
});

// NDK automatically discovers where users publish
// No manual relay configuration needed
```

### Session Management

Built-in multi-account sessions with persistence:

```javascript
// Login with browser extension (NIP-07)
const user = await ndk.signer.user();

// Or with private key
import { NDKPrivateKeySigner } from '@nostr-dev-kit/ndk';
const signer = new NDKPrivateKeySigner(privateKey);
ndk.signer = signer;

// Session persists automatically
```

### Wallet Integration

Seamless support for Cashu, NWC, and WebLN:

```javascript
import { NDKCashuWallet, NDKNWCWallet } from '@nostr-dev-kit/ndk';

// Cashu wallet
const cashuWallet = new NDKCashuWallet(ndk);

// NWC wallet
const nwcWallet = new NDKNWCWallet(ndk);
nwcWallet.connectionString = 'nostr+walletconnect://...';

// Reactive balance tracking
wallet.balance.subscribe(bal => console.log(bal));
```

### Caching Adapters

Multiple storage backends:

| Adapter | Use Case |
|---------|----------|
| **Dexie** | Browser IndexedDB |
| **Redis** | Server-side |
| **SQLite** | Mobile/Desktop |
| **In-memory** | Testing |
| **Nostr relay** | Distributed cache |

```javascript
import NDKCacheAdapterDexie from '@nostr-dev-kit/ndk-cache-dexie';

const cacheAdapter = new NDKCacheAdapterDexie({ dbName: 'myapp' });
const ndk = new NDK({ cacheAdapter });
```

### Web of Trust

Filter content based on social graph:

```javascript
const wot = await ndk.getWoT(user);
const trustScore = wot.getTrustScore(otherUser);
```

## Installation

```bash
# Core
npm install @nostr-dev-kit/ndk

# With React
npm install @nostr-dev-kit/ndk @nostr-dev-kit/ndk-react

# With Svelte
npm install @nostr-dev-kit/ndk @nostr-dev-kit/ndk-svelte

# With caching
npm install @nostr-dev-kit/ndk @nostr-dev-kit/ndk-cache-dexie
```

## Quick Start

```javascript
import NDK, { NDKEvent } from '@nostr-dev-kit/ndk';

// Initialize
const ndk = new NDK({
  explicitRelayUrls: [
    'wss://relay.damus.io',
    'wss://nos.lol',
  ],
});

await ndk.connect();

// Fetch events
const events = await ndk.fetchEvents({
  kinds: [1],
  authors: ['pubkey...'],
  limit: 20,
});

// Publish
const event = new NDKEvent(ndk);
event.kind = 1;
event.content = 'Hello from NDK!';
await event.publish();
```

## React Example

```jsx
import { NDKProvider, useNDK, useEvents } from '@nostr-dev-kit/ndk-react';

function App() {
  return (
    <NDKProvider
      relayUrls={['wss://relay.damus.io']}
    >
      <Feed />
    </NDKProvider>
  );
}

function Feed() {
  const { events } = useEvents({
    kinds: [1],
    limit: 50,
  });

  return (
    <div>
      {events.map(event => (
        <Note key={event.id} event={event} />
      ))}
    </div>
  );
}
```

## Svelte Example

```svelte
<script>
  import { ndkStore, eventStore } from '@nostr-dev-kit/ndk-svelte';

  const events = eventStore($ndkStore, {
    kinds: [1],
    limit: 50,
  });
</script>

{#each $events as event}
  <Note {event} />
{/each}
```

## Packages

| Package | Description |
|---------|-------------|
| `@nostr-dev-kit/ndk` | Core library |
| `@nostr-dev-kit/ndk-svelte` | Svelte 5 bindings |
| `@nostr-dev-kit/ndk-react` | React hooks |
| `@nostr-dev-kit/ndk-mobile` | React Native |
| `@nostr-dev-kit/ndk-cache-dexie` | IndexedDB cache |
| `@nostr-dev-kit/ndk-cache-redis` | Redis cache |
| `@nostr-dev-kit/ndk-wallet` | Wallet support |

## Testing

NDK provides testing utilities:

```javascript
import { RelayPoolMock, UserGenerator, EventGenerator } from '@nostr-dev-kit/ndk';

const mockPool = new RelayPoolMock();
const testUser = UserGenerator.create();
const testEvent = EventGenerator.create({ kind: 1 });
```

## Philosophy

> Besides improving the developer experience, the core goal of NDK is to improve the decentralization of Nostr via intelligent conventions and data discovery features without depending on any one central point of coordination.

## Links

- **Documentation:** [nostr-dev-kit.github.io/ndk](https://nostr-dev-kit.github.io/ndk/)
- **GitHub:** [nostr-dev-kit/ndk](https://github.com/nostr-dev-kit/ndk)
- **npm:** [@nostr-dev-kit/ndk](https://www.npmjs.com/package/@nostr-dev-kit/ndk)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [nostr-tools](/projects/nostr-tools) — Lower-level utilities
- [Amethyst](/projects/amethyst) — Uses NDK-like patterns
- [Damus](/projects/damus) — iOS client
