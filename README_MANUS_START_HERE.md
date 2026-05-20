# 🎬 SA Film Academy Website — Manus AI Start Here

**Your Mission:** Continue building the SA Film Academy strategy website from Phase 5 onward.

**Live Site:** https://safa-promax.vercel.app  
**GitHub:** https://github.com/whitemorengwira/safa-promax  
**Current Status:** Phases 0–4 Complete, Phase 5 Ready

---

## 📚 Read These First (In Order)

1. **THIS FILE** (you're reading it) — Quick orientation
2. **`HANDOVER_TO_MANUS_AI.md`** — Complete context, rules, and what's been done
3. **`PHASE_5_TASK_CHECKLIST.md`** — Detailed step-by-step tasks for Phase 5 and beyond

---

## ⚡ 30-Second Quick Start

```bash
# Clone repo
git clone https://github.com/whitemorengwira/safa-promax.git
cd safa-promax

# Install dependencies
npm install

# Start dev server on port 1212
npm run dev -- -p 1212

# Build for production
npm run build

# Deploy to Vercel (if credentials set up)
git push origin master
```

**Then visit:** http://localhost:1212/

---

## 🎯 Your Starting Tasks (Priority Order)

### 🔴 **Priority 1: Phase 5.1 — Content Verification** (4–6 hours)

This is the foundation. Everything else depends on it.

**What:** Verify ALL content from `protocol/safa-strategy.html` is correctly extracted into `src/lib/content/sections.ts`

**Why:** Previous extraction may have missed nested lists, tables, or complex formatting

**How:**
1. Read `protocol/safa-strategy.html` completely
2. Compare each of 18 sections against source
3. Update `sections.ts` with any missing content
4. Test all 17 strategy pages render complete content
5. Commit and push

**See:** `PHASE_5_TASK_CHECKLIST.md` → Section 5.1 for detailed steps

---

### 🟠 **Priority 2: Phase 5.2–5.5 — Images, Links, Brand** (5–8 hours)

Once content is verified:

1. **5.2** — Update external links (Cineterns, GreenSet, SAFA, Empowerment)
2. **5.3** — Extract images from PDF and add official logos
3. **5.4** — Verify SA Film Academy brand colors
4. **5.5** — Integrate real images (replace Getty placeholders)

**See:** `PHASE_5_TASK_CHECKLIST.md` → Sections 5.2–5.5

---

### 🟡 **Priority 3: Phase 6 — Motion & Micro-interactions** (8–12 hours)

Once Phase 5 is done, enhance animations and interactions.

**See:** `PHASE_5_TASK_CHECKLIST.md` → Phase 6 overview (detailed tasks TBD)

---

### 🟢 **Priority 4: Phase 7+ — Smart Tools, Backend, QA** (60+ hours)

Build the tools hub, backend workflows, and full QA.

**See:** `PHASE_5_TASK_CHECKLIST.md` → Phases 7–9 overviews

---

## 🎨 Brand & Design Rules (Non-Negotiable)

### Rule A: Text Integrity
- **DO NOT edit, summarise, or paraphrase any text from the HTML source**
- Every sentence must be verbatim
- This is load-bearing

### Rule B: 70/30 Visual-to-Text
- Large hero images, generous space, SVGs, cards
- No wall-of-text paragraphs

### Rule C: Black People Rule
- Every human in images must be Black (South African/African context)
- Use icons/textures otherwise

### Rule D: Getty Placeholders
- Styled boxes with briefs (unless using real images)
- No AI-generated images

### Rule E: Ken Burns Animation
- 22s zoom/pan on every image
- Implemented in `KenBurns.tsx`

### Rule F: British English, No Em Dashes
- "programme", "organisation", "colour"
- No em dashes (—) — use commas, colons, or spaced en dashes (–)

### Rule G: Design System
- Tailwind v4 + custom CSS variables only
- No new border-radius
- Sharp editorial aesthetic

**More Details:** Read `HANDOVER_TO_MANUS_AI.md` (top section)

---

## 📂 Key Files Overview

| File | Purpose |
|---|---|
| `src/lib/content/sections.ts` | 18 section contents (VERIFY THIS FIRST) |
| `src/lib/content/pageData.ts` | Metrics, cards, diagrams per section |
| `src/app/page.tsx` | Home page |
| `src/app/strategy/[slug]/page.tsx` | Dynamic strategy page route (serves 17 pages) |
| `src/app/contact/page.tsx` | Contact form |
| `src/app/smart-tools/page.tsx` | Smart tools coming-soon |
| `src/components/sections/` | Reusable section components (StatBand, CardGrid, etc.) |
| `src/components/diagrams/` | SVG diagram components (EcosystemMap, etc.) |
| `protocol/safa-strategy.html` | SOURCE OF TRUTH — Compare against this |
| `HANDOVER_TO_MANUS_AI.md` | Full context and handover |
| `PHASE_5_TASK_CHECKLIST.md` | Detailed task list |

---

## 🔗 External URLs (Use These)

- **Cineterns Portal:** https://cineterns.vercel.app/
- **GreenSet:** https://www.greenset.org/
- **Empowerment Example:** https://empoweryouth.vercel.app/
- **SA Film Academy Main:** https://safilmacademy.org/
- **Brand Colors Source:** https://safilmacademy.org/ (extract via DevTools)

---

## 🚀 Workflow for Each Phase

1. **Read the task description** in `PHASE_5_TASK_CHECKLIST.md`
2. **Make changes locally** on `master` branch
3. **Build and test:** `npm run build` then `npm run dev -- -p 1212`
4. **Commit:**
   ```bash
   git add .
   git commit -m "Phase X.Y: Description of changes"
   ```
5. **Push:**
   ```bash
   git push origin master
   ```
6. **Vercel auto-deploys** (watch https://vercel.com/whitemorengwira2-3459s-projects/safa-promax)
7. **Verify live:** Visit https://safa-promax.vercel.app

---

## ✅ Success Criteria for Phase 5

When Phase 5 is complete:

- ✅ All 18 sections have complete, verified content (no truncation)
- ✅ All external links updated and working
- ✅ Images extracted and organized in `public/images/`
- ✅ Official logos (SAFA, GreenSet) in header/footer
- ✅ Brand colors verified and applied
- ✅ Real images integrated (Ken Burns animations work)
- ✅ All pages build without errors
- ✅ All pages render correctly on desktop, tablet, mobile
- ✅ Live site updated: https://safa-promax.vercel.app

---

## 🆘 If You Get Stuck

1. **Check the current error:**
   ```bash
   npm run build
   ```
2. **Read the full error message** (not just the headline)
3. **Search the codebase:**
   - Look in `src/lib/content/sections.ts` if content is wrong
   - Look in `src/lib/content/pageData.ts` if metrics/diagrams are wrong
   - Look in component files if rendering is broken
4. **Refer to handover docs:**
   - File structure: `HANDOVER_TO_MANUS_AI.md` → File Structure Reference
   - Component APIs: `HANDOVER_TO_MANUS_AI.md` → Key Component APIs
   - Task details: `PHASE_5_TASK_CHECKLIST.md`
5. **Check the git log:**
   ```bash
   git log --oneline -10
   ```

---

## 📞 Important Contacts & Resources

- **Live Site:** https://safa-promax.vercel.app
- **GitHub Repo:** https://github.com/whitemorengwira/safa-promax
- **Vercel Dashboard:** https://vercel.com/whitemorengwira2-3459s-projects/safa-promax
- **Source HTML:** `protocol/safa-strategy.html` (local file)
- **PDF with Images:** `protocol/Road Home Training Opportunity proposal - SA FILM Academy May 2026.pdf` (local file)

---

## 🎬 Next 3 Steps Right Now

1. **Clone the repo:**
   ```bash
   git clone https://github.com/whitemorengwira/safa-promax.git
   cd safa-promax
   npm install
   ```

2. **Read the full handover:**
   - Open `HANDOVER_TO_MANUS_AI.md` (comprehensive context)
   - Open `PHASE_5_TASK_CHECKLIST.md` (detailed tasks)

3. **Start Phase 5.1:**
   - Open `protocol/safa-strategy.html` in browser
   - Open `src/lib/content/sections.ts` in editor
   - Compare and verify content
   - Follow steps in `PHASE_5_TASK_CHECKLIST.md` Section 5.1

---

## 🎯 Remember

- **Text Integrity First** — Verify content is complete and verbatim before adding anything else
- **One Phase at a Time** — Complete Phase 5 before moving to Phase 6
- **Test Locally** — Always build and test locally before pushing
- **Commit Often** — Small, meaningful commits are easier to review and debug
- **Document as You Go** — Update PHASE_X_COMPLETION.md files as you finish sections

---

**You've got this! Start with Phase 5.1 (Content Verification) and work through the checklist. Good luck! 🚀**

