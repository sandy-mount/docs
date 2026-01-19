---
title: Community Solid Server (CSS)
description: Reference implementation of the Solid specification
---

# Community Solid Server (CSS)

**The reference Solid server implementation.** Highly modular, fully spec-compliant, actively developed.

## Overview

CSS is developed by the Solid team at Inrupt and the community. It's the most complete implementation of the Solid specification.

## Features

- **Full Solid Protocol support** — High CTH conformance
- **Modular architecture** — Swap components via configuration
- **Multiple backends** — File system, SPARQL, in-memory
- **Solid-OIDC** — Complete authentication support
- **Active development** — Regular updates

## Installation

```bash
npm install -g @solid/community-server

# Start with default config
community-solid-server

# Or with file backend
community-solid-server -c @css:config/file.json -f ./data
```

## Configuration

CSS uses component-based configuration:

```json
{
  "@context": "https://linkedsoftwaredependencies.org/bundles/npm/@solid/community-server/^7.0.0/components/context.jsonld",
  "import": [
    "css:config/app/main/default.json",
    "css:config/file.json",
    "css:config/http/handler/default.json"
  ]
}
```

## Use Cases

- **Development** — Test Solid apps locally
- **Production** — Deploy for real users
- **Testing** — Run conformance tests

## Links

- **npm:** [@solid/community-server](https://www.npmjs.com/package/@solid/community-server)
- **GitHub:** [CommunitySolidServer/CommunitySolidServer](https://github.com/CommunitySolidServer/CommunitySolidServer)
- **Docs:** [communitysolidserver.github.io](https://communitysolidserver.github.io/)

## See Also

- [JSS](/projects/jss) — Lighter-weight alternative
- [Solid Protocol](/protocols/solid) — The specification
- [Sandymount](/projects/sandymount) — SAND stack bundle
