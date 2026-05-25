# Nextfem AI — Website Design Specification
**Date:** 2026-03-31  
**Status:** Approved — ready to build  
**Mockup:** `.superpowers/brainstorm/16453-1774955100/content/full-page-design.html`

---

## Overview

A single-page marketing and application site for the Nextfem AI Build Stream — a peer community for women already building with AI. One offer only: 10€/month commitment fee, application-only access, limited spots.

---

## Tech Stack

- **Framework:** React + Vite (single page, no router)
- **Styling:** Tailwind CSS
- **Fonts:** DM Sans via Google Fonts (weights: 300, 400, 500, 700, 900)
- **Form backend:** POST to external webhook (n8n or Make.com) — no backend needed in the app

---

## Brand

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Purple | `#ada2cc` | Primary brand accent, section eyebrows, stat numbers, form focus borders |
| Turquoise | `#9fd7d5` | "Yes" column underline in Is This For You section |
| Coral | `#e76e50` | CTA buttons **only** — nothing else |
| Near-black | `#0e0d12` | Body text, borders, footer background |
| Muted body | `#5a5066` | Secondary text |
| Subtle muted | `#9d93ac` | Labels, fine print |
| Background white | `#ffffff` | Page and card backgrounds |
| Background off-white | `#f8f7fc` | Is This For You section background |

> **Rule:** Coral (`#e76e50`) is for CTA buttons only. Do not use it for decorative elements, icons, borders, or highlights.

### Typography
- Font family: `DM Sans` (Google Fonts)
- Body text: 14–15px, weight 400
- Labels/eyebrows: 10–12px, weight 700, `letter-spacing: 0.1–0.2em`, uppercase
- Section headings (`h2`): 26px, weight 800, `letter-spacing: -0.02em`
- Hero headline (`h1`): `clamp(36px, 6vw, 52px)`, weight 900, `letter-spacing: -0.04em`, `line-height: 0.95`
- Stats / prices: weight 900

### Logo
Three files in `public/`:
- `nextfem-favicon-transparent.png` — icon only (three overlapping circles)
- `nextfem-horizontal-transparent.png` — horizontal lockup (circles + "Nextfem AI" text side by side)
- `nextfem-vertical-transparent.png` — vertical lockup (circles above "Nextfem AI" text)

**Placement:**
- Navbar / hero top bar: `nextfem-horizontal-transparent.png`, height 32px
- Footer: `nextfem-favicon-transparent.png`, height 24px

---

## Visual Style

**Swiss Poster Grid hero → warm/clean below.**

- Hero uses hard 2px near-black borders (`#0e0d12`), strict grid structure, ruled lines between elements — editorial and structural
- Sections below the hero relax into softer borders (`1px #e8e4f4`), lighter backgrounds, and standard card layouts
- No rounded corners anywhere (border-radius: 0)
- No gradients, no glassmorphism, no heavy shadows
- Hierarchy through type weight, spacing, and composition — not colour

---

## Page Structure

### 1. Hero

**Layout:** Hard-bordered page frame. Top bar split left/right with a vertical rule. Main area two-column grid. Stats bar at the bottom.

**Top bar (left):**
- Horizontal logo (`nextfem-horizontal-transparent.png`), height 32px
- Border-right `2px solid #0e0d12` separating from right side

**Top bar (right):**
- Status pill: "Accepting applications" — purple background (`#ada2cc`), white text, animated pulse dot

**Main area (left column):**
- `h1`: "What are you **building** right now?" — the word "building" rendered as an outlined/hollow stroke using `-webkit-text-stroke: 2px #ada2cc; color: transparent`
- Subheading: "A peer community for women already building with AI — vibe coding, automations, agents. Application only, limited spots."

**Main area (right column — aligned bottom):**
- Price box: bordered box, "10€" large, "per month" small uppercase
- CTA button: "Apply for a spot" — coral, full-width of the aside column

**Stats bar (bottom, 3-column grid, border-top):**
- "Founding cohort" / be one of the first
- 1× / live · month
- "Application" / only

> Note: No member count stats. Founding cohort framing is intentional — honest and positions early access as the selling point.

---

### 2. How It Works

**Eyebrow:** "How it works"  
**Heading:** "Simple. No fluff."

Three numbered steps in a vertical list. Each step: step number (purple, `01/02/03`) + title + description. Separated by dotted rules.

