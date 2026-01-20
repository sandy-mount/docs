---
title: GitStr
description: Git patches over Nostr
---

# GitStr

**Git over Nostr.** Send and receive patches via the protocol.

## Overview

GitStr enables distributed version control by sending and receiving Git patches over Nostr, implementing NIP-34. Censorship-resistant code collaboration.

## Key Features

### Distributed Patches

```
┌─────────────────────────────────────────────────────────────────┐
│                       GitStr Workflow                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Traditional Git:                                              │
│   Push ──► GitHub ──► Pull Request ──► Central server          │
│                                                                 │
│   GitStr:                                                       │
│   Patch ──► Nostr event ──► Relays ──► Anyone can receive      │
│                                                                 │
│   No central server • No gatekeeping • Censorship-resistant    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Core Features

| Feature | Description |
|---------|-------------|
| **Send patches** | Publish Git patches to Nostr |
| **Receive patches** | Download from relays |
| **NIP-34** | Standard patch format |
| **Decentralized** | No central server |
| **CLI tool** | Git integration |

## Usage

### Initialize Repository

```bash
git str init -r wss://relay.example.com
```

### Download Patches

```bash
git str download
```

### Send Patches

```bash
git send <commit>
```

### Patch Storage

Patches stored in:
```
.git/str/patches/
```

## NIP-34 Format

Patches published as Nostr events following NIP-34:
- Event kind for patches
- Metadata tags for context
- Relay hints for discovery

## Use Cases

1. **Open source** — Accept contributions via Nostr
2. **Censorship resistance** — Code that can't be taken down
3. **Distributed teams** — No single point of failure
4. **Backup** — Patches replicated across relays

## Comparison

| Feature | GitStr | GitHub | Email patches |
|---------|--------|--------|---------------|
| Protocol | Nostr | Proprietary | SMTP |
| Censorship | Resistant | Platform | Provider |
| Discovery | Relays | GitHub search | Manual |
| Identity | Nostr keys | GitHub account | Email |

## Installation

```bash
go install github.com/fiatjaf/gitstr/cmd/git-str@latest
```

## Related Projects

- **NostrGit** — GitHub-style interface
- **git-remote-nostr** — Git remote helper
- **nostrgit** — Alternative implementation

## Links

- **GitHub:** [fiatjaf/gitstr](https://github.com/fiatjaf/gitstr)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [NostrGit](/projects/nostrgit) — Git on Nostr
- [Hostr](/projects/hostr) — Web hosting on Nostr
