---
title: Model Context Protocol (MCP)
description: Connect AI models to external tools and data
---

# Model Context Protocol (MCP)

**Connect AI models to external tools and data sources.** Open protocol by Anthropic for agentic AI.

## Overview

MCP provides a standard way for AI assistants to:

- Access external data sources
- Use tools and APIs
- Interact with local and remote systems

Think of it as USB for AI — a universal connector.

## Architecture

```
┌─────────────────┐     MCP      ┌─────────────────┐
│   AI Model      │◄────────────►│   MCP Server    │
│   (Claude)      │              │   (Your Data)   │
└─────────────────┘              └─────────────────┘
```

### Components

- **MCP Host** — The AI application (Claude Desktop, etc.)
- **MCP Server** — Provides tools/data (file system, database, API)
- **Protocol** — JSON-RPC over stdio or HTTP

## MCP + SAND

MCP connects AI agents to the SAND stack:

### Solid MCP Server
Access Solid pods via MCP:
- Read/write pod resources
- Query Linked Data
- Manage permissions

### Nostr MCP Server
Interact with Nostr via MCP:
- Publish events
- Query relays
- Sign with Nostr keys

## Quick Start

```bash
# Install an MCP server
npm install -g @anthropic/mcp-server-filesystem

# Configure in Claude Desktop
# Add to ~/Library/Application Support/Claude/claude_desktop_config.json
```

## Building MCP Servers

```typescript
import { Server } from "@modelcontextprotocol/sdk/server";

const server = new Server({
  name: "my-server",
  version: "1.0.0"
});

server.tool("my_tool", async (args) => {
  // Tool implementation
  return { result: "data" };
});
```

## Links

- **Website:** [modelcontextprotocol.io](https://modelcontextprotocol.io)
- **Docs:** [MCP Documentation](https://modelcontextprotocol.io/docs)
- **GitHub:** [modelcontextprotocol](https://github.com/modelcontextprotocol)

## See Also

- [Agentic Web](/concepts/agentic-web) — The vision
- [BlockTrails](/projects/blocktrails) — Trust for agents
- [AAM](/projects/aam) — Agent-to-agent communication
