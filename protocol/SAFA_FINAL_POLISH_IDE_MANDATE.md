# SA FILM ACADEMY PITCH DECK WEBSITE — FINAL POLISH & IMAGE INJECTION MANDATE
**Project root:** `C:\Users\User\Desktop\safa-promax`
**Live site:** https://safa-promax.vercel.app/
**All writing: British English throughout** — organise, colour, recognise,
programme, behaviour, centre, authorise, whilst. No American spellings. No em
dashes in body copy.

> This site is a **marketing strategy pitch deck presented as a website**.
> It is used for internal presentations to funders, production partners, Skills
> Levy clients, and the SETA — not as a public-facing site. SA Film Academy
> already has a live domain at safilmacademy.org. Keep that context in mind.
> Read this entire document before touching a single file. Work through each
> part in order. Update `STATUS_LOG.md` at the project root after each part.

---

## PART A — LIVE SITE QC: EVERY CONFIRMED DEFECT

The following defects were confirmed by direct inspection of the live site at
https://safa-promax.vercel.app/ immediately before this mandate was written.
Fix every one of them. Do not skip any.

### Defect A1 — Word Concatenation in ALL Headings (Priority: Critical)
Every H1 and H2 rendered by the WordReveal animation is displaying with all
words smashed together, no spaces. The homepage H1 reads as a single string:
`SAFilmAcademy_—TalentPipelineoftheSouthAfricanScreen._`
The organisation page H1/H2 reads:
`Whoweare,whatweactuallydo,andtheperceptionwehavealreadybeguntoshift.`
This is a CSS whitespace collapse caused by the `inline-block` styling on each
word span. Fix by adding `margin-right: 0.25em` to every `.word` span inside
the WordReveal component, or switch to a `flex-wrap: wrap; gap: 0.25em`
container. Apply the fix across **every heading on every page** — not just the
homepage. Test each page by scrolling to every H1 and H2 and confirming spaces
render correctly.

### Defect A2 — Stat Counters Frozen at Zero on All Pages (Priority: Critical)
The animated counters on the homepage stat band and the organisation page stat
band both display R 0m+, 0+, 0%, and 0. They never count up. Separately, on
the organisation page the stat values are being rendered twice in two different
formats — once as plain incomplete text ("m+ In skills development...") and
once as the broken animated counter component. This is a component-duplication
bug layered on top of the counter animation bug.

Fix the counter animation first: add `{ rootMargin: '0px 0px -10% 0px',
threshold: 0.15 }` as IntersectionObserver options and add a 400ms
`setTimeout` fallback so counters animate regardless of observer status. The
targets are R60m+, 3,000+, 96%, and 124. Then fix the duplication: locate the
organisation page component and remove the second, incorrectly formatted
rendering of the stat band — only one stat band should appear, and it must use
the animated counter component.

### Defect A3 — Hero Image and Heading Duplicated on Organisation Page (Priority: Critical)
The organisation page renders the hero image (`road-home-training-000.jpg`)
and its H1/H2 heading **twice** — once correctly as the page hero block and
again below it as a second, redundant block. Remove the second occurrence of
both the image and the heading entirely. The first rendering is the canonical
one.

### Defect A4 — Organisation Page Using Old Road-Home Image (Priority: High)
The organisation page hero currently uses
`/images/road-home/road-home-training-000.jpg` — the old placeholder image.
This must be replaced with the appropriate generated image from the
`public/images/ai/foundation-org/` folder. Do not change the homepage hero
(`safa-hero-red-cinematic-black-trainees.png`) — that one is locked and correct.

### Defect A5 — Navbar Brand Name Shows "SAFA PROMAX" (Priority: High)
The navbar wordmark reads "SAFA PROMAX". The correct brand name is
**SA Film Academy**. Change the navbar logo text to "SA Film Academy" in
Playfair Display, gold. Also update the browser tab title on every page to
begin with "SA Film Academy" not "SAFA PROMAX".

