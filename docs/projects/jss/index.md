---
sidebar_position: 2
title: JSS (JavaScript Solid Server)
description: Lightweight, modular Solid server
---

# JavaScript Solid Server (JSS)

**A lightweight, modular Solid server.** 90%+ CTH conformance, single binary, production ready.

## Features

- **Solid Lite compatible** — Implements the core Solid protocol
- **Modular** — Enable only what you need
- **Fast** — Lightweight and efficient
- **Built-in IdP** — Identity provider included
- **Nostr integration** — NIP-98 authentication
- **Git backend** — Version control for your data

## Quick Start

```bash
# Via npx
npx jss start

# Or install globally
npm install -g javascript-solid-server
jss start
```

## CLI Commands

```bash
# Start server
jss start [options]

# Common options
jss start --port 3000
jss start --root ./data
jss start --nostr          # Enable Nostr relay
jss start --git            # Enable Git backend
jss start --idp            # Enable identity provider
```

## Configuration

JSS can be configured via CLI flags or config file:

```json
{
  "port": 3000,
  "root": "./data",
  "nostr": true,
  "git": true,
  "idp": true
}
```

## Architecture

```
┌─────────────────────────────────────────┐
│              HTTP Server                │
├─────────────────────────────────────────┤
│  Solid  │  Nostr  │  Git  │  IdP       │
│  Core   │  Relay  │ HTTP  │            │
├─────────────────────────────────────────┤
│              File System                │
└─────────────────────────────────────────┘
```

Each module is optional. Enable what you need.

## Solid Conformance

JSS implements:

- LDP (Linked Data Platform)
- Container management
- Content negotiation
- Access control (WAC)
- Solid-OIDC authentication

Tested against the Conformance Test Harness (CTH).

## Links

- **npm:** [javascript-solid-server](https://www.npmjs.com/package/javascript-solid-server)
- **GitHub:** [JavaScriptSolidServer/JavaScriptSolidServer](https://github.com/JavaScriptSolidServer/JavaScriptSolidServer)

## See Also

- [Sandymount](/projects/sandymount) — JSS with batteries included
- [Solid Protocol](/protocols/solid) — The specification
- [Solid Lite](/projects/solid-lite) — Minimal Solid profile
