# SAFA Promax Final Finishing Mandate for CodeX

**Project:** SA Film Academy / SAFA Promax 360° Marketing Strategy  
**Live site:** https://safa-promax.vercel.app/  
**Primary execution agent:** CodeX inside the AI Operating System  
**Output expectation:** A finished, board-ready public website plus a dedicated SAFA CMS/admin portal that allows the team to edit the site without touching code.  
**Language standard:** Proper British English throughout.  
**Deployment target:** Vercel.  
**Date of mandate:** 26 May 2026  

---

## 1. Mission

CodeX is now taking over the full finishing of `https://safa-promax.vercel.app/`.

The goal is not a small clean-up. The goal is a precise, board-ready finishing exercise that translates the 22 May 2026 SA Film Academy 360° Marketing Strategy meeting into the live site and into a working CMS/editor.

You must first understand the current live site, the repository, the full route structure, the existing page content, the existing image system, the meeting notes/transcript, the image-generation mandate, and the Wix-style editor reference before making changes.

The public site must remain cinematic, premium, South African, red-led, film-industry-specific, and boardroom credible. It must not become generic corporate web design.

The admin portal must allow SAFA to edit the website directly without seeing code. It must feel like a proper web-building environment, inspired by Wix Studio functionality, with dashboard, page management, live editor, media library, preview, save, publish, approvals, and role-based access.

---

## 2. Source-of-truth hierarchy

When instructions conflict, apply this order:

1. **This mandate and the user’s latest written instruction**.
2. **Meeting decisions and transcript from 22 May 2026**.
3. **The current live site and repository implementation**.
4. **The SAFA brand manual when supplied by Lindi Ndebele-Koka**.
5. **Existing attached visual references and screenshots**.
6. **Public internet sources only for official production posters and verified production imagery**.
7. **Any older image-generation command**, but only where it does not conflict with `MANUS_IMAGE_GENERATION_MANDATE_V2.md`.

Do not invent institutional facts. If a metric, partner, amount, production credit, or compliance claim is not confirmed in the repository, transcript, meeting summary, brand manual, or verified public source, mark it as needing confirmation in the internal audit log and avoid overstating it on the public site.

---

## 3. Required documents and assets to read before coding

Before changing the site, read and summarise the following internally:

### 3.1 Current repository

Inspect the full project at:

```text
D:\ai-operating-system-one\nwhite-systems\safa-promax
```

Identify:

```text
/package.json
/next.config.*
/app or /pages
/components
/public
/styles
/lib
/data
/content
/protocol
/vercel.json
/.env.example
```

Confirm whether the project uses:

- Next.js App Router or Pages Router
- TypeScript or JavaScript
- Tailwind or custom CSS
- Any database, CMS, Prisma, Supabase, Firebase, Clerk, NextAuth, or auth middleware
- Any existing admin route
- Any existing content model
- Any existing image-generation workflow
- Any existing route protection or board access system

### 3.2 Live website

Visit and audit the whole live site first:

```text
https://safa-promax.vercel.app/
https://safa-promax.vercel.app/foundation
https://safa-promax.vercel.app/foundation/organisation
https://safa-promax.vercel.app/foundation/ecosystem
https://safa-promax.vercel.app/foundation/infrastructure
https://safa-promax.vercel.app/foundation/brand
https://safa-promax.vercel.app/visibility
https://safa-promax.vercel.app/visibility/calendar
https://safa-promax.vercel.app/visibility/seo
https://safa-promax.vercel.app/visibility/leadership
https://safa-promax.vercel.app/visibility/content
https://safa-promax.vercel.app/growth
https://safa-promax.vercel.app/growth/agentic-ai
https://safa-promax.vercel.app/growth/commercial
https://safa-promax.vercel.app/growth/partnerships
https://safa-promax.vercel.app/growth/positioning
https://safa-promax.vercel.app/delivery
https://safa-promax.vercel.app/delivery/community
https://safa-promax.vercel.app/delivery/curriculum
https://safa-promax.vercel.app/delivery/kpis
https://safa-promax.vercel.app/delivery/budget
https://safa-promax.vercel.app/delivery/implementation
https://safa-promax.vercel.app/smart-tools
https://safa-promax.vercel.app/contact
```

Also inspect all outbound links currently used by the site:

```text
https://cineterns.vercel.app/
https://safilmacademy.org/
https://www.greenset.org/
https://empoweryouth.vercel.app/
LinkedIn
Instagram
Facebook
X/Twitter
YouTube
TikTok
WhatsApp Business
Telegram
```

Do not assume the existing route map is complete. Crawl links from the live site and from the repository.

### 3.3 Meeting notes and full transcript

Use the meeting notes/transcript titled:

```text
Meeting started 2026_05_22 14_04 SAST – Notes by Gemini.pdf
```

The key agreed decisions to implement are:

- Use the website as the digital prototype/presentation instead of static PDF or PowerPoint.
- The presentation must speak digitally because the strategy is about digital portals, infrastructure, and modern delivery.
- The 360° structure is built around Foundation, Visibility, Growth Engine, Delivery, and Smart Tools.
- Update the audience heading from **“Who are you here for?”** to **“Who are we here for?”**
- Update the trainee label to **“Trainee and Aspiring Film Practitioners”** or **“Trainee / Aspiring Film Practitioners”** depending on layout.
- Balance imagery so it is not male-dominated.
- Rename the old/legacy talent portal reference from **Sinence / Cineterns** to **SA Film Intense** in public-facing copy where it refers to the new talent portal. Keep the current technical URL only if that is still the live portal route.
- Replace the “strangers” language with **subsidiaries**, **coherent family**, **unified brand family**, or **branded house** language.
- Remove the word **“actually”** from “Who we are, what we actually do”.
- Use the line **“Who we are, what we do”**.
- Use the phrase **“shifting the perception”** or **“the perception we are shifting”**.
- Start the brand ecosystem explanation with the mother entity, **SA Film Academy**, before explaining the four sub-entities.
- Attribute executive visibility and marketing content first to the CEO, then to the broader SA Film Academy team.
- Incorporate the in-house podcast strategy.
- Implement the AI curriculum as a mandatory part of the delivery strategy.
- Add high-resolution production posters into the **Productions We Have Crewed** section instead of scrolling text only.
- Build the CMS so SAFA can edit site content without code.
- Brighten existing images slightly so they remain cinematic but are not too dark.
- Enable password protection, role-based access, and admin approval features.
- Add visuals into text-heavy sections.
- Use the SAFA brand manual when provided.
- Add the Empower Youth photo and Fame Week/team photos if provided/approved.
- Add Lindi’s strategic partnerships list once provided.
- Coordinate with the IT company where backend/API/security details are required.
- Provide transparent subscription/budget breakdowns, but do not publish unapproved budget figures.

### 3.4 Image-generation mandate

