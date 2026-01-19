---
title: Cashu
description: Chaumian ecash for Bitcoin
---

# Cashu

**Ecash protocol for Bitcoin.** Private, instant, and offline-capable digital cash.

## Overview

Cashu is a free and open-source Chaumian ecash protocol built on Bitcoin. It enables private, instant transactions using blinded tokens that can be sent without revealing sender identity to the mint.

## How It Works

```
┌─────────────────────────────────────────────────────────┐
│                    Cashu Flow                            │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  1. Deposit                                             │
│     User pays Lightning invoice → Receives tokens       │
│                                                          │
│  2. Send                                                │
│     User A sends tokens to User B (just a string!)     │
│     Mint doesn't know who sent to whom                 │
│                                                          │
│  3. Receive                                             │
│     User B redeems tokens at mint                       │
│     Gets new tokens (breaks linkability)               │
│                                                          │
│  4. Withdraw                                            │
│     User requests Lightning payout                      │
│     Mint pays invoice, burns tokens                     │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Key Features

### Privacy

```
Traditional:
Alice ──► Bank ──► Bob
Bank sees: Alice sent $10 to Bob

Cashu:
Alice ──► Mint ──► Bob
Mint sees: Someone deposited, someone withdrew
Cannot link: Alice to Bob
```

Blinded signatures ensure the mint cannot track token flow.

### Instant & Offline

| Feature | Description |
|---------|-------------|
| **Instant** | No blockchain confirmation |
| **Offline** | Send tokens without internet |
| **Free** | No transaction fees |

Tokens are just strings — send via text, QR, Nostr DM.

### Token Format

```
cashuAeyJ0b2tlbiI6W3sicHJvb2ZzIjpbeyJpZCI6IjAwY...
```

A Cashu token is a base64-encoded string containing:
- Mint URL
- Proofs (blinded signatures)
- Amount

## Protocol

### Nut Specifications

Cashu is defined by NUTs (Notation, Usage, and Terminology):

| NUT | Feature |
|-----|---------|
| NUT-00 | Token format |
| NUT-01 | Mint public keys |
| NUT-02 | Keysets |
| NUT-03 | Swap tokens |
| NUT-04 | Mint tokens |
| NUT-05 | Melt tokens |
| NUT-06 | Mint info |
| NUT-07 | Token state |
| NUT-08 | Lightning payments |

### API Endpoints

```
POST /v1/mint/quote/bolt11    # Get minting quote
POST /v1/mint/bolt11          # Mint tokens
POST /v1/swap                 # Swap tokens
POST /v1/melt/quote/bolt11    # Get melting quote
POST /v1/melt/bolt11          # Melt (withdraw)
GET  /v1/keys                 # Mint public keys
GET  /v1/info                 # Mint information
```

## Using Cashu

### Wallets

| Wallet | Platform |
|--------|----------|
| **Nutstash** | Web |
| **eNuts** | Mobile |
| **Minibits** | Mobile |
| **Cashu.me** | Web |
| **Nutshell** | CLI |

### Nostr Integration

Cashu works great with Nostr:
- Send tokens via DMs (NIP-04)
- Zap alternatives
- Shopstr payments
- Ecash tips

## For Developers

### JavaScript

```javascript
import { CashuMint, CashuWallet } from '@cashu/cashu-ts';

// Connect to mint
const mint = new CashuMint('https://mint.example.com');
const wallet = new CashuWallet(mint);

// Get minting quote
const quote = await wallet.getMintQuote(1000);

// After paying Lightning invoice...
const tokens = await wallet.mintTokens(1000, quote.quote);

// Send tokens (just a string)
const tokenString = wallet.getEncodedToken(tokens);

// Receive tokens
const received = await wallet.receive(tokenString);
```

### Running a Mint

```bash
# Using Nutshell
git clone https://github.com/cashubtc/nutshell.git
cd nutshell

# Configure
cp .env.example .env
# Edit .env with your LN node details

# Run
docker-compose up
```

### Mint Backends

| Backend | Description |
|---------|-------------|
| **LND** | Lightning Network Daemon |
| **CLN** | Core Lightning |
| **LNbits** | Account system |

## Trust Model

```
┌─────────────────────────────────────────────────────────┐
│                   Trust Model                            │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  What mint CAN do:                                      │
│  ├── Refuse to honor tokens (rug pull)                 │
│  └── Inflate supply (print fake tokens)                │
│                                                          │
│  What mint CANNOT do:                                   │
│  ├── See who sent to whom                              │
│  ├── Link deposits to withdrawals                      │
│  └── Censor specific users                             │
│                                                          │
│  Mitigations:                                           │
│  ├── Use reputable mints                               │
│  ├── Don't hold large balances                         │
│  └── Use multiple mints                                │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Comparison

| Feature | Cashu | Lightning | On-chain |
|---------|-------|-----------|----------|
| Privacy | High | Medium | Low |
| Speed | Instant | Instant | ~10min |
| Offline | Yes | No | No |
| Trust | Mint | Routing | Miners |
| Fees | None | Small | Variable |

## Use Cases

### Private Payments

Send money without revealing your identity.

### Nostr Tipping

Tip content creators privately via DMs.

### Marketplaces

Shopstr uses Cashu for private commerce.

### Gift Cards

Send digital cash to anyone with a link.

## Links

- **Website:** [cashu.space](https://cashu.space/)
- **Protocol:** [github.com/cashubtc/nuts](https://github.com/cashubtc/nuts)
- **Nutshell:** [github.com/cashubtc/nutshell](https://github.com/cashubtc/nutshell)
- **cashu-ts:** [github.com/cashubtc/cashu-ts](https://github.com/cashubtc/cashu-ts)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Shopstr](/projects/shopstr) — Marketplace using Cashu
- [Alby](/projects/alby) — Lightning wallet
- [Amber](/projects/amber) — Nostr signing
