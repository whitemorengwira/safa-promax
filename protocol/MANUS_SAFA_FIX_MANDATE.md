# MANUS AI — SAFA PROMAX WEBSITE: COMPLETE QC REPORT & FIX MANDATE
**Site under review:** https://safa-promax.vercel.app/
**Reference sites:** https://empoweryouth.vercel.app/ (Ken Burns + bold type standard) · https://nwhite.systems/ (mega navbar standard)
**All writing on this site must be in British English** (organise, colour, recognise, programme, whilst, behaviour, authorised, centre, etc.)

> Work through every section of this document in order. Do not skip a section. After completing each numbered priority block, pause and confirm before proceeding. Every instruction below is non-negotiable.

---

## PRIORITY 0 — CRITICAL BUGS (fix these before touching anything else)

These are embarrassing live defects. They make the site unusable and must be resolved before any new work begins.

### Bug 1 — Words Are Concatenated Without Spaces in All Headings

**What is broken:** Every heading rendered by the WordReveal animation component is displaying all words smashed together with no spaces. On the homepage the H1 reads as `SAFilmAcademy_—TalentPipelineoftheSouthAfricanScreen._`. On the organisation page it reads `Whoweare,whatweactuallydo,andtheperceptionwehavealreadybeguntoshift.`. This is the most visible bug on the entire site.

**Root cause:** The WordReveal component wraps each word in a `<span>` with `display: inline-block`. Inline-block elements collapse whitespace between them unless explicit space characters or `gap` is maintained. The fix is to either (a) add a space character after each word span, or (b) add `margin-right: 0.25em` to each word span, or (c) use a flex container with `flex-wrap: wrap` and `gap: 0.25em` instead of inline-block. Apply the fix to every heading that uses the WordReveal component across the entire site.

### Bug 2 — Hero Image and H1 Heading Are Duplicated on the Organisation Page

**What is broken:** On `/strategy/organisation`, the hero image and the H1 heading `"Who we are, what we actually do..."` each appear twice — once as the page hero block and once again a few hundred pixels below. Remove the second occurrence of the image and the second occurrence of the heading. The first rendering is canonical; the second is a component-composition error.

### Bug 3 — All Animated Counters Are Permanently Stuck at Zero

**What is broken:** The stat counters on both the homepage and the organisation page display `R 0m+`, `0+`, `0%`, and `0` — they never count up to their target values. The IntersectionObserver triggering the animation is either not firing or the `requestAnimationFrame` loop is not starting. Fix the counter logic so that as soon as the stat band enters the viewport, each number counts up from zero to its target value over approximately 1,500 milliseconds with an ease-out curve. The targets are: R60m+ (investment), 3,000+ (trainees), 96% (black student base), 124 (driving licences).

### Bug 4 — "SAFA PROMAX" Is Displaying as the Brand Name in the Navbar

**What is broken:** The navbar logo text reads `SAFA PROMAX`. This is the Vercel project name and it has leaked into the live brand. The correct brand name is `SA Film Academy`. Change the navbar wordmark to read `SA Film Academy` in Playfair Display, gold, and ensure the `<title>` on the contact page is unique (currently it copies the homepage meta verbatim).

### Bug 5 — Contact Page Has the Wrong Image

**What is broken:** The contact page hero currently uses `road-home-training-007.jpg`, which is a generic production photo. This must be replaced entirely. See Priority 3 (Contact Page) for the exact AI image generation instruction.

### Bug 6 — Contact Page Metadata Is a Copy of the Homepage

**What is broken:** The contact page `<title>` and `<meta name="description">` are identical to the homepage. Change them. Title: `Contact SA Film Academy · Get In Touch`. Description: `Reach the SA Film Academy team for production placement enquiries, partnership discussions, funding conversations, and media requests.`

---

## PRIORITY 1 — INFORMATION ARCHITECTURE (the text-chaos problem)

This is the core structural failure of the current site. Every strategy section has been dumped onto a single page (`/strategy/organisation`), producing an unreadable wall of text thousands of words long. The solution is a clean content split: each section of the strategy becomes its own dedicated page, each under the correct navigation tab.

### The Problem in Plain Terms

When a visitor clicks "Foundation" or any of the four nav tabs, they currently land on a single page that contains the Organisation section, the Brand Ecosystem section, the Digital Infrastructure section, the Calendar section, and more — all stacked sequentially, separated by nothing but a horizontal rule. This violates readability, the 70/30 visual ratio, and the principle that a pitch deck website must guide the reader through content one idea at a time.

### The Required Architecture — One Section per Page

Create the following routes. Each page receives **only** its own section's content from `safa-strategy.html`. There must be **zero repetition** of content between pages — if a statistic or paragraph appears on one page, it must not appear on another.

