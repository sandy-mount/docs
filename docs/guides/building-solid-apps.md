---
sidebar_position: 4
title: Building Solid Apps
description: Create apps that use Solid pods
---

# Building Solid Apps

**Create applications that read from and write to Solid pods.**

## The Mental Model

Traditional apps: App stores data → User accesses via app
Solid apps: User owns data → App requests access

```
┌─────────────┐     permission     ┌─────────────┐
│    User     │◄──────────────────►│     App     │
│    Pod      │                    │             │
└─────────────┘                    └─────────────┘
```

This inversion means:

- **Users keep their data** — Even if your app disappears
- **Multiple apps, same data** — No more data silos
- **Explicit consent** — Users grant specific permissions
- **Portability** — Users can switch apps freely

## Quick Start

### 1. Install Dependencies

```bash
npm install @inrupt/solid-client @inrupt/solid-client-authn-browser
```

### 2. Authentication

```javascript
import {
  login,
  handleIncomingRedirect,
  getDefaultSession
} from '@inrupt/solid-client-authn-browser';

// On page load, handle redirect from identity provider
await handleIncomingRedirect();

// Check if already logged in
const session = getDefaultSession();
if (session.info.isLoggedIn) {
  console.log('Logged in as:', session.info.webId);
} else {
  // Trigger login
  await login({
    oidcIssuer: 'https://login.inrupt.com',
    redirectUrl: window.location.href,
    clientName: 'My Solid App'
  });
}
```

### 3. Read Data

```javascript
import {
  getSolidDataset,
  getThing,
  getStringNoLocale
} from '@inrupt/solid-client';

const dataset = await getSolidDataset('https://pod.example/profile/card');
const profile = getThing(dataset, 'https://pod.example/profile/card#me');
const name = getStringNoLocale(profile, 'http://xmlns.com/foaf/0.1/name');
```

### 4. Write Data

```javascript
import {
  saveSolidDatasetAt,
  setThing,
  setStringNoLocale
} from '@inrupt/solid-client';

const updatedProfile = setStringNoLocale(profile, FOAF.name, 'New Name');
const updatedDataset = setThing(dataset, updatedProfile);
await saveSolidDatasetAt('https://pod.example/profile/card', updatedDataset);
```

## Key Concepts

### Datasets and Things

- **Dataset** — A document containing RDF data (fetched from a URL)
- **Thing** — A subject within a dataset (identified by URL)

```javascript
// A dataset contains multiple Things
const dataset = await getSolidDataset(profileUrl);

// Get a specific Thing by its URL
const me = getThing(dataset, profileUrl + '#me');
const friend = getThing(dataset, 'https://friend.example/profile/card#me');
```

### Working with Properties

Different property types have different accessors:

```javascript
import {
  getStringNoLocale,
  getInteger,
  getUrl,
  getDatetime,
  getBoolean,
  getStringWithLocale
} from '@inrupt/solid-client';

// String properties
const name = getStringNoLocale(thing, FOAF.name);

// Integers
const age = getInteger(thing, SCHEMA.age);

// URLs (references to other things)
const knows = getUrl(thing, FOAF.knows);

// Dates
const birthday = getDatetime(thing, SCHEMA.birthDate);

// Localized strings
const bio = getStringWithLocale(thing, SCHEMA.description, 'en');
```

### Creating New Things

```javascript
import {
  createThing,
  addStringNoLocale,
  addUrl,
  setThing,
  createSolidDataset,
  saveSolidDatasetAt
} from '@inrupt/solid-client';

// Create a new Thing
let note = createThing({ name: 'note1' });
note = addStringNoLocale(note, SCHEMA.name, 'My Note');
note = addStringNoLocale(note, SCHEMA.text, 'Note content here');
note = addUrl(note, RDF.type, SCHEMA.TextDigitalDocument);

// Add to dataset and save
let dataset = createSolidDataset();
dataset = setThing(dataset, note);
await saveSolidDatasetAt('https://pod.example/notes/note1', dataset, { fetch });
```

### Vocabularies

Use standard vocabularies for interoperability:

| Prefix | Namespace | Purpose |
|--------|-----------|---------|
| `foaf` | `http://xmlns.com/foaf/0.1/` | People, social |
| `schema` | `https://schema.org/` | General purpose |
| `vcard` | `http://www.w3.org/2006/vcard/ns#` | Contact info |
| `rdf` | `http://www.w3.org/1999/02/22-rdf-syntax-ns#` | RDF basics |
| `ldp` | `http://www.w3.org/ns/ldp#` | Containers |

