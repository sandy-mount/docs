---
title: Nostr Git
description: Censorship-resistant code hosting on Nostr
---

# Nostr Git

**Decentralized code hosting.** Git repositories with Nostr identity and collaboration.

## Overview

Nostr Git enables:

- **Code hosting on Nostr** — Repos announced via events
- **Cryptographic ownership** — Signed by maintainer keys
- **Decentralized issues/PRs** — Collaboration via Nostr events
- **No single point of failure** — Distributed across relays

## How It Works

### Repository Announcement

Maintainers publish events announcing their repos:

```json
{
  "kind": 30617,
  "tags": [
    ["d", "my-project"],
    ["name", "My Project"],
    ["description", "A cool project"],
    ["clone", "https://git.example.com/repo.git"],
    ["web", "https://github.com/user/repo"]
  ],
  "content": "Project README..."
}
```

### Issues and PRs

Collaboration happens via Nostr events:

- Issues as kind 1617 events
- Patches as kind 1618 events
- Comments threaded via replies

## Benefits

| GitHub | Nostr Git |
|--------|-----------|
| Centralized | Distributed |
| Account required | Just a keypair |
| Can be banned | Censorship-resistant |
| Microsoft owned | Community owned |

## Clients

- **gitstr** — CLI client
- **Web clients** — In development

## Links

- **Website:** [nostrgit.org](https://nostrgit.org)
- **NIPs:** Git-related Nostr Implementation Possibilities

## See Also

- [Nostr Protocol](/protocols/nostr) — The underlying protocol
- [Decentralized Identity](/concepts/decentralized-identity)
