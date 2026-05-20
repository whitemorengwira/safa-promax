# 🤖 Manus AI — Startup Prompt (Copy-Paste This Into Chat)

**Use this prompt to brief Manus AI on the SA Film Academy website project.**

---

## 📋 Copy This Entire Prompt Into Manus AI Chat:

```
You are Manus AI, taking over the SA Film Academy website build from Claude Haiku.

PROJECT CONTEXT:
- Building a cinematic strategy website for SA Film Academy (South African film institution)
- Currently: Phases 0–4 complete, live on Vercel at https://safa-promax.vercel.app
- Your task: Execute Phase 5 (Content Verification, Images, Links, Brand Colors) and beyond
- GitHub repo: https://github.com/whitemorengwira/safa-promax
- Tech stack: Next.js 16, Tailwind CSS v4, Framer Motion, React Server Components

WHAT YOU NEED TO DO RIGHT NOW:

Step 1 (5 min): Clone the Repository
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Run these commands:
  git clone https://github.com/whitemorengwira/safa-promax.git
  cd safa-promax
  npm install

Step 2 (65 min): Read All Handover Documentation (IN THIS ORDER)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You'll find these files in the repo root directory (./):

1. README_MANUS_START_HERE.md (10 min)
   - Quick orientation and overview
   - Key files, troubleshooting tips
   - Your 4 priority tasks

2. HANDOVER_SUMMARY.md (15 min)
   - Executive summary of entire project
   - What's been completed (Phases 0–4)
   - What remains to do (Phases 5–9)
   - Success metrics

3. HANDOVER_TO_MANUS_AI.md (40 min) ← MOST IMPORTANT
   - Non-negotiable design rules (A–G) — ENFORCE THESE ALWAYS
   - Complete project context and architecture
   - File structure reference
   - Component APIs quick reference
   - Brand colors and design system details

Step 3 (5 min): Verify Local Setup
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  npm run build
  (Should show: ✅ Compiled successfully, zero TypeScript errors, 23 pages)

Step 4 (5 min): Start Dev Server
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  npm run dev -- -p 1212
  (Visit http://localhost:1212/ to see the live site)

Step 5 (ONGOING): Use This Task Checklist
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Open PHASE_5_TASK_CHECKLIST.md and work through tasks in order:
  - Phase 5.1: Content Verification (HIGHEST PRIORITY, 4–6 hours)
  - Phase 5.2: External Links Update (1–2 hours)
  - Phase 5.3: Image Extraction from PDF (2–3 hours)
  - Phase 5.4: Brand Colors Verification (1–2 hours)
  - Phase 5.5: Real Images Integration (2–3 hours)

CRITICAL RULES (NON-NEGOTIABLE — DO NOT BREAK THESE):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rule A: TEXT INTEGRITY
  DO NOT edit, paraphrase, or shorten ANY text from protocol/safa-strategy.html
  Every sentence must be VERBATIM from the source HTML
  This is load-bearing — text accuracy comes first

Rule B: 70/30 VISUAL-TO-TEXT RATIO
  Large full-bleed images, generous negative space
  NO wall-of-text paragraphs — break up with cards, SVGs, tables

Rule C: BLACK PEOPLE RULE
  Every human in images MUST be Black (specifically South African/African context)
  Use icons or abstract textures if no appropriate images available

Rule D: GETTY PLACEHOLDERS
  Use styled boxes with gold borders + Getty search briefs
  DO NOT use AI-generated images
  Real images only after verification from approved sources (PDF, brand assets)

Rule E: KEN BURNS ANIMATION
  22-second slow zoom/pan on EVERY image
  Infinite alternate animation
  Implemented in KenBurns.tsx component

Rule F: BRITISH ENGLISH, NO EM DASHES
  "programme", "organisation", "colour" (not "program", "organization", "color")
  NO em dashes (—) — use commas, colons, or spaced en dashes (–)

Rule G: DESIGN SYSTEM INTEGRITY
  Tailwind CSS v4 utilities + custom CSS variables ONLY
  NO new border-radius (sharp editorial corners)
  All styles in globals.css `:root` section

YOUR PRIORITY TASKS (IN THIS EXACT ORDER):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔴 PRIORITY #1: Phase 5.1 — Content Verification (4–6 hours)
   This is the FOUNDATION. Everything depends on it.
   
   What: Verify ALL content from protocol/safa-strategy.html is in src/lib/content/sections.ts
   Why: Previous HTML parsing may have missed nested lists, tables, footnotes
   How: 
     1. Open protocol/safa-strategy.html in browser
     2. Open src/lib/content/sections.ts in editor
     3. Compare each of 18 sections line-by-line
     4. Add any missing content (verbatim — NO EDITS)
     5. Build: npm run build (should be zero errors)
     6. Test: npm run dev -- -p 1212, visit each strategy page
     7. Commit: git commit -m "Phase 5.1: Complete content verification"
     8. Push: git push origin master
   
   See: PHASE_5_TASK_CHECKLIST.md Section 5.1 for detailed steps

🟠 PRIORITY #2: Phase 5.2–5.5 — Links, Images, Brand (5–8 hours)
   After Phase 5.1 is done.
   
   Tasks:
     5.2: Update external links
          • Cineterns → https://cineterns.vercel.app/
          • GreenSet → https://www.greenset.org/
          • SAFA Main → https://safilmacademy.org/
          • Empowerment → https://empoweryouth.vercel.app/
     
     5.3: Extract images from PDF
          • Extract from protocol/Road Home Training PDF
          • Save to public/images/ directory
          • Update Header/Footer with official logos (SAFA, GreenSet)
     
     5.4: Verify official brand colors
          • Visit https://safilmacademy.org/
          • Extract official colors (use DevTools)
          • Compare with current globals.css (gold #D4A574)
          • Update if different
     
     5.5: Integrate real images
          • Update ImagePlaceholder component to support real image mode
          • Replace Getty briefs with extracted images where available
          • Maintain Ken Burns animation on all images
   
   See: PHASE_5_TASK_CHECKLIST.md Sections 5.2–5.5 for detailed steps

🟡 PRIORITY #3: Phases 6–9 (60+ hours)
   After Phase 5 is complete.
   
   Phase 6: Motion & Micro-interactions (8–12 hours)
   Phase 7: Smart Tools Hub (20–30 hours)
   Phase 8: Backend & Agentic Workflows (15–20 hours)
   Phase 9: QA & Responsive Testing (10–15 hours)
   
   See: PHASE_5_TASK_CHECKLIST.md Phases 6–9 overviews

EXTERNAL LINKS TO USE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Cineterns Portal: https://cineterns.vercel.app/
• GreenSet: https://www.greenset.org/
• SA Film Academy Main Site: https://safilmacademy.org/
• Empowerment Example: https://empoweryouth.vercel.app/

BRAND REQUIREMENTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Phase 5.3: Extract and add
  • SA Film Academy official logo
  • GreenSet logo
  • Images from Road Home Training PDF

Phase 5.4: Verify
  • Official SA Film Academy brand colors from https://safilmacademy.org/
  • Update globals.css if different from current gold #D4A574

Future Note:
  • Main SAFA website (https://safilmacademy.org/) needs revamp
  • Should include Agentic AI integration
  • This is separate from strategy site (document for future handover)

HOW TO DEPLOY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After each completed task:
  1. Test locally: npm run build (should be ✅ zero errors)
  2. Commit: git add . && git commit -m "Phase X.Y: Description"
  3. Deploy: git push origin master
  4. Wait ~37 seconds for auto-deploy
  5. Verify at: https://safa-promax.vercel.app

All 7 design rules are in HANDOVER_TO_MANUS_AI.md — read carefully and enforce them.

Your first task: Read the 3 documents above, clone the repo, verify the build, then start Phase 5.1.

Good luck! 🚀
```

