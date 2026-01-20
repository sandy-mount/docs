---
title: remoteStorage
description: Open protocol for per-user web storage
---

# remoteStorage

**Your data, anywhere.** An open protocol for per-user storage on the Web.

## Overview

remoteStorage is an open protocol enabling apps to store user data on personal servers. Users choose their storage provider; apps work with any provider. True data portability.

## Key Features

### User-Owned Storage

```
┌─────────────────────────────────────────────────────────────────┐
│                     remoteStorage Model                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Traditional:                                                  │
│   ┌─────────┐     ┌─────────────┐                              │
│   │   App   │ ──► │ App's Server │  ← App controls data       │
│   └─────────┘     └─────────────┘                              │
│                                                                 │
│   remoteStorage:                                                │
│   ┌─────────┐     ┌─────────────────┐                          │
│   │   App   │ ──► │ User's Storage   │  ← User controls data  │
│   └─────────┘     │ (any provider)   │                         │
│                   └─────────────────┘                          │
│                                                                 │
│   App never touches its own server for user data               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Open protocol** | Anyone can implement |
| **Provider-agnostic** | User chooses storage |
| **Offline-first** | Works without network |
| **Auto-sync** | Changes sync when online |
| **Cross-device** | Same data everywhere |

### How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│                     Connection Flow                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   1. User enters their address: user@example.com               │
│                                                                 │
│   2. App discovers storage via WebFinger                       │
│      GET /.well-known/webfinger?resource=acct:user@example.com │
│                                                                 │
│   3. App redirects to OAuth                                    │
│      User authorizes app for specific folders                  │
│                                                                 │
│   4. App accesses storage                                      │
│      GET /storage/user/notes/                                  │
│      PUT /storage/user/notes/todo.json                         │
│                                                                 │
│   User data stays on user's server                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Protocol

### REST API

| Operation | HTTP Method |
|-----------|-------------|
| Get folder listing | GET /folder/ |
| Get document | GET /folder/file |
| Create/Update | PUT /folder/file |
| Delete | DELETE /folder/file |

### Directory Listing

```json
{
  "@context": "http://remotestorage.io/spec/folder-description",
  "items": {
    "todo.json": {
      "ETag": "\"abc123\"",
      "Content-Type": "application/json",
      "Content-Length": 245
    },
    "notes/": {
      "ETag": "\"def456\""
    }
  }
}
```

### Categories (Modules)

Apps request access to specific categories:

| Category | Purpose |
|----------|---------|
| `documents` | Text documents |
| `contacts` | Address book |
| `calendar` | Events |
| `bookmarks` | Saved links |
| `tasks` | To-do items |

## Usage

### Client Library

```javascript
import RemoteStorage from 'remotestoragejs'

const rs = new RemoteStorage({
  modules: [/* modules to use */]
})

// Connect widget
rs.widget.attach('remote-storage-widget')

// Access data
const client = rs.scope('/notes/')

// Write
await client.storeFile('text/plain', 'hello.txt', 'Hello World')

// Read
const content = await client.getFile('hello.txt')

// List
const listing = await client.getListing('')
```

### Offline Support

```javascript
// Enable caching
rs.caching.enable('/notes/')

// Works offline automatically
// Syncs when connection returns
```

## Providers

| Provider | Features |
|----------|----------|
| **5apps** | Commercial hosting |
| **Indie Hosters** | Community hosting |
| **Self-hosted** | Run your own server |

### Self-Host Options

| Server | Language |
|--------|----------|
| rs-serve | Node.js |
| armadietto | Node.js |
| mysteryshack | Rust |
| reStore | Ruby |

## Comparison

| Feature | remoteStorage | Solid | Dropbox |
|---------|---------------|-------|---------|
| Protocol | Open | Open | Proprietary |
| Data model | Key-value | RDF | Files |
| Offline | Built-in | Manual | Sync client |
| Auth | OAuth | Solid-OIDC | OAuth |
| Providers | Multiple | Multiple | One |

## Relationship to Solid

remoteStorage and Solid share goals:

| Aspect | remoteStorage | Solid |
|--------|---------------|-------|
| Focus | Simple storage | Linked Data |
| Data format | JSON, binary | RDF |
| Complexity | Lower | Higher |
| Features | Storage + sync | Full platform |

Both promote user data ownership.

## Use Cases

1. **Note apps** — Store notes on user's server
2. **Todo lists** — Personal task management
3. **Bookmarks** — Cross-browser sync
4. **Contacts** — Portable address book

## Links

- **Website:** [remotestorage.io](https://remotestorage.io/)
- **Spec:** [remotestorage.io/spec](https://remotestorage.io/spec)
- **GitHub:** [remotestorage](https://github.com/remotestorage)
- **Client:** [remotestoragejs](https://github.com/remotestorage/remotestoragejs)

## See Also

- [Local-First](/concepts/local-first) — The philosophy
- [Solid Protocol](/protocols/solid) — Related approach
- [Data Sovereignty](/concepts/data-sovereignty) — Why this matters
