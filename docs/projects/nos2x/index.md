---
title: nos2x
description: Simple Nostr browser extension
---

# nos2x

**Simple NIP-07 signer.** Lightweight browser extension for Nostr key management.

## Overview

nos2x is a minimal browser extension that implements NIP-07, allowing you to sign Nostr events from any web client without exposing your private key. It does one thing well: secure key storage and signing.

## Key Features

### Minimal & Focused

```
┌─────────────────────────────────────────────────────────┐
│                   nos2x Philosophy                       │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Alby:                                                  │
│  ├── Lightning wallet                                   │
│  ├── Nostr signing                                      │
│  ├── Budgets                                            │
│  ├── Tips                                               │
│  └── Many features                                      │
│                                                          │
│  nos2x:                                                 │
│  └── Nostr signing                                      │
│                                                          │
│  If you just need signing, nos2x is enough.            │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### NIP-07 Implementation

```javascript
// Website requests signature
const pubkey = await window.nostr.getPublicKey();
const signed = await window.nostr.signEvent(event);
const encrypted = await window.nostr.nip04.encrypt(pubkey, text);
const decrypted = await window.nostr.nip04.decrypt(pubkey, ciphertext);
```

nos2x injects `window.nostr` into every page, providing:
- Public key retrieval
- Event signing
- NIP-04 encryption/decryption

### Permission Control

```
┌─────────────────────────────────────────────────────────┐
│                Permission Prompt                         │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  🔑 nos2x                                               │
│                                                          │
│  snort.social wants to:                                 │
│  • Get your public key                                  │
│  • Sign events                                          │
│                                                          │
│  [Allow]  [Deny]  [Always Allow]                        │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

Options:
- **Allow** — One-time permission
- **Deny** — Block this request
- **Always Allow** — Remember for this site

## Installation

### Chrome / Brave / Edge

[Chrome Web Store](https://chrome.google.com/webstore/detail/nos2x/kpgefcfmnafjgpblomihpgmejjdanjjp)

### Firefox

[Firefox Add-ons](https://addons.mozilla.org/addon/nos2x-fox/)

## Setup

### Import Existing Key

1. Click extension icon
2. Enter your nsec (or hex private key)
3. Save

### View Public Key

1. Click extension icon
2. Copy npub or hex pubkey
3. Share with others

## Usage

### On Nostr Clients

1. Visit a NIP-07 client (Snort, Coracle, etc.)
2. Click "Login with Extension"
3. nos2x prompts for permission
4. Approve to connect
5. Signed in without exposing nsec

### Supported Actions

| Action | NIP-07 Method |
|--------|---------------|
| Get pubkey | `getPublicKey()` |
| Sign event | `signEvent(event)` |
| Encrypt (NIP-04) | `nip04.encrypt()` |
| Decrypt (NIP-04) | `nip04.decrypt()` |
| Get relays | `getRelays()` |

## Security

### What nos2x Does

- Stores nsec in browser extension storage
- Signs events when you approve
- Never sends nsec to websites

### What nos2x Doesn't Do

- Lightning payments
- Budgets or spending limits
- Remote signing (NIP-46)

### Best Practices

1. **Use strong browser security** — Extension storage isn't bulletproof
2. **Verify domains** — Check you're on the real site
3. **Review permissions** — Don't auto-allow untrusted sites
4. **Consider hardware** — For high-value keys, consider alternatives

## Comparison

| Feature | nos2x | Alby | Amber |
|---------|-------|------|-------|
| Platform | Browser | Browser | Android |
| NIP-07 | Yes | Yes | N/A |
| Lightning | No | Yes | No |
| Complexity | Minimal | Full-featured | Moderate |
| Open source | Yes | Yes | Yes |

## When to Use nos2x

### Good For

- Simple signing needs
- Users who don't need Lightning
- Minimal attack surface preference
- Quick setup

### Consider Alternatives

- If you want Lightning → Alby
- If you want mobile → Amber
- If you want remote signing → nsec.app

## Technical Details

### Storage

Keys stored in:
```
chrome.storage.local
```

Encrypted by browser's extension storage.

### Permissions

Extension requests minimal permissions:
- `storage` — Save your key
- `activeTab` — Inject window.nostr

### Source Code

Fully open source for audit:
```
github.com/fiatjaf/nos2x
```

## Links

- **Chrome:** [nos2x on Chrome Web Store](https://chrome.google.com/webstore/detail/nos2x/kpgefcfmnafjgpblomihpgmejjdanjjp)
- **Firefox:** [nos2x-fox on Firefox Add-ons](https://addons.mozilla.org/addon/nos2x-fox/)
- **GitHub:** [fiatjaf/nos2x](https://github.com/fiatjaf/nos2x)
- **NIP-07:** [nips.nostr.com/07](https://nips.nostr.com/07)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Alby](/projects/alby) — Full-featured alternative
- [Amber](/projects/amber) — Android signer
- [Snort](/projects/snort) — Web client
