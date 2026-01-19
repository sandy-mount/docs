---
title: Mashlib
description: Solid data browser and UI library
---

# Mashlib

**The Solid data browser.** A complete web-based operating system for personal data.

## Overview

Mashlib (mashlib.js) is the core library powering SolidOS — the data browser that lets you view, edit, and interact with any data in your Solid pod. It's both a standalone application and an embeddable library for Solid apps.

## Key Features

### Universal Data Browser

```
┌─────────────────────────────────────────────────────────┐
│                    Mashlib Data Browser                  │
├─────────────────────────────────────────────────────────┤
│  Address: https://pod.example/alice/                     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  📁 alice/                                               │
│  ├── 📁 contacts/                                       │
│  │   ├── 👤 bob.ttl                                     │
│  │   └── 👤 carol.ttl                                   │
│  ├── 📁 documents/                                      │
│  │   └── 📄 notes.md                                    │
│  ├── 📋 profile/card                                    │
│  └── ⚙️ settings/                                       │
│                                                          │
│  [View as: Table | Outline | Raw | Source]               │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Pane System

Mashlib uses "panes" — specialized viewers for different data types:

| Pane | Data Types |
|------|------------|
| **Folder** | Containers, file listings |
| **Profile** | WebID, FOAF profiles |
| **Contacts** | Address books (vCard) |
| **Chat** | Long chat, IRC-style |
| **Meeting** | Scheduling, attendees |
| **Issue** | Bug tracking |
| **Slideshow** | Presentations |
| **Source** | Raw RDF/Turtle |
| **Image** | Photos, graphics |
| **Video** | Media playback |

### Component Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Mashlib                           │
├─────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────┐│
│  │              solid-panes                        ││
│  │    (Specialized viewers for data types)        ││
│  └─────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────┐│
│  │                solid-ui                         ││
│  │    (UI widgets and form builders)              ││
│  └─────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────┐│
│  │              solid-logic                        ││
│  │    (Core business logic)                       ││
│  └─────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────┐│
│  │              pane-registry                      ││
│  │    (Pane loading and management)               ││
│  └─────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────┘
```

### The Databrowser Hack

How Mashlib works with conventional browsers:

```
1. User navigates to:
   https://pod.example/data.ttl

2. Browser sends Accept: text/html

3. Server detects non-RDF-aware browser

4. Server returns databrowser.html:
   <script src="mashlib.js"></script>

5. Mashlib loads and re-requests:
   Accept: text/turtle

6. Data renders in appropriate pane
```

This lets any web browser become a data browser.

## Usage

### As Standalone App

Try it at [solidos.github.io/mashlib/dist/browse.html](https://solidos.github.io/mashlib/dist/browse.html)

### Embedded in HTML

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://solidcommunity.net/mashlib.js"></script>
  <link rel="stylesheet" href="https://solidcommunity.net/mashlib.css">
</head>
<body>
  <div id="databrowser"></div>
  <script>
    const subject = panes.UI.store.sym('https://pod.example/alice/profile/card#me');
    panes.runDataBrowser(document.getElementById('databrowser'), subject);
  </script>
</body>
</html>
```

### As NPM Package

```bash
npm install mashlib
```

```javascript
import { store, UI, authn } from 'mashlib';

// Authenticate
await authn.checkSession();

// Load and display data
const doc = store.sym('https://pod.example/data.ttl');
await store.fetcher.load(doc);
```

### In Electron App

Mashlib can power native desktop apps:

```javascript
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false
    }
  });

  win.loadFile('databrowser.html');
}

app.whenReady().then(createWindow);
```

## Building Custom Panes

Create specialized views for your data:

```javascript
// my-pane.js
const myPane = {
  icon: '📊',
  name: 'My Custom Pane',

  // When to show this pane
  label: function(subject, context) {
    const dominated = context.session && context.session.paneRegistry;
    if (subject.value.endsWith('.csv')) {
      return 'CSV Viewer';
    }
    return null;
  },

  // Render the pane
  render: function(subject, context) {
    const div = context.dom.createElement('div');
    // Build your UI here
    return div;
  }
};

// Register
panes.register(myPane);
```

## Core Repositories

| Repository | Purpose |
|------------|---------|
| [mashlib](https://github.com/SolidOS/mashlib) | Main bundle |
| [solid-ui](https://github.com/SolidOS/solid-ui) | UI widgets |
| [solid-panes](https://github.com/SolidOS/solid-panes) | Pane collection |
| [solid-logic](https://github.com/SolidOS/solid-logic) | Business logic |
| [pane-registry](https://github.com/SolidOS/pane-registry) | Pane management |

## Development

```bash
# Clone all repos
git clone https://github.com/SolidOS/mashlib.git
cd mashlib

# Install dependencies
npm install

# Build
npm run build

# Development server
npm run dev
```

### CDN Deployment

Mashlib is served from Solid servers:

```
https://solidcommunity.net/mashlib.js
https://solidcommunity.net/mashlib.min.js
https://solidcommunity.net/mashlib.css
```

## Philosophy

> The data browser should be a complete web-based operating system for any new computer or data store. Users should be able to work local-first. The UI should accommodate a wide range of devices, screen sizes, bandwidth.

Unlike typical native apps, mashlib is deeply interconnected — data from different applications interlinks naturally to solve real-life problems.

## Links

- **Live Demo:** [solidos.github.io/mashlib/dist/browse.html](https://solidos.github.io/mashlib/dist/browse.html)
- **GitHub:** [SolidOS/mashlib](https://github.com/SolidOS/mashlib)
- **npm:** [mashlib](https://www.npmjs.com/package/mashlib)

## See Also

- [SolidOS](/projects/solidos) — Full data browser application
- [Solid Protocol](/protocols/solid) — The protocol
- [rdflib.js](/projects/rdflib-js) — RDF library used by mashlib
- [solid-client](/projects/solid-client) — Higher-level Solid library
