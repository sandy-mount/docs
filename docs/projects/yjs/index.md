---
title: Yjs
description: High-performance CRDT for real-time collaboration
---

# Yjs

**Fast collaborative editing.** A high-performance CRDT library for real-time applications.

## Overview

Yjs is a high-performance CRDT implementation that enables real-time collaboration in web applications. It's network-agnostic and integrates with popular text editors.

## Key Features

### Network Agnostic

```
┌─────────────────────────────────────────────────────────────────┐
│                     Yjs Networking                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                    Yjs Document                          │  │
│   └─────────────────────────────────────────────────────────┘  │
│                              │                                 │
│              ┌───────────────┼───────────────┐                │
│              ▼               ▼               ▼                │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│   │  y-websocket │  │   y-webrtc   │  │   y-indexeddb │       │
│   │  (server)    │  │   (p2p)      │  │   (local)    │       │
│   └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                                 │
│   Same document, any transport                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Fast** | Optimized for large documents |
| **Network-agnostic** | WebSocket, WebRTC, or custom |
| **Editor bindings** | ProseMirror, Quill, Monaco, CodeMirror |
| **Undo/Redo** | Built-in undo manager |
| **Cursors** | Shared cursor positions |
| **Offline** | Works without network |

### Shared Types

| Type | Description |
|------|-------------|
| **Y.Map** | Key-value pairs |
| **Y.Array** | Ordered list |
| **Y.Text** | Rich text with formatting |
| **Y.XmlFragment** | XML/HTML structure |

## Usage

### Basic Example

```javascript
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'

// Create document
const doc = new Y.Doc()

// Get shared types
const ytext = doc.getText('content')
const yarray = doc.getArray('items')

// Connect to sync server
const provider = new WebsocketProvider(
  'wss://demos.yjs.dev', 'my-room', doc
)

// Make changes
ytext.insert(0, 'Hello World')
yarray.push(['item1', 'item2'])

// Observe changes
ytext.observe(event => {
  console.log('Text changed:', ytext.toString())
})
```

### Editor Integration

```javascript
import * as Y from 'yjs'
import { QuillBinding } from 'y-quill'
import Quill from 'quill'

const doc = new Y.Doc()
const ytext = doc.getText('quill')

const editor = new Quill('#editor')
const binding = new QuillBinding(ytext, editor)

// Now multiple users can edit collaboratively
```

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Yjs Architecture                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌───────────────┐  ┌───────────────┐  ┌───────────────┐     │
│   │   Editor A    │  │   Editor B    │  │   Editor C    │     │
│   └───────┬───────┘  └───────┬───────┘  └───────┬───────┘     │
│           │                  │                  │              │
│   ┌───────┴───────┐  ┌───────┴───────┐  ┌───────┴───────┐     │
│   │   Binding     │  │   Binding     │  │   Binding     │     │
│   └───────┬───────┘  └───────┬───────┘  └───────┬───────┘     │
│           │                  │                  │              │
│           └──────────────────┼──────────────────┘              │
│                              │                                 │
│                    ┌─────────┴─────────┐                      │
│                    │    Y.Doc          │                      │
│                    │  (shared state)   │                      │
│                    └─────────┬─────────┘                      │
│                              │                                 │
│              ┌───────────────┼───────────────┐                │
│              ▼               ▼               ▼                │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│   │   Provider   │  │   Provider   │  │   Provider   │       │
│   │  (network)   │  │   (storage)  │  │   (p2p)      │       │
│   └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Providers

| Provider | Purpose |
|----------|---------|
| `y-websocket` | WebSocket sync server |
| `y-webrtc` | Peer-to-peer WebRTC |
| `y-indexeddb` | Browser persistence |
| `y-leveldb` | Node.js persistence |
| `y-redis` | Redis pub/sub |

## Editor Bindings

| Binding | Editor |
|---------|--------|
| `y-prosemirror` | ProseMirror |
| `y-quill` | Quill |
| `y-monaco` | Monaco (VS Code) |
| `y-codemirror` | CodeMirror |
| `y-textarea` | Plain textarea |

## Performance

Yjs is optimized for:

| Aspect | Optimization |
|--------|--------------|
| Large documents | Efficient encoding |
| Many users | Minimal sync overhead |
| High frequency | Batched updates |
| Memory | Garbage collection |

## Comparison

| Feature | Yjs | Automerge | ShareDB |
|---------|-----|-----------|---------|
| Speed | Fastest | Fast | Medium |
| P2P | Yes | Yes | No |
| Editor bindings | Many | Few | Some |
| History | Limited | Full | Via OT |
| JSON-like | Partial | Yes | Yes |

## Use Cases

1. **Collaborative editors** — Google Docs-like apps
2. **Whiteboards** — Real-time drawing
3. **Code editors** — Pair programming
4. **Design tools** — Collaborative Figma-like
5. **Forms** — Shared input

## Security

For end-to-end encryption:

```javascript
// Encrypt sync messages
import { encodeStateAsUpdate, applyUpdate } from 'yjs'

// Export state
const state = encodeStateAsUpdate(doc)

// Encrypt before sending
const encrypted = encrypt(state, key)

// On receive: decrypt then apply
const decrypted = decrypt(encrypted, key)
applyUpdate(doc, decrypted)
```

## Links

- **Website:** [yjs.dev](https://yjs.dev/)
- **GitHub:** [yjs/yjs](https://github.com/yjs/yjs)
- **Docs:** [docs.yjs.dev](https://docs.yjs.dev/)

## See Also

- [Local-First](/concepts/local-first) — The philosophy
- [Automerge](/projects/automerge) — Alternative CRDT
- [Solid Protocol](/protocols/solid) — Data storage