Read this file fully before generating, replacing, or modifying any visual asset:

```text
D:\ai-operating-system-one\nwhite-systems\safa-promax\protocol\MANUS_IMAGE_GENERATION_MANDATE_V2.md
```

Also inspect the whole `/protocol` folder for any older image-generation command. Treat `MANUS_IMAGE_GENERATION_MANDATE_V2.md` as the governing mandate. Use the older command only to recover useful prompt patterns that do not conflict with this mandate.

### 3.5 Wix reference

The user’s Wix account is open in the browser. Use the open browser session only to study the Wix Studio dashboard and editor interaction patterns. Do not change the user’s Wix site. Do not publish anything on Wix. Do not copy the Wix logo or proprietary brand assets.

Study these patterns:

- Dashboard home layout
- Left navigation
- Quick actions
- Analytics cards
- “Edit Site” button
- Page/menu manager
- Desktop/mobile preview toggle
- Inline text editing toolbar
- Section selection outlines
- Drag/drop placement behaviour
- Add element toolbar
- Media library
- Save, Preview, Publish workflow
- Search/tools area
- Chat/help button pattern
- Admin notifications

Then build a SAFA-branded CMS/editor with similar functionality and workflow logic, not a Wix clone that uses Wix branding.

### 3.6 Attached visual references

Use the attached reddish cinematic visual references as style guidance:

```text
post-production-lab-black-creators.png
road-home-training-red-visual.png
safa-hero-red-cinematic-black-trainees.png
```

The visual direction is correct, but do not make new images too dark. Keep the cinematic red identity, then lift brightness, visibility, and facial readability.

Also inspect the attached Wix screenshots for dashboard/editor behaviour.

---

## 4. Non-negotiable global rules

### 4.1 British English

All public copy and CMS UI copy must be in proper British English.

Examples:

```text
organisation, not organization
optimisation, not optimization
programme, not program, unless referring to code
colour, not color
favour, not favor
licence as noun, license as verb
centre, not center
recognise, not recognize
customise, not customize
authoritative, not overhyped
```

Use **SA Film Academy**, **SAFA**, **SA Film Intense**, **MICT SETA**, **B-BBEE**, **GreenSet**, **FILMGRO**, and **ACE** consistently.

### 4.2 Tone

The voice must be:

- Boardroom credible
- Authoritative
- Data-led
- Proudly South African
- Film-industry fluent
- Premium and cinematic
- Clear to a first-time visitor
- Strong without sounding angry
- Strategic without becoming vague
- Human without sounding informal

Avoid:

- Generic corporate filler
- Overly American SaaS language
- Excessive AI buzzwords
- Repetitive “transformation” clichés
- Unverified claims
- Aggressive racial framing
- Text that sounds like an AI hallucination

### 4.3 The Black People Rule

For all generated human imagery, visible people must be Black African / Black South African people, contextually relevant to South African film, digital media, training, post-production, production management, driving academy, sustainability, boardroom, and executive leadership contexts.

This is **not** a movement theme. Do not turn it into a slogan. Do not write “Black People Rule” anywhere on the public site or in visible CMS copy. It is a visual casting and representation instruction only.

The imagery must show:

- Black women and men in credible professional roles.
- Strong female representation, especially in leadership, technical, production, post-production, training, and strategic partnership scenes.
- People who look like real South African film practitioners, trainees, executives, mentors, drivers, eco-stewards, editors, sound technicians, cinematographers, colourists, and production managers.
- Equipment, tools, screens, cameras, editing consoles, lighting rigs, clapperboards, production radios, call sheets, vehicles, sound gear, and laptops where relevant.

Do not generate “people only” images everywhere. The site also needs equipment, dashboards, production gear, stages, control rooms, grading suites, media labs, data flows, posters, official logos where permitted, and branded interface mock-ups.

### 4.4 No text inside generated images

Generated images must not contain readable text, labels, pseudo-words, banners, watermarks, fake UI words, gibberish, captions, or embedded typography.

Exception: official production posters naturally contain text. Do not alter official poster artwork except for web optimisation and cropping where required. Do not generate fake posters with fake text.

All labels, headlines, captions, statistics, and titles must be HTML text in the site, not baked into generated images.

### 4.5 Red cinematic theme

Maintain the existing reddish cinematic theme, but brighten the imagery slightly.

The desired visual direction:

- Deep cinematic reds
- Warm gold highlights
- Dark neutral backgrounds
- Gentle film grain
- Realistic lighting
- Clear faces
- Clear equipment detail
- Not pitch black
- Not horror-themed
- Not overly moody
- Not muddy or underexposed

Use overlays carefully. Text must be readable without making images look dead or washed out.

### 4.6 Locked images

The user has explicitly approved the images currently used on these top-level pages:

```text
HOME: https://safa-promax.vercel.app/
FOUNDATION: https://safa-promax.vercel.app/foundation
VISIBILITY: https://safa-promax.vercel.app/visibility
GROWTH ENGINE: https://safa-promax.vercel.app/growth
DELIVERY: https://safa-promax.vercel.app/delivery
SMART TOOLS: https://safa-promax.vercel.app/smart-tools
```

These images are permanently approved.

Rules for these locked images:

- Do not replace them.
- Do not regenerate them.
- Do not change their visual subject.
- Do not crop them aggressively.
- Do not remove them.
- Only brighten them slightly where needed.
- Preserve their current placement unless layout breaks require minor responsive adjustments.
- In the CMS, mark them as `locked`.
- In the CMS editor, show a lock badge and prevent replacement by default.
- Allow only brightness/contrast overlay adjustments for locked images.

Rework all other broken, missing, placeholder, or weak visuals across subpages and sections.

---

## 5. Required first output from CodeX before major edits

Before implementing changes, create an internal audit file:

```text
/docs/safa-promax-preflight-audit.md
```

This audit must include:

1. Current route map.
2. Current component map.
3. Current content source map.
4. Current image asset map.
5. Broken image/link report.
6. List of locked images.
7. List of images safe to replace.
8. List of copy items requiring British English correction.
9. List of public-facing “Cineterns” / “Sinence” / “SA Film Intense” naming occurrences.
10. List of “strangers” terminology occurrences.
11. List of male-dominated visuals to rebalance.
12. List of text-heavy sections needing visual relief.
13. Current CMS/admin/auth status.
14. Recommended implementation plan.
15. Risks, unresolved facts, and assumptions.

Do not wait for human approval to proceed unless a credential, secret, or unavailable file blocks execution. Continue with best-effort implementation and clearly log any unresolved items.

---

## 6. Public site finishing scope

### 6.1 Home page

Route:

```text
/
```

Required changes:

