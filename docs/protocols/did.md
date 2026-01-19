---
sidebar_position: 5
title: DID
description: Decentralized Identifiers - self-sovereign identity
---

# DID (Decentralized Identifiers)

**DIDs are globally unique identifiers that you control.** No registration authority, no central database — just cryptography.

## The Basics

A DID looks like this:

```
did:method:specific-identifier
```

Examples:
```
did:nostr:npub1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxl8lt
did:web:alice.example.com
did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK
```

Each DID:
- Is globally unique
- Resolves to a DID Document
- Is controlled by whoever holds the private key

## DID Documents

When you resolve a DID, you get a DID Document:

```json
{
  "@context": "https://www.w3.org/ns/did/v1",
  "id": "did:nostr:npub1abc123...",
  "authentication": [{
    "id": "did:nostr:npub1abc123...#key-1",
    "type": "Ed25519VerificationKey2020",
    "controller": "did:nostr:npub1abc123...",
    "publicKeyMultibase": "z6Mk..."
  }],
  "service": [{
    "id": "did:nostr:npub1abc123...#solid-pod",
    "type": "SolidPod",
    "serviceEndpoint": "https://alice.pod.example/"
  }]
}
```

The document contains:
- **Authentication keys** — How to verify you control this DID
- **Service endpoints** — Where to find things (pods, profiles, etc.)
- **Other metadata** — Whatever you want to publish

## DID Methods

Different methods use different mechanisms:

### did:nostr

Uses Nostr keypairs. Simple, no infrastructure needed:

```
did:nostr:npub1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxl8lt
```

Resolution: Look up profile (kind 0) events from relays.

See [did:nostr](/projects/did-nostr) for details.

### did:web

Uses your domain:

```
did:web:alice.example.com
```

Resolution: Fetch `https://alice.example.com/.well-known/did.json`

Good for organizations and anyone with a domain.

### did:key

The DID *is* the public key:

```
did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK
```

Resolution: Decode the key from the DID itself. No network needed.

Great for ephemeral identities or offline use.

## Resolution

DID resolution turns a DID into a DID Document:

```
     DID                    Resolver              DID Document
┌───────────┐           ┌───────────┐           ┌───────────┐
│did:nostr: │──────────►│  Resolve  │──────────►│ { "id":   │
│npub1...   │           │  (fetch)  │           │   ...}    │
└───────────┘           └───────────┘           └───────────┘
```

Different methods resolve differently:
- **did:web** — HTTP fetch
- **did:nostr** — Query Nostr relays
- **did:key** — Decode from the DID itself

## Verifiable Credentials

DIDs enable Verifiable Credentials (VCs) — digital credentials that:

1. **Are issued** by any party (issuer has a DID)
2. **Are held** by you (subject has a DID)
3. **Can be verified** by anyone (check signatures)

Example: A university (did:web:university.edu) issues you a diploma credential. You store it. When applying for a job, you share it. The employer verifies it came from the university.

```json
{
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  "type": ["VerifiableCredential", "DiplomaCredential"],
  "issuer": "did:web:university.edu",
  "credentialSubject": {
    "id": "did:nostr:npub1...",
    "degree": "Bachelor of Science"
  },
  "proof": { /* signature */ }
}
```

## DID in SAND

DIDs integrate across the stack:

| Protocol | DID Role |
|----------|----------|
| Solid | WebID can be a DID |
| ActivityPub | Actor IDs can be DIDs |
| Nostr | Keys naturally map to did:nostr |

## Implementations

- **[did:nostr](/projects/did-nostr)** — Nostr-based DIDs
- **[Noskey](/projects/noskey)** — Generate Nostr keys (and thus DIDs)
- **DID resolvers** — Libraries for resolving various methods

## Quick Example

Using did:nostr:

```javascript
// Your Nostr public key IS your DID
const npub = "npub1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxl8lt";
const did = `did:nostr:${npub}`;

// Resolve by querying relays for kind 0 (profile) events
// The profile event content becomes part of the DID Document
```

## Specifications

- [DID Core](https://www.w3.org/TR/did-core/) — W3C Recommendation
- [DID Resolution](https://w3c-ccg.github.io/did-resolution/) — How to resolve DIDs
- [Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) — Credential format

## Learn More

- [Decentralized Identity](/concepts/decentralized-identity) — The concept
- [did:nostr](/projects/did-nostr) — Nostr-based DIDs
- [W3C DID Working Group](https://www.w3.org/2019/did-wg/) — Standards body