**HOME** (`/`) — keep the existing hero, stat band, five-entity overview cards, and the strategy chapter index. Nothing more. Do not repeat full section copy here.

**FOUNDATION** tab — four sub-pages:
- `/foundation/organisation` — Section 02: The Organisation
- `/foundation/ecosystem` — Section 03: The Brand Ecosystem (five entities)
- `/foundation/infrastructure` — Section 04: Digital Infrastructure (Cineterns + the prototype)
- `/foundation/brand` — Section 08: Brand Architecture & Identity

**VISIBILITY** tab — four sub-pages:
- `/visibility/calendar` — Section 05: The 12-Month Marketing Calendar
- `/visibility/seo` — Section 07: SEO & AI SEO Strategy
- `/visibility/leadership` — Section 09: Institutional Voice & Executive Visibility
- `/visibility/content` — Section 12: Content Marketing & Storytelling

**GROWTH ENGINE** tab — four sub-pages:
- `/growth/agentic-ai` — Section 06: Agentic AI Marketing Engine
- `/growth/commercial` — Section 10: B-BBEE & Skills Levy Commercial Strategy
- `/growth/partnerships` — Section 13: Partnerships, PR & Media Relations
- `/growth/positioning` — Section 14: Competitive Positioning & Differentiation

**DELIVERY** tab — five sub-pages:
- `/delivery/community` — Section 11: Community, Alumni & Stakeholder Engagement
- `/delivery/curriculum` — Section 15: Agentic AI in the Training Curriculum
- `/delivery/kpis` — Section 16: KPI Dashboard & Measurement
- `/delivery/budget` — Section 17: Budget Framework
- `/delivery/implementation` — Section 18: Implementation Commencement

**SMART TOOLS** (`/smart-tools`) — existing, keep and improve.
**CONTACT** (`/contact`) — existing, fix per Priority 3.

### Text Integrity Rule (Absolute)
Do **not** delete, summarise, shorten, paraphrase, or rewrite any existing text from the strategy content. Every word must survive the restructure. What changes is only the distribution of content across pages, and the visual framing around it.

### No Repetition Rule (Absolute)
Once a piece of copy appears on a page, it must not appear on any other page. Audit every page after the restructure and remove any duplicated paragraph, statistic, or heading.

### Further Subdivision Within Pages (If a Page Is Still Too Long)
If any single sub-page above still contains more than approximately 600 words of body copy, divide it into further sub-sections using a tabbed or accordion layout within that page, or create a child page. For example, if `/foundation/infrastructure` is too long, split it into `/foundation/infrastructure/cineterns` and `/foundation/infrastructure/prototype`. The rule is: no visitor should ever face a wall of unbroken text. Every text block must be interrupted by a visual element before the next block begins.

---

## PRIORITY 2 — MEGA NAVBAR (replicate the nwhite.systems pattern)

**Reference:** https://nwhite.systems/ — observe how hovering "What I Do" reveals a full-width panel with sub-services arranged in columns. Replicate this behaviour for SAFA's four strategy tabs.

### Specification

The navbar must be sticky. On desktop, it contains the SA Film Academy wordmark on the left, the nav items in the centre, and the "Talent Portal" CTA button on the right. On scroll beyond 50px, the navbar gains a dark surface background with a gold hairline bottom border. On mobile (under 1024px), all nav collapses into a hamburger that opens a full-height dark drawer.

For each of the four strategy tabs, implement a **mega dropdown** that opens on hover (desktop) or tap (mobile). Each mega dropdown is a full-width panel containing:

**FOUNDATION mega panel:**
Column 1 heading: `The Building Blocks`
- The Organisation · `/foundation/organisation` · `MICT SETA-accredited, 20 years of placement`
- Brand Ecosystem · `/foundation/ecosystem` · `Five entities, one architecture`
- Digital Infrastructure · `/foundation/infrastructure` · `Cineterns and the presentation engine`
- Brand Architecture · `/foundation/brand` · `From five strangers to one family`

**VISIBILITY mega panel:**
Column 1 heading: `How the World Sees SAFA`
- 12-Month Calendar · `/visibility/calendar` · `Foundation, visibility, authority, scale`
- SEO & AI SEO · `/visibility/seo` · `Found by search engines and AI engines`
- Institutional Voice · `/visibility/leadership` · `The Chief Executive as a marketing instrument`
- Content Marketing · `/visibility/content` · `The editorial engine and the podcast`

**GROWTH ENGINE mega panel:**
Column 1 heading: `Where Revenue Is Generated`
- Agentic AI Engine · `/growth/agentic-ai` · `Five autonomous workflows, weekly cadence`
- B-BBEE & Skills Levy · `/growth/commercial` · `The 1% levy, the 20% claim-back`
- Partnerships & PR · `/growth/partnerships` · `Suzuki, Netflix, NFVF and beyond`
- Competitive Positioning · `/growth/positioning` · `Six dimensions on which SAFA wins`

