---
title: SolidOS / Mashlib
description: Browser-based data browser for Solid
---

# SolidOS (Mashlib)

**View and edit Linked Data visually.** A read-write data browser for any Solid pod.

## Overview

SolidOS (also known as mashlib or the Data Browser) is the reference user interface for Solid. It provides a visual way to browse, edit, and manage data stored in Solid pods without writing code.

## Key Features

### Read-Write Interface
Unlike typical web pages, SolidOS is fully read-write. Users can:
- Create new resources and containers
- Edit RDF data directly
- Delete items they have permission to remove
- All changes save back to the pod

### Live Collaboration
SolidOS subscribes to changes via WebSocket:
- See updates from other users in real-time
- Screens synchronize automatically across sessions
- No refresh needed when data changes

### Multiple Panes
Different views for different data types:

| Pane | Purpose |
|------|---------|
| **Profile** | View and edit WebID profiles |
| **Contacts** | Manage address book |
| **Chat** | Real-time messaging |
| **Meeting** | Schedule and join meetings |
| **Folder** | Browse container contents |
| **Source** | Raw Turtle/RDF editing |
| **Access Control** | Manage permissions |

### Security Features
Recent updates include:
- **Signed chat messages** — Messages signed with private/public keys stored in your pod
- **Append-only chat** — Messages can't be edited or deleted (integrity)
- **Thread support** — Organized conversations
- **QR codes** — Easy profile sharing

## Architecture

```
┌─────────────────────────────────────────────────┐
│                   SolidOS                        │
├─────────────────────────────────────────────────┤
│  solid-panes    │  solid-ui     │  solid-logic  │
│  (view logic)   │  (components) │  (data layer) │
├─────────────────────────────────────────────────┤
│                   rdflib.js                      │
├─────────────────────────────────────────────────┤
│                   Solid Pod                      │
└─────────────────────────────────────────────────┘
```

### Repositories
- **mashlib** — Main bundled library
- **solid-panes** — Individual view panes
- **solid-ui** — Reusable UI components
- **solid-logic** — Data access layer

## Usage

### Standalone Web App
Try SolidOS directly:
```
https://solidos.github.io/mashlib/dist/browse.html
```

### Embedded in Pod
Many Solid servers (like solidcommunity.net) include SolidOS as the default frontend. When you visit your WebID URL in a browser, you see SolidOS.

### As a Library
Add mashlib to your application:

```html
<script src="https://solidos.github.io/mashlib/dist/mashlib.min.js"></script>
```

```javascript
// Initialize the data browser
const subject = $rdf.sym('https://pod.example/profile/card#me');
const dom = document;
UI.widgets.render(dom, subject);
```

### With Sandymount
[Sandymount](/projects/sandymount) includes SolidOS by default:

```bash
npx sandymount
# SolidOS available at http://localhost:5420
```

Disable with `--no-mashlib` if you prefer a headless server.

## Common Tasks

### View a Profile
Navigate to any WebID URL. SolidOS automatically renders the profile pane.

### Edit Data
1. Navigate to a resource
2. Click the "Source" tab for raw editing
3. Modify the Turtle
4. Click Save

### Manage Access
1. Navigate to a resource
2. Click the padlock icon
3. Add/remove agents and permissions
4. Changes apply immediately

### Chat
1. Create a new chat from your home folder
2. Invite contacts by WebID
3. Messages are stored in your pod
4. Real-time sync across participants

## Links

- **Live Demo:** [solidos.github.io/mashlib](https://solidos.github.io/mashlib/dist/browse.html)
- **solidcommunity.net:** [solidos.solidcommunity.net](https://solidos.solidcommunity.net/)
- **GitHub:** [SolidOS organization](https://github.com/SolidOS)
- **mashlib repo:** [SolidOS/mashlib](https://github.com/solidos/mashlib)

## See Also

- [Solid Protocol](/protocols/solid) — The underlying protocol
- [rdflib.js](/projects/rdflib-js) — The RDF library SolidOS uses
- [Sandymount](/projects/sandymount) — Server that includes SolidOS
- [Building Solid Apps](/guides/building-solid-apps) — Build your own UI
