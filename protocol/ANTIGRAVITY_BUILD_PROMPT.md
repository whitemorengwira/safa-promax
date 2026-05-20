# SA FILM ACADEMY — WEBSITE BUILD MANDATE FOR GOOGLE ANTIGRAVITY

> **Version:** 1.0
> **Target IDE:** Google Antigravity (agentic, VS Code based)
> **Host OS:** Windows 11 — use **Windows PowerShell** syntax for every terminal command
> **Source of truth:** the attached file `safa-strategy.html` (the cinematic strategy deck)
> **Goal:** convert that single-file deck into a production-grade, multi-page, mobile- and desktop-friendly **Next.js website** with smart AI tools and agentic workflows.

---

## 0. HOW TO READ THIS DOCUMENT

You are an agentic builder. This mandate is your complete brief. Work through it **top to bottom, one phase at a time**, and do not skip steps. After each phase, pause and let me verify in the browser before continuing. I am a careful builder who checks each change before moving on, so deliver complete files rather than tiny inline diffs, and tell me exactly where to click or what command to run.

The attached `safa-strategy.html` is the **content and design source of truth**. Every word of copy, every statistic, every section heading, and the entire colour-and-type system come from that file. Your job is not to invent new content; it is to **re-architect the existing content into a real website** and frame it in high-end visuals.

---

## 1. MISSION

Turn the SA Film Academy strategy deck into the best film-institution website in South Africa, judged by 2026 standards. It must:

1. Preserve **100% of the existing text** from `safa-strategy.html` (see Rule A below — this is absolute).
2. Feel **70% visual, 30% text** on every page (see Rule B).
3. Use **only Black people** in any human imagery, and lean on icons, infographics, macro textures, and abstract data-flow visuals everywhere else (see Rule C).
4. Use **image placeholders** with precise **Getty Images search briefs** underneath each — never AI-generated images (see Rule D).
5. Apply a **Ken Burns effect** to every image placeholder (see Rule E).
6. Be fully **responsive** (mobile-first, scaling up to large desktop).
7. Be **super organised**: every page in its own file, header and footer as separate shared components.
8. Carry **AI smart tools** and **agentic workflows** wired to the APIs in `.env.local`.

---

## 2. NON-NEGOTIABLE RULES

These rules override any other instinct you have. If a rule conflicts with a convenience, the rule wins.

### Rule A — Text Integrity (ABSOLUTE)
**Do NOT delete, summarise, shorten, paraphrase, or rewrite any existing text** from `safa-strategy.html`. Every sentence, every statistic, every heading, every list item must appear in the website verbatim. You may only:
- Re-wrap text into components and pages.
- Add new framing elements **around** the text (image frames, motion wrappers, layout grids).
- Fix obvious HTML-entity artefacts (e.g. render `&amp;` as `&`).

If you ever feel the urge to "tighten" a paragraph, stop. The copy is final.

### Rule B — 70/30 Visual-to-Text Ratio
Each page must read as roughly **70% visual surface, 30% text**. Achieve this with:
- Large cinematic image bands (the Getty placeholders).
- The existing bespoke SVG diagrams from the deck (port them across as React/SVG components).
- Generous negative space, full-bleed sections, and oversized typographic moments.
- Never wall-to-wall paragraphs: break long copy into columns or interleave it with visuals.

### Rule C — The Black People Rule
Every human figure in any image, illustration, or motion graphic must depict **Black people** (specifically South African / African film-industry contexts where possible). Where people are not the subject, prefer **icons, infographics, macro textures, and abstract data-flow** visuals. This rule applies to every placeholder you create.

### Rule D — Image Placeholders, NOT AI Images
Do **not** generate AI images and do **not** hot-link random stock. Instead, for every image slot:
1. Render a styled **placeholder box** (dark surface, gold hairline border, centred caption "IMAGE PLACEHOLDER").
2. Directly **underneath the placeholder**, render a visible, copy-pasteable **Getty Images Brief** block containing: the exact search phrase to use on Getty, the orientation, the mood, and the Black People Rule reminder.
3. Wire the placeholder so that when I later drop a real file into `/public/images/...` (or an R2 URL), the image displays and the brief can be removed by deleting one line.

Section 9 of this document gives the **exact Getty brief for every image on every page**. Use those briefs verbatim.

### Rule E — Ken Burns On Every Image
Every image placeholder (and later, every real image) must animate with a slow **Ken Burns effect** (gentle scale + pan over 18–25 seconds, infinite alternate). Implement once as a reusable component/class and apply it everywhere. It must respect `prefers-reduced-motion` and stop animating for users who request reduced motion.

### Rule F — British English & No Em Dashes
All copy is **British English** (programme, organisation, colour, recognise, whilst, authorised). The source text already follows this — preserve it. **Do not introduce em dashes** into any body copy; the source uses commas, full stops, and spaced en dashes where needed. Match that.

### Rule G — Preserve the Design System Exactly
Use the exact tokens in Section 4. Do not invent new brand colours. The "cinematic dark gold" identity is locked.

---

## 3. TECH STACK

Build with the following. These match the existing Socinga / SA Film Academy toolchain so everything is familiar.

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js 15** (App Router) | React Server Components by default |
| Language | **TypeScript** (strict mode) | `"strict": true` in tsconfig |
| Styling | **Tailwind CSS v3.4** | plus a small `globals.css` for tokens + Ken Burns |
| Animation | **Framer Motion** | scroll-triggered reveals, text float, page transitions |
| Icons | **lucide-react** | for UI + infographic icons |
| Fonts | **next/font/google** | Playfair Display, Cormorant Garamond, Outfit, DM Sans |
| Database | **Supabase** (primary project) | leads, tool submissions, content drafts |
| AI models | **Anthropic Claude** (primary), **Gemini**, **Groq** | smart tools + agentic drafting |
| Email | **Resend** | lead notifications, tool result delivery |
| WhatsApp | **CallMeBot** | free lead alerts to the team |
| Orchestration | **n8n** | the five agentic workflows |
| Object storage | **Cloudflare R2** | hosting heavy media + downloaded Getty originals |
| Toasts | **sonner** | success/error feedback in tools |

All keys live in `.env.local` (already provided alongside this mandate). Read Section 8 for how to wire each one. **Never** hard-code a secret in a component. **Never** expose a non-`NEXT_PUBLIC_` variable to the browser.

