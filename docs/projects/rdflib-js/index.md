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
| RDFa | text/html | ✓ | — |

## UpdateManager (CRUD Operations)

For read-write applications, UpdateManager handles saving changes:

```javascript
import { graph, Fetcher, UpdateManager, sym, st } from 'rdflib';

const store = graph();
const fetcher = new Fetcher(store);
const updater = new UpdateManager(store);

// Load existing data
await fetcher.load('https://alice.pod/profile');

// Prepare updates
const me = sym('https://alice.pod/profile#me');
const FOAF = Namespace('http://xmlns.com/foaf/0.1/');

const deletions = [];
const insertions = [
  st(me, FOAF('name'), lit('Alice Smith'), me.doc())
];

// Send PATCH to server
await updater.update(deletions, insertions);
```

## Real-Time Collaboration

rdflib.js supports WebSocket subscriptions for live updates:

```javascript
import { graph, Fetcher, UpdateManager } from 'rdflib';

const store = graph();
const fetcher = new Fetcher(store);
const updater = new UpdateManager(store);

// Load and subscribe
await fetcher.load('https://alice.pod/chat');

// Store automatically updates when others make changes
// UI can react to store changes
```

## Provenance Tracking

rdflib.js tracks where each triple came from:

```javascript
// Each statement has a 'why' (graph/source)
const statements = store.match(null, null, null, doc);

statements.forEach(st => {
  console.log(`${st.subject} ${st.predicate} ${st.object}`);
  console.log(`  Source: ${st.why}`);
});
```

## SPARQL-like Queries

Basic graph pattern matching (not full SPARQL):

```javascript
import { graph, variable } from 'rdflib';

const store = graph();
const x = variable('x');

// Find all things Alice knows
const results = store.match(alice, FOAF('knows'), x);
```

## Comparison with solid-client

| Feature | rdflib.js | solid-client |
|---------|-----------|--------------|
| Level | Low-level | High-level |
| Learning curve | Steeper | Gentler |
| Flexibility | Maximum | Opinionated |
| Use case | Libraries, complex apps | Typical Solid apps |
| Maintained by | Community | Inrupt |

Use rdflib.js when you need fine-grained control. Use [solid-client](/projects/solid-client) for most applications.

## Links

- **npm:** [rdflib](https://www.npmjs.com/package/rdflib)
- **GitHub:** [linkeddata/rdflib.js](https://github.com/linkeddata/rdflib.js)
- **Docs:** [rdflib.js Documentation](https://linkeddata.github.io/rdflib.js/doc/)

## See Also

- [Linked Data](/concepts/linked-data) — The concept
- [Solid Protocol](/protocols/solid) — Uses RDF
- [SolidOS](/projects/solidos) — Built on rdflib.js