- Keep approved hero visuals locked and brighten only if necessary.
- Ensure the homepage immediately communicates that this is the SA Film Academy 360° Marketing Strategy for 2026–2027.
- Keep the digital-presentation positioning: this is not a static PDF; it is a live strategic prototype.
- Replace **“Who are you here for?”** with **“Who are we here for?”**
- Update the audience cards to include:
  - **Trainee and Aspiring Film Practitioners**
  - **Production Companies**
  - **Funders and Partners**
- Rebalance the audience-card imagery so it is not male-dominated.
- Ensure women are visible in at least one leadership/partnership context and at least one technical/production context.
- Replace the **Productions We Have Crewed** scrolling text-only treatment with a premium poster rail/grid.
- Include official high-resolution posters for the productions listed on the site:
  - The Woman King
  - Warrior
  - One Piece
  - The Wheel of Time
  - Devil’s Peak
  - Blood & Water
  - Servant
  - The Newsroom
- Use official/public promotional poster sources only.
- Store posters locally in the project, not as hotlinked remote dependencies.
- Add descriptive alt text for each poster.
- Keep a subtle scrolling or carousel motion if it remains premium and accessible.
- Provide a fallback card if a poster cannot be legally or reliably sourced, but log it in the audit.
- Rename the portal CTA where public copy still says **Cineterns** or **Sinence** to **SA Film Intense Talent Portal**, unless the technical URL must remain `cineterns.vercel.app`.
- Preserve `cineterns.vercel.app` as a technical link until the correct SA Film Intense URL is available.
- Ensure all CTAs work.
- Ensure mobile layout remains polished and does not stack awkwardly.

Suggested copy direction:

```text
Who are we here for?

Trainee and Aspiring Film Practitioners
A clear pathway from training into professional screen-industry work.

Production Companies
A verified pipeline of trained South African film and digital media talent.

Funders and Partners
A credible skills-development, B-BBEE, sustainability, and impact partner.
```

### 6.2 Foundation landing page

Route:

```text
/foundation
```

Required changes:

- Keep all approved top-level images locked.
- Preserve the four-section structure:
  - The Organisation
  - Brand Ecosystem
  - Digital Infrastructure
  - Brand Architecture
- Ensure the page explains that Foundation is the structural core: organisation, ecosystem, infrastructure, and brand architecture.
- Make the page visually lighter where it is too dark.
- Ensure hover states, cards, and links are consistent.

### 6.3 Organisation page

Route:

```text
/foundation/organisation
```

Required changes:

- Replace the hero line:

  ```text
  Who we are, what we actually do, and the perception we have already begun to shift.
  ```

  with:

  ```text
  Who we are, what we do, and the perception we are shifting.
  ```

  or:

  ```text
  Who we are, what we do, and the perception we have begun shifting.
  ```

- Remove **“actually”** throughout.
- Keep the Work Skills Facilitator explanation, but polish it into British English.
- Add images to text-heavy subsections.
- Ensure image selection balances gender.
- If the copy refers to “Cape Town-based white production companies”, soften it unless Lindi explicitly approves that wording. Preferred board-safe version:

  ```text
  The Academy has historically had to overcome a perception that it was too closely associated with established Cape Town production-company networks. The current strategy is shifting that perception by making SAFA’s leadership, trainee outcomes, and national industry value far more visible.
  ```

- Keep the “perpetual trainee” issue, but frame it as a problem SAFA is actively solving through a tiered career pathway.
- Add visual relief around:
  - Work Skills Facilitator
  - Two-Tier Pathway
  - Administrative Infrastructure
  - Shifting the Perception

### 6.4 Brand Ecosystem page

Route:

```text
/foundation/ecosystem
```

Required changes:

- Start with the mother entity, **SA Film Academy**, before the subsidiaries.
- Replace the current five-pillar order if it starts with ACE or another sub-entity.
- Public-facing structure must read:
  1. **SA Film Academy** — master brand / mother entity / MICT SETA-accredited NPC.
  2. **ACE** — Academy of Creative Excellence / alumni and HOD pathway.
  3. **FILMGRO** — driving academy / Suzuki-aligned licensing pathway.
  4. **GreenSet** — sustainability subsidiary / eco-stewardship.
  5. **SA Film Intense** — digital talent portal / 500+ profiles / AI match.
- Remove **Digital Gap** as a brand/pillar if it confuses the entity architecture. Use it only as a strategic concept under the SA Film Academy master brand.
- Replace **Cineterns** public-facing label with **SA Film Intense** where it refers to the new talent portal.
- Keep technical route/link labels separate if needed.
- Use “branded house”, “coherent family”, “subsidiaries”, and “unified architecture”.
- Do not use “strangers”.
- Add a clear architecture map, preferably animated subtly, showing the master brand and subsidiaries.
- For FILMGRO, use a credible driving academy / Suzuki / vehicle-training visual rather than a random person.
- For GreenSet, use a real green-set / eco-steward / sustainable production visual.
- For SA Film Intense, use a cinematic talent portal / dashboard / casting database visual, with Black South African film professionals and production-company interface cues.

### 6.5 Digital Infrastructure page

Route:

```text
/foundation/infrastructure
```

Required changes:

- Keep the story that the infrastructure is live, demonstrable, and not just aspirational.
- Keep references to Next.js, Vercel, and Cloudflare where the current repository actually supports those claims.
- Do not overclaim security. Use measured, credible language:

  ```text
  Designed for secure, scalable delivery.
  ```

  rather than:

  ```text
  Cannot be hacked.
  ```

- Implement or document:
  - Password protection
  - Role-based access
  - Admin approval
  - Secure board presentation access
  - Audit logs
  - Trainee data protection principles
  - POPIA-conscious language
- Add “Placement Pipeline” visualisation:
  - SETA approval
  - Trainee profile
  - SA Film Intense portal
  - Agentic match
  - Production company
  - Active placement
- If API integration with SETA/MICT SETA is mentioned, phrase it carefully:

  ```text
  API integration may be explored where approved by the relevant systems and administrators.
  ```

- Do not claim an integration is live unless it is built and tested.

### 6.6 Brand Architecture page

Route:

```text
/foundation/brand
```

Required changes:

- Replace all “five strangers” wording.
- Use:

  ```text
  Five subsidiaries, one coherent family.
  ```

  or:

  ```text
  Five entities, one branded house.
  ```

- Keep the master-brand explanation.
- Update the brand voice principles:
  - Authoritative
  - Proudly South African
  - Industry-fluent
  - Data-led
  - Human and cinematic
- Update the visual system to reflect the reddish theme.
- When the formal brand manual is supplied, integrate it. Until then, do not present guessed colours as final brand law. Label inferred design tokens as interim.
- Replace over-specific production reference if it says only “The Woman King”. Use:

  ```text
  The Academy speaks as the body that has placed trainees across major productions, including The Woman King and other recognised screen projects.
  ```

- Ensure the brand page does not read like an annual report.

### 6.7 Visibility landing page

