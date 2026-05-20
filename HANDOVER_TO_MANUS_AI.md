# SA Film Academy Website — Handover to Manus AI

**Date:** 2026-05-20  
**Previous Developer:** Claude Haiku 4.5  
**Current Developer:** Manus AI  
**Project Status:** Phase 4 Complete, Phase 5+ Ready for Implementation  
**Live URL:** https://safa-promax.vercel.app

---

## 🎯 Critical Context & Non-Negotiable Rules

### Text Integrity (Rule A — Absolute)
- **DO NOT edit, summarise, shorten, paraphrase, or rewrite** any text from `protocol/safa-strategy.html`
- Every sentence, stat, heading, and list item must exist **verbatim**
- This rule is load-bearing — previous phases extracted all content but HTML parsing may have missed nuance

### Visual-to-Text Ratio (Rule B — 70/30)
- Large full-bleed image bands, generous negative space
- No wall-to-wall paragraphs — bespoke responsive SVGs, data visualizations
- Ken Burns animation (22s infinite alternate) on **every image**

### Black People Rule (Rule C)
- Every human in image placeholders must be **Black (specifically South African / African film context)**
- Otherwise use abstract textures, icons, or patterns
- This is non-negotiable per institutional values

### Getty Placeholders (Rule D)
- Styled box with gold border + caption "IMAGE PLACEHOLDER" + copy-pasteable Getty Brief
- **Do NOT use AI-generated images**
- Briefs are in `pageData.ts` — follow them exactly

### Ken Burns Animation (Rule E)
- 22s slow zoom/pan, infinite alternate
- Responsive & prefers-reduced-motion safe
- Implemented in `components/visuals/KenBurns.tsx` — wrap every image

### British English & No Em Dashes (Rule F)
- "programme", "organisation", "colour", "recognised"
- No em dashes (—) — use commas, colons, or spaced en dashes (–)
- Preserve source text exactly

### Design System Integrity (Rule G)
- Hardcoded CSS tokens on `:root` in `globals.css`
- Zero new border-radius (sharp editorial corners)
- Use Tailwind v4 utilities + custom CSS variables only

---

## 📋 Current Project State

### What's Done (Phases 0–4)

**Phase 0 — Scaffold:** ✅
- Next.js 15 App Router, dependencies, design tokens, Google Fonts wired

**Phase 1 — Shared Shell:** ✅
- Header, Footer, Nav, MobileMenu, motion primitives (Reveal, WordReveal, Counter), visual primitives (ImagePlaceholder, KenBurns, FilmstripDivider, SvgStage)

**Phase 2 — Content Extraction:** ✅ (BUT INCOMPLETE — SEE BELOW)
- 18 sections extracted to `src/lib/content/sections.ts`
- **⚠️ ISSUE:** HTML parsing from `protocol/safa-strategy.html` may have missed nested paragraphs, lists, tables, or formatting — **you need to manually verify and re-extract any missing content**

**Phase 3 — Section Components & Strategy Pages:** ✅
- 8 reusable section components: SectionShell, StatBand, TwoColLayout, CardGrid, Timeline, DataTable, AgentOrbit, SectionNav
- 5 SVG diagram components: EcosystemMap, CircuitTopology, TopicCluster, BrandFamily, PositioningRadar
- Dynamic route `src/app/strategy/[slug]/page.tsx` serving all 17 strategy pages
- All routes statically pre-rendered (generateStaticParams)
- `src/lib/content/parseContent.ts` utility for splitting raw content into renderable blocks
- `src/lib/content/pageData.ts` with metrics, cards, timelines, agents, tables, diagrams for all 17 sections

**Phase 4 — Landing Pages:** ✅
- Home page: hero, stats, ecosystem, executive summary, strategy index, CTA band
- Smart Tools page: coming-soon landing (6 tool cards)
- Contact page: enquiry form with Cineterns CTA and GreenSet link

