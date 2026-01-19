---
title: nsec.app
description: Web-based Nostr key manager
---

# nsec.app

**Remote signer in your browser.** NIP-46 bunker without running your own server.

## Overview

nsec.app is a web-based Nostr key manager that implements NIP-46 remote signing. It lets you keep your keys in one secure location while signing for apps on any device.

## How It Works

```
┌─────────────────────────────────────────────────────────┐
│                    nsec.app                              │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Traditional:                                           │
│  App A has nsec → signs locally                        │
│  App B has nsec → signs locally                        │
│  App C has nsec → signs locally                        │
│  Risk: nsec in multiple places                         │
│                                                          │
│  nsec.app:                                              │
│  nsec.app holds nsec                                    │
│  App A ──► bunker connection ──► nsec.app signs        │
│  App B ──► bunker connection ──► nsec.app signs        │
│  App C ──► bunker connection ──► nsec.app signs        │
│  Security: nsec in one place                           │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Key Features

### NIP-46 Bunker

Generate connection strings:
```
bunker://npub...@nsec.app?secret=abc123
```

Paste into any NIP-46 compatible client.

### Permissions

| Permission | Description |
|------------|-------------|
| **Sign events** | Approve by kind |
| **Encrypt** | NIP-04/NIP-44 |
| **Decrypt** | Read encrypted messages |
| **Auto-approve** | For trusted apps |

### Cross-Device

- Store key on nsec.app
- Sign from any device
- Works on mobile, desktop

## Security

- Keys encrypted in browser
- Never sent to servers unencrypted
- Password protection
- Connection approval required

## Usage

1. Go to [nsec.app](https://nsec.app/)
2. Import or create nsec
3. Generate bunker connection
4. Use connection in Nostr apps
5. Approve signing requests

## Comparison

| Feature | nsec.app | Amber | nos2x |
|---------|----------|-------|-------|
| Platform | Web | Android | Browser |
| NIP-46 | Yes | Yes | No |
| NIP-07 | No | N/A | Yes |
| Cross-device | Yes | Mobile only | Browser only |

## Links

- **Website:** [nsec.app](https://nsec.app/)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Amber](/projects/amber) — Android signer
- [Alby](/projects/alby) — Browser extension
