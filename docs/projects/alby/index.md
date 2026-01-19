---
title: Alby
description: Bitcoin Lightning wallet and Nostr browser extension
---

# Alby

**Bitcoin Lightning wallet and Nostr signer in your browser.** Send sats and sign events without exposing your keys.

## Overview

Alby is a browser extension that brings Lightning payments and Nostr to the web. It acts as both a Bitcoin wallet and a Nostr key manager, enabling seamless payments and authentication across compatible websites.

## Key Features

### Lightning Payments

```
┌─────────────────────────────────────────────────────────┐
│                    Alby Extension                        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  💰 Balance: 50,000 sats                                │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐│
│  │  Website requests payment                           ││
│  │  ⚡ 1,000 sats to merchant                          ││
│  │                                                      ││
│  │  [Approve]  [Deny]  [Set Budget]                   ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
└─────────────────────────────────────────────────────────┘
```

- **WebLN support** — Pay invoices from any WebLN-enabled site
- **LNURL** — Auth, pay, and withdraw
- **QR scanning** — Pay Lightning invoices
- **Budgets** — Set spending limits per site
- **On-chain** — Swap to on-chain via deezy.io

### Nostr Integration (NIP-07)

Sign Nostr events without sharing your nsec:

```javascript
// Website requests signature
const pubkey = await window.nostr.getPublicKey();
const signedEvent = await window.nostr.signEvent(event);

// Alby handles the signing
// Website never sees your private key
```

Features:
- **Multiple accounts** — Separate Nostr identities
- **Per-site permissions** — Control which sites can sign
- **Event filtering** — Approve by event kind
- **Key derivation** — Generate keys from seed

### Wallet Flexibility

| Wallet Type | Description |
|-------------|-------------|
| **Alby Wallet** | Custodial, instant setup |
| **Alby Hub** | Self-custodial Lightning node |
| **LND** | Connect your own node |
| **Core Lightning** | Connect your own node |
| **Umbrel** | One-click connection |
| **Start9** | Embassy integration |
| **NWC** | Any NWC-compatible wallet |

### Budgets & Permissions

Set granular controls:

```
Site: primal.net
├── Lightning budget: 1,000 sats/day
├── Nostr signing: Allowed
│   ├── Kind 1 (posts): Auto-approve
│   ├── Kind 4 (DMs): Ask each time
│   └── Kind 7 (reactions): Auto-approve
└── Session: Remember for 7 days
```

## Installation

### Browser Extensions

| Browser | Link |
|---------|------|
| **Chrome** | [Chrome Web Store](https://chromewebstore.google.com/detail/alby-bitcoin-wallet-for-l/iokeahhehimjnekafflcihljlcjccdbe) |
| **Firefox** | [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/alby/) |
| **Edge** | Chrome Web Store (compatible) |
| **Brave** | Chrome Web Store (compatible) |

### Mobile

- **Alby Go** — Companion mobile app for payments

## Usage

### Initial Setup

1. Install extension
2. Create account or connect existing wallet
3. Import Nostr key or generate new one
4. Start using compatible sites

### Paying with Lightning

```
1. Visit WebLN-enabled site
2. Click "Pay with Lightning"
3. Alby popup shows amount
4. Approve payment
5. Done!
```

### Signing Nostr Events

```
1. Visit Nostr client (Snort, Coracle, etc.)
2. Click "Login with Extension"
3. Alby requests permission
4. Grant access
5. Events sign automatically (per your settings)
```

### Tipping on Social Media

Alby adds tipping buttons to:
- Twitter/X
- YouTube
- GitHub
- Reddit
- Substack

## Alby Hub

Self-custodial Lightning node for power users:

```
┌─────────────────────────────────────────────────────────┐
│                      Alby Hub                            │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Your own Lightning node                                │
│  ├── Full custody of funds                              │
│  ├── Channel management                                 │
│  ├── NWC connections                                    │
│  └── Works with browser extension                       │
│                                                          │
│  Deploy on:                                             │
│  ├── Umbrel                                             │
│  ├── Start9                                             │
│  ├── VPS                                                │
│  └── Local machine                                      │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## NWC (Nostr Wallet Connect)

Connect any NWC wallet to Alby extension:

```javascript
// NWC connection string
nostr+walletconnect://pubkey?relay=wss://relay&secret=secret

// Extension uses this to communicate with wallet
// Payments route through your connected wallet
```

## Security

| Feature | Description |
|---------|-------------|
| **Local storage** | Keys encrypted on device |
| **No key export** | Private keys never leave extension |
| **Per-site budgets** | Limit potential exposure |
| **Permission prompts** | User approval required |
| **Open source** | Auditable code |

## Supported Platforms

### Lightning

- Any WebLN website
- LNURL-enabled services
- Lightning Address payments

### Nostr

- Snort
- Coracle
- Nostrudel
- Primal (web)
- Habla
- Any NIP-07 client

## Recent Updates (2025)

- **Onchain swaps** — Via deezy.io integration
- **Faster injection** — Improved window.nostr/webln
- **NWC enhancements** — View pending/failed transactions
- **Multiple languages** — Sinhalese, Tamil, Russian

## Comparison

| Feature | Alby | nos2x | Flamingo |
|---------|------|-------|----------|
| Lightning | Yes | No | No |
| Nostr signing | Yes | Yes | Yes |
| Multi-account | Yes | Yes | No |
| Self-custody option | Yes | N/A | N/A |
| Open source | Yes | Yes | Yes |

## Links

- **Website:** [getalby.com](https://getalby.com/)
- **GitHub:** [getAlby/lightning-browser-extension](https://github.com/getAlby/lightning-browser-extension)
- **Guides:** [guides.getalby.com](https://guides.getalby.com/)
- **Alby Hub:** [albyhub.com](https://albyhub.com/)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Amber](/projects/amber) — Android signer
- [Snort](/projects/snort) — Web client
- [Habla](/projects/habla) — Long-form content
