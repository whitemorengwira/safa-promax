# MANUS AI — SA FILM ACADEMY: ULTRA MASTER FINISHING MANDATE
**Project:** https://safa-promax.vercel.app/
**Status:** Final QC pass for delivery. British English throughout. No em dashes in body copy.

> This is the finishing mandate. Its single goal is to make every image on the site correct, fill every empty visual slot, fix every broken image link, and resolve the remaining layout and navbar issues. Work page by page, sub-page by sub-page, section by section. Update STATUS_LOG.md after each Part. You have full autonomous authority.

---

## PART 1 — REPLACE ALL IMAGES THAT HAVE TEXT ON THEM

Some generated images still contain text burned into them (headings, labels, slogans, words). Every such image must be replaced with a textless image drawn from the existing `.webp` files already generated inside the `public/images/ai/` folder and its sub-folders.

Procedure:
1. Audit every image currently displayed on the live site. Identify any image containing visible text, words, labels, or characters.
2. For each one, select an appropriate textless `.webp` from the matching section folder inside `public/images/ai/` (for example, a B-BBEE page image is replaced from `public/images/ai/growth-commercial/`).
3. Swap the `src` to the textless file. Keep the same filename pattern where possible so no further code changes are needed.
4. If no suitable textless image exists in that folder, generate a new one following the reddish cinematic style bible from the earlier mandate (near-black base, crimson practicals, gold highlights, Black South African youth 18–30, no text, no holograms, no US dollar signs).
5. Record each swap in STATUS_LOG.md.

---

## PART 2 — FILL EVERY EMPTY VISUAL SLOT AND REPLACE EVERY PLACEHOLDER

The site still contains placeholder images, deleted-image gaps, and broken image links. Visit every page and resolve all of them.

- Replace every remaining "Image Placeholder", "SAFA-IMG-XXX", or blank image box with an appropriate textless `.webp` from the matching section folder.
- Fix every broken image link (any `<img>` or Next.js `<Image>` whose source returns a 404 or shows a broken-image icon). Point each to a real file that exists in `public/images/ai/`.
- Match the image to the context of its section. A compliance section gets a finance/document image; a podcast section gets the podcast studio image; a curriculum section gets the AI-workstation image.
- The three-path homepage section ("Who are you here for?") shown circled in green has empty image backgrounds behind "Production Companies", "Funders & Partners", and "Aspiring Trainees". Inject an appropriate textless image behind each card with a dark scrim so the white text stays legible. Production Companies uses a crew-on-set image; Funders & Partners uses a boardroom/handshake image; Aspiring Trainees uses an intern/first-day image.

---

## PART 3 — ADD IMAGES TO EVERY SUB-PAGE HERO THAT HAS NONE

Several sub-page hero sections currently have no image at all (for example, the Brand Architecture & Identity page at `/foundation/brand` is plain dark text on an empty background).

For every sub-page hero that lacks an image:
- Add a full-bleed background image from the matching section folder, with Ken Burns applied.
- Apply a dark gradient scrim (top-to-bottom or left-to-right) so the hero text remains fully legible.
- Do NOT touch any parent-page hero image. Those are LOCKED. Only add images to sub-page heroes that are currently empty.

---

## PART 4 — SHORTEN THE SUB-PAGE HERO TEXT

Sub-page hero headings are too long and busy. The ecosystem hero currently runs as a multi-line paragraph ("...one architecture. Until now, they have read as five strangers.") spilling across the whole screen.

For every sub-page hero:
- Reduce the hero heading to a short, punchy few words — a maximum of one short line, ideally three to six words. Example: "Five entities. One architecture." or simply "Brand Architecture & Identity".
- Move the longer descriptive sentences out of the hero and into the first body section below the hero, where they belong as opening copy.
- Do not delete any text — relocate the longer copy into the body. This preserves text integrity while decluttering the hero.

---

## PART 5 — FIX ALL TEXT BLOCKS WITH NO IMAGES (70/30 ENFORCEMENT)

