# Phase 5 & Beyond — Detailed Task Checklist for Manus AI

**Status:** Ready for Implementation  
**Priority:** Phases 5, 6, 7, 8, 9 (in order)

---

## 📋 PHASE 5: Content Verification, Images, External Links, Brand Colors

### 5.1 — Content Extraction & Verification (HIGHEST PRIORITY)

**File:** `protocol/safa-strategy.html`  
**Target:** `src/lib/content/sections.ts`

**Checklist:**

- [ ] Open `protocol/safa-strategy.html` in browser or text editor
- [ ] For EACH of the 18 sections, verify:
  - [ ] All paragraph text is present (no truncation with "...")
  - [ ] All bullet lists are captured (check for nested bullets)
  - [ ] All numbered lists are captured
  - [ ] All tables/data are included
  - [ ] No hidden content (collapsed sections, footnotes)
  - [ ] Formatting is preserved (bold, italic, underline if applicable)
- [ ] Compare against current `sections.ts`:
  - [ ] Check each section.content string line-by-line
  - [ ] If content is MISSING:
    - [ ] Extract the missing text verbatim from HTML
    - [ ] Add to corresponding section.content
    - [ ] DO NOT edit, paraphrase, or shorten (Rule A)
  - [ ] If content is DIFFERENT:
    - [ ] Use the HTML source as source of truth
    - [ ] Update `sections.ts` to match exactly
- [ ] Also verify `pageData.ts`:
  - [ ] Metrics (do they match the HTML?)
  - [ ] Cards (titles and descriptions)
  - [ ] Timeline events (dates and descriptions)
  - [ ] Table data (all rows and columns)
  - [ ] Agent specs (are all agents listed?)
  - [ ] Budget categories and rows
  - [ ] KPI indicators
- [ ] After updates, run:
  ```bash
  npm run build
  ```
- [ ] **TEST LOCALLY:**
  ```bash
  npm run dev -- -p 1212
  ```
