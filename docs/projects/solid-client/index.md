---
title: solid-client
description: Official JavaScript library for Solid apps
---

# solid-client

**The official library for building Solid applications.** Read, write, and manage Linked Data in pods.

## Overview

solid-client (by Inrupt) provides a high-level API for:

- Reading and writing datasets
- Managing Things (RDF subjects)
- Access control
- Container management

## Installation

```bash
npm install @inrupt/solid-client
```

## Quick Start

### Reading Data

```javascript
import { 
  getSolidDataset, 
  getThing, 
  getStringNoLocale 
} from "@inrupt/solid-client";

// Fetch a dataset
const dataset = await getSolidDataset("https://pod.example/profile/card");

// Get a specific Thing
const profile = getThing(dataset, "https://pod.example/profile/card#me");

// Read properties
const name = getStringNoLocale(profile, "http://xmlns.com/foaf/0.1/name");
console.log(name); // "Alice"
```

### Writing Data

```javascript
import {
  getSolidDataset,
  getThing,
  setThing,
  setStringNoLocale,
  saveSolidDatasetAt
} from "@inrupt/solid-client";

// Fetch, modify, save
let dataset = await getSolidDataset("https://pod.example/profile/card");
let profile = getThing(dataset, "https://pod.example/profile/card#me");

profile = setStringNoLocale(profile, FOAF.name, "New Name");
dataset = setThing(dataset, profile);

await saveSolidDatasetAt("https://pod.example/profile/card", dataset);
```

### Creating Resources

```javascript
import {
  createSolidDataset,
  createThing,
  setThing,
  saveSolidDatasetAt
} from "@inrupt/solid-client";

let newDataset = createSolidDataset();
let newThing = createThing({ name: "item1" });
newThing = setStringNoLocale(newThing, SCHEMA.name, "My Item");
newDataset = setThing(newDataset, newThing);

await saveSolidDatasetAt("https://pod.example/items/item1", newDataset);
```

## With Authentication

Use with solid-client-authn-browser:

```javascript
import { fetch } from "@inrupt/solid-client-authn-browser";
import { getSolidDataset } from "@inrupt/solid-client";

const dataset = await getSolidDataset(url, { fetch });
```

## Links

- **npm:** [@inrupt/solid-client](https://www.npmjs.com/package/@inrupt/solid-client)
- **Docs:** [docs.inrupt.com/developer-tools/javascript/client-libraries](https://docs.inrupt.com/developer-tools/javascript/client-libraries/)
- **GitHub:** [inrupt/solid-client-js](https://github.com/inrupt/solid-client-js)

## See Also

- [Solid Protocol](/protocols/solid)
- [rdflib.js](/projects/rdflib-js) — Lower-level RDF library
- [Building Solid Apps](/guides/building-solid-apps) — Tutorial
