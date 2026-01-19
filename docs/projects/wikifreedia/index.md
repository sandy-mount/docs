---
title: Wikifreedia
description: Decentralized wiki on Nostr
---

# Wikifreedia

**Wikipedia on Nostr.** Decentralized wiki with multiple viewpoints.

## Overview

Wikifreedia is a Nostr-based wiki implementing NIP-54. Unlike Wikipedia's single canonical articles, Wikifreedia allows multiple versions of articles on the same topic, with users voting on preferred versions through the Web of Trust.

## Key Features

### Multi-Version Articles

```
┌─────────────────────────────────────────────────────────────────┐
│                  Wikifreedia vs Wikipedia                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Wikipedia:                                                     │
│  ┌─────────────────┐                                           │
│  │  "Bitcoin"      │  ← Single canonical article               │
│  │  (one version)  │    Editors fight for control              │
│  └─────────────────┘                                           │
│                                                                 │
│  Wikifreedia:                                                   │
│  ┌─────────────────┐                                           │
│  │  "Bitcoin"      │  ← Multiple versions                      │
│  │  by @alice      │    Vote with reactions                    │
│  ├─────────────────┤    Fork and improve                       │
│  │  "Bitcoin"      │    Web of Trust ranks                     │
│  │  by @bob        │                                           │
│  ├─────────────────┤                                           │
│  │  "Bitcoin"      │                                           │
│  │  by @carol      │                                           │
│  └─────────────────┘                                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Multiple versions** | No single canonical truth |
| **Forking** | Edit anyone's article as your own |
| **Voting** | React to prefer versions |
| **Web of Trust** | Trust network between authors |
| **Merge requests** | Suggest changes via kind:818 |
| **Redirects** | Disambiguation via kind:30819 |

### NIP-54 Implementation

Article structure:
```json
{
  "kind": 30818,
  "tags": [
    ["d", "bitcoin"],
    ["title", "Bitcoin"],
    ["summary", "Peer-to-peer electronic cash"],
    ["published_at", "1704067200"]
  ],
  "content": "= Bitcoin\n\nBitcoin is..."
}
```

### Content Format

Uses Asciidoc with Nostr extensions:
```asciidoc
= Article Title

Introduction paragraph.

== Section

Content with [[wikilinks]] and nostr:npub1... links.

See also: [[related-topic]]
```

### Web of Trust

```
┌─────────────────────────────────────────────────────────────────┐
│                      Web of Trust                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   You follow Alice ──► Alice wrote "Bitcoin" article           │
│         │                                                       │
│         ▼                                                       │
│   Alice's version ranked higher for you                        │
│                                                                 │
│   NIP-25 reactions:                                            │
│   ├── + reaction = endorsement                                 │
│   └── - reaction = disagreement                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Event Kinds

| Kind | Purpose |
|------|---------|
| 30818 | Wiki article |
| 818 | Merge request |
| 30819 | Redirect/disambiguation |

## Implementations

- **Wikifreedia:** wikifreedia.xyz
- **Wikistr:** wikistr.com
- **nwiki:** CLI tool for wiki editing

## Comparison

| Feature | Wikifreedia | Wikipedia |
|---------|-------------|-----------|
| Governance | Decentralized | Centralized |
| Versions | Multiple | Single |
| Editing | Anyone | Approved editors |
| Content policy | User choice | Editorial board |
| Censorship | Resistant | Subject to |

## Links

- **Website:** [wikifreedia.xyz](https://wikifreedia.xyz/)
- **Wikistr:** [wikistr.com](https://wikistr.com/)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Habla](/projects/habla) — Long-form content
- [Yakihonne](/projects/yakihonne) — Blog platform