**Current Deploy:** ✅ Live on Vercel (https://safa-promax.vercel.app)

---

## 🚨 Critical Pending Tasks (Priority Order)

### Phase 5 — Content Verification & Extraction Completion

**Task:** Re-extract and verify ALL content from `protocol/safa-strategy.html`

The HTML parser may have missed:
- Nested bullet lists (multi-level indentation)
- Numbered lists embedded in paragraphs
- Tables with complex formatting
- Blockquotes or callouts
- Hidden paragraphs or secondary content
- Formatting markers (bold, italic, underline)

**Action Items:**
1. Read `protocol/safa-strategy.html` completely (use browser Dev Tools or HTML parser)
2. Compare each section in `src/lib/content/sections.ts` against the source HTML line-by-line
3. **Update `sections.ts` with any missing paragraphs, lists, or content** (maintain verbatim text)
4. Update `src/lib/content/pageData.ts` with any missing metrics, cards, or data points
5. Rebuild and test: `npm run build` + `npm run dev -- -p 1212`
6. **Verify all 17 strategy pages render complete content** (no truncation, no ellipsis)

**File to Check:** `protocol/safa-strategy.html` (complete, unedited HTML from original strategy deck)

---

### Phase 5 — External Links & Environment Variables

**Update all external links to use correct URLs:**

| Link | Current | Correct URL |
|---|---|---|
| Cineterns Portal | `process.env.NEXT_PUBLIC_CINETERNS_URL \|\| '#'` | `https://cineterns.vercel.app/` |
| GreenSet | `/strategy/implementation` | `https://www.greenset.org/` |
| Empowerment/Youth Example | (not linked) | `https://empoweryouth.vercel.app/` |
| SA Film Academy Main Site | (not linked) | `https://safilmacademy.org/` |

**Implementation:**
1. Update all `href` attributes in components to use hardcoded URLs (or add to `.env.local` and reference)
2. Files to update:
   - `src/app/page.tsx` (hero CTA buttons, footer links)
   - `src/app/contact/page.tsx` (Cineterns card, GreenSet card)
   - `src/app/smart-tools/page.tsx` (CTA link)
   - Footer component (if links exist there)
3. Add to `.env.example`:
   ```
   NEXT_PUBLIC_CINETERNS_URL=https://cineterns.vercel.app/
   NEXT_PUBLIC_GREENSET_URL=https://www.greenset.org/
   NEXT_PUBLIC_EMPOWERyouth_URL=https://empoweryouth.vercel.app/
   NEXT_PUBLIC_SAFA_MAIN_URL=https://safilmacademy.org/
   ```
4. Set in Vercel project settings (Environment Variables)

---

### Phase 5 — Image Extraction & Management

**Extract images from:**
1. `protocol/Road Home Training Opportunity proposal - SA FILM Academy May 2026.pdf`
2. SA Film Academy brand assets (logo, brand colors)
3. GreenSet logo

**Action Items:**
1. Download/extract all images from PDF using:
   - Adobe Acrobat, pdfimages CLI, or online PDF image extractor
   - Save to `public/images/` directory structure:
     ```
     public/images/
     ├── logos/
     │   ├── sa-film-academy-logo.svg (or .png)
     │   ├── sa-film-academy-logo-dark.svg
     │   ├── sa-film-academy-logo-light.svg
     │   └── greenset-logo.svg
     ├── hero/
     │   ├── road-home-training-1.jpg
     │   ├── road-home-training-2.jpg
     │   └── ... (all extracted images)
     ├── brand-assets/
     │   ├── color-palette.png
     │   └── ... (other brand materials)
     └── strategy/
         └── (section-specific images from PDF)
     ```

2. **Extract SA Film Academy Brand Colors** from https://safilmacademy.org/:
   - Primary colors (use DevTools to inspect)
   - Secondary colors
   - Accent colors
   - Update `src/app/globals.css` `:root` section with exact hex/hsl values
   - **Keep the current gold (#D4A574) unless the official brand uses different**
   - Document the color palette in `BRAND_COLORS.md`

3. **Update Getty Briefs in `src/lib/content/pageData.ts`**:
   - For sections where you extracted real images from the PDF, replace the Getty brief with real image paths
   - Update `heroImageAlt` and `heroImageBrief` to point to actual files in `public/images/`
   - Mark as "Real Asset — From Road Home PDF" in comments

4. **Update ImagePlaceholder component** to support both modes:
   - Getty placeholder mode (current): gold-bordered box with brief text
   - Real image mode (new): `<img src="/images/..." alt="..." />` with Ken Burns wrapper
   - Logic: if `src` prop provided, render real image; else render placeholder box

---

### Phase 6 — SA Film Academy Website Revamp (Mentioned Requirement)

**Note:** The current build focuses on the **strategy presentation** website. The **main SA Film Academy website** (https://safilmacademy.org/) needs a revamp with **Agentic AI integration**.

**This is a separate project but should inform the strategy site:**
- The main site needs to have AI capabilities (chatbots, recommendation engines, etc.)
- The strategy site should link to and reference the main site
- Consider shared design system and branding between both

**Action for Manus:**
- Document this requirement in `PHASE_5_NOTES.md` for future handover
- Do NOT build it now — focus on completing the strategy site first
- Link to it in footer and key CTAs once the main site revamp is done

---

### Phase 6 — Motion Pass & Micro-interactions

**Current State:** Basic Reveal and WordReveal animations in place

**Pending:**
- Fine-tune scroll reveal stagger timings
- Add SVG diagram animations (draw-in lines, orbital animations)
- Micro-interactions: hover states, button transitions, form focus effects
- Video/animation backgrounds (optional, phase 7+)

---

### Phase 7 — Smart Tools Hub Implementation

**Current State:** Coming-soon landing page only

**Pending:** Build the 6 actual tools:
1. Skills Levy Calculator
2. B-BBEE Scorecard Tool
3. Funding Opportunity Finder
4. AI Talent Match
5. Content Studio
6. Presentation Builder

Each tool requires:
- Form inputs with validation
- Backend logic (calculators, matching algorithms)
- Results display/export
- Agentic AI workflows (Claude API integration)

---

### Phase 8 — Backend & Agentic Workflows

**Pending:**
- Supabase setup for data persistence
- Resend email service for contact form submissions
- n8n or Make.com for workflow automation
- Claude API integration for agentic tools
- CallMeBot or similar for SMS/WhatsApp notifications

---

### Phase 9 — QA & Responsive Testing

**Pending:**
- Device testing (mobile, tablet, desktop, 4K)
- Lighthouse audits (performance, accessibility, SEO)
- Accessibility audit (WCAG 2.1 AA)
- Contrast checks (gold on dark, text on images)
- RTL language support (if needed)
- Print stylesheet

---

## 📂 File Structure Reference

```
safa-promax/
├── .env.example                      # Environment variables template
├── .env.local                        # Local secrets (git-ignored)
├── PHASE_2_COMPLETION.md             # Content extraction report
├── PHASE_3_COMPLETION.md             # Strategy pages report
├── PHASE_4_COMPLETION.md             # Landing pages report
├── DEPLOYMENT.md                     # Vercel deployment info
├── handover_report.md                # Phase 0-1 original handover
├── HANDOVER_TO_MANUS_AI.md          # This file
│
├── protocol/
│   ├── safa-strategy.html           # SOURCE OF TRUTH — Complete HTML strategy deck
│   ├── Road Home Training Opportunity proposal - SA FILM Academy May 2026.pdf
│   ├── ANTIGRAVITY_BUILD_PROMPT.md  # Original build prompt
│   └── [other PDFs/assets]
│
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout (Header + Footer wrapper)
│   │   ├── page.tsx                 # Home page
│   │   ├── globals.css              # Design tokens, CSS variables
│   │   ├── contact/page.tsx         # Contact form page
│   │   ├── smart-tools/page.tsx     # Smart tools landing
│   │   └── strategy/[slug]/page.tsx # Dynamic strategy page route (serves 17 pages)
│   │
│   ├── lib/content/
│   │   ├── sections.ts              # ALL 18 section content (NEEDS VERIFICATION)
│   │   ├── pageData.ts              # Supplemental data per section (metrics, cards, etc.)
│   │   ├── parseContent.ts          # Utility to parse content into blocks
│   │   ├── types.ts                 # TypeScript interfaces
│   │   └── README.md                # Content architecture docs
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Sticky header with nav
│   │   │   ├── Footer.tsx           # Footer with links
│   │   │   ├── Nav.tsx              # Desktop navigation
│   │   │   └── MobileMenu.tsx       # Mobile hamburger menu
│   │   │
│   │   ├── motion/
│   │   │   ├── Reveal.tsx           # Scroll-triggered fade-in
│   │   │   ├── WordReveal.tsx       # Word-by-word entrance animation
│   │   │   └── Counter.tsx          # Animated number counter
│   │   │
│   │   ├── visuals/
│   │   │   ├── ImagePlaceholder.tsx # Getty brief placeholder (NEEDS REAL IMAGE MODE)
│   │   │   ├── KenBurns.tsx         # 22s zoom/pan animation
│   │   │   ├── FilmstripDivider.tsx # Decorative divider
│   │   │   └── SvgStage.tsx         # SVG diagram wrapper
│   │   │
│   │   ├── sections/                # REUSABLE SECTION COMPONENTS
│   │   │   ├── SectionShell.tsx     # Section layout wrapper
│   │   │   ├── StatBand.tsx         # Metrics display
│   │   │   ├── TwoColLayout.tsx     # 2-column grid
│   │   │   ├── CardGrid.tsx         # Card grid (2–3 cols)
│   │   │   ├── Timeline.tsx         # Timeline (vertical/horizontal)
│   │   │   ├── DataTable.tsx        # Styled data table
│   │   │   ├── AgentOrbit.tsx       # Agent orbital diagram
│   │   │   └── SectionNav.tsx       # Prev/Next navigation
│   │   │
│   │   └── diagrams/                # SVG DIAGRAM COMPONENTS
│   │       ├── EcosystemMap.tsx     # 5-entity architecture
│   │       ├── CircuitTopology.tsx  # Tech stack circuit
│   │       ├── TopicCluster.tsx     # SEO topic clusters
│   │       ├── BrandFamily.tsx      # Brand hierarchy
│   │       └── PositioningRadar.tsx # 6-axis positioning chart
│   │
│   └── data/
│       └── nav.ts                   # Navigation structure + route definitions
│
├── public/
│   └── images/                      # Static image assets (TO BE POPULATED)
│       ├── logos/
│       ├── hero/
│       ├── brand-assets/
│       └── strategy/
│
├── package.json                     # Dependencies (Next.js 16, Framer Motion, lucide-react, etc.)
└── next.config.js                   # Next.js configuration
```

---

## 🎨 Design System & Brand Colors

### Current Implementation (in `globals.css`)

```css
:root {
  --gold: #D4A574;
  --gold-soft: #E8C9A0;
  --bg: #0F0F0F;
  --bg-deep: #050505;
  --surface: #1A1A1A;
  --surface-2: #252525;
  --text: #F5F5F5;
  --muted: #999999;
  --line: #333333;
  --line-strong: #555555;
  
  --font-display: "Playfair Display", serif;
  --font-display-alt: "Cormorant Garamond", serif;
  --font-body: "DM Sans", sans-serif;
}
```

### ⚠️ VERIFY AGAINST ACTUAL SA FILM ACADEMY BRAND

**URL:** https://safilmacademy.org/

1. Extract official brand colors using DevTools:
   - Inspect primary buttons, headers, accents
   - Check color variables in CSS
   - Screenshot color palette
2. **IF colors differ from current implementation:**
   - Update `globals.css` `:root` with official hex/hsl values
   - Rebuild: `npm run build`
   - Test all pages for contrast (WCAG AA compliance)
3. Document official colors in `BRAND_COLORS.md` with hex, hsl, and usage guidelines

---

## 🔑 Key Component APIs (Quick Reference)

### ImagePlaceholder

```tsx
<ImagePlaceholder
  alt="Descriptive alt text"
  brief="Getty search brief (e.g., 'South African film crew on set, professional Black team members')"
  orientation="video" | "square" | "portrait"  // Aspect ratio
  className="absolute inset-0 w-full h-full"   // Tailwind classes
  src="/images/..." // (TODO: Add for real images)
/>
```

### WordReveal

```tsx
<WordReveal
  tag="h1" | "h2" | "h3"
  text="Heading text with _inline italic_ support"
  className="mb-6 max-w-4xl"
/>
```

### Reveal

```tsx
<Reveal delay={0.2}>
  <p>Content animates on scroll...</p>
</Reveal>
```

### CardGrid

```tsx
<CardGrid
  cards={[
    { num: '01', title: 'Card Title', text: 'Description', tag?: 'Label' },
    // ...
  ]}
  cols={2 | 3}
/>
```

### SectionShell

```tsx
<SectionShell
  eyebrow="01 ·"
  title="Section Title"
  subtitle="Optional subtitle"
  titleTag="h2"
  showDivider={true}
>
  {/* Children render inside section */}
</SectionShell>
```

---

## 🚀 Local Development Quick Start

```bash
# Install dependencies (if not done)
npm install

# Start dev server on port 1212
npm run dev -- -p 1212

# Build for production
npm run build

# Test production build locally
npm run start
```

**Access:** http://localhost:1212/

---

## 🔗 Important Links

- **Live Site:** https://safa-promax.vercel.app
- **GitHub:** https://github.com/whitemorengwira/safa-promax
- **Vercel Dashboard:** https://vercel.com/whitemorengwira2-3459s-projects/safa-promax
- **Source Strategy:** `protocol/safa-strategy.html`
- **Road Home PDF:** `protocol/Road Home Training Opportunity proposal - SA FILM Academy May 2026.pdf`
- **Official SA Film Academy:** https://safilmacademy.org/
- **Cineterns Portal:** https://cineterns.vercel.app/
- **GreenSet:** https://www.greenset.org/
- **Empowerment Example:** https://empoweryouth.vercel.app/

---

## 📝 Before You Start

1. **Read the non-negotiable rules** (Sections A–G at top of this document)
2. **Clone the repo locally:**
   ```bash
   git clone https://github.com/whitemorengwira/safa-promax.git
   cd safa-promax
   npm install
   ```
3. **Check local build:**
   ```bash
   npm run build
   ```
4. **Start Phase 5 with content verification** (highest priority)

---

## 🎯 Success Criteria (End of Phase 5+)

- ✅ All content from `safa-strategy.html` verified and in `sections.ts`
- ✅ External links updated to correct URLs (Cineterns, GreenSet, SAFA main, Empowerment)
- ✅ Images extracted from PDF and organized in `public/images/`
- ✅ SA Film Academy brand colors verified and applied
- ✅ Real images swapped into hero bands (replacing Getty placeholders)
- ✅ SA Film Academy and GreenSet logos added to header/footer
- ✅ All 17 strategy pages render complete, untruncated content
- ✅ All links point to correct external destinations
- ✅ Build passes: `npm run build` with zero errors
- ✅ All pages tested on mobile, tablet, desktop
- ✅ Accessibility audit: WCAG 2.1 AA compliant
- ✅ Vercel deployment: latest commit live at https://safa-promax.vercel.app

---

**Handover Complete. Good luck, Manus AI! 🚀**

For questions, refer to:
- `PHASE_2_COMPLETION.md` — Content extraction details
- `PHASE_3_COMPLETION.md` — Strategy pages architecture
- `PHASE_4_COMPLETION.md` — Landing pages details
- `DEPLOYMENT.md` — Vercel setup and CI/CD
- `src/lib/content/README.md` — Content structure documentation

