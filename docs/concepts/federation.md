---
sidebar_position: 3
title: Federation
description: Many servers, one network
---

# Federation

**Federation means many independent servers that talk to each other.** Like email, but for everything.

## The Concept

When you send an email from Gmail to someone on Yahoo, it just works. That's federation — independent servers using shared protocols to communicate.

The opposite is a silo: Facebook messages only go to Facebook. Twitter posts stay on Twitter. Each platform is an island.

Federation creates networks without central control:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    FEDERATED vs CENTRALIZED                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   CENTRALIZED (Silos)          FEDERATED (Open Networks)           │
│                                                                     │
│        ┌───────┐                    ┌───┐   ┌───┐                  │
│        │       │                    │ A │───│ B │                  │
│   ┌────│ Corp  │────┐               └─┬─┘   └─┬─┘                  │
│   │    │       │    │                 │       │                    │
│   │    └───────┘    │                 │       │                    │
│   │                 │               ┌─┴─┐   ┌─┴─┐                  │
│  Users          Users               │ C │───│ D │                  │
│  (trapped)      (trapped)           └───┘   └───┘                  │
│                                                                     │
│   One point of failure           No single point of failure        │
│   One set of rules               Many communities, one protocol    │
│   Company owns data              Users own data                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

Alice can follow Bob and Carol even though they're on different servers.

## Why It Matters

| Centralized | Federated |
|-------------|-----------|
| One company controls everything | No single point of control |
| Company fails, network dies | Individual servers can come and go |
| Terms set by one entity | Each server sets its own rules |
| Censorship is easy | Censorship is hard |
| Scaling is expensive | Costs are distributed |
| Lock-in by design | Interoperability by design |
| Single privacy policy | Choose your operator |

## Federation Models

Different protocols approach federation differently:

```
┌─────────────────────────────────────────────────────────────────────┐
│                      FEDERATION MODELS                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   PUSH Model (ActivityPub)                                         │
│   ─────────────────────────                                        │
│   Server A creates content → Pushes to Server B, C, D              │
│   Each server stores a copy                                        │
│   Discovery: WebFinger (@user@server.com)                          │
│                                                                     │
│   ┌─────┐      push       ┌─────┐                                  │
│   │  A  │ ──────────────► │  B  │                                  │
│   └─────┘                 └─────┘                                  │
│       │                      ▲                                     │
│       │                      │                                     │
│       │      push            │                                     │
│       └──────────────────────┘                                     │
│                                                                     │
│   PULL Model (Nostr)                                               │
│   ──────────────────                                               │
│   User publishes to relays ← Followers pull from relays            │
│   Relays are dumb storage                                          │
│   Discovery: NIP-05 (user@example.com → pubkey)                    │
│                                                                     │
│   ┌─────┐                 ┌─────┐                                  │
│   │User │ ──► Relay A ◄── │User │                                  │
│   └─────┘     Relay B     └─────┘                                  │
│               Relay C                                              │
│                                                                     │
│   HYBRID Model (Solid)                                             │
│   ────────────────────                                             │
│   Pods store user data, apps fetch on demand                       │
│   ACL controls access                                              │
│   Discovery: WebID, Type Indexes                                   │
│                                                                     │
│   ┌─────┐     request     ┌─────┐                                  │
│   │ App │ ◄─────────────► │ Pod │                                  │
│   └─────┘     response    └─────┘                                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Federation in SAND

### ActivityPub

[ActivityPub](/protocols/activitypub) federates social interactions. It powers the "Fediverse" — Mastodon, Pixelfed, PeerTube, and thousands of other servers that all interoperate.

| Aspect | Implementation |
|--------|----------------|
| Message delivery | Server-to-server push via HTTP POST |
| Identity | @user@domain.tld |
| Discovery | WebFinger |
| Authorization | HTTP Signatures |
| Content | Actor inbox receives Activities |

When you post on a Mastodon server, people on other Mastodon servers, Pixelfed, or any ActivityPub-compatible service can see it and interact.

### Solid

[Solid](/protocols/solid) pods federate data storage. Your pod talks to other pods. Apps work across pods.

| Aspect | Implementation |
|--------|----------------|
| Data access | Client fetches from multiple pods |
| Identity | WebID (https://pod.example/profile#me) |
| Authorization | WAC or ACP access control |
| Discovery | Type Indexes, solid:publicTypeIndex |
| Authentication | Solid-OIDC |

### Nostr

[Nostr](/protocols/nostr) takes a different approach: relays are dumb pipes. Your client connects to multiple relays, and your followers' clients find your messages wherever they're stored. It's federation through redundancy.

| Aspect | Implementation |
|--------|----------------|
| Message delivery | Client publishes to multiple relays |
| Identity | Public key (npub...) |
| Discovery | NIP-05, NIP-65 relay lists |
| Authorization | Signed events |
| Redundancy | Same event on many relays |

## Comparing Federation Approaches

| Feature | ActivityPub | Nostr | Solid |
|---------|-------------|-------|-------|
| Server role | Active (processes) | Passive (stores) | Active (controls) |
| Identity tied to | Server | Key | Pod (but portable) |
| Migration | Hard | Easy | Medium |
| Moderation | Server-level | Client-level | Owner-level |
| Offline | Server dependent | Can cache locally | Local-first possible |

## Trust and Moderation

Federation doesn't mean anything goes. Each server can:

- Set its own rules and terms
- Block other servers
- Moderate its own users
- Choose which content to relay

This creates a marketplace of communities with different norms, while still allowing communication across boundaries.

### Moderation Patterns

```
┌─────────────────────────────────────────────────────────────────────┐
│                    MODERATION IN FEDERATION                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ActivityPub                                                       │
│   ├── Server blocks (defederation)                                 │
│   ├── User blocks/mutes                                            │
│   ├── Content warnings                                             │
│   └── Instance allowlists/blocklists                               │
│                                                                     │
│   Nostr                                                             │
│   ├── Relay policy (paid, whitelist, topic-based)                  │
│   ├── Client-side filtering                                        │
│   ├── Mute lists (NIP-51)                                          │
│   ├── Web of Trust (derived from follows)                          │
│   └── Content labels (NIP-32)                                      │
│                                                                     │
│   Solid                                                             │
│   ├── Pod-level access control (WAC/ACP)                           │
│   ├── User grants/revokes access                                   │
│   └── App-level filtering                                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Trade-offs

