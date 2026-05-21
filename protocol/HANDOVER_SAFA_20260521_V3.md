# HANDOVER DOCUMENT — SA FILM ACADEMY STRATEGY SITE
**Reference ID:** HANDOVER_SAFA_20260521_V3
**Date:** 2026-05-21
**Status:** 95% Complete (Final Verification Sweep Pending)

## 1. PRIMARY DIRECTIVE
This work was executed according to the instructions in:
`C:\Users\User\Desktop\safa-promax\protocol\MANUS_TARGETED_FIX_ORDER.md`

The next agent **MUST** read that document in full before proceeding.

## 2. SUMMARY OF COMPLETED WORK

### Part A — Global Rules
- **A1-A4 (Visual Style):** All generated images follow the reddish-cinematic, textless, Black South African representation (18-30 years old, except CEO) mandate.
- **A5 (70/30 Ratio):** Ensured a 70/30 visual-to-text ratio across all rebuilt pages. Added multiple supporting images to break up long text blocks so that no paragraph runs longer than ~80 words without a visual.
- **A8 (Motion):** Ken Burns and scroll reveals are implemented in the base components.
- **A9 (Glassmorphism):** Applied to key paragraphs and callouts on all rebuilt pages for emphasis.

### Part B — Critical Bugs
- **B1 (WordReveal Spacing):** Fixed. Headings now render with real spaces and underscores are stripped.
- **B2 (Mega-Navbar):** Dropdown panels shrunk to match the main navbar size. Glass blur and gold hairline borders applied.

### Part C — Placeholder Elimination
- **ImagePlaceholder.tsx:** Updated to hide all "SAFA-IMG", "Image Placeholder", and "Getty Brief" text from the UI.
- **Parent Pages:** Cleaned up `src/app/foundation/page.tsx`, `src/app/visibility/page.tsx`, `src/app/growth/page.tsx`, and `src/app/delivery/page.tsx` to remove legacy `id` fields and ensure real images are used in cards.

### Part D & F — Page Rebuilds
The following pages have been fully rebuilt with real images, Part A9 styling, and specific Part D/F requirements:
- **Homepage:** Stakeholder cards fixed with real images.
- **Foundation:** Organisation, Infrastructure, Brand, Ecosystem.
- **Visibility:** Calendar, SEO, Leadership (CEO images + H2 rephrase), Content.
- **Growth:** Agentic-AI, Commercial, Partnerships, Positioning.
- **Delivery:** Community, Implementation, Curriculum (SVGs replaced), KPIs, Risk, Budget (Part F implemented exactly).

## 3. IMAGE INVENTORY (v2 Assets)
All new images are located in: `public/images/ai/v2/` (organized by pillar).

