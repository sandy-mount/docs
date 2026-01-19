---
title: BlockTrails
description: Bitcoin-anchored audit trails
---

# BlockTrails

**Provably safe agents via Bitcoin state anchoring.** Full audit trail. Trust through time.

## The Problem

How do you trust an AI agent? Traditional approaches rely on:

- **Reputation** — But reputation can be gamed
- **Certification** — But who certifies the certifiers?
- **Promises** — But promises can be broken

BlockTrails offers a different approach: **trust through time**. An agent that has behaved safely for months, with cryptographic proof, is more trustworthy than one making promises.

## How It Works

Agent behavior is cryptographically anchored to Bitcoin:

```
┌──────────────────────────────────────────────────────────┐
│                     Agent Action Log                      │
├──────────────────────────────────────────────────────────┤
│  Timestamp: 2025-01-19T12:00:00Z                         │
│  Agent: did:nostr:npub1abc123...                         │
│  Action: read_file                                        │
│  Resource: https://alice.pod/documents/notes.ttl         │
│  Result: success                                          │
│  Hash: sha256:abc123...                                   │
└──────────────────────────────────────────────────────────┘
                           │
                           ▼
              ┌────────────────────────┐
              │  Merkle Tree Batch     │
              │  (many action hashes)  │
              └────────────────────────┘
                           │
                           ▼
              ┌────────────────────────┐
              │  Bitcoin Transaction   │
              │  OP_RETURN: root hash  │
              └────────────────────────┘
```

1. **Agent takes action** — Read, write, API call, etc.
2. **Action is logged** — Structured record with timestamp
3. **Actions are batched** — Collected into Merkle tree
4. **Root hash anchored** — Single Bitcoin OP_RETURN per batch
5. **Proof generated** — Merkle path proves inclusion

## Verification

Anyone can verify an agent's history:

```javascript
import { verifyTrail } from 'blocktrails';

const verification = await verifyTrail({
  agentDid: 'did:nostr:npub1abc123...',
  action: actionLog,
  merkleProof: proof,
  bitcoinTx: txid
});

if (verification.valid) {
  console.log('Action proven at:', verification.timestamp);
  console.log('Bitcoin block:', verification.blockHeight);
}
```

## Why Bitcoin?

- **Immutable timestamping** — Can't rewrite history
- **Decentralized verification** — No trusted third party
- **Long-term availability** — Bitcoin isn't going away
- **Cost efficiency** — Batch thousands of actions per transaction
- **Global consensus** — Everyone agrees on the timeline

## Trust Score

Over time, agents build verifiable track records:

| Metric | Description |
|--------|-------------|
| Age | How long the agent has been operating |
| Volume | Number of verified actions |
| Consistency | Regularity of anchoring |
| Scope | Types of actions performed |
| Incidents | Any flagged behaviors |

## Integration with SAND

BlockTrails integrates with the SAND stack:

- **Solid** — Log access to pod resources
- **ActivityPub** — Track federation activities
- **Nostr** — Verify event publishing history
- **DID** — Agent identity via did:nostr

## Use Cases

### AI Assistant Verification
Prove your AI assistant only accessed files you permitted, when you permitted.

### Compliance Auditing
Demonstrate regulatory compliance with cryptographic proof.

### Multi-Agent Systems
Agents can verify each other's track records before collaboration.

### Data Stewardship
Prove chain of custody for sensitive data handling.

## Links

- **Website:** [blocktrails.org](https://blocktrails.org)
- **Specification:** In development

## See Also

- [Agentic Web](/concepts/agentic-web) — The vision
- [Manifesto](/manifesto) — Principle 9: Safety Through Time
- [AAM](/projects/aam) — Agent-to-agent collaboration