### Defect A6 — Mega Navbar Glass Effect Too Heavy (Priority: High)
The mega dropdown panels on the four strategy tabs have an excessively heavy
glass/blur effect that causes the text within the panel to conflict with
whatever is visible through the blurred background. Reduce the backdrop filter
from whatever it currently is to `backdrop-filter: blur(8px)` and increase the
panel's background opacity to at least `rgba(13, 13, 20, 0.96)` so the dark
surface reads clearly. Every link and descriptor in the mega panel must be fully
legible at a glance without any visual interference from the background.

### Defect A7 — Strategy Overview Shows Only 6 of 18 Chapters (Priority: Medium)
The homepage strategy overview section surfaces only chapters 02, 06, 07, 08,
14, and 18. The remaining 12 chapters are not represented. Add a "View all 18
chapters" link beneath the existing cards that routes to a chapter index page
(create `/strategy-index` if it does not exist) or expands the grid to show all
18. At minimum the homepage must signal that 18 chapters exist.

### Defect A8 — Footer Missing Most Social Channels (Priority: Medium)
The footer links only to Facebook and Instagram. The strategy explicitly
includes LinkedIn, X (Twitter), YouTube, TikTok, and WhatsApp Business as
active channels. Add icon links for all channels. Use `lucide-react` icons or
equivalent. WhatsApp link must use the `wa.me/` format.

### Defect A9 — Contact Page Has No Appropriate Dark Image (Priority: High)
The contact page hero currently has either a placeholder or an inappropriate
image. The correct image has already been generated and lives in
`public/images/ai/contact/`. Use the darkest, most cinematic image from that
folder as the contact page hero. Do not lock this image — it is a replacement,
not an original.

### Defect A10 — Multiple Pages Still Showing Placeholder Images (Priority: High)
Several pages are still rendering placeholder boxes labelled "Image Placeholder"
or "SAFA-IMG-XXX" instead of the generated images. All 100 generated images are
now organised in the folder structure at `public/images/ai/[section-folder]/`.
Every placeholder must be replaced. See Part C for the exact folder-to-page
mapping.

---

## PART B — LOCKED HERO IMAGES (do not touch these under any circumstances)

The following hero images are confirmed correct and must never be changed,
regenerated, recoloured, cropped, or replaced. Mark each with a comment
`{/* LOCKED HERO — DO NOT CHANGE */}` directly above its `<Image>` component.

The homepage hero is `safa-hero-red-cinematic-black-trainees.png` — this image
is the visual benchmark for the entire site and is locked for life.

The four cinematic benchmark images that were reviewed and approved as the
correct visual style are also locked wherever they appear:
`film-academy-infographic-black-people`, `mobile-menu-red-mega-nav-visual`,
`post-production-lab-black-creators`, and `road-home-training-red-visual`.
These may remain as heroes or section images on whichever pages currently use
them. Do not move them.

Every other page's hero image may be updated using the generated images from
the corresponding folder. The decision of which image to use as a hero on a
given page should be made by selecting the most cinematic, full-bleed
appropriate image from that page's folder.

---

## PART C — IMAGE INJECTION MAP (70/30 visual ratio, section by section)

All 100 generated images are at `public/images/ai/[folder]/`. The folders map
directly to the site's pages and sections. Use this map to inject images. For
every section that currently has a placeholder or no image, select the most
appropriate generated image from the correct folder and inject it using the
standard `<Image>` component with the `.ken-burns-frame` wrapper class so Ken
Burns applies automatically.

The 70/30 rule must be enforced at three levels: the full page, each sub-page,
and each individual section. No paragraph of body copy may run longer than
approximately 80 words before a visual element interrupts it.

### Home Page → `public/images/ai/home/`
The homepage hero (`safa-hero-red-cinematic-black-trainees.png`) is locked.
Use images from the `home/` folder for the following sections: the stat band
background (a texture/abstract image), the ecosystem entity cards (one image
per entity card background), and the strategy overview section background. The
three stakeholder pathway cards (Production Companies, Funders & Partners,
Aspiring Trainees) each need a background image from the `home/` folder.

### Foundation — Organisation → `public/images/ai/foundation-org/`
Replace the broken `road-home-training-000.jpg` hero with the most powerful
image from this folder. Use additional images from this folder to break up the
long text on this page: one image after the first 80-word paragraph, one in
the stat band section, and one beside or below the production-company fringe
client listing. Apply Ken Burns to all of them.

