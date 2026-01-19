---
title: solid-client-authn
description: Authentication library for Solid apps
---

# solid-client-authn

**Authenticate users in Solid applications.** Implements Solid-OIDC for browser and Node.js.

## Overview

solid-client-authn handles the complexity of Solid-OIDC authentication. It manages tokens, sessions, and provides an authenticated `fetch` function for accessing protected resources.

## Packages

| Package | Environment |
|---------|-------------|
| `@inrupt/solid-client-authn-browser` | Browser apps |
| `@inrupt/solid-client-authn-node` | Node.js apps |

## Browser Usage

### Installation

```bash
npm install @inrupt/solid-client-authn-browser
```

### Basic Login Flow

```javascript
import {
  login,
  handleIncomingRedirect,
  getDefaultSession,
  fetch
} from '@inrupt/solid-client-authn-browser';

// 1. On page load, handle redirect from IdP
async function init() {
  await handleIncomingRedirect();

  const session = getDefaultSession();

  if (session.info.isLoggedIn) {
    console.log('Logged in as:', session.info.webId);
  }
}

// 2. Trigger login when user clicks button
async function handleLogin() {
  await login({
    oidcIssuer: 'https://login.inrupt.com',
    redirectUrl: window.location.href,
    clientName: 'My App'
  });
}

// 3. Use authenticated fetch
async function fetchProfile() {
  const response = await fetch(session.info.webId);
  const data = await response.text();
  console.log(data);
}
```

### Complete Example

```javascript
import {
  login,
  logout,
  handleIncomingRedirect,
  getDefaultSession,
  fetch
} from '@inrupt/solid-client-authn-browser';
import { getSolidDataset, getThing, getStringNoLocale } from '@inrupt/solid-client';

// Handle redirect on page load
document.addEventListener('DOMContentLoaded', async () => {
  await handleIncomingRedirect({ restorePreviousSession: true });

  const session = getDefaultSession();

  if (session.info.isLoggedIn) {
    document.getElementById('status').textContent =
      `Logged in as ${session.info.webId}`;

    // Fetch protected data
    const dataset = await getSolidDataset(session.info.webId, { fetch });
    const profile = getThing(dataset, session.info.webId);
    const name = getStringNoLocale(profile, 'http://xmlns.com/foaf/0.1/name');
    document.getElementById('name').textContent = name;
  }
});

// Login button
document.getElementById('login').addEventListener('click', async () => {
  const issuer = document.getElementById('issuer').value;
  await login({
    oidcIssuer: issuer,
    redirectUrl: window.location.href,
    clientName: 'My Solid App'
  });
});

// Logout button
document.getElementById('logout').addEventListener('click', async () => {
  await logout();
  window.location.reload();
});
```

### Session Events

```javascript
import { getDefaultSession, onLogin, onLogout, onSessionRestore } from '@inrupt/solid-client-authn-browser';

// Called when user logs in
onLogin(() => {
  console.log('User logged in');
  updateUI();
});

// Called when user logs out
onLogout(() => {
  console.log('User logged out');
  clearUI();
});

// Called when session is restored from storage
onSessionRestore((url) => {
  console.log('Session restored, originally at:', url);
});
```

## Node.js Usage

### Installation

```bash
npm install @inrupt/solid-client-authn-node
```

### Client Credentials

For server-to-server or automated scripts:

```javascript
import { Session } from '@inrupt/solid-client-authn-node';

const session = new Session();

await session.login({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  oidcIssuer: 'https://login.inrupt.com'
});

// Use authenticated fetch
const response = await session.fetch('https://pod.example/private/data');
```

### Interactive Login (Node)

```javascript
import { Session } from '@inrupt/solid-client-authn-node';

const session = new Session();

// Start login - returns URL to open in browser
const loginUrl = await session.login({
  oidcIssuer: 'https://login.inrupt.com',
  redirectUrl: 'http://localhost:3000/callback',
  handleRedirect: (url) => {
    console.log('Open this URL in browser:', url);
  }
});

// Handle callback (in your HTTP server)
app.get('/callback', async (req, res) => {
  await session.handleIncomingRedirect(req.url);
  res.send('Logged in!');
});
```

## Identity Providers

Common Solid OIDC providers:

| Provider | Issuer URL |
|----------|------------|
| Inrupt PodSpaces | `https://login.inrupt.com` |
| solidcommunity.net | `https://solidcommunity.net` |
| Solid Web | `https://solidweb.org` |
| Your own | Run Sandymount with `--idp` |

## Dynamic Registration

By default, the library uses dynamic client registration. For static registration:

```javascript
await login({
  oidcIssuer: 'https://login.inrupt.com',
  clientId: 'your-registered-client-id',
  clientSecret: 'your-client-secret',  // if confidential client
  redirectUrl: window.location.href
});
```

## With solid-client

The authenticated `fetch` integrates seamlessly:

```javascript
import { fetch } from '@inrupt/solid-client-authn-browser';
import {
  getSolidDataset,
  saveSolidDatasetAt,
  getContainedResourceUrlAll
} from '@inrupt/solid-client';

// Read protected data
const dataset = await getSolidDataset(podUrl, { fetch });

// Write protected data
await saveSolidDatasetAt(resourceUrl, dataset, { fetch });

// List container contents
const container = await getSolidDataset(containerUrl, { fetch });
const contents = getContainedResourceUrlAll(container);
```

## Troubleshooting

### "Not logged in" after redirect

Make sure `handleIncomingRedirect()` is called on page load:

```javascript
// Must be called before checking session
await handleIncomingRedirect();
```

### CORS errors

The IdP must allow your origin. For development, use `http://localhost:xxxx`.

### Session not persisting

Enable session restoration:

```javascript
await handleIncomingRedirect({ restorePreviousSession: true });
```

## Links

- **npm (browser):** [@inrupt/solid-client-authn-browser](https://www.npmjs.com/package/@inrupt/solid-client-authn-browser)
- **npm (node):** [@inrupt/solid-client-authn-node](https://www.npmjs.com/package/@inrupt/solid-client-authn-node)
- **Docs:** [Inrupt Authentication Docs](https://docs.inrupt.com/developer-tools/javascript/client-libraries/authentication/)
- **GitHub:** [inrupt/solid-client-authn-js](https://github.com/inrupt/solid-client-authn-js)

## See Also

- [solid-client](/projects/solid-client) — Data operations library
- [Authentication](/guides/authentication) — All auth methods
- [Building Solid Apps](/guides/building-solid-apps) — Complete tutorial
- [Solid-OIDC](https://solid.github.io/solid-oidc/) — Specification
