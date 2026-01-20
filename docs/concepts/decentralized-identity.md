---
sidebar_position: 4
title: Decentralized Identity
description: Own your identity, prove who you are
---

# Decentralized Identity

**Your identity shouldn't depend on any company.** Decentralized identity lets you prove who you are without a middleman.

## The Problem with Centralized Identity

Today, your online identity is fragmented and dependent:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    CENTRALIZED IDENTITY                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐              │
│   │ Twitter │  │  Google │  │ Facebook│  │  Bank   │              │
│   │ @alice  │  │ alice@  │  │ alice.fb│  │ acct#123│              │
│   └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘              │
│        │            │            │            │                    │
│        └────────────┴─────┬──────┴────────────┘                    │
│                           │                                        │
│                      ┌────┴────┐                                   │
│                      │  Alice  │                                   │
│                      └─────────┘                                   │
│                                                                     │
│   Problems:                                                        │
│   • Different identity on each service                             │
│   • Platforms can terminate accounts                               │
│   • No way to prove these are the same person                      │
│   • Reputation and history locked in silos                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

| Problem | Impact |
|---------|--------|
| **Platform accounts** | You're `@alice` on Twitter, `alice@gmail.com` on Google |
| **OAuth dependency** | "Sign in with Google" means Google controls your access |
| **Account termination** | Platforms can delete your account |
| **No portability** | Can't take followers, reputation, or history |
| **Surveillance** | Platforms track everything |

## Decentralized Identifiers (DIDs)

A DID is an identifier that:

| Property | Description |
|----------|-------------|
| **You control** | No registration authority needed |
| **Globally unique** | Works across all systems |
| **Cryptographically verifiable** | Prove you own it with a signature |
| **Portable** | Take it anywhere |
| **Persistent** | Doesn't expire or get revoked |

### DID Syntax

```
┌─────────────────────────────────────────────────────────────────────┐
│                    DID STRUCTURE                                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│     did : nostr : npub1abc123...                                   │
│      │      │           │                                          │
│      │      │           └── Method-specific identifier             │
│      │      └── Method (how to resolve)                            │
│      └── Scheme (always "did")                                     │
│                                                                     │
│   Examples:                                                         │
│   did:nostr:npub1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxl8lt       │
│   did:web:alice.example.com                                        │
│   did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## How DIDs Work

```
┌─────────────────────────────────────────────────────────────────────┐
│                    DID RESOLUTION                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   1. Start with a DID                                              │
│   ┌─────────────────────────────────────────────────────────────┐  │
│   │           did:nostr:npub1abc123...                           │  │
│   └─────────────────────────────────────────────────────────────┘  │
│                              │                                     │
│                              │ resolve                             │
│                              ▼                                     │
│   2. Get DID Document                                              │
│   ┌─────────────────────────────────────────────────────────────┐  │
│   │  {                                                           │  │
│   │    "@context": "https://www.w3.org/ns/did/v1",               │  │
│   │    "id": "did:nostr:npub1abc123...",                         │  │
│   │    "verificationMethod": [{                                  │  │
│   │      "type": "SchnorrSecp256k1",                             │  │
│   │      "publicKeyHex": "abc123..."                             │  │
│   │    }],                                                       │  │
│   │    "authentication": ["#key-0"],                             │  │
│   │    "service": [{                                             │  │
│   │      "type": "SolidStorage",                                 │  │
│   │      "serviceEndpoint": "https://pod.example/"               │  │
│   │    }]                                                        │  │
│   │  }                                                           │  │
│   └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   3. Use the public key to verify signatures                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

The DID Document contains:

| Field | Purpose |
|-------|---------|
| `verificationMethod` | Public keys for authentication |
| `authentication` | Which keys can authenticate |
| `service` | Endpoints (pod, social profiles, etc.) |
| `assertionMethod` | Keys for signing credentials |
| `keyAgreement` | Keys for encryption |

## DID Methods in SAND

### Comparison

| Method | Resolution | Infrastructure | Use Case |
|--------|------------|----------------|----------|
| **did:nostr** | Derive from key | None | Personal identity |
| **did:web** | HTTPS fetch | Domain | Organizations |
| **did:key** | Derive from key | None | Ephemeral |

### did:nostr

Uses Nostr keypairs as identifiers. Simple, no infrastructure needed:

```
did:nostr:npub1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxl8lt
```

| Aspect | Detail |
|--------|--------|
| Resolution | Decode npub to get public key |
| Signing | secp256k1 Schnorr signatures |
| Infrastructure | None required |
| Portability | Perfect—key is the identity |

Your Nostr keypair *is* your identity. See [did:nostr](/projects/did-nostr) for details.

### did:web

Uses your domain as your identifier:

```
did:web:alice.example.com
```

Resolution:
```
GET https://alice.example.com/.well-known/did.json
```

| Aspect | Detail |
|--------|--------|
| Resolution | HTTPS fetch |
| Trust | Domain ownership |
| Infrastructure | Web server |
| Use case | Organizations, established entities |

### did:key

A DID that's just a public key — no resolution needed:

```
did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK
```

| Aspect | Detail |
|--------|--------|
| Resolution | Decode multibase string |
| Trust | Key possession |
| Infrastructure | None |
| Use case | Ephemeral, quick verification |

