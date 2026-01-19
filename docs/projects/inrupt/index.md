---
title: Inrupt
description: Enterprise Solid products and services
---

# Inrupt

**Enterprise Solid solutions.** Commercial products and services for Solid adoption.

## Overview

Inrupt is a company founded by Sir Tim Berners-Lee to drive Solid adoption in enterprise environments. They provide commercial-grade Solid servers, developer tools, and professional services.

## Products

### Enterprise Solid Server (ESS)

Production-ready Solid server for organizations:

| Feature | Description |
|---------|-------------|
| **High availability** | Enterprise SLAs |
| **Scalability** | Handle enterprise workloads |
| **Security** | Enterprise security features |
| **Support** | Professional support |
| **Compliance** | Enterprise compliance |

### PodSpaces

Consumer-facing pod hosting:

```
┌─────────────────────────────────────────────────────────┐
│                    PodSpaces                             │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Get your personal Solid pod:                           │
│                                                          │
│  1. Sign up at podspaces.net                           │
│  2. Get a WebID                                         │
│  3. Store your data                                     │
│  4. Use Solid apps                                      │
│                                                          │
│  Free tier available                                    │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Developer Tools

| Tool | Purpose |
|------|---------|
| **solid-client** | JavaScript library |
| **solid-client-authn** | Authentication |
| **Docs** | Developer documentation |

## Services

### Consulting

- Architecture design
- Implementation support
- Training

### Integration

- Enterprise system integration
- Custom development
- Migration services

## Solid Ecosystem Role

```
┌─────────────────────────────────────────────────────────┐
│                 Solid Ecosystem                          │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  W3C Solid Community Group (standards)                  │
│            │                                             │
│            ▼                                             │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │    Community     │  │     Inrupt       │            │
│  │ (CSS, JSS, NSS)  │  │ (ESS, PodSpaces) │            │
│  │   Open source    │  │   Commercial     │            │
│  └──────────────────┘  └──────────────────┘            │
│            │                    │                        │
│            └────────────────────┘                        │
│                    │                                     │
│                    ▼                                     │
│           Solid Specification                           │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Getting Started

### PodSpaces

1. Go to [podspaces.net](https://podspaces.net/)
2. Create account
3. Get your WebID: `https://id.inrupt.com/yourname`
4. Access your pod

### Developer Resources

```javascript
// Using Inrupt's solid-client
import { getSolidDataset, getThing } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";

const dataset = await getSolidDataset(
  "https://id.inrupt.com/yourname/profile/card",
  { fetch }
);
```

## Links

- **Website:** [inrupt.com](https://inrupt.com/)
- **PodSpaces:** [podspaces.net](https://podspaces.net/)
- **Docs:** [docs.inrupt.com](https://docs.inrupt.com/)
- **GitHub:** [github.com/inrupt](https://github.com/inrupt)

## See Also

- [Solid Protocol](/protocols/solid) — The protocol
- [solid-client](/projects/solid-client) — JavaScript library
- [CSS](/projects/css) — Open source server
- [SolidOS](/projects/solidos) — Data browser
