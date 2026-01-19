---
sidebar_position: 5
title: Linked Data
description: Data that connects to data
---

# Linked Data

**URLs aren't just for web pages — they can identify anything.** Linked Data uses URLs to connect data across the web.

## The Idea

Traditional databases store data in tables with arbitrary IDs. Linked Data uses URLs:

```
# Traditional
id: 42
name: "Alice"
knows: 17

# Linked Data
@id: "https://alice.example/profile#me"
name: "Alice"
knows: "https://bob.example/profile#me"
```

Now Alice's profile can link to Bob's profile, even though they're on different servers. Data connects to data.

## The Four Rules

Tim Berners-Lee defined four rules for Linked Data:

1. **Use URIs as names for things** — Not just pages, but people, places, concepts
2. **Use HTTP URIs** — So people can look up those names
3. **Provide useful information** — When someone looks up a URI, give them data
4. **Include links to other URIs** — So they can discover more things

## RDF: The Data Model

Linked Data uses RDF (Resource Description Framework). Everything is a **triple**:

```
Subject → Predicate → Object
```

Examples:
```turtle
<https://alice.example/profile#me>
    <http://xmlns.com/foaf/0.1/name> "Alice" .

<https://alice.example/profile#me>
    <http://xmlns.com/foaf/0.1/knows>
    <https://bob.example/profile#me> .
```

This says:
- Alice's name is "Alice"
- Alice knows Bob

## Why It Matters for SAND

### Solid Uses Linked Data

[Solid pods](/protocols/solid) store data as Linked Data. This means:

- **Interoperability** — Any app can read any pod if it understands the vocabulary
- **No schemas to agree on** — Just use the same predicates (URLs)
- **Discoverability** — Follow links to find related data

### Vocabularies

Instead of inventing your own field names, use shared vocabularies:

| Vocabulary | URL | For |
|------------|-----|-----|
| FOAF | `http://xmlns.com/foaf/0.1/` | People, social networks |
| Schema.org | `https://schema.org/` | General-purpose |
| vCard | `http://www.w3.org/2006/vcard/ns#` | Contact information |
| ActivityStreams | `https://www.w3.org/ns/activitystreams#` | Social activities |

When you use `foaf:knows`, any app that understands FOAF knows what you mean.

## Formats

Linked Data can be serialized in several formats:

### Turtle (Human-readable)
```turtle
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<#me> a foaf:Person ;
    foaf:name "Alice" ;
    foaf:knows <https://bob.example/profile#me> .
```

### JSON-LD (JSON-compatible)
```json
{
  "@context": "http://xmlns.com/foaf/0.1/",
  "@id": "#me",
  "@type": "Person",
  "name": "Alice",
  "knows": "https://bob.example/profile#me"
}
```

### N-Triples (Simple, one triple per line)
```
<https://alice.example/profile#me> <http://xmlns.com/foaf/0.1/name> "Alice" .
```

## Querying with SPARQL

SPARQL lets you query across Linked Data:

```sparql
SELECT ?name ?friend
WHERE {
  ?person foaf:name ?name .
  ?person foaf:knows ?friend .
}
```

This finds all people and who they know — regardless of where the data is stored.

## Getting Started

1. **Read some Turtle** — Look at Solid pod data
2. **Use JSON-LD** — It's just JSON with `@context`
3. **Explore vocabularies** — Find the right predicates for your data

## Learn More

- [Solid Protocol](/protocols/solid) — How Solid uses Linked Data
- [rdflib.js](/projects/rdflib-js) — JavaScript library for RDF
- [W3C Linked Data](https://www.w3.org/standards/semanticweb/data) — Official resources