**DELIVERY mega panel:**
Column 1 heading: `Measurable, Accountable Results`
- Community & Alumni · `/delivery/community` · `The four-tier career-progression model`
- AI in Curriculum · `/delivery/curriculum` · `Veo, Kling, Hailuo, Runway masterclasses`
- KPI Dashboard · `/delivery/kpis` · `16 indicators, baselines, 12-month targets`
- Budget Framework · `/delivery/budget` · `Monthly subscription, transparent envelope`
- Implementation · `/delivery/implementation` · `Three tracks, 30 days, concrete results`

Each link in the mega panel must include a short descriptor line in a smaller, muted typeface beneath the link title, as shown above. The panel background is `--surface` (`#13131a`) with a gold hairline top border. Links highlight in gold on hover.

---

## PRIORITY 3 — KEN BURNS EFFECTS (make them dramatically visible)

**Reference:** https://empoweryouth.vercel.app/ — the Ken Burns effect on this site is the standard. It is not subtle. It is a clearly visible, slow cinematic zoom that makes every image appear to breathe and come alive. Every image on safa-promax.vercel.app must have this same quality of motion.

### CSS Specification (apply globally via `globals.css`)

```css
/* Ken Burns — dramatic, visible, cinematic zoom-and-pan.
   The scale goes to 1.18 (not the subtle 1.05 that most sites use).
   This matches the empoweryouth.vercel.app visual standard where
   the zoom is clearly perceptible to any viewer within 3 seconds. */

.ken-burns-frame {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
}

.ken-burns-frame > img,
.ken-burns-frame > .ken-burns-inner {
  width: 110%;        /* slightly oversized to allow pan without edge-reveal */
  height: 110%;
  object-fit: cover;
  transform-origin: center center;
  animation: kenBurnsDramatic 22s ease-in-out infinite alternate;
  will-change: transform;
}

@keyframes kenBurnsDramatic {
  0% {
    transform: scale(1.0) translate(0%, 0%);
  }
  100% {
    transform: scale(1.18) translate(-3%, -2%);
  }
}

/* Second variant — pans in the opposite direction for visual variety.
   Apply class .ken-burns-alt to alternate images so they don't all move identically. */
@keyframes kenBurnsDramaticAlt {
  0% {
    transform: scale(1.0) translate(2%, 1%);
  }
  100% {
    transform: scale(1.18) translate(-2%, -3%);
  }
}

.ken-burns-alt > img,
.ken-burns-alt > .ken-burns-inner {
  animation: kenBurnsDramaticAlt 24s ease-in-out infinite alternate;
}

/* Accessibility — stop the motion for users who have requested reduced motion */
@media (prefers-reduced-motion: reduce) {
  .ken-burns-frame > img,
  .ken-burns-frame > .ken-burns-inner,
  .ken-burns-alt > img,
  .ken-burns-alt > .ken-burns-inner {
    animation: none;
    transform: scale(1.05); /* slight zoom as a static approximation */
  }
}
```

### Application Rules

Apply the `.ken-burns-frame` class to the wrapper `<div>` of every image across the entire site — hero images, section background images, card images, the contact page image, and every AI-generated visual. Alternate `.ken-burns-alt` on every second image to introduce directional variety. The Ken Burns effect must be **clearly visible to any visitor within three seconds of the page loading** — if a reviewer can look at the page for five seconds and not notice the image is moving, the effect is too subtle.

---

## PRIORITY 4 — BOLD CINEMATIC TEXT STYLE (replicate empoweryouth.vercel.app)

**Reference:** https://empoweryouth.vercel.app/ — observe the typography. Headings are very large, very bold, often italic for emphasis, and they feel like film titles rather than corporate subheadings. This is the standard for safa-promax.vercel.app.

### Typography Specification

```css
/* Headings — cinematic weight and scale */
h1 {
  font-family: var(--font-display);       /* Playfair Display */
  font-weight: 900;
  font-size: clamp(2.8rem, 6vw, 7rem);    /* scales from mobile to large desktop */
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--text);                     /* #E8E0D0 */
}

h1 em, h2 em {
  font-style: italic;
  color: var(--gold-soft);               /* #E0C268 — gold italic emphasis */
}

h2 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2rem, 4vw, 4.5rem);
  line-height: 1.1;
  color: var(--text);
}

h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.3rem, 2.5vw, 2rem);
  line-height: 1.3;
}

/* Body — larger and more readable than standard */
p, li {
  font-family: var(--font-body);          /* Outfit */
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.85;
  color: var(--text);
}

/* Eyebrow labels — gold, uppercase, wide tracking */
.eyebrow {
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--gold);
}

/* Drop cap on the opening paragraph of each major section */
.drop-cap::first-letter {
  font-family: var(--font-display);
  font-size: 4.5em;
  font-weight: 900;
  float: left;
  line-height: 0.85;
  margin-right: 0.1em;
  color: var(--gold);
}
```

