---
title: rdflib.js
description: JavaScript library for RDF and Linked Data
---

# rdflib.js

**The JavaScript library for RDF.** Parse, serialize, query, and manipulate Linked Data in the browser and Node.js.

## Overview

rdflib.js is the foundational library for working with RDF in JavaScript. It powers SolidOS, solid-client, and many other Solid ecosystem tools.

## Installation

```bash
npm install rdflib
```

## Core Concepts

### Stores and Graphs

```javascript
import { graph, parse, serialize } from 'rdflib';

// Create a store
const store = graph();

// Parse Turtle into the store
const turtle = `
  @prefix foaf: <http://xmlns.com/foaf/0.1/> .
  <#me> a foaf:Person ; foaf:name "Alice" .
`;
parse(turtle, store, 'https://example.org/profile');

// Serialize back to Turtle
const output = serialize(null, store, 'https://example.org/profile', 'text/turtle');
```

### Symbols and Literals

```javascript
import { sym, lit, Namespace } from 'rdflib';

// Create a named node (URI)
const alice = sym('https://alice.example/profile#me');

// Create a literal
const name = lit('Alice');

// Use namespaces
const FOAF = Namespace('http://xmlns.com/foaf/0.1/');
const knows = FOAF('knows');
```

### Querying

```javascript
import { graph, sym, Namespace } from 'rdflib';

const store = graph();
const FOAF = Namespace('http://xmlns.com/foaf/0.1/');

// Find all people Alice knows
const alice = sym('https://alice.example/profile#me');
const friends = store.each(alice, FOAF('knows'), null);

friends.forEach(friend => {
  console.log(friend.uri);
});
```

### Fetching Remote Data

```javascript
import { graph, Fetcher } from 'rdflib';

const store = graph();
const fetcher = new Fetcher(store);

// Load a remote document
await fetcher.load('https://alice.example/profile');

// Data is now in the store
```

## Formats Supported

| Format | MIME Type | Read | Write |
|--------|-----------|------|-------|
| Turtle | text/turtle | ✓ | ✓ |
| N-Triples | application/n-triples | ✓ | ✓ |
| JSON-LD | application/ld+json | ✓ | ✓ |
| RDF/XML | application/rdf+xml | ✓ | ✓ |
| N3 | text/n3 | ✓ | ✓ |

## Links

- **npm:** [rdflib](https://www.npmjs.com/package/rdflib)
- **GitHub:** [linkeddata/rdflib.js](https://github.com/linkeddata/rdflib.js)
- **Docs:** [rdflib.js Documentation](https://linkeddata.github.io/rdflib.js/doc/)

## See Also

- [Linked Data](/concepts/linked-data) — The concept
- [Solid Protocol](/protocols/solid) — Uses RDF
- [SolidOS](/projects/solidos) — Built on rdflib.js
