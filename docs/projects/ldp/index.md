---
title: LDP
description: Linked Data Platform specification
---

# LDP

**RESTful Linked Data.** W3C standard for managing RDF resources via HTTP.

## Overview

The Linked Data Platform (LDP) is a W3C Recommendation that defines how to read and write Linked Data using standard HTTP operations. It's the foundation that Solid builds upon.

## Key Concepts

### Resources and Containers

```
┌─────────────────────────────────────────────────────────────────┐
│                     LDP Concepts                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   LDP Resource (LDP-RS)                                        │
│   └── Any resource with RDF content                            │
│       └── GET returns RDF (Turtle, JSON-LD, etc.)              │
│                                                                 │
│   LDP Non-RDF Resource (LDP-NR)                                │
│   └── Binary or non-RDF content                                │
│       └── GET returns the actual bytes                         │
│       └── Has associated RDF description                        │
│                                                                 │
│   LDP Container (LDP-C)                                        │
│   └── Collection of resources (like a folder)                  │
│       └── POST creates new children                            │
│       └── Contains membership triples                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Container Types

| Type | Description |
|------|-------------|
| **Basic Container** | Simple containment |
| **Direct Container** | Custom membership predicates |
| **Indirect Container** | Membership via derived URIs |

## HTTP Operations

### CRUD Mapping

| Operation | HTTP Method | Description |
|-----------|-------------|-------------|
| Create (in container) | POST | Add new resource to container |
| Create (at URL) | PUT | Create resource at specific URL |
| Read | GET | Retrieve resource |
| Update (replace) | PUT | Replace entire resource |
| Update (partial) | PATCH | Modify parts of resource |
| Delete | DELETE | Remove resource |

### Examples

#### Read a Resource

```http
GET /alice/profile HTTP/1.1
Host: pod.example
Accept: text/turtle

HTTP/1.1 200 OK
Content-Type: text/turtle

@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<#me> a foaf:Person ;
    foaf:name "Alice" .
```

#### Create in Container

```http
POST /alice/posts/ HTTP/1.1
Host: pod.example
Content-Type: text/turtle
Slug: my-first-post

@prefix schema: <https://schema.org/> .

<> a schema:BlogPosting ;
    schema:headline "Hello World" ;
    schema:text "My first post!" .

HTTP/1.1 201 Created
Location: /alice/posts/my-first-post
```

#### Update with PATCH

```http
PATCH /alice/profile HTTP/1.1
Host: pod.example
Content-Type: text/n3

@prefix solid: <http://www.w3.org/ns/solid/terms#> .

DELETE { <#me> foaf:name "Alice" }
INSERT { <#me> foaf:name "Alice Smith" }
WHERE { <#me> foaf:name "Alice" }
```

## Content Negotiation

LDP supports multiple RDF formats:

| Format | Media Type |
|--------|------------|
| Turtle | text/turtle |
| JSON-LD | application/ld+json |
| N-Triples | application/n-triples |
| RDF/XML | application/rdf+xml |

Request your preferred format:
```http
GET /resource HTTP/1.1
Accept: application/ld+json
```

## Link Headers

LDP uses Link headers extensively:

```http
HTTP/1.1 200 OK
Link: <http://www.w3.org/ns/ldp#Resource>; rel="type"
Link: <http://www.w3.org/ns/ldp#BasicContainer>; rel="type"
Link: </alice/posts/.acl>; rel="acl"
```

| Relation | Purpose |
|----------|---------|
| type | Resource type(s) |
| acl | Access control document |
| describedby | Metadata resource |

## Container Membership

How containers track members:

```turtle
@prefix ldp: <http://www.w3.org/ns/ldp#> .

</alice/posts/> a ldp:BasicContainer ;
    ldp:contains </alice/posts/post1>,
                 </alice/posts/post2>,
                 </alice/posts/post3> .
```

## LDP in Solid

Solid extends LDP with:

| Addition | Purpose |
|----------|---------|
| WAC/ACP | Access control |
| Solid-OIDC | Authentication |
| Type Indexes | Data discovery |
| Notifications | Real-time updates |

## Comparison

| Feature | LDP | Raw HTTP | WebDAV |
|---------|-----|----------|--------|
| RDF support | Native | None | None |
| Containers | Yes | No | Collections |
| Content negotiation | Yes | Manual | Limited |
| Standard | W3C | IETF | IETF |

## Implementation Support

| Server | LDP Support |
|--------|-------------|
| CSS | Full |
| NSS | Full |
| JSS | Full |
| ESS | Full |

## Links

- **Specification:** [W3C LDP](https://www.w3.org/TR/ldp/)
- **Primer:** [LDP Primer](https://www.w3.org/TR/ldp-primer/)

## See Also

- [Solid Protocol](/protocols/solid) — Built on LDP
- [Linked Data](/concepts/linked-data) — The data model
- [CSS](/projects/css) — LDP server implementation
