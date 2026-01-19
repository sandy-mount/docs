---
title: Lemmy
description: Federated link aggregator and forum
---

# Lemmy

**Decentralized Reddit alternative.** Link aggregation and discussion forums in the Fediverse.

## Overview

Lemmy is a free, open-source social news aggregator and forum that federates via ActivityPub. It provides a Reddit-like experience where anyone can run their own instance while staying connected to the broader network.

## Key Features

### Federation

```
┌─────────────────────────────────────────────────────────┐
│                    Lemmy Network                         │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌───────────────┐        ┌───────────────┐             │
│  │  lemmy.world  │◄──────►│ lemmy.ml      │             │
│  │   Instance A  │   AP   │  Instance B   │             │
│  └───────┬───────┘        └───────┬───────┘             │
│          │                        │                      │
│          └────────────────────────┘                      │
│                       │                                  │
│             ActivityPub Protocol                        │
│                       │                                  │
│          ┌────────────┴────────────┐                    │
│          │                         │                    │
│  ┌───────▼───────┐        ┌───────▼───────┐            │
│  │   Mastodon    │        │     Kbin      │            │
│  │  (comments)   │        │ (compatible)  │            │
│  └───────────────┘        └───────────────┘            │
│                                                          │
│  Subscribe to communities on any instance               │
│  Mastodon users can participate in discussions          │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Community Structure

```
┌─────────────────────────────────────────┐
│        Community: !technology@lemmy.ml   │
├─────────────────────────────────────────┤
│                                          │
│  📌 Pinned: Community Rules             │
│                                          │
│  🔥 Hot Posts                           │
│  ├── [1234↑] New open source project    │
│  ├── [567↑]  Linux kernel update        │
│  └── [234↑]  Self-hosting guide         │
│                                          │
│  Moderators: @alice, @bob               │
│  Subscribers: 45,678                     │
│                                          │
│  [Subscribe] [Create Post]              │
│                                          │
└─────────────────────────────────────────┘
```

### Content Features

| Feature | Description |
|---------|-------------|
| **Posts** | Links or text posts |
| **Comments** | Threaded discussions |
| **Voting** | Full scores (+/-) visible |
| **Communities** | Topic-focused groups |
| **Moderation** | Per-community moderators |
| **Cross-posting** | Share to multiple communities |
| **Saved posts** | Bookmark content |
| **Blocking** | Users and communities |

### Interface

- **Clean design** — Mobile-friendly responsive UI
- **Multiple themes** — Light, dark, solarized
- **i18n** — Many languages supported
- **Markdown** — Full formatting support

## Self-Hosting

### Requirements

- Docker and Docker Compose
- PostgreSQL
- Domain name with HTTPS

### Docker Installation

```yaml
# docker-compose.yml
version: '3'
services:
  lemmy:
    image: dessalines/lemmy:latest
    depends_on:
      - postgres
      - pictrs
    ports:
      - "8536:8536"
    volumes:
      - ./lemmy.hjson:/config/config.hjson
    environment:
      RUST_LOG: "warn,lemmy_server=info,lemmy_api=info"

  lemmy-ui:
    image: dessalines/lemmy-ui:latest
    depends_on:
      - lemmy
    ports:
      - "1234:1234"
    environment:
      LEMMY_UI_LEMMY_INTERNAL_HOST: lemmy:8536
      LEMMY_UI_LEMMY_EXTERNAL_HOST: lemmy.example.com

  postgres:
    image: postgres:15-alpine
    volumes:
      - ./postgres:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: lemmy
      POSTGRES_PASSWORD: password
      POSTGRES_DB: lemmy

  pictrs:
    image: asonix/pictrs:0.4
    volumes:
      - ./pictrs:/mnt
```

### Configuration

```hjson
// lemmy.hjson
{
  database: {
    host: postgres
    user: lemmy
    password: password
    database: lemmy
  }
  hostname: "lemmy.example.com"
  email: {
    smtp_server: "smtp.example.com"
    smtp_login: "noreply@example.com"
    smtp_password: "password"
    smtp_from_address: "noreply@example.com"
  }
  setup: {
    admin_username: "admin"
    admin_password: "changeme"
    admin_email: "admin@example.com"
    site_name: "My Lemmy Instance"
  }
}
```

### Ansible Deployment

```bash
git clone https://github.com/LemmyNet/lemmy-ansible.git
cd lemmy-ansible
# Configure inventory and vars
ansible-playbook lemmy.yml
```

## Technical Stack

| Component | Technology |
|-----------|------------|
| Backend | Rust (Actix-web) |
| Frontend | TypeScript (Inferno) |
| Database | PostgreSQL + Diesel |
| Federation | ActivityPub |
| License | AGPL-3.0 |

### Why Rust?

- **Performance** — Fast and memory-efficient
- **Safety** — Memory-safe by design
- **Reliability** — Strong type system

## Mobile Apps

| Platform | Apps |
|----------|------|
| **Android** | Jerboa (official), Liftoff, Thunder |
| **iOS** | Mlem, Thunder, Voyager |
| **Cross-platform** | Voyager (PWA) |

## Moderation

### Hierarchy

```
Site Admins
    │
    ├── Site-wide policies
    ├── Instance federation
    └── Global bans
          │
Community Moderators
    │
    ├── Community rules
    ├── Post/comment removal
    └── Community bans
```

### Tools

| Tool | Description |
|------|-------------|
| **Reports** | User flagging system |
| **Removal** | Hide content |
| **Bans** | User restrictions |
| **Federation** | Allow/block instances |
| **Auto-mod** | Slur filter, etc. |

## Comparison with Reddit

| Aspect | Lemmy | Reddit |
|--------|-------|--------|
| Ownership | Distributed | Centralized |
| Open source | Yes | No |
| Algorithm | None | Heavy |
| Ads | None | Many |
| API | Free | Paid/restricted |
| Moderation | Distributed | Centralized |
| Self-hosting | Yes | No |

## Finding Instances

- **Official list:** [join-lemmy.org/instances](https://join-lemmy.org/instances)
- **Instance picker:** [lemmyverse.net](https://lemmyverse.net/)

Popular instances:
| Instance | Focus |
|----------|-------|
| lemmy.world | General |
| lemmy.ml | Tech |
| beehaw.org | Community |
| programming.dev | Developers |

## Growth

After Reddit's 2023 API changes, Lemmy saw significant growth:
- **Pre-June 2023:** ~100 instances
- **Post-June 2023:** 1,500+ instances
- **Monthly active users:** 60,000+

## Links

- **Website:** [join-lemmy.org](https://join-lemmy.org/)
- **GitHub:** [LemmyNet/lemmy](https://github.com/LemmyNet/lemmy)
- **Docs:** [join-lemmy.org/docs](https://join-lemmy.org/docs/)
- **Matrix:** #lemmy-space:matrix.org

## See Also

- [ActivityPub Protocol](/protocols/activitypub) — The protocol
- [Mastodon](/projects/mastodon) — Microblogging server
- [PeerTube](/projects/peertube) — Video platform
- [Federation](/concepts/federation) — The concept
