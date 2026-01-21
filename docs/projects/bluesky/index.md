---
title: Bluesky & AT Protocol
description: Federated social network with domain-based identity
---

# Bluesky & AT Protocol

**Federated social with portable identity.** Use your domain as your handle.

## Overview

Bluesky is a social network built on the AT Protocol (Authenticated Transfer Protocol). While not part of SAND, it shares similar goals: user-owned identity, data portability, and federation.

## Key Features

### Domain Handles

Use your own domain as your Bluesky handle by adding a DNS TXT record:

```
┌─────────────────────────────────────────────────────────────────┐
│                    Domain Handle Setup                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. Go to Bluesky Settings → Change Handle                      │
│                                                                 │
│  2. Add DNS TXT record:                                         │
│     ┌───────────────────────────────────────────────────────┐  │
│     │ Name:  _atproto.yourdomain.com                        │  │
│     │ Type:  TXT                                            │  │
│     │ Value: did=did:plc:your-did-here                      │  │
│     └───────────────────────────────────────────────────────┘  │
│                                                                 │
│  3. Verify in Bluesky                                           │
│                                                                 │
│  Result: @yourdomain.com as your handle                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Identity Model

| Aspect | AT Protocol | SAND (DID) |
|--------|-------------|------------|
| **Identifier** | DID (did:plc or did:web) | DID (various methods) |
| **Handle** | @domain.com or @user.bsky.social | WebID, npub, @user@server |
| **Verification** | DNS TXT record | DID Document |
| **Portability** | Yes (with PDS migration) | Yes (DID method dependent) |

### Data Portability

Your data lives in a Personal Data Server (PDS):

```
┌─────────────────────────────────────────────────────────────────┐
│                    AT Protocol Architecture                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌──────────┐     ┌──────────┐     ┌──────────┐              │
│   │  Client  │────►│   PDS    │────►│  Relay   │              │
│   │  (App)   │     │  (Data)  │     │  (Index) │              │
│   └──────────┘     └──────────┘     └──────────┘              │
│                          │                │                     │
│                          ▼                ▼                     │
│                    ┌──────────┐     ┌──────────┐              │
│                    │ Your Repo│     │App Views │              │
│                    │ (Signed) │     │(Feeds)   │              │
│                    └──────────┘     └──────────┘              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

| Component | Role | SAND Equivalent |
|-----------|------|-----------------|
| **PDS** | Stores your data | Solid Pod |
| **Relay** | Aggregates data | Nostr Relays |
| **App View** | Custom feeds/views | ActivityPub servers |
| **DID** | Identity | DID |

## Comparison with SAND

| Feature | AT Protocol | SAND Stack |
|---------|-------------|------------|
| **Primary use** | Social networking | Multi-purpose |
| **Data model** | Lexicons (schemas) | RDF/Linked Data |
| **Federation** | Relay-based | Server/relay-based |
| **Identity** | did:plc, did:web | Multiple DID methods |
| **Encryption** | Limited | Per-protocol |
| **Self-hosting** | PDS (complex) | Various options |

### Strengths

- **Simple onboarding** — Sign up like any social app
- **Domain handles** — Easy DNS verification
- **Custom feeds** — Algorithmic choice
- **Growing ecosystem** — Rapid development

### Trade-offs

- **Centralized relay** — Currently one main relay (Bluesky's)
- **Complex self-hosting** — PDS requires significant resources
- **Schema lock-in** — Lexicons are app-specific

## Bridging to SAND

### Bridgy Fed

Connect Bluesky to the Fediverse and IndieWeb:

```
Bluesky ◄──► Bridgy Fed ◄──► ActivityPub
                  │
                  └──► IndieWeb
```

See [Bridgy Fed](/projects/bridgy-fed) for setup.

### Future Possibilities

| Bridge | Status | Description |
|--------|--------|-------------|
| **Bluesky ↔ ActivityPub** | Working | Via Bridgy Fed |
| **Bluesky ↔ Nostr** | Experimental | Community efforts |
| **Bluesky ↔ Solid** | Theoretical | Data portability layer |

## Self-Hosting

Run your own PDS:

```bash
# Clone the PDS repo
git clone https://github.com/bluesky-social/pds.git
cd pds

# Follow setup instructions
# Requires: Node.js, PostgreSQL, S3-compatible storage
```

**Requirements:**
- Domain with SSL
- PostgreSQL database
- Object storage (S3, R2, etc.)
- Significant technical expertise

## Links

- **Bluesky:** [bsky.app](https://bsky.app)
- **AT Protocol:** [atproto.com](https://atproto.com)
- **PDS:** [github.com/bluesky-social/pds](https://github.com/bluesky-social/pds)
- **Documentation:** [atproto.com/docs](https://atproto.com/docs)

## See Also

- [DID](/protocols/did) — Decentralized identity
- [Bridgy Fed](/projects/bridgy-fed) — Protocol bridge
- [ActivityPub](/protocols/activitypub) — Fediverse protocol
- [Nostr](/protocols/nostr) — Censorship-resistant protocol
