---
title: Flockstr
description: Nostr calendar and events app
---

# Flockstr

**Events and meetups on Nostr.** Create, discover, and RSVP to events with your Nostr identity.

## Overview

Flockstr is a Nostr client for calendar events based on NIP-52. It lets community organizers connect with their audience to set up meetups, conferences, and events — all on the decentralized Nostr protocol.

## Key Features

### Event Management

```
┌─────────────────────────────────────────────────────────┐
│                    Flockstr Event                        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  📅 Bitcoin Meetup Berlin                               │
│  🕐 Saturday, March 15 at 7:00 PM                       │
│  📍 Crypto Cafe, Berlin                                 │
│                                                          │
│  Hosted by: @alice                                      │
│                                                          │
│  Join us for networking and Lightning demos!            │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐│
│  │  Attending: 42    Maybe: 12    Declined: 5          ││
│  └─────────────────────────────────────────────────────┘│
│                                                          │
│  [RSVP: Going] [RSVP: Maybe] [RSVP: Can't Make It]     │
│                                                          │
│  💬 Discussion    ⚡ Zap Organizer                      │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### NIP-52 Calendar Events

Built on the calendar events specification:

| Kind | Purpose |
|------|---------|
| 31923 | Calendar Events |
| 31924 | Calendars |
| 31925 | RSVPs |

### Event Types

| Type | Use Case |
|------|----------|
| **Date-based** | All-day events, conferences |
| **Time-based** | Meetups, workshops |

### Rich Metadata

Events can include:

| Field | Description |
|-------|-------------|
| **Title** | Event name |
| **Description** | Full details |
| **Location** | Address, GPS, video link |
| **Geohash** | Searchable location |
| **Participants** | Hosts, speakers |
| **Hashtags** | Categories |
| **Start/End** | Time range |

## Core Features

### For Organizers

| Feature | Description |
|---------|-------------|
| **Create events** | Date/time, location, details |
| **Invite users** | Tag Nostr npubs |
| **Post updates** | Event announcements |
| **Issue tickets** | Track attendance |
| **Collect payments** | Lightning/Cashu |
| **Manage RSVPs** | See who's coming |

### For Attendees

| Feature | Description |
|---------|-------------|
| **Discover** | Find local events |
| **RSVP** | Accept, decline, maybe |
| **Calendar sync** | Add to your schedule |
| **Discuss** | Comment on events |
| **Zap** | Support organizers |

### Multiple Calendars

Organize events by purpose:

```
Your Calendars:
├── 📅 Personal
│   ├── Birthday party
│   └── Dinner plans
├── 💼 Work
│   ├── Team standup
│   └── Conference talk
└── ₿ Bitcoin
    ├── Local meetup
    └── Hackathon
```

## Interoperability

Events are stored on Nostr relays, making them visible across clients:

```
┌─────────────────────────────────────────────────────────┐
│                   NIP-52 Events                          │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Event created in Flockstr                              │
│            │                                             │
│            ▼                                             │
│  Stored on Nostr relays (kind 31923)                   │
│            │                                             │
│            ├──► Visible in Flockstr                     │
│            ├──► Visible in Seeker                       │
│            ├──► Visible in Coracle                      │
│            └──► Visible in any NIP-52 client            │
│                                                          │
│  One event, many clients                                │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Technical Stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js |
| Nostr | NDK, nostr-tools |
| Payments | Alby SDK |
| Protocol | NIP-52 |

## Getting Started

### Creating an Event

1. Login with Nostr extension
2. Click "Create Event"
3. Fill in details:
   - Title and description
   - Date and time
   - Location (address or video link)
   - Tags and categories
4. Publish to relays
5. Share with your flock

### RSVPing

1. Browse or search events
2. Click on event of interest
3. Read details
4. Choose RSVP status:
   - **Accepted** — You're going
   - **Tentative** — Maybe
   - **Declined** — Can't make it
5. RSVP published to Nostr

## Use Cases

### Bitcoin Meetups

Local community gatherings for bitcoiners.

### Conferences

Multi-day events with schedules and speakers.

### Online Workshops

Virtual events with video call links.

### Social Gatherings

Dinners, parties, informal meetups.

## RSVP Event

```json
{
  "kind": 31925,
  "tags": [
    ["a", "31923:organizer-pubkey:event-id"],
    ["status", "accepted"],
    ["fb", "busy"]
  ],
  "content": "Looking forward to it!"
}
```

## Comparison

| Feature | Flockstr | Meetup.com | Eventbrite |
|---------|----------|------------|------------|
| Decentralized | Yes | No | No |
| Open source | Yes | No | No |
| Bitcoin payments | Yes | No | No |
| Platform fees | None | Yes | Yes |
| Data ownership | You | Platform | Platform |
| Censorship | Resistant | Platform rules | Platform rules |

## Links

- **Website:** [flockstr.com](https://flockstr.com/)
- **GitHub:** [github.com/zmeyer44/flockstr](https://github.com/zmeyer44/flockstr)
- **NIP-52:** [Calendar Events](https://github.com/nostr-protocol/nips/blob/master/52.md)

## See Also

- [Nostr Protocol](/protocols/nostr) — The protocol
- [Coracle](/projects/coracle) — Client with calendar support
- [Alby](/projects/alby) — Lightning payments
- [NDK](/projects/ndk) — Development kit
