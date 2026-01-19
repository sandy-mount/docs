---
title: 0xChat
description: Secure Nostr messaging app
---

# 0xChat

**Private messaging on Nostr.** Encrypted chats with Signal-like features.

## Overview

0xChat is a Nostr client focused on private messaging. It implements NIP-44 encrypted DMs with features like group chats, making it suitable for secure communication.

## Key Features

### Encrypted Messaging

```
┌─────────────────────────────────────────────────────────┐
│                    0xChat                                │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  🔒 End-to-end encrypted messages                       │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐│
│  │  Chat with @alice                                   ││
│  │  ────────────────────────────────────               ││
│  │  alice: Hey, check this out                        ││
│  │  you: Looks great!                                 ││
│  │  alice: ⚡ Sent 1000 sats                          ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
│  All messages encrypted before leaving device          │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### NIP-44 Encryption

Modern encryption replacing NIP-04:
- Better security properties
- Larger messages
- Standardized across clients

### Group Chats

| Feature | Description |
|---------|-------------|
| **Create groups** | Private group conversations |
| **Add members** | Invite by npub |
| **Admin controls** | Manage membership |
| **Encrypted** | All messages encrypted |

### Amber Support

External signer integration:
- Keys stay in Amber
- 0xChat requests signatures
- Maximum key security

## Platforms

| Platform | Status |
|----------|--------|
| **iOS** | Available |
| **Android** | Available |

## Interoperability

Compatible with other NIP-44 clients:
- Amethyst
- Coracle
- Flotilla

## Links

- **iOS:** App Store
- **Android:** Google Play

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Amber](/projects/amber) — External signer
- [Amethyst](/projects/amethyst) — Android client
