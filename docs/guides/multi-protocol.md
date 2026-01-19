---
sidebar_position: 7
title: Multi-Protocol Integration
description: Build apps that use Solid, Nostr, and ActivityPub together
---

# Multi-Protocol Integration

**Build applications that leverage multiple SAND protocols.** Combine strengths for powerful apps.

## Why Multi-Protocol?

Each protocol has strengths:

| Protocol | Strength | Use When |
|----------|----------|----------|
| **Solid** | Structured data, permissions | Storing personal data |
| **Nostr** | Real-time, censorship-resistant | Public broadcasts, messaging |
| **ActivityPub** | Federation, social features | Reaching Fediverse users |
| **DID** | Portable identity | Cross-platform auth |

Combining them creates apps that couldn't exist with just one.

## Pattern 1: Solid Storage + Nostr Identity

Use Nostr keys for authentication, Solid pods for storage.

```javascript
import { finalizeEvent, getPublicKey } from 'nostr-tools';
import { getSolidDataset, saveSolidDatasetAt } from '@inrupt/solid-client';

// User's Nostr identity
const secretKey = /* user's nsec */;
const pubkey = getPublicKey(secretKey);

// Create NIP-98 auth event for Solid pod
async function authenticatedFetch(url, options = {}) {
  const authEvent = finalizeEvent({
    kind: 27235,
    created_at: Math.floor(Date.now() / 1000),
    tags: [
      ['u', url],
      ['method', options.method || 'GET']
    ],
    content: ''
  }, secretKey);

  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Nostr ${btoa(JSON.stringify(authEvent))}`
    }
  });
}

// Read from Solid pod with Nostr auth
const dataset = await getSolidDataset(podUrl, {
  fetch: authenticatedFetch
});
```

## Pattern 2: Solid Archive + Nostr Broadcast

Store data privately in Solid, broadcast publicly via Nostr.

```javascript
import { saveSolidDatasetAt, createThing, setThing } from '@inrupt/solid-client';
import { finalizeEvent, Relay } from 'nostr-tools';

async function publishPost(content, solidPodUrl, nostrRelays) {
  const timestamp = Date.now();

  // 1. Save to Solid pod (permanent archive)
  let post = createThing({ name: `post-${timestamp}` });
  post = addStringNoLocale(post, SCHEMA.text, content);
  post = addDatetime(post, SCHEMA.dateCreated, new Date());

  let dataset = createSolidDataset();
  dataset = setThing(dataset, post);
  await saveSolidDatasetAt(
    `${solidPodUrl}/posts/${timestamp}.ttl`,
    dataset,
    { fetch }
  );

  // 2. Broadcast to Nostr (real-time distribution)
  const event = finalizeEvent({
    kind: 1,
    created_at: Math.floor(timestamp / 1000),
    tags: [
      ['solid', `${solidPodUrl}/posts/${timestamp}.ttl`]  // Link to Solid
    ],
    content
  }, secretKey);

  for (const relayUrl of nostrRelays) {
    const relay = await Relay.connect(relayUrl);
    await relay.publish(event);
    relay.close();
  }

  return { solidUrl: `${solidPodUrl}/posts/${timestamp}.ttl`, nostrId: event.id };
}
```

## Pattern 3: Nostr Events + ActivityPub Federation

Bridge Nostr to the Fediverse (like Ditto does).

```javascript
// Pseudo-code for the concept

// When receiving a Nostr event
async function onNostrEvent(event) {
  if (event.kind === 1) {  // Text note
    // Convert to ActivityPub
    const activity = {
      '@context': 'https://www.w3.org/ns/activitystreams',
      type: 'Create',
      actor: `https://bridge.example/users/${event.pubkey}`,
      object: {
        type: 'Note',
        content: event.content,
        published: new Date(event.created_at * 1000).toISOString(),
        attributedTo: `https://bridge.example/users/${event.pubkey}`
      }
    };

    // Deliver to ActivityPub followers
    for (const follower of await getAPFollowers(event.pubkey)) {
      await deliverToInbox(follower.inbox, activity);
    }
  }
}

// When receiving an ActivityPub activity
async function onAPActivity(activity) {
  if (activity.type === 'Create' && activity.object.type === 'Note') {
    // Convert to Nostr event
    const event = {
      kind: 1,
      content: activity.object.content,
      created_at: Math.floor(new Date(activity.object.published).getTime() / 1000),
      tags: [
        ['activitypub', activity.id]  // Reference original
      ]
    };

    // Broadcast to Nostr relays
    await broadcastToRelays(event);
  }
}
```

## Pattern 4: DID as Universal Identity

Use DID to link identities across protocols.

```javascript
// DID Document linking multiple identities
const didDocument = {
  '@context': ['https://www.w3.org/ns/did/v1'],
  id: 'did:web:alice.example',

  // Verification methods
  verificationMethod: [
    {
      id: 'did:web:alice.example#nostr',
      type: 'SchnorrSecp256k1VerificationKey2019',
      controller: 'did:web:alice.example',
      publicKeyHex: '...'  // Nostr public key
    },
    {
      id: 'did:web:alice.example#solid',
      type: 'Ed25519VerificationKey2020',
      controller: 'did:web:alice.example',
      publicKeyMultibase: '...'
    }
  ],

  // Service endpoints
  service: [
    {
      id: 'did:web:alice.example#solid-pod',
      type: 'SolidPod',
      serviceEndpoint: 'https://alice.pod.example/'
    },
    {
      id: 'did:web:alice.example#nostr',
      type: 'NostrRelayList',
      serviceEndpoint: ['wss://relay.damus.io', 'wss://relay.nostr.band']
    },
    {
      id: 'did:web:alice.example#activitypub',
      type: 'ActivityPubActor',
      serviceEndpoint: 'https://social.example/@alice'
    }
  ]
};
```

## Pattern 5: Real-Time Collaboration

Use Solid for state, Nostr for real-time updates.

```javascript
// Collaborative document editing

