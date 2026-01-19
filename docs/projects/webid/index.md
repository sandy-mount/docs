---
title: WebID
description: Decentralized identity for the web
---

# WebID

**Your identity URL.** A URI that identifies you and links to your profile.

## Overview

WebID is a way to identify people and organizations on the web using HTTP URIs. Your WebID is a URL that resolves to an RDF document describing you, including your public keys for authentication.

## How It Works

```
┌─────────────────────────────────────────────────────────┐
│                      WebID                               │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Your WebID:                                            │
│  https://alice.solidcommunity.net/profile/card#me       │
│                                                          │
│  Resolves to RDF profile:                               │
│  ┌─────────────────────────────────────────────────────┐│
│  │  @prefix foaf: <http://xmlns.com/foaf/0.1/> .       ││
│  │                                                      ││
│  │  <#me>                                              ││
│  │      a foaf:Person ;                                ││
│  │      foaf:name "Alice" ;                            ││
│  │      cert:key <#key> .                              ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## WebID Profile

A WebID document (profile card) typically contains:

```turtle
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix solid: <http://www.w3.org/ns/solid/terms#> .
@prefix cert: <http://www.w3.org/ns/auth/cert#> .

<#me>
    a foaf:Person ;
    foaf:name "Alice" ;
    foaf:img <photo.jpg> ;
    foaf:knows <https://bob.example/profile#me> ;
    solid:oidcIssuer <https://solidcommunity.net> ;
    cert:key [
        a cert:RSAPublicKey ;
        cert:modulus "abc123..."^^xsd:hexBinary ;
        cert:exponent 65537
    ] .
```

## Authentication

### WebID-TLS

Original method using client certificates:

```
┌─────────┐         ┌─────────┐
│ Browser │◄──TLS──►│ Server  │
│ (cert)  │         │         │
└─────────┘         └────┬────┘
                         │
                         ▼
                   Fetch WebID
                   Verify cert
                   matches key
```

### WebID-OIDC

Modern method using OpenID Connect:

```
┌─────────┐         ┌─────────┐         ┌─────────┐
│ Browser │◄───────►│ Server  │◄───────►│ OIDC    │
│         │         │         │         │ Provider│
└─────────┘         └─────────┘         └─────────┘
```

## Solid Integration

WebID is central to Solid:

| Use | Description |
|-----|-------------|
| **Identity** | Who you are |
| **Profile** | Your public info |
| **Authentication** | Prove identity |
| **Authorization** | ACL subject |
| **Social** | Link to friends |

## Creating a WebID

### Via Solid Pod

Most Solid providers create a WebID automatically:

1. Sign up for a pod
2. Get WebID: `https://provider.net/yourname/profile/card#me`
3. Edit your profile

### Self-Hosted

Create your own WebID document:

```turtle
# https://example.com/me#id

@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<#id>
    a foaf:Person ;
    foaf:name "Your Name" ;
    foaf:homepage <https://example.com/> .
```

Serve with `Content-Type: text/turtle`.

## Comparison

| Identity | Type | Decentralized | Self-sovereign |
|----------|------|---------------|----------------|
| **WebID** | URI | Yes | Mostly |
| **DID** | URI | Yes | Yes |
| **Email** | Address | Federated | No |
| **Social login** | OAuth | No | No |

## Standards

- **WebID 1.0** — W3C Editor's Draft
- **WebID-TLS** — W3C Note
- **WebID-OIDC** — Solid-OIDC spec

## Links

- **Spec:** [w3.org/2005/Incubator/webid/spec](https://www.w3.org/2005/Incubator/webid/spec/)
- **Solid:** [solidproject.org](https://solidproject.org/)

## See Also

- [Solid Protocol](/protocols/solid) — Uses WebID
- [DID Protocol](/protocols/did) — Related identity standard
- [Decentralized Identity](/concepts/decentralized-identity) — The concept
- [solid-client-authn](/projects/solid-authn) — Authentication library
