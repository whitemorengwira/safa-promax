# SAFA Promax Image Audit

Last updated: 26 May 2026, SAST

## Governing Rules

- Follow `protocol/MANUS_IMAGE_GENERATION_MANDATE_V2.md`.
- Generated human imagery must show Black South African / Black African film, production, training, post-production, technology, sustainability, and creative-sector contexts.
- Do not create generated images with embedded readable text.
- Maintain the red cinematic theme but lift brightness where readability is affected.
- Do not replace locked top-level images.

## Locked Visuals

Locked pages:

- Home
- Foundation
- Visibility
- Growth Engine
- Delivery
- Smart Tools

Locked assets currently used or mapped for those pages:

- `/images/main-hero-images/safa-hero-red-cinematic-black-trainees.png`
- `/images/main-hero-images/post-production-lab-black-creators.png`
- `/images/main-hero-images/road-home-training-red-visual.png`
- `/images/ai/v2/growth-hero-new.png`
- `/images/ai/v2/delivery/comm-hero.png`
- `/images/ai/v2/delivery/ai-workstation.png`

CMS behaviour required:

- Mark these images as `locked`.
- Prevent ordinary replacement.
- Permit brightness and contrast adjustment only.
- Log any attempted unlock or replacement.

## Broken/Missing Asset References

The following references must be replaced or remapped:

- `/images/ai/safa-film-training.png`
- `/images/ai/safa-skills-levy.png`
- `/images/ai/v2/delivery/budget-hero.png`
- `/images/ai/safa-delivery-results.png`
- `/images/ai/safa-budget-monthly.png`
- `/images/ai/safa-generative-ai.png`
- `/images/ai/safa-kpi-metrics.png`
- `/images/ai/safa-risk-review.png`
- `/images/ai/safa-foundation-structure.png`
- `/images/ai/safa-growth-revenue.png`
- `/images/ai/safa-levy-calculator.png`
- `/images/ai/safa-bbbee-scorecard.png`
- `/images/ai/safa-greenset-eco.png`
- `/images/ai/v2/visibility/ceo-podium.png`
- `/images/ai/safa-visibility-presence.png`

## Production Poster Sources to Acquire

Required poster titles:

- The Woman King
- Warrior
- One Piece
- The Wheel of Time
- Devil's Peak
- Blood & Water
- Servant
- The Newsroom

Preferred source order:

1. Official studio, broadcaster, streaming, or press pages.
2. Public promotional media centres.
3. Reputable poster databases where official source is unavailable.
4. Fallback generated non-poster cinematic proof card, only if official art cannot be reliably sourced.

Target local directory:

- `public/images/safa-promax/productions/posters/`

Current status: all eight required poster files are present locally and wired through `src/data/productions.ts`. Poster source metadata is recorded in `public/images/safa-promax/productions/posters/poster-sources.json`.

## Candidate Source Notes

- The Woman King: Sony Pictures official movie page includes a one-sheet key art source.
- One Piece: Netflix Media Center provides official key art.
- Blood & Water: Netflix Media Center provides official key art.
- Servant: Apple TV Press provides downloadable key art and official poster imagery.
- The Wheel of Time: public Wheel of Time poster archive records high-resolution Amazon Studios key art.
- Devil's Peak: TheTVDB and public reference pages list M-Net series poster art; official M-Net page still needs confirmation.
- Warrior and The Newsroom: official broadcaster source needs confirmation; TheTVDB provides production poster art if official source cannot be reached.

## Replacement Guidance

Broken images should be remapped to existing compliant assets first:

- Homepage definitions: use `home/clapperboard-macro.webp`, `foundation-org/compliance-desk.webp`, or other existing training/skills visuals.
- Foundation landing support: use `foundation-ecosystem/production-hub-interior.webp` or `foundation-org/set-aerial-dusk.webp`.
- Visibility landing support: use `visibility-content/social-media-wall.webp` or `visibility-calendar/production-office-night.webp`.
- Growth landing support: use `growth-positioning/market-analysis-desk.webp` or `growth-commercial/boardroom-negotiation.webp`.
- Delivery landing support: use `delivery-implementation/milestone-monitor.webp` or `v2/delivery/data-dashboard.png`.
- Smart Tools support: use `smart-tools/calculator-desk.webp`, `smart-tools/profile-cards-screen.webp`, and `smart-tools/document-drafting.webp`.

## Current Visual Risks

- Several public sections rely on missing images, which currently causes broken `next/image` responses.
- Some page copy still exposes legacy Cineterns naming inside image alt text.
- A few SVG diagrams contain baked-in legacy labels such as Cineterns; these are HTML/SVG text, not raster image text, but public labels still need renaming.
- Existing generated assets should be visually inspected for embedded text if time allows; no new generated raster assets should contain text.
