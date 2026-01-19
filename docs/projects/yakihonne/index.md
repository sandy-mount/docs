---
title: Yakihonne
description: Nostr long-form content platform
---

# Yakihonne

**Long-form content on Nostr.** Blogging platform with curator features.

## Overview

Yakihonne is a Nostr client focused on long-form articles (NIP-23). Popular in Chinese-speaking communities, it offers curated content discovery and full article publishing capabilities.

## Key Features

### Article Publishing

| Feature | Description |
|---------|-------------|
| **Rich editor** | Full markdown support |
| **Images** | Media embedding |
| **Tags** | Content categorization |
| **Drafts** | Save before publishing |
| **Series** | Multi-part articles |

### Curation

```
┌─────────────────────────────────────────────────────────┐
│                   Yakihonne                              │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  📚 Curated Collections                                 │
│  ├── Bitcoin 101                                        │
│  ├── Nostr Development                                  │
│  └── Privacy Guides                                     │
│                                                          │
│  Curators organize and highlight quality content        │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### NIP-23 Articles

```json
{
  "kind": 30023,
  "tags": [
    ["d", "my-article-slug"],
    ["title", "My Article Title"],
    ["summary", "Brief description"],
    ["published_at", "1234567890"],
    ["t", "bitcoin"],
    ["t", "tutorial"]
  ],
  "content": "# Full markdown article..."
}
```

## Platforms

| Platform | Status |
|----------|--------|
| **Web** | yakihonne.com |
| **iOS** | Available |
| **Android** | Available |

## Monetization

- **Zaps** — Lightning tips on articles
- **Subscriptions** — Future feature

## Links

- **Website:** [yakihonne.com](https://yakihonne.com/)
- **iOS:** App Store
- **Android:** Google Play

## See Also

- [Habla](/projects/habla) — Alternative long-form
- [Nostr Protocol](/protocols/nostr) — The protocol
- [Highlighter](/projects/highlighter) — Highlights app
