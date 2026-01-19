---
title: Coracle
description: Advanced Nostr web client with relay management
---

# Coracle

**Nostr client pushing the boundaries.** Relay selection, Web of Trust moderation, and privacy-first design.

## Overview

Coracle is a web client for Nostr focused on unlocking the full potential of the protocol's unique features: intelligent relay management, Web of Trust content filtering, and strong privacy protection. It's designed for users who want more control over their Nostr experience.

## Key Features

### Relay Intelligence

```
┌─────────────────────────────────────────────────────────┐
│                Coracle Relay Management                  │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Traditional Client:                                    │
│  ┌─────────────────────────────────────────────────────┐│
│  │  User → Fixed relay list → All content             ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
│  Coracle:                                               │
│  ┌─────────────────────────────────────────────────────┐│
│  │  User → Outbox model → Smart relay selection       ││
│  │                                                      ││
│  │  Per-note relay choice:                            ││
│  │  ├── Fetch from user's preferred relays            ││
│  │  ├── Publish to your outbox relays                 ││
│  │  └── Automatic fallback if relays fail             ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
└─────────────────────────────────────────────────────────┘
```

Features:
- **Per-note relay selection** — Choose where content lives
- **Outbox-aware publishing** — Respect user preferences
- **Smart fallbacks** — Stay connected when relays fail
- **Relay-based feeds** — Browse specific relay content

### Web of Trust (WoT)

```
┌─────────────────────────────────────────────────────────┐
│                   Web of Trust                           │
├─────────────────────────────────────────────────────────┤
│                                                          │
│             You                                          │
│              │                                           │
│    ┌─────────┼─────────┐                                │
│    │         │         │                                │
│    ▼         ▼         ▼                                │
│  Follow   Follow    Follow                              │
│  Alice     Bob      Carol     ← Trust level 1          │
│    │        │         │                                 │
│    ▼        ▼         ▼                                 │
│  Alice's  Bob's    Carol's                             │
│  follows  follows  follows   ← Trust level 2          │
│                                                          │
│  Content from trusted users = Higher priority          │
│  Unknown accounts = Filtered by default                │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

WoT features:
- **Content filtering** — Prioritize trusted accounts
- **Reply filtering** — Hide spam from unknowns
- **Group discovery** — Find groups your follows joined
- **Configurable depth** — Adjust trust radius

### Multiple Experiences

Coracle isn't just microblogging:

| Feature | Description |
|---------|-------------|
| **Feeds** | Twitter-like timeline |
| **Groups** | Community discussions |
| **Calendars** | Event scheduling |
| **Marketplaces** | Buy/sell listings |
| **DMs** | Encrypted messaging |

### Privacy Features

| Feature | Description |
|---------|-------------|
| **Relay privacy** | Don't leak your relay list |
| **NIP-46 login** | Remote signing support |
| **Metadata control** | Choose what to publish |
| **Read receipts** | Optional visibility |

## Recent Updates (2024-2025)

### Version 0.6.x

- **Outbox-friendly relay controls** — Clearer publishing behavior
- **Global feed restored** — With performance improvements
- **Negentropy improvements** — Faster timeline sync
- **Group WoT sorting** — Groups sorted by trusted members

### Version 0.5.0

- **Faster feeds** — Especially relay-based feeds
- **Nostr-editor** — Smoother note editing
- **Undo send** — Delayed send with typo fix window
- **Reworked login** — Better onboarding flow

### Version 0.4.5

- **Custom feed builder** — Create personalized feeds
- **Improved UI** — Various interface refinements

## Getting Started

### Web Access

1. Go to [coracle.social](https://coracle.social/)
2. Login with extension (Alby, nos2x, Amber)
3. Or use NIP-46 bunker connection
4. Configure relay preferences
5. Start exploring

### Login Options

| Method | Description |
|--------|-------------|
| **Browser extension** | NIP-07 (Alby, nos2x) |
| **Amber** | NIP-46 bunker on Android |
| **nsec.app** | Web-based signer |
| **Private key** | Direct (less secure) |

## Configuration

### Relay Settings

```
Settings → Relays

Read relays:
├── wss://relay.damus.io (enabled)
├── wss://nos.lol (enabled)
└── wss://relay.nostr.band (enabled)

Write relays:
├── wss://relay.damus.io (enabled)
└── wss://nos.lol (enabled)

Per-note publishing: Enabled
Outbox discovery: Enabled
```

### WoT Settings

```
Settings → Web of Trust

Trust depth: 2 (follows of follows)
Filter replies: From trusted only
Filter DMs: From trusted only
Show WoT scores: Enabled
```

### Feed Customization

Build custom feeds based on:
- Specific users
- Relays
- Topics/hashtags
- Event kinds
- WoT filters

## White-Labeling

Coracle is designed for customization:

```javascript
// Embed Coracle with your branding
const config = {
  name: "My Community",
  logo: "/logo.png",
  defaultRelays: ["wss://my-relay.com"],
  theme: "custom"
};
```

Use cases:
- Community platforms
- Organization intranets
- Branded social experiences

## Interoperability

Coracle works with the broader ecosystem:

| App | Feature |
|-----|---------|
| **Amethyst** | Shared DM protocol |
| **0xChat** | Cross-app messaging |
| **Flotilla** | Group compatibility |
| **Coop** | Community features |

## Comparison

| Feature | Coracle | Snort | Primal |
|---------|---------|-------|--------|
| Relay control | Advanced | Basic | Minimal |
| WoT filtering | Yes | Yes | No |
| Groups | Yes | No | No |
| Calendars | Yes | No | No |
| Self-hostable | Yes | Yes | No |
| Open source | Yes | Yes | Yes |

## Links

- **Website:** [coracle.social](https://coracle.social/)
- **GitHub:** [coracle-social/coracle](https://github.com/coracle-social/coracle)
- **Developer:** [hodlbod](https://nostr.com/npub1jlrs53pkdfjnts29kveljul2sm0actt6n8dxrrzqcersttvcuv3qdjynqn)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Snort](/projects/snort) — Another web client
- [Amethyst](/projects/amethyst) — Android client
- [Alby](/projects/alby) — Browser extension
