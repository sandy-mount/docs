---
sidebar_position: 7
title: Local-First
description: Your device is the source of truth
---

# Local-First

**The cloud is optional.** Local-first software works on your device, with or without an internet connection.

## The Problem with Cloud-First

Most modern apps are thin clients to cloud services:

- **No internet = no app** — Can't access your own data offline
- **Service dies = data dies** — When the company shuts down, so does your stuff
- **Latency** — Every action round-trips to a server
- **Privacy** — Your data lives on someone else's computer

## Local-First Principles

Local-first software:

1. **Works offline** — Full functionality without internet
2. **Stores data locally** — Your device has the complete dataset
3. **Syncs when possible** — Updates merge when you reconnect
4. **You own the data** — Files you can backup, export, migrate
5. **Fast** — No network latency for local operations

## The Spectrum

```
Cloud-First          Hybrid              Local-First
    │                  │                      │
    ▼                  ▼                      ▼
┌────────┐        ┌────────┐            ┌────────┐
│ Server │        │ Local  │◄──sync──►  │ Local  │
│  only  │        │ cache  │            │ first  │
└────────┘        └────────┘            └────────┘
    │                  │                      │
 Google Docs      Mobile apps           Git, Obsidian
 Notion           with offline          Local-first CRDTs
 Figma            support
```

## Local-First in SAND

### Solid Pods

While pods are typically servers, nothing prevents running a pod locally:

- **Local pod** — Your laptop runs a Solid server
- **Sync to cloud** — Optionally replicate to a remote pod
- **Work offline** — Full access to your data anytime

### Nostr

Nostr is inherently local-first:

- **Your keys, your identity** — No server needed for identity
- **Local client** — Store events locally, sync to relays when online
- **Multiple relays** — Redundancy means no single point of failure

### DIDs

Decentralized identifiers are local by nature:

- **did:key** — Your identity is your key pair, stored locally
- **did:nostr** — Same principle
- **No resolution needed** — Work without network access

## Sync and Conflict Resolution

The challenge with local-first is: what happens when two devices edit the same data offline, then reconnect?

Solutions:

- **CRDTs** (Conflict-free Replicated Data Types) — Data structures that automatically merge
- **Operational Transform** — Merge edits like Google Docs
- **Last-write-wins** — Simple but lossy
- **Manual resolution** — Let the user decide (like Git)

## Benefits

| Cloud-First | Local-First |
|-------------|-------------|
| Requires internet | Works offline |
| Server latency | Instant response |
| Data on their servers | Data on your device |
| Service can shut down | Your data persists |
| Privacy concerns | Data stays local |

## Trade-offs

Local-first isn't free:

- **Storage** — Your device needs space for all your data
- **Sync complexity** — Merging is hard
- **Initial setup** — May need to sync a large dataset first
- **Multi-device** — Need good sync infrastructure

## Getting Started

1. **Choose local-first tools** — Obsidian for notes, Git for code
2. **Run a local pod** — [Sandymount](/projects/sandymount) can run locally
3. **Store keys locally** — Use [Noskey](/projects/noskey) for Nostr keys
4. **Backup** — You're responsible for your data now

## Learn More

- [Solid Protocol](/protocols/solid) — Pod architecture
- [Nostr Protocol](/protocols/nostr) — Relay and client model
- [ink & Switch: Local-First Software](https://www.inkandswitch.com/local-first/) — Foundational essay