Route:

```text
/visibility
```

Required changes:

- Keep top-level images locked.
- Keep the structure:
  - 12-Month Calendar
  - SEO & AI SEO
  - Institutional Voice
  - Content Marketing
- Ensure the page explains market presence, content, search visibility, and leadership.
- Brighten the hero visual slightly if needed.
- Keep motion subtle and premium.

### 6.8 12-Month Marketing Calendar page

Route:

```text
/visibility/calendar
```

Required changes:

- Keep June 2026 to May 2027 as the strategic calendar unless the meeting owner supplies an updated calendar.
- Keep four phases:
  - Foundation: June–August 2026
  - Visibility: September–October 2026
  - Authority: November 2026–February 2027
  - Scale: March–May 2027
- Include the portal beta target between June and August 2026.
- Include minimum 50 profiles as the functional prototype target.
- Include weekly Monday execution rhythm:
  - What shipped?
  - What is blocked?
  - What is next?
  - Who owns it?
  - When does it close?
- Include monthly board visibility.
- Ensure “No surprises. No hidden delays.” is used in a credible way.
- Connect this page to the CMS dashboard: the admin portal should have a visual execution calendar or status board based on these phases.

### 6.9 SEO & AI SEO page

Route:

```text
/visibility/seo
```

Required changes:

- Keep the dual strategy:
  - Traditional SEO
  - AI SEO / Generative Engine Optimisation
- Use British English: **optimisation**.
- Implement actual technical SEO:
  - Metadata per page
  - Open Graph tags
  - Twitter/X card tags
  - Canonical URLs
  - Sitemap
  - Robots.txt
  - Structured data where relevant
  - Accessible heading hierarchy
  - Internal links
  - Alt text
  - Performance-friendly image optimisation
- Add entity clarity for:
  - SA Film Academy
  - SAFA
  - SA Film Intense
  - MICT SETA
  - B-BBEE
  - FILMGRO
  - GreenSet
  - ACE
- Do not stuff keywords unnaturally.
- Add AI-discovery support:
  - Clear entity descriptions
  - FAQ blocks where useful
  - Consistent naming
  - Schema.org markup where appropriate
  - Optional `/llms.txt` if the project convention supports it

### 6.10 Institutional Voice & Executive Visibility page

Route:

```text
/visibility/leadership
```

Required changes:

- Keep the CEO as a central marketing asset.
- Add the broader SA Film Academy team after the CEO.
- Do not make the strategy look like it is only about one person.
- Use approved CEO images from Empower Youth and Fame Week if supplied.
- Add team imagery with Cindy, CL, and others if supplied/approved.
- Ensure copy says the CEO’s voice leads the institutional voice; the team strengthens it.
- Do not overpersonalise or sound sentimental.
- Keep the 90-day activation structure if it remains useful.
- Include LinkedIn strategy, speaking engagements, media appearances, and institutional authority.
- Ensure gender representation is balanced.

Suggested headline:

```text
Institutional Voice, Executive Visibility, and the SAFA Team
```

Suggested subheading:

```text
The Chief Executive’s voice leads the repositioning, while the wider SA Film Academy team gives the institution its depth, credibility, and delivery strength.
```

### 6.11 Content Marketing & Storytelling page

Route:

```text
/visibility/content
```

Required changes:

- Keep the multi-format publication strategy.
- Include:
  - Weekly articles
  - Monthly podcast
  - Case studies
  - Social cards
  - Short-form video
  - Documentary mini-series if already in strategy
- Podcast length: 45–60 minutes.
- Use studio access and trainee involvement where appropriate.
- Position SAFA as an authoritative industry source, not just a service provider.
- Ensure all content pillars are clear:
  - Skills & B-BBEE
  - AI in post-production
  - Sustainable production
  - Career-path stories
  - Industry commentary
- Use “cinematic, not corporate” as a creative standard.
- Add visuals for podcast studio, editorial room, production interviews, and article publishing workflow.

### 6.12 Growth Engine landing page

Route:

```text
/growth
```

Required changes:

- Keep top-level images locked.
- Keep the structure:
  - Agentic AI Engine
  - B-BBEE & Skills Levy
  - Partnerships & PR
  - Competitive Positioning
- Refine “Where revenue is generated” for NPC context. Preferred direction:

  ```text
  Where sustainable income is generated and impact is scaled.
  ```

- Make clear that SAFA has both:
  - commercial/administrative income streams
  - non-profit/social-impact responsibilities

### 6.13 Agentic AI Marketing Engine page

Route:

```text
/growth/agentic-ai
```

Required changes:

- Keep the idea of digital staff / agentic workflows.
- Ensure no agent acts without human review on sensitive outputs.
- Add governance:
  - CEO dashboard visibility
  - approval workflows
  - content review before publishing
  - audit trail
  - role-based permissions
- Avoid implying AI can publish anything without approval.
- Suggested agent model:
  - Funding Scout
  - Content Pipeline
  - Perception Monitor
  - Talent Matcher
  - Reputation / Report Monitor
- Tie agents to weekly reporting and Monday execution rhythm.
- Keep the tone powerful but controlled.

### 6.14 B-BBEE & Skills Levy page

Route:

```text
/growth/commercial
```

Required changes:

- Verify all figures.
- The live site and the meeting notes may differ on the “up to 70% / 7%” recovery wording. Do not guess. Check the business owner, source documentation, or current legal/compliance model before publishing a percentage.
- If unverified, use careful wording:

  ```text
  SAFA helps production companies understand and recover eligible training-related value through approved skills-development processes.
  ```

- Keep the commercial strategy clear:
  - Skills Development Levy
  - B-BBEE points
  - Work Skills Programme
  - administrative simplicity
  - verified trainee placement
  - value to production companies
- Use British English:
  - **scorecard optimisation**
  - **leviable amount**
  - **compliance documentation**

### 6.15 Partnerships, PR & Media Relations page

Route:

```text
/growth/partnerships
```

Required changes:

- Add the strategic partnerships list once Lindi supplies it.
- Current named examples may include Netflix, Suzuki, NFVF, and others, but do not overclaim formalised agreements unless verified.
- Use wording like:

  ```text
  existing and prospective strategic partners
  ```

  unless agreements are confirmed.
- Use real photos for the user and Lindi if supplied.
- Avoid male-dominated handshake visuals.
- Include partner categories:
  - production partners
  - training partners
  - funding partners
  - broadcast/streaming partners
  - sustainability partners
  - government/industry bodies
- Add media relations structure:
  - thought leadership
  - press releases
  - case studies
  - partner co-branded content
  - speaking opportunities

### 6.16 Competitive Positioning page

Route:

```text
/growth/positioning
```

Required changes:

