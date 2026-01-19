---
title: Model Context Protocol (MCP)
description: Connect AI models to external tools and data
---

# Model Context Protocol (MCP)

**Connect AI models to external tools and data sources.** Open standard by Anthropic, now hosted by the Linux Foundation.

## Overview

MCP provides a standard way for AI assistants to access external data and tools. Think of it as **USB for AI** — a universal connector that works across models and applications.

Since launching in November 2024, MCP has been adopted by OpenAI, Google DeepMind, and thousands of community implementations. It's becoming the de-facto standard for agent-tool integration.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      MCP Host                            │
│                 (Claude Desktop, etc.)                   │
└─────────────────────────┬───────────────────────────────┘
                          │ JSON-RPC
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│   MCP Server    │ │   MCP Server    │ │   MCP Server    │
│   (Filesystem)  │ │   (Database)    │ │   (Solid Pod)   │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

### Components

| Component | Role |
|-----------|------|
| **MCP Host** | AI application (Claude Desktop, IDE plugins) |
| **MCP Client** | Connects host to servers |
| **MCP Server** | Exposes tools, resources, or prompts |
| **Transport** | JSON-RPC over stdio, HTTP, or WebSocket |

## Three Core Primitives

MCP defines three primitives with different control patterns:

### 1. Tools (Model-Controlled)
Functions the AI can call to take actions:

```typescript
server.tool("search_files", {
  description: "Search for files by name pattern",
  inputSchema: {
    type: "object",
    properties: {
      pattern: { type: "string" }
    }
  }
}, async ({ pattern }) => {
  const files = await glob(pattern);
  return { files };
});
```

### 2. Resources (App-Controlled)
Data the application exposes to the AI:

```typescript
server.resource("config://app/settings", {
  name: "Application Settings",
  mimeType: "application/json"
}, async () => {
  return JSON.stringify(settings);
});
```

### 3. Prompts (User-Controlled)
Predefined prompt templates users can invoke:

```typescript
server.prompt("summarize", {
  description: "Summarize a document",
  arguments: [
    { name: "url", description: "Document URL" }
  ]
}, async ({ url }) => {
  return `Please summarize the document at ${url}`;
});
```

## MCP + SAND

MCP is the bridge connecting AI agents to the SAND stack:

### Solid MCP Server
```typescript
// Read from a Solid pod
server.tool("solid_read", async ({ url }) => {
  const dataset = await getSolidDataset(url, { fetch });
  return serializeDataset(dataset);
});

// Write to a Solid pod
server.tool("solid_write", async ({ url, data }) => {
  await saveSolidDatasetAt(url, parseDataset(data), { fetch });
  return { success: true };
});
```

### Nostr MCP Server
```typescript
// Publish a Nostr event
server.tool("nostr_publish", async ({ content, kind }) => {
  const event = finalizeEvent({
    kind,
    content,
    created_at: Math.floor(Date.now() / 1000),
    tags: []
  }, secretKey);

  await relay.publish(event);
  return { eventId: event.id };
});

// Query Nostr relays
server.tool("nostr_query", async ({ filter }) => {
  const events = await relay.list([filter]);
  return { events };
});
```

### DID MCP Server
```typescript
// Resolve a DID
server.tool("did_resolve", async ({ did }) => {
  const document = await resolveDID(did);
  return { document };
});
```

## Quick Start

### Using MCP Servers

```bash
# Install a server
npm install -g @modelcontextprotocol/server-filesystem

# Configure in Claude Desktop
# Edit ~/Library/Application Support/Claude/claude_desktop_config.json
```

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "mcp-server-filesystem",
      "args": ["/path/to/allowed/directory"]
    }
  }
}
```

### Building MCP Servers

```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server({
  name: "my-server",
  version: "1.0.0"
}, {
  capabilities: {
    tools: {},
    resources: {}
  }
});

// Add tools
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: "my_tool",
    description: "Does something useful",
    inputSchema: { type: "object", properties: {} }
  }]
}));

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);
```

## SDKs

Official SDKs available:

| Language | Package |
|----------|---------|
| TypeScript | `@modelcontextprotocol/sdk` |
| Python | `mcp` |
| Java | Coming soon |
| C# | Community |
| Go | Community |

## Ecosystem

Thousands of MCP servers available:
- **Filesystem** — Local file access
- **GitHub** — Repository operations
- **Postgres/SQLite** — Database queries
- **Slack/Discord** — Messaging
- **Browser** — Web automation
- **And many more...**

## Links

- **Website:** [modelcontextprotocol.io](https://modelcontextprotocol.io)
- **Specification:** [MCP Spec](https://modelcontextprotocol.io/specification/2025-11-25)
- **GitHub:** [modelcontextprotocol](https://github.com/modelcontextprotocol)
- **Anthropic Course:** [Introduction to MCP](https://anthropic.skilljar.com/introduction-to-model-context-protocol)

## See Also

- [Agentic Web](/concepts/agentic-web) — The vision for AI agents
- [BlockTrails](/projects/blocktrails) — Trust and audit for agents
- [AAM](/projects/aam) — Agent-to-agent communication
- [Web Prompts](/projects/web-prompts) — Shareable prompt templates
