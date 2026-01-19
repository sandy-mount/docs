---
sidebar_position: 2
title: Data Sovereignty
description: Your data belongs to you
---

# Data Sovereignty

**Your data belongs to you.** This simple idea has radical implications for how we build the web.

## The Problem

Today, your data is scattered across hundreds of services:

- Your photos on Instagram
- Your documents on Google Drive
- Your messages on WhatsApp
- Your professional network on LinkedIn
- Your music on Spotify

Each service has its own copy. Each has different terms. Each can change the rules, lock you out, or shut down. You're a tenant in someone else's building.

## The Solution

Data sovereignty means:

1. **You choose where your data lives** — Your server, a trusted provider, or anywhere you want
2. **Apps come to your data** — Instead of giving your data to apps, apps request access
3. **You control access** — Grant, revoke, and audit who can see what
4. **You can leave** — Export everything, switch providers, no lock-in

## How SAND Implements This

### Solid Pods

[Solid](/protocols/solid) provides the primary mechanism for data sovereignty. A Solid pod is like a personal web server where all your data lives:

```
your-pod.example.com/
├── profile/
│   └── card           # Your identity
├── photos/
│   ├── 2024/
│   └── 2023/
├── documents/
│   └── notes/
└── settings/
```

Apps don't store your data — they read from and write to your pod with your permission.

### Nostr Events

[Nostr](/protocols/nostr) stores messages and events cryptographically signed with your key. Even though events are distributed across relays, they're provably yours because only you have the private key.

### DIDs

[Decentralized Identifiers](/protocols/did) ensure your identity isn't tied to any provider. Your DID works everywhere, and you control the keys.

## Practical Benefits

| Centralized | Sovereign |
|-------------|-----------|
| Service shuts down, data gone | Your data persists |
| Terms change, you comply or leave | You set the terms |
| Data siloed per app | One dataset, many apps |
| Export is limited | Full data portability |
| Vendor lock-in | Switch providers freely |

## Getting Started

1. **Set up a pod** — Use [Sandymount](/projects/sandymount) to run your own, or choose a provider
2. **Use pod-aware apps** — Applications that work with Solid pods
3. **Control access** — Learn how to manage permissions

See [Your First Pod](/guides/your-first-pod) for a hands-on tutorial.

## Learn More

- [Solid Protocol](/protocols/solid) — The technical specification
- [Linked Data](/concepts/linked-data) — How data connects
- [Manifesto](/manifesto) — The philosophy behind data sovereignty
