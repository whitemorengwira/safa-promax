# MANUS AI — SA FILM ACADEMY: TARGETED FIX WORK ORDER (ROUND 3)
**Project:** https://safa-promax.vercel.app/
**Language:** British English everywhere. No em dashes in body copy.

> This is a precise, page-by-page work order. The previous round left placeholders, broken image links, duplicate images, oversized hero text, and missing hero images on most sub-pages. This document fixes all of that. Work through it in order. After each numbered Part, update STATUS_LOG.md. You have full autonomous authority.

---

## HOW TO READ THIS WORK ORDER

There are two kinds of instruction here. **Global Rules** (Part A) apply to every image and every page on the entire site. **Page Work Orders** (Part C) are specific tasks for named URLs. When you do a Page Work Order, the Global Rules still apply on top of it. Do not treat a Page Work Order as the only thing to do on that page — also apply every Global Rule there.

A task is only "done" when it meets the **Definition of Done** stated for it. Do not mark anything complete until it meets that definition.

---

## PART A — GLOBAL RULES (apply to every page, every image)

**A1. The reddish cinematic style.** Every generated image must match the five locked reference images in `public/images/ai/` (the hero crew shot, the post-production lab, the road-home walking shot, the infographic group, and the mega-nav composite). That means: near-black backgrounds, deep crimson and burgundy practical lighting, gold and amber highlights, photorealistic, colour-graded like a DaVinci Resolve film grade.

**A2. The Black People Rule — read this carefully.** This is a casting directive, not a theme. When a person appears, they must be Black, South African in context, and aged 18 to 30 (the only exception is the Chief Executive — see the Leadership page work order). It is NOT a political or movement theme. If any image still has text, words, or labels burned into it, delete it and regenerate a replacement that is simply professional people and equipment in film-industry contexts.

**A3. Equipment counts as a subject.** Do not only generate people. Cinema cameras, boom microphones, lighting rigs, clapperboards, colour-grading desks, monitors, and film reels are excellent standalone subjects and should fill many image slots.

**A4. No text on any image. No dollar or currency signs on any image. Ever.**

**A5. 70/30 visual-to-text ratio** at page, sub-page, and section level. No paragraph runs longer than about 80 words without a visual breaking it up.

**A6. Text integrity.** Never delete, summarise, shorten, or rewrite the strategy copy, EXCEPT where this work order explicitly tells you to rephrase a specific heading. Where a hero has too much text, you move the longer copy down into the body — you do not delete it.

**A7. Locked parent hero images.** The hero images on the parent pages (home, /foundation, /visibility, /growth, /delivery, /smart-tools, /contact) are LOCKED. Never change them. Sub-page hero images are NOT locked and this order will tell you to change several of them.

**A8. Motion.** Apply Ken Burns to every image (scale 1.0 to 1.18 over ~22s, visible within 3 seconds, reduced-motion aware). Add scroll-triggered reveals and a gentle text-float parallax so text appears to float within the visuals.

**A9. Style some text blocks as a design treatment (not all).** Body text should not always sit as plain unstyled paragraphs on a flat background. Use styled blocks as a deliberate design treatment on SOME blocks for variety and emphasis: place selected paragraphs, lead statements, or key callouts inside dark glassmorphism panels (semi-transparent near-black background, subtle `backdrop-filter: blur(8px)`, a thin gold hairline border, generous internal padding, zero or slight border-radius in keeping with the brand). Do not wrap every paragraph this way, that becomes monotonous and heavy. Mix styled blocks with clean open text and image-paired layouts so the rhythm varies down the page. The goal is an art-directed feel where key copy floats over the cinematic visuals, while other copy breathes in open space.

---

## PART B — TWO BUGS THAT ARE STILL LIVE (fix before the page work orders)

**B1. Headings still render with spaces stripped and literal underscores.** On the budget page the heading literally reads `AMonthlySubscription,Nota_ProjectQuote._` and `TheBudgetAllocation` and `TheInfrastructureInvestment`. This is happening on headings across the site. Fix the WordReveal component so words are separated by real spaces (add `margin-right: 0.25em` to each word span) and remove the literal `_` characters so they render as spaces. Verify on every page that headings read as normal English with spaces.

**B2. The mega-navbar size.** In the last round you mistakenly shrank the MAIN parent navbar. That is fine, leave it small. Now ALSO shrink the SUB-PAGE mega-nav dropdown panels to match: smaller card text, smaller descriptors, tighter padding, so the mega-nav panels feel the same small, refined size as the main navbar. Keep the subtle glass blur (`backdrop-filter: blur(10px)`, semi-transparent dark background, gold hairline border).

