---
sidebar_position: 4
title: Decentralized Identity
description: Own your identity, prove who you are
---

# Decentralized Identity

**Your identity shouldn't depend on any company.** Decentralized identity lets you prove who you are without a middleman.

## The Problem with Centralized Identity

Today, your online identity is fragmented and dependent:

- **Platform accounts** — You're `@alice` on Twitter, `alice@gmail.com` on Google, a different `alice` on each service
- **OAuth dependency** — "Sign in with Google" means Google controls your access
- **Account termination** — Platforms can delete your account and everything associated with it
- **No portability** — You can't take your followers, reputation, or history when you leave

## Decentralized Identifiers (DIDs)

A DID is an identifier that:

1. **You control** — No registration authority needed
2. **Is globally unique** — Works across all systems
3. **Is cryptographically verifiable** — You can prove you own it
4. **Is portable** — Take it anywhere

A DID looks like this:

```
did:nostr:npub1abc123...
did:web:alice.example.com
did:key:z6Mkf5rGMoatrSj1f...
```

## How DIDs Work

```
┌─────────────────────────────────────────────────┐
│                    DID                          │
│         did:nostr:npub1abc123...                │
└───────────────────────┬─────────────────────────┘
                        │ resolves to
                        ▼
┌─────────────────────────────────────────────────┐
│              DID Document                        │
│  {                                              │
│    "id": "did:nostr:npub1abc123...",            │
│    "authentication": [...],                     │
│    "service": [...]                             │
│  }                                              │
└─────────────────────────────────────────────────┘
```

The DID Document contains:
- Public keys for authentication
- Service endpoints (your pod, social profiles, etc.)
- Other metadata you choose to publish

## DID Methods in SAND

### did:nostr

Uses Nostr keypairs as identifiers. Simple, no infrastructure needed:

```
did:nostr:npub1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxl8lt
```

Your Nostr keypair *is* your identity. See [did:nostr](/projects/did-nostr) for details.

### did:web

Uses your domain as your identifier:

```
did:web:alice.example.com
```

Resolves by fetching `https://alice.example.com/.well-known/did.json`. Good for organizations and anyone with a domain.

### did:key

A DID that's just a public key — no resolution needed:

```
did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK
```

Useful for ephemeral identities or when you don't need a DID Document.

## Verifiable Credentials

DIDs enable **Verifiable Credentials** — digital credentials that are:

- Issued by any party
- Held by you
- Verified by anyone

Example: A university issues you a diploma credential. You store it. When applying for a job, you share it. The employer verifies it came from the university — without contacting the university.

## Benefits

| Centralized Identity | Decentralized Identity |
|---------------------|------------------------|
| Provider can revoke access | You control your keys |
| Different identity per service | One identity everywhere |
| Provider stores your data | You control your data |
| Locked into ecosystems | Portable across systems |

## Getting Started

1. **Generate a Nostr keypair** — Use [Noskey](/projects/noskey) or any Nostr client
2. **Your npub is your DID** — `did:nostr:npub1...`
3. **Use it for authentication** — Sign in to services with your Nostr key

## Learn More

- [DID Protocol](/protocols/did) — Technical specification
- [did:nostr](/projects/did-nostr) — Nostr-based DIDs
- [Nostr Protocol](/protocols/nostr) — The underlying infrastructure
