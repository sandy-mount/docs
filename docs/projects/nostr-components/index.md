---
title: Nostr Components
description: Web components for rendering Nostr events
---

# Nostr Components

**Drop-in web components for Nostr.** Render events, profiles, and media with zero configuration.

## Overview

Nostr Components provides HTML custom elements for displaying Nostr content:

- **Zero dependencies** — Pure web components
- **Tiny footprint** — ~3KB gzipped
- **CDN-ready** — Just add a script tag
- **Auto media detection** — Images, video, audio

## Quick Start

```html
<!-- Include the library -->
<script src="https://unpkg.com/nostr-components"></script>

<!-- Render an event -->
<nostr-event id="note1abc123..."></nostr-event>

<!-- Render a profile -->
<nostr-profile pubkey="npub1..."></nostr-profile>
```

## Components

### `<nostr-event>`

Renders a Nostr event with content, author, and metadata:

```html
<nostr-event 
  id="note1..." 
  relay="wss://relay.damus.io">
</nostr-event>
```

### `<nostr-profile>`

Displays a user profile:

```html
<nostr-profile 
  pubkey="npub1..."
  show-banner="true">
</nostr-profile>
```

### `<nostr-feed>`

Shows a feed of events:

```html
<nostr-feed 
  authors="npub1...,npub2..."
  limit="20">
</nostr-feed>
```

## Features

- Automatic media embedding
- Link previews
- Zap button integration
- Customizable styling via CSS variables

## Links

- **Demo:** [nostr-components.github.io/event](https://nostr-components.github.io/event/)
- **GitHub:** [nostr-components](https://github.com/nostr-components)

## See Also

- [Nostr Protocol](/protocols/nostr)
- [Nostr Getting Started](/guides/nostr-getting-started)
