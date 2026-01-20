---
title: Camelus
description: Flutter-based Nostr client
---

# Camelus

**Nostr on Flutter.** Cross-platform client built with Dart NDK.

## Overview

Camelus is a Flutter-based Nostr client focused on ease of use and content delivery. It implements the NIP-65 gossip model for efficient relay communication.

## Key Features

### Flutter Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Camelus Stack                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                 Flutter UI Layer                         │  │
│   │              Material Design widgets                     │  │
│   └─────────────────────────────────────────────────────────┘  │
│                           │                                    │
│                           ▼                                    │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                 Dart NDK                                 │  │
│   │            Nostr protocol handling                       │  │
│   └─────────────────────────────────────────────────────────┘  │
│                           │                                    │
│                           ▼                                    │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │              NIP-65 Gossip Model                         │  │
│   │            Efficient relay connections                   │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   Cross-platform • One codebase • Native performance          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Flutter-based** | Cross-platform from one codebase |
| **Dart NDK** | Modern Nostr library |
| **NIP-65** | Gossip/outbox relay model |
| **Kind:1** | Short text notes |
| **Privacy-focused** | Decentralized data storage |

### Planned Features

| Feature | Status |
|---------|--------|
| Short notes (kind:1) | Available |
| Long-form content | Planned |
| Communities | Planned |
| Multi-platform | In progress |

## Usage

### Current Capabilities

- View home feed
- Post notes
- Follow/unfollow users
- View profiles
- Relay management

### NIP-65 Gossip Model

```
┌─────────────────────────────────────────────────────────────────┐
│                     Gossip Model                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Instead of connecting to all relays:                         │
│                                                                 │
│   1. Read user's relay list (NIP-65)                           │
│   2. Connect to their write relays                             │
│   3. Fetch their content                                       │
│   4. Disconnect                                                │
│                                                                 │
│   Benefits:                                                     │
│   • Fewer connections                                          │
│   • Less bandwidth                                             │
│   • Better battery life                                        │
│   • Finds content reliably                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Technical Details

| Component | Technology |
|-----------|------------|
| Framework | Flutter |
| Language | Dart |
| Nostr library | Dart NDK |
| Platform | Android (primary) |
| UI | Material Design |

## Comparison

| Feature | Camelus | Amethyst | Yana |
|---------|---------|----------|------|
| Framework | Flutter | Android | Flutter |
| Relay model | NIP-65 | NIP-65 | NDK |
| Primary platform | Android | Android | Multi |
| Maturity | Early | Mature | Mature |

## Installation

### Android

Available on GitHub releases.

### Build from Source

```bash
git clone https://github.com/camelus-hq/camelus
cd camelus
flutter pub get
flutter build apk
```

## Development Status

Camelus is under active development:
- Core posting/reading works
- UI refinement ongoing
- Multi-platform support coming
- Long-form content planned

## Links

- **GitHub:** [camelus-hq/camelus](https://github.com/camelus-hq/camelus)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [NDK](/projects/ndk) — Nostr Development Kit
- [Yana](/projects/yana) — Another Flutter client