### Foundation — Ecosystem → `public/images/ai/foundation-ecosystem/`
Each of the five entity cards (SA Film Academy, ACE, FILMGRO, GreenSet,
Cineterns) should have a background or beside-card image from this folder.
Use one image per entity — five images total on this page, plus one for the
page hero.

### Foundation — Infrastructure → `public/images/ai/foundation-infra/`
Two images on this page: one for the page hero section, one breaking up the
Cineterns description text.

### Foundation — Brand → `public/images/ai/foundation-brand/`
Two images: page hero, and one beside the brand architecture diagram.

### Visibility — Calendar → `public/images/ai/visibility-calendar/`
One image per quarter (four images) placed beside or above each quarterly
column of milestones. Plus one page hero.

### Visibility — SEO → `public/images/ai/visibility-seo/`
One page hero, one image breaking up the AI SEO vs traditional SEO comparison.

### Visibility — Leadership → `public/images/ai/visibility-leadership/`
One page hero (this should be the executive podium or speaker image — the most
powerful portrait on the site). One image beside the 90-day visibility calendar
table.

### Visibility — Content → `public/images/ai/visibility-content/`
One page hero, one image per content pillar card (five images for the five
pillars), and one image beside the podcast description.

### Growth Engine — Agentic AI → `public/images/ai/growth-ai/`
One page hero, one image beside each of the five workflow descriptions (five
images), or group the five into a visual card grid with one image per card.

### Growth Engine — Commercial (B-BBEE) → `public/images/ai/growth-commercial/`
One page hero, one image beside the Skills Levy three-step process visual, one
beside the financial flow diagram.

### Growth Engine — Partnerships → `public/images/ai/growth-partners/`
One page hero, one image per partnership card (approximately four to six cards).

### Growth Engine — Positioning → `public/images/ai/growth-positioning/`
One page hero, one image beside the radar chart diagram.

### Delivery — Community → `public/images/ai/delivery-community/`
One page hero, one image per career-tier card (four tier cards, four images).

### Delivery — Curriculum → `public/images/ai/delivery-curriculum/`
One page hero, one image beside the AI tools masterclass section, one beside
the neural network diagram.

### Delivery — KPIs → `public/images/ai/delivery-kpis/`
One page hero, one background texture image behind the KPI table.

### Delivery — Budget → `public/images/ai/delivery-budget/`
One page hero, one image beside the budget bar chart.

### Delivery — Implementation → `public/images/ai/delivery-implementation/`
One page hero (the most energetic, action-launching image from the folder),
one image per activation track (three tracks, three images), and one image in
the Cineterns conversion engine section.

### Smart Tools → `public/images/ai/smart-tools/`
One page hero, one background image per tool card.

### Contact → `public/images/ai/contact/`
Select the darkest, most cinematic image from this folder as the page hero.
The contact page should feel intimate and professional — a person answering a
call or in a warm conversation. Do not use a bright or cheerful image.

### Shared Backgrounds → `public/images/ai/shared/`
Use these abstract texture images as full-bleed section dividers between major
content blocks on any page. They are ideal as the background for the filmstrip
divider sections, the pull-quote bands, and the stat counter bands.

### Additional Folders
The folders `execution-creative`, `execution-impact`, `execution-operational`,
`execution-technical`, `governance-compliance`, `risk-mitigation`, and
`exit-strategy` contain images for any pages covering those topics. If those
pages do not yet exist, hold the images in reserve and inject them when the
pages are created. If the pages exist but are empty, use these folders to
populate them following the same 70/30 rule.

---

## PART D — MEGA NAVBAR: COMPLETE GLASS EFFECT REPAIR

The current mega navbar glass is broken in two ways: the blur is too heavy and
the panel background is too transparent, causing the background content to
bleed through and make the navigation text illegible.

Apply the following CSS to the mega dropdown panel. Find the component
responsible for the mega panel — likely a `div` with classes such as
`backdrop-blur-xl` or `bg-surface/80` — and replace its styling with:

