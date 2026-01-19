---
sidebar_position: 1
title: Sandymount
description: Complete SAND server in one command
---

# Sandymount

**Your own SAND server in one command.**

```bash
npx sandymount
```

## What It Does

Sandymount bundles everything you need:

- **Solid pod** — Store your data with access control
- **Nostr relay** — Real-time messaging infrastructure
- **Identity provider** — Built-in authentication
- **Git HTTP backend** — Version control for your pod
- **SolidOS UI** — Browser-based data editor

## Quick Start

```bash
# Run with defaults
npx sandymount

# Custom port
sandymount --port 3000

# Custom data directory
sandymount --root ./my-data

# Enable ActivityPub federation
sandymount --activitypub
```

## CLI Options

| Option | Description | Default |
|--------|-------------|---------|
| `--port <n>` | Port to listen on | 5420 |
| `--root <path>` | Data directory | ./data |
| `--no-nostr` | Disable Nostr relay | enabled |
| `--no-git` | Disable Git backend | enabled |
| `--no-idp` | Disable identity provider | enabled |
| `--no-mashlib` | Disable SolidOS UI | enabled |
| `--activitypub` | Enable ActivityPub | disabled |
| `--quiet` | Suppress logs | verbose |

## What You Get

When you run `sandymount`, you'll see:

```
  ███████╗ █████╗ ███╗   ██╗██████╗
  ██╔════╝██╔══██╗████╗  ██║██╔══██╗
  ███████╗███████║██╔██╗ ██║██║  ██║
  ╚════██║██╔══██║██║╚██╗██║██║  ██║
  ███████║██║  ██║██║ ╚████║██████╔╝
  ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝

  🏖️  Sandymount v0.0.17

  ┌────────────────────────────────────┐
  │  S  Solid        ✓ enabled         │
  │  A  ActivityPub  ○ --activitypub   │
  │  N  Nostr        ✓ enabled         │
  │  D  DID          ✓ enabled (IdP)   │
  └────────────────────────────────────┘
```

## Built On

Sandymount wraps [JSS](/projects/jss) (JavaScript Solid Server) with sensible defaults for the full SAND stack.

## Links

- **npm:** [sandymount](https://www.npmjs.com/package/sandymount)
- **GitHub:** [sandy-mount/sandymount](https://github.com/sandy-mount/sandymount)
- **Website:** [sandy-mount.com](https://sandy-mount.com)

## Next Steps

- [Your First Pod](/guides/your-first-pod) — Tutorial
- [JSS](/projects/jss) — The underlying server
- [Solid Protocol](/protocols/solid) — How Solid works
