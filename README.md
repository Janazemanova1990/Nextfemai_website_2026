# Nextfem AI — Peer Community Website

Single-page site for the [Nextfem AI](https://nextfemai.com) peer community: women actively working with AI on practical use cases (custom GPTs, Claude Code, Claude Cowork, automations, agents). Application only, 10€/month, 2× live sessions a month + WhatsApp group.

## Tech stack

- React 19 + Vite 8 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`, tokens in `src/index.css` `@theme {}` — no `tailwind.config.js`)
- Vitest + React Testing Library
- CSS-only motion (no framer-motion / gsap); respects `prefers-reduced-motion`
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run preview  # preview built output
npm run lint
```

### Environment

Create `.env.local`:

```
VITE_FORM_WEBHOOK_URL=https://n8n.srv1408736.hstgr.cloud/webhook/nextfem-application
```

The application form POSTs JSON to this n8n webhook. On webhook error, the form stashes a draft to `localStorage` (`nextfem-application-draft`) and surfaces a `mailto:hi@nextfemai.com` fallback.

## Project layout

```
src/
  components/        # Hero, HowItWorks, IsThisForYou, WhatYouGet, ApplicationForm, Footer
  hooks/useReveal.ts # IntersectionObserver scroll-reveal (jsdom-safe)
  index.css          # Tailwind v4 @theme tokens + keyframes
public/              # Logos, favicon
n8n/                 # Workflow JSON (intake + error-notifier)
docs/                # Design notes
```

## Form → Notion contract

Form field names in `src/components/ApplicationForm.tsx` are contract-bound to Notion columns via the n8n workflow. Renaming either side without updating the other breaks submissions.

| Form field      | Notion column         |
|-----------------|-----------------------|
| firstName       | First name (title)    |
| email           | Email                 |
| building        | Building              |
| tools           | Tools                 |
| wantFromCommunity | Want from community |
| link            | Link (optional)       |

Intake flow: Webhook → Notion (save applicant, Status = "New") + Telegram (ping Jana) + confirmation email to the applicant acknowledging their application, in parallel. Error workflow alerts via Telegram on silent node failures.

## Brand

- Purple `#ada2cc` — accent
- Turquoise `#9fd7d5` — "Yes" underline + card hover
- Coral `#e76e50` — CTA buttons + apply-bar live dot (nowhere else)
- Near-black `#0e0d12` — text/borders
- Font: DM Sans (Google Fonts, loaded in `index.html`)
- No rounded corners (global reset); round elements opt in via `border-radius: 9999px !important`
- No gradients, shadows, or glassmorphism

See `CLAUDE.md` for the full design spec and gotchas.
