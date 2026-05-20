# SA Film Academy — Website Build Handover & Progress Report

> **Current Phase:** Phase 2 — Content extraction (In Progress)
> **Active Developer:** Antigravity (Google DeepMind)
> **Target OS:** Windows 11 (PowerShell syntax)
> **Language Policy:** British English (verbatim source text, zero em dashes)
> **Key Design System:** HSL/Cinematic Dark Gold, 70/30 Visual ratio, sharp 0px borders by default, Ken Burns infinite alternate animation on all images, Black People Rule.

---

## 📋 Non-Negotiable Core Rules Checklist

*Always keep these top-of-mind. Every AI model resuming this project must check every file against these rules:*

- [x] **Rule A — Text Integrity (Absolute):** Do NOT edit, summarise, shorten, paraphrase, or rewrite any text from `safa-strategy.html`. Every sentence, stat, heading, and list item must exist verbatim.
- [x] **Rule B — 70/30 Visual-to-Text Ratio:** Large full-bleed image bands, bespoke responsive SVGs, generous negative space. No wall-to-wall paragraphs.
- [x] **Rule C — The Black People Rule:** Every human in image placeholders/assets MUST be Black (specifically South African / African film context). Otherwise, use abstract textures/icons.
- [x] **Rule D — Getty Placeholders, NOT AI Images:** Render a styled box with gold border + caption "IMAGE PLACEHOLDER" + copy-pasteable Getty Brief underneath.
- [x] **Rule E — Ken Burns On Every Image:** 22s slow zoom/pan, infinite alternate. Responsive & prefers-reduced-motion safe.
- [x] **Rule F — British English & No Em Dashes:** "programme", "organisation", "colour", etc. No em dashes — use commas, colons, or spaced en dashes.
- [x] **Rule G — Preserve Design System:** Hardcoded tokens on `:root` inside `globals.css`.

---

## 🗺️ Completed & Upcoming Phases

### Phase 0 — Scaffold (Completed)
- [x] Next.js 15 App Router scaffolded at root `C:\Users\User\Desktop\safa-promax`.
- [x] Config files `.env.local`, `.env.example`, `.gitignore` moved to project root (originals removed from `protocol`).
- [x] Dependencies installed (`framer-motion`, `lucide-react`, `sonner`, `@supabase/supabase-js`, `@anthropic-ai/sdk`, etc.).
- [x] Locked design system tokens placed in `src/app/globals.css` with `@theme inline` mapping for Tailwind v4.
- [x] Google Fonts (`Playfair Display`, `Cormorant Garamond`, `Outfit`, `DM Sans`) wired in `src/app/layout.tsx`.
- [x] Custom styled blank page verifying swatches, fonts, and grid layout in `src/app/page.tsx`.
- [x] Verified successful build using `npm run build`.

### Phase 1 — Shared Shell (Completed)
- [x] Create `components/layout/Header.tsx` (sticky scroll, active routes, wordmark, CTA button).
- [x] Create `components/layout/Footer.tsx` (italic tagline, links, copyright rows).
- [x] Create `components/layout/Nav.tsx` & `MobileMenu.tsx` driven by `data/nav.ts`.
- [x] Create visual primitives: `ImagePlaceholder.tsx`, `KenBurns.tsx`, `FilmstripDivider.tsx`, `SvgStage.tsx`.
- [x] Create motion primitives: `Reveal.tsx`, `WordReveal.tsx`, `Counter.tsx`.
- [x] Wire up root `layout.tsx` to include Header and Footer.

### Phase 2 — Content Extraction (Completed)
- [x] Port all 100% verbatim copy from `protocol/safa-strategy.html` into structured data constants in `src/lib/content/sections.ts`.
- [x] All 18 sections (hero + 17 strategy sections) extracted with full text integrity (Rule A).
- [x] British English preserved throughout (Rule F).
- [x] TypeScript compilation successful, build passes.

### Phase 3 — Section Components (Completed)
- [x] Create 8 shared section components: `SectionShell`, `StatBand`, `TwoColLayout`, `CardGrid`, `Timeline`, `DataTable`, `AgentOrbit`, `SectionNav`.
- [x] Create 5 SVG diagram components: `EcosystemMap`, `CircuitTopology`, `TopicCluster`, `BrandFamily`, `PositioningRadar`.
- [x] Create `src/lib/content/parseContent.ts` utility for parsing raw content into renderable blocks.
- [x] Create `src/lib/content/pageData.ts` with all 17 section data (metrics, cards, timelines, agents, tables, diagrams).
- [x] Create dynamic route `src/app/strategy/[slug]/page.tsx` with `generateStaticParams` pre-rendering all 17 routes.
- [x] Add `slugToId` map to resolve nav slugs (`organisation`, `agentic-ai`) to section keys (`org`, `ai`).
- [x] Full build succeeds with zero TypeScript errors. All 17 routes statically generated.

### Phase 4 — Pages & Routing (Pending)
- [ ] Wire home page and strategy route files under `src/app/strategy/`.

### Phase 5 — Getty Image Placeholders (Pending)
- [ ] Key Getty briefs in `src/data/getty-briefs.ts` and apply placeholders.

### Phase 6 — Motion Pass & Micro-animations (Pending)
- [ ] Fine-tune transitions, floats, reveal stagger, and SVG draw-in lines.

### Phase 7 — Smart Tools Hub (Pending)
- [ ] Skills Levy, B-BBEE, Funding Assistant, Talent Match, Content Studio, Presentation Builder.

### Phase 8 — Agentic Workflows (Pending)
- [ ] Wire Supabase, Resend, CallMeBot, and n8n trigger webhooks.

### Phase 9 — Responsive + QA (Pending)
- [ ] Full device testing, Lighthouse audits, accessibility and contrast checks.

---

## 🛠️ Dev Notes & Reference Commands

- **Local Port:** `1212` (run as `npm run dev -- -p 1212`)
- **Main Config:**
  - `globals.css` maps custom CSS variables directly inside Tailwind CSS v4's theme block.
  - No border-radius by default (sharp editorial aesthetics).
  - Production build tested and functional.
