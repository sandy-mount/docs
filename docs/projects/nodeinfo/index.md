---
title: NodeInfo
description: Server metadata protocol for federated networks
---

# NodeInfo

**Server info for the Fediverse.** Standardized metadata about federated servers.

## Overview

NodeInfo is a protocol that standardizes how servers expose metadata about distributed social network installations. It helps users and tools assess server capabilities, usage statistics, and health.

## Key Features

### Server Metadata

```
┌─────────────────────────────────────────────────────────────────┐
│                    NodeInfo Response                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Software:                                                      │
│  ├── Name: "mastodon"                                          │
│  ├── Version: "4.2.0"                                          │
│  └── Repository: "https://github.com/mastodon/mastodon"        │
│                                                                 │
│  Protocols: ["activitypub"]                                    │
│                                                                 │
│  Usage:                                                         │
│  ├── Users total: 1234                                         │
│  ├── Users active (month): 567                                 │
│  └── Local posts: 45678                                        │
│                                                                 │
│  Open registrations: true                                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Discovery

Well-known endpoint:
```http
GET /.well-known/nodeinfo
```

Response:
```json
{
  "links": [{
    "rel": "http://nodeinfo.diaspora.software/ns/schema/2.1",
    "href": "https://example.com/nodeinfo/2.1"
  }]
}
```

### Full Response

```json
{
  "version": "2.1",
  "software": {
    "name": "mastodon",
    "version": "4.2.0",
    "repository": "https://github.com/mastodon/mastodon"
  },
  "protocols": ["activitypub"],
  "services": {
    "inbound": [],
    "outbound": ["atom1.0", "rss2.0"]
  },
  "openRegistrations": true,
  "usage": {
    "users": {
      "total": 1234,
      "activeMonth": 567,
      "activeHalfyear": 890
    },
    "localPosts": 45678
  },
  "metadata": {}
}
```

## Schema Versions

| Version | Features |
|---------|----------|
| **2.0** | Basic info |
| **2.1** | Software repository field |
| **2.2** | Extended metadata |

## Fields

| Field | Description |
|-------|-------------|
| `software.name` | Server software name |
| `software.version` | Software version |
| `protocols` | Supported protocols |
| `openRegistrations` | Accepting new users |
| `usage.users.total` | Total user count |
| `usage.users.activeMonth` | Active in last month |
| `usage.localPosts` | Posts from this server |
| `metadata` | Custom fields |

## Use Cases

### For Users

- Find servers accepting registrations
- Compare server sizes
- Check software versions

### For Developers

- Build server directories
- Monitor Fediverse health
- Aggregate statistics

### For Admins

- Advertise capabilities
- Show server health
- Interop verification

## Implementations

Supported by most Fediverse software:
- Mastodon
- Pleroma
- Misskey
- PeerTube
- Pixelfed
- Lemmy

## Alternative: NodeInfo2

Simplified version of NodeInfo with:
- Fewer required fields
- Simpler structure
- Better for minimal implementations

## Example Query

```bash
# Discover NodeInfo endpoint
curl https://mastodon.social/.well-known/nodeinfo

# Fetch full info
curl https://mastodon.social/nodeinfo/2.0
```

## Links

- **Specification:** [nodeinfo.diaspora.software](http://nodeinfo.diaspora.software/)
- **GitHub:** [jhass/nodeinfo](https://github.com/jhass/nodeinfo)

## See Also

- [ActivityPub](/protocols/activitypub) — Federation protocol
- [Mastodon](/projects/mastodon) — Fediverse server
- [WebFinger](/projects/webfinger) — User discovery