---

## 4. DESIGN SYSTEM (LOCKED — copy verbatim into `globals.css`)

These are the exact tokens lifted from `safa-strategy.html`. Put them on `:root`.

```css
:root {
  /* Surfaces */
  --bg: #09090e;
  --bg-deep: #05050a;
  --surface: #13131a;
  --surface-2: #1c1c25;

  /* Brand gold + red */
  --gold: #C9A84C;
  --gold-soft: #E0C268;
  --gold-deep: #9B7F2D;
  --red: #8B1A1A;
  --red-deep: #5A0F0F;

  /* Text */
  --text: #E8E0D0;
  --muted: rgba(232, 224, 208, 0.62);

  /* Lines + shadows */
  --line: rgba(201, 168, 76, 0.18);
  --line-strong: rgba(201, 168, 76, 0.42);
  --shadow-1: 0 30px 80px rgba(0, 0, 0, 0.55);
  --shadow-gold: 0 0 60px rgba(201, 168, 76, 0.18);

  /* Type */
  --font-display: 'Playfair Display', 'Cormorant Garamond', serif;
  --font-display-alt: 'Cormorant Garamond', serif;
  --font-body: 'Outfit', 'DM Sans', sans-serif;

  /* Layout */
  --max: 1320px;
  --gutter: clamp(20px, 4vw, 56px);
  --section-y: clamp(96px, 14vh, 180px);
}
```

**Tailwind mapping:** extend `tailwind.config.ts` so these are usable as Tailwind classes (e.g. `bg-bg`, `text-gold`, `border-line`). Map the fonts to `font-display` and `font-body` utilities. Keep **border-radius at 0** everywhere (sharp, editorial corners) unless a component genuinely needs rounding.

**Typographic rules (from the deck):**
- Headings: Playfair Display, often italic for emphasis spans.
- Body: Outfit / DM Sans.
- Eyebrow labels: Outfit, uppercase, wide letter-spacing (3–5px), gold, small (10–11px).
- Big "drop cap" on the opening executive paragraph.

---

## 5. FILE ARCHITECTURE (super organised — every page its own file)

Build exactly this tree. Header and footer are **separate shared components**. Each strategy section becomes **its own section component file**, and the long-form pages each get **their own route file**.

```
safa-website/
├── .env.local                      # secrets (already provided; never commit)
├── .env.example                    # safe template (already provided)
├── .gitignore                      # protects secrets (already provided)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── postcss.config.mjs
│
├── public/
│   └── images/
│       ├── getty-originals/        # you drop downloaded Getty files here (git-ignored)
│       └── placeholders/           # any local placeholder art
│
└── src/
    ├── app/
    │   ├── layout.tsx              # root layout: fonts, Header, Footer, <main>
    │   ├── globals.css             # tokens + Ken Burns + base styles
    │   ├── page.tsx                # HOME (hero + strategy overview + CTAs)
    │   │
    │   ├── strategy/               # the 18 strategy sections, as readable pages
    │   │   ├── layout.tsx          # shared side-nav for strategy pages
    │   │   ├── organisation/page.tsx        # Section 02
    │   │   ├── ecosystem/page.tsx           # Section 03
    │   │   ├── infrastructure/page.tsx      # Section 04 (Cineterns)
    │   │   ├── calendar/page.tsx            # Section 05
    │   │   ├── agentic-ai/page.tsx          # Section 06
    │   │   ├── seo/page.tsx                 # Section 07
    │   │   ├── brand/page.tsx               # Section 08
    │   │   ├── leadership/page.tsx          # Section 09
    │   │   ├── commercial/page.tsx          # Section 10 (B-BBEE)
    │   │   ├── community/page.tsx           # Section 11
    │   │   ├── content/page.tsx             # Section 12
    │   │   ├── partnerships/page.tsx        # Section 13
    │   │   ├── positioning/page.tsx         # Section 14
    │   │   ├── curriculum/page.tsx          # Section 15
    │   │   ├── kpis/page.tsx                # Section 16
    │   │   ├── budget/page.tsx              # Section 17
    │   │   └── implementation/page.tsx      # Section 18
    │   │
    │   ├── smart-tools/             # the AI tools hub
    │   │   ├── page.tsx                      # tools index
    │   │   ├── skills-levy-calculator/page.tsx
    │   │   ├── bbbee-estimator/page.tsx
    │   │   ├── funding-assistant/page.tsx
    │   │   ├── talent-match/page.tsx
    │   │   ├── content-studio/page.tsx
    │   │   └── presentation-builder/page.tsx
    │   │
    │   ├── contact/page.tsx
    │   │
    │   └── api/                     # server routes (secrets stay here)
    │       ├── ai/route.ts                   # unified model proxy (Claude/Gemini/Groq)
    │       ├── skills-levy/route.ts          # calculator logic
    │       ├── funding-draft/route.ts        # Claude funding narrative
    │       ├── talent-match/route.ts         # agentic matching
    │       ├── content-draft/route.ts        # blog/social drafting
    │       ├── lead/route.ts                 # save lead -> Supabase + Resend + CallMeBot
    │       └── n8n-trigger/route.ts          # fire an n8n workflow
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx           # SEPARATE shared header
    │   │   ├── Footer.tsx           # SEPARATE shared footer
    │   │   ├── Nav.tsx              # primary nav (sticky, scroll-aware)
    │   │   └── MobileMenu.tsx       # hamburger drawer for mobile
    │   │
    │   ├── sections/                # ONE FILE PER STRATEGY SECTION
    │   │   ├── Hero.tsx
    │   │   ├── Organisation.tsx
    │   │   ├── Ecosystem.tsx
    │   │   ├── Infrastructure.tsx
    │   │   ├── Calendar.tsx
    │   │   ├── AgenticAI.tsx
    │   │   ├── Seo.tsx
    │   │   ├── Brand.tsx
    │   │   ├── Leadership.tsx
    │   │   ├── Commercial.tsx
    │   │   ├── Community.tsx
    │   │   ├── Content.tsx
    │   │   ├── Partnerships.tsx
    │   │   ├── Positioning.tsx
    │   │   ├── Curriculum.tsx
    │   │   ├── Kpis.tsx
    │   │   ├── Budget.tsx
    │   │   └── Implementation.tsx
    │   │
    │   ├── visuals/
    │   │   ├── ImagePlaceholder.tsx # the Getty placeholder + brief + Ken Burns
    │   │   ├── KenBurns.tsx         # wrapper applying the Ken Burns motion
    │   │   ├── FilmstripDivider.tsx # the sprocket-hole divider from the deck
    │   │   ├── SvgStage.tsx         # frame wrapper for the ported SVG diagrams
    │   │   └── svgs/                # each bespoke SVG diagram from the deck
    │   │       ├── CameraLens.tsx
    │   │       ├── CircuitTopology.tsx
    │   │       ├── OrbitalAI.tsx
    │   │       ├── RadarChart.tsx
    │   │       ├── NeuralNetwork.tsx
    │   │       ├── KpiGauges.tsx
    │   │       ├── BudgetBars.tsx
    │   │       └── ...(one per diagram)
    │   │
    │   ├── motion/
    │   │   ├── Reveal.tsx           # scroll-triggered fade/rise wrapper
    │   │   ├── WordReveal.tsx       # word-by-word heading entrance
    │   │   └── Counter.tsx          # animated number counter
    │   │
    │   ├── tools/
    │   │   ├── ToolCard.tsx
    │   │   ├── ToolShell.tsx        # shared layout/skeleton for each tool
    │   │   └── ResultPanel.tsx
    │   │
    │   └── ui/
    │       ├── Button.tsx
    │       ├── Card.tsx
    │       ├── Table.tsx
    │       ├── Eyebrow.tsx
    │       └── SectionHead.tsx
    │
    ├── lib/
    │   ├── supabase/
    │   │   ├── client.ts            # browser client (anon key)
    │   │   └── server.ts            # server client (service role; server-only)
    │   ├── ai/
    │   │   ├── anthropic.ts         # Claude wrapper
    │   │   ├── gemini.ts            # Gemini wrapper
    │   │   └── groq.ts              # Groq wrapper
    │   ├── email/resend.ts          # Resend wrapper
    │   ├── whatsapp/callmebot.ts    # CallMeBot wrapper
    │   ├── n8n.ts                   # n8n trigger helper
    │   ├── r2.ts                    # Cloudflare R2 (S3) client
    │   └── content/                 # the verbatim strategy copy, as typed data
    │       ├── hero.ts
    │       ├── organisation.ts
    │       ├── ... (one per section)
    │       └── index.ts
    │
    └── data/
        ├── nav.ts                   # nav + route map
        ├── tools.ts                 # smart-tools registry
        └── getty-briefs.ts          # every Getty brief, keyed by image slot
```

