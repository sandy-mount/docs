---
title: strfry
description: High-performance C++ Nostr relay
---

# strfry

**The most efficient Nostr relay.** High-performance C++ implementation using LMDB.

## Overview

strfry is designed for large-scale public relays. Written in C++, it offers exceptional performance while maintaining low resource usage — it even runs great on a Raspberry Pi 5.

## Key Features

### Performance
- **LMDB storage** — Memory-mapped database for fast reads
- **Low memory footprint** — Efficient even on constrained hardware
- **High throughput** — Handles thousands of concurrent connections

### Negentropy Sync

strfry's most distinctive feature is set reconciliation using the Negentropy protocol:

```
┌─────────────┐                    ┌─────────────┐
│   Relay A   │                    │   Relay B   │
│             │                    │             │
│  Events:    │   Negentropy       │  Events:    │
│  {1,2,3,5}  │◄──────────────────►│  {1,2,4,5}  │
│             │   Sync Protocol    │             │
└─────────────┘                    └─────────────┘
              │                    │
              │  Only transfer     │
              │  missing events    │
              │  (3 → B, 4 → A)    │
              └────────────────────┘
```

Benefits:
- **Bandwidth efficient** — Only transfers differences
- **Works with filters** — Sync arbitrary nostr filter results
- **Relay-to-relay** — Synchronize relays efficiently
- **Client sync** — Clients can use it too

### Event Compression

```bash
# Compress events using zstd dictionaries
strfry dict --compress ./events.json

# Events remain efficiently queryable
# Only raw JSON is compressed, not indices
```

### Stream Router

Handle multiple relay streams in one process:

```bash
strfry router --config router.conf
```

Features:
- Pre-filter events with nostr filters
- Plugin support for custom logic
- Efficient multi-stream handling

## Installation

### From Source

```bash
git clone https://github.com/hoytech/strfry.git
cd strfry
git submodule update --init
make setup-golpe
make -j4

./strfry relay
```

### Docker

```bash
docker run -p 7777:7777 -v ./strfry-data:/app/strfry-db \
  dockurr/strfry
```

## Configuration

```yaml
# strfry.conf

relay:
  bind: 0.0.0.0
  port: 7777

  info:
    name: "My Relay"
    description: "A strfry relay"
    contact: "admin@example.com"

  # Performance tuning
  maxWebsocketPayloadSize: 131072
  autoPingSeconds: 30
  enableTcpKeepalive: true

  # Query limits
  queryTimesliceBudgetMicroseconds: 5000
  maxFilterLimit: 1000
  maxSubsPerConnection: 50

  # Write policy
  writePolicy:
    plugin: ""  # Optional plugin for custom logic
```

## Plugins

strfry supports plugins for custom event processing:

```bash
#!/bin/bash
# write-policy.sh - Accept only kind 1 events

read event
kind=$(echo "$event" | jq -r '.event.kind')

if [ "$kind" = "1" ]; then
  echo '{"action":"accept"}'
else
  echo '{"action":"reject","msg":"only kind 1 allowed"}'
fi
```

Configure in strfry.conf:
```yaml
writePolicy:
  plugin: "./write-policy.sh"
```

## Commands

```bash
# Start relay
strfry relay

# Export events
strfry export > events.jsonl

# Import events
strfry import < events.jsonl

# Sync with another relay
strfry sync wss://other-relay.example

# Compress events
strfry dict --compress

# Stream router
strfry router --config router.conf
```

## Performance Tuning

### For High Traffic

```yaml
# Increase connection limits
maxSubsPerConnection: 100
maxFilterLimit: 5000

# Tune query budget
queryTimesliceBudgetMicroseconds: 10000
```

### For Low Memory

```yaml
# Reduce buffer sizes
maxWebsocketPayloadSize: 65536

# Lower connection limits
maxSubsPerConnection: 20
```

## Comparison

| Feature | strfry | nostream | rnostr |
|---------|--------|----------|--------|
| Language | C++ | TypeScript | Rust |
| Storage | LMDB | PostgreSQL | Various |
| Negentropy | Yes | No | No |
| Memory | Low | Medium | Low |
| Best for | Large public | Easy setup | Performance |

## Links

- **GitHub:** [hoytech/strfry](https://github.com/hoytech/strfry)
- **Docker:** [dockurr/strfry](https://github.com/dockur/strfry)
- **Negentropy:** [Protocol docs](https://github.com/hoytech/strfry/blob/master/docs/negentropy.md)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Production Deployment](/guides/production-deployment) — Deployment guide
- [Nosdav](/projects/nosdav) — Storage with Nostr auth
