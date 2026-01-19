---
sidebar_position: 7
title: SAND Architecture
description: How the protocols work together
---

# SAND Architecture

**How Solid, ActivityPub, Nostr, and DID work together.** A visual guide to the stack.

## The Full Picture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          APPLICATIONS                                    │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐       │
│  │ SolidOS │  │  Ditto  │  │  Damus  │  │ Mastodon│  │ Your App│       │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘       │
└───────┼────────────┼────────────┼────────────┼────────────┼─────────────┘
        │            │            │            │            │
┌───────┼────────────┼────────────┼────────────┼────────────┼─────────────┐
│       │         PROTOCOLS       │            │            │             │
│  ┌────▼────┐  ┌────▼────┐  ┌────▼────┐  ┌────▼────┐                     │
│  │  Solid  │  │  Nostr  │  │  Nostr  │  │   AP    │                     │
│  │  (LDP)  │  │ (relay) │  │(client) │  │ (S2S)   │                     │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘                     │
└───────┼────────────┼────────────┼────────────┼──────────────────────────┘
        │            │            │            │
┌───────┼────────────┼────────────┼────────────┼──────────────────────────┐
│       │         IDENTITY        │            │                          │
│       │     ┌───────────────────┴────────────┘                          │
│       │     │                                                           │
│  ┌────▼─────▼────┐                                                      │
│  │      DID      │  ← did:web, did:nostr, did:key                       │
│  │   (identity)  │                                                      │
│  └───────────────┘                                                      │
└─────────────────────────────────────────────────────────────────────────┘
```

## Protocol Roles

Each protocol has a distinct role in the stack:

| Protocol | Role | Strength |
|----------|------|----------|
| **Solid** | Data storage & access control | Structured data, permissions |
| **ActivityPub** | Federation & social | Server-to-server communication |
| **Nostr** | Real-time & censorship-resistance | Simplicity, resilience |
| **DID** | Identity | Portable, self-sovereign |

## Data Flow: Reading a Profile

```
┌─────────────┐     1. Request      ┌─────────────┐
│   Client    │────────────────────►│  Solid Pod  │
│             │                     │             │
│             │◄────────────────────│             │
└─────────────┘     2. RDF Data     └─────────────┘
      │
      │ 3. Display
      ▼
┌─────────────┐
│    User     │
└─────────────┘

1. Client requests profile from pod (HTTP GET)
2. Pod returns RDF data (Turtle/JSON-LD)
3. Client renders for user
```

## Data Flow: Social Posting

```
┌──────────────────────────────────────────────────────────────┐
│                        User Posts                             │
└──────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
       ┌───────────┐   ┌───────────┐   ┌───────────┐
       │   Solid   │   │   Nostr   │   │    AP     │
       │   (pod)   │   │  (relay)  │   │  (inbox)  │
       └───────────┘   └───────────┘   └───────────┘
              │               │               │
              │     Store     │   Broadcast   │   Federate
              ▼               ▼               ▼
       ┌───────────┐   ┌───────────┐   ┌───────────┐
       │  Private  │   │   All     │   │ Followers │
       │  Archive  │   │  Relays   │   │  Servers  │
       └───────────┘   └───────────┘   └───────────┘
```

A single post can:
1. **Store** in your Solid pod (your archive)
2. **Broadcast** to Nostr relays (public, censorship-resistant)
3. **Federate** via ActivityPub (reach Mastodon users)

## Authentication Flow

```
┌─────────┐                                    ┌─────────┐
│  User   │                                    │   App   │
└────┬────┘                                    └────┬────┘
     │                                              │
     │ 1. "Login with Solid"                        │
     │─────────────────────────────────────────────►│
     │                                              │
     │         2. Redirect to IdP                   │
     │◄─────────────────────────────────────────────│
     │                                              │
     ▼                                              │
