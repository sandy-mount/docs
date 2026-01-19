---
title: Shopstr
description: Nostr marketplace for Bitcoin commerce
---

# Shopstr

**Decentralized marketplace on Nostr.** Buy and sell anything with Bitcoin, anywhere, anonymously.

## Overview

Shopstr is a global, permissionless marketplace built on Nostr. It enables peer-to-peer commerce using Bitcoin Lightning and Cashu for payments, with no central authority controlling what can be sold or who can participate.

## Key Features

### Decentralized Commerce

```
┌─────────────────────────────────────────────────────────┐
│                    Shopstr                               │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Traditional Marketplace:                               │
│  Seller → Platform → Buyer                              │
│           │                                              │
│           ├── Platform takes cut                        │
│           ├── Platform can ban you                      │
│           └── Platform sees everything                  │
│                                                          │
│  Shopstr:                                               │
│  Seller ────────────────► Buyer                         │
│          │                                               │
│          ├── No middleman                               │
│          ├── Your keys, your shop                       │
│          └── Private transactions                       │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Privacy-First Payments

| Payment Method | Privacy Level |
|----------------|---------------|
| **Cashu** | High (ecash tokens) |
| **Lightning** | Medium |

Cashu tokens are delivered via encrypted DMs (NIP-04), so no third party sees your transactions.

### NIP-99 Listings

Products are Nostr events:

```json
{
  "kind": 30402,
  "tags": [
    ["d", "unique-product-id"],
    ["title", "Vintage Bitcoin Magazine"],
    ["summary", "First edition, mint condition"],
    ["price", "50000", "sats"],
    ["location", "Berlin, Germany"],
    ["image", "https://..."],
    ["t", "collectible"],
    ["t", "bitcoin"]
  ],
  "content": "Full product description..."
}
```

### Browse and Shop

```
┌─────────────────────────────────────────────────────────┐
│                  Shopstr Marketplace                     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  🔍 Search products...                                  │
│                                                          │
│  Categories: [All] [Art] [Tech] [Services] [Merch]     │
│                                                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │   🖼️       │  │   👕       │  │   📚       │    │
│  │  Bitcoin   │  │  Nostr     │  │  Bitcoin   │    │
│  │  Artwork   │  │  T-Shirt   │  │  Book      │    │
│  │            │  │            │  │            │    │
│  │  50k sats  │  │  25k sats  │  │  15k sats  │    │
│  │  @artist   │  │  @shop     │  │  @author   │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
│                                                          │
│  [Load More]                                            │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## For Sellers

### Creating a Shop

1. Login with Nostr key
2. Set up your profile
3. Add product listings
4. Configure payment (Cashu/Lightning)
5. Start selling

### Listing Products

| Field | Description |
|-------|-------------|
| **Title** | Product name |
| **Description** | Full details |
| **Price** | Amount in sats |
| **Images** | Product photos |
| **Categories** | Tags for discovery |
| **Location** | For local pickup |
| **Shipping** | Delivery options |

### Receiving Payments

```
Buyer purchases item
        │
        ▼
Cashu tokens sent via DM
        │
        ▼
Seller redeems tokens
        │
        ▼
Ships product / delivers service
```

No platform fees. 100% of payment goes to seller.

## For Buyers

### Purchasing

1. Browse marketplace
2. Find product
3. Contact seller via DM
4. Agree on terms
5. Send payment (Cashu/Lightning)
6. Receive product

### Payment Privacy

With Cashu:
- Tokens are like digital cash
- Sent encrypted via Nostr DMs
- Seller can't see your identity
- No transaction trail

## Technical Details

### Supported NIPs

| NIP | Feature |
|-----|---------|
| NIP-04 | Encrypted DMs |
| NIP-07 | Browser signing |
| NIP-09 | Event deletion |
| NIP-99 | Classifieds |

### Stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js |
| UI | NextUI |
| Backend | Nostr relays |
| Payments | Cashu, Lightning |

### PWA

Install as Progressive Web App:
- Add to home screen
- Works offline
- App-like experience

## Privacy Options

### Tor Hidden Service

Access Shopstr via Tor for additional privacy:
- .onion address available
- Hide your IP
- Bypass censorship

## Achievements

- **2.5M+ sats** in transactions facilitated
- **Nostrasia Hackathon** — Won Marketplaces track
- **PlebLab Top Builder** — Finalist
- **First Cashu marketplace** — Pioneer in ecash commerce

## Use Cases

### Artisans & Creators

- Sell art, crafts, digital goods
- Direct relationship with customers
- No platform censorship

### Services

- Consulting
- Development work
- Design services

### Physical Goods

- Merchandise
- Collectibles
- Local items with pickup

### Digital Products

- eBooks
- Software
- NFTs / Digital art

## Comparison

| Feature | Shopstr | eBay | Amazon |
|---------|---------|------|--------|
| Fees | 0% | ~13% | ~15% |
| Privacy | High | Low | Low |
| Censorship | Resistant | Platform rules | Platform rules |
| Payments | Bitcoin | Fiat | Fiat |
| KYC | None | Required | Required |
| Open source | Yes | No | No |

## Links

- **Website:** [shopstr.store](https://shopstr.store/)
- **GitHub:** [shopstr-eng/shopstr](https://github.com/shopstr-eng/shopstr)
- **NIP-99:** [Classifieds spec](https://github.com/nostr-protocol/nips/blob/master/99.md)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Alby](/projects/alby) — Lightning payments
- [Cashu](/projects/cashu) — Ecash protocol
- [Amber](/projects/amber) — Mobile signing
