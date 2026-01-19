---
title: Amber
description: Nostr signer for Android
---

# Amber

**Your smartphone as a Nostr signing device.** Keep your nsec secure in a dedicated app.

## Overview

Amber is a Nostr event signer for Android that keeps your private key segregated from other apps. It turns your smartphone into a NIP-46 signing device without needing external servers or hardware.

## Key Features

### Key Isolation

```
┌─────────────────────────────────────────────────────────┐
│                   Without Amber                          │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  App A ─── nsec ◄──► signs events                       │
│  App B ─── nsec ◄──► signs events                       │
│  App C ─── nsec ◄──► signs events                       │
│                                                          │
│  ⚠️  Every app has your key = More attack surface       │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    With Amber                            │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  App A ──┐                                               │
│  App B ──┼──► Amber (nsec) ──► signs events             │
│  App C ──┘                                               │
│                                                          │
│  ✓ Only Amber has your key = Minimal attack surface     │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### NIP-55 Integration

Android apps invoke Amber via NIP-55:

```kotlin
// From another Android app
val intent = Intent("com.greenart7c3.nostrsigner.SIGN_EVENT")
intent.putExtra("event", eventJson)
startActivityForResult(intent, REQUEST_CODE)

// Amber handles signing, returns result
```

### NIP-46 Bunker

Use Amber as a remote signer for web apps:

```
1. Generate bunker connection string in Amber
2. Paste into web app login (e.g., Nostr Nests, Coracle)
3. Amber signs events over relay connection
4. Web app never sees your nsec
```

Connection string format:
```
bunker://npub...@relay.nsecbunker.com
```

### Permission Management

| Permission | Description |
|------------|-------------|
| **Sign events** | Approve individual signatures |
| **Remember choice** | Auto-sign for trusted apps |
| **Revoke** | Remove app access anytime |
| **Event types** | Grant by kind (posts, DMs, etc.) |

### Multi-Account Support

- Multiple Nostr identities
- Quick account switching
- Per-account permissions
- Separate relay configurations

## Security Model

```
┌─────────────────────────────────────────┐
│            Amber Security                │
├─────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐ │
│  │     Android KeyStore               │ │
│  │  ┌──────────────────────────────┐ │ │
│  │  │     nsec (encrypted)         │ │ │
│  │  └──────────────────────────────┘ │ │
│  └────────────────────────────────────┘ │
│                    │                     │
│                    ▼                     │
│  ┌────────────────────────────────────┐ │
│  │    Amber App                       │ │
│  │    - Decrypts only for signing     │ │
│  │    - Never exports raw key         │ │
│  └────────────────────────────────────┘ │
│                    │                     │
│                    ▼                     │
│  ┌────────────────────────────────────┐ │
│  │    Other Apps                      │ │
│  │    - Request signatures only       │ │
│  │    - Never see the nsec            │ │
│  └────────────────────────────────────┘ │
│                                          │
└─────────────────────────────────────────┘
```

## Supported Apps

### Android Apps (NIP-55)

| App | Integration |
|-----|-------------|
| **Amethyst** | Full support |
| **0xChat** | Full support |
| **Voyage** | Full support |
| **Fountain** | Full support |
| **Pokey** | Full support |

### Web Apps (NIP-46)

| App | Integration |
|-----|-------------|
| **Nostr Nests** | Bunker login |
| **Coracle** | Bunker login |
| **Nostrudel** | Bunker login |
| **Habla** | Bunker login |
| **Snort** | Bunker login |

## Installation

### F-Droid

Available in the main F-Droid repository:

```
https://f-droid.org/packages/com.greenart7c3.nostrsigner/
```

### GitHub Releases

Download APK directly:

```
https://github.com/greenart7c3/Amber/releases
```

### Obtainium

Add repository URL for automatic updates.

### Zap.store

Available in the Nostr-native app store.

### Requirements

- Android 8.0 (API 26) or newer
- No Google Play Services required

## Usage

### Initial Setup

1. Install Amber from preferred source
2. Create new key or import existing nsec
3. Optionally set PIN/biometric lock

### Connecting Apps

**For Android apps:**
1. Open the app (e.g., Amethyst)
2. Select "Login with Amber"
3. Amber opens for approval
4. Grant permissions

**For web apps:**
1. Open Amber
2. Go to Settings → Bunker
3. Copy connection string
4. Paste into web app login

### Background Signing

Enable "Remember my choice" for trusted apps:
- Events sign automatically
- No interruption to workflow
- Revoke anytime in settings

## Configuration

### Relay Settings

Configure which relays Amber uses for NIP-46:

```
Settings → Relays → Add/Remove
```

### Permissions Review

View and manage app permissions:

```
Settings → Connected Apps → [App Name]
```

### Backup

Export encrypted backup:

```
Settings → Backup → Export (password protected)
```

## Comparison

| Feature | Amber | nos2x | nsec.app |
|---------|-------|-------|----------|
| Platform | Android | Browser | Web |
| NIP-55 | Yes | No | No |
| NIP-46 | Yes | No | Yes |
| Multi-account | Yes | Yes | Yes |
| Open source | Yes | Yes | Yes |

## Links

- **GitHub:** [greenart7c3/Amber](https://github.com/greenart7c3/Amber)
- **F-Droid:** [com.greenart7c3.nostrsigner](https://f-droid.org/packages/com.greenart7c3.nostrsigner/)
- **NIP-55 Spec:** [nips.nostr.com/55](https://nips.nostr.com/55)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Amethyst](/projects/amethyst) — Android client with Amber support
- [Alby](/projects/alby) — Browser extension alternative
- [Decentralized Identity](/concepts/decentralized-identity) — The concept