---

## PART C — DELETE EVERY PLACEHOLDER ON EVERY PAGE

This is the biggest failure from last round. Many pages still show literal placeholder blocks. For example the budget page currently displays this visibly to users:

> `SAFA-IMG-153` · `Image Placeholder` · `Budget Invoice` · `Getty Brief: "Professional invoice macro on a modern dark surface, cinematic lighting"` · `British English. Professional Black South African representation. Cinematic, low-key gold and shadow lighting.`

That entire block is placeholder scaffolding that was never meant to be visible. **Find every instance of the following on the live site and replace it with a real generated image that matches the Getty Brief that was sitting beneath it:**

- any text reading `SAFA-IMG-` followed by a number
- any text reading `Image Placeholder`
- any visible `Getty Brief:` text
- any visible instruction line reading `British English. Professional Black South African representation. Cinematic, low-key gold and shadow lighting.`

**Definition of Done:** searching the live site for "Placeholder", "SAFA-IMG", or "Getty Brief" returns zero visible results. Each former placeholder is now a real, textless, reddish-cinematic image that matches what its Getty Brief described. Generate the image the brief asked for, then delete the brief and the placeholder text.

---

## PART D — PAGE-BY-PAGE WORK ORDERS

For every page below: give it a hero image if it has none; add supporting images so no text block stands alone; replace any duplicate or repeated image with a unique one; delete every placeholder per Part C; ensure all diagrams fit without cutting off text; reduce any oversized hero heading.

### Homepage — the "Who are you here for?" section
The three cards (Production Companies, Funders & Partners, Aspiring Trainees) have BROKEN image links behind them. Generate three befitting reddish-cinematic images: Production Companies = a film crew working on set; Funders & Partners = Black professionals in a boardroom or a handshake; Aspiring Trainees = a young Black intern on their first day on set. Place each behind its card with a dark scrim so the white text stays legible.
**Done when:** all three cards show a real image, no broken-link icon, text legible.

### /foundation/organisation
1. REPLACE the hero section photo with a new reddish-cinematic image.
2. Make the hero text match the PARENT-PAGE design style: a short heading that does NOT cover the image and is NOT too busy. Move the long sentence into the body below the hero (do not delete it).
3. The section headed "The Two-Tier Pathway / A clear career progression model that ensures no one is a trainee for ever" has a BROKEN image link. Generate an appropriate image: a young Black trainee progressing on set, or a two-stage career visual.
**Done when:** hero image replaced, hero heading short and clear of the image, the Two-Tier Pathway image present and relevant.

### /foundation/infrastructure
The SAME image was reused here that appears elsewhere. Replace it with a UNIQUE reddish-cinematic image relevant to digital infrastructure (a Black tech professional at a workstation, or a server/edit-suite environment). Add supporting images to any bare text blocks.
**Done when:** no image on this page is a duplicate of any image used on another page.

### /foundation/brand
Add a hero image (it currently has none) and supporting images for the brand-architecture content. Reddish-cinematic, textless.

### /visibility/calendar
Add a hero image and supporting visuals. Ensure the four-quarter timeline diagram does not cut off any text.

### /visibility/seo
Add a hero image and supporting visuals. Ensure the radial/topic-cluster diagram fits fully without cutting off any text or labels.

### /visibility/leadership — IMPORTANT, read fully
1. The Chief Executive is a Black woman, approximately 60 years old, light in complexion. Generate appropriate dignified, authoritative images of her in leadership contexts (speaking at a podium, in a boardroom, being interviewed). Add several images to this page — it currently has none.
2. REPHRASE the H2. It currently reads: "The Chief Executive as the most powerful marketing instrument the Academy has." Rephrase it in proper British English so it is framed as ONE of the Academy's marketing assets, not THE single most powerful one. Suggested rephrase: "The Chief Executive's voice as one of the Academy's most valuable marketing assets." Keep the surrounding body copy intact.
**Done when:** the page carries multiple images of a ~60-year-old light-complexioned Black female executive, and the H2 no longer claims she is the single most powerful instrument.

### /visibility/content
Add a hero image and supporting visuals (podcast studio, writer at work, social content review). Reddish-cinematic, textless.

