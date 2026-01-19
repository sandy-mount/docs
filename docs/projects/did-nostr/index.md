---
title: "did:nostr"
description: Decentralized identifiers using Nostr keypairs
---

# did:nostr

**Decentralized identifiers using Nostr keypairs.** Your npub is your DID — no infrastructure required.

## Overview

The `did:nostr` method maps Nostr public keys to W3C Decentralized Identifiers:

```
did:nostr:npub1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxl8lt
```

No registration. No resolver infrastructure. Your Nostr key *is* your identity.

## How It Works

### DID Format

```
did:nostr:<npub>
```

Where `<npub>` is a bech32-encoded Nostr public key.

### Resolution

To resolve a `did:nostr`:

1. Decode the npub to get the hex public key
2. Query Nostr relays for kind 0 (profile) events from that pubkey
3. Construct a DID Document from the profile data

### DID Document

```json
{
  "@context": ["https://www.w3.org/ns/did/v1"],
  "id": "did:nostr:npub1abc...",
  "authentication": [{
    "id": "did:nostr:npub1abc...#nostr-key",
    "type": "SchnorrSecp256k1VerificationKey2019",
    "controller": "did:nostr:npub1abc...",
    "publicKeyHex": "abc123..."
  }],
  "service": [{
    "id": "did:nostr:npub1abc...#nostr-relays",
    "type": "NostrRelayList",
    "serviceEndpoint": ["wss://relay.damus.io", "wss://relay.nostr.band"]
  }]
}
```

## Benefits

| Feature | did:nostr |
|---------|-----------|
| Infrastructure | None required |
| Cost | Free |
| Privacy | Pseudonymous by default |
| Recovery | Control your nsec |
| Interop | Works with all Nostr clients |

## Usage

### Generate a DID

```bash
# Generate Nostr keys
npx noskey generate
# npub1abc123...

# Your DID is:
# did:nostr:npub1abc123...
```

### Authenticate

Use NIP-98 to authenticate HTTP requests with your DID:

```javascript
const did = `did:nostr:${npub}`;
// Sign challenges with your nsec
```

## Specification

- **Method name:** `nostr`
- **Method-specific ID:** bech32-encoded public key (npub)
- **Resolution:** Query Nostr relays for profile events

## Links

- **Spec:** [nostrcg.github.io/did-nostr](https://nostrcg.github.io/did-nostr/)
- **GitHub:** [nostrcg/did-nostr](https://github.com/nostrcg/did-nostr)

## See Also

- [DID Protocol](/protocols/did) — W3C DID standard
- [Nostr Protocol](/protocols/nostr) — Underlying identity system
- [Noskey](/projects/noskey) — Generate Nostr keys
- [Decentralized Identity](/concepts/decentralized-identity) — The concept
