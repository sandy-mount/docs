---
sidebar_position: 2
title: The Nine Principles
description: Detailed exploration of each principle
---

# The Nine Principles in Detail

Each principle addresses a specific challenge in building the agentic web.

## 1. Agents Must Serve the User First

**The Challenge:** AI agents can serve many masters — their creators, platforms, advertisers, or users. When these interests conflict, whose side is the agent on?

**The Principle:** An agent's primary obligation is to its user. Period.

**In Practice:**
- Agent goals should be set by users, not platforms
- Conflicts of interest must be disclosed
- Users can override agent decisions
- Agents should refuse instructions that harm their user

**SAND Implementation:**
- Agents access data from user-controlled pods
- Agent behavior is auditable
- Users hold the keys

---

## 2. Identity and Intent Must Be Verifiable

**The Challenge:** In a world of deepfakes and AI impersonation, how do you know who you're talking to? How does an agent know what you actually want?

**The Principle:** Cryptographic verification, not trust assumptions.

**In Practice:**
- All messages are signed
- Identity is verifiable (DIDs)
- Intent is explicit (not inferred)
- Verification is automatic

**SAND Implementation:**
- [DID](/protocols/did) for identity
- Nostr signatures for all events
- Solid-OIDC for authentication

---

## 3. Data Sovereignty Is Non-Negotiable

**The Challenge:** The current web treats user data as a resource to be extracted. Users are the product, not the customer.

**The Principle:** Your data is yours. You control where it lives, who accesses it, and what happens to it.

**In Practice:**
- Data stored in user-controlled locations
- Fine-grained access control
- Right to export everything
- Right to delete everything

**SAND Implementation:**
- [Solid pods](/protocols/solid) for data storage
- WAC/ACP for access control
- Standard formats for portability

---

## 4. Open Protocols, Not Walled Gardens

**The Challenge:** Proprietary platforms create lock-in. Users and developers become dependent on companies that can change the rules at any time.

**The Principle:** Build on open standards that anyone can implement.

**In Practice:**
- Use W3C/IETF standards
- Implement open protocols
- Avoid proprietary dependencies
- Contribute to standards development

**SAND Implementation:**
- [Solid](/protocols/solid) (W3C)
- [ActivityPub](/protocols/activitypub) (W3C Recommendation)
- [DID](/protocols/did) (W3C Recommendation)
- [Nostr](/protocols/nostr) (Open NIPs)

---

## 5. Local-First, Cloud-Optional

**The Challenge:** Cloud-dependent software fails when the network fails, when the company fails, or when they decide to change the terms.

**The Principle:** Software should work on your device, with your data, offline.

**In Practice:**
- Full functionality without internet
- Data stored locally
- Sync when possible, not required
- User owns the data files

**SAND Implementation:**
- Local pod deployment
- Nostr clients with local storage
- DID methods that work offline (did:key)

---

## 6. Transparent Logic, Tunable Behavior

**The Challenge:** Black-box AI is dangerous. If you don't understand what an agent is doing, you can't trust it or correct it.

**The Principle:** Users should understand agent behavior and be able to adjust it.

**In Practice:**
- Explain decisions
- Log actions
- Configurable preferences
- User can override

**SAND Implementation:**
- Audit trails via [BlockTrails](/projects/blocktrails)
- Structured prompts via [Web Prompts](/projects/web-prompts)
- Open-source agents

---

## 7. Sustainable Ecosystems Over Extraction

**The Challenge:** Venture-backed platforms often prioritize growth over sustainability, extracting value until the well runs dry.

**The Principle:** Build systems that create value for everyone long-term.

**In Practice:**
- Sustainable business models
- Value shared with participants
- No race to the bottom
- Long-term thinking

**SAND Implementation:**
- Open-source infrastructure
- Federated architecture (distributed costs)
- Community governance

---

## 8. Community-Driven Standards

**The Challenge:** When one company controls a protocol, they can change it unilaterally. See: Twitter API.

**The Principle:** Protocols evolve through open collaboration.

**In Practice:**
- Standards bodies (W3C, IETF)
- Community groups
- Public discussion
- Consensus-driven decisions

**SAND Implementation:**
- W3C Solid Community Group
- Nostr NIPs process
- [SLIPs](/projects/slips) process
- Open GitHub discussions

---

## 9. Safety and Trust Through Time

**The Challenge:** How do you trust an AI agent you just met? Promises are cheap. Credentials can be faked.

**The Principle:** Trust is earned through verifiable history.

**In Practice:**
- Actions are logged
- Logs are immutable
- History is verifiable
- Reputation emerges from behavior

**SAND Implementation:**
- [BlockTrails](/projects/blocktrails) anchors behavior to Bitcoin
- Verifiable audit trails
- Trust scores based on history
- Time-locked reputation

---

## Living Principles

These principles aren't static. As technology evolves and we learn more, they'll evolve too. But the core commitment remains: **build the web that serves people, not the other way around.**

## See Also

- [Manifesto](/manifesto) — The overview
- [Agentic Web](/concepts/agentic-web) — The vision
- [Agentic Alliance](/projects/agentic-alliance) — The coalition