**Why this structure:** keeping each section in its own file means I can review and tweak one section without touching the others. The `lib/content/*` files hold the **verbatim copy** as typed constants, which is how we guarantee Rule A (text integrity): the words live in one obvious place, are imported into the section components, and are never accidentally edited during a layout change.

---

*(Continued in the following sections of this mandate: Phases, Header/Footer, Section-by-section conversion, Getty briefs, Motion, Smart Tools, Agentic Workflows, API wiring, Responsive, QA.)*

---

## 6. BUILD PHASES (work through these in order; pause for my review after each)

Think of this as building a house: foundation first, then the frame, then the rooms, then the finishes. Do not start fitting the kitchen before the walls stand.

**Phase 0 — Scaffold.** Create the Next.js 15 + TypeScript + Tailwind app. Install dependencies. Drop in `globals.css` with the tokens from Section 4. Wire `next/font/google` for the four fonts. Confirm a blank styled page renders on `pnpm dev` (or `npm run dev`).
*PowerShell:* `npx create-next-app@latest safa-website --typescript --tailwind --app --src-dir --import-alias "@/*"`

**Phase 1 — Shared shell.** Build `Header.tsx`, `Footer.tsx`, `Nav.tsx`, `MobileMenu.tsx`, and the root `layout.tsx` that wraps every page. Build the visual primitives in `components/visuals/` and `components/motion/`. This is the frame.

**Phase 2 — Content extraction.** Port every word from `safa-strategy.html` into `lib/content/*.ts` as typed constants, section by section. This is the single most important phase for Rule A. Verify nothing is lost by diffing word counts against the source.

**Phase 3 — Section components.** Build one `components/sections/*.tsx` per strategy section, importing copy from `lib/content` and laying it out per the per-section spec in Section 7 of this mandate. Port the bespoke SVG diagrams into `components/visuals/svgs/`.

**Phase 4 — Pages & routing.** Wire the home page and the `/strategy/*` routes. Each route renders its section component inside the strategy layout with its side-nav.

**Phase 5 — Image placeholders + Getty briefs.** Place every `ImagePlaceholder` with its exact Getty brief from Section 9. Apply Ken Burns everywhere.

**Phase 6 — Motion pass.** Add scroll-triggered reveals, word-by-word headings, animated counters, page transitions. Tune timings. Honour `prefers-reduced-motion`.

**Phase 7 — Smart tools.** Build the tools hub and each tool page, plus the `api/*` routes that power them. Wire the AI providers.

**Phase 8 — Agentic workflows.** Wire n8n triggers and the lead pipeline (Supabase + Resend + CallMeBot).

**Phase 9 — Responsive + QA.** Test every breakpoint. Run the acceptance checklist in Section 12.

---

## 7. HEADER & FOOTER (separate, shared components)