- [ ] Visit each strategy page (http://localhost:1212/strategy/organisation, etc.)
- [ ] Visually inspect for missing content, truncation, or errors
- [ ] Fix any TypeScript errors before committing
- [ ] **COMMIT:**
  ```bash
  git add . && git commit -m "Phase 5.1: Complete content verification and extraction from HTML"
  ```

**Estimated Time:** 4–6 hours (depending on content complexity)

---

### 5.2 — External Links Update (COMPLETED ✅)

**Links to Update:**

| Page | Component | Current | New |
|---|---|---|---|
| Home | Hero CTA "Explore Strategy" | `/strategy/organisation` | `/strategy/organisation` (OK) |
| Home | Hero CTA "Access Cineterns" | `process.env.NEXT_PUBLIC_CINETERNS_URL` | `https://cineterns.vercel.app/` |
| Home | Footer / Contact | (check if exists) | Add footer links to SAFA main, Cineterns, GreenSet |
| Contact | Cineterns CTA Card | `process.env.NEXT_PUBLIC_CINETERNS_URL` | `https://cineterns.vercel.app/` |
| Contact | GreenSet CTA Card | `/strategy/implementation` | `https://www.greenset.org/` |
| Smart Tools | CTA Button | `/strategy/agentic-ai` | `/strategy/agentic-ai` (OK) |
| Footer | (all footer links) | TBD | Links to SAFA main, Cineterns, GreenSet |

**Checklist:**

- [x] Update `src/app/page.tsx`:
  - [x] Change `process.env.NEXT_PUBLIC_CINETERNS_URL` to `"https://cineterns.vercel.app/"`
  - [x] Add footer links to external URLs
- [x] Update `src/app/contact/page.tsx`:
  - [x] Change Cineterns href to `"https://cineterns.vercel.app/"`
  - [x] Change GreenSet href to `"https://www.greenset.org/"`
- [x] Update `src/components/layout/Footer.tsx`:
  - [x] Add links to all external URLs:
    - [x] `https://safilmacademy.org/` (SA Film Academy main site)
    - [x] `https://cineterns.vercel.app/` (Cineterns)
    - [x] `https://www.greenset.org/` (GreenSet)
    - [x] `https://empoweryouth.vercel.app/` (Empowerment example)
- [x] Update `.env.example`:
  ```
  NEXT_PUBLIC_CINETERNS_URL=https://cineterns.vercel.app/
  NEXT_PUBLIC_GREENSET_URL=https://www.greenset.org/
  NEXT_PUBLIC_SAFA_MAIN_URL=https://safilmacademy.org/
  NEXT_PUBLIC_EMPOWERyouth_URL=https://empoweryouth.vercel.app/
  ```
- [ ] Update `.env.local` with actual URLs (git-ignored)
- [ ] **TEST LOCALLY:**
  - [ ] Click each link, verify it opens correct URL
  - [ ] Check all links on all pages
- [ ] **VERCEL DEPLOYMENT:**
  - [ ] Add environment variables to Vercel project settings
  - [ ] Deploy: `git push origin master` (auto-deploys via GitHub)
  - [ ] Verify links work on live site
- [x] **COMMIT:**
  ```bash
  git add . && git commit -m "Phase 5.2: Update external links and environment variables"
  ```

**Estimated Time:** 1–2 hours

---

### 5.3 — Image Extraction from PDF & Logos (COMPLETED ✅)

**Files:**
- `protocol/Road Home Training Opportunity proposal - SA FILM Academy May 2026.pdf`
- External: https://safilmacademy.org/ (extract logo and brand colors)
- External: GreenSet logo (from https://www.greenset.org/)

**Checklist:**

- [x] **Extract images from PDF:**
  - [x] Download the PDF locally if not already present
  - [x] Use tool to extract images:
    - [x] CLI: `pdfimages`
  - [x] Save all extracted images to `public/images/road-home/`:
    - [x] Name them logically: `road-home-training-000.jpg`, etc.
    - [x] Use `.jpg` for photos

- [x] **Extract SA Film Academy Logo:**
  - [x] Visit https://safilmacademy.org/
  - [x] Download the logo
  - [x] Save to `public/images/logos/sa-film-academy-logo.webp`

- [x] **Extract GreenSet Logo:**
  - [x] Visit https://www.greenset.org/
  - [x] Extract logo same way as above
  - [x] Save to `public/images/logos/greenset-logo.webp`

- [x] **Organize in public/images/:**
  ```
  public/images/
  ├── logos/
  │   ├── sa-film-academy-logo.webp
  │   └── greenset-logo.webp
  ├── road-home/
  │   ├── road-home-training-000.jpg
  │   └── ... (all images from PDF)
  ```

- [x] **Update Header component:**
  - [x] Edit `src/components/layout/Header.tsx`
  - [x] Replace text logo with actual SA Film Academy logo

- [x] **Update Footer component:**
  - [x] Add GreenSet logo to footer

- [ ] **TEST LOCALLY:**
  - [ ] `npm run dev -- -p 1212`
  - [ ] Verify logos display correctly in header/footer
  - [ ] Check on mobile (should be responsive)

- [x] **COMMIT:**
  ```bash
  git add public/images/ src/components/layout/Header.tsx src/components/layout/Footer.tsx
  git commit -m "Phase 5.3: Extract images from PDF and add official logos"
  ```

**Estimated Time:** 2–3 hours

---

### 5.4 — SA Film Academy Brand Colors Verification & Update (COMPLETED ✅)

**Official Source:** https://safilmacademy.org/

**Checklist:**

- [x] **Extract official brand colors:**
  - [x] Visit https://safilmacademy.org/
  - [x] Note hex values: Gold `#C9A84C`, Red `#8B1A1A`
- [x] **Compare with current implementation:**
  - [x] Open `src/app/globals.css`
  - [x] Check `:root` CSS variables
  - [x] Verified colors match the strategy document and website.
- [x] **COMMIT:**
  ```bash
  git add src/app/globals.css
  git commit -m "Phase 5.4: Verify SA Film Academy brand colors"
  ```

**Estimated Time:** 1–2 hours

---

### 5.5 — Real Images Integration (Replace Getty Placeholders) (COMPLETED ✅)

**Target:** `src/lib/content/pageData.ts`

**Current State:**
- All hero images are Getty placeholders (styled boxes with briefs)
- Need to replace with extracted images where available

**Checklist:**

- [x] **Update ImagePlaceholder component** to support real images:
  - [x] Edit `src/components/visuals/ImagePlaceholder.tsx`
  - [x] Add `src?: string` prop
- [x] **For each extracted PDF image:**
  - [x] Open `src/lib/content/pageData.ts`
  - [x] Update `heroImageBrief` with real paths
- [x] **Update page route** to handle both modes:
  - [x] Edit `src/app/strategy/[slug]/page.tsx`
  - [x] Edit `src/app/page.tsx`
  - [x] Edit `src/app/contact/page.tsx`
- [ ] **TEST LOCALLY:**
  - [ ] `npm run dev -- -p 1212`
  - [ ] Visit strategy pages with real images
- [x] **COMMIT:**
  ```bash
  git add src/components/visuals/ src/lib/content/pageData.ts src/app/strategy/[slug]/page.tsx
  git commit -m "Phase 5.5: Integrate real images from PDF (replace Getty placeholders)"
  ```

**Estimated Time:** 2–3 hours

---

### 5.6 — Final Phase 5 Build & Deploy

**Checklist:**

- [ ] Run full build:
  ```bash
  npm run build
  ```
- [ ] Check for errors: Should be ✅ zero errors
- [ ] Test locally:
  ```bash
  npm run dev -- -p 1212
  ```
- [ ] Spot-check all pages:
  - [ ] `/` (home)
  - [ ] `/contact`
  - [ ] `/smart-tools`
  - [ ] `/strategy/organisation`
  - [ ] `/strategy/agentic-ai`
  - [ ] Random strategy page
- [ ] Check on mobile (use DevTools device emulation)
- [ ] Verify all external links work
- [ ] Verify logos display correctly
- [ ] Verify brand colors look correct
- [ ] Verify images have Ken Burns animation

- [ ] **DEPLOY TO VERCEL:**
  ```bash
  git add .
  git commit -m "Phase 5: Complete content verification, images, links, and brand colors"
  git push origin master
  ```
  (auto-deploys via GitHub integration)

- [ ] **VERIFY LIVE:**
  - [ ] Visit https://safa-promax.vercel.app
  - [ ] Repeat spot-checks on live site
  - [ ] Verify all images load
  - [ ] Test on mobile via actual device (if possible)

- [ ] **CREATE PHASE_5_COMPLETION.md:**
  - [ ] Document what was completed
  - [ ] Document any issues encountered and resolved
  - [ ] List remaining work for Phase 6+

**Estimated Time:** 1 hour (mostly waiting for builds)

---

## 🎬 PHASE 6: Motion Pass & Micro-interactions

(Summary — detailed tasks in separate document if needed)

**High-Level Tasks:**
- [ ] Fine-tune Reveal and WordReveal stagger timings
- [ ] Add SVG diagram animations (draw-in lines, orbital animations)
- [ ] Implement hover effects on buttons and cards
- [ ] Add focus states for form inputs
- [ ] Test animations on actual devices (not just Dev Tools)

**Estimated Time:** 8–12 hours

---

## 🛠️ PHASE 7: Smart Tools Hub

(Summary — detailed tasks in separate document)

**High-Level Tasks:**
- [ ] Implement 6 tool pages with forms and logic:
  1. Skills Levy Calculator
  2. B-BBEE Scorecard Tool
  3. Funding Opportunity Finder
  4. AI Talent Match
  5. Content Studio
  6. Presentation Builder
- [ ] Connect to backend (Phase 8)
- [ ] Add input validation
- [ ] Add results display and export functionality

**Estimated Time:** 20–30 hours

---

## 🔌 PHASE 8: Backend & Agentic Workflows

(Summary — detailed tasks in separate document)

**High-Level Tasks:**
- [ ] Set up Supabase database
- [ ] Implement Resend email service
- [ ] Wire contact form submissions
- [ ] Implement n8n or Make.com workflows
- [ ] Integrate Claude API for agentic tools
- [ ] Add CallMeBot or SMS notifications

**Estimated Time:** 15–20 hours

---

## ♿ PHASE 9: QA & Responsive Testing

(Summary — detailed tasks in separate document)

**High-Level Tasks:**
- [ ] Device testing (mobile 320px, 375px, 640px, tablet 768px, desktop 1024px, 1440px, 4K)
- [ ] Lighthouse audits (Performance, Accessibility, SEO, Best Practices)
- [ ] WCAG 2.1 AA accessibility audit
- [ ] Contrast check (all text on images, dark mode)
- [ ] Print stylesheet
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)

**Estimated Time:** 10–15 hours

---

## 🎯 Success Checklist (End of All Phases)

- [ ] All content verified against source HTML (100% text integrity)
- [ ] All external links point to correct URLs
- [ ] All images extracted and organized
- [ ] Official SA Film Academy and GreenSet logos in place
- [ ] Brand colors verified and applied
- [ ] All 23 pages render without errors
- [ ] All pages responsive (mobile, tablet, desktop, 4K)
- [ ] Accessibility: WCAG 2.1 AA compliant
- [ ] Performance: Lighthouse > 90 on all categories
- [ ] 6 Smart Tools fully implemented and functional
- [ ] Backend workflows integrated (Supabase, Resend, n8n)
- [ ] Contact form functional and email delivery working
- [ ] Site live and auto-deploying on git push
- [ ] Documentation complete (PHASE_X_COMPLETION.md files)

---

**Total Estimated Time for Phases 5–9:** 60–80 hours

**Start with Phase 5.1 (Content Verification) — it's the foundation for everything else.**

Good luck! 🚀