```css
/* Mega dropdown panel */
.mega-panel {
  background-color: rgba(13, 13, 20, 0.97);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-top: 1px solid rgba(201, 168, 76, 0.35);
  border-bottom: 1px solid rgba(201, 168, 76, 0.12);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.7);
}

/* Mega panel link titles */
.mega-panel a .link-title {
  color: #E8E0D0;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
  transition: color 180ms ease;
}

/* Mega panel link descriptors */
.mega-panel a .link-desc {
  color: rgba(232, 224, 208, 0.55);
  font-size: 0.75rem;
  line-height: 1.5;
  margin-top: 2px;
}

/* Hover state */
.mega-panel a:hover .link-title {
  color: #C9A84C; /* gold */
}

/* Column headings */
.mega-panel .col-heading {
  color: #C9A84C;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(201, 168, 76, 0.2);
}
```

After applying this, verify the mega panel on all four strategy tabs at both
1440px and 768px viewport widths and confirm every link title and descriptor
is fully legible without visual interference from the background.

---

## PART E — TEXT FITTING: GLOBAL REPAIRS

Several text overflow and layout fitting issues were observed across the site.
Apply the following fixes globally.

### E1 — Heading Line Breaks
All H1 and H2 headings must wrap naturally without breaking in the middle of a
word. Add `overflow-wrap: break-word` and `word-break: break-word` to the
heading CSS. For headings using the WordReveal component, the flex container
must have `flex-wrap: wrap` so words stack onto the next line at the container
boundary rather than overflowing.

### E2 — Body Text Maximum Width
No body copy paragraph should span the full viewport width. Set a maximum
content width of `65ch` (approximately 65 characters) on all `<p>` elements
within strategy content sections. This is the typographically correct line
length for readability. On two-column layouts the paragraph width is naturally
constrained by the column — apply `max-width: 65ch` only on full-width
single-column sections.

### E3 — Mobile Text Padding
On viewports under 768px, all section content must have a minimum horizontal
padding of `clamp(16px, 5vw, 32px)` on each side. No text may touch the screen
edge. Check every page at 375px viewport width and correct any content that
overflows or touches the edge.

### E4 — Long Technical Terms
Terms such as "MICT SETA-accredited Non-Profit Company" and "Workplace Skills
Plan" sometimes break awkwardly at narrow widths. Wrap each in a
`white-space: nowrap` span for tablet widths and above, and allow natural
wrapping below 640px.

### E5 — Eyebrow Label Truncation
On some pages the eyebrow labels (e.g., "02 · The Organisation") are truncating
mid-word at narrow widths. Add `white-space: nowrap` to eyebrow label elements
and reduce the font size to `0.6rem` at mobile widths if needed.

---

## PART F — MOBILE RESPONSIVENESS: COMPLETE AUDIT AND FIX

The site must be fully usable on mobile devices. Test at 375px, 430px, and
768px viewport widths and apply the following rules.

### F1 — Hamburger Menu
Under 1024px, the full mega navbar must collapse into a hamburger button
(top-right, minimum 44px tap target). Tapping the hamburger opens a full-height
dark drawer from the right. The drawer contains all nav links with the strategy
sub-links shown as an expandable accordion (tap the tab name to expand/collapse
the sub-links). The drawer background is `rgba(9, 9, 14, 0.98)`. The close
button (×) is in the top-right of the drawer, minimum 44px tap target.

### F2 — Hero Sections on Mobile
Full-viewport hero sections must display correctly at 375px. The background
image should use `object-fit: cover` and `object-position: center`. The
overlay gradient must ensure the heading text is legible — increase the dark
overlay opacity to at least 0.7 on mobile where the image is displayed
smaller. The hero heading should scale down to approximately `clamp(1.8rem,
6vw, 3rem)` at mobile widths.

### F3 — Stat Band on Mobile
The four-item stat band must stack to a 2×2 grid on mobile (not a horizontal
row of four tiny items). Use `grid-template-columns: 1fr 1fr` under 640px.

### F4 — Strategy Chapter Cards on Mobile
The chapter overview cards on the homepage must stack to a single column on
mobile. Add `grid-cols-1` at `sm:` and `grid-cols-2` at `md:`.

### F5 — Simulation Diagrams on Mobile
The SVG simulation diagrams (the Skills Levy flow, the orbital AI system, the
career-progression ladder, the radar chart) must be horizontally scrollable on
mobile rather than being forced to shrink to unreadable sizes. Wrap each diagram
in a `overflow-x: auto; -webkit-overflow-scrolling: touch` container and give
the SVG a minimum width of `480px` so it renders at a legible size and the
user can scroll to see the full diagram.

