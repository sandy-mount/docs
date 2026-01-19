---
sidebar_position: 1
title: Solid Lite
description: Minimal Solid profile - the 20% that gives 80%
---

# Solid Lite

**The minimal Solid profile.** HTTP CRUD foundation with optional features.

## Philosophy

Full Solid is complex. Solid Lite asks: what's the minimum viable Solid?

Answer: **HTTP + Linked Data + Access Control**

Everything else is optional.

## Core Requirements

A Solid Lite server must support:

1. **HTTP CRUD** — GET, PUT, POST, DELETE
2. **Containers** — LDP Basic Containers
3. **Content Negotiation** — At least Turtle and JSON-LD
4. **Access Control** — WAC or equivalent

That's it. Start there, add features as needed.

## Optional Features

Add incrementally via [SLIPs](/projects/slips):

| Feature | SLIP | Description |
|---------|------|-------------|
| WebSockets | SLIP-0010 | Real-time updates |
| Solid-OIDC | SLIP-0020 | Authentication |
| Notifications | SLIP-0030 | Activity streams |
| Search | SLIP-0040 | Query interface |

## Why Solid Lite?

### For Implementers
- Clear, achievable target
- Incremental complexity
- Faster time to compliance

### For Users
- More implementations to choose from
- Simpler mental model
- Works with existing HTTP tools

### For the Ecosystem
- Lower barrier to entry
- Interoperability at the core level
- Innovation at the edges

## Conformance

A server claims Solid Lite conformance by:

1. Passing core tests
2. Declaring supported SLIPs

Example conformance claim:

```turtle
<> solid-lite:conformsTo solid-lite:Core ;
   solid-lite:supports slip:0010, slip:0020 .
```

## Links

- **Website:** [solid-lite.org](https://solid-lite.org)
- **Specs:** [SLIPs](/projects/slips)
- **GitHub:** [solid-lite](https://github.com/solid-lite)

## See Also

- [SLIPs](/projects/slips) — Solid Lite Implementation Proposals
- [Solid Protocol](/protocols/solid) — Full specification
- [JSS](/projects/jss) — Solid Lite compatible server
