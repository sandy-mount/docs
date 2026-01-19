---
title: Iris
description: Nostr web client focused on simplicity
---

# Iris

**Simple, clean Nostr web client.** Open source and self-hostable.

## Overview

Iris is a web-based Nostr client created by Martti Malmi (sirius), one of Bitcoin's earliest contributors. It emphasizes simplicity and ease of use while remaining fully open source.

## Key Features

### Clean Interface

```
┌─────────────────────────────────────────────────────────┐
│                        Iris                              │
├─────────────────────────────────────────────────────────┤
│  ┌────┐                                                 │
│  │ 🏠 │ Home                                           │
│  │ 🔔 │ Notifications                                  │
│  │ ✉️ │ Messages                                        │
│  │ 🔍 │ Search                                         │
│  │ 👤 │ Profile                                        │
│  │ ⚙️ │ Settings                                       │
│  └────┘                                                 │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐│
│  │  📝 What's on your mind?                           ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
│  ┌─────────────────────────────────────────────────────┐│
│  │  alice · 2m                                         ││
│  │  Just discovered Nostr, this is amazing!           ││
│  │  ♥ 12   💬 3   ⚡                                   ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Feed** | Chronological timeline |
| **Profiles** | View and edit |
| **Messages** | Encrypted DMs |
| **Search** | Find users and content |
| **Reactions** | Likes and emojis |
| **Zaps** | Lightning tips |
| **Media** | Images and videos |

### Multiple Access Points

| Domain | Description |
|--------|-------------|
| iris.to | Main hosted version |
| Self-hosted | Run your own |

### PWA Support

Install as a Progressive Web App:
- Add to home screen
- Offline capability
- App-like experience

## Getting Started

### Web Access

1. Go to [iris.to](https://iris.to/)
2. Create account or import keys
3. Start following and posting

### Login Options

| Method | Description |
|--------|-------------|
| **Create new** | Generate fresh keypair |
| **Import nsec** | Use existing key |
| **Browser extension** | NIP-07 (Alby, nos2x) |
| **Nostr Connect** | NIP-46 remote |

### Key Backup

Iris emphasizes key backup during setup:

```
⚠️ Save your private key!

Your private key is:
nsec1abc123...

Write this down or store it safely.
If you lose it, you lose access forever.

[I've saved my key]
```

## Self-Hosting

### Static Hosting

Iris is a static site that can be hosted anywhere:

```bash
# Clone repository
git clone https://github.com/irislib/iris-messenger.git
cd iris-messenger

# Install dependencies
npm install

# Build
npm run build

# Deploy dist/ to any static host
```

### Docker

```bash
docker run -p 8080:80 irislib/iris-messenger
```

### Hosts

Deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting
- Self-hosted server

## Privacy Features

### Local-First

- Keys stored locally
- No server-side accounts
- Your data, your control

### Relay Configuration

Choose your relays:

```
Settings → Relays

Default relays:
├── wss://relay.damus.io
├── wss://nos.lol
└── wss://relay.nostr.band

Add custom relays as needed
```

## Technical Details

### Stack

| Component | Technology |
|-----------|------------|
| Framework | Preact |
| Bundler | Vite |
| Storage | IndexedDB |
| Protocol | Nostr |

### NIP Support

| NIP | Feature |
|-----|---------|
| NIP-01 | Basic protocol |
| NIP-02 | Contact lists |
| NIP-04 | Encrypted DMs |
| NIP-05 | DNS verification |
| NIP-07 | Browser signing |
| NIP-25 | Reactions |
| NIP-57 | Zaps |

## History

Created by Martti Malmi (sirius):
- Early Bitcoin contributor
- Helped Satoshi with Bitcoin development
- Built Iris as a censorship-resistant social platform

## Comparison

| Feature | Iris | Snort | Primal |
|---------|------|-------|--------|
| Complexity | Simple | Moderate | Feature-rich |
| Self-host | Easy | Possible | No |
| Target user | General | General | General |
| Open source | Yes | Yes | Yes |
| PWA | Yes | No | No |

## Use Cases

### For New Users

- Simple onboarding
- Clear interface
- Easy to understand

### For Privacy-Focused

- Self-hostable
- No tracking
- Local key storage

### For Self-Hosters

- Static site
- Easy deployment
- Full control

## Links

- **Website:** [iris.to](https://iris.to/)
- **GitHub:** [irislib/iris-messenger](https://github.com/irislib/iris-messenger)
- **Developer:** sirius (Martti Malmi)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Snort](/projects/snort) — Another web client
- [Coracle](/projects/coracle) — Advanced web client
- [nos2x](/projects/nos2x) — Browser extension
