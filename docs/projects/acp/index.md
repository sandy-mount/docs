---
title: ACP
description: Access Control Policy specification
---

# ACP

**Flexible, expressive access control.** The next generation of Solid permissions.

## Overview

Access Control Policy (ACP) is a newer access control system for Solid that provides more expressive and flexible authorization than WAC. It's the default in Community Solid Server (CSS).

## Key Concepts

### Policies vs Rules

```
┌─────────────────────────────────────────────────────────────────┐
│                     ACP vs WAC                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   WAC: Simple rules in .acl files                              │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │  Authorization → agent + mode + resource                 │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   ACP: Policies composed of matchers and rules                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │  AccessControlResource                                   │  │
│   │  └── Policy                                             │  │
│   │      ├── allow/deny rules                               │  │
│   │      └── Matchers (who, what conditions)                │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   ACP = More composable, more powerful                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### ACP Components

| Component | Purpose |
|-----------|---------|
| **AccessControlResource** | Container for policies |
| **Policy** | Set of access rules |
| **Matcher** | Defines who/what matches |
| **AccessControl** | Links resource to policies |

## ACP Structure

### Access Control Resource

```turtle
@prefix acp: <http://www.w3.org/ns/solid/acp#> .

<#accessControl>
    a acp:AccessControl ;
    acp:resource </alice/document> ;
    acp:accessMembers </alice/document> ;
    acp:apply <#ownerPolicy>, <#publicReadPolicy> .
```

### Policy Definition

```turtle
<#ownerPolicy>
    a acp:Policy ;
    acp:allow acp:Read, acp:Write, acp:Append ;
    acp:anyOf <#ownerMatcher> .

<#ownerMatcher>
    a acp:Matcher ;
    acp:agent <https://alice.example/profile/card#me> .
```

### Complete Example

```turtle
@prefix acp: <http://www.w3.org/ns/solid/acp#> .

# The access control for a resource
<#accessControl>
    a acp:AccessControl ;
    acp:resource </photos/vacation.jpg> ;
    acp:apply <#ownerPolicy>, <#friendsPolicy> .

# Owner has full access
<#ownerPolicy>
    a acp:Policy ;
    acp:allow acp:Read, acp:Write, acp:Append ;
    acp:anyOf <#ownerMatcher> .

<#ownerMatcher>
    a acp:Matcher ;
    acp:agent <https://alice.example/profile/card#me> .

# Friends can read
<#friendsPolicy>
    a acp:Policy ;
    acp:allow acp:Read ;
    acp:anyOf <#friendsMatcher> .

<#friendsMatcher>
    a acp:Matcher ;
    acp:agent <https://bob.example/profile/card#me>,
              <https://carol.example/profile/card#me> .
```

## Matcher Logic

### anyOf (OR)

Match if any condition is true:

```turtle
<#policy>
    a acp:Policy ;
    acp:allow acp:Read ;
    acp:anyOf <#matcher1>, <#matcher2> .

# Grants access if matcher1 OR matcher2 matches
```

### allOf (AND)

Match only if all conditions are true:

```turtle
<#policy>
    a acp:Policy ;
    acp:allow acp:Write ;
    acp:allOf <#isAuthenticated>, <#isFromTrustedApp> .

# Grants access only if BOTH conditions match
```

### noneOf (NOT)

Match if no conditions are true:

```turtle
<#policy>
    a acp:Policy ;
    acp:deny acp:Read ;
    acp:noneOf <#blockedMatcher> .

# Denies access unless not in blocked list
```

## Advanced Features

### Allow and Deny

ACP supports explicit deny:

```turtle
<#blockPolicy>
    a acp:Policy ;
    acp:deny acp:Read, acp:Write ;
    acp:anyOf <#blockedUsers> .
```

Deny takes precedence over allow.

### Client Restrictions

```turtle
<#trustedAppPolicy>
    a acp:Policy ;
    acp:allow acp:Read, acp:Write ;
    acp:allOf <#ownerMatcher>, <#trustedClientMatcher> .

<#trustedClientMatcher>
    a acp:Matcher ;
    acp:client <https://trusted-app.example> .
```

### Public Access

```turtle
<#publicPolicy>
    a acp:Policy ;
    acp:allow acp:Read ;
    acp:anyOf <#publicMatcher> .

<#publicMatcher>
    a acp:Matcher ;
    acp:agent acp:PublicAgent .
```

### Authenticated Users

```turtle
<#authenticatedPolicy>
    a acp:Policy ;
    acp:allow acp:Append ;
    acp:anyOf <#authMatcher> .

<#authMatcher>
    a acp:Matcher ;
    acp:agent acp:AuthenticatedAgent .
```

## Comparison

| Feature | WAC | ACP |
|---------|-----|-----|
| Explicit deny | No | Yes |
| Boolean logic | Limited | Full (AND/OR/NOT) |
| Client restrictions | Basic | Flexible |
| Policy reuse | Copy | Reference |
| Learning curve | Lower | Higher |
| Expressiveness | Good | Excellent |

## When to Use ACP

Choose ACP when you need:

- Complex permission logic
- Explicit deny rules
- Reusable policies
- Fine-grained client control
- Attribute-based access

## Implementation

CSS uses ACP by default:

```bash
# CSS with ACP (default)
npx @solid/community-server

# CSS with WAC
npx @solid/community-server -c @css:config/file-acp-wac.json
```

## Links

- **Specification:** [ACP Spec](https://solid.github.io/authorization-panel/acp-specification/)
- **CSS Docs:** ACP configuration

## See Also

- [Solid Protocol](/protocols/solid) — The protocol
- [WAC](/projects/wac) — Simpler alternative
- [CSS](/projects/css) — Default ACP server
