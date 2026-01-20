---
title: Automerge
description: JSON-like CRDT for local-first software
---

# Automerge

**Merge without conflicts.** A CRDT library for building local-first collaborative apps.

## Overview

Automerge is a JSON-like data structure that can be modified concurrently by different users and automatically merged without conflicts. It's the backbone of local-first software.

## Key Features

### Automatic Merging

```
┌─────────────────────────────────────────────────────────────────┐
│                     Automerge Merge                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Device A (offline)                                           │
│   doc.title = "Hello"                                          │
│   doc.items.push("apple")                                      │
│                                                                 │
│   Device B (offline)                                           │
│   doc.count = 42                                               │
│   doc.items.push("banana")                                     │
│                                                                 │
│   After merge:                                                 │
│   {                                                            │
│     title: "Hello",      ← from A                              │
│     count: 42,           ← from B                              │
│     items: ["apple", "banana"]  ← both preserved!             │
│   }                                                            │
│                                                                 │
│   No conflicts. No data loss. Automatic.                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **JSON-like** | Objects, arrays, text, counters |
| **Automatic merge** | No conflict resolution needed |
| **Offline-first** | Works without network |
| **History** | Full change history preserved |
| **Efficient sync** | Only send changes, not full doc |

### Supported Types

| Type | Use Case |
|------|----------|
| **Object** | Key-value data |
| **Array** | Ordered lists |
| **Text** | Collaborative text editing |
| **Counter** | Increment/decrement values |
| **Date** | Timestamps |

## Usage

### Basic Example

```javascript
import * as Automerge from '@automerge/automerge'

// Create a document
let doc = Automerge.init()

// Make changes
doc = Automerge.change(doc, 'Add task', doc => {
  doc.tasks = []
  doc.tasks.push({ title: 'Buy groceries', done: false })
})

// Get changes for sync
const changes = Automerge.getChanges(oldDoc, doc)

// Apply changes from another peer
doc = Automerge.applyChanges(doc, remoteChanges)
```

### Collaborative Text

```javascript
// Create text
doc = Automerge.change(doc, doc => {
  doc.content = new Automerge.Text()
  doc.content.insertAt(0, 'Hello')
})

// Insert concurrently
// Device A inserts " World" at position 5
// Device B inserts "!" at position 5

// Result: "Hello World!" - both insertions preserved
```

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Automerge Architecture                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                    Application                           │  │
│   └─────────────────────────────────────────────────────────┘  │
│                              │                                 │
│                              ▼                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                 Automerge Document                       │  │
│   │   ┌──────────────┐  ┌──────────────┐  ┌────────────┐   │  │
│   │   │ Current State│  │ Change History│ │ Actor IDs │   │  │
│   │   └──────────────┘  └──────────────┘  └────────────┘   │  │
│   └─────────────────────────────────────────────────────────┘  │
│                              │                                 │
│                              ▼                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │              Sync Protocol (automerge-repo)              │  │
│   │   ┌────────────┐  ┌────────────┐  ┌────────────┐       │  │
│   │   │  WebSocket │  │ MessageChannel│ │  BroadcastChannel│       │  │
│   │   └────────────┘  └────────────┘  └────────────┘       │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Automerge 2.0

The latest version brings:

| Feature | Benefit |
|---------|---------|
| **Rust core** | 10-100x faster than JS |
| **WASM bindings** | Browser + Node.js |
| **Compact storage** | Efficient binary format |
| **automerge-repo** | Sync, storage, networking |

## Use Cases

1. **Collaborative docs** — Multiple users editing simultaneously
2. **Note-taking apps** — Sync across devices
3. **Project management** — Shared task boards
4. **Games** — Multiplayer state sync
5. **Local-first apps** — Offline-capable software

## Comparison

| Feature | Automerge | Yjs | Plain JSON |
|---------|-----------|-----|------------|
| Auto-merge | Yes | Yes | No |
| History | Yes | Limited | No |
| JSON-like | Yes | Partial | Yes |
| Text CRDT | Yes | Yes | No |
| Rust core | Yes | No | N/A |

## Ecosystem

| Package | Purpose |
|---------|---------|
| `@automerge/automerge` | Core library |
| `@automerge/automerge-repo` | Sync and storage |
| `automerge-swift` | iOS/macOS |
| `automerge-c` | C bindings |

## Links

- **Website:** [automerge.org](https://automerge.org/)
- **GitHub:** [automerge/automerge](https://github.com/automerge/automerge)
- **Docs:** [automerge.org/docs](https://automerge.org/docs/)

## See Also

- [Local-First](/concepts/local-first) — The philosophy
- [Yjs](/projects/yjs) — Alternative CRDT library
- [Solid Protocol](/protocols/solid) — Data storage