- Keep the six-dimension positioning.
- Align dimensions with meeting-approved language:
  - SETA fluency/compliance
  - B-BBEE mechanics
  - NPC integrity
  - transformation track record
  - digital infrastructure
  - agentic AI / operational visibility
- Use “category of one” carefully. Support with facts already known:
  - 20+ years
  - 3,000+ trainees
  - 500+ productions
  - MICT SETA accreditation
- Avoid claiming “no direct competitor” unless the client accepts that positioning.
- Add a strong but credible radar/scorecard visual.

### 6.17 Delivery landing page

Route:

```text
/delivery
```

Required changes:

- Keep top-level images locked.
- Keep the structure:
  - Community & Alumni
  - AI Curriculum
  - KPI Dashboard
  - Budget Framework
  - Implementation
- Make the AI curriculum feel mandatory and urgent, as agreed.
- Ensure the Delivery pillar is about measurable implementation, not just ideas.

### 6.18 Community & Alumni page

Route:

```text
/delivery/community
```

Required changes:

- Keep the transition from “perpetual trainee” to “permanent industry citizen”.
- Make the four-tier pathway clear:
  - Year 1 intern
  - Year 2–3 trainee
  - ACE graduate
  - independent practitioner / mentor / HOD pathway
- Add visual community mesh.
- Add images of Black alumni and trainees in credible industry settings.
- Add mentorship and alumni championing as a visible programme.

### 6.19 AI Curriculum page

Route:

```text
/delivery/curriculum
```

Required changes:

- Treat the AI curriculum as a strategic differentiator.
- Use tools:
  - Veo
  - Kling
  - Hailuo
  - Runway
  - equivalent platforms as they evolve
- Spell tool names correctly.
- Do not overstate certification unless a certification partner is confirmed.
- The curriculum must teach:
  - briefing
  - prompt design
  - iteration
  - review
  - ethical use
  - post-production workflows
  - delivery
  - quality control
- Show that this is for both:
  - trainees
  - production companies / professional workflows
- Add visuals with Black trainees using production equipment and AI-enabled workflows. No text in generated screens.

### 6.20 KPI Dashboard page

Route:

```text
/delivery/kpis
```

Required changes:

- Keep KPI architecture.
- Make it clear that KPIs are reported quarterly.
- Add dashboard-style visualisation, but avoid fake precision if metrics are placeholders.
- Include CMS/admin dashboard integration:
  - registrations
  - placements
  - blog traffic
  - CEO LinkedIn performance
  - skills levy clients
  - partnership progress
  - content shipped
  - blockers
- Mark fake/demo data as demo until connected to real sources.
- Build a CMS/admin analytics panel with the same KPI categories.

### 6.21 Budget Framework page

Route:

```text
/delivery/budget
```

Required changes:

- Do not publish unapproved budget figures as final.
- Meeting discussion included:
  - R8,500 once-off fee for work completed to date.
  - Approx. R4,500 per month for agentic AI tools/subscription.
  - Approx. R2,500 per month for secure hosting/platform services.
  - Approx. R7,000 per month total essential operating subscriptions.
  - Future fees to be quoted separately.
- Current site may show an unapproved R2.4m annual investment in implementation. Treat that as unconfirmed unless the business owner approves it.
- Best public copy direction:

  ```text
  The costed budget is being finalised and will be presented as a separate board-ready budget schedule. This page defines the budget structure, line items, and governance logic before final figures are attached.
  ```

- Include line items:
  - Digital infrastructure
  - Database/authentication/storage
  - CDN/security/domain proxy
  - Strategic execution
  - Agentic AI supervision
  - Content production
  - SEO and AI SEO
  - CMS maintenance
  - Admin training
  - Generated visuals and media production
  - Podcast production
- Keep figures in CMS as editable fields, hidden by default until approved.

### 6.22 Implementation page

Route:

```text
/delivery/implementation
```

Required changes:

- Remove or hide the R2.4m figure unless explicitly confirmed.
- Keep the 30-day sprint structure.
- Implementation commencement target may stay 1 June 2026 if still aligned.
- Three tracks:
  - SA Film Intense platform
  - content pipeline
  - strategic partnerships
- Use realistic deliverables:
  - 50 trainee profiles migrated
  - 5 employer accounts
  - first placement event logged
  - 8 SEO blog posts
  - social cadence live
  - first podcast in production
  - Suzuki co-branding to be formalised if confirmed
  - Netflix/GreenSet case study only if confirmed
- Board approval language must be careful:

  ```text
  Approval to proceed with the implementation plan, subject to final budget confirmation and quarterly reporting.
  ```

### 6.23 Smart Tools page

Route:

```text
/smart-tools
```

Required changes:

- Keep approved images locked.
- Verify calculators and formulae.
- Fix any broken calculations.
- Confirm Skills Levy recovery percentages before publishing final claims.
- Ensure tools work on desktop and mobile.
- Ensure output values update correctly.
- Use British English:
  - **leviable amount**
  - **scorecard**
  - **optimisation**
  - **programme**
- Add admin-editable assumptions:
  - levy percentage
  - mandatory grant percentage
  - discretionary grant percentage
  - B-BBEE target values
  - eco-steward calculation assumptions
- Add disclaimer:

  ```text
  Figures are indicative and subject to formal verification, approved submissions, and relevant programme rules.
  ```

### 6.24 Contact page

Route:

```text
/contact
```

Required changes:

- Ensure contact form works.
- Add validation.
- Add spam protection.
- Add email routing through environment variables.
- Add success/failure states.
- Add analytics event for contact submission if analytics exists.
- Ensure all social links are correct or hidden until confirmed.
- Make the page visually aligned with the red cinematic theme.

---

## 7. Image and poster workflow

### 7.1 Broken image scan

Run a complete asset audit:

- Search all JSX/TSX/MDX/CSS for:
  - `<img`
  - `Image`
  - `background-image`
  - `url(`
  - `src=`
  - `poster=`
  - remote image URLs
- Test every public image URL.
- Test every local image path.
- Confirm file existence in `/public`.
- Check image dimensions.
- Check alt text.
- Check loading priority.
- Check mobile cropping.

Create this file:

```text
/docs/safa-promax-image-audit.md
```

Classify each image:

```text
LOCKED_TOP_LEVEL
KEEP_AND_BRIGHTEN
REPLACE_BROKEN
REPLACE_PLACEHOLDER
REPLACE_MALE_DOMINATED
REPLACE_LOW_QUALITY
POSTER_REQUIRED
GENERATE_NEW
AWAITING_CLIENT_PHOTO
```

### 7.2 Locked image brightening

For locked images, do not edit the original file destructively unless necessary. Preferred approaches:

- Use CSS overlay adjustments:

  ```css
  filter: brightness(1.08) contrast(1.04) saturate(1.03);
  ```

- Or create a non-destructive processed copy with clear naming:

  ```text
  original-name.brightened.webp
  ```

- Keep original files in place for rollback.

