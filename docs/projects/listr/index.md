---
title: Listr
description: Nostr list management tool
---

# Listr

**Organize Nostr with lists.** Create, manage, and browse Nostr lists.

## Overview

Listr is a Nostr list explorer that implements NIP-51 for managing lists of users, notes, and other content. It enables mute lists, pin lists, people lists, and secret follows.

## Key Features

### List Types

```
┌─────────────────────────────────────────────────────────────────┐
│                      Listr List Types                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Kind 10000: Mute List                                         │
│  └── Users and conversations you've muted                      │
│                                                                 │
│  Kind 10001: Pin List                                          │
│  └── Pinned conversations and notes                            │
│                                                                 │
│  Kind 30000: Categorized People                                │
│  └── Custom lists with titles (Friends, Devs, Artists)         │
│                                                                 │
│  All lists support both public and private items               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### List Features

| Feature | Description |
|---------|-------------|
| **Mute list** | Hide users/content from your feed |
| **Pin list** | Keep important notes accessible |
| **People lists** | Organize follows into categories |
| **Private items** | Encrypted list entries |
| **Public items** | Visible to anyone |

### Privacy Controls

```
┌─────────────────────────────────────────────────────────────────┐
│                    Privacy Options                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Public Items:                                                  │
│  └── Anyone can see who's on your list                         │
│                                                                 │
│  Private Items:                                                 │
│  └── Encrypted, only you can see                               │
│                                                                 │
│  Use Cases:                                                     │
│  ├── Secret follows: Follow privately                          │
│  ├── Stealth bookmarks: Save notes privately                   │
│  └── Private mutes: Mute without others knowing                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## NIP-51 Implementation

### List Structure

```json
{
  "kind": 30000,
  "tags": [
    ["d", "bitcoin-devs"],
    ["name", "Bitcoin Developers"],
    ["description", "People building Bitcoin"],
    ["p", "pubkey1...", "relay", "alice"],
    ["p", "pubkey2...", "relay", "bob"]
  ],
  "content": "encrypted private items..."
}
```

### Tag Types

| Tag | Purpose |
|-----|---------|
| `p` | Reference a pubkey |
| `e` | Reference an event |
| `a` | Reference an addressable event |
| `t` | Reference a hashtag |
| `r` | Reference a URL |

## Authentication

Login with NIP-07 extensions:
- Alby
- nos2x
- Nostore

No private key entry required.

## Use Cases

1. **Organize follows** — Group people by topic
2. **Curate content** — Pin valuable notes
3. **Manage noise** — Mute spam/unwanted
4. **Secret follows** — Follow privately
5. **Bookmarks** — Save notes for later

## Comparison

| Feature | Listr | Client built-in |
|---------|-------|-----------------|
| Dedicated UI | Yes | Limited |
| All list types | Yes | Partial |
| Private lists | Yes | Varies |
| List sharing | Yes | No |
| List discovery | Yes | No |

## Links

- **Website:** [listr.lol](https://listr.lol/)
- **GitHub:** [erskingardner/listr](https://github.com/erskingardner/listr)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Alby](/projects/alby) — Browser extension with NIP-07
- [nos2x](/projects/nos2x) — NIP-07 extension