┌─────────┐                                         │
│   IdP   │  3. Authenticate                        │
└────┬────┘                                         │
     │                                              │
     │         4. Redirect with token               │
     │─────────────────────────────────────────────►│
     │                                              │
     │         5. Access resources                  │
     │◄────────────────────────────────────────────►│
     │                                              │
```

Alternatively, with Nostr (NIP-98):

```
┌─────────┐                                    ┌─────────┐
│  User   │                                    │ Server  │
└────┬────┘                                    └────┬────┘
     │                                              │
     │ 1. Sign event with nsec                      │
     │─────────────────────────────────────────────►│
     │    Authorization: Nostr <event>              │
     │                                              │
     │ 2. Server verifies signature                 │
     │                                              │
     │ 3. Access granted                            │
     │◄─────────────────────────────────────────────│
     │                                              │
```

## Server Architecture: Sandymount

```
┌─────────────────────────────────────────────────────────────┐
│                       Sandymount                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐   │
│  │   Solid LDP   │  │  Nostr Relay  │  │   Git HTTP    │   │
│  │   (storage)   │  │  (real-time)  │  │   (version)   │   │
│  └───────┬───────┘  └───────┬───────┘  └───────┬───────┘   │
│          │                  │                  │            │
│  ┌───────┴──────────────────┴──────────────────┴───────┐   │
│  │                    JSS Core                          │   │
│  │              (JavaScript Solid Server)               │   │
│  └───────────────────────┬─────────────────────────────┘   │
│                          │                                  │
│  ┌───────────────────────▼─────────────────────────────┐   │
│  │                   File System                        │   │
│  │                    ./data/                           │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Client Architecture: Typical Solid App

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser / App                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                    Your UI                           │   │
│  │              (React, Vue, vanilla JS)                │   │
│  └───────────────────────┬─────────────────────────────┘   │
│                          │                                  │
│  ┌───────────────────────▼─────────────────────────────┐   │
│  │              @inrupt/solid-client                    │   │
│  │           (high-level Solid operations)              │   │
│  └───────────────────────┬─────────────────────────────┘   │
│                          │                                  │
│  ┌───────────────────────▼─────────────────────────────┐   │
│  │         @inrupt/solid-client-authn-browser          │   │
│  │                (Solid-OIDC auth)                     │   │
│  └───────────────────────┬─────────────────────────────┘   │
│                          │                                  │
│  ┌───────────────────────▼─────────────────────────────┐   │
│  │                    rdflib.js                         │   │
│  │             (low-level RDF operations)               │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           │ HTTPS
                           ▼
                    ┌─────────────┐
                    │  Solid Pod  │
                    └─────────────┘
```

## Multi-Protocol Agent Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      AI Agent                                │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                    LLM Core                          │   │
│  │               (Claude, GPT, etc.)                    │   │
│  └───────────────────────┬─────────────────────────────┘   │
│                          │                                  │
│  ┌───────────────────────▼─────────────────────────────┐   │
│  │                   MCP Client                         │   │
│  │            (Model Context Protocol)                  │   │
│  └───────────────────────┬─────────────────────────────┘   │
│                          │                                  │
│          ┌───────────────┼───────────────┐                 │
│          ▼               ▼               ▼                 │
│  ┌───────────┐   ┌───────────┐   ┌───────────┐            │
│  │MCP Server │   │MCP Server │   │MCP Server │            │
│  │  (Solid)  │   │  (Nostr)  │   │   (AP)    │            │
│  └─────┬─────┘   └─────┬─────┘   └─────┬─────┘            │
│        │               │               │                   │
└────────┼───────────────┼───────────────┼───────────────────┘
         │               │               │
         ▼               ▼               ▼
  ┌───────────┐   ┌───────────┐   ┌───────────┐
  │   Pod     │   │  Relays   │   │  Servers  │
  └───────────┘   └───────────┘   └───────────┘
```

## See Also

- [Protocols Overview](/protocols/overview) — Individual protocol details
- [Concepts Overview](/concepts/overview) — Foundational ideas
- [Sandymount](/projects/sandymount) — Run the full stack