### /growth/agentic-ai
Add a hero image and supporting visuals. Ensure any workflow/orbital diagram fits without cutting off text.

### /growth/commercial
1. REPLACE the hero section image with a DARK-THEME reddish-cinematic image.
2. The "Finance team meeting" placeholder (Getty Brief: "Finance team meeting with Black professionals in a modern office, cinematic lighting") must be replaced with a real generated image of exactly that.
**Done when:** dark hero image in place, finance-meeting image generated and placeholder gone.

### /growth/partnerships
Add a hero image and supporting visuals. Reddish-cinematic, textless.

### /growth/positioning
Add a hero image and supporting visuals. Ensure the six-axis radar/spider chart fits fully without cutting off any axis label or text.

### /delivery/community
Add a hero image and supporting visuals (alumni networking, trainee on set, HOD giving direction). Reddish-cinematic, textless.

### /delivery/implementation
The SAME image is repeated here. Generate MORE unique images and replace every repeat so no image appears twice. Add supporting visuals to bare text blocks.
**Done when:** no repeated images on the page.

### /delivery/curriculum
1. REPLACE the hero section image with a DARK-THEME reddish-cinematic image.
2. REPLACE the SVG diagrams on this page with new, better-fitting visuals that support the AI-curriculum content (a clean neural-network or four-layer learning diagram that does not cut off text, plus supporting images of a Black student at an AI workstation).
**Done when:** dark hero in place, old SVGs replaced with new clean visuals that fit fully.

### /delivery/kpis
REPLACE the hero section image with an appropriate reddish-cinematic image. Ensure any gauge/dashboard diagram fits without cutting off text.

### /delivery/budget — REBUILD THIS PAGE
The complete, final, figure-free copy for this page is provided in **Part F** at the end of this document. Implement Part F exactly as written. In summary: fix the broken heading so it reads "A Monthly Subscription, Not a Project Quote."; delete every visible placeholder (SAFA-IMG-153, SAFA-IMG-154, Image Placeholder, all Getty Briefs); add the marked images; show NO figures and NO total anywhere; and state clearly that the costed budget is a work in progress to be presented in a separate budget presentation. Your only creative task on this page is generating the images at the marked slots.
**Done when:** Part F is implemented in full, no figures or totals appear, no placeholders remain, the heading reads correctly, and all images are present.

---

## PART E — FINAL VERIFICATION SWEEP

Visit https://safa-promax.vercel.app/ and every sub-page above, one by one. For each, confirm:
- [ ] No `SAFA-IMG-`, `Image Placeholder`, or `Getty Brief` text anywhere.
- [ ] No broken image links anywhere.
- [ ] No image contains text or a currency sign.
- [ ] No image is a duplicate of an image used on another page.
- [ ] Every sub-page has a hero image; every bare text block has a supporting visual.
- [ ] Every heading reads as normal English with spaces (no concatenation, no literal underscores).
- [ ] Every diagram fits fully without cutting off text or labels.
- [ ] Sub-page mega-nav panels are small, like the main navbar, with a subtle glass blur.
- [ ] The Leadership H2 is rephrased; the CEO images show a ~60-year-old light-complexioned Black woman.
- [ ] The budget page shows no total figure and reads in British English.
- [ ] Parent-page hero images are unchanged (locked).
- [ ] Some body text sits in styled glassmorphism blocks for emphasis (Rule A9), mixed with clean open text, not every paragraph wrapped.
- [ ] STATUS_LOG.md updated with every change.

---

*End of work order. Update STATUS_LOG.md when complete.*

---

## PART F — COMPLETE FINISHED CONTENT FOR /delivery/budget (figure-free)

Implement this content exactly as written. Do not change, shorten, or rewrite the wording. Your only creative task on this page is to GENERATE AND ADD THE IMAGES at each `[IMAGE SLOT]` marker in the reddish-cinematic, textless style. There must be NO Rand figures, NO amounts, and NO consolidated total anywhere on this page. Present body copy in the styled glassmorphism blocks described in Rule A9.

### HERO SECTION
- **Eyebrow label:** 17 · Budget Framework
- **Heading (H1):** A Monthly Subscription, Not a Project Quote.
- **Sub-heading:** A transparent, line-itemised monthly framework that converts the marketing strategy into a single, defensible operating-expense line on the Academy's books.

`[IMAGE SLOT — HERO: dark reddish-cinematic image, textless. This sub-page hero is NOT locked and may be replaced with a stronger dark-theme image from the ai/ folder.]`

