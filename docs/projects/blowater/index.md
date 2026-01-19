---
title: Blowater
description: Nostr client focused on direct messaging
---

# Blowater

**DMs done right.** Privacy-focused messaging on Nostr.

## Overview

Blowater is a Nostr client that prioritizes direct messaging with end-to-end encryption. It provides a clean, focused interface for private conversations and group chats.

## Key Features

### DM-Focused Interface

```
┌─────────────────────────────────────────────────────────────────┐
│                       Blowater                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────┐  ┌───────────────────────────────────────┐   │
│  │ Chats       │  │  Conversation with @alice             │   │
│  │             │  │  ─────────────────────────────────    │   │
│  │ @alice      │  │                                       │   │
│  │ @bob        │  │  alice: Hey, how are you?            │   │
│  │ @carol      │  │                                       │   │
│  │             │  │  you: Doing great! Working on...      │   │
│  │ Groups:     │  │                                       │   │
│  │ Dev Chat    │  │  alice: That sounds interesting       │   │
│  │ Friends     │  │                                       │   │
│  │             │  │  [Message input]                      │   │
│  └─────────────┘  └───────────────────────────────────────┘   │
│                                                                 │
│  All messages end-to-end encrypted                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Direct messages** | Private 1:1 conversations |
| **Group messages** | Encrypted group chats |
| **E2E encryption** | All messages encrypted |
| **Group profiles** | Customize group info |
| **Privacy-first** | No data collection |

### Encryption

Uses modern Nostr DM standards:
- NIP-17 for improved privacy
- Addresses metadata leaks from NIP-04
- Full end-to-end encryption

```
┌─────────────────────────────────────────────────────────────────┐
│                    NIP-17 vs NIP-04                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  NIP-04 (old):                                                 │
│  ├── Message content encrypted                                 │
│  └── Metadata (who, when) visible                             │
│                                                                 │
│  NIP-17 (new):                                                 │
│  ├── Message content encrypted                                 │
│  ├── Sender/recipient hidden                                   │
│  └── Better privacy overall                                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Platforms

| Platform | Status |
|----------|--------|
| **Web** | Available |
| **Chrome Extension** | Available |

## Privacy

- No data collection
- No analytics
- No tracking
- Open source

## Group Messaging

Features for groups:
- Create private groups
- Manage members
- Edit group profile
- Clear distinction between DMs and GMs

## Comparison

| Feature | Blowater | 0xChat | Damus |
|---------|----------|--------|-------|
| DM focus | Primary | Primary | Secondary |
| Group chat | Yes | Yes | Limited |
| NIP-17 | Yes | Yes | Partial |
| Desktop | Yes | No | No |
| Mobile | Extension | Yes | Yes |

## Links

- **Website:** [blowater.app](https://blowater.app/)
- **GitHub:** [BlowaterNostr/blowater](https://github.com/BlowaterNostr/blowater)
- **Chrome:** Chrome Web Store

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [0xChat](/projects/0xchat) — Mobile DM client
- [Coracle](/projects/coracle) — Web client