Federation adds complexity:

| Challenge | Description | Solutions |
|-----------|-------------|-----------|
| **Discovery** | How do you find people across servers? | WebFinger, NIP-05, Type Indexes |
| **Consistency** | What happens when messages arrive out of order? | Timestamps, vector clocks, event references |
| **Identity** | How do you prove you're the same person across servers? | DIDs, WebID, keypairs |
| **Spam** | Open networks attract abuse | Proof of work, paid relays, reputation systems |
| **Moderation** | Who decides what's acceptable? | Local rules, client filters, community norms |

## Federation Economics

Who pays for the infrastructure?

```
┌─────────────────────────────────────────────────────────────────────┐
│                    FEDERATION ECONOMICS                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ActivityPub Servers                                               │
│   ├── Donations (common)                                           │
│   ├── Hosting fees ($5-20/month)                                   │
│   ├── Volunteer operators                                          │
│   └── Some paid instances                                          │
│                                                                     │
│   Nostr Relays                                                      │
│   ├── Free public relays (often limited)                           │
│   ├── Paid relays ($5-50/year)                                     │
│   ├── Private relays (run your own)                                │
│   └── Specialized relays (media, search, archive)                  │
│                                                                     │
│   Solid Pods                                                        │
│   ├── Free tier (limited storage)                                  │
│   ├── Paid hosting (varies)                                        │
│   ├── Self-hosted (your hardware)                                  │
│   └── Enterprise offerings                                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Bridging Federated Networks

Different federated networks can be connected:

| Bridge | Connects | How |
|--------|----------|-----|
| [Mostr](/projects/mostr) | Nostr ↔ Fediverse | Translates events |
| [Bridgy Fed](/projects/bridgy-fed) | IndieWeb ↔ Fediverse ↔ Bluesky | Protocol conversion |
| [Ditto](/projects/ditto) | ActivityPub + Nostr | Dual-protocol server |

## Real-World Example

How a message travels in federation:

```
┌─────────────────────────────────────────────────────────────────────┐
│          ActivityPub: Alice (server.a) → Bob (server.b)            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   1. Alice posts on server.a                                       │
│   2. server.a looks up Bob's inbox via WebFinger                   │
│   3. server.a signs the Activity with HTTP Signature               │
│   4. server.a POSTs to server.b/inbox                              │
│   5. server.b verifies signature                                   │
│   6. server.b stores the post                                      │
│   7. Bob sees Alice's post in their timeline                       │
│                                                                     │
│   Alice                                                             │
│     │                                                              │
│     ▼                                                              │
│   server.a ──HTTP POST + Signature──► server.b                     │
│                                           │                        │
│                                           ▼                        │
│                                          Bob                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Learn More

- [ActivityPub Protocol](/protocols/activitypub) — How social federation works
- [Nostr Protocol](/protocols/nostr) — A different take on federation
- [Solid Protocol](/protocols/solid) — Federated data storage
- [Ditto](/projects/ditto) — Bridge between ActivityPub and Nostr
- [Mostr](/projects/mostr) — Nostr-Fediverse bridge
