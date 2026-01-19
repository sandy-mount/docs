---
title: Noskey
description: Generate Nostr keys from CLI
---

# Noskey

**Generate Nostr keys from the command line.** One command creates nsec/npub, Bitcoin addresses, DIDs, and SSH keys.

## Overview

Noskey is a comprehensive key generation tool that leverages the fact that Nostr keys (secp256k1) are compatible with Bitcoin, Taproot, and can derive other key formats. One seed, many identities.

## Quick Start

```bash
# Generate a new identity
npx noskey

# Or install globally
npm install -g noskey
noskey
```

## Output Formats

A single `noskey` command generates:

| Format | Description |
|--------|-------------|
| **Private Key (hex)** | Raw 32-byte secret key |
| **nsec** | Bech32-encoded private key (NIP-19) |
| **Public Key (hex)** | Compressed secp256k1 public key |
| **npub** | Bech32-encoded public key (NIP-19) |
| **did:nostr** | Decentralized identifier |
| **Bitcoin Address** | P2PKH mainnet address |
| **Bitcoin Testnet** | Testnet3 address |
| **Taproot (mainnet)** | bc1p... address |
| **Taproot (testnet)** | tb1p... address |
| **ed25519 Public Key** | For systems using ed25519 |
| **SSH Public Key** | OpenSSH format public key |
| **SSH Private Key PEM** | OpenSSH format private key |
| **pubky Public Key** | For the Pubky protocol |

## CLI Options

```bash
Usage: noskey [options]

Options:
  --version        Show version number
  -v, --vanity     Generate vanity key (prefix match)
  -p, --priv       Import from hex private key
  -s, --nsec       Import from nsec
  -h, --help       Show help
```

## Examples

### Generate New Keys
```bash
$ npx noskey

Private Key: 3b4c5d6e7f...
nsec: nsec1...
Public Key: 02abc123...
npub: npub1...
did:nostr: did:nostr:z6Mk...
Bitcoin: 1A1zP1...
Taproot: bc1p...
SSH: ssh-ed25519 AAAA...
```

### Vanity Keys
Generate a key with a custom prefix:
```bash
# Find an npub starting with "npub1sat"
npx noskey -v sat

# This may take a while depending on prefix length
```

### Import Existing Key
```bash
# From hex private key
npx noskey -p 3b4c5d6e7f8a9b0c...

# From nsec
npx noskey -s nsec1abc123...
```

## Use Cases

### Nostr Identity
Your npub is your portable identity across all Nostr clients.

### Bitcoin Receiving
Use the generated Bitcoin/Taproot addresses to receive funds with the same key.

### SSH Authentication
Use the generated SSH key for Git or server access.

### DID Identity
The did:nostr format provides a decentralized identifier compatible with [DID standards](/protocols/did).

### Development
Quickly generate test keys for development and testing.

## Security Notes

- **Store nsec securely** — Anyone with your nsec controls your identity
- **Never share nsec** — Only share your npub
- **Consider hardware wallets** — For high-value keys, use a hardware signer
- **Backup carefully** — Lost keys cannot be recovered

## The Math

Nostr uses secp256k1 (same as Bitcoin):
1. Generate 32 random bytes (private key)
2. Multiply by generator point G (public key)
3. Encode in various formats

This is why one key works across Nostr, Bitcoin, and other secp256k1 systems.

## Links

- **npm:** [noskey](https://www.npmjs.com/package/noskey)
- **GitHub:** [melvincarvalho/noskey](https://github.com/melvincarvalho/noskey)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol using these keys
- [DID Protocol](/protocols/did) — Decentralized identifiers
- [did:nostr](/projects/did-nostr) — DID method for Nostr keys
- [Authentication](/guides/authentication) — Using keys for auth