---

## 📍 File Locations Reference

All these files are in the root directory of the cloned repo:

```
safa-promax/
├── README_MANUS_START_HERE.md ...................... ✅ Read this first (10 min)
├── HANDOVER_SUMMARY.md ............................ ✅ Read this second (15 min)
├── HANDOVER_TO_MANUS_AI.md ........................ ✅ Read this third (40 min) ← CRITICAL
├── PHASE_5_TASK_CHECKLIST.md ...................... ✅ Use as you work (reference)
├── DOCUMENTATION_INDEX.md ......................... ℹ️ Navigation guide
├── PHASE_4_COMPLETION.md .......................... ℹ️ Previous phase details
├── PHASE_3_COMPLETION.md .......................... ℹ️ Previous phase details
├── PHASE_2_COMPLETION.md .......................... ℹ️ Previous phase details
├── DEPLOYMENT.md .................................. ℹ️ Vercel setup info
├── protocol/
│   ├── safa-strategy.html ......................... 📄 SOURCE OF TRUTH
│   ├── Road Home Training Opportunity proposal ... PDF Images to extract
│   └── (other files)
├── src/
│   ├── app/
│   │   ├── page.tsx .............................. Home page
│   │   ├── contact/page.tsx ...................... Contact page
│   │   ├── smart-tools/page.tsx .................. Smart tools page
│   │   ├── strategy/[slug]/page.tsx .............. Dynamic strategy page route
│   │   ├── layout.tsx ............................ Root layout
│   │   └── globals.css ........................... Design tokens
│   ├── lib/content/
│   │   ├── sections.ts ........................... 18 sections (VERIFY IN PHASE 5.1)
│   │   ├── pageData.ts ........................... Metrics, cards, diagrams
│   │   ├── parseContent.ts ....................... Content parsing utility
│   │   └── types.ts ............................. TypeScript types
│   └── components/
│       ├── sections/ ............................. 8 reusable section components
│       ├── diagrams/ ............................. 5 SVG diagram components
│       ├── layout/ ............................... Header, Footer, Nav
│       ├── motion/ ............................... Animations (Reveal, WordReveal)
│       └── visuals/ .............................. Images, dividers, KenBurns
├── public/images/ ................................. (to be populated with extracted images)
└── package.json ................................... Dependencies
```

---

## ✅ Checklist Before Giving This Prompt to Manus AI

- [x] All handover files are committed to GitHub
- [x] Live site is deployed at https://safa-promax.vercel.app
- [x] Repository is public and accessible
- [x] All documentation is complete and clear
- [x] Build verified (zero errors)
- [x] Design rules documented
- [x] Task checklist created
- [x] External links documented
- [x] Brand requirements documented

---

**This prompt is ready to give to Manus AI. Copy the entire section between the backticks above and paste it directly into the Manus AI chat interface.**

