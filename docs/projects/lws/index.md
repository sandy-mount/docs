---
title: Linked Web Storage (LWS)
description: W3C Working Group for Solid principles
---

# Linked Web Storage (LWS)

**W3C Working Group bringing Solid principles to the web platform.** Targeting W3C Recommendation 2026.

## Vision

Solid has proven the concept of user-controlled data storage. LWS aims to take these principles and standardize them at the W3C level, making decentralized storage a core part of the web platform — not just an application protocol.

## Goals

### Platform-Level Standard
Move from "apps that support Solid" to "the web supports user storage."

### Browser Integration
Potential for native browser support, like:
- Built-in pod management
- Storage permissions UI
- Cross-origin data sharing controls

### Interoperability
A W3C Recommendation means:
- Multiple implementations
- Conformance testing
- Long-term stability
- Vendor adoption

## Relationship to Solid

```
┌─────────────────────────────────────────────┐
│                 Solid                        │
│  (Full protocol with OIDC, WAC, etc.)       │
├─────────────────────────────────────────────┤
│           Linked Web Storage                 │
│  (Core W3C standard for web platform)       │
├─────────────────────────────────────────────┤
│              Solid Lite                      │
│  (Minimal profile, 80/20 approach)          │
└─────────────────────────────────────────────┘
```

- **Solid** — Full ecosystem with authentication, access control, apps
- **LWS** — Core storage primitive for the web platform
- **Solid Lite** — Practical minimal implementation profile

## Scope (Proposed)

### In Scope
- Linked Data storage over HTTP
- Container model (LDP-like)
- Content negotiation for RDF formats
- Basic access control primitives
- Resource metadata

### Potentially In Scope
- Authentication framework hooks
- Notification mechanisms
- Discovery protocols

### Out of Scope
- Specific authentication methods (deferred to profiles)
- Application-level vocabularies
- UI requirements

## Timeline

| Phase | Target |
|-------|--------|
| Working Group Charter | 2025 |
| First Public Working Draft | 2025 |
| Candidate Recommendation | 2026 |
| W3C Recommendation | 2026 |

## How to Get Involved

### Follow Progress
- Join the mailing list
- Attend public meetings
- Review drafts

### Contribute
- Provide use cases
- Review specifications
- Build implementations
- Report issues

### Implement
Early implementations help:
- Validate the spec
- Find edge cases
- Build ecosystem momentum

## Why This Matters

### For Users
A W3C standard means your data isn't locked to any vendor's implementation of Solid.

### For Developers
Build on a stable foundation with multiple interoperable implementations.

### For the Web
Decentralized storage becomes as fundamental as HTTP itself.

## Links

- **Website:** [linkedwebstorage.com](https://linkedwebstorage.com)
- **W3C:** Working Group (forming)
- **Discussion:** Community Group

## See Also

- [Solid Protocol](/protocols/solid) — Current full specification
- [Solid Lite](/projects/solid-lite) — Minimal profile
- [Data Sovereignty](/concepts/data-sovereignty) — The concept