### F6 — The 12-Month Calendar on Mobile
The four-column horizontal timeline must become a vertical single-column
timeline on mobile. Each quarter becomes a full-width block with a vertical
connecting line down the left side, built using a CSS `::before` pseudo-element
on the left border. The connecting line colour is gold.

### F7 — Image Layout on Mobile
Two-column image-and-text layouts must stack vertically on mobile — image
above, text below. The image maintains its full width and uses a fixed height
of `250px` with `object-fit: cover` at mobile widths. Ken Burns continues to
apply on mobile but at a reduced scale range of 1.0 to 1.1 (less aggressive
than desktop) to avoid performance issues on lower-powered devices.

### F8 — Tap Targets
Every interactive element — buttons, nav links, card links, CTA buttons,
social media icons in the footer — must have a minimum tap target size of
44px × 44px. Use `padding: 12px 20px` as a minimum on all buttons at mobile
widths.

### F9 — Contact Form on Mobile
The contact page form fields must be full-width on mobile (`width: 100%`). No
two form fields should sit side by side on viewports under 640px. Increase
the input `font-size` to at least 16px on mobile to prevent iOS from
auto-zooming into the field on focus.

---

## PART G — ANIMATION AND SIMULATION POLISH

### G1 — Ken Burns: Verify It Is Applied and Visible
Every image on the site that is not inside a small icon or logo must have the
Ken Burns wrapper applied. The animation must be clearly visible within three
seconds of the image entering the viewport — the zoom from scale 1.0 to 1.18
must be perceptible to a casual observer. If any image is displaying without
visible Ken Burns, add the `.ken-burns-frame` class to its wrapper and confirm
the CSS animation is not being overridden by a conflicting `transform` property.

The Ken Burns CSS must be in `globals.css`:

```css
.ken-burns-frame {
  overflow: hidden;
  position: relative;
}
.ken-burns-frame > img,
.ken-burns-frame > .ken-burns-inner {
  width: 110%;
  height: 110%;
  object-fit: cover;
  transform-origin: center center;
  animation: kenBurnsDramatic 22s ease-in-out infinite alternate;
  will-change: transform;
}
@keyframes kenBurnsDramatic {
  0% { transform: scale(1.0) translate(0%, 0%); }
  100% { transform: scale(1.18) translate(-3%, -2%); }
}
.ken-burns-alt > img,
.ken-burns-alt > .ken-burns-inner {
  animation-name: kenBurnsDramaticAlt;
  animation-duration: 24s;
}
@keyframes kenBurnsDramaticAlt {
  0% { transform: scale(1.0) translate(2%, 1%); }
  100% { transform: scale(1.18) translate(-2%, -3%); }
}
@media (prefers-reduced-motion: reduce) {
  .ken-burns-frame > img, .ken-burns-alt > img { animation: none; }
}
```

Apply `.ken-burns-alt` to every second image so adjacent images pan in
opposite directions.

### G2 — Scroll-Triggered Reveals
Every content block that uses a scroll-triggered reveal (fade-up from `translateY(28px)`) must trigger correctly. If any block is either not animating at all or animating before it enters the viewport, adjust the IntersectionObserver threshold to `0.12` and add `rootMargin: '0px 0px -5% 0px'` to the observer options.

### G3 — Simulation Diagrams
Each of the six simulation diagrams must animate on scroll entry. If any
diagram is rendering as a static SVG with no animation, check that the
IntersectionObserver for that diagram is initialised correctly and that the
Framer Motion `animate` state is being toggled when the observer fires. The
six diagrams and their animation triggers are:
the Cineterns placement flow (nodes draw in left to right),
the five agentic workflows (satellite cards pulse gold on entry),
the Skills Levy financial flow (streams flow left to right continuously),
the career-progression ladder (tiers build upward with stagger),
the 12-month calendar (phases slide in from the left with stagger),
and the competitive positioning radar (polygons draw from centre outward).

