---
sidebar_position: 3
title: ActivityPub
description: Federated social networking protocol
---

# ActivityPub

**ActivityPub** is a W3C standard for federated social networking. It powers the "Fediverse" — Mastodon, Pixelfed, PeerTube, and thousands of other interconnected servers.

## Core Concepts

### Actors

Everything in ActivityPub is an Actor — people, bots, groups, services:

```json
{
  "@context": "https://www.w3.org/ns/activitystreams",
  "type": "Person",
  "id": "https://social.example/users/alice",
  "name": "Alice",
  "inbox": "https://social.example/users/alice/inbox",
  "outbox": "https://social.example/users/alice/outbox"
}
```

### Activities

Actions are represented as Activities:

```json
{
  "@context": "https://www.w3.org/ns/activitystreams",
  "type": "Create",
  "actor": "https://social.example/users/alice",
  "object": {
    "type": "Note",
    "content": "Hello, Fediverse!"
  }
}
```

Common activity types:
- **Create** — Make something new
- **Follow** — Subscribe to an actor
- **Like** — Express appreciation
- **Announce** — Share/boost content
- **Delete** — Remove content

### Inbox/Outbox

Every actor has:

- **Inbox** — Where they receive activities from others
- **Outbox** — Where their activities are published

Federation happens by POSTing activities to inboxes.

## How Federation Works

```
┌──────────────┐                    ┌──────────────┐
│  Server A    │                    │  Server B    │
│              │                    │              │
│  ┌────────┐  │                    │  ┌────────┐  │
│  │ Alice  │  │                    │  │  Bob   │  │
│  └────────┘  │                    │  └────────┘  │
│      │       │                    │      ▲       │
│      │ POST  │                    │      │       │
│      ▼       │                    │      │       │
│  [Outbox]────┼────HTTP POST──────►│  [Inbox]    │
│              │                    │              │
└──────────────┘                    └──────────────┘
```

1. Alice creates a post on Server A
2. Server A sees Alice follows Bob on Server B
3. Server A POSTs the activity to Bob's inbox
4. Bob's server displays Alice's post

## Discovery with WebFinger

WebFinger maps handles like `@alice@social.example` to ActivityPub actors:

```http
GET /.well-known/webfinger?resource=acct:alice@social.example

{
  "subject": "acct:alice@social.example",
  "links": [
    {
      "rel": "self",
      "type": "application/activity+json",
      "href": "https://social.example/users/alice"
    }
  ]
}
```

## ActivityStreams Vocabulary

ActivityPub uses ActivityStreams 2.0 vocabulary:

| Object Type | Purpose |
|-------------|---------|
| Note | Short text post |
| Article | Long-form content |
| Image | Photo/image |
| Video | Video content |
| Event | Calendar event |
| Question | Poll |

## Implementations

### Servers

- **[Mastodon](https://joinmastodon.org)** — Microblogging (Twitter-like)
- **[Pixelfed](https://pixelfed.org)** — Photo sharing (Instagram-like)
- **[PeerTube](https://joinpeertube.org)** — Video sharing (YouTube-like)
- **[Lemmy](https://join-lemmy.org)** — Link aggregation (Reddit-like)
- **[FedBox](/projects/fedbox)** — Generic ActivityPub server

### Libraries

- **[MicroFed](/projects/microfed)** — Minimal ActivityPub library
- **[activitypub-express](https://github.com/immers-space/activitypub-express)** — Express middleware

## Quick Example

Fetching an actor:

```javascript
const response = await fetch("https://mastodon.social/users/gargron", {
  headers: { "Accept": "application/activity+json" }
});
const actor = await response.json();
console.log(actor.name); // "Eugen Rochko"
```

Posting to an inbox (simplified):

```javascript
const activity = {
  "@context": "https://www.w3.org/ns/activitystreams",
  "type": "Create",
  "actor": "https://my.server/users/me",
  "to": ["https://other.server/users/them"],
  "object": {
    "type": "Note",
    "content": "Hello!"
  }
};

await fetch("https://other.server/users/them/inbox", {
  method: "POST",
  headers: {
    "Content-Type": "application/activity+json",
    // Plus HTTP Signatures for authentication
  },
  body: JSON.stringify(activity)
});
```

## Specifications

- [ActivityPub](https://www.w3.org/TR/activitypub/) — W3C Recommendation
- [ActivityStreams 2.0](https://www.w3.org/TR/activitystreams-core/) — Data format
- [HTTP Signatures](https://datatracker.ietf.org/doc/html/draft-cavage-http-signatures) — Authentication

## Learn More

- [activitypub.rocks](https://activitypub.rocks) — Community resources
- [SocialDocs](/projects/socialdocs) — Comprehensive documentation
- [Federation](/concepts/federation) — The concept behind ActivityPub
