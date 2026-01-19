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

## Quick Start

### 1. Install Dependencies

```bash
npm install @inrupt/solid-client @inrupt/solid-client-authn-browser
```

### 2. Authentication

```javascript
import { login, getDefaultSession } from '@inrupt/solid-client-authn-browser';

// Login
await login({
  oidcIssuer: 'https://login.inrupt.com',
  redirectUrl: window.location.href,
});

// Check session
const session = getDefaultSession();
if (session.info.isLoggedIn) {
  console.log('Logged in as:', session.info.webId);
}
```

### 3. Read Data

```javascript
import { getSolidDataset, getThing, getStringNoLocale } from '@inrupt/solid-client';

const dataset = await getSolidDataset('https://pod.example/profile/card');
const profile = getThing(dataset, 'https://pod.example/profile/card#me');
const name = getStringNoLocale(profile, 'http://xmlns.com/foaf/0.1/name');
```

### 4. Write Data

```javascript
import { saveSolidDatasetAt, setThing, setStringNoLocale } from '@inrupt/solid-client';

const updatedProfile = setStringNoLocale(profile, FOAF.name, 'New Name');
const updatedDataset = setThing(dataset, updatedProfile);
await saveSolidDatasetAt('https://pod.example/profile/card', updatedDataset);
```

## Key Concepts

### Datasets and Things

- **Dataset** — A document containing RDF data
- **Thing** — A subject within a dataset (identified by URL)

### Vocabularies

Use standard vocabularies:
- `http://xmlns.com/foaf/0.1/` — People, social
- `https://schema.org/` — General purpose
- `http://www.w3.org/2006/vcard/ns#` — Contact info

## See Also

- [Solid Protocol](/protocols/solid)
- [Linked Data](/concepts/linked-data)
- [Your First Pod](/guides/your-first-pod)
