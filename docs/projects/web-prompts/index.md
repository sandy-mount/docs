---
title: Web Prompts
description: Structured prompts for the web
---

# Web Prompts

**Shareable, versionable prompt templates.** Agent-ready prompts as web resources.

## The Problem

Today's prompts are:

- **Copy-pasted** — No version control
- **Siloed** — Locked in apps
- **Opaque** — Users don't know what they're running
- **Incompatible** — Different formats per platform

Web Prompts makes prompts first-class web citizens.

## Core Concepts

### Prompts as URLs

Every prompt has a URL:

```
https://prompts.example/writing/blog-post/v2.1
```

Fetch it like any web resource:

```javascript
const response = await fetch('https://prompts.example/writing/blog-post/v2.1');
const prompt = await response.json();
```

### Structured Format

```json
{
  "@context": "https://webprompts.org/context.jsonld",
  "@type": "Prompt",
  "id": "https://prompts.example/writing/blog-post/v2.1",
  "name": "Blog Post Writer",
  "description": "Creates engaging blog posts from outlines",
  "version": "2.1",
  "author": "https://alice.example/profile#me",
  "template": "Write a blog post about {{topic}}...",
  "parameters": [
    {
      "name": "topic",
      "type": "string",
      "required": true
    },
    {
      "name": "tone",
      "type": "enum",
      "values": ["casual", "professional", "academic"],
      "default": "casual"
    }
  ],
  "tags": ["writing", "content", "blog"]
}
```

### Versioning

Semantic versioning for prompts:

- `v1.0` → `v1.1` — Minor refinements
- `v1.1` → `v2.0` — Major changes to behavior
- `latest` — Always the newest version

### Composition

Prompts can extend other prompts:

```json
{
  "@type": "Prompt",
  "extends": "https://prompts.example/writing/base",
  "name": "Technical Blog Post",
  "template": "{{base.template}}\n\nFocus on technical accuracy..."
}
```

## Discovery

### Registries

Discover prompts through registries:

```http
GET https://registry.webprompts.org/search?tags=writing&sort=popularity
```

### In Your Pod

Store personal prompts in your Solid pod:

```
https://alice.pod/prompts/
├── work/
│   ├── email-reply.json
│   └── meeting-summary.json
└── personal/
    ├── journal-entry.json
    └── recipe-generator.json
```

## Agent Integration

### MCP Tools

Web Prompts integrates with [MCP](/projects/mcp):

```json
{
  "name": "execute_prompt",
  "description": "Execute a web prompt",
  "inputSchema": {
    "type": "object",
    "properties": {
      "promptUrl": { "type": "string" },
      "parameters": { "type": "object" }
    }
  }
}
```

### Example Usage

```javascript
// Fetch and execute a prompt
const prompt = await fetch('https://prompts.example/coding/review').then(r => r.json());

const result = await agent.execute({
  prompt: prompt.template,
  variables: {
    code: myCode,
    language: 'javascript'
  }
});
```

## Trust and Safety

### Signed Prompts

Prompts can be cryptographically signed:

```json
{
  "@type": "Prompt",
  "signature": {
    "type": "Ed25519Signature2020",
    "created": "2025-01-19T12:00:00Z",
    "verificationMethod": "did:nostr:npub1...",
    "proofValue": "..."
  }
}
```

### Content Policies

Registries can enforce content policies:

- No malicious instructions
- No jailbreak attempts
- Required safety guidelines

## Benefits

| Traditional | Web Prompts |
|-------------|-------------|
| Copy-paste chaos | Version controlled |
| Platform-locked | Portable across tools |
| No attribution | Author linked |
| Can't verify | Cryptographically signed |
| Siloed discovery | Registry-based search |

## Links

- **Website:** [webprompts.org](https://webprompts.org)
- **Specification:** In development

## See Also

- [Agentic Web](/concepts/agentic-web) — The vision
- [MCP](/projects/mcp) — Model Context Protocol
- [Linked Data](/concepts/linked-data) — The data model
