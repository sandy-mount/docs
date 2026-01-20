---
title: Nostree
description: Decentralized link-in-bio on Nostr
---

# Nostree

**Linktree on Nostr.** Decentralized link-in-bio pages.

## Overview

Nostree is a Linktree-style service built on Nostr. Create and manage link pages that you truly own — no email, no phone, no personal data required.

## Key Features

### Link-in-Bio Pages

```
┌─────────────────────────────────────────────────────────────────┐
│                        Nostree                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   nostree.me/alice/links                                       │
│   ─────────────────────────────────────────────────────────    │
│                                                                 │
│   [👤 Profile Picture]                                         │
│   Alice                                                         │
│   Nostr enthusiast                                             │
│                                                                 │
│   ┌─────────────────────────────────────────────────────┐     │
│   │ 🌐  My Website                                       │     │
│   └─────────────────────────────────────────────────────┘     │
│   ┌─────────────────────────────────────────────────────┐     │
│   │ 💜  Nostr Profile                                    │     │
│   └─────────────────────────────────────────────────────┘     │
│   ┌─────────────────────────────────────────────────────┐     │
│   │ ⚡  Lightning Tips                                   │     │
│   └─────────────────────────────────────────────────────┘     │
│   ┌─────────────────────────────────────────────────────┐     │
│   │ 🐦  Twitter                                          │     │
│   └─────────────────────────────────────────────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Link lists** | Create multiple link collections |
| **Custom slugs** | Friendly URLs for each list |
| **Latest notes** | Display recent Nostr posts |
| **Articles** | Show long-form content |
| **Decentralized** | Data on Nostr relays |
| **No signup** | Just use your Nostr key |

### Data Ownership

- No email required
- No phone number
- No personal data collected
- You own your links via Nostr
- Portable to other clients

## URL Structure

```
nostree.me/[username]/[list-slug]

Examples:
nostree.me/alice/links
nostree.me/alice/projects
nostree.me/bob/music
```

## Use Cases

1. **Social bio links** — One link for all your profiles
2. **Creator pages** — Portfolio and contact links
3. **Project pages** — Links for a specific project
4. **Event pages** — Temporary link collections

## Comparison

| Feature | Nostree | Linktree |
|---------|---------|----------|
| Cost | Free | Freemium |
| Data ownership | You (Nostr) | Linktree |
| Email required | No | Yes |
| Censorship | Resistant | Platform rules |
| Protocol | Open (Nostr) | Proprietary |

## Links

- **Website:** [nostree.me](https://nostree.me/)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [NIP-05](/protocols/nostr#nip-05-verification) — Identity verification
- [Njump](/projects/njump) — Nostr web gateway