| Step | Title | Copy |
|------|-------|------|
| 01 | Apply with a short form | Tell us what you're building, what tools you're using, and what you want from a community. We read every application. |
| 02 | Get accepted & join Discord | If it's a fit, you're in. The Discord is where the day-to-day happens — questions, wins, work-in-progress shares. |
| 03 | Show up to the monthly live session | Once a month we get on a call. No agenda, no speakers. Just builders showing their work and talking shop. |

---

### 3. Is This For You

**Background:** `#f8f7fc`  
**Eyebrow:** "Is this for you?"  
**Heading:** "Honest check."

Two-column grid: Yes column (left) and Not Yet column (right).

**Yes, if you —**
- Are already building something with AI, even if it's messy or unfinished
- Have used Claude Code, Cursor, Codex, or vibe coded anything
- Want peers who get the context — not mentors, not an audience
- Have wins you want to share and questions you can't Google

*Column header underline: 2px solid turquoise (`#9fd7d5`)*

**Not yet, if you —**
- Have never tried AI-assisted building or heard of vibe coding
- Are looking for tutorials, courses, or beginner support
- Want a community that will teach you from zero

*Column header underline: 2px solid `#e0dcea`*

---

### 4. What You Get

**Eyebrow:** "What you get"  
**Heading:** "One offer. Nothing extra."

2×2 card grid. Each card: small icon (stroke, purple), title, description.

| Card | Title | Copy |
|------|-------|------|
| People icon | Private Discord | A small, high-signal community. Share what you're building, ask questions, get real responses from people who are doing the same thing. |
| Calendar icon | Monthly live session | One call a month. No presentations, no agenda. Builders showing their current work, asking questions, thinking out loud together. |
| Star icon | Application-only access | We keep the group small on purpose. Everyone in has been vetted — so you're not starting from scratch explaining your context. |
| Shield icon | A room that gets it | No explaining what Claude Code is. No justifying why you're building this way. Just people who already know — and are curious about what you're doing. |

**Price bar (below cards):**  
Dark background (`#0e0d12`), full-width. Left: "Commitment fee keeps the group serious and the space high-quality." Right: "10€/mo" large, "Cancel any time" small.

---

### 5. Application Form

**Eyebrow:** "Apply"  
**Heading:** "Tell us about your work."

**Fields:**

| Field | Type | Required | Placeholder |
|-------|------|----------|-------------|
| First name | text | Yes | Jana |
| Email | email | Yes | you@example.com |
| What are you currently building or experimenting with? | textarea | Yes | Describe your current project or what you've been experimenting with... |
| What tools are you using? | textarea | Yes | e.g. Claude Code, Cursor, n8n, Figma AI, Zapier... |
| What do you want from this community? | textarea | Yes | What's missing for you right now? |
| Link to something you've built | url | No | https://... |

First name + email are in a 2-column row.

**Form inputs:** border `1.5px solid #d8d4e8`, focus border `#ada2cc`, no border-radius, DM Sans font, zero border-radius.

**Submit row:**
- Button: "Send application" — coral (`#e76e50`), no border-radius
- Fine print: "We read every application. You'll hear back within a few days."

**Form submission:** POST to webhook URL (stored in env var `VITE_FORM_WEBHOOK_URL`). On success, show a confirmation message. On error, show an inline error.

---

### 6. Footer

Dark background (`#0e0d12`). Left: favicon icon + "© 2025 Nextfem AI". Right: "Built with Claude Code".

---

## Automation Flow

When the form is submitted:
1. App POSTs form data as JSON to `VITE_FORM_WEBHOOK_URL`
2. n8n/Make.com workflow receives the data
3. Jana gets a Telegram notification with the applicant's details
4. Jana reviews and manually approves/rejects
5. Accepted applicant receives a welcome email

No backend code needed in the React app — only the webhook POST.

---

## Component Structure

```
App.tsx
├── Hero.tsx
├── HowItWorks.tsx
├── IsThisForYou.tsx
├── WhatYouGet.tsx
├── ApplicationForm.tsx
└── Footer.tsx
```

Shared utilities:
- `cn()` — classname helper (clsx or similar)
- No shared UI component library needed — site is simple enough to style directly with Tailwind

---

## Assets

All in `public/`:
- `nextfem-favicon-transparent.png`
- `nextfem-horizontal-transparent.png`
- `nextfem-vertical-transparent.png`

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_FORM_WEBHOOK_URL` | Webhook URL for form submission (n8n or Make.com) |

---

## Copy Rules

- Tone: warm, honest, direct. Women talking to women.
- No corporate speak, no startup clichés
- No Lorem ipsum — all copy is final (as written in this doc)
- No extra pages, no router