Many sections are still pure text with no visual. Every text block must be paired with or interrupted by a visual.

- Walk every page section by section. For any section that is text-only, inject an appropriate textless image, SVG diagram, or infographic from the matching folder.
- No paragraph may run longer than roughly 80 words without a visual interruption.
- Use the two-column (image left/right, text beside) or text-between-image-bands patterns.
- Apply Ken Burns to every injected image.

---

## PART 6 — REPLACE THE SMART TOOLS HERO IMAGE; PEOPLE, NOT OBJECTS

- Replace the current Smart Tools hero section image with a new image of PEOPLE — Black South African youth (18–30) working at a professional workstation or studio environment. No holographic interface, no abstract-only object shot.
- Across the whole site, never use any image containing a US dollar sign ($) or any currency symbol. If any such image exists, replace it with a people-based or equipment-based image.
- Prefer images of people wherever a section allows it.

---

## PART 7 — FIX ALL BROKEN LINKS (NOT JUST IMAGES)

- Crawl every navigation link, button, breadcrumb, and CTA. Fix any that lead to a 404, a missing route, or a dead anchor.
- Confirm every mega-nav sub-page link resolves to a real page.
- Confirm the Talent Portal, Cineterns, and EmpowerYouth links open correctly in a new tab.

---

## PART 8 — MEGA NAVBAR: SMALLER, WITH A SUBTLE GLASS EFFECT

- Reduce the overall size of the mega navbar — smaller logo, smaller nav link text, tighter vertical padding, smaller mega-panel cards. It currently feels too large and heavy.
- Add a light glassmorphism effect to the navbar and mega panels: a subtle `backdrop-filter: blur(10px)` with a semi-transparent dark background (for example `background: rgba(9, 9, 14, 0.72)`). Keep the blur gentle — just enough to feel like frosted glass over the content scrolling beneath, not a heavy frost.
- Keep the gold hairline bottom border. Maintain legibility and the existing brand colours.

---

## PART 9 — EMPOWERYOUTH: THE NEW STANDARD FOR ALL EXTERNAL PRESENTATIONS

On the Implementation page (`/delivery/implementation`), confirm the following section exists. If it does not, add it at the bottom of the page under the heading:

`"The new standard for how SA Film Academy presents to the world."`

This section states that going forward, every formal external presentation from the Academy — to funders, production partners, the SETA, and corporate Skills Levy clients — will be delivered as an immersive, scroll-based cinematic web experience shared as a URL, not as a PowerPoint or PDF emailed as an attachment.

The reference implementation must be linked prominently and clearly:

**https://empoweryouth.vercel.app/**

Add one sentence of context: this format was successfully deployed and presented at the recent EmpowerYouth Summit, proving the standard in a live setting. Present the link as a styled card (dark background, gold border, short descriptor, and a large gold "View the Reference Presentation →" button) opening in a new tab with `rel="noopener"`. List the six presentation types SAFA will build in this format: Skills Levy Client Explainer, GreenSet Sustainability Proposal, FILMGRO Gauteng Expansion Proposal, ACE Corporate Sponsor Pitch, NFVF Funding Narrative, and Cineterns Production Company Onboarding.

If this section already exists from an earlier mandate, simply verify the link is present, working, opens in a new tab, and that the EmpowerYouth Summit deployment is mentioned. Add an image of people (Black South African youth 18–30 presenting or viewing a presentation) beside the card if the section currently has no visual.

---

## PART 10 — FINAL PAGE-BY-PAGE QC SWEEP

Visit https://safa-promax.vercel.app/ and inspect every page, sub-page, section, and area in turn. For each, confirm:

