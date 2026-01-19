---
title: MicroFed
description: Minimal ActivityPub library
---

# MicroFed

**Zero-dependency ActivityPub library.** Pure JavaScript for embedded and edge deployments.

## Overview

MicroFed is a minimal ActivityPub implementation designed for environments where size and dependencies matter. No external packages — just pure JavaScript that runs anywhere.

## Philosophy

| Traditional Libraries | MicroFed |
|----------------------|----------|
| Many dependencies | Zero dependencies |
| Full-featured | Essential features only |
| Server-focused | Runs anywhere (browser, edge, embedded) |
| Complex setup | Drop-in ready |

## Key Features

### Zero Dependencies
No npm packages to install, audit, or update. The entire library is self-contained.

### Universal Runtime
Works in:
- Node.js
- Deno
- Browsers
- Cloudflare Workers
- Edge functions
- Embedded devices

### Core ActivityPub Support
Implements the essential ActivityPub operations:
- Actor creation and management
- Activity serialization/deserialization
- Inbox/Outbox handling
- HTTP Signatures (signing and verification)
- WebFinger discovery

### Small Footprint
Minimal code size for constrained environments.

## Quick Start

```javascript
import { Actor, Activity, sign } from 'microfed';

// Create an actor
const actor = new Actor({
  id: 'https://example.com/users/alice',
  type: 'Person',
  preferredUsername: 'alice',
  inbox: 'https://example.com/users/alice/inbox',
  outbox: 'https://example.com/users/alice/outbox'
});

// Create an activity
const note = Activity.create({
  type: 'Create',
  actor: actor.id,
  object: {
    type: 'Note',
    content: 'Hello from MicroFed!'
  }
});

// Sign for federation
const signed = await sign(note, privateKey);
```

## Use Cases

### Edge Functions
Deploy ActivityPub endpoints on Cloudflare Workers, Vercel Edge, or Deno Deploy without cold start penalties from large dependency trees.

### Browser-Based Clients
Build ActivityPub clients that run entirely in the browser.

### IoT and Embedded
Run federated services on resource-constrained devices.

### Serverless
Minimal bundle size means faster cold starts and lower costs.

### Learning
Understand ActivityPub by reading a simple, self-contained implementation.

## Comparison with FedBox

| Aspect | MicroFed | FedBox |
|--------|----------|--------|
| Language | JavaScript | Go |
| Dependencies | Zero | Go modules |
| Storage | Bring your own | Built-in (Bolt, SQLite, etc.) |
| Scope | Library | Full server |
| Best for | Embedding | Standalone server |

## Architecture

```
┌─────────────────────────────────────┐
│          Your Application           │
├─────────────────────────────────────┤
│             MicroFed                │
│  ┌─────────┬──────────┬──────────┐  │
│  │  Actor  │ Activity │  Crypto  │  │
│  │ Manager │ Handler  │  (sigs)  │  │
│  └─────────┴──────────┴──────────┘  │
├─────────────────────────────────────┤
│        Your Storage Layer           │
└─────────────────────────────────────┘
```

MicroFed handles the protocol — you provide the storage and HTTP layer.

## Links

- **Website:** [microfed.org](https://microfed.org)
- **npm:** Coming soon
- **GitHub:** In development

## See Also

- [ActivityPub Protocol](/protocols/activitypub) — The specification
- [FedBox](/projects/fedbox) — Full Go server
- [Ditto](/projects/ditto) — Nostr + ActivityPub server
- [Federation](/concepts/federation) — The concept
