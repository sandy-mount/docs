---
title: "did:web"
description: DIDs hosted on web domains
---

# did:web

**DIDs anchored to web domains.** Leverage existing web infrastructure for decentralized identity.

## Overview

The `did:web` method uses the Domain Name System (DNS) and standard web hosting to publish DID Documents. If you control a domain, you can create DIDs under it.

## How It Works

```
did:web:example.com  ──►  https://example.com/.well-known/did.json
did:web:example.com:users:alice  ──►  https://example.com/users/alice/did.json
```

The DID encodes a URL path. Resolvers fetch the DID Document from that path.

## Format

```
did:web:<domain>:<optional:path:segments>
```

| DID | Resolves To |
|-----|-------------|
| `did:web:example.com` | `https://example.com/.well-known/did.json` |
| `did:web:example.com:user:alice` | `https://example.com/user/alice/did.json` |
| `did:web:pod.example:profile` | `https://pod.example/profile/did.json` |

## Advantages

### Leverages Existing Infrastructure
- DNS for discovery
- HTTPS for transport
- Standard hosting (any web server)

### Human-Readable
```
did:web:alice.example.com
```
Much easier to share than:
```
did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK
```

### Key Rotation
Unlike `did:key`, you can update the DID Document to rotate keys.

### Service Endpoints
Full control over DID Document content:

```json
{
  "@context": ["https://www.w3.org/ns/did/v1"],
  "id": "did:web:alice.example.com",
  "service": [
    {
      "id": "did:web:alice.example.com#solid",
      "type": "SolidPod",
      "serviceEndpoint": "https://pod.alice.example.com/"
    },
    {
      "id": "did:web:alice.example.com#nostr",
      "type": "NostrRelays",
      "serviceEndpoint": ["wss://relay.damus.io"]
    }
  ]
}
```

## Setup

### 1. Create DID Document

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/ed25519-2020/v1"
  ],
  "id": "did:web:example.com",
  "verificationMethod": [{
    "id": "did:web:example.com#key-1",
    "type": "Ed25519VerificationKey2020",
    "controller": "did:web:example.com",
    "publicKeyMultibase": "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
  }],
  "authentication": ["did:web:example.com#key-1"],
  "assertionMethod": ["did:web:example.com#key-1"]
}
```

### 2. Host the Document

```bash
# For root domain DID
mkdir -p .well-known
cp did.json .well-known/did.json

# Serve with proper headers
# Content-Type: application/did+json
```

### 3. Configure HTTPS

TLS is required. Use Let's Encrypt or similar.

### Nginx Configuration

```nginx
location /.well-known/did.json {
    default_type application/did+json;
    add_header Access-Control-Allow-Origin *;
}
```

## Resolution

### JavaScript

```javascript
import { Resolver } from 'did-resolver';
import { getResolver } from 'web-did-resolver';

const resolver = new Resolver(getResolver());
const { didDocument } = await resolver.resolve('did:web:example.com');
```

### CLI

```bash
curl https://example.com/.well-known/did.json
```

### Universal Resolver

```bash
curl https://dev.uniresolver.io/1.0/identifiers/did:web:example.com
```

## SAND Integration

### With Solid Pods

```json
{
  "id": "did:web:alice.pod.example",
  "service": [{
    "id": "did:web:alice.pod.example#storage",
    "type": "SolidStorageEndpoint",
    "serviceEndpoint": "https://alice.pod.example/"
  }]
}
```

### With Nostr

```json
{
  "id": "did:web:alice.example",
  "verificationMethod": [{
    "id": "did:web:alice.example#nostr",
    "type": "SchnorrSecp256k1VerificationKey2019",
    "publicKeyHex": "abc123..."
  }],
  "service": [{
    "id": "did:web:alice.example#relays",
    "type": "NostrRelayList",
    "serviceEndpoint": [
      "wss://relay.damus.io",
      "wss://relay.nostr.band"
    ]
  }]
}
```

## Security Considerations

### DNS Dependency
- Domain compromise = DID compromise
- Use DNSSEC where possible
- Consider domain registrar security

### Centralization Tradeoffs
- More centralized than did:key or did:ion
- Depends on DNS and hosting providers
- Suitable for organizations, less for maximum decentralization

### TLS Required
- Always HTTPS
- Verify certificate validity
- Consider certificate transparency

## Comparison

| Feature | did:web | did:key | did:ion |
|---------|---------|---------|---------|
| Human-readable | Yes | No | No |
| Key rotation | Yes | No | Yes |
| Registration | Domain | None | Blockchain |
| Decentralization | Moderate | High | High |
| Resolution | HTTP | Local | Bitcoin |

## Use Cases

### Organizations
Corporate identity with domain authority.

### Personal Branding
`did:web:yourname.com` tied to your personal domain.

### Solid Pods
Natural pairing with WebID and pod hosting.

### Bridging
Link to other DID methods in service endpoints.

## Links

- **Specification:** [w3c-ccg.github.io/did-method-web](https://w3c-ccg.github.io/did-method-web/)
- **Resolver:** [web-did-resolver](https://github.com/decentralized-identity/web-did-resolver)
- **Universal Resolver:** [dev.uniresolver.io](https://dev.uniresolver.io/)

## See Also

- [DID Protocol](/protocols/did) — DID overview
- [did:key](/projects/did-key) — Keyless resolution
- [did:nostr](/projects/did-nostr) — Nostr-specific DIDs
- [Solid Protocol](/protocols/solid) — WebID integration