## Authentication Flow

How you prove identity with DIDs:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    DID AUTHENTICATION                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   1. Service presents a challenge                                  │
│   ┌─────────────┐      challenge      ┌─────────────┐              │
│   │   Service   │ ──────────────────► │    User     │              │
│   └─────────────┘                     └─────────────┘              │
│                                             │                      │
│   2. User signs with private key            │ sign                 │
│                                             ▼                      │
│   3. Service verifies with public key ┌─────────────┐              │
│   ┌─────────────┐     signature      │   Wallet    │              │
│   │   Service   │ ◄────────────────── │  (keys)     │              │
│   └─────────────┘                     └─────────────┘              │
│         │                                                          │
│         │ resolve DID → get public key → verify                    │
│         ▼                                                          │
│   4. Access granted                                                │
│                                                                     │
│   No password. No OAuth. Just cryptography.                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Verifiable Credentials

DIDs enable **Verifiable Credentials** — digital credentials that are:

| Property | Description |
|----------|-------------|
| **Issued by any party** | University, employer, government |
| **Held by you** | In your wallet, under your control |
| **Verified by anyone** | Without contacting the issuer |
| **Privacy-preserving** | Share only what's needed |

### Credential Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                    VERIFIABLE CREDENTIAL FLOW                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   1. Issuer creates credential                                     │
│   ┌──────────────┐                                                 │
│   │  University  │ ─── issues ───► Diploma Credential              │
│   │   (issuer)   │                  signed by university           │
│   └──────────────┘                                                 │
│                                                                     │
│   2. Holder stores credential                                      │
│   ┌──────────────┐                                                 │
│   │    Alice     │ ─── stores ───► Wallet / Pod                    │
│   │   (holder)   │                                                 │
│   └──────────────┘                                                 │
│                                                                     │
│   3. Verifier requests proof                                       │
│   ┌──────────────┐      request      ┌──────────────┐              │
│   │   Employer   │ ────────────────► │    Alice     │              │
│   │  (verifier)  │                   └──────────────┘              │
│   └──────────────┘                          │                      │
│          ▲                                  │ presents             │
│          │         proof (VP)               │ credential           │
│          └──────────────────────────────────┘                      │
│                                                                     │
│   4. Verifier validates                                            │
│      • Credential signed by university? ✓                          │
│      • University's DID is valid? ✓                               │
│      • Credential not revoked? ✓                                   │
│      • Presented by the subject? ✓                                │
│                                                                     │
│   No need to contact university!                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Credential Types

| Type | Example |
|------|---------|
| Educational | Degrees, certificates |
| Professional | Licenses, memberships |
| Government | ID, passport, drivers license |
| Financial | Credit scores, bank verification |
| Social | Membership, reputation |

## Benefits

| Centralized Identity | Decentralized Identity |
|---------------------|------------------------|
| Provider can revoke access | You control your keys |
| Different identity per service | One identity everywhere |
| Provider stores your data | You control your data |
| Locked into ecosystems | Portable across systems |
| Single point of failure | No central authority |
| Surveillance by default | Privacy by design |

## Key Management

Your keys are critical:

| Practice | Why |
|----------|-----|
| **Backup** | Lose keys = lose identity |
| **Secure storage** | Hardware wallet or encrypted storage |
| **Key rotation** | Update keys periodically |
| **Recovery plan** | Social recovery or backup keys |

### Key Storage Options

| Option | Security | Convenience |
|--------|----------|-------------|
| Hardware wallet | Highest | Lower |
| Mobile app (Amber) | High | High |
| Browser extension | Medium | High |
| Paper backup | Medium | Low |

## Integration with SAND

```
┌─────────────────────────────────────────────────────────────────────┐
│                    DID in SAND STACK                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐  │
│   │                    Your DID                                  │  │
│   │              did:nostr:npub1...                              │  │
│   └─────────────────────────────────────────────────────────────┘  │
│         │              │              │              │             │
│         ▼              ▼              ▼              ▼             │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│   │  Solid   │  │  Nostr   │  │ActivityPub│  │   Apps   │         │
│   │   Pod    │  │  Relays  │  │  Servers │  │          │         │
│   │          │  │          │  │          │  │          │         │
│   │ WebID    │  │ Sign     │  │ Actor    │  │ Login    │         │
│   │ profile  │  │ events   │  │ identity │  │ with DID │         │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘         │
│                                                                     │
│   One identity → All protocols → All services                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Getting Started

1. **Generate a Nostr keypair** — Use [Noskey](/projects/noskey), [Amber](/projects/amber), or any Nostr client
2. **Your npub is your DID** — `did:nostr:npub1...`
3. **Use it for authentication** — Sign in to services with your Nostr key
4. **Store credentials** — Keep verifiable credentials in your wallet
5. **Control access** — Decide what to share and when

## Learn More

- [DID Protocol](/protocols/did) — Technical specification
- [did:nostr](/projects/did-nostr) — Nostr-based DIDs
- [did:key](/projects/did-key) — Key-based DIDs
- [did:web](/projects/did-web) — Domain-based DIDs
- [Nostr Protocol](/protocols/nostr) — The underlying infrastructure
- [Universal Resolver](/projects/universal-resolver) — Resolve any DID