### G4 — Page Transition
Confirm that route changes between strategy pages produce a soft cross-fade
(approximately 280ms) rather than a hard cut. If the transition is not working,
verify that the Framer Motion `AnimatePresence` wrapper is in the correct
position in the layout component and that the `key` prop is being set to the
current route pathname so Framer Motion recognises each navigation as a new
mount.

### G5 — Word-by-Word Heading Animation Timing
After the word-concatenation bug (Defect A1) is fixed, verify the word-by-word
animation feels fluid. The stagger between words must be 60ms. If the animation
feels too fast or too slow, the stagger value is the only number to adjust.
Do not change the duration of each individual word's entrance (which should be
approximately 400ms per word at ease-out).

---

## PART H — VISUAL STYLE REFERENCE (the benchmark for all injected images)

The five benchmark images uploaded alongside this mandate define the correct
visual language for the entire site. Every injected image from the generated
folders must sit within the same visual world as these five images. Before
injecting any image, visually compare it against the benchmarks using these
criteria.

The colour palette is near-black base (`#09090e`), deep crimson practical
lighting (`#8B1A1A` range), and warm gold highlights (`#C9A84C`). Images that
do not have this palette — images that look bright, cheerful, corporate,
or generically stock-photo — must not be injected. If a folder contains
such an image, skip it and use the next-best image from the folder.

The benchmark images are: the night film crew on location (hero image), the
composite multi-panel with Black professionals and cinema equipment, the
post-production lab with DaVinci Resolve stations, the cinematic wide shot
of the crew walking toward a lit set, and the infographic composite with the
icon-radial overlay. These five styles — working crew, composite panel,
professional environment, cinematic wide, and infographic overlay — are the
only styles that should appear on the site.

No injected image may contain holographic elements, floating interfaces,
sci-fi aesthetics, text embedded in the image itself, or any human figure
who is not a Black South African person aged 18 to 30 years.

---

## PART I — ADDITIONAL STRATEGIC FIXES

### I1 — Three Stakeholder Pathways on the Homepage
Immediately below the stat band on the homepage, add a three-path section.
Display three cards side by side (stacking to one column on mobile). The cards
are: "Production Companies" (subtext: "Access 3,000+ SETA-verified crew", CTA:
"Browse the Talent Portal" → Cineterns), "Funders & Partners" (subtext:
"B-BBEE compliance, Skills Levy, and impact returns", CTA: "Download the
Prospectus" → a PDF download route), and "Aspiring Trainees" (subtext:
"Start your professional film career", CTA: "Explore the Programme" →
`/foundation/organisation`). Apply a generated image from `home/` as the
background of each card with a dark overlay and Ken Burns. Do not remove any
existing text — add these cards as a new section after the existing content.

### I2 — Productions Strip
After the three-path section, add a horizontal strip on a dark background
that reads "Productions We Have Crewed" as a gold eyebrow label, followed by
the production titles in italic Cormorant Garamond scrolling slowly on a CSS
`animation: scrollLeft infinite 40s linear` loop: *The Woman King · Warrior ·
One Piece · Wheel of Time · Devil's Peak · Average Joe · Road Home*. No logos
required — the titles alone are the proof point. The strip should be
approximately 80px tall and full-width.

### I3 — Sticky CTA Bar on Chapter Pages
On every strategy chapter page (all 18 sub-pages under the four tabs), add a
sticky bar that appears after the user has scrolled 40% of the page height.
The bar is fixed to the bottom of the viewport on mobile and the bottom-right
corner on desktop. It contains two buttons: "Schedule a Briefing" (→ `/contact`)
and "Download the Prospectus" (→ PDF). The bar fades in with `opacity: 0` to
`opacity: 1` over 300ms. It is dismissable with a × icon that sets a
`sessionStorage` flag so it does not reappear during the same session.

### I4 — Fix the Navbar Brand Name
Change the navbar wordmark from "SAFA PROMAX" to "SA Film Academy". If the
logo image (`sa-film-academy-logo.webp`) is the correct SAFA logo, keep it.
If it is a placeholder logo showing "SAFA PROMAX" text, replace the text with
"SA Film Academy" rendered in Playfair Display at 20px, gold. The wordmark
should be visible in both the default transparent navbar state and the scrolled
solid-surface state.