### Text-Over-Image Treatment
When text sits over or beside an image, give the text block a semi-transparent dark scrim behind it and a subtle `text-shadow: 0 2px 20px rgba(0,0,0,0.8)` on headings to ensure legibility against the Ken Burns image underneath. Never place light text directly on a light image area without a scrim.

---

## PRIORITY 5 — 70/30 VISUAL-TO-TEXT RATIO (per page)

Every page and every sub-page must feel approximately 70% visual surface and 30% text. This is a non-negotiable design rule for a presentation-pitch website. Achieve it as follows.

Every text block must be interrupted by a visual element before another text block begins. Acceptable visual interruptions are: a full-bleed image with Ken Burns, a bespoke SVG diagram ported from `safa-strategy.html`, an animated stat band, an infographic card grid, an icon grid, or a cinematic quote pull-out displayed as large gold italic text over a dark surface.

Long paragraphs (anything over 120 words) must be split visually: place the first half of the paragraph on one side of a two-column layout, place a relevant image with Ken Burns on the other side, and continue the second half of the paragraph below the image. This way text never spans more than approximately half the viewport width before a visual break occurs.

Section hero areas must be full-viewport-height with a Ken Burns background image and a dark gradient scrim, not a small banner or coloured block. The section heading and eyebrow label sit over this hero.

---

## PRIORITY 6 — AI IMAGE GENERATION (100+ images and graphics)

Generate a minimum of 100 images and supporting graphics across the website. All human figures must be **Black South African youth aged 18 to 30 years**. Cinematic, editorial quality throughout. Dark tones, warm gold accents, film-industry contexts. Do not use corporate stock aesthetics — the look must feel like a real production set, a real studio, a real training environment.

### Image Catalogue by Page (generate all of these)

**HOME PAGE (8 images)**
1. Hero background: a wide, cinematic shot of a Black South African film crew on a professional movie set, golden hour, silhouettes, camera rigs, atmospheric haze.
2. Stat band background: abstract gold particle constellation on deep navy.
3. Ecosystem section background: macro close-up of a clapperboard with gold light reflections.
4. Strategy overview background: abstract dark geometry with gold data-flow lines.
5. ACE card image: a young Black filmmaker (25 years, female) reviewing footage on a monitor, focused.
6. FILMGRO card image: young Black trainees beside a vehicle on a film set, Suzuki branding visible.
7. GreenSet card image: a sustainable film set with solar panels, a Black crew member (22 years) checking equipment.
8. Cineterns card image: a young Black creative professional using a laptop, over-the-shoulder, portal visible.

**FOUNDATION — ORGANISATION PAGE (6 images)**
9. Page hero: a confident Black female executive (30 years) standing on a professional set, speaking to crew, natural authority.
10. Placement section: Black trainees on a live production set, working with experienced crew.
11. Compliance section: a Black female professional (28 years) reviewing documents at a desk, modern office, warm light.
12. Perception shift: a professional networking event, Black film industry professionals, warm celebratory atmosphere.
13. Production companies section: a film set overhead shot, Black crew, golden hour.
14. Stat band background: abstract data network on dark surface.

**FOUNDATION — BRAND ECOSYSTEM PAGE (6 images, one per entity)**
15. SA Film Academy entity card: a MICT SETA certificate or official accreditation document with gold seal.
16. ACE entity card: short film production, Black director (26 years, male) giving direction, behind camera.
17. FILMGRO entity card: young Black trainee (20 years) in the driver's seat, instructor beside, licensed.
18. GreenSet entity card: sustainable production set, eco equipment, Black crew member smiling.
19. Cineterns entity card: laptop screen showing the Cineterns portal, Black hand typing.
20. Digital gap section: abstract wireframe overlaid on a dark surface, potential.

**FOUNDATION — DIGITAL INFRASTRUCTURE PAGE (5 images)**
21. Page hero: a Black tech professional (27 years) at dual monitors, code on screen, cinematic blue-and-gold light.
22. Cineterns portal section: over-the-shoulder of a Black production manager using the Cineterns interface.
23. Prototype section: a phone screen showing an interactive presentation, hand of a young Black professional holding it.
24. Tech stack section: abstract circuit topology illustration, gold traces on dark.
25. Commercial translation table background: blurred data visualisation, cinematic.

