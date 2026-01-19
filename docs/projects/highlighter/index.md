---
title: Highlighter
description: Nostr highlights and note-taking app
---

# Highlighter

**Share wisdom and stack sats.** Highlights, notes, and lists on Nostr.

## Overview

Highlighter is a Nostr client focused on capturing and sharing valuable information. Highlight text from anywhere on the web, organize notes and lists, and monetize your curated content through zaps.

## Key Features

### Web Highlighting

```
┌─────────────────────────────────────────────────────────┐
│                Browser Extension                         │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Any webpage:                                           │
│  ┌─────────────────────────────────────────────────────┐│
│  │  "This is regular text that you're reading on      ││
│  │   any website. ████████████████████████████████    ││
│  │   This part is highlighted and saved to Nostr.     ││
│  │   More regular text continues here."               ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
│  Select text → Right-click → Highlight to Nostr        │
│                                                          │
│  Works on:                                              │
│  ├── Articles                                           │
│  ├── PDFs                                               │
│  ├── Blog posts                                         │
│  └── Any web content                                    │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### NIP-84 Highlights

Highlights are stored as NIP-84 events:

```json
{
  "kind": 9802,
  "tags": [
    ["context", "surrounding text for context"],
    ["r", "https://source-url.com/article"],
    ["comment", "My thoughts on this highlight"]
  ],
  "content": "The highlighted text itself"
}
```

### Media Highlights (2.0+)

Highlight podcasts and videos:

```
┌─────────────────────────────────────────────────────────┐
│              Media Highlighting                          │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  🎙️ Podcast Episode                                     │
│  ━━━━━━━━━━●━━━━━━━━━━━━━━━━━━━━━━━━  15:32 / 1:24:00  │
│                                                          │
│  "Really great insight here at 15:32..."               │
│                                                          │
│  [Create Highlight]                                      │
│                                                          │
│  DVMs (Data Vending Machines) transcribe audio         │
│  so you can highlight spoken content as text           │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Zap Splits

When someone zaps your highlight:

```
Reader zaps a highlight (1000 sats)
           │
           ▼
    Automatic split:
    ├── You (curator): 200 sats
    ├── Original author: 600 sats
    └── Platform: 200 sats

Everyone in the value chain benefits
```

### Lists & Organization

```
┌─────────────────────────────────────────────────────────┐
│                    My Lists                              │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  📚 Reading List                                        │
│  ├── Article: Bitcoin Economics                        │
│  ├── Book: The Sovereign Individual                    │
│  └── Paper: Lightning Network Whitepaper               │
│                                                          │
│  💡 Ideas                                               │
│  ├── Project concept: Nostr calendar                   │
│  └── Feature request: Mobile highlights                │
│                                                          │
│  🏷️ Labeled with NIP-32                                │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Private Notes

Write long-form notes with privacy options:

| Type | Visibility |
|------|------------|
| **Public** | Anyone can read |
| **Private** | Encrypted, only you |
| **Draft** | Unpublished |

## Browser Extension

### Installation

Available for:
- Chrome / Chromium browsers
- Firefox
- Brave

### Usage

1. Install extension
2. Login with Nostr key
3. Browse any webpage
4. Select text to highlight
5. Right-click → "Highlight to Nostr"
6. Add optional comment
7. Publish

### Features

| Feature | Description |
|---------|-------------|
| **Quick highlight** | One-click saving |
| **Add comment** | Your thoughts |
| **Category labels** | Organize with NIP-32 |
| **Source tracking** | Links back to original |
| **PDF support** | Highlight documents |

## Web Dashboard

### My Highlights

View and manage all your highlights:

```
highlighter.com/my

├── Highlights tab
│   ├── Recent highlights
│   ├── Search & filter
│   └── Edit/delete
│
├── Lists tab
│   ├── Create lists
│   ├── Add items
│   └── Organize
│
└── Notes tab
    ├── Private notes
    ├── Public articles
    └── Drafts
```

### Discovery

- Browse highlights from people you follow
- Discover popular highlights
- Find highlights by topic
- See what's trending

## Highlighter 2.0

Major updates in version 2.0:

| Feature | Description |
|---------|-------------|
| **Media highlights** | Podcast & video support |
| **DVM integration** | AI-assisted transcription |
| **Zap splits** | Multi-party payments |
| **NIP-32 labels** | Better categorization |
| **Redesigned UI** | Cleaner interface |
| **Subscriptions** | Creator support |

## Use Cases

### Researchers

- Collect quotes from sources
- Organize by project/topic
- Share findings publicly
- Cite with source links

### Curators

- Surface valuable content
- Build themed collections
- Earn from curation
- Build reputation

### Learners

- Save key insights
- Build personal wiki
- Review highlights
- Connect ideas

### Creators

- Gather inspiration
- Draft content from highlights
- Monetize your reading
- Engage your audience

## Technical Details

### Supported NIPs

| NIP | Feature |
|-----|---------|
| NIP-84 | Highlights |
| NIP-32 | Labels |
| NIP-23 | Long-form |
| NIP-57 | Zaps |
| NIP-07 | Signing |

### Data Portability

Your highlights are:
- Stored on relays you choose
- Portable to any client
- Owned by you (your keys)
- Exportable

## Links

- **Website:** [highlighter.com](https://highlighter.com/)
- **Extension:** Chrome Web Store / Firefox Add-ons
- **NIP-84:** [nips.nostr.com/84](https://nips.nostr.com/84)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Habla](/projects/habla) — Long-form writing
- [Coracle](/projects/coracle) — Web client
- [Alby](/projects/alby) — Zap payments
