---
title: Universal Resolver
description: Multi-method DID resolution
---

# Universal Resolver

**Resolve any DID method.** A unified API for decentralized identifier resolution.

## Overview

The Universal Resolver is a server that resolves Decentralized Identifiers (DIDs) across multiple DID methods through a single HTTP interface. Rather than implementing each method yourself, query the Universal Resolver and get back DID Documents.

## How It Works

```
┌─────────────────────────────────────────────────────────┐
│                 Universal Resolver                       │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Your App ──► Universal Resolver                        │
│                    │                                     │
│                    ├──► did:web driver                  │
│                    ├──► did:key driver                  │
│                    ├──► did:ethr driver                 │
│                    ├──► did:sov driver                  │
│                    └──► ... 40+ drivers                 │
│                                                          │
│  Single API endpoint:                                   │
│  GET /1.0/identifiers/{did}                            │
│                                                          │
│  Returns: DID Document (JSON)                           │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Supported DID Methods

| Method | Description |
|--------|-------------|
| `did:web` | Web domain DIDs |
| `did:key` | Cryptographic key DIDs |
| `did:ethr` | Ethereum DIDs |
| `did:sov` | Sovrin/Indy DIDs |
| `did:ion` | Bitcoin/Sidetree DIDs |
| `did:pkh` | Public key hash DIDs |
| `did:elem` | Element DIDs |
| `did:v1` | Veres One DIDs |
| And 40+ more... |

## API Usage

### Resolve a DID

```bash
curl https://dev.uniresolver.io/1.0/identifiers/did:web:example.com
```

### Response

```json
{
  "@context": "https://w3id.org/did-resolution/v1",
  "didDocument": {
    "@context": ["https://www.w3.org/ns/did/v1"],
    "id": "did:web:example.com",
    "verificationMethod": [{
      "id": "did:web:example.com#key-1",
      "type": "Ed25519VerificationKey2020",
      "controller": "did:web:example.com",
      "publicKeyMultibase": "z6Mk..."
    }],
    "authentication": ["did:web:example.com#key-1"]
  },
  "didResolutionMetadata": {
    "contentType": "application/did+ld+json"
  },
  "didDocumentMetadata": {}
}
```

### JavaScript

```javascript
const response = await fetch(
  'https://dev.uniresolver.io/1.0/identifiers/did:key:z6MkhaXg...'
);
const result = await response.json();
const didDocument = result.didDocument;
```

## Public Instances

| Instance | URL |
|----------|-----|
| **DIF** | dev.uniresolver.io |
| **Sovrin** | uniresolver.io |

## Self-Hosting

### Docker

```bash
docker run -p 8080:8080 universalresolver/uni-resolver-web:latest
```

### Docker Compose

```yaml
version: '3'
services:
  uni-resolver:
    image: universalresolver/uni-resolver-web:latest
    ports:
      - "8080:8080"

  # Add specific drivers as needed
  driver-did-web:
    image: universalresolver/driver-did-web:latest

  driver-did-key:
    image: universalresolver/driver-did-key:latest
```

### Configuration

Select which drivers to enable:

```properties
# uni-resolver.properties
uniresolver.resolvers=did-web,did-key,did-ethr

uniresolver.resolver.did-web.url=http://driver-did-web:8080/
uniresolver.resolver.did-key.url=http://driver-did-key:8080/
```

## Architecture

### Driver Model

```
┌─────────────────────────────────────────────────────────┐
│                 Universal Resolver                       │
│  ┌─────────────────────────────────────────────────────┐│
│  │               Core Resolver                         ││
│  └───────────────────────┬─────────────────────────────┘│
│                          │                               │
│    ┌─────────────────────┼─────────────────────┐        │
│    │                     │                     │        │
│    ▼                     ▼                     ▼        │
│ ┌──────────┐       ┌──────────┐       ┌──────────┐    │
│ │ did:web  │       │ did:key  │       │ did:ethr │    │
│ │  Driver  │       │  Driver  │       │  Driver  │    │
│ └──────────┘       └──────────┘       └──────────┘    │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

Each driver is:
- A separate Docker container
- Responsible for one DID method
- Implements standard driver API

### Creating a Driver

```java
public class MyDidDriver implements Driver {
    @Override
    public ResolveResult resolve(String identifier) {
        // Parse DID
        // Fetch DID Document
        // Return result
    }
}
```

## Use Cases

### Identity Verification

Resolve DIDs to get public keys for signature verification.

### Credential Verification

Look up issuer DIDs when verifying credentials.

### Service Discovery

Find service endpoints from DID Documents.

### Multi-Method Support

Support users with different DID methods without implementing each one.

## Resolution Process

```
1. Receive DID: did:web:example.com
2. Extract method: "web"
3. Route to did:web driver
4. Driver fetches: https://example.com/.well-known/did.json
5. Return DID Document to client
```

## Comparison

| Approach | Pros | Cons |
|----------|------|------|
| **Universal Resolver** | One API, many methods | External dependency |
| **Direct resolution** | No dependency | Implement each method |
| **did-resolver libs** | Local, fast | Still need method libs |

## Standards

- W3C DID Resolution spec
- W3C DID Core spec
- DIF Universal Resolver spec

## Links

- **Public Instance:** [dev.uniresolver.io](https://dev.uniresolver.io/)
- **GitHub:** [decentralized-identity/universal-resolver](https://github.com/decentralized-identity/universal-resolver)
- **DIF:** [identity.foundation](https://identity.foundation/)

## See Also

- [DID Protocol](/protocols/did) — DID overview
- [did:web](/projects/did-web) — Web DIDs
- [did:key](/projects/did-key) — Key DIDs
- [Decentralized Identity](/concepts/decentralized-identity) — The concept
