---
title: "did:key"
description: Self-contained cryptographic DIDs
---

# did:key

**DIDs derived directly from public keys.** No blockchain, no registry, instant resolution.

## Overview

The `did:key` method creates decentralized identifiers from cryptographic public keys. Unlike other DID methods that require blockchains or registries, `did:key` identifiers are self-contained and can be resolved without any network requests.

## How It Works

```
Public Key (bytes) ──► Multicodec prefix ──► Multibase encode ──► did:key
```

Example:
```
did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK
        │  └─────────────────────────────────────────────────┘
        │              Multibase-encoded public key
        │
        └── Method identifier
```

## Advantages

| Feature | did:key | did:web | did:ion |
|---------|---------|---------|---------|
| Network required | No | Yes | Yes |
| Registration | None | DNS | Blockchain |
| Resolution speed | Instant | DNS lookup | Chain query |
| Cost | Free | Domain cost | Transaction fee |
| Offline | Yes | No | No |

### When to Use did:key

- **Ephemeral identities** — Temporary or session-based
- **Offline scenarios** — No network available
- **Testing** — Quick identity generation
- **Embedded systems** — Resource-constrained environments
- **P2P applications** — Direct key exchange

### When NOT to Use did:key

- **Key rotation needed** — did:key can't update
- **Service endpoints** — Limited DID document
- **Long-term identity** — Consider did:web or others

## Supported Key Types

| Key Type | Multicodec | Curve |
|----------|------------|-------|
| Ed25519 | 0xed | Ed25519 |
| X25519 | 0xec | Curve25519 |
| secp256k1 | 0xe7 | secp256k1 |
| P-256 | 0x1200 | NIST P-256 |
| P-384 | 0x1201 | NIST P-384 |
| BLS12-381 | 0xeb | BLS |

## Examples

### Ed25519 (Most Common)

```javascript
import { generateKeyPair } from '@noble/ed25519';
import { base58btc } from 'multiformats/bases/base58';

// Generate Ed25519 keypair
const privateKey = generateKeyPair();
const publicKey = await getPublicKey(privateKey);

// Create did:key
const multicodecPrefix = new Uint8Array([0xed, 0x01]);
const keyBytes = new Uint8Array([...multicodecPrefix, ...publicKey]);
const did = `did:key:${base58btc.encode(keyBytes)}`;

// Result: did:key:z6Mk...
```

### secp256k1 (Bitcoin/Nostr compatible)

```javascript
import { getPublicKey } from 'nostr-tools';

// From Nostr key
const pk = getPublicKey(secretKey);

// Create did:key (compressed pubkey)
const multicodecPrefix = new Uint8Array([0xe7, 0x01]);
const keyBytes = new Uint8Array([...multicodecPrefix, ...compressedPubKey]);
const did = `did:key:${base58btc.encode(keyBytes)}`;

// Result: did:key:zQ3s...
```

## DID Document

Resolving a `did:key` generates a DID Document:

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/ed25519-2020/v1"
  ],
  "id": "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK",
  "verificationMethod": [{
    "id": "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK#z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK",
    "type": "Ed25519VerificationKey2020",
    "controller": "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK",
    "publicKeyMultibase": "z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK"
  }],
  "authentication": [
    "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK#z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK"
  ],
  "assertionMethod": [
    "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK#z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK"
  ]
}
```

## Resolution

### JavaScript

```javascript
import { resolver } from '@transmute/did-key.js';

const { didDocument } = await resolver.resolve(
  'did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK'
);
```

### Universal Resolver

```bash
curl https://dev.uniresolver.io/1.0/identifiers/did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK
```

## Relationship to did:nostr

| Method | Key Type | Use Case |
|--------|----------|----------|
| did:key | Any | General purpose |
| did:nostr | secp256k1 | Nostr-specific features |

`did:nostr` extends the concept with Nostr-specific semantics (relays, etc.), while `did:key` is the generic W3C method.

## Security Considerations

### Strengths
- No trusted third party
- Cryptographically verifiable
- Immutable (no tampering)

### Limitations
- **No key rotation** — Compromise means new DID
- **No revocation** — Can't invalidate
- **Limited document** — No custom service endpoints

### Best Practices
- Use for short-lived or ephemeral identities
- Combine with did:web for long-term identity
- Consider key escrow for important identities

## Specification

The `did:key` method is specified by the W3C Credentials Community Group:

- **Status:** Editor's Draft (v0.9)
- **Spec:** [w3c-ccg.github.io/did-key-spec](https://w3c-ccg.github.io/did-key-spec/)

## Links

- **Specification:** [did:key Method](https://w3c-ccg.github.io/did-key-spec/)
- **W3C DID Core:** [Decentralized Identifiers](https://www.w3.org/TR/did-1.1/)
- **Universal Resolver:** [dev.uniresolver.io](https://dev.uniresolver.io/)

## See Also

- [DID Protocol](/protocols/did) — DID overview
- [did:nostr](/projects/did-nostr) — Nostr-specific DIDs
- [Decentralized Identity](/concepts/decentralized-identity) — The concept
- [Noskey](/projects/noskey) — Generate keys and DIDs
