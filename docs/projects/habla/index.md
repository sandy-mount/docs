---
title: Habla
description: Long-form content platform for Nostr
---

# Habla

**Read, write, and monetize long-form content on Nostr.** A Medium-like experience, fully decentralized.

## Overview

Habla is a Nostr client focused on long-form articles (NIP-23). It combines a clean reading experience with native Bitcoin monetization through zaps, making it ideal for writers, bloggers, and content creators.

## Key Features

### Long-Form Publishing

```
┌─────────────────────────────────────────────────────────┐
│                    Habla Editor                          │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Title: [Your Article Title                    ]        │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐│
│  │  # Heading                                           ││
│  │                                                      ││
│  │  Your content here with **bold**, *italic*,         ││
│  │  and [links](https://...).                          ││
│  │                                                      ││
│  │  ```code blocks```                                   ││
│  │                                                      ││
│  │  > Blockquotes                                       ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
│  Summary: [Brief description for previews     ]         │
│  Tags: [nostr] [bitcoin] [writing]                      │
│  Banner: [Upload image]                                  │
│                                                          │
│  [Preview]  [Publish]                                    │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Markdown Support

Full markdown with toolbar assistance:

| Element | Syntax |
|---------|--------|
| **Bold** | `**text**` |
| *Italic* | `*text*` |
| Headings | `# H1` `## H2` |
| Links | `[text](url)` |
| Images | `![alt](url)` |
| Code | `` `code` `` |
| Blockquotes | `> quote` |
| Lists | `- item` |

### Native Monetization (Zaps)

```
┌─────────────────────────────────────────┐
│           Zap Flow                       │
├─────────────────────────────────────────┤
│                                          │
│  Reader enjoys article                  │
│         │                                │
│         ▼                                │
│  ⚡ Click Zap button                     │
│         │                                │
│         ▼                                │
│  Choose amount (21, 100, 1000 sats)     │
│         │                                │
│         ▼                                │
│  Payment via Lightning                  │
│         │                                │
│         ▼                                │
│  Writer receives sats instantly         │
│  + Zap appears on article               │
│                                          │
└─────────────────────────────────────────┘
```

Unlike traditional likes, zaps:
- Carry real value
- Signal content quality
- Show what resonates with readers
- Create direct creator-reader relationship

### Rich Embeds

Paste Nostr links to embed:

| Content | Result |
|---------|--------|
| **Notes** | Quoted post embed |
| **Profiles** | User card |
| **Articles** | Article preview |
| **Audio** | Zapstr player |
| **Video** | Video embed |

```markdown
<!-- Paste a Nostr link -->
nostr:nevent1qqsxyz...

<!-- Habla converts to rich embed -->
```

### Communities

Reddit-like curated spaces:

```
┌─────────────────────────────────────────┐
│        Community: Bitcoin               │
├─────────────────────────────────────────┤
│                                          │
│  Moderators: @alice, @bob               │
│  Members: 1,234                          │
│                                          │
│  📝 Recent Articles                     │
│  ├── Understanding UTXOs                │
│  ├── Lightning Network Explained        │
│  └── Self-Custody Guide                 │
│                                          │
│  Rules:                                  │
│  - Stay on topic                        │
│  - No spam                              │
│  - Be respectful                        │
│                                          │
└─────────────────────────────────────────┘
```

### Censorship Resistance

```
Your article ──► Multiple relays ──► Readers

If Relay A blocks you:
├── Relay B still has it
├── Relay C still has it
└── Readers connect to any relay

Result: Cannot be silenced
```

## Reader Experience

### Clean Reading

- Distraction-free layout
- Typography optimized for reading
- Dark and light modes
- Mobile responsive

### Discovery

| Feature | Description |
|---------|-------------|
| **Home** | Articles from follows |
| **Explore** | Trending articles |
| **Communities** | Curated topics |
| **Search** | Find articles |
| **Tags** | Browse by topic |

### Bookmarks

Save articles for later reading, synced across devices via Nostr.

## Getting Started

### Reading

1. Go to [habla.news](https://habla.news/)
2. Browse or search for content
3. Login with extension (Alby, nos2x) to interact
4. Zap articles you enjoy

### Writing

1. Login with Nostr extension
2. Click "Write"
3. Compose in markdown editor
4. Add title, summary, tags, banner
5. Publish to your relays

### Setting Up Zaps

1. Configure Lightning address in profile
2. Or set up NWC wallet
3. Readers can now zap your articles

## NIP-23 Format

Habla uses the NIP-23 long-form content format:

```json
{
  "kind": 30023,
  "tags": [
    ["d", "unique-slug"],
    ["title", "Article Title"],
    ["summary", "Brief description"],
    ["image", "https://banner-url.jpg"],
    ["t", "tag1"],
    ["t", "tag2"],
    ["published_at", "1234567890"]
  ],
  "content": "# Markdown content here...",
  "created_at": 1234567890
}
```

## Comparison

| Feature | Habla | Substack | Medium |
|---------|-------|----------|--------|
| Decentralized | Yes | No | No |
| Censorship-resistant | Yes | No | No |
| Native monetization | Zaps | Subscription | Paywall |
| Markdown | Yes | Limited | No |
| Own your content | Yes | Partial | No |
| Open source | Yes | No | No |

## Alternatives

Other Nostr long-form clients:
- **Blogstack** — Another NIP-23 reader/writer
- **Flycat** — Minimal long-form client
- **Yakihonne** — Chinese long-form platform

## Links

- **Website:** [habla.news](https://habla.news/)
- **GitHub:** [verbiricha/habla.news](https://github.com/verbiricha/habla.news)
- **FAQ:** [habla.news/tony/habla-faq](https://habla.news/tony/habla-faq)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Alby](/projects/alby) — Browser extension for zaps
- [Snort](/projects/snort) — Short-form client
- [Primal](/projects/primal) — Client with Reads tab