### `components/layout/Header.tsx`
- Sticky to the top; transparent over the hero, then gains a `--surface` background with a gold hairline bottom border after 50px of scroll (port the `.scrolled` behaviour from the deck's JS).
- Left: the SA Film Academy wordmark in Playfair Display, gold.
- Centre/right (desktop): primary nav from `data/nav.ts` — Home, Strategy (dropdown of the 18 sections), Smart Tools, Contact. Active route is underlined in gold.
- Right: a primary CTA button linking to the Cineterns talent portal (`NEXT_PUBLIC_CINETERNS_URL`), opening in a new tab with `rel="noopener"`.
- Mobile (< 1024px): collapse nav into a hamburger that opens `MobileMenu.tsx` (a full-height drawer, dark, with large tap targets — minimum 44px).

### `components/layout/Footer.tsx`
- Three zones: (1) the institutional tagline "Where Industry Meets Opportunity." in italic Playfair; (2) the digital presence row — `safilmacademy.org`, `greenset.org`, the Cineterns talent portal, plus Facebook *TheSAFilmAcademy* and Instagram *@safilmacademy*; (3) a small print row with the strapline "SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027".
- Do **not** add prototype URLs beyond the Cineterns talent-portal link already specified.
- All external links open in a new tab with `rel="noopener"`.

### `components/layout/Nav.tsx` + `MobileMenu.tsx`
- Drive both from a single `data/nav.ts` source so desktop and mobile never drift.
- Implement active-section highlighting with an IntersectionObserver on long pages (port from the deck's JS).

---

## 8. REUSABLE VISUAL PRIMITIVES

### `components/visuals/KenBurns.tsx` (Rule E)
A wrapper that applies a slow, infinite, alternating scale-and-pan to its child image. Reference implementation:

```tsx
// KenBurns.tsx — applies a slow cinematic drift to any image.
// Why: per Rule E, every image must feel alive, like a film frame
// being gently pushed in on. The motion is deliberately slow
// (20s) so it reads as cinematic, not jittery.
'use client';
import { ReactNode } from 'react';

export function KenBurns({ children }: { children: ReactNode }) {
  return (
    <div className="kenburns-frame">
      {children}
    </div>
  );
}
```

```css
/* globals.css — Ken Burns motion */
.kenburns-frame {
  overflow: hidden;        /* the image scales beyond the frame; clip it */
  position: relative;
}
.kenburns-frame > img,
.kenburns-frame > .placeholder-fill {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center;
  animation: kenburns 22s ease-in-out infinite alternate;
}
@keyframes kenburns {
  0%   { transform: scale(1.0) translate(0, 0); }
  100% { transform: scale(1.12) translate(-2%, -2%); }
}
/* Accessibility: stop the drift if the user asked for less motion */
@media (prefers-reduced-motion: reduce) {
  .kenburns-frame > img,
  .kenburns-frame > .placeholder-fill { animation: none; }
}
```

### `components/visuals/ImagePlaceholder.tsx` (Rule D)
The heart of the image system. It renders a placeholder until a real `src` is supplied, always wraps the visual in `KenBurns`, and always prints the Getty brief beneath it so I know exactly what to download.

```tsx
// ImagePlaceholder.tsx
// Why this exists: per Rule D we never use AI images. Until I drop a
// real Getty file in, this shows a styled placeholder PLUS a visible,
// copy-pasteable brief telling me exactly what to search for on Getty.
// When I add `src`, the image displays (with Ken Burns) and I can
// delete the <GettyBrief> line to hide the instructions.
'use client';
import Image from 'next/image';
import { KenBurns } from './KenBurns';

type Props = {
  src?: string;            // leave undefined to show the placeholder
  alt: string;
  brief: string;           // the Getty search phrase (from data/getty-briefs.ts)
  orientation?: 'landscape' | 'portrait' | 'square';
  className?: string;
};

export function ImagePlaceholder({ src, alt, brief, orientation = 'landscape', className }: Props) {
  const ratio =
    orientation === 'portrait' ? 'aspect-[3/4]'
    : orientation === 'square' ? 'aspect-square'
    : 'aspect-[16/9]';

  return (
    <figure className={className}>
      <KenBurns>
        <div className={`placeholder-fill ${ratio} w-full bg-surface border border-line-strong
                         flex items-center justify-center`}>
          {src
            ? <Image src={src} alt={alt} fill className="object-cover" />
            : <span className="font-body tracking-[4px] text-gold/60 text-xs uppercase">
                Image Placeholder
              </span>}
        </div>
      </KenBurns>

      {/* GETTY BRIEF — delete this block once the real image is in place */}
      {!src && (
        <figcaption className="mt-3 border-l-2 border-gold/50 pl-3 py-1
                               font-body text-[12px] leading-relaxed text-muted">
          <strong className="text-gold tracking-wider">GETTY BRIEF · </strong>{brief}
          <span className="block mt-1 text-gold/50 text-[11px]">
            Black People Rule applies. Cinematic, editorial, high-end. Apply Ken Burns once placed.
          </span>
        </figcaption>
      )}
    </figure>
  );
}
```

### `components/visuals/FilmstripDivider.tsx`
Port the sprocket-hole filmstrip divider from the deck and place it between sections.

### `components/motion/Reveal.tsx`, `WordReveal.tsx`, `Counter.tsx`
Framer-Motion equivalents of the deck's IntersectionObserver behaviours (see Section 10).


---

## 9. SECTION-BY-SECTION CONVERSION SPEC

For each section: the source `id` in `safa-strategy.html`, the component + route to create, the bespoke SVG to port, and the layout intent. **Pull the exact copy from the source file** (Rule A). Image briefs for each are in Section 10.

### Home (`/`) — `Hero.tsx` (source `#hero`)
Full-viewport cinematic hero. Background = a full-bleed image placeholder with Ken Burns + a dark gradient scrim so text stays legible. Foreground: the eyebrow-free H1 "SA Film Academy — 360° Marketing Strategy 2026–2027", the subtitle, and the executive opening paragraph (with the drop-cap on the first letter, exactly as in the source). Below the fold, a short index of the 18 strategy sections as cards linking into `/strategy/*`, and two CTAs: "Explore the Strategy" and "Visit the Talent Portal" (Cineterns). Port the **camera-lens SVG** as a floating accent.

### `/strategy/organisation` — `Organisation.tsx` (source `#org`)
Two-column: the cartographic SA network SVG on one side, the verbatim copy on the other. Include the stat-band beneath (R60m+, 3,000+, 500+, 96%, 58%, 124) using animated `Counter` components.

### `/strategy/ecosystem` — `Ecosystem.tsx` (source `#ecosystem`)
The five-entity modular blocks (SAFA, ACE, FILMGRO, GreenSet, Cineterns). Each block = a card with its ported mini-SVG + an image placeholder. Keep all five descriptions verbatim.

### `/strategy/infrastructure` — `Infrastructure.tsx` (source `#infra`)
Port the **circuit-topology SVG** with the travelling dots (use Framer Motion or SVG `animateMotion`). Two cards: "Cineterns — the placement portal" and "the presentation engine". Keep the technical commercial-translation table. Add a prominent live link to the Cineterns talent portal.

### `/strategy/calendar` — `Calendar.tsx` (source `#calendar`)
The four-quarter timeline. Port the quarter SVG/layout. Each quarter is a column with its verbatim bullet list. Make the timeline horizontally scrollable on mobile.

### `/strategy/agentic-ai` — `AgenticAI.tsx` (source `#ai`)
Port the **orbital satellite SVG**. Lay out the five named workflows as cards. Keep all copy verbatim. This page should visually foreshadow the Smart Tools section.

### `/strategy/seo` — `Seo.tsx` (source `#seo`)
Port the **radial topic-cluster tree SVG**. Verbatim copy on AI SEO and entity disambiguation.

### `/strategy/brand` — `Brand.tsx` (source `#brand`)
Port the **overlapping geometric family SVG**. Keep the brand-architecture copy and the power-brand title list (Devil's Peak, Warrior, The Woman King, etc.) verbatim.

### `/strategy/leadership` — `Leadership.tsx` (source `#leader`)
"Institutional Voice & Executive Visibility." Port the **signal-wave network SVG**. Keep the 90-day executive-visibility table verbatim.

### `/strategy/commercial` — `Commercial.tsx` (source `#commercial`)
B-BBEE & Skills Levy. Port the **Sankey financial-flow SVG**. Keep the levy mechanics verbatim. End with a CTA into the **Skills Levy Calculator** smart tool.

### `/strategy/community` — `Community.tsx` (source `#community`)
The tiered career mesh SVG. Keep the four-tier progression copy and the six community cards verbatim.

### `/strategy/content` — `Content.tsx` (source `#content`)
The editorial publication-grid SVG. Keep the five content pillars and all stream descriptions verbatim.

### `/strategy/partnerships` — `Partnerships.tsx` (source `#partners`)
The radiating signal-wave partnership topology SVG. Keep the six partnership cards verbatim.

### `/strategy/positioning` — `Positioning.tsx` (source `#position`)
Port the **radar/spider chart SVG** (SA Film Academy Position vs Sector Baseline). Keep the six-dimension table verbatim.

### `/strategy/curriculum` — `Curriculum.tsx` (source `#curriculum`)
Port the **neural-network SVG** (nodes only, no human figures). Keep the AI-curriculum copy and six cards verbatim.

### `/strategy/kpis` — `Kpis.tsx` (source `#kpis`)
Port the **animated KPI gauges SVG**. Keep the full 16-row KPI table verbatim with its functional owner labels.

### `/strategy/budget` — `Budget.tsx` (source `#budget`)
Port the **animated budget bar-chart SVG**. Keep the line-item table and the six budget cards verbatim.

### `/strategy/implementation` — `Implementation.tsx` (source `#resolution`)
The three-track activation map SVG. Keep all copy verbatim, including the Cineterns conversion-engine block and the EmpowerYouth presentation-standard block. The Cineterns CTAs (Register, For Employers, Browse Interns) must be live links to the talent portal. End with the stat-band and the closing tagline.

> **Porting the SVGs:** each bespoke SVG in the deck is plain inline SVG. Move each into its own file under `components/visuals/svgs/` as a React component returning the same SVG markup, with colours swapped to `currentColor` or the CSS tokens where sensible. Keep the `<animate>` / `<animateMotion>` elements; they work inside React. Where an SVG had IntersectionObserver-driven draw-in, wrap it in the `Reveal` motion component instead.


---

## 10. GETTY IMAGE BRIEFS (use verbatim — one per image slot)

These are the exact search briefs to drop into each `ImagePlaceholder`'s `brief` prop, and to store in `data/getty-briefs.ts` keyed by slot id. **Every brief assumes the Black People Rule.** When people appear they must be Black; otherwise prefer icons, infographics, macro textures, and abstract data-flow. Search these phrases on Getty, pick the most cinematic editorial result, download to `public/images/getty-originals/`, then set the `src`.

> **Getty search tips:** filter by *Creative* (not Editorial, to avoid licensing limits), orientation as noted, and "Africa / South Africa" where location matters. Prefer warm, low-key, gold-and-shadow lighting to match the brand. Avoid bright corporate stock; you want film-set realism and texture.

### HOME / HERO
- **hero-bg** — *"Black African film crew on a professional movie set at golden hour, cinematic low-key lighting, camera and rig silhouettes, atmospheric haze"* · landscape, full-bleed · mood: epic, cinematic, aspirational.
- **hero-accent** *(optional)* — *"macro close-up of a cinema camera lens with gold reflections on black background"* · square · mood: precise, premium.

### SECTION 02 — THE ORGANISATION
- **org-main** — *"confident Black South African film professional reviewing footage on a studio monitor, behind the scenes, warm rim light"* · landscape · mood: authoritative, calm.
- **org-texture** — *"abstract gold particle network on deep navy background, connected nodes, data constellation"* · landscape · mood: systemic, map-like (pairs with the cartographic SVG).

### SECTION 03 — THE BRAND ECOSYSTEM
- **eco-safa** — *"Black film students collaborating around a clapperboard in a modern training studio"* · landscape · mood: collaborative.
- **eco-ace** — *"young Black African filmmaker directing on set, holding a small monitor, focused expression"* · portrait · mood: ascendant, creative authority.
- **eco-filmgro** — *"Black driving instructor and learner beside a branded vehicle on a film location, daytime"* · landscape · mood: practical, opportunity.
- **eco-greenset** — *"sustainable film set with solar power units and reusable equipment, eco production, Black crew member checking equipment"* · landscape · mood: responsible, modern.
- **eco-cineterns** — *"over-the-shoulder of a Black creative professional using a laptop showing a talent web portal, modern workspace"* · landscape · mood: digital, connective.

### SECTION 04 — DIGITAL INFRASTRUCTURE (CINETERNS)
- **infra-portal** — *"Black film industry professional browsing a sleek dark web portal on a laptop, gold UI accents, night workspace"* · landscape · mood: cutting-edge, trustworthy.
- **infra-texture** — *"abstract circuit board macro with flowing light traces on dark background, data moving through nodes"* · landscape · mood: infrastructural (pairs with the circuit SVG).

### SECTION 05 — 12-MONTH CALENDAR
- **calendar-texture** — *"abstract gold timeline of light segments receding into darkness, four-phase progression, minimal"* · landscape · mood: forward motion, planning.

### SECTION 06 — AGENTIC AI MARKETING ENGINE
- **ai-engine-texture** — *"abstract orbital data system, glowing gold nodes orbiting a central core on black, no humans"* · landscape · mood: autonomous, intelligent (pairs with orbital SVG).
- **ai-engine-human** — *"Black professional reviewing AI-generated drafts on a large screen, thoughtful, supervising automation"* · landscape · mood: human-in-the-loop.

### SECTION 07 — SEO & AI SEO
- **seo-texture** — *"abstract radial tree of connected gold nodes branching outward on dark background, knowledge graph, infographic style"* · landscape · mood: authority, structure.

### SECTION 08 — BRAND ARCHITECTURE
- **brand-texture** — *"overlapping translucent geometric shapes in gold and deep red on black, brand family, abstract"* · landscape · mood: cohesive identity.
- **brand-power** — *"clapperboard and film slate on a high-end production set, dramatic single-source lighting, no faces"* · landscape · mood: prestige, proof.

### SECTION 09 — INSTITUTIONAL VOICE & EXECUTIVE VISIBILITY
- **leader-main** — *"Black female executive speaking confidently at an industry podium or panel, professional, warm stage light"* · landscape · mood: credible, transformed leadership.
- **leader-texture** — *"abstract concentric signal-wave rings emanating from a central gold point on black, broadcast, no humans"* · square · mood: reach, influence (pairs with signal-wave SVG).

### SECTION 10 — B-BBEE & SKILLS LEVY
- **commercial-main** — *"Black production accountant or finance professional reviewing documents and a calculator in a modern office, focused"* · landscape · mood: commercial, compliant.
- **commercial-texture** — *"abstract gold flowing financial pathways, Sankey-style streams splitting on dark background, infographic"* · landscape · mood: value flow (pairs with Sankey SVG).

### SECTION 11 — COMMUNITY & ALUMNI
- **community-main** — *"group of diverse Black South African film alumni networking at an industry event, warm celebratory atmosphere"* · landscape · mood: belonging, progression.
- **community-texture** — *"abstract tiered network mesh of connected gold nodes ascending in layers on black, no humans"* · landscape · mood: career ladder (pairs with mesh SVG).

### SECTION 12 — CONTENT MARKETING
- **content-main** — *"Black podcast host and guest recording in a cinematic studio with microphones, warm low-key lighting"* · landscape · mood: editorial authority, "On Set & On the Record".
- **content-texture** — *"editorial magazine-style grid of dark cinematic panels with gold accents, publication layout, abstract"* · landscape · mood: publication engine.

### SECTION 13 — PARTNERSHIPS, PR & MEDIA
- **partners-main** — *"Black executives shaking hands in a partnership meeting, modern boardroom, golden hour light through windows"* · landscape · mood: alliance, trust.
- **partners-texture** — *"abstract broadcast tower radiating concentric gold signal rings to satellite nodes on black, no humans"* · landscape · mood: amplification (pairs with PR topology SVG).

### SECTION 14 — COMPETITIVE POSITIONING
- **position-texture** — *"abstract six-axis radar/spider chart in gold on dark background, data visualisation, infographic, no humans"* · landscape · mood: differentiation, analytical.

### SECTION 15 — AGENTIC AI IN CURRICULUM
- **curriculum-main** — *"Black film student learning AI video tools on a workstation with dual monitors, generative content on screen, focused"* · landscape · mood: future-ready, 2026.
- **curriculum-texture** — *"abstract neural network of glowing gold nodes and connections on black, layered, no humans"* · landscape · mood: machine intelligence (pairs with neural SVG).

### SECTION 16 — KPIs & DASHBOARD
- **kpis-texture** — *"abstract dashboard of gold circular progress gauges and rings on dark background, data visualisation, infographic, no humans"* · landscape · mood: measurable, rigorous.

### SECTION 17 — BUDGET FRAMEWORK
- **budget-texture** — *"abstract ascending gold bar chart with light glow on black background, financial data visualisation, infographic, no humans"* · landscape · mood: transparent, structured.

### SECTION 18 — IMPLEMENTATION
- **impl-main** — *"Black film crew launching into action on the first day of a production, clapperboard snapping, dynamic energy"* · landscape · mood: momentum, commencement.
- **impl-texture** — *"abstract three parallel gold activation tracks with milestone markers progressing left to right on black, timeline infographic, no humans"* · landscape · mood: three-track schedule.

### SMART TOOLS HUB
- **tools-hero** — *"Black creative professional interacting with a futuristic holographic AI interface, gold light, cinematic, 2026 aesthetic"* · landscape · mood: intelligent, empowering.

> Store all of the above in `data/getty-briefs.ts` as `{ slotId: { brief, orientation } }` and import into each section. That keeps the briefs in one editable place and lets you swap a placeholder for a real image by setting one `src`.


---

## 11. MOTION & ANIMATION SPEC

The deck already proved the motion language; reproduce it with Framer Motion so it survives the move to React. Every motion must respect `prefers-reduced-motion` (disable or soften when set).

**1. Scroll-triggered reveal (`Reveal.tsx`).** Wrap sections, cards, and image frames. On entering the viewport (≈15% visible), fade from 0 → 1 opacity and rise from `translateY(28px) → 0` over ~600ms with an ease-out curve. Stagger children by ~80ms so cards cascade.

**2. Word-by-word heading entrance (`WordReveal.tsx`).** Split each H1/H2 into words; animate each word up-and-in with a 60ms stagger. This is the signature "headline assembles itself" effect from the deck. Skip it inside dense tables.

**3. Text "float" within visuals (Rule from your brief).** Where copy sits over or beside an image band, give the text block a subtle parallax: as the user scrolls, translate the text at ~0.92x scroll speed while the image (under Ken Burns) drifts at 1.0x. The result is the text appearing to float over a living image. Use Framer Motion `useScroll` + `useTransform`.

**4. Animated counters (`Counter.tsx`).** Every statistic (R60m+, 3,000+, 500+, 96%, 58%, 124, and the KPI/budget numbers) counts up from 0 with an ease-out curve over ~1500ms when scrolled into view.

**5. Ken Burns (Rule E).** Already specified in Section 8 — applies to every image, infinite slow drift, reduced-motion aware.

**6. SVG draw-in.** For the bespoke diagrams, animate stroke paths drawing in (`pathLength` 0 → 1) on scroll, and keep the existing `animateMotion` travelling dots running.

**7. Page transitions.** Soft cross-fade + 12px rise between routes using a Framer Motion layout/template wrapper in `app/strategy/layout.tsx`. Keep it quick (~300ms) so navigation never feels sluggish.

**8. Hover states.** Cards lift 4px with a deeper shadow and a gold hairline brightening on hover; CTAs get a gold fill sweep. Keep all hover motion under 200ms.

**Performance guardrails:** animate only `transform` and `opacity` (never `width`/`top`/`left`). Lazy-mount heavy SVGs. Cap simultaneous Ken Burns frames in view; pause off-screen animations.

---

## 12. SMART TOOLS (AI-powered, 2026 standard)

Build a Smart Tools hub at `/smart-tools` with a card per tool, then each tool as its own page with a clean `ToolShell`. Every tool calls a server `api/*` route so secrets never touch the browser. Show a `sonner` toast on success/error and a skeleton/loader while the model thinks. Each tool writes its submission to Supabase for follow-up.

**Tool 1 — Skills Levy Calculator** (`/smart-tools/skills-levy-calculator`)
Pure-logic + light AI. Input: annual payroll/production budget (R). Output: the 1% levy due, the 20% claimable-back amount, the SAFA admin-fee position (capped R350,000), and the recommended 2% set-aside. Then an optional AI "explain my result in plain language" button that calls Claude via `api/skills-levy/route.ts`. End with a CTA to register the production on the Cineterns talent portal.

**Tool 2 — B-BBEE Scorecard Impact Estimator** (`/smart-tools/bbbee-estimator`)
Input: skills-development spend + payroll. Output: indicative skills-development scorecard contribution and a plain-language summary generated by Claude. Always caption results as indicative, not a substitute for a verified B-BBEE rating agency.

**Tool 3 — AI Funding Application Assistant** (`/smart-tools/funding-assistant`)
The flagship. Input: funder (NFVF / DTIC / DSAC / private), programme focus, and a short prompt. The route `api/funding-draft/route.ts` calls Claude with SAFA's pre-loaded profile (NPC status, MICT SETA accreditation, 20-year record, 3,000+ trainees, 500+ productions, R60m+ invested, 96%/58% transformation stats) and returns a structured, British-English, em-dash-free draft narrative. Offer "email this draft to me" via Resend. This mirrors the agentic funding workflow in Strategy Section 06.

**Tool 4 — Talent Match Assistant** (`/smart-tools/talent-match`)
Input: a production brief (role, department, location, dates). The route `api/talent-match/route.ts` uses Claude to score a sample/registered talent set against the brief and returns a ranked shortlist with draft introduction messages. Mirrors the Cineterns matching engine. Link out to the live Cineterns portal to complete the placement.

**Tool 5 — Content Studio** (`/smart-tools/content-studio`)
Input: a content pillar (Skills/B-BBEE legislation, AI in post-production, sustainable production, career-path stories, industry commentary) + a topic. Returns a British-English, SEO-structured long-form draft and three social variants (LinkedIn, Instagram, Facebook). Mirrors the agentic content workflow.

**Tool 6 — Presentation Builder** (`/smart-tools/presentation-builder`)
Input: presentation type (Skills Levy explainer, GreenSet deck, FilmGro proposal, ACE sponsor pitch, NFVF narrative, Cineterns onboarding). Returns a structured cinematic outline in the EmpowerYouth format (the SAFA presentation standard from Strategy Section 18), ready to hand back to Antigravity to render as a web deck.

> **Model routing (`lib/ai/*`):** default to **Claude** for quality drafting; use **Gemini** for long-context or multimodal; use **Groq** for fast, cheap short generations. Build a single `api/ai/route.ts` proxy that accepts `{ provider, system, prompt }` and dispatches to the right wrapper, so adding a tool never means re-wiring providers.

---

## 13. AGENTIC WORKFLOWS (n8n)

The five workflows from Strategy Section 06 run in **n8n** (orchestration), with the website triggering and displaying them. The website never holds long-running jobs; it fires a trigger and reads results from Supabase.

1. **Weekly Funding Scout** — n8n cron monitors NFVF/DTIC/DSAC/Creative SA/private grant calendars, matches against SAFA's eligibility profile, calls Claude to draft a tailored narrative, writes the draft to Supabase, and emails/WhatsApps the team via Resend + CallMeBot. The website's Funding Assistant reads and lets staff finalise drafts.
2. **Content Engine** — n8n cron briefs Claude on the five pillars, generates two long-form drafts/week + social variants, stores them in Supabase as `draft` status for human review in Content Studio.
3. **Talent Matcher** — on a new production brief (from the site or Cineterns), n8n runs the matching prompt and returns a ranked shortlist.
4. **Reputation Monitor** — n8n cron checks LinkedIn/Google/news for SA Film Academy, GreenSet, the Chief Executive, and keywords; surfaces signals weekly; WhatsApps notable items.
5. **Lead Pipeline** — on any tool submission or contact form, `api/lead/route.ts` writes the lead to Supabase, emails the team via Resend, and fires a CallMeBot WhatsApp alert to `CALLMEBOT_PHONE`.

`api/n8n-trigger/route.ts` posts to the relevant n8n webhook using `N8N_API_KEY` + `N8N_BASE_URL`. Keep all of this server-side.

---

## 14. API WIRING (server-side only)

Create thin, well-commented wrappers in `lib/` so tools and routes never touch raw fetch logic.

- **`lib/ai/anthropic.ts`** — wrap the Anthropic Messages API with `ANTHROPIC_API_KEY`. Default model: a current Claude model string. Always pass a British-English, no-em-dash system instruction for any SAFA-facing copy.
- **`lib/ai/gemini.ts`** — wrap Gemini with `GEMINI_API_KEY` for long-context/multimodal.
- **`lib/ai/groq.ts`** — wrap Groq with `GROQ_API_KEY` for fast short generations.
- **`lib/supabase/client.ts`** — browser client using `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- **`lib/supabase/server.ts`** — server client using `SUPABASE_SERVICE_ROLE_KEY`. **Import this only in `api/*` routes and server components.** It bypasses Row-Level Security; never ship it to the client.
- **`lib/email/resend.ts`** — wrap Resend with `RESEND_API_KEY`; send lead + tool-result emails to `ADMIN_EMAIL`.
- **`lib/whatsapp/callmebot.ts`** — GET to CallMeBot with `CALLMEBOT_PHONE` (+ `CALLMEBOT_APIKEY` once you complete the WhatsApp opt-in) for free alerts.
- **`lib/n8n.ts`** — POST to n8n webhooks with `N8N_API_KEY`.
- **`lib/r2.ts`** — S3-compatible client to `CLOUDFLARE_R2_ACCOUNT_ENDPOINT` with the R2 access key/secret; bucket `socinga-heavy-assets`. Public assets serve from `NEXT_PUBLIC_R2_PUBLIC_BASE`. Use this to host downloaded Getty originals and heavy media rather than committing them.

**Supabase schema to create (SQL, run in the primary project):** tables `leads` (id, name, email, phone, source, payload jsonb, created_at), `tool_submissions` (id, tool, inputs jsonb, output text, created_at), `content_drafts` (id, pillar, topic, body text, status, created_at), `funding_drafts` (id, funder, focus, body text, status, created_at). Enable Row-Level Security; allow inserts from the anon role only through the server routes (or keep all writes server-side with the service-role client).

**Security guardrails (important):**
- Every secret stays in `.env.local`; nothing non-`NEXT_PUBLIC_` is ever referenced in a client component.
- All AI/email/WhatsApp/n8n calls happen in `api/*` routes, never in the browser.
- Validate and rate-limit tool inputs server-side.
- After the build is verified, **rotate the keys** that were shared in chat (especially the Supabase `service_role` keys and the Cloudflare R2 secret).

---

## 15. RESPONSIVE & ACCESSIBILITY

- **Mobile-first.** Design at 375px first, then scale up. Breakpoints: `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536.
- Multi-column layouts collapse to single column under `lg`. The 12-month calendar becomes a horizontal swipe on mobile. SVG diagrams scale via `viewBox` + `preserveAspectRatio` and are never allowed to overflow.
- Tap targets ≥ 44px. Nav becomes a hamburger drawer under `lg`.
- Maintain WCAG AA contrast (the gold-on-dark palette already passes for large text; check small text and add weight where needed).
- All images carry meaningful `alt`. All interactive elements are keyboard reachable with visible focus rings in gold.
- Honour `prefers-reduced-motion` across Ken Burns, reveals, counters, and SVG draw-ins.

---

## 16. SEO & METADATA

- Per-page `metadata` (title, description, Open Graph, Twitter card). Titles follow "Section Title · SA Film Academy".
- `metadataBase` = `NEXT_PUBLIC_SITE_URL`. Generate `sitemap.ts` and `robots.ts`.
- JSON-LD `Organization` + `EducationalOrganization` structured data on the home page (name, MICT SETA accreditation, founding 2006, the impact statistics). This directly serves the AI-SEO goal in Strategy Section 07.
- Semantic headings (one H1 per page), descriptive link text, and FAQ-style content where the source provides it.

---

## 17. BUILD & RUN (Windows 11 / PowerShell)

```powershell
# Phase 0 scaffold
npx create-next-app@latest safa-website --typescript --tailwind --app --src-dir --import-alias "@/*"
cd safa-website

# core dependencies
npm install framer-motion lucide-react sonner @supabase/supabase-js
npm install @anthropic-ai/sdk @google/generative-ai groq-sdk
npm install resend @aws-sdk/client-s3

# place the provided .env.local, .env.example and .gitignore at the project root
# (the .env.local already contains every key)

# run the dev server
npm run dev
# open http://localhost:3000
```

Work phase by phase (Section 6). After each phase, run `npm run dev`, open the browser, and confirm before continuing.

---

## 18. ACCEPTANCE CHECKLIST (the build is done when ALL pass)

- [ ] **Text integrity:** every word from `safa-strategy.html` appears verbatim somewhere in the site. No summarising, no rewriting.
- [ ] **70/30:** every page reads as ~70% visual, 30% text.
- [ ] **Black People Rule:** every human image brief specifies Black people; non-human visuals are icons/infographics/textures/data-flow.
- [ ] **Getty placeholders:** every image slot shows a placeholder + a visible, copy-pasteable Getty brief until a real file is added.
- [ ] **Ken Burns:** every image placeholder animates with the slow drift, reduced-motion aware.
- [ ] **British English, no em dashes** throughout.
- [ ] **Separate Header & Footer** components, shared across all pages.
- [ ] **Every page in its own file**; every strategy section in its own component file.
- [ ] **All 18 strategy sections** present as routes, with their bespoke SVGs ported.
- [ ] **Smart tools** all functional, each calling a server route, writing to Supabase, with toast feedback.
- [ ] **Agentic workflows** wired (n8n triggers + lead pipeline via Supabase/Resend/CallMeBot).
- [ ] **No secret** is referenced in any client component; all AI/email/WhatsApp/n8n calls are server-side.
- [ ] **Responsive** at 375 / 768 / 1024 / 1440; mobile nav drawer works; SVGs never overflow.
- [ ] **Motion** reveals, word-by-word headings, counters, page transitions all present and reduced-motion aware.
- [ ] **Cineterns** linked as the live talent portal from the header CTA, the infrastructure page, and the implementation page.
- [ ] **EmpowerYouth format** referenced as the SAFA presentation standard on the implementation page and reflected in the Presentation Builder tool.
- [ ] **SEO:** per-page metadata, sitemap, robots, JSON-LD on home.

---

## 19. AFTER THE BUILD — KEY ROTATION REMINDER

Because the API keys were shared in a chat, rotate them once the site is verified: generate fresh keys in each provider dashboard (Anthropic, Gemini, Groq, Supabase, Cloudflare R2, Resend, n8n), update `.env.local`, and revoke the old ones. The `service_role` Supabase keys and the Cloudflare R2 secret are the highest priority because they grant full, unrestricted access.

*End of mandate. Build well, build organised, and preserve every word.*
