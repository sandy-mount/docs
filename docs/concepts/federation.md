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
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Server A   │────│   Server B   │────│   Server C   │
│  (Alice)     │     │  (Bob)       │     │  (Carol)     │
└──────────────┘     └──────────────┘     └──────────────┘
       │                    │                    │
       └────────────────────┴────────────────────┘
                    Shared Protocol
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

## Federation in SAND

### ActivityPub

[ActivityPub](/protocols/activitypub) federates social interactions. It powers the "Fediverse" — Mastodon, Pixelfed, PeerTube, and thousands of other servers that all interoperate.

When you post on a Mastodon server, people on other Mastodon servers, Pixelfed, or any ActivityPub-compatible service can see it and interact.

### Solid

[Solid](/protocols/solid) pods federate data storage. Your pod talks to other pods. Apps work across pods.

### Nostr

[Nostr](/protocols/nostr) takes a different approach: relays are dumb pipes. Your client connects to multiple relays, and your followers' clients find your messages wherever they're stored. It's federation through redundancy.

## Trust and Moderation

Federation doesn't mean anything goes. Each server can:

- Set its own rules and terms
- Block other servers
- Moderate its own users
- Choose which content to relay

This creates a marketplace of communities with different norms, while still allowing communication across boundaries.

## Trade-offs

Federation adds complexity:

- **Discovery** — How do you find people across servers?
- **Consistency** — What happens when messages arrive out of order?
- **Identity** — How do you prove you're the same person across servers?

SAND addresses these with [DIDs](/protocols/did) for identity, [WebFinger](https://webfinger.net) for discovery, and protocol-specific solutions for consistency.

## Learn More

- [ActivityPub Protocol](/protocols/activitypub) — How social federation works
- [Nostr Protocol](/protocols/nostr) — A different take on federation
- [Ditto](/projects/ditto) — Bridge between ActivityPub and Nostr
