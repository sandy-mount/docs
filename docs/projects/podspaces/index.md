---
title: PodSpaces
description: Consumer Solid pod hosting by Inrupt
---

# PodSpaces

**Get a Solid pod in minutes.** Consumer-friendly pod hosting from Inrupt.

## Overview

PodSpaces is Inrupt's consumer-facing Solid pod hosting service. It provides free personal pods with WebID, making it easy for anyone to join the Solid ecosystem.

## Key Features

### Quick Setup

```
┌─────────────────────────────────────────────────────────────────┐
│                     PodSpaces Onboarding                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   1. Visit podspaces.net                                       │
│   2. Sign up with email                                        │
│   3. Choose username                                           │
│   4. Get your pod and WebID                                    │
│                                                                 │
│   Your WebID: https://id.inrupt.com/yourname                   │
│   Your Pod: https://storage.inrupt.com/[guid]/                 │
│                                                                 │
│   Ready to use with any Solid app                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### What You Get

| Feature | Description |
|---------|-------------|
| **WebID** | Your decentralized identity |
| **Pod storage** | Space for your data |
| **Access control** | WAC permissions |
| **App integration** | Works with Solid apps |
| **Free tier** | No cost to get started |

### WebID Identity

Your PodSpaces WebID:
```
https://id.inrupt.com/yourname
```

This identity:
- Works across all Solid apps
- Proves who you are
- Controls access to your data
- Is portable (in theory)

## Usage

### Access Your Pod

1. Log in at podspaces.net
2. Use the built-in file browser
3. Or connect Solid apps

### Connect Apps

When a Solid app asks to connect:
1. Enter your WebID or pod URL
2. Log in via Inrupt
3. Grant permissions
4. App can access your data

### Manage Permissions

Control who sees what:
- Public data (anyone can read)
- Private data (only you)
- Shared data (specific people)

## Technical Details

| Component | Implementation |
|-----------|----------------|
| Identity | Inrupt-hosted WebID |
| Storage | Enterprise Solid Server (ESS) |
| Auth | Solid-OIDC |
| Access control | WAC |
| Protocol | Solid specification |

## Comparison

| Feature | PodSpaces | solidcommunity.net | Self-hosted |
|---------|-----------|-------------------|-------------|
| Provider | Inrupt | Community | You |
| Cost | Free | Free | Hosting costs |
| Setup | Minutes | Minutes | Hours |
| Control | Limited | Limited | Full |
| Support | Commercial | Community | Self |

## Limitations

Things to consider:

| Aspect | Consideration |
|--------|---------------|
| Storage limits | Free tier has limits |
| Vendor | Hosted by Inrupt |
| Features | Enterprise features may require upgrade |
| Migration | Data export available |

## Use Cases

1. **Getting started** — Try Solid without infrastructure
2. **Personal data** — Store contacts, calendar, files
3. **App development** — Test Solid apps
4. **Learning** — Understand Solid concepts

## Links

- **Website:** [podspaces.net](https://podspaces.net/)
- **Inrupt:** [inrupt.com](https://inrupt.com/)

## See Also

- [Solid Protocol](/protocols/solid) — The protocol
- [Inrupt](/projects/inrupt) — Parent company
- [CSS](/projects/css) — Self-hosted alternative
- [WebID](/projects/webid) — Identity standard
