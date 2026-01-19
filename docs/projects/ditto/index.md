---
sidebar_position: 1
title: Ditto
description: Cross-protocol bridge - ActivityPub ↔ Nostr
---

# Ditto

**Bridge between ActivityPub and Nostr.** Post once, reach both networks.

## What It Does

Ditto translates between protocols:

```
┌─────────────┐                    ┌─────────────┐
│   Nostr     │◄─────Ditto────────►│ ActivityPub │
│  Network    │                    │  Fediverse  │
└─────────────┘                    └─────────────┘
```

- **Nostr → ActivityPub**: Your Nostr posts appear on Mastodon
- **ActivityPub → Nostr**: Fediverse posts appear in Nostr clients
- **Bidirectional**: Replies and interactions work both ways

## Why Bridge?

Different networks, different strengths:

| Nostr | ActivityPub |
|-------|-------------|
| Censorship-resistant | Rich federation |
| Simple protocol | Mature ecosystem |
| Cryptographic identity | Established user base |

Ditto lets you benefit from both.

## Quick Start

```bash
# Install Ditto
npm install -g @soapbox/ditto

# Run
ditto start
```

## Configuration

Set up your bridge identity, relay list, and ActivityPub endpoints.

## Links

- **Docs:** [docs.soapbox.pub/ditto](https://docs.soapbox.pub/ditto/install/)
- **GitHub:** [soapbox-pub/ditto](https://github.com/soapbox-pub/ditto)

## See Also

- [ActivityPub](/protocols/activitypub) — Federation protocol
- [Nostr](/protocols/nostr) — Event protocol
- [Federation](/concepts/federation) — The concept