```javascript
// Import vocabulary constants
import { FOAF, SCHEMA_INRUPT, VCARD, RDF } from '@inrupt/vocab-common-rdf';

// Use in your code
const name = getStringNoLocale(profile, FOAF.name);
```

## Working with Containers

Containers are like folders. They hold resources and other containers.

### Listing Container Contents

```javascript
import {
  getSolidDataset,
  getContainedResourceUrlAll
} from '@inrupt/solid-client';

const container = await getSolidDataset('https://pod.example/notes/', { fetch });
const noteUrls = getContainedResourceUrlAll(container);

for (const url of noteUrls) {
  console.log('Found note:', url);
}
```

### Creating Containers

```javascript
import { createContainerAt } from '@inrupt/solid-client';

await createContainerAt('https://pod.example/projects/', { fetch });
```

## Authenticated Requests

For protected resources, pass the authenticated `fetch`:

```javascript
import { fetch } from '@inrupt/solid-client-authn-browser';
import { getSolidDataset, saveSolidDatasetAt } from '@inrupt/solid-client';

// Reading protected data
const dataset = await getSolidDataset(privateUrl, { fetch });

// Writing protected data
await saveSolidDatasetAt(url, dataset, { fetch });
```

## Error Handling

```javascript
import {
  getSolidDataset,
  isContainer,
  FetchError
} from '@inrupt/solid-client';

try {
  const dataset = await getSolidDataset(url, { fetch });
} catch (error) {
  if (error.statusCode === 401) {
    console.log('Not authenticated');
  } else if (error.statusCode === 403) {
    console.log('Access denied');
  } else if (error.statusCode === 404) {
    console.log('Resource not found');
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Complete Example: Notes App

```javascript
import {
  login, handleIncomingRedirect, getDefaultSession, fetch
} from '@inrupt/solid-client-authn-browser';
import {
  getSolidDataset, saveSolidDatasetAt,
  createSolidDataset, createThing, setThing,
  addStringNoLocale, addDatetime,
  getContainedResourceUrlAll, getThing,
  getStringNoLocale, getDatetime
} from '@inrupt/solid-client';

const NOTES_CONTAINER = 'https://mypod.example/notes/';

// Initialize authentication
async function init() {
  await handleIncomingRedirect();
  const session = getDefaultSession();
  if (!session.info.isLoggedIn) {
    await login({
      oidcIssuer: 'https://login.inrupt.com',
      redirectUrl: window.location.href
    });
  }
  return session;
}

// Create a new note
async function createNote(title, content) {
  let note = createThing({ name: Date.now().toString() });
  note = addStringNoLocale(note, SCHEMA.name, title);
  note = addStringNoLocale(note, SCHEMA.text, content);
  note = addDatetime(note, SCHEMA.dateCreated, new Date());

  let dataset = createSolidDataset();
  dataset = setThing(dataset, note);

  const noteUrl = `${NOTES_CONTAINER}${Date.now()}.ttl`;
  await saveSolidDatasetAt(noteUrl, dataset, { fetch });
  return noteUrl;
}

// List all notes
async function listNotes() {
  const container = await getSolidDataset(NOTES_CONTAINER, { fetch });
  return getContainedResourceUrlAll(container);
}

// Read a specific note
async function readNote(noteUrl) {
  const dataset = await getSolidDataset(noteUrl, { fetch });
  const things = getThingAll(dataset);
  const note = things[0]; // Assuming one thing per note

  return {
    title: getStringNoLocale(note, SCHEMA.name),
    content: getStringNoLocale(note, SCHEMA.text),
    created: getDatetime(note, SCHEMA.dateCreated)
  };
}
```

## Best Practices

### 1. Use Standard Vocabularies
Your data becomes interoperable with other Solid apps.

### 2. Handle Offline Gracefully
Consider caching strategies for offline-first experiences.

### 3. Request Minimal Permissions
Only ask for access to what you need.

### 4. Respect User's Storage Structure
Don't assume specific folder structures exist.

### 5. Provide Clear Data Descriptions
Help users understand what data your app stores.

## Testing Locally

Use [Sandymount](/projects/sandymount) for local development:

```bash
npx sandymount
# Pod available at http://localhost:5420
```

## See Also

- [Solid Protocol](/protocols/solid) — How Solid works
- [solid-client](/projects/solid-client) — Library documentation
- [Linked Data](/concepts/linked-data) — The data model
- [Your First Pod](/guides/your-first-pod) — Getting started
- [Authentication](/guides/authentication) — Auth methods
