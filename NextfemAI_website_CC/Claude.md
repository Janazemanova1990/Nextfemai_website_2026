# NextFem AI — Builder Community Website

## What This Is
A single page website for the NextFem AI Build stream.
A peer community for women who are already building with AI —
vibe coding, Claude Code, automations, agents. Not for beginners.

## One offer only
- 10€/month commitment fee
- Application only, limited spots
- Monthly live session + Discord community

## Tech Stack
- React 19 + Vite 8
- Tailwind CSS v4 (uses @tailwindcss/vite plugin — no tailwind.config.js)
- Brand tokens defined in src/index.css via @theme {}
- Single page, no router
- Vitest + React Testing Library for tests
- src/hooks/useReveal.ts — IntersectionObserver-based scroll reveal hook (jsdom-safe)

## Form Backend
- Form POSTs JSON to VITE_FORM_WEBHOOK_URL (n8n webhook)
- No backend in this app
- On submit: Telegram notification to Jana → manual review in Notion → welcome email is manual for now (not yet wired into n8n)
- On webhook error: form stashes draft to localStorage (key `nextfem-application-draft`) and shows a mailto fallback link to hi@nextfemai.com so applicants aren't lost. Draft is cleared on success.

## n8n workflow
- Intake workflow: n8n/nextfem-application-intake.json (source of truth)
- Error-notifier workflow: n8n/nextfem-error-notifier.json — Error Trigger → Telegram alert. Referenced from the intake workflow's `settings.errorWorkflow` so silent node failures (Notion/Telegram) still page Jana.
- n8n instance: self-hosted at n8n.srv1408736.hstgr.cloud
- Webhook path: /webhook/nextfem-application
- Flow: Webhook → parallel fan-out to Notion (save applicant, Status="New") + Telegram (ping Jana)

## Form field ↔ Notion column contract
Form field names in src/components/ApplicationForm.tsx are contract-bound to Notion column mappings in the n8n workflow. Renaming either side without updating the other breaks submission writes.

| Form field (camelCase) | Notion column |
|---|---|
| firstName | First name (title) |
| email | Email |
| building | Building |
| tools | Tools |
| wantFromCommunity | Want from community |
| link | Link (optional — n8n skips if empty via "Ignore If Empty") |

If you rename any form field, update the matching expression in the Notion node of the n8n workflow AND the Notion column, or submissions fail with a validation error.

## Brand
- Purple: #ada2cc — primary accent, eyebrows, icons
- Turquoise: #9fd7d5 — "Yes" column underline only
- Coral: #e76e50 — CTA buttons ONLY, nothing else
- Near-black: #0e0d12 — text, borders, footer bg
- Background: #ffffff / #f8f7fc
- Font: DM Sans (Google Fonts, loaded in index.html)

## Logo Files (in public/)
- nextfem-horizontal-transparent.png — used in hero top bar (h-8)
- nextfem-favicon-transparent.png — used in footer (h-6) and as favicon
- nextfem-vertical-transparent.png — available but not currently used

## Visual Style
- Swiss Poster Grid hero (hard 2px borders, strict grid)
- Warm/clean below the hero (soft 1px borders)
- No rounded corners anywhere (enforced via * { border-radius: 0 !important })
- No gradients, no shadows, no glassmorphism

## Motion
- CSS-only. No motion libraries (no framer-motion, gsap, motion). The snap aesthetic doesn't suit JS spring physics.
- Easing: ease-out or linear. No spring, no bounce.
- Durations: 80–420ms micro, ~920ms ceiling for the hero entrance sequence.
- Keyframes live in src/index.css alongside @theme tokens, not a separate file.
- All motion must respect @media (prefers-reduced-motion: reduce).
- Scroll reveals use the useReveal hook (src/hooks/useReveal.ts) — IntersectionObserver with a jsdom fallback. Apply the hook directly to a section's root element with the .section-reveal class. No wrapper component.

## Page Sections (in order)
1. Hero — logo bar, headline with outlined "building", price box, CTA, stats bar
2. How it works — 3 numbered steps
3. Is this for you — two-column yes/no
4. What you get — 2×2 cards + dark price bar
5. Application form — 6 fields, webhook POST
6. Footer

## Stats Bar (Hero)
No member count — uses founding cohort framing:
- "Founding cohort" / be one of the first
- 1× / live · month
- "Application" / only

## What Claude Gets Wrong
- Coral is for CTA buttons only — never decorative
- No Lorem ipsum — all copy is final (see design spec)
- No extra pages, no router
- DM Sans loads from Google Fonts in index.html — do not use next/font or local import
- Keep it warm, not corporate
- Tailwind v4 — no tailwind.config.js, tokens go in src/index.css @theme block
- Do not animate text by replacing it with inline SVG <text> for stroke-draw effects. SVG text baseline metrics don't reliably match surrounding CSS text — you get descender clipping and baseline drift. Use CSS clip-path on real text instead.
- All animations must respect prefers-reduced-motion: reduce. Test with DevTools → Rendering → Emulate.
- For clip-path wipes on text with tight leading (e.g. leading-[0.85] in the hero), use NEGATIVE top/bottom insets in the keyframe (e.g. inset(-30% -5% -30% -5%)) so descenders/ascenders aren't cropped at the line box.