**FOUNDATION — BRAND ARCHITECTURE PAGE (4 images)**
26. Page hero: five overlapping geometric shapes in gold and deep red on black, representing the five-entity family.
27. Brand audit section: design mockups on a desk, Black creative director reviewing.
28. Power productions section: a cinema screen showing a high-production title sequence.
29. Visual identity section: brand guide spread, Playfair Display type, gold and dark palette.

**VISIBILITY — CALENDAR PAGE (4 images)**
30. Page hero: abstract four-phase timeline in gold light segments on dark.
31. Q1 section: a planning meeting, young Black professionals around a table, strategy session.
32. Q2 section: a film set at work, production activity, high energy.
33. Q3/Q4 section: a press or media event, camera flashes, industry gathering.

**VISIBILITY — SEO PAGE (4 images)**
34. Page hero: abstract radial knowledge graph, gold nodes on black.
35. Traditional SEO section: a Google search results page visible on a laptop, Black hand typing.
36. AI SEO section: a chatbot interface on screen, question typed about film training.
37. Entity disambiguation section: abstract web of connections between named nodes.

**VISIBILITY — LEADERSHIP PAGE (5 images)**
38. Page hero: a Black female executive (30 years) speaking at a podium or panel, professional stage light.
39. LinkedIn strategy section: phone screen showing LinkedIn feed, professional photo profile visible.
40. Speaking engagement section: an industry conference audience, warm stage lighting, speaker visible from behind.
41. Media relations section: a print magazine spread open, film industry editorial.
42. Signal wave background: abstract concentric rings on dark surface.

**VISIBILITY — CONTENT MARKETING PAGE (6 images)**
43. Page hero: editorial publication grid, cinematic dark panels with gold accents.
44. Blog section: Black writer (24 years, female) at a laptop, focused, comfortable creative workspace.
45. Podcast section: a professional podcast studio, two Black creatives (25-28 years) at microphones, warm low-key lighting.
46. Social media section: phone screen with a well-composed Instagram post, Black hand holding phone.
47. Documentary section: a film crew capturing behind-the-scenes footage, Black cinematographer at work.
48. Editorial calendar section: abstract planning grid.

**GROWTH ENGINE — AGENTIC AI PAGE (5 images)**
49. Page hero: abstract orbital AI system, glowing gold nodes on black.
50. Funding scout section: an email inbox on screen, "funding opportunity" subject line visible.
51. Content engine section: abstract text generation visualisation.
52. Talent matcher section: a matching interface, two profile cards connecting.
53. Reputation monitor section: abstract social listening dashboard.

**GROWTH ENGINE — B-BBEE PAGE (5 images)**
54. Page hero: abstract gold Sankey financial-flow diagram.
55. Skills Levy mechanics section: a production company finance team meeting, Black professionals reviewing documents.
56. SAFA admin section: a SETA compliance certificate on a desk, professional hands.
57. Calculator section: a professional accountant (28 years, Black female) with a laptop and calculator.
58. Commercial model section: a business handshake, two Black professionals, modern boardroom.

**GROWTH ENGINE — PARTNERSHIPS PAGE (5 images)**
59. Page hero: abstract broadcast signal waves radiating outward, gold.
60. Suzuki/FILMGRO section: a FILMGRO-branded vehicle at a film location, professional.
61. GreenSet/Netflix section: a sustainable production set, international-looking crew including Black lead.
62. NFVF/government section: an official government or institutional building, South African context.
63. Incubation hub section: young Black filmmakers (20-28 years) collaborating in a studio space.

**GROWTH ENGINE — POSITIONING PAGE (4 images)**
64. Page hero: abstract six-axis radar chart in gold on dark.
65. SETA fluency section: a compliance workshop, Black professionals in a training environment.
66. Digital infrastructure section: a laptop showing the Cineterns portal, confident Black professional.
67. Comparison table background: abstract data texture.

**DELIVERY — COMMUNITY PAGE (5 images)**
68. Page hero: a group of young Black film alumni (22-30 years) at a networking event, warm, celebratory.
69. Tier 1 intern section: a young Black intern (19 years) on their first production set, observing, eager.
70. Tier 2 trainee section: a Black production trainee (22 years) operating camera equipment.
71. ACE alumnus section: a young Black HOD or director (28 years) giving direction on set, confident.
72. Community programmes section: a WhatsApp group-style graphic, abstract.

**DELIVERY — CURRICULUM PAGE (5 images)**
73. Page hero: abstract neural network, layered gold nodes on black.
74. AI tools section: a Black student (22 years) at a workstation with dual monitors, AI-generated video on screen.
75. Veo/Kling section: AI-generated imagery visible on a professional monitor, Black creative hand at keyboard.
76. Masterclass section: a workshop room, young Black creatives learning from a presenter, modern setting.
77. Curriculum structure section: abstract four-layer infographic.

