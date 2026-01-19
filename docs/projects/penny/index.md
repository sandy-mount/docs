---
title: Penny
description: Lightweight Solid pod browser
---

# Penny

**Simple Solid pod browser.** Navigate and manage your pod with ease.

## Overview

Penny is a lightweight web application for browsing and managing Solid pods. It provides a simple file-browser interface to view, upload, and organize your data stored in Solid pods.

## Key Features

### File Browser Interface

```
┌─────────────────────────────────────────────────────────┐
│                      Penny                               │
├─────────────────────────────────────────────────────────┤
│  📁 https://alice.solidcommunity.net/                   │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  📂 public/                                             │
│  │   ├── 📄 about.ttl                                  │
│  │   └── 📸 photo.jpg                                  │
│  │                                                       │
│  📂 private/                                            │
│  │   ├── 📄 notes.md                                   │
│  │   └── 📂 documents/                                 │
│  │                                                       │
│  📄 profile/card#me                                     │
│  📄 settings/                                           │
│                                                          │
│  [Upload] [New Folder] [Refresh]                        │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Core Operations

| Action | Description |
|--------|-------------|
| **Browse** | Navigate folders |
| **View** | Read files and resources |
| **Upload** | Add new files |
| **Create** | New folders and resources |
| **Delete** | Remove items |
| **ACL** | View/edit permissions |

### RDF Awareness

View Turtle and other RDF formats:

```
┌─────────────────────────────────────────────────────────┐
│  📄 profile/card                                        │
├─────────────────────────────────────────────────────────┤
│  View: [Raw] [Formatted] [Triples]                      │
│                                                          │
│  @prefix foaf: <http://xmlns.com/foaf/0.1/> .           │
│                                                          │
│  <#me>                                                  │
│      a foaf:Person ;                                    │
│      foaf:name "Alice" ;                                │
│      foaf:knows <https://bob.pod/profile/card#me> .    │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Authentication

Penny supports Solid authentication:

```
┌─────────────────────────────────────────────────────────┐
│                    Login                                 │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Enter your Pod URL or WebID:                           │
│  ┌─────────────────────────────────────────────────────┐│
│  │ https://alice.solidcommunity.net/                   ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
│  [Login with Solid]                                     │
│                                                          │
│  Or choose a provider:                                  │
│  - solidcommunity.net                                   │
│  - inrupt.net                                           │
│  - solidweb.org                                         │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Usage

### Browsing Your Pod

1. Go to Penny
2. Enter your pod URL
3. Authenticate via Solid OIDC
4. Browse your files

### Uploading Files

1. Navigate to target folder
2. Click "Upload"
3. Select file(s)
4. Files uploaded to your pod

### Managing Permissions

1. Select a resource
2. Click "ACL" or permissions icon
3. View/edit access control
4. Save changes

## Technical Details

### Solid Compliance

- Uses solid-client-authn for login
- Respects Web Access Control (WAC)
- Handles RDF and non-RDF resources
- Works with any compliant Solid server

### File Types

| Type | Handling |
|------|----------|
| **Turtle (.ttl)** | Parsed and displayed |
| **JSON-LD** | Rendered as RDF |
| **Images** | Inline preview |
| **Text** | Direct display |
| **Binary** | Download link |

## Self-Hosting

Penny is a static web app:

```bash
git clone https://github.com/penny-app/penny.git
cd penny
npm install
npm run build
# Deploy dist/ to any static host
```

## Comparison

| Feature | Penny | SolidOS | Mashlib |
|---------|-------|---------|---------|
| Complexity | Simple | Full-featured | Full-featured |
| Learning curve | Low | High | High |
| File focus | Yes | No | No |
| ACL editing | Basic | Advanced | Advanced |
| RDF editing | View only | Full | Full |

## Use Cases

### Data Management

- Organize pod contents
- Upload backups
- Clean up old files

### Debugging

- View raw resources
- Check permissions
- Verify data structure

### Quick Access

- Browse without full SolidOS
- Lightweight pod inspection
- Simple file operations

## Links

- **Demo:** Available online
- **GitHub:** [penny-app/penny](https://github.com/penny-app/penny)

## See Also

- [Solid Protocol](/protocols/solid) — The protocol
- [SolidOS](/projects/solidos) — Full data browser
- [Mashlib](/projects/mashlib) — UI library
- [solid-client](/projects/solid-client) — JavaScript library