- [ ] No image placeholder, "SAFA-IMG-XXX", or "Image Placeholder" text appears anywhere.
- [ ] No broken image links or broken-image icons anywhere.
- [ ] No image contains text, words, labels, or a US dollar / currency sign.
- [ ] Every sub-page hero has a background image with Ken Burns and a legible scrim.
- [ ] Every sub-page hero heading is short (one line, three to six words); longer copy relocated to the body.
- [ ] Every text block is paired with or interrupted by a visual (70/30 at section level).
- [ ] The three-path homepage cards each have an image background.
- [ ] The Smart Tools hero shows people, not an object/abstract.
- [ ] All parent-page hero images are unchanged (LOCKED).
- [ ] All navigation, buttons, breadcrumbs, and CTAs resolve correctly.
- [ ] The mega navbar is smaller and has a subtle glass blur.
- [ ] The EmpowerYouth reference link (https://empoweryouth.vercel.app/) is present on the Implementation page, opens in a new tab, and mentions the Summit deployment.
- [ ] STATUS_LOG.md is updated with every change made in this finishing pass.

---

*End of finishing mandate. Update STATUS_LOG.md when complete.*

---

## PART 11 — CLAUDE'S DETAILED QC REPORT (board-readiness audit, 2026 best practice)

This Part is a full QC of the live site conducted ahead of the board presentation. Every defect below is confirmed from the live deployment and must be fixed. Context: this is an internal pitch deck of a marketing strategy, presented as a website to the SA Film Academy board. It is not a public marketing site. The bar is therefore "does this make the strategy land with a board" and "is it in line with 2026 presentation best practice."

### Overall board-readiness verdict
The strategic content is genuinely strong and board-worthy. The packaging is being undermined by a small number of severe, highly visible technical defects that a board will notice in the first ten seconds. Until the four critical defects below are fixed, the credibility of the whole deck is at risk regardless of how good the strategy is. Priority order: fix the critical defects first, then the structural ones, then polish.

### CRITICAL DEFECT 1 — Headlines render with all spaces stripped (still live)
On the homepage the H1 still reads `SAFilmAcademy_—TalentPipelineoftheSouthAfricanScreen._` and section headings read `Fiveentities._Onearchitecture._`. On the organisation page the H1 reads `Whoweare,whatweactuallydo,andtheperceptionwehavealreadybeguntoshift.` This is the single most damaging issue and it is the first thing the board sees. The underscores and stripped spaces indicate the WordReveal component is joining word spans without spaces and rendering a literal underscore as a space placeholder. Fix: add `margin-right: 0.25em` (or a real space character) between word spans, and remove the literal `_` placeholder so spaces render as spaces. Apply to every H1, H2, H3 site-wide. This must be fixed before anything else.

### CRITICAL DEFECT 2 — Stat counters still frozen at zero
The homepage and organisation page still show `R 0m+`, `0+`, `0%`, `0`. Notably, the organisation page's raw text already contains the correct figures (R60m+, 3,000+, 96%, 124) elsewhere on the same page, so the data exists — only the animated counter renders zero. For a 20-year-old institution presenting to its own board, four zeros across the headline metrics reads as broken. Fix: render the real target value server-side as the initial DOM value so it is correct even before JavaScript runs, then animate up from zero on view. Add the IntersectionObserver options `{ rootMargin: '0px 0px -10% 0px', threshold: 0.1 }` and a `setTimeout` fallback.

### CRITICAL DEFECT 3 — Two conflicting routing systems; broken internal links
The homepage strategy index links to `/strategy/agentic-ai`, `/strategy/seo`, `/strategy/brand`, `/strategy/organisation`, `/strategy/positioning`, `/strategy/implementation`. The mega-nav and the finishing-mandate architecture use `/foundation/*`, `/visibility/*`, `/growth/*`, `/delivery/*`. These two schemes do not agree. `/strategy/agentic-ai` returns a live 404. This means board members clicking from the homepage chapter list will hit dead pages. Fix: choose ONE canonical routing scheme (the tab-based one: `/foundation/*`, `/visibility/*`, `/growth/*`, `/delivery/*`), update every homepage chapter link to match, and add 301 redirects from any `/strategy/*` URL to its correct new location so no link can 404. Crawl every internal link and confirm zero 404s.

### CRITICAL DEFECT 4 — Organisation page duplicates its entire hero
On `/strategy/organisation` the hero image and the H1 heading each appear twice, back to back (the same `road-home-training-000.jpg` image and the same "Who we are…" heading render in two stacked blocks). Remove the duplicate. The first instance is canonical.

### STRUCTURAL ISSUE 5 — Navbar still reads "SAFA PROMAX"
The wordmark still shows "SAFA PROMAX / PROMAX STRATEGY". For a board deck this should read "SA Film Academy" with a subtitle such as "360° Marketing Strategy" rather than the internal Vercel project codename "PROMAX". Replace site-wide including the logo lockup.

### STRUCTURAL ISSUE 6 — Still using old Road Home placeholder photos, not the new cinematic set
The organisation page hero uses `/images/road-home/road-home-training-000.jpg`, an old low-grade asset, rather than the new reddish-cinematic generated images in `public/images/ai/`. Replace every remaining `road-home-training-XXX.jpg` reference with the appropriate textless cinematic `.webp` from the matching `ai/` section folder. (Note: this is a sub-page, so its hero is NOT locked — only parent-page heroes are locked.)

### STRUCTURAL ISSUE 7 — Homepage stat band sits below methodology, not above it
2026 pitch best practice is proof before methodology. The four impact stats currently sit below the ecosystem explanation. Move the stat band directly beneath the hero, above "01 · The Ecosystem", so the board sees R60m+, 3,000+, 96%, 124 before any explanation. (This repeats Standard 4 from the main mandate; confirm it is done.)

### STRUCTURAL ISSUE 8 — Footer carries only two social channels
The footer links only Facebook and Instagram. The strategy itself names LinkedIn, X, YouTube, TikTok, WhatsApp Business and Telegram as active channels. Add all of them so the footer reflects the actual channel strategy the board is being asked to approve.

### 2026 BEST-PRACTICE GAPS (raise the deck from "good" to "board-excellent")
- **Explicit ask.** The deck explains the plan but never states what it asks of the board. Add a short "What we are asking the board to approve" block on the Implementation page: the budget envelope, the go-live date (1 June 2026), and the mandate to proceed. A board deck must close.
- **Proof / social proof.** Named productions (The Woman King, Warrior, One Piece) and clients (Blue Ice Africa, Film Afrika) appear as text but never as logos, credits, or a single testimonial. Add a productions strip and at least one pull-quote (clearly flagged as placeholder text awaiting a real quote).
- **Risk slide.** A board expects risk acknowledgement. Confirm the risk page exists and is linked, covering the Suzuki/Gauteng dependency, NFVF grant timing, and the Cineterns account target.
- **One-sentence plain-English summary.** Add a single sentence near the top that states, in plain language, what SAFA does and who it is for, before the more lyrical copy. A board member skimming should grasp the offer in seconds.
- **Define jargon on first use.** MICT SETA, Skills Levy, B-BBEE, SPV — give each a one-line parenthetical the first time it appears, for board members who are not industry insiders.
- **Mobile check.** Board members will open this on phones. Confirm the giant hero headings (which currently overflow on the ecosystem sub-page) wrap correctly and do not clip on a 390px screen.

### British English / copy QC
- "SAFilmAcademy" once fixed should read "SA Film Academy — Talent Pipeline of the South African Screen." Confirm the literal underscores are gone everywhere.
- Stat caption "In skills development and in-service training, since 2006." is a fragment; make it a complete sentence ("Invested in skills development and in-service training since 2006.").
- Confirm no American spellings remain (organise, colour, programme, recognise, behaviour, centre, authorise).
- Hero subline "Implementation from 1 June 2026." should read "Implementation begins 1 June 2026."

### What is already working well (keep, do not touch)
- The hero image `safa-hero-red-cinematic-black-trainees.png` is excellent and is correctly locked.
- The four-pillar structure (Foundation, Visibility, Growth Engine, Delivery) is logical and board-friendly.
- The strategic content depth — named clients, named tools, named funders, real rand figures — is genuinely strong and is the deck's biggest asset.
- The dark cinematic design language is appropriate and contemporary.