**DELIVERY — KPI DASHBOARD PAGE (4 images)**
78. Page hero: abstract dashboard of gold circular gauges on dark.
79. Cineterns registrations section: a graph on screen showing upward trajectory, Black professional reviewing.
80. Social media metrics section: a phone showing social media analytics.
81. Funding pipeline section: a bar chart infographic, gold bars ascending.

**DELIVERY — BUDGET PAGE (4 images)**
82. Page hero: abstract ascending bar chart, gold on dark.
83. Subscription model section: a clean invoice or contract on a desk, professional.
84. Infrastructure section: abstract server nodes, Vercel/Cloudflare aesthetic.
85. Value envelope section: a confident handshake, Black professional signing a service agreement.

**DELIVERY — IMPLEMENTATION PAGE (5 images)**
86. Page hero: a Black film crew launching into action on the first day of a production, clapperboard snapping, energy.
87. Track 1 (Cineterns) section: laptop showing Cineterns with 50 profiles populated.
88. Track 2 (Content) section: an editorial calendar on screen, Black content creator at work.
89. Track 3 (Partnerships) section: a business meeting, Black executives, formal setting, confidence.
90. First 30 days section: a project timeline on a screen, milestones lighting up.

**SMART TOOLS PAGE (5 images)**
91. Tools hero: a Black creative professional (27 years) interacting with a holographic or AI interface, cinematic gold light.
92. Skills Levy calculator card: calculator and pound/rand notes, professional desk.
93. Funding assistant card: a document being drafted on screen, AI cursor visible.
94. Content studio card: a laptop with a blog draft on screen.
95. Talent match card: two profile cards connecting on screen.

**CONTACT PAGE (5 images)**
96. **CONTACT PAGE HERO (mandatory replacement):** Generate a cinematic, high-quality image of a **30-year-old Black South African woman** dressed in smart-professional attire (dark top, minimal jewellery), holding a phone to her ear with a warm, confident, engaged expression. Background is a modern, dark studio or workspace with soft gold-toned lighting. She is slightly off-centre. The image must be portrait-oriented or landscape with the subject on the right third. This image replaces the current `road-home-training-007.jpg` entirely.
97. Email section icon: an abstract gold envelope on dark surface.
98. LinkedIn section icon: an abstract professional networking visualisation.
99. Cineterns CTA section: laptop showing the Cineterns portal, gold accent light.
100. GreenSet CTA section: the GreenSet logo on a dark surface with organic green texture.

**ADDITIONAL SUPPORTING GRAPHICS (generate as many as needed above 100)**
101–120+: Abstract infographic backgrounds, texture overlays, icon sets (for the KPI table, the budget line items, the Skills Levy mechanic, the four career tiers), filmstrip divider graphics, section-transition overlays.

---

## PRIORITY 7 — MOTION & SCROLL-TRIGGERED ANIMATIONS

### Text Float Effect
When text sits beside or over a Ken Burns image, give the text block a parallax coefficient of 0.92 — as the user scrolls, the image moves at full scroll speed and the text moves at 92% scroll speed, creating a floating sensation. Implement using `IntersectionObserver` + CSS `transform: translateY()` updated on `scroll` events. All parallax must be disabled when `prefers-reduced-motion` is set.

### Scroll-Triggered Reveal
Every content block (text section, card, image, SVG diagram) starts at `opacity: 0; transform: translateY(32px)` and transitions to `opacity: 1; transform: translateY(0)` as it enters the viewport at approximately 15% threshold. Transition duration: 700ms. Ease: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`. Stagger child elements by 80ms when revealing a card grid.

### Word-by-Word Heading Entrance (fix the concatenation bug first, then apply)
Each word in H1 and H2 headings rises up individually with a 60ms stagger after the concatenation bug is fixed. This is the signature heading animation. It must not be applied inside tables or dense data blocks.

### Page Transition
A soft cross-fade (300ms) between routes. Do not use hard cuts — this is a cinematic presentation site.

### Animated Counters
Fix Bug 3 (counters stuck at zero) and then ensure counters run on every page where the stat band appears. Ease-out cubic over 1,500ms.

### Hover States
Cards lift 4px with a deeper shadow and a gold border brightening on hover. All hover transitions under 200ms. Animate only `transform` and `opacity` for GPU performance.

---

## PRIORITY 8 — PROGRESSIVE WEB APP (PWA)

Implement a full PWA so that visitors can install SA Film Academy on their device home screen and receive a native-app-like experience.

### Required Files
Create `/public/manifest.json` with the following content:
```json
{
  "name": "SA Film Academy — 360° Marketing Strategy",
  "short_name": "SAFA Strategy",
  "description": "Where Industry Meets Opportunity. The complete SA Film Academy 2026–2027 marketing and digital strategy.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#09090e",
  "theme_color": "#C9A84C",
  "orientation": "portrait-primary",
  "icons": [
    { "src": "/icons/icon-72.png", "sizes": "72x72", "type": "image/png" },
    { "src": "/icons/icon-96.png", "sizes": "96x96", "type": "image/png" },
    { "src": "/icons/icon-128.png", "sizes": "128x128", "type": "image/png" },
    { "src": "/icons/icon-144.png", "sizes": "144x144", "type": "image/png" },
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ]
}
```

### Icons
Generate the SA Film Academy icon at all sizes listed above. The icon design must be: gold `#C9A84C` on a deep-navy `#09090e` background, featuring either the SAFA initials in Playfair Display or the film-reel motif. Maskable icons must have safe-zone padding of 10%.

