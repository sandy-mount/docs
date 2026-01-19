---
sidebar_position: 2
title: SLIPs
description: Solid Lite Implementation Proposals
---

# SLIPs (Solid Lite Implementation Proposals)

**Modular specifications for Solid Lite.** 34+ specs covering auth, containers, WebSockets, RDF, and more.

## What Are SLIPs?

SLIPs are small, focused specifications that extend Solid Lite:

- Each SLIP addresses one concern
- Implementations can pick which SLIPs to support
- Progressive enhancement, not all-or-nothing

## SLIP Categories

### Core (0001-0009)
Foundation specs that most implementations need.

### Authentication (0010-0019)
- SLIP-0010: Basic Authentication
- SLIP-0011: Solid-OIDC
- SLIP-0012: NIP-98 (Nostr HTTP Auth)

### Real-time (0020-0029)
- SLIP-0020: WebSocket Subscriptions
- SLIP-0021: Server-Sent Events

### Data (0030-0039)
- SLIP-0030: Container Metadata
- SLIP-0031: SPARQL Interface
- SLIP-0032: Full-Text Search

### Access Control (0040-0049)
- SLIP-0040: WAC (Web Access Control)
- SLIP-0041: ACP (Access Control Policy)
- SLIP-0042: Capability URLs

## Using SLIPs

### For Implementers

1. Implement Solid Lite Core
2. Choose relevant SLIPs
3. Declare support in conformance

### For App Developers

1. Check server capabilities
2. Use features from supported SLIPs
3. Graceful degradation for unsupported features

## Contributing

SLIPs are community-driven:

1. Propose via GitHub issue
2. Draft specification
3. Reference implementation
4. Community review
5. Acceptance

## Links

- **Website:** [solid-lite.github.io/slips](https://solid-lite.github.io/slips/)
- **GitHub:** [solid-lite/slips](https://github.com/solid-lite/slips)

## See Also

- [Solid Lite](/projects/solid-lite) — The core profile
- [Solid Protocol](/protocols/solid) — Full specification