### 7.3 Generated image naming

Use structured file names:

```text
/public/images/safa-promax/generated/<route>/<section>-<descriptor>-v01.webp
```

Examples:

```text
/public/images/safa-promax/generated/home/trainee-aspiring-practitioners-female-camera-team-v01.webp
/public/images/safa-promax/generated/foundation/organisation-two-tier-pathway-v01.webp
/public/images/safa-promax/generated/growth/partnerships-black-woman-executive-handshake-v01.webp
/public/images/safa-promax/generated/delivery/ai-curriculum-black-trainees-post-production-v01.webp
```

### 7.4 Image generation prompt template

Use this template unless `MANUS_IMAGE_GENERATION_MANDATE_V2.md` says otherwise:

```text
Create a premium cinematic South African film-industry visual for the SA Film Academy 360° Marketing Strategy website.

Scene:
[describe route and section]

Subjects:
Black South African/African film professionals, balanced gender representation, with women visible in credible leadership or technical roles where relevant.

Equipment/context:
[film cameras, grading suite, production monitors, lighting rig, sound boom, call sheets, dashboard, vehicle training, eco-steward gear, laptops, admin dashboard, etc.]

Visual style:
Cinematic red-led lighting, warm gold highlights, premium boardroom-ready quality, realistic photography, slightly brighter than dark moody film stills, clear faces, clear equipment, subtle film grain, modern editorial composition.

Restrictions:
No readable text, no words, no captions, no watermarks, no logos unless officially supplied, no fake UI text, no distorted hands, no generic stock-photo look, no white-dominated cast, no cartoon style, no excessive darkness, no horror mood.
```

### 7.5 Poster acquisition

For **Productions We Have Crewed**, download and add official/public poster imagery for:

```text
The Woman King
Warrior
One Piece
The Wheel of Time
Devil’s Peak
Blood & Water
Servant
The Newsroom
```

Rules:

- Use official posters, verified promotional sources, studio/streaming press kits, or reputable poster databases.
- Do not use random low-resolution images from unsafe sources.
- Store locally:

  ```text
  /public/images/safa-promax/productions/posters/
  ```

- Suggested filenames:

  ```text
  the-woman-king-poster.webp
  warrior-poster.webp
  one-piece-poster.webp
  the-wheel-of-time-poster.webp
  devils-peak-poster.webp
  blood-and-water-poster.webp
  servant-poster.webp
  the-newsroom-poster.webp
  ```

- Preserve aspect ratio.
- Optimise to WebP if allowed.
- Add fallback JPEG/PNG if required.
- Add metadata in:

  ```text
  /data/productions.ts
  ```

  or the chosen CMS content store.
- Poster card content should be HTML text outside the image:
  - title
  - year/season if confirmed
  - SAFA crew involvement status if confirmed
  - source/credit metadata if needed internally

Do not generate fake posters. If an official poster cannot be sourced, use a premium non-text cinematic production still-style placeholder and log the missing official poster.

---

## 8. CMS/admin portal mandate

### 8.1 Required routes

Build a dedicated SAFA CMS/admin portal under the same project.

Required routes:

```text
/admin
/admin/login
/admin/dashboard
/admin/pages
/admin/editor
/admin/editor/[page]
/admin/media
/admin/approvals
/admin/analytics
/admin/settings
/admin/users
/admin/audit-log
/admin/help
```

If the existing repository already has a different admin convention, preserve it only if it can satisfy this full mandate.

### 8.2 CMS objective

The CMS must allow SAFA to edit the website without code.

It must support:

- Editing public page text.
- Editing headlines, subheadings, body copy, cards, statistics, CTAs, links, footer links, social links, SEO metadata, and section order.
- Replacing unlocked images.
- Brightening locked images only.
- Uploading new images.
- Generating new images through the image-generation workflow if integrated.
- Managing poster assets.
- Managing production credits/posters.
- Managing partners.
- Managing team/executive visibility photos.
- Managing blog/editorial pipeline content if blog infrastructure exists or is added.
- Previewing edits before publishing.
- Saving drafts.
- Approval workflow.
- Publishing changes.
- Rollback/version history.
- User roles and permissions.
- Audit log of who changed what and when.

### 8.3 Wix-style dashboard

Build an admin dashboard inspired by Wix Studio, but branded for SAFA.

Required dashboard layout:

- Dark left sidebar.
- Top bar with search/tools area.
- Site name and status card.
- “Edit Site” primary button.
- Quick actions panel.
- Analytics cards.
- Content tasks / outstanding approvals.
- Broken-link and broken-image alerts.
- Content calendar status.
- CMS health status.
- Recent edits.
- Pending approvals.
- User profile/menu.
- Notification icons.
- AI assistant/help button if appropriate.

Example cards:

```text
Site Sessions
Content Updates
Pending Approvals
Broken Images
Portal Profiles
Contact Leads
SEO Health
Publishing Status
```

The Wix screenshots show the dashboard and editor experience. Match the workflow pattern, not Wix branding.

### 8.4 Live editor

Build a proper visual editor.

Minimum functional requirements:

- Load the selected public page inside an editable preview area.
- Allow desktop/mobile preview.
- Allow page selection from a side panel.
- Allow section selection by clicking on the page.
- Show editable section outlines.
- Support inline text editing.
- Support CTA text and link editing.
- Support image selection and replacement for unlocked images.
- Show locked image badge for locked images.
- Support “Edit Text”, “Generate Text with AI” if an AI writing workflow exists.
- Support page menu management.
- Support Save Draft, Preview, Publish.
- Support undo/redo if practical.
- Support version history and rollback.
- Support responsive preview.

If full drag-and-drop is too heavy for the first release, implement controlled section reordering and block selection first, but design the editor shell so drag-and-drop can be added later.

### 8.5 Content model

Public pages should render from editable content records wherever practical.

Recommended content entities:

```text
SiteSettings
NavigationItem
Page
PageSection
TextBlock
CTA
ImageAsset
PosterAsset
ProductionCredit
Partner
TeamMember
Metric
CalendarMilestone
ContentArticle
PodcastEpisode
SmartToolConfig
SEOSettings
User
Role
ApprovalRequest
AuditLogEntry
Revision
```

Minimum fields for `Page`:

```text
id
slug
title
route
status
seoTitle
seoDescription
ogImage
sections
createdAt
updatedAt
publishedAt
```

Minimum fields for `PageSection`:

```text
id
pageId
type
title
eyebrow
headline
subheadline
body
cards
images
ctas
order
locked
visible
settings
createdAt
updatedAt
```

Minimum fields for `ImageAsset`:

```text
id
src
alt
caption
route
section
status
locked
brightnessAdjustOnly
credit
source
width
height
dominantColour
createdAt
updatedAt
```

Minimum fields for `Revision`:

