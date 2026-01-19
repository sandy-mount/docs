---
title: Node Solid Server (NSS)
description: The original Solid server implementation
---

# Node Solid Server (NSS)

**The original Solid server.** Production-tested, widely deployed, feature-rich.

## Overview

NSS was the first Solid server implementation, powering solidcommunity.net and many other pods. While newer servers like CSS and JSS are more actively developed, NSS remains a solid choice for production deployments.

## Features

- **Battle-tested** — Years of production use
- **Full-featured** — Solid-OIDC, WebID-TLS, WAC
- **SolidOS integration** — Built-in data browser
- **Multi-user** — Registration and account management

## Installation

```bash
npm install -g solid-server

# Initialize
solid init

# Start
solid start
```

## Configuration

NSS uses a config file:

```json
{
  "root": "./data",
  "port": 8443,
  "serverUri": "https://localhost:8443",
  "webid": true,
  "mount": "/",
  "ssl": true
}
```

## Status

NSS is in maintenance mode. For new deployments, consider:
- [CSS](/projects/css) — Reference implementation
- [JSS](/projects/jss) — Lightweight alternative
- [Sandymount](/projects/sandymount) — Full SAND stack

## Links

- **npm:** [solid-server](https://www.npmjs.com/package/solid-server)
- **GitHub:** [nodeSolidServer/node-solid-server](https://github.com/nodeSolidServer/node-solid-server)

## See Also

- [Solid Protocol](/protocols/solid)
- [CSS](/projects/css) — Modern alternative
- [JSS](/projects/jss) — Lighter alternative
