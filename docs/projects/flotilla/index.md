---
title: Flotilla
description: Discord-like group messaging on Nostr
---

# Flotilla

**Communities on Nostr.** Discord-style spaces built on relay-based groups.

## Overview

Flotilla is a Nostr client focused on group messaging and communities. Using the concept of "relays as groups," it provides Discord-like functionality with channels, threads, and moderation — all on the open Nostr protocol.

## Key Features

### Relay-Based Groups

```
┌─────────────────────────────────────────────────────────────────┐
│                    Flotilla Architecture                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Traditional Discord:          Flotilla:                        │
│  ┌─────────────┐               ┌─────────────┐                 │
│  │ Discord     │               │ Your relay  │                 │
│  │ Server      │               │ = Your space│                 │
│  │ (owned by   │               │ (you control│                 │
│  │  Discord)   │               │  the rules) │                 │
│  └─────────────┘               └─────────────┘                 │
│                                                                 │
│  Each relay can host one or more "spaces"                      │
│  Spaces have channels, threads, and members                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Space Features

| Feature | Description |
|---------|-------------|
| **Channels** | Topic-based conversations |
| **Threads** | Long-form discussions |
| **Chat** | Real-time messaging |
| **DMs** | Encrypted private messages |
| **Zaps** | Lightning payments for content |

### Moderation

Built-in moderation tools:
- Join requests and approval
- Member management
- Content moderation
- Admin controls
- Configurable policies

### Configurable Features

Per-space settings:
```
┌─────────────────────────────────────────────────────────────────┐
│                    Space Configuration                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ☑ Enable threads                                              │
│  ☑ Enable chat                                                 │
│  ☑ Enable zaps (monetization)                                  │
│  ☐ Require approval to join                                    │
│  ☑ Allow media uploads                                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Platforms

| Platform | Status |
|----------|--------|
| **Web (PWA)** | Available |
| **iOS** | Via PWA |
| **Android** | Via PWA |

## NIP-29 Implementation

Flotilla implements NIP-29 (relay-enforced groups):
- Relays enforce membership rules
- Moderation at the relay level
- Interoperable with other NIP-29 clients

## Interoperability

Works with other clients supporting group messaging:
- Amethyst
- 0xChat
- Coracle
- Coop

## Self-Hosting

Run your own Flotilla instance:
- Full content control
- Custom branding (white-label)
- Censorship protection
- Your rules, your space

## Use Cases

### Community Building

- Project communities
- Interest groups
- Local communities
- Team collaboration

### Content Creation

- Subscriber communities
- Paid access spaces
- Fan clubs with zaps

### Organization

- Internal communications
- Working groups
- Event coordination

## Comparison

| Feature | Flotilla | Discord | 0xChat |
|---------|----------|---------|--------|
| Protocol | Nostr | Proprietary | Nostr |
| Self-host | Yes | No | No |
| Zaps | Yes | No | Yes |
| E2E encrypted | Partial | No | Yes |
| Open source | Yes | No | Yes |

## Links

- **Website:** [flotilla.social](https://flotilla.social/)
- **GitHub:** [coracle-social/flotilla](https://github.com/coracle-social/flotilla)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [0xChat](/projects/0xchat) — Private messaging
- [Coracle](/projects/coracle) — Related web client
