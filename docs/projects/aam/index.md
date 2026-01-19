---
title: AAM (Agent-to-Agent Manager)
description: A2A protocol for agent collaboration
---

# AAM

**Agent-to-Agent Manager.** Protocol for agent discovery, skills registry, and collaboration.

## The Problem

AI agents are powerful alone. Together, they could be transformative. But today:

- **No discovery** — How do agents find each other?
- **No common language** — How do they describe capabilities?
- **No coordination** — How do they collaborate safely?
- **No accountability** — Who's responsible when things go wrong?

AAM provides the infrastructure for agent-to-agent cooperation.

## Core Concepts

### Agent Discovery

Agents register with discovery services:

```json
{
  "@context": "https://aam.wtf/context.jsonld",
  "@type": "Agent",
  "id": "did:nostr:npub1abc123...",
  "name": "Data Analyst Agent",
  "description": "Analyzes datasets and generates reports",
  "endpoint": "https://agent.example/api",
  "skills": [
    "data-analysis",
    "visualization",
    "report-generation"
  ]
}
```

### Skills Registry

Standardized skill definitions:

```json
{
  "@type": "Skill",
  "id": "https://aam.wtf/skills/data-analysis",
  "name": "Data Analysis",
  "description": "Analyze structured data to extract insights",
  "inputs": [
    {
      "name": "dataset",
      "type": "URL",
      "description": "URL to dataset (CSV, JSON, etc.)"
    }
  ],
  "outputs": [
    {
      "name": "analysis",
      "type": "Report"
    }
  ]
}
```

### Capability Queries

Find agents by capability:

```http
GET https://registry.aam.wtf/agents?skill=data-analysis&trust_score=0.8

[
  {
    "id": "did:nostr:npub1abc...",
    "name": "Data Analyst Agent",
    "trustScore": 0.92,
    "responseTime": "avg 2.3s"
  },
  {
    "id": "did:nostr:npub2def...",
    "name": "Statistical Analysis Bot",
    "trustScore": 0.87,
    "responseTime": "avg 4.1s"
  }
]
```

## Collaboration Protocol

### Request/Response

```
┌────────────┐                      ┌────────────┐
│  Agent A   │                      │  Agent B   │
│  (Caller)  │                      │  (Worker)  │
└─────┬──────┘                      └─────┬──────┘
      │                                   │
      │  1. Request (skill, params)       │
      │──────────────────────────────────>│
      │                                   │
      │  2. Acknowledgment                │
      │<──────────────────────────────────│
      │                                   │
      │  3. Progress updates (optional)   │
      │<──────────────────────────────────│
      │                                   │
      │  4. Result                        │
      │<──────────────────────────────────│
      │                                   │
```

### Request Format

```json
{
  "@type": "AgentRequest",
  "id": "req-12345",
  "from": "did:nostr:npub1abc...",
  "to": "did:nostr:npub2def...",
  "skill": "data-analysis",
  "params": {
    "dataset": "https://alice.pod/data/sales.csv",
    "format": "summary"
  },
  "constraints": {
    "maxTime": 60000,
    "budget": 0.05
  },
  "signature": "..."
}
```

## Trust and Safety

### Trust Scores

Agents build trust through:

- **[BlockTrails](/projects/blocktrails)** — Verified history
- **Peer Reviews** — Other agents' assessments
- **Task Success Rate** — Completion metrics
- **Response Time** — Reliability metrics

### Permission Scoping

Requests include permission boundaries:

```json
{
  "permissions": {
    "read": ["https://alice.pod/data/*"],
    "write": [],
    "network": ["https://api.example.com/*"],
    "duration": 3600
  }
}
```

### Audit Trail

All interactions are logged:

```json
{
  "@type": "Interaction",
  "timestamp": "2025-01-19T12:00:00Z",
  "caller": "did:nostr:npub1abc...",
  "worker": "did:nostr:npub2def...",
  "skill": "data-analysis",
  "duration": 4532,
  "status": "success",
  "trailAnchor": "btc:abc123..."
}
```

## Integration with SAND

| Component | Role |
|-----------|------|
| **Solid** | Data storage and access control |
| **ActivityPub** | Agent activity feeds |
| **Nostr** | Real-time messaging between agents |
| **DID** | Agent identity |

## Use Cases

### Multi-Agent Workflows

Chain agents for complex tasks:

1. **Research Agent** → Gathers information
2. **Analysis Agent** → Processes data
3. **Writing Agent** → Creates report
4. **Review Agent** → Checks quality

### Specialist Delegation

Your personal agent delegates to specialists:

- "Book a restaurant" → Restaurant Agent
- "Analyze my finances" → Finance Agent
- "Schedule my week" → Calendar Agent

### Collective Intelligence

Agents collaborate on problems no single agent could solve:

- Distributed research
- Consensus building
- Resource pooling

## Status

Early development. Specification in progress.

## Links

- **Website:** [aam.wtf](https://aam.wtf)
- **Specification:** In development

## See Also

- [Agentic Web](/concepts/agentic-web) — The vision
- [MCP](/projects/mcp) — Model Context Protocol
- [BlockTrails](/projects/blocktrails) — Trust through time
- [DID Protocol](/protocols/did) — Agent identity
