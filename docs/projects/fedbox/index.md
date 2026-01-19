---
sidebar_position: 1
title: FedBox
description: Generic ActivityPub server
---

# FedBox

**A generic ActivityPub server written in Go.** Reference implementation for the GoActivityPub library suite.

## Overview

FedBox provides core ActivityPub infrastructure without opinionated application logic. It's designed as a foundation — build your own federated application on top, or use it as a reference for implementing ActivityPub.

## Architecture

FedBox is part of the GoActivityPub ecosystem:

```
┌─────────────────────────────────────────────────┐
│              Your Application                    │
├─────────────────────────────────────────────────┤
│                   FedBox                         │
│  ┌───────────┬───────────┬───────────────────┐  │
│  │  Handlers │  Storage  │  Activity Process │  │
│  └───────────┴───────────┴───────────────────┘  │
├─────────────────────────────────────────────────┤
│              GoActivityPub Libraries             │
│  ┌─────────┬──────────┬──────────┬──────────┐  │
│  │ go-ap/  │ go-ap/   │ go-ap/   │ go-ap/   │  │
│  │ activ.. │ client   │ storage  │ process  │  │
│  └─────────┴──────────┴──────────┴──────────┘  │
└─────────────────────────────────────────────────┘
```

## Key Features

### HTTP Handlers
Built-in handlers for ActivityPub endpoints:
- `HandleActivity` — POST to inbox/outbox
- `HandleCollection` — GET collections (following, followers, etc.)
- `HandleItem` — GET individual objects

### Multiple Storage Backends
Choose your persistence layer:

| Backend | Use Case |
|---------|----------|
| **BoltDB** | Embedded, simple deployments |
| **Badger** | High-performance embedded |
| **SQLite** | SQL with single-file simplicity |
| **Filesystem** | Debug-friendly, human-readable |

### Client-to-Server API
Full C2S support for local clients:
- Create activities
- Read collections
- Update objects
- Delete content

### Server-to-Server Federation
Complete S2S implementation:
- Inbox delivery
- HTTP Signatures
- Actor discovery
- WebFinger support

## Quick Start

### Installation

```bash
# Clone
git clone https://github.com/go-ap/fedbox.git
cd fedbox

# Build
go build

# Initialize
./fedbox init

# Run
./fedbox run
```

### Docker

```bash
docker run -p 4000:4000 ghcr.io/go-ap/fedbox
```

### Configuration

```env
# Server settings
LISTEN=:4000
HOSTNAME=fedbox.example.com

# Storage backend
STORAGE=boltdb
STORAGE_PATH=/var/lib/fedbox

# Security
OAUTH2_SECRET=your-secret-here
```

## API Examples

### Create an Actor

```bash
curl -X POST https://fedbox.example/actors \
  -H "Content-Type: application/activity+json" \
  -d '{
    "@context": "https://www.w3.org/ns/activitystreams",
    "type": "Person",
    "preferredUsername": "alice",
    "name": "Alice"
  }'
```

### Post an Activity

```bash
curl -X POST https://fedbox.example/actors/alice/outbox \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/activity+json" \
  -d '{
    "@context": "https://www.w3.org/ns/activitystreams",
    "type": "Create",
    "object": {
      "type": "Note",
      "content": "Hello, Fediverse!"
    }
  }'
```

### Fetch an Actor

```bash
curl https://fedbox.example/actors/alice \
  -H "Accept: application/activity+json"
```

## Related Projects

The GoActivityPub ecosystem includes:

| Project | Description |
|---------|-------------|
| **FedBox** | Multi-actor reference server |
| **ONI** | Single-user minimal server |
| **BrutaLinks** | Federated link aggregator |
| **go-ap/activitypub** | Vocabulary types |
| **go-ap/client** | HTTP client with auth |
| **go-ap/processing** | Activity side-effects |

## GoActivityPub Philosophy

> "GoActivityPub provides a batteries included suite of modules for making the creation of ActivityPub applications easier for Go developers. It was designed to offer a middle ground between the highly dynamic nature of the Activity-Vocabulary and the constraints of the Go programming language, with emphasis on strong typing, minimal resource footprint and very little 'magic'."

## Use Cases

### Build a Custom Social Network
Use FedBox as the foundation, add your own UI and business logic.

### Federation Gateway
Connect your existing application to the Fediverse.

### Testing and Development
Run a local ActivityPub server for app development.

### Reference Implementation
Learn how ActivityPub servers work by studying the code.

## Links

- **GitHub:** [go-ap/fedbox](https://github.com/go-ap/fedbox)
- **GoActivityPub:** [github.com/go-ap](https://github.com/go-ap)
- **Documentation:** [GoActivityPub Wiki](https://man.sr.ht/~mariusor/go-activitypub/)
- **SocialDocs:** [socialdocs.org/docs/ecosystem/fedbox](https://socialdocs.org/docs/ecosystem/fedbox/)

## See Also

- [ActivityPub Protocol](/protocols/activitypub) — The specification
- [MicroFed](/projects/microfed) — JavaScript alternative
- [Ditto](/projects/ditto) — Nostr + ActivityPub bridge
- [Federation](/concepts/federation) — The concept
