---
title: Coop
description: Desktop Nostr messaging client
---

# Coop

**Secure messaging for desktop.** Cross-platform Nostr chat client.

## Overview

Coop is a desktop Nostr client focused on secure messaging, built by the Lume team. It provides a fast, reliable messaging experience across Windows, macOS, and Linux.

## Key Features

### Cross-Platform Desktop

```
┌─────────────────────────────────────────────────────────────────┐
│                         Coop                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Platforms:                                                    │
│   ├── Windows                                                  │
│   ├── macOS                                                    │
│   └── Linux                                                    │
│                                                                 │
│   Features:                                                     │
│   ├── Secure messaging                                         │
│   ├── Fast performance (Rust)                                  │
│   └── Modern UI (GPUI)                                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Private messages** | Encrypted conversations |
| **Cross-platform** | Windows, macOS, Linux |
| **Fast** | Built in Rust |
| **Modern UI** | GPUI framework |
| **Interoperable** | Works with other Nostr clients |

### Interoperability

Works with:
- Amethyst
- 0xChat
- Coracle
- Flotilla
- noStrudel

## Technical Stack

| Component | Technology |
|-----------|------------|
| Language | Rust |
| UI | GPUI |
| Nostr | Rust Nostr SDK |
| Status | Alpha |

## Current Status

Alpha release with limitations:
- No credential storage yet
- Initial loading may be slow
- Active development

## Comparison

| Feature | Coop | 0xChat | Blowater |
|---------|------|--------|----------|
| Platform | Desktop | Mobile | Web |
| Language | Rust | Flutter | TypeScript |
| Focus | Messaging | Messaging | Messaging |
| Status | Alpha | Stable | Stable |

## Links

- **GitHub:** [lumehq/coop](https://github.com/lumehq/coop)
- **Downloads:** [GitHub Releases](https://github.com/lumehq/coop/releases)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [0xChat](/projects/0xchat) — Mobile messaging
- [Blowater](/projects/blowater) — Web messaging
- [Flotilla](/projects/flotilla) — Group messaging