```text
id
entityType
entityId
before
after
changedBy
changeReason
createdAt
publishedAt
rollbackAvailable
```

### 8.6 Data storage decision

Inspect the repo first.

If a database is already configured, use it.

If no database exists, implement the fastest reliable CMS storage that fits Vercel:

Preferred options, in order:

1. Existing database/auth system in repo.
2. Supabase or Neon/PostgreSQL with Prisma if already present or easy to configure.
3. Vercel KV/Postgres if already provisioned.
4. File-based JSON/MDX content store for immediate delivery, with admin writes handled through a secure server action/API and a documented limitation.

Do not hardcode secrets. Use environment variables and provide:

```text
.env.example
```

### 8.7 Authentication and roles

The admin portal must be protected.

Roles:

```text
Super Admin
Admin
Editor
Approver
Viewer
```

Role permissions:

- **Super Admin:** full access, user management, settings, publish, rollback.
- **Admin:** full content access, approvals, publish.
- **Editor:** create/edit drafts, upload media, cannot publish without approval.
- **Approver:** review and approve draft changes, can request revisions.
- **Viewer:** read-only dashboard and previews.

Required security features:

- Protected routes.
- Secure session handling.
- Passwords never stored in plain text.
- No credentials in code.
- Audit log for all content changes.
- Optional 2FA placeholder if not implemented yet.
- Role checks in server-side logic, not only UI.
- CSRF-safe mutations where applicable.
- Rate-limited login if possible.
- Sanitise rich text input.
- Validate URLs.
- Prevent script injection.
- Prevent unauthorised image/file upload types.

### 8.8 Approval workflow

Every public change should support:

```text
Draft → Review → Approved → Published
```

CMS must show:

- Who created the draft.
- What changed.
- Which page/section changed.
- Who approved it.
- When it was published.
- Rollback option.

For AI-generated copy or images, require approval before publishing.

### 8.9 Locked image behaviour in CMS

Locked image rules:

- Locked top-level page images cannot be replaced by ordinary editors.
- Editor can adjust brightness within approved range only.
- Admin can unlock only through Super Admin confirmation.
- Audit log must record any attempt to unlock or replace a locked image.
- UI text:

```text
This image is locked by the SAFA visual mandate. You may adjust brightness only.
```

### 8.10 Media library

Media library must include:

- Image search/filter by route, section, status, lock state, and type.
- Upload images.
- Add alt text.
- Add source/credit.
- Optimise images.
- Replace unlocked image.
- Mark image as approved.
- Mark image as rejected.
- Identify unused assets.
- Identify broken images.
- Poster library for productions.
- Generated image library.

### 8.11 CMS visual design

CMS design language:

- Dark professional dashboard.
- SAFA red and gold accents.
- Glassmorphism only where useful.
- Clear cards.
- Clean tables.
- Big obvious “Edit Site” button.
- Left sidebar like Wix/SaaS dashboard.
- Not cluttered.
- Mobile responsive but desktop-first.

Do not use Wix logos, Wix wording, or protected assets. Build an original SAFA CMS inspired by Wix’s usability.

---

## 9. Password protection and board access

Implement a secure board/presentation access layer if not already present.

Required features:

- Password-protected board presentation area or protected sharing mode.
- Admin-created users.
- Pending approvals.
- Active users.
- Roles:
  - Admin
  - Team Member
  - Viewer
- Approved users only.
- Access revocation.
- Login tracking.
- Audit log.
- Secure handling of sensitive documents and strategy IP.
- Optional route:

  ```text
  /board
  /board/login
  /board/admin
  ```

Do not expose board-only content publicly unless intended.

---

## 10. Copy-editing rules

Run a full copy pass across all pages.

Replace:

```text
Who are you here for?
```

with:

```text
Who are we here for?
```

Replace:

```text
Aspiring Trainees
```

with:

```text
Trainee and Aspiring Film Practitioners
```

or, where shorter UI copy is needed:

```text
Trainee / Aspiring Practitioners
```

Replace:

```text
Who we are, what we actually do
```

with:

```text
Who we are, what we do
```

Replace:

```text
five strangers
```

with one of:

```text
five subsidiaries
five entities, one coherent family
five entities, one branded house
five connected subsidiaries under one master brand
```

Replace public-facing legacy portal naming:

```text
Sinence
Cineterns
```

with:

```text
SA Film Intense
SA Film Intense Talent Portal
```

where the public brand is the new talent portal.

Keep `cineterns.vercel.app` only as the technical URL if it remains the working destination.

Use **Growth Engine** instead of just **Growth** in navigation unless layout requires shorter copy.

Use **Smart Tools** consistently.

---

## 11. Navigation and route consistency

Ensure all header, footer, card, and CTA links are valid.

Main nav:

```text
Home
Foundation
Visibility
Growth Engine
Delivery
Smart Tools
Contact
Talent Portal
```

Ensure these routes work:

```text
/
 /foundation
 /visibility
 /growth
 /delivery
 /smart-tools
 /contact
```

Ensure all section cards route to correct subpages.

Add active nav states.

Ensure mobile navigation works.

Ensure footer links do not point to empty placeholders.

---

## 12. Responsive and accessibility requirements

Every page must pass a basic responsive and accessibility check.

Requirements:

- Mobile view must not crop faces awkwardly.
- CTA buttons must be tappable.
- Text must remain readable over images.
- No horizontal scroll on mobile.
- Alt text for all images.
- Keyboard navigation for admin and public CTAs.
- Proper heading order.
- Form labels where forms exist.
- Sufficient colour contrast.
- Reduce motion support:

  ```css
  @media (prefers-reduced-motion: reduce)
  ```

- Posters/carousels must not trap focus.
- CMS editor must show visible focus states.

---

## 13. Technical SEO and performance

Implement or verify:

- `metadata` per route.
- `sitemap.xml`.
- `robots.txt`.
- Canonical URLs.
- Open Graph images.
- Social share images.
- Structured data where appropriate:
  - Organisation
  - EducationalOrganisation/EducationalOrganization
  - Course
  - Event
  - Article
  - FAQ if used
- Optimised images with correct dimensions.
- Lazy loading for non-critical images.
- Priority loading for hero images.
- No unbounded remote images without config.
- No broken `next/image` domains.
- No hydration errors.
- No console errors.
- No 404s in internal navigation.
- Good Core Web Vitals.

---

## 14. Testing requirements

Before final handover, run the strongest available test suite.