### 17.1 — THE BUDGETING PHILOSOPHY
**Heading (H2):** The Budgeting Philosophy

Most marketing relationships bill in unpredictable spikes. A campaign here, a redesign there, an invoice that arrives without warning and never quite matches the quote. For a non-profit company operating in a financially disciplined sector, that model is impossible to plan around and difficult to defend to a board.

The SA Film Academy marketing engine is funded differently. It runs as a single, predictable monthly subscription, in the same way the Academy already pays for electricity, connectivity, or insurance. Every workstream that powers the strategy, the digital infrastructure, the content production, the search and social visibility, and the autonomous AI workflows, is consolidated into one recurring operating-expense line. The Academy always knows what it is paying, what it is receiving for that payment, and when the payment is due.

This subscription approach gives the Academy three things a project-quote model never can: predictable monthly costs that can be budgeted a year in advance, consistent service delivery that does not pause between projects, and a marketing engine that keeps running without financial surprises.

`[IMAGE SLOT — 17.1: a Black South African finance or operations professional, 25 to 30 years, reviewing a clean monthly statement at a dark desk under warm gold lamp light, deep red ambient glow behind. Textless, no currency signs.]`

### 17.2 — THE KEY BUDGET LINE ITEMS
**Heading (H2):** The Key Budget Line Items

An effective marketing strategy budget for the Academy is built from a clear set of line items. The costed figures for each are still being finalised and will be presented in a dedicated budget presentation. For now, the framework below sets out every line item the budget will account for, so the board can see exactly what the marketing engine is composed of before any amounts are attached.

Present the following as a clean, gold-accented card grid or list on a dark background (NO amounts, NO figures, descriptions only):

**Digital infrastructure**
- Website and platform hosting, deployment, and global edge delivery
- Database, authentication, and secure file storage
- Content delivery network, security, and domain proxy
- Domain renewals and transactional email delivery

**Strategic execution**
- Editorial content production across the five content pillars
- Search-engine and AI-search optimisation
- Institutional social media channel management
- Operation and supervision of the agentic AI workflows
- Monthly performance reporting against the strategy's key performance indicators

**Platform and creative development**
- The Cineterns production platform build (quoted separately)
- Post-launch maintenance, administrator training, and onboarding
- Ongoing technical maintenance after handover
- Cinematic web presentations produced in the EmpowerYouth format

**Creative and media production**
- Photography, generated visuals, and graphic assets
- Video and behind-the-scenes capture for the content engine
- Podcast production and editing

`[IMAGE SLOT — 17.2: an abstract macro of a circuit board or server rack with deep red indicator lights and fine gold traces on a near-black surface. Textless. Equipment-only, no people required.]`

### 17.3 — A WORK IN PROGRESS
**Heading (H2):** A Work in Progress

The costed budget is a work in progress. The line items above represent the complete structure of an effective marketing strategy budget for the Academy, but the consolidated, costed figures are being finalised and will be presented in a separate, dedicated budget presentation to the board. Presenting the framework in this way allows the board to understand and approve the shape of the budget, what it covers and why each line exists, before any single figure is fixed. This is precisely the kind of staged financial clarity a non-profit's governance requires.

`[IMAGE SLOT — 17.3: a confident Black South African professional, 27 to 30 years, in a dark boardroom presenting a clean framework on screen, warm gold and deep red cinematic lighting. Textless, no currency signs.]`

### CLOSING CALL TO ACTION
- **Heading:** Ready to explore the Implementation plan?
- **Button:** Next: Implementation Plan → (links to /delivery/implementation)

### IMPLEMENTATION NOTES FOR THIS PAGE
1. Remove the entire current budget body, including the broken `SAFA-IMG-153` and `SAFA-IMG-154` placeholder blocks and their visible Getty Briefs. No placeholder text may remain.
2. Render every heading with proper spacing. The hero heading must read "A Monthly Subscription, Not a Project Quote." with normal spaces and no underscores.
3. Show NO Rand figures, NO amounts, and NO consolidated total anywhere on this page. If a bar diagram was used before, replace it with the descriptive line-item card grid above, which carries no figures.
4. Apply the 70/30 visual ratio and use the styled glassmorphism blocks from Rule A9 on some key paragraphs for emphasis, mixed with clean open text, not on every block.
5. Apply Ken Burns to every image and a scroll-reveal to each section. British English throughout. No em dashes in body copy.

*End of Part F.*
