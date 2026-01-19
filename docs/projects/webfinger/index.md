---
title: WebFinger
description: User discovery protocol
---

# WebFinger

**Discover resources by identifier.** Convert user@domain to profile URLs.

## Overview

WebFinger is a protocol for discovering information about people and resources using an identifier like `user@domain`. It's used by ActivityPub (Mastodon), Solid, and other federated systems for user discovery.

## How It Works

```
┌─────────────────────────────────────────────────────────┐
│                   WebFinger Flow                         │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Input: alice@mastodon.social                           │
│                                                          │
│  1. Parse domain: mastodon.social                       │
│                                                          │
│  2. Query:                                              │
│     GET /.well-known/webfinger?                         │
│         resource=acct:alice@mastodon.social             │
│                                                          │
│  3. Response: JSON with links to profile, inbox, etc.   │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Response Format

```json
{
  "subject": "acct:alice@mastodon.social",
  "aliases": [
    "https://mastodon.social/@alice",
    "https://mastodon.social/users/alice"
  ],
  "links": [
    {
      "rel": "self",
      "type": "application/activity+json",
      "href": "https://mastodon.social/users/alice"
    },
    {
      "rel": "http://webfinger.net/rel/profile-page",
      "type": "text/html",
      "href": "https://mastodon.social/@alice"
    }
  ]
}
```

## Use Cases

### ActivityPub

```
User enters: @alice@mastodon.social
            │
            ▼
WebFinger query to mastodon.social
            │
            ▼
Get ActivityPub actor URL
            │
            ▼
Fetch profile and follow
```

### Solid

```
WebID discovery via WebFinger
            │
            ▼
Find pod URL from email-like identifier
```

### Nostr (NIP-05)

```
alice@example.com
            │
            ▼
GET /.well-known/nostr.json?name=alice
            │
            ▼
Returns npub for verification
```

## Protocol Details

### Endpoint

```
GET /.well-known/webfinger?resource={uri}
```

### Resource Types

| Scheme | Example |
|--------|---------|
| `acct:` | acct:user@domain |
| `mailto:` | mailto:user@domain |
| `https:` | https://domain/path |

### Common Link Relations

| rel | Purpose |
|-----|---------|
| `self` | Canonical resource |
| `profile-page` | HTML profile |
| `http://ostatus.org/schema/1.0/subscribe` | Remote follow |

## Implementation

### Server (Node.js)

```javascript
app.get('/.well-known/webfinger', (req, res) => {
  const resource = req.query.resource;
  const [, user, domain] = resource.match(/acct:(.+)@(.+)/);

  res.json({
    subject: resource,
    links: [{
      rel: 'self',
      type: 'application/activity+json',
      href: `https://${domain}/users/${user}`
    }]
  });
});
```

### Client (JavaScript)

```javascript
async function webfinger(identifier) {
  const [user, domain] = identifier.split('@');
  const url = `https://${domain}/.well-known/webfinger?resource=acct:${identifier}`;
  const response = await fetch(url);
  return response.json();
}
```

## Standards

- **RFC 7033** — WebFinger protocol
- **RFC 7565** — acct URI scheme

## Links

- **RFC 7033:** [tools.ietf.org/html/rfc7033](https://tools.ietf.org/html/rfc7033)

## See Also

- [ActivityPub Protocol](/protocols/activitypub) — Uses WebFinger
- [Mastodon](/projects/mastodon) — ActivityPub server
- [Solid Protocol](/protocols/solid) — WebID discovery
