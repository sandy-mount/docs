---
sidebar_position: 3
title: Authentication
description: Auth methods across the SAND stack
---

# Authentication

**Different protocols, different auth methods.** This guide covers authentication across SAND.

## Overview

| Protocol | Auth Method | Key Type |
|----------|-------------|----------|
| Solid | Solid-OIDC | WebID + OIDC |
| Nostr | NIP-98 | Schnorr signatures |
| ActivityPub | HTTP Signatures | RSA/Ed25519 |
| DID | DID Auth | Varies by method |

## Solid-OIDC

Solid uses OpenID Connect with WebID:

1. User clicks "Login"
2. App redirects to Identity Provider
3. User authenticates
4. IdP returns tokens
5. App uses tokens for requests

```javascript
import { login } from '@inrupt/solid-client-authn-browser';

await login({
  oidcIssuer: 'https://login.inrupt.com',
  redirectUrl: window.location.href,
});
```

## NIP-98 (Nostr HTTP Auth)

Authenticate HTTP requests with Nostr signatures:

```javascript
import { finalizeEvent, getPublicKey } from 'nostr-tools';

const authEvent = finalizeEvent({
  kind: 27235,
  created_at: Math.floor(Date.now() / 1000),
  tags: [
    ['u', 'https://api.example.com/resource'],
    ['method', 'GET']
  ],
  content: ''
}, secretKey);

const response = await fetch('https://api.example.com/resource', {
  headers: {
    'Authorization': `Nostr ${btoa(JSON.stringify(authEvent))}`
  }
});
```

## HTTP Signatures (ActivityPub)

ActivityPub servers verify requests using HTTP Signatures:

```http
POST /inbox HTTP/1.1
Host: remote.server
Date: Sun, 19 Jan 2025 12:00:00 GMT
Signature: keyId="https://my.server/actor#main-key",
           algorithm="rsa-sha256",
           headers="(request-target) host date",
           signature="base64..."
```

## DID Authentication

DIDs can authenticate via signed challenges:

1. Server sends challenge
2. Client signs with DID private key
3. Server verifies signature against DID Document

## Choosing Auth Methods

| Use Case | Recommended |
|----------|-------------|
| Solid apps | Solid-OIDC |
| Nostr clients | NIP-98 |
| Server-to-server | HTTP Signatures |
| Cross-protocol | DID Auth |

## See Also

- [Solid Protocol](/protocols/solid) — Solid-OIDC details
- [Nostr Protocol](/protocols/nostr) — NIP-98 details
- [DID Protocol](/protocols/did) — DID authentication
