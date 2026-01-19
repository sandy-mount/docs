---
title: LNbits
description: Lightning wallet and extension platform
---

# LNbits

**Free and open-source Lightning wallet.** Modular, extensible, and self-hostable.

## Overview

LNbits is a Lightning Network wallet system that can run on top of any Lightning funding source. It provides a simple interface and powerful extensions for building Lightning-powered applications.

## Key Features

### Multi-Wallet System

```
┌─────────────────────────────────────────────────────────┐
│                    LNbits                                │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Funding Source (your node or custodial):               │
│  └── Total: 1,000,000 sats                              │
│                                                          │
│  Your Wallets:                                          │
│  ├── 💼 Business    500,000 sats                       │
│  ├── 👤 Personal    300,000 sats                       │
│  └── 🎮 Gaming      200,000 sats                       │
│                                                          │
│  Each wallet has its own API keys                       │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Extension Marketplace

| Extension | Purpose |
|-----------|---------|
| **Bolt Cards** | NFC payment cards |
| **LNURLp** | Receive payments |
| **SatsPay** | Payment pages |
| **Nostr Market** | NIP-15 marketplace |
| **TPoS** | Point of sale |
| **Events** | Ticketing |
| **Cashu** | Ecash mints |

### Funding Sources

| Source | Type |
|--------|------|
| **LND** | Self-custodial |
| **CLN** | Self-custodial |
| **Alby** | Custodial |
| **LNPay** | Custodial |
| **OpenNode** | Custodial |

## Self-Hosting

### Docker

```yaml
version: '3'
services:
  lnbits:
    image: lnbitsdocker/lnbits:latest
    ports:
      - "5000:5000"
    environment:
      LNBITS_BACKEND_WALLET_CLASS: LndWallet
      LND_GRPC_ENDPOINT: lnd:10009
    volumes:
      - ./data:/app/data
```

### Funding Source Config

```env
# For LND
LNBITS_BACKEND_WALLET_CLASS=LndWallet
LND_GRPC_ENDPOINT=127.0.0.1:10009
LND_GRPC_CERT=/path/to/tls.cert
LND_GRPC_MACAROON=/path/to/admin.macaroon
```

## API

```bash
# Get wallet balance
curl -H "X-Api-Key: your-admin-key" \
  https://lnbits.example.com/api/v1/wallet

# Create invoice
curl -X POST \
  -H "X-Api-Key: your-invoice-key" \
  -d '{"amount": 1000, "memo": "test"}' \
  https://lnbits.example.com/api/v1/payments
```

## Nostr Integration

Extensions for Nostr:
- **Nostr Market** — NIP-15 marketplace
- **Nostr Relay** — Host a relay
- **NWC** — Nostr Wallet Connect

## Links

- **Website:** [lnbits.com](https://lnbits.com/)
- **GitHub:** [lnbits/lnbits](https://github.com/lnbits/lnbits)
- **Demo:** [demo.lnbits.com](https://demo.lnbits.com/)

## See Also

- [Alby](/projects/alby) — Browser extension
- [Cashu](/projects/cashu) — Ecash via LNbits
- [Nostr Protocol](/protocols/nostr) — Social integration
