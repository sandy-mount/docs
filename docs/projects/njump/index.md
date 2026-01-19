---
title: Njump
description: HTTP gateway for browsing Nostr content
---

# Njump

**Nostr content on the regular web.** Share profiles and notes anywhere.

## Overview

Njump is an HTTP gateway that renders Nostr content as static web pages. It allows anyone to view Nostr profiles and notes in a browser without a Nostr client, making it ideal for sharing Nostr content on traditional platforms.

## Key Features

### Web Gateway

```
┌─────────────────────────────────────────────────────────────────┐
│                        Njump Gateway                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Nostr content:                                                 │
│  npub1abc... or nevent1xyz...                                  │
│                                                                 │
│            │                                                    │
│            ▼                                                    │
│                                                                 │
│  Njump renders:                                                 │
│  https://njump.me/npub1abc...                                  │
│                                                                 │
│            │                                                    │
│            ▼                                                    │
│                                                                 │
│  Static HTML page viewable by anyone                           │
│  + Rich previews for Twitter, Telegram, Discord                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Rich Previews

When sharing Njump links:

| Platform | Preview |
|----------|---------|
| **Twitter/X** | Card with profile picture, name, note text |
| **Telegram** | Rich embed with content |
| **Discord** | Full preview card |
| **Slack** | Unfurled content |

### Static & Fast

- No client-side JavaScript required
- Server-side rendering
- Aggressive caching
- Lightweight pages

## URL Formats

Njump understands all NIP-19 formats:

```
Profile:
https://njump.me/npub1...

Note:
https://njump.me/note1...

Event with relays:
https://njump.me/nevent1...

Addressable content:
https://njump.me/naddr1...
```

## Features

### Content Types

| Type | Rendered As |
|------|-------------|
| **Profiles** | Bio, picture, follower count |
| **Notes** | Full text with thread context |
| **Long-form** | Article view |
| **Images** | Embedded media |

### Client Redirect

Njump remembers your preferred client:
1. Visit a Njump link
2. Choose "Open in Damus" (or other client)
3. Future visits offer quick-open

### Embeddable

Add Nostr content to any website:
```html
<script src="https://njump.me/embed.js"></script>
<nostr-note id="note1..."></nostr-note>
```

## Multiple Mirrors

Available at multiple domains:
- njump.me (primary)
- nostr.eu
- nostr.at
- yabu.me

## Use Cases

1. **Sharing** — Post Nostr content on Twitter, get rich previews
2. **Onboarding** — Let non-Nostr users see content
3. **Archiving** — Static pages for reference
4. **SEO** — Make Nostr content searchable

## Technical Details

- Written in Go
- Open source
- Self-hostable
- Internationalization support

## Comparison

| Feature | Njump | Snort | Primal |
|---------|-------|-------|--------|
| Static pages | Yes | No | No |
| Rich previews | Yes | Limited | Yes |
| No JS required | Yes | No | No |
| Self-hostable | Yes | Yes | No |
| Embeddable | Yes | No | Limited |

## Links

- **Website:** [njump.me](https://njump.me/)
- **About:** [njump.me/about](https://njump.me/about)
- **GitHub:** [fiatjaf/njump](https://github.com/fiatjaf/njump)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Snort](/projects/snort) — Web client
- [Primal](/projects/primal) — Cross-platform client
