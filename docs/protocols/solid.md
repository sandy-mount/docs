---
sidebar_position: 2
title: Solid
description: Decentralized data pods with access control
---

# Solid

**Solid (Social Linked Data)** decouples data from applications. Your data lives in a "pod" that you control, and apps request access.

## Core Concepts

### Pods

A pod is a personal data store:

```
https://alice.pod.example/
├── profile/
│   └── card           # WebID profile
├── public/            # Publicly accessible
├── private/           # Access controlled
├── photos/
├── documents/
└── settings/
```

You can run your own pod or use a provider. The data is yours either way.

### WebID

Your WebID is your identity in Solid:

```
https://alice.pod.example/profile/card#me
```

It's a URL that, when accessed, returns information about you (as Linked Data).

### Access Control

Solid uses WAC (Web Access Control) or ACP (Access Control Policy) to manage permissions:

```turtle
# Allow Alice to read and write
<#authorization>
    a acl:Authorization;
    acl:agent <https://alice.pod.example/profile/card#me>;
    acl:accessTo <./document>;
    acl:mode acl:Read, acl:Write.
```

You decide who can read, write, append, or control each resource.

## Technical Foundation

### Linked Data Platform (LDP)

Solid builds on LDP — a W3C standard for HTTP-based Linked Data:

| Operation | HTTP Method |
|-----------|-------------|
| Read | GET |
| Create | POST (to container) or PUT |
| Update | PUT or PATCH |
| Delete | DELETE |

### Content Negotiation

Solid supports multiple RDF formats:

```http
GET /document HTTP/1.1
Accept: text/turtle, application/ld+json
```

The server returns data in your preferred format.

### Containers

Containers are like folders. They hold resources and other containers:

```http
GET /photos/ HTTP/1.1

# Returns a listing of contents
<> a ldp:Container;
   ldp:contains <photo1.jpg>, <photo2.jpg>.
```

## Implementations

### Servers

- **[JSS](/projects/jss)** — JavaScript Solid Server, lightweight and modular
- **[CSS](/projects/css)** — Community Solid Server, reference implementation
- **[NSS](/projects/nss)** — Node Solid Server, original implementation

### Client Libraries

- **[solid-client](/projects/solid-client)** — Official JavaScript library
- **[rdflib.js](/projects/rdflib-js)** — Low-level RDF handling

### Apps

- **[SolidOS](/projects/solidos)** — Data browser and editor
- **[Solid Chat](/projects/solid-chat)** — Messaging using Solid

## Specifications

| Spec | Description |
|------|-------------|
| [Solid Protocol](https://solidproject.org/TR/protocol) | Main specification |
| [Solid-OIDC](https://solidproject.org/TR/oidc) | Authentication |
| [WAC](https://solidproject.org/TR/wac) | Web Access Control |
| [ACP](https://solidproject.org/TR/acp) | Access Control Policy |

### Solid Lite

[Solid Lite](/projects/solid-lite) is a minimal profile of Solid — the 20% that gives 80% of the value. Great for getting started.

## Quick Example

Reading a profile:

```javascript
import { getSolidDataset, getThing } from "@inrupt/solid-client";

const dataset = await getSolidDataset("https://alice.pod.example/profile/card");
const profile = getThing(dataset, "https://alice.pod.example/profile/card#me");
```

Creating a resource:

```javascript
import { createSolidDataset, saveSolidDatasetAt } from "@inrupt/solid-client";

const newDataset = createSolidDataset();
await saveSolidDatasetAt("https://alice.pod.example/notes/note1", newDataset);
```

## Getting Started

1. **Get a pod** — Run [Sandymount](/projects/sandymount) locally or use a provider
2. **Get authenticated** — Use Solid-OIDC or browser login
3. **Read/write data** — Use solid-client or raw HTTP

See [Your First Pod](/guides/your-first-pod) for a complete tutorial.

## Learn More

- [solidproject.org](https://solidproject.org) — Official site
- [Solid Lite](/projects/solid-lite) — Minimal profile
- [Linked Data](/concepts/linked-data) — The data model