class CollaborativeDocument {
  constructor(solidUrl, nostrRelays, secretKey) {
    this.solidUrl = solidUrl;
    this.relays = nostrRelays;
    this.secretKey = secretKey;
    this.pubkey = getPublicKey(secretKey);
  }

  async load() {
    // Load current state from Solid
    this.dataset = await getSolidDataset(this.solidUrl, { fetch });
    this.content = getStringNoLocale(
      getThing(this.dataset, this.solidUrl),
      SCHEMA.text
    );

    // Subscribe to real-time updates via Nostr
    for (const relayUrl of this.relays) {
      const relay = await Relay.connect(relayUrl);
      relay.subscribe([{
        kinds: [30023],  // Long-form content
        '#d': [this.solidUrl]  // Tag referencing this document
      }], {
        onevent: (event) => this.handleRemoteUpdate(event)
      });
    }
  }

  async update(newContent) {
    // Optimistic local update
    this.content = newContent;

    // Broadcast change via Nostr (instant)
    const event = finalizeEvent({
      kind: 30023,
      created_at: Math.floor(Date.now() / 1000),
      tags: [['d', this.solidUrl]],
      content: newContent
    }, this.secretKey);

    for (const relayUrl of this.relays) {
      const relay = await Relay.connect(relayUrl);
      await relay.publish(event);
      relay.close();
    }

    // Save to Solid (durable)
    let thing = getThing(this.dataset, this.solidUrl);
    thing = setStringNoLocale(thing, SCHEMA.text, newContent);
    this.dataset = setThing(this.dataset, thing);
    await saveSolidDatasetAt(this.solidUrl, this.dataset, { fetch });
  }

  handleRemoteUpdate(event) {
    if (event.pubkey !== this.pubkey) {
      this.content = event.content;
      this.onUpdate?.(this.content);
    }
  }
}
```

## Architecture: Multi-Protocol App

```
┌─────────────────────────────────────────────────────────────┐
│                     Your Application                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   Data Layer                         │   │
│  │  ┌───────────┐ ┌───────────┐ ┌───────────────────┐  │   │
│  │  │  Solid    │ │  Nostr    │ │   ActivityPub     │  │   │
│  │  │  Client   │ │  Client   │ │   Client          │  │   │
│  │  └─────┬─────┘ └─────┬─────┘ └─────────┬─────────┘  │   │
│  └────────┼─────────────┼─────────────────┼────────────┘   │
│           │             │                 │                 │
│  ┌────────▼─────────────▼─────────────────▼────────────┐   │
│  │                  Unified Store                       │   │
│  │        (merge data from all protocols)               │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│  ┌──────────────────────▼──────────────────────────────┐   │
│  │                      UI                              │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Best Practices

### 1. Choose the Right Protocol for Each Task

| Task | Best Protocol | Why |
|------|---------------|-----|
| Store private data | Solid | Access control |
| Broadcast publicly | Nostr | Censorship-resistant |
| Social features | ActivityPub | Mature ecosystem |
| Identity | DID | Portable |

### 2. Link Data Across Protocols

Always include references:
- Nostr events → tag with Solid URLs
- Solid resources → include Nostr event IDs
- ActivityPub activities → reference DID

### 3. Handle Consistency

Protocols may have different states:
- Use timestamps to resolve conflicts
- Treat Solid as source of truth for structured data
- Treat Nostr as source of truth for events

### 4. Graceful Degradation

Not all users will be on all protocols:
- Solid-only users still get data
- Nostr-only users still get broadcasts
- ActivityPub-only users still get federation

## Example: Social Bookmarking App

A complete example combining all protocols:

```javascript
class SocialBookmarks {
  // Save bookmark to Solid, broadcast via Nostr, federate via AP
  async saveBookmark(url, title, tags) {
    const id = crypto.randomUUID();

    // 1. Store in Solid (structured, private)
    const bookmark = {
      '@type': 'Bookmark',
      id,
      url,
      title,
      tags,
      created: new Date().toISOString()
    };
    await this.solid.save(`/bookmarks/${id}`, bookmark);

    // 2. Broadcast via Nostr (public, real-time)
    await this.nostr.publish({
      kind: 30017,  // Bookmarks
      content: JSON.stringify({ url, title }),
      tags: [
        ['d', id],
        ['r', url],
        ...tags.map(t => ['t', t])
      ]
    });

    // 3. Federate via ActivityPub (social reach)
    await this.activitypub.post({
      type: 'Create',
      object: {
        type: 'Note',
        content: `Bookmarked: ${title}\n${url}`,
        tag: tags.map(t => ({ type: 'Hashtag', name: t }))
      }
    });

    return id;
  }
}
```

## See Also

- [SAND Architecture](/concepts/architecture) — How protocols fit together
- [Authentication](/guides/authentication) — Auth across protocols
- [Ditto](/projects/ditto) — Production bridge implementation
- [MCP](/projects/mcp) — Connect AI to multiple protocols