### Install Banner
Implement a custom install prompt that fires after a user has visited at least two pages. Show a small, dismissable bar at the bottom of the screen (mobile) or top-right corner (desktop) with the text: `"Add SA Film Academy to your home screen"` and an `Install` button. Wire this to the `beforeinstallprompt` browser event. The bar must respect the user's choice — if they dismiss it, do not show it again for 7 days.

### Service Worker
Register a service worker that caches the shell (HTML, CSS, fonts, the manifest) for offline access. Use a network-first strategy for API calls and a cache-first strategy for images.

### `<head>` Tags
Add to every page's `<head>`:
```html
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#C9A84C" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<link rel="apple-touch-icon" href="/icons/icon-192.png" />
```

---

## PRIORITY 9 — CONTACT PAGE FULL SPECIFICATION

The contact page must be rebuilt to a high design standard. It is the last impression the site leaves, and it currently has no visual distinction.

**Layout:** Full-viewport hero with the AI-generated image of the 30-year-old Black woman answering a phone (image #96 from Priority 6, generated by Manus). The image takes the left two-thirds of the viewport on desktop, with Ken Burns applied. The right one-third holds the contact form on a dark surface panel.

**Heading over the image:** `"Every great production begins with a conversation."` — in Playfair Display italic, large, white with a gold emphasis word, text-shadow applied for legibility.

**Form fields:** Full Name, Email Address, Organisation, Enquiry Type (dropdown: Production Company, Trainee / Intern, Funder / Partner, Media / Press, Other), and Message. Submit button labelled `Send Enquiry` in gold.

**Below the form:** Three contact method blocks — Email (`info@safilmacademy.org`), LinkedIn (`SA Film Academy`), and the Cineterns CTA for trainees. Keep all existing copy verbatim.

**Meta (fix the current copy-paste):** Title: `Contact SA Film Academy · Get In Touch` · Description: `Reach the SA Film Academy team for production placement enquiries, partnership discussions, funding conversations and media requests.`

---

## PRIORITY 10 — BRITISH ENGLISH AUDIT

Perform a find-and-replace across every page for the following American spellings and correct them to British English. Do not change meaning — only spelling.

| American | British |
|---|---|
| organize | organise |
| recognize | recognise |
| realize | realise |
| color | colour |
| center | centre |
| theater | theatre |
| program | programme (where meaning is a plan or schedule) |
| behavior | behaviour |
| gray | grey |
| analyze | analyse |
| optimize | optimise |
| authorize | authorise |
| license (verb) | licence (noun) / license (verb — keep for verbs) |

Also ensure all AI tool output (funding assistant, content studio, blog drafts) is generating British English. Add the instruction `"Write in British English throughout. Do not use em dashes. Do not use American spellings."` to the system prompt of every AI model call in the smart tools.

---

## PRIORITY 11 — PER-PAGE SEO & METADATA

Every page must have a unique, descriptive `<title>` and `<meta name="description">`. Below are the required values:

| Page | Title | Description |
|---|---|---|
| `/` | `SA Film Academy — 360° Marketing Strategy 2026–2027` | `Where Industry Meets Opportunity. SA Film Academy is MICT SETA-accredited, 20 years old, and the defining brand of the South African film talent pipeline.` |
| `/foundation/organisation` | `The Organisation · SA Film Academy` | `How SA Film Academy works — the SETA placement model, the production company fringe-client roster, and the tiered trainee career pathway.` |
| `/foundation/ecosystem` | `Brand Ecosystem · SA Film Academy` | `Five entities — SAFA, ACE, FILMGRO, GreenSet and Cineterns — forming a single, integrated brand architecture.` |
| `/foundation/infrastructure` | `Digital Infrastructure · SA Film Academy` | `Cineterns, the talent placement portal, and the interactive presentation prototype — live, deployed, and demonstrable today.` |
| `/foundation/brand` | `Brand Architecture · SA Film Academy` | `From five strangers to one family — the branded-house model that unifies the SA Film Academy ecosystem.` |
| `/visibility/calendar` | `12-Month Marketing Calendar · SA Film Academy` | `Four quarters, four phases, every milestone visible — the full 2026–2027 implementation calendar.` |
| `/visibility/seo` | `SEO & AI SEO Strategy · SA Film Academy` | `Found by search engines today and AI engines tomorrow — the dual-track authority strategy for SA Film Academy.` |
| `/visibility/leadership` | `Institutional Voice · SA Film Academy` | `The Chief Executive as the Academy's most powerful marketing instrument — a 90-day visibility activation plan.` |
| `/visibility/content` | `Content Marketing Strategy · SA Film Academy` | `The editorial engine, the podcast, the social cadence and the five content pillars powering SA Film Academy's voice.` |
| `/growth/agentic-ai` | `Agentic AI Engine · SA Film Academy` | `Five autonomous weekly workflows — funding scout, content engine, talent matcher, reputation monitor, lead pipeline.` |
| `/growth/commercial` | `B-BBEE & Skills Levy · SA Film Academy` | `How the 1% Skills Levy and the 20% claim-back become SAFA's most powerful commercial instrument.` |
| `/growth/partnerships` | `Partnerships & PR · SA Film Academy` | `Suzuki, Netflix–GreenSet, NFVF, DTIC and Ikasi Media — the formalised partnership architecture.` |
| `/growth/positioning` | `Competitive Positioning · SA Film Academy` | `Six dimensions on which SA Film Academy wins the room — SETA fluency, B-BBEE mechanics, digital infrastructure and agentic AI.` |
| `/delivery/community` | `Community & Alumni · SA Film Academy` | `The four-tier career-progression model that retires the perpetual-trainee perception once and for all.` |
| `/delivery/curriculum` | `AI in the Curriculum · SA Film Academy` | `Veo, Kling, Hailuo and Runway masterclasses — the AI training module for South Africa's next generation of film practitioners.` |
| `/delivery/kpis` | `KPI Dashboard · SA Film Academy` | `Sixteen performance indicators, clear baselines, and twelve-month targets — measured and reported every quarter.` |
| `/delivery/budget` | `Budget Framework · SA Film Academy` | `The monthly subscription model — infrastructure, execution, and management in a single transparent envelope.` |
| `/delivery/implementation` | `Implementation Commencement · SA Film Academy` | `Three tracks, thirty days, tangible results — the first-month activation plan and the Cineterns conversion engine.` |
| `/smart-tools` | `Smart Tools · SA Film Academy` | `AI-powered tools for production companies, trainees and partners — Skills Levy calculator, funding assistant and more.` |
| `/contact` | `Contact SA Film Academy · Get In Touch` | `Reach the SA Film Academy team for production placement enquiries, partnership discussions, funding conversations and media requests.` |

---

## PRIORITY 12 — QUALITY CONTROL CHECKLIST

Run through every item below before marking the build as complete. Every item must pass.

- [ ] The word-concatenation heading bug is fixed across every page.
- [ ] The hero image and H1 heading on the organisation page appear exactly once each.
- [ ] The animated counters count up from zero to their targets on every page where the stat band appears.
- [ ] The navbar wordmark reads `SA Film Academy`, not `SAFA PROMAX`.
- [ ] The mega dropdown opens correctly on hover (desktop) and tap (mobile) for all four strategy tabs.
- [ ] Ken Burns is visible and dramatic on every image across the site — a viewer can see the zoom within 3 seconds.
- [ ] No page contains content from more than one strategy section (no more text dumping).
- [ ] No paragraph, statistic, or heading is repeated across two different pages.
- [ ] Every page has its own unique `<title>` and `<meta name="description">` as specified in Priority 11.
- [ ] The contact page hero image is the AI-generated Black woman on the phone, not the old training photo.
- [ ] The PWA manifest is live, icons are present at all required sizes, and the install prompt appears after two pages.
- [ ] A service worker is registered and the site shell is cached for offline access.
- [ ] All body copy is in British English — no American spellings survive.
- [ ] All AI tool system prompts include the British English, no-em-dash instruction.
- [ ] A minimum of 100 images and graphics are present across the site.
- [ ] Every human figure in every generated image is Black South African youth aged 18–30 years.
- [ ] The 70/30 visual-to-text ratio holds on every page — no wall of unbroken text exists anywhere.
- [ ] Scroll-triggered reveals are working on every page.
- [ ] The Ken Burns effect stops animating when `prefers-reduced-motion` is set.
- [ ] The site is fully responsive — tested at 375px, 768px, 1024px, and 1440px viewport widths.
- [ ] Tap targets on mobile are a minimum of 44px in height.
- [ ] The site title in browser tabs reads `SA Film Academy` (not SAFA PROMAX) on every page.

---

*End of mandate. Work through each priority block in order. Pause for confirmation after each. British English throughout. Every word of the existing strategy copy must survive.*
