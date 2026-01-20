---
title: WAC
description: Web Access Control specification
---

# WAC

**Control who can access what.** Simple, effective access control for the decentralized web.

## Overview

Web Access Control (WAC) is a decentralized cross-domain access control system. It allows users to control access to their resources using simple rules stored in `.acl` files.

## Key Concepts

### ACL Files

Every resource can have an associated ACL file:

```
┌─────────────────────────────────────────────────────────────────┐
│                     WAC Structure                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   /alice/profile        ← The resource                         │
│   /alice/profile.acl    ← Its access control                   │
│                                                                 │
│   /alice/photos/        ← A container                          │
│   /alice/photos/.acl    ← Container's access control           │
│                                                                 │
│   ACL files control who can Read, Write, Append, Control       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Permission Modes

| Mode | Description |
|------|-------------|
| **Read** | View the resource content |
| **Write** | Modify or delete the resource |
| **Append** | Add to the resource (no modify/delete) |
| **Control** | Modify the ACL itself |

### Agent Types

| Agent Type | Description |
|------------|-------------|
| **acl:agent** | Specific WebID |
| **acl:agentClass** | Group of agents |
| **acl:agentGroup** | vCard group |
| **foaf:Agent** | Anyone (authenticated or not) |
| **acl:AuthenticatedAgent** | Any authenticated user |

## ACL Syntax

### Basic Example

```turtle
@prefix acl: <http://www.w3.org/ns/auth/acl#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

# Owner has full control
<#owner>
    a acl:Authorization ;
    acl:agent <https://alice.example/profile/card#me> ;
    acl:accessTo <./profile> ;
    acl:mode acl:Read, acl:Write, acl:Control .

# Public can read
<#public>
    a acl:Authorization ;
    acl:agentClass foaf:Agent ;
    acl:accessTo <./profile> ;
    acl:mode acl:Read .
```

### Container with Default

```turtle
@prefix acl: <http://www.w3.org/ns/auth/acl#> .

# Alice controls the photos container
<#owner>
    a acl:Authorization ;
    acl:agent <https://alice.example/profile/card#me> ;
    acl:accessTo </photos/> ;
    acl:default </photos/> ;
    acl:mode acl:Read, acl:Write, acl:Control .

# Friends can read photos
<#friends>
    a acl:Authorization ;
    acl:agentClass </friends#group> ;
    acl:accessTo </photos/> ;
    acl:default </photos/> ;
    acl:mode acl:Read .
```

### Key Properties

| Property | Purpose |
|----------|---------|
| `acl:accessTo` | Resource this rule applies to |
| `acl:default` | Apply to container children |
| `acl:mode` | Permissions granted |
| `acl:agent` | Specific agent(s) |
| `acl:agentClass` | Class of agents |
| `acl:origin` | Allowed app origins |

## Access Patterns

### Public Resource

```turtle
<#public>
    a acl:Authorization ;
    acl:agentClass foaf:Agent ;
    acl:accessTo <./document> ;
    acl:mode acl:Read .
```

### Private Resource

```turtle
<#owner>
    a acl:Authorization ;
    acl:agent <https://alice.example/profile/card#me> ;
    acl:accessTo <./diary> ;
    acl:mode acl:Read, acl:Write, acl:Control .
```

### Shared with Specific Person

```turtle
<#shared>
    a acl:Authorization ;
    acl:agent <https://bob.example/profile/card#me> ;
    acl:accessTo <./document> ;
    acl:mode acl:Read .
```

### Append-Only (Comments)

```turtle
<#commenters>
    a acl:Authorization ;
    acl:agentClass acl:AuthenticatedAgent ;
    acl:accessTo <./comments> ;
    acl:mode acl:Append .
```

## Inheritance

```
┌─────────────────────────────────────────────────────────────────┐
│                     ACL Inheritance                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   /alice/                                                       │
│   /alice/.acl          ← Root ACL with defaults                │
│                                                                 │
│   /alice/photos/                                                │
│   /alice/photos/.acl   ← Overrides root for /photos/           │
│                                                                 │
│   /alice/photos/vacation.jpg                                    │
│   (no .acl)            ← Inherits from /alice/photos/.acl      │
│                                                                 │
│   /alice/photos/private.jpg                                     │
│   /alice/photos/private.jpg.acl ← Specific override            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Origin Control

Restrict which apps can access:

```turtle
<#app-limited>
    a acl:Authorization ;
    acl:agent <https://alice.example/profile/card#me> ;
    acl:accessTo <./sensitive> ;
    acl:mode acl:Read, acl:Write ;
    acl:origin <https://trusted-app.example> .
```

## Comparison with ACP

| Feature | WAC | ACP |
|---------|-----|-----|
| Complexity | Simple | More expressive |
| Learning curve | Lower | Higher |
| Flexibility | Good | Excellent |
| Maturity | Stable | Newer |
| Default in | NSS, JSS | CSS |

## Implementation

### Check Permission

```javascript
// Server checks ACL before responding
async function checkAccess(resource, agent, mode) {
  const aclUrl = await findAcl(resource);
  const acl = await fetch(aclUrl);
  return hasPermission(acl, agent, mode);
}
```

### Finding the ACL

1. Check for `resource.acl`
2. If not found, check parent container's `.acl` with `acl:default`
3. Continue up to root

## Links

- **Specification:** [W3C WAC](https://solid.github.io/web-access-control-spec/)

## See Also

- [Solid Protocol](/protocols/solid) — Uses WAC
- [ACP](/projects/acp) — Alternative access control
- [WebID](/projects/webid) — Identity for agents
