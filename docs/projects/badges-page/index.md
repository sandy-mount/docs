---
title: Badges.page
description: Nostr badge system for achievements and reputation
---

# Badges.page

**Achievements on Nostr.** Create, award, and display NIP-58 badges.

## Overview

Badges.page is a web interface for the Nostr badge system (NIP-58). It lets you create badges, award them to users, and manage which badges appear on your profile — enabling reputation systems and visual achievements.

## Key Features

### Badge System

```
┌─────────────────────────────────────────────────────────────────┐
│                    Nostr Badges (NIP-58)                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Badge Definition (kind 30009):                               │
│   └── Created by issuer                                        │
│   └── Has name, image, description                             │
│   └── Identified by d-tag                                      │
│                                                                 │
│   Badge Award (kind 8):                                        │
│   └── References badge definition                              │
│   └── Contains recipient pubkeys                               │
│   └── Can award to multiple users                              │
│                                                                 │
│   Profile Badges (kind 30008):                                 │
│   └── User selects which to display                            │
│   └── Controls ordering on profile                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Create badges** | Design and mint badges |
| **Award badges** | Give badges to users |
| **View badges** | See collected badges |
| **Accept/reject** | Choose to display or hide |
| **Order badges** | Arrange profile display |

### Badge Creation

Design your badge:
- Name (required)
- Image (recommended 1024x1024)
- Description
- Criteria

## NIP-58 Implementation

### Badge Definition

```json
{
  "kind": 30009,
  "tags": [
    ["d", "early-adopter"],
    ["name", "Early Adopter"],
    ["description", "Joined in the first year"],
    ["image", "https://example.com/badge.png"],
    ["thumb", "https://example.com/badge-thumb.png"]
  ],
  "content": ""
}
```

### Badge Award

```json
{
  "kind": 8,
  "tags": [
    ["a", "30009:issuer-pubkey:early-adopter"],
    ["p", "recipient-pubkey-1"],
    ["p", "recipient-pubkey-2"]
  ],
  "content": ""
}
```

### Profile Badges

```json
{
  "kind": 30008,
  "tags": [
    ["d", "profile_badges"],
    ["a", "30009:issuer:badge1"],
    ["e", "award-event-id-1"],
    ["a", "30009:issuer:badge2"],
    ["e", "award-event-id-2"]
  ],
  "content": ""
}
```

## Use Cases

1. **Community recognition** — Reward contributors
2. **Event attendance** — Prove participation
3. **Skill certification** — Verify competencies
4. **Milestones** — Mark achievements
5. **Memberships** — Show affiliations

## Authentication

Login with NIP-07 extensions:
- Alby
- nos2x
- Other signers

## Comparison

| Feature | Badges.page | Twitter Badges | Discord Badges |
|---------|-------------|----------------|----------------|
| User-created | Yes | No | Limited |
| Cross-platform | Yes (Nostr) | No | No |
| Open protocol | Yes (NIP-58) | No | No |
| Self-sovereign | Yes | No | No |

## Links

- **Website:** [badges.page](https://badges.page/)
- **GitHub:** [verbiricha/badges](https://github.com/verbiricha/badges)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Listr](/projects/listr) — List management
- [Alby](/projects/alby) — Browser extension
