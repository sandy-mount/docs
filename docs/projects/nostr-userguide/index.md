---
title: Nostr User Guide
description: Getting started with Nostr for users
---

# Nostr User Guide

**Everything you need to start using Nostr.** From creating keys to finding your community.

## What is Nostr?

Nostr is a simple, open protocol for decentralized social networking:

- **No central server** — Messages spread across relays
- **Your keys, your identity** — Cryptographic ownership
- **Censorship-resistant** — No one can ban you
- **Interoperable** — Many clients, same network

## Getting Started

### 1. Get a Client

Popular Nostr clients:

| Platform | Client | Link |
|----------|--------|------|
| iOS | Damus | [damus.io](https://damus.io) |
| Android | Amethyst | [Play Store](https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst) |
| Web | Snort | [snort.social](https://snort.social) |
| Web | Primal | [primal.net](https://primal.net) |

### 2. Create Your Keys

When you sign up, you'll get:

- **npub** — Your public key (share this!)
- **nsec** — Your private key (keep secret!)

:::warning
Your nsec is your identity. If you lose it, you lose your account. If someone steals it, they become you. Back it up securely!
:::

### 3. Set Up Your Profile

Add your:
- Display name
- Bio
- Profile picture
- Banner image

### 4. Find People

- Search by npub or NIP-05 (alice@example.com)
- Browse trending hashtags
- Check who people you know follow

### 5. Start Posting

Just write! Your posts go to relays and anyone following you will see them.

## Key Concepts

### Relays

Relays store and forward messages. Your client connects to multiple relays for redundancy.

### Zaps ⚡

Send Bitcoin micropayments to posts you like via Lightning Network.

### NIP-05 Verification

A domain-based identity like `alice@example.com` that maps to your npub.

## Links

- **Full Guide:** [nostrcg.github.io/userguide](https://nostrcg.github.io/userguide/)
- **Nostr.com:** [nostr.com](https://nostr.com)

## See Also

- [Nostr Protocol](/protocols/nostr) — Technical details
- [Nostr Dev Guide](/projects/nostr-devguide) — For developers
- [Noskey](/projects/noskey) — CLI key generator