Minimum:

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm run test
```

If some scripts do not exist, add sensible scripts or document why not.

Also run:

- Link scan.
- Image scan.
- Mobile check.
- Desktop check.
- Admin login check.
- Admin editor save draft check.
- Admin editor publish check.
- Locked image enforcement check.
- Role permission check.
- Contact form check.
- Smart Tools calculator check.
- SEO metadata check.
- Vercel build check.

Create:

```text
/docs/safa-promax-qa-report.md
```

Include:

- What was changed.
- What was tested.
- What passed.
- What remains pending.
- Any credentials/environment variables required.
- Any assets still awaiting client approval.
- Any budget figures or legal claims requiring confirmation.

---

## 15. Acceptance criteria

The job is complete only when all items below pass.

### Public site

- All public pages load.
- All internal routes work.
- All CTA links work or are intentionally disabled with no dead-link feel.
- No broken images.
- Top-level locked images are not replaced.
- Locked images are slightly brighter where needed.
- All generated human visuals follow the Black People Rule.
- Images are not too dark.
- Generated images contain no text.
- Production posters are added or logged if unavailable.
- Gender representation is balanced.
- Copy is in British English.
- “Who are we here for?” is implemented.
- “Trainee and Aspiring Film Practitioners” is implemented.
- “SA Film Intense” is implemented as the public talent portal name where appropriate.
- “Strangers” terminology is removed.
- “Actually” is removed from the organisation hero copy.
- Foundation, Visibility, Growth Engine, Delivery, and Smart Tools are coherent.
- Budget page does not publish unapproved figures.
- Implementation page does not show R2.4m unless approved.
- Site feels board-ready, cinematic, premium, and credible.

### CMS/admin portal

- `/admin` exists and is protected.
- Dashboard exists.
- “Edit Site” button exists.
- Page manager exists.
- Visual editor exists.
- Text editing works.
- CTA editing works.
- Image replacement works for unlocked images.
- Locked image protection works.
- Media library exists.
- Draft saving works.
- Preview works.
- Publish workflow works.
- Role-based access works.
- Audit log works.
- Approval workflow works or is clearly implemented as a first release.
- CMS UI is SAFA-branded and Wix-inspired in functionality.
- CMS is usable by non-coders.

### Technical

- Build passes.
- No critical TypeScript errors.
- No critical lint errors.
- No exposed secrets.
- `.env.example` updated.
- Vercel deployment ready.
- QA report created.
- Preflight audit created.
- Image audit created.

---

## 16. Suggested execution sequence

Execute in this order:

1. Read repository and protocol files.
2. Crawl live site and all routes.
3. Create preflight audit.
4. Create image audit.
5. Identify locked images.
6. Fix global copy and terminology.
7. Fix route links and broken assets.
8. Add production posters.
9. Replace weak/broken subpage visuals.
10. Brighten locked images non-destructively.
11. Finish page-by-page public site edits.
12. Build CMS/admin data model.
13. Build protected admin routes.
14. Build dashboard.
15. Build page manager.
16. Build live editor.
17. Build media library.
18. Build approvals and audit log.
19. Wire public site to editable content records where practical.
20. Add SEO and AI SEO implementation.
21. Add security/password/board access features.
22. Test.
23. Build.
24. Create QA report.
25. Commit with a clear message.

---

## 17. Commit message format

Use clear commits:

```text
feat(safa): finish public 360 strategy site and CMS admin portal
fix(safa): update meeting-driven copy and visual terminology
feat(cms): add SAFA admin dashboard and visual editor
fix(assets): replace broken images and add production posters
chore(qa): add preflight, image audit, and QA reports
```

---

## 18. Final handover notes to produce

At the end, create:

```text
/docs/safa-promax-final-handover.md
```

Include:

- Public site URL.
- Admin URL.
- Login instructions or environment variable instructions.
- CMS editing instructions.
- How to edit text.
- How to replace an unlocked image.
- How locked images work.
- How to add production posters.
- How to publish.
- How to rollback.
- How approvals work.
- Which facts still require client confirmation.
- Which photos still require client upload/approval.
- Which budget figures are hidden/pending approval.
- What to do before the board presentation.

---

## 19. Do not do these things

Do not:

- Replace the approved top-level images.
- Make the site darker.
- Use generated images with embedded text.
- Use generic white-dominated stock-looking visuals.
- Turn the Black People Rule into a public slogan.
- Publish unapproved budget figures.
- Overclaim security.
- Overclaim partnerships.
- Overclaim legal/compliance percentages.
- Remove the cinematic brand direction.
- Rewrite the strategy into a generic website.
- Break the Vercel deployment.
- Hardcode credentials.
- Expose admin routes without protection.
- Copy Wix branding or logos.
- Make the CMS only a static mock-up. It must edit real site content.
- Leave broken image links.
- Leave placeholder images where final images are needed.
- Leave “strangers” terminology.
- Leave “Who are you here for?”
- Leave “what we actually do”.
- Leave the current poster section as scrolling text only.

---

## 20. Short execution prompt for CodeX

Use this as the operational prompt:

```text
You are CodeX inside the AI Operating System. Take over the full finishing of https://safa-promax.vercel.app/ and its repository at D:\ai-operating-system-one\nwhite-systems\safa-promax.

First read the full repository, the live site, the meeting notes/transcript, and D:\ai-operating-system-one\nwhite-systems\safa-promax\protocol\MANUS_IMAGE_GENERATION_MANDATE_V2.md. Also inspect any older image-generation command in the protocol folder, but treat the V2 mandate as final.

Implement all meeting-driven changes: British English; “Who are we here for?”; “Trainee and Aspiring Film Practitioners”; rename public-facing legacy portal language to “SA Film Intense”; remove “strangers”; start the ecosystem with the SA Film Academy mother brand; balance gender representation; brighten approved images slightly; add production posters; add visuals to text-heavy sections; implement security, approvals, and role-based access.

Do not replace the approved images on Home, Foundation, Visibility, Growth Engine, Delivery, and Smart Tools. Lock them and allow brightness adjustment only.

Follow the Black People Rule for generated human visuals. It is a casting/representation instruction only, not a public theme. Do not generate images with embedded text. Include people, equipment, tools, dashboards, film gear, production spaces, and official posters where required.

Build a SAFA-branded CMS/admin portal under /admin, inspired by Wix Studio functionality. Include dashboard, Edit Site button, page manager, live visual editor, media library, draft/preview/publish, approvals, roles, audit logs, locked-image behaviour, and analytics/status panels. Use the user’s open Wix account only to study the editor/dashboard UX. Do not alter the Wix site or copy Wix branding.

Run a complete route, link, image, copy, security, SEO, performance, and CMS QA pass. Produce preflight audit, image audit, QA report, and final handover documents. Deploy-ready output must pass build and be Vercel-ready.
```

---

## 21. Final delivery standard

The finished site must feel like a premium live strategy environment that SAFA can confidently send to the board before the 20 June boardroom meeting. It must not feel like a rough prototype. The CMS must make the team believe they can manage the site without calling a developer for every edit.

Every visible change must respect the meeting, the brand, the approved visuals, British English, the reddish cinematic identity, and the requirement for controlled human approval over AI-supported workflows.