### I5 — Stat Band Position on Homepage
Move the stat band (R60m+, 3,000+, 96%, 124) so it appears **before** the
ecosystem section, not after it. The sequence on the homepage should be:
hero → stat band → three stakeholder paths → productions strip → ecosystem →
strategy overview → pull quote → footer. This follows the pitch-deck principle
of leading with proof before explaining methodology.

---

## PART J — PWA: CONFIRM IT IS WORKING

Check the following three things and fix any that are failing.

First, open Chrome DevTools → Application → Manifest. Confirm the manifest
is loading correctly with all required fields (name, short_name, start_url,
display: standalone, theme_color, background_color, and at least two icons at
192×192 and 512×512). If the manifest is not loading, verify the `<link
rel="manifest" href="/manifest.json" />` tag is present in the root layout.

Second, open Chrome DevTools → Application → Service Workers. Confirm a service
worker is registered and active. If it shows "No service workers detected",
the `next-pwa` package or custom `sw.js` is not registering correctly. In
Next.js App Router, add the following to `next.config.mjs`:

```js
import withPWA from 'next-pwa';
const nextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})({
  // your existing next config
});
export default nextConfig;
```

Third, confirm the custom install prompt is implemented correctly. The
`beforeinstallprompt` event handler must capture the event, prevent the
default browser mini-infobar, and store the event for use when the user clicks
the Install button. The custom banner shows after the user visits two pages
and must be dismissable. Verify it is rendering by opening Chrome on a mobile
device (or using Chrome DevTools mobile emulation) and navigating to two pages.

---

## PART K — UPDATED QA CHECKLIST

Run through every item. The build is finished only when every item passes.

**Critical bugs:** The heading word-concatenation is fixed on every H1 and H2 across the site. The stat counters animate correctly on every page. No duplicate image or heading appears on any page. The navbar brand reads "SA Film Academy" on every page.

**Image injection:** Every placeholder has been replaced. Every page has at least one generated image from its corresponding `ai/` subfolder. The 70/30 visual ratio holds at page, sub-page, and section level. No paragraph runs more than 80 words without a visual interruption. The locked hero images have not been touched. The contact page hero is the darkest, most cinematic image from `ai/contact/`.

**Visual quality:** All injected images match the cinematic reddish palette of the five benchmark images. No injected image contains text, holograms, or non-Black-South-African figures. Ken Burns is applied to every image and is visibly dramatic (perceptible within 3 seconds). Every second image uses the `.ken-burns-alt` variant.

**Mega navbar:** The glass effect is corrected — all link titles and descriptors are legible. The panel background is at least 97% opaque. The mega panel opens on hover (desktop) and tap (mobile). On mobile, the nav collapses to a hamburger drawer.

**Mobile:** The site renders correctly at 375px, 430px, and 768px. All tap targets are at least 44px. No text touches the screen edge. Images maintain `object-fit: cover`. The stat band is 2×2 on mobile. The calendar is vertical on mobile. Simulation diagrams are horizontally scrollable on mobile.

**Animations:** Scroll-triggered reveals fire correctly on all pages. Page transitions are soft cross-fades. All six simulation diagrams animate on scroll entry. Word-by-word heading animation uses 60ms stagger and plays correctly after the concatenation fix.

**Strategic content:** The three stakeholder pathway cards are on the homepage. The productions strip is live. The sticky CTA bar appears on every chapter page after 40% scroll. The stat band appears before the ecosystem section on the homepage.

**PWA:** The manifest loads in Chrome DevTools. A service worker is registered and active. The custom install banner appears on mobile after two page visits and is dismissable.

**British English:** All copy on all pages is in British English. No American spellings remain. All AI tool system prompts include the British English, no-em-dash instruction.

**Footer:** All eight social channels are linked in the footer (LinkedIn, Instagram, Facebook, X, YouTube, TikTok, WhatsApp Business, Telegram).

**STATUS_LOG.md:** Updated to reflect all completed work from this session.

---

*End of mandate. This document supersedes all previous polish instructions.
The image generation mandate (MANUS_IMAGE_GENERATION_MANDATE_V2.md) remains
the reference for image style and QA standards — this document governs
injection, layout, and technical polish only.*
