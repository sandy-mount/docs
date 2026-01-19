---
sidebar_position: 2
title: Your First Pod
description: Set up and use a Solid pod in 15 minutes
---

# Your First Pod

**Get a Solid pod running and store your first data.** Takes about 15 minutes.

## What You'll Build

By the end of this guide, you'll have:
- A running Solid pod
- A WebID (your identity)
- Data stored in your pod
- Understanding of basic pod operations

## Prerequisites

- Node.js 18+ installed
- A terminal

## Step 1: Start Sandymount

The fastest way to get a pod is [Sandymount](/projects/sandymount):

```bash
npx sandymount
```

You'll see the SAND banner and status:

```
  ┌────────────────────────────────────┐
  │  S  Solid        ✓ enabled         │
  │  A  ActivityPub  ○ --activitypub   │
  │  N  Nostr        ✓ enabled         │
  │  D  DID          ✓ enabled (IdP)   │
  └────────────────────────────────────┘

  Port: 5420  Data: ./data  Git: ✓  UI: classic
```

Your pod is now running at `http://localhost:5420/`.

## Step 2: Open SolidOS

Open your browser to [http://localhost:5420/](http://localhost:5420/).

You'll see the SolidOS data browser — a visual interface for your pod.

## Step 3: Create an Account

1. Click "Log in" or "Sign up"
2. Since you're running your own IdP, you can create an account
3. Choose a username and password
4. Your WebID is created: `http://localhost:5420/profile/card#me`

## Step 4: Explore Your Pod

Your pod has a file structure:

```
http://localhost:5420/
├── profile/
│   └── card           # Your WebID profile
├── public/            # Publicly accessible folder
├── private/           # Private folder
└── settings/          # App settings
```

Click around in SolidOS to see your data.

## Step 5: Create a Resource

Let's create a simple note using the command line:

```bash
curl -X PUT http://localhost:5420/public/note.txt \
  -H "Content-Type: text/plain" \
  -d "Hello, Solid!"
```

Now visit `http://localhost:5420/public/note.txt` — there's your data!

## Step 6: Create Linked Data

Solid really shines with Linked Data. Let's create a Turtle file:

```bash
curl -X PUT http://localhost:5420/public/me.ttl \
  -H "Content-Type: text/turtle" \
  -d '@prefix foaf: <http://xmlns.com/foaf/0.1/> .
<#me> a foaf:Person ;
    foaf:name "Your Name" ;
    foaf:interest <https://solidproject.org> .'
```

Visit `http://localhost:5420/public/me.ttl` to see it rendered.

## Step 7: Read Data Programmatically

Using JavaScript:

```javascript
// Fetch Turtle data
const response = await fetch('http://localhost:5420/public/me.ttl', {
  headers: { 'Accept': 'text/turtle' }
});
const turtle = await response.text();
console.log(turtle);
```

Or request JSON-LD:

```javascript
const response = await fetch('http://localhost:5420/public/me.ttl', {
  headers: { 'Accept': 'application/ld+json' }
});
const jsonld = await response.json();
console.log(jsonld);
```

## What's Next?

You now have a working Solid pod! From here:

- **[Authentication](/guides/authentication)** — Learn about auth methods
- **[Building Solid Apps](/guides/building-solid-apps)** — Create apps that use pods
- **[Solid Protocol](/protocols/solid)** — Understand the spec
- **[Linked Data](/concepts/linked-data)** — Dive into RDF

## Troubleshooting

### Port already in use
```bash
sandymount --port 3000
```

### Permission denied
Make sure you're authenticated when accessing protected resources.

### Data not appearing
Check the Content-Type header matches your data format.