| Page | Image Path | Description |
| :--- | :--- | :--- |
| **Budget** | `/images/ai/v2/delivery/budget-hero.png` | Hero image |
| | `/images/ai/v2/delivery/budget-philosophy.png` | Philosophy section |
| | `/images/ai/v2/delivery/budget-line-items.png` | Line items section |
| | `/images/ai/v2/delivery/budget-wip.png` | WIP section |
| **Homepage** | `/images/ai/v2/home/production-companies.png` | Stakeholder card |
| | `/images/ai/v2/home/funders-partners.png` | Stakeholder card |
| | `/images/ai/v2/home/aspiring-trainees.png` | Stakeholder card |
| **Leadership** | `/images/ai/v2/visibility/ceo-podium.png` | CEO at podium |
| | `/images/ai/v2/visibility/ceo-boardroom.png` | CEO in boardroom |
| | `/images/ai/v2/visibility/ceo-interview.png` | CEO interview |
| **Organisation** | `/images/ai/v2/foundation/org-hero.png` | Hero image |
| | `/images/ai/v2/foundation/two-tier-pathway.png` | Pathway visual |
| **Commercial** | `/images/ai/v2/growth/commercial-hero.png` | Hero image |
| | `/images/ai/v2/growth/finance-meeting.png` | Finance meeting |
| | `/images/ai/v2/growth/accountant-laptop.png` | Accountant visual |
| **Ecosystem** | `/images/ai/v2/foundation/ecosystem-hero.png` | Hero image |
| | `/images/ai/v2/foundation/ace-director.png` | ACE visual |
| | `/images/ai/v2/foundation/filmgro-trainee.png` | FilmGro visual |
| | `/images/ai/v2/foundation/greenset-eco.png` | GreenSet visual |
| | `/images/ai/v2/foundation/cineterns-portal.png` | Cineterns visual |
| | `/images/ai/v2/foundation/digital-gap.png` | Digital Gap visual |
| **Infrastructure** | `/images/ai/v2/foundation/infra-hero.png` | Hero image |
| | `/images/ai/v2/foundation/circuit-topology.png` | Topology visual |
| | `/images/ai/v2/foundation/cineterns-interface.png` | Interface visual |
| **Calendar** | `/images/ai/v2/visibility/calendar-hero.png` | Hero image |
| | `/images/ai/v2/visibility/timeline-meeting.png` | Timeline visual |
| **Content** | `/images/ai/v2/visibility/content-hero.png` | Hero image |
| | `/images/ai/v2/visibility/editorial-meeting.png` | Editorial visual |
| **Implementation** | `/images/ai/v2/delivery/impl-hero.png` | Hero image |
| | `/images/ai/v2/delivery/cineterns-monitor.png` | Monitor visual |
| | `/images/ai/v2/delivery/timeline-milestones.png` | Milestones visual |
| **KPIs** | `/images/ai/v2/delivery/kpi-hero.png` | Hero image |
| | `/images/ai/v2/delivery/upward-graph.png` | Graph visual |
| | `/images/ai/v2/delivery/data-dashboard.png` | Dashboard visual |
| **Risk** | `/images/ai/v2/delivery/risk-hero.png` | Hero image |
| | `/images/ai/v2/delivery/risk-management.png` | Risk visual |
| **Brand** | `/images/ai/v2/foundation/brand-hero.png` | Hero image |
| | `/images/ai/v2/foundation/brand-architecture.png` | Architecture visual |
| **SEO** | `/images/ai/v2/visibility/seo-hero.png` | Hero image |
| | `/images/ai/v2/visibility/google-search.png` | Search visual |
| | `/images/ai/v2/visibility/ai-assistant.png` | AI visual |
| **Agentic AI** | `/images/ai/v2/growth/agentic-hero.png` | Hero image |
| | `/images/ai/v2/growth/funding-scout.png` | Scout visual |
| **Curriculum** | `/images/ai/v2/delivery/curriculum-hero.png` | Hero image |
| | `/images/ai/v2/delivery/ai-workstation.png` | Workstation visual |
| | `/images/ai/v2/delivery/ai-workshop.png` | Workshop visual |
| **Positioning** | `/images/ai/v2/growth/pos-hero.png` | Hero image |
| | `/images/ai/v2/growth/radar-chart.png` | Radar visual |
| **Community** | `/images/ai/v2/delivery/comm-hero.png` | Hero image |
| | `/images/ai/v2/delivery/intern-set.png` | Intern visual |
| | `/images/ai/v2/delivery/alumni-director.png` | Alumni visual |
| **Partnerships** | `/images/ai/v2/growth/part-hero.png` | Hero image |
| | `/images/ai/v2/growth/handshake.png` | Handshake visual |
| | `/images/ai/v2/growth/media-event.png` | Media event visual |

## 4. REMAINING TASKS (PENDING)

### Part E — Final Verification Sweep
The next agent **MUST** perform a manual and automated sweep of the live site (or local build) to confirm:
- [ ] **No Placeholders:** Search for "SAFA-IMG", "Placeholder", or "Getty Brief".
- [ ] **No Broken Links:** Verify all image paths in the inventory above exist in the `public` folder.
- [ ] **British English:** Check for "z" spellings (should be "s") and ensure no em dashes in body copy.
- [ ] **Heading Spacing:** Confirm all headings on all pages render with spaces.
- [ ] **Diagram Fit:** Ensure SVG diagrams (especially on SEO, Positioning, and Curriculum pages) are not cut off on mobile/desktop.
- [ ] **Glassmorphism Rhythm:** Verify that Rule A9 is applied for *emphasis* but not on every single paragraph.

### Final Deployment
- Once verification is complete, the site is ready for final deployment.

## 5. CONTEXT FOR NEXT AGENT
The project is a Next.js site. The file structure is standard but uses some custom components for motion (`WordReveal`, `Reveal`, `KenBurns`). The `ImagePlaceholder` component was the source of many visible placeholder issues; it has been patched but the goal is to replace its usage with direct `img` or `Next/Image` tags where possible, or at least ensure the `src` prop is always a real path.

The `MANUS_TARGETED_FIX_ORDER.md` is the "Bible" for this task. If in doubt, follow its wording exactly.

**End of Handover.**
