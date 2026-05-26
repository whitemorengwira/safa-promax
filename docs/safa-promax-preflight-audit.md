# SAFA Promax Preflight Audit

Last updated: 26 May 2026, SAST  
Scope: public site, live route crawl, local source scan, meeting notes, image mandate, and CMS readiness.

## 2026-05-26 Final Codex Update

The Chrome native bridge is now working and the open Wix editor was inspected read-only. The relevant patterns carried into the SAFA CMS are:

- fixed top command bar with save, preview and publish actions;
- page selector with nested page list and a separate page management entry;
- desktop/mobile preview toggle;
- left vertical tool rail for add, section, page, theme, media and settings tools;
- central canvas/editor surface with guide lines;
- clear separation between editing controls and public preview.

The local SAFA implementation now includes `/admin`, `/admin/login`, `/admin/dashboard`, `/admin/pages`, `/admin/editor`, `/admin/editor/[slug]`, `/admin/media`, `/admin/approvals`, `/admin/settings`, `/admin/users`, `/admin/audit-log`, `/board`, `/board/login` and `/board/admin`.

Live Vercel update: `https://safa-promax.vercel.app/` has now been redeployed from this repository. The production site serves the finished copy, poster rail, footer admin portal link, admin routes and CMS/editor work. Production super-admin login and Users page access have been verified.

## 1. Current Route Map

Live public routes audited:

- `/`
- `/foundation`
- `/foundation/organisation`
- `/foundation/ecosystem`
- `/foundation/infrastructure`
- `/foundation/brand`
- `/visibility`
- `/visibility/calendar`
- `/visibility/seo`
- `/visibility/leadership`
- `/visibility/content`
- `/growth`
- `/growth/agentic-ai`
- `/growth/commercial`
- `/growth/partnerships`
- `/growth/positioning`
- `/delivery`
- `/delivery/community`
- `/delivery/curriculum`
- `/delivery/kpis`
- `/delivery/budget`
- `/delivery/implementation`
- `/delivery/risk`
- `/smart-tools`
- `/contact`
- `/strategy-index`

Existing legacy redirects in `next.config.ts` map `/strategy/*` to canonical pillar routes.

Broken internal links found on the live site:

- `/foundation/stakeholders`
- `/growth/partners`
- `/delivery/technical`
- `/delivery/operational`
- `/delivery/impact`
- `/delivery/governance`

## 2. Current Component Map

Layout and navigation:

- `src/app/layout.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/MegaNavbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/PageHero.tsx`

Visual and motion:

- `src/components/visuals/ImagePlaceholder.tsx`
- `src/components/visuals/KenBurns.tsx`
- `src/components/visuals/SvgStage.tsx`
- `src/components/motion/Reveal.tsx`
- `src/components/motion/WordReveal.tsx`
- `src/components/motion/Counter.tsx`

Sections and diagrams:

- `src/components/sections/StakeholderPaths.tsx`
- `src/components/sections/ProductionCredits.tsx`
- `src/components/sections/StatBand.tsx`
- `src/components/sections/SectionShell.tsx`
- `src/components/diagrams/*`
- `src/components/tools/*`

## 3. Current Content Source Map

Primary hardcoded content lives in:

- `src/app/**/page.tsx`
- `src/components/sections/*.tsx`
- `src/components/layout/*.tsx`
- `src/lib/content/pageData.ts`
- `src/data/nav.ts`

Large legacy extracted strategy text exists in `src/lib/content/sections.ts`, but current canonical pages mostly use bespoke page components.

The admin CMS now uses Supabase for production persistence. The configured project is `safa-cms`; the content store is held in `public.safa_cms_store` as a single JSONB row with `id = default`. The local JSON file at `data/cms/content-store.json` remains the seed/offline fallback.

## 4. Current Image Asset Map

Main approved top-level images:

- `/images/main-hero-images/safa-hero-red-cinematic-black-trainees.png`
- `/images/main-hero-images/post-production-lab-black-creators.png`
- `/images/main-hero-images/road-home-training-red-visual.png`
- `/images/ai/v2/growth-hero-new.png`
- `/images/ai/v2/delivery/comm-hero.png`
- `/images/ai/v2/delivery/ai-workstation.png`

Generated visual assets live under:

- `public/images/ai/`
- `public/images/ai/v2/`
- `public/images/gen/`
- `public/images/main-hero-images/`

Poster assets are not yet present. Required destination:

- `public/images/safa-promax/productions/posters/`

## 5. Broken Image and Link Report

Broken image references found in local source and confirmed live as direct 404 / Next image 400:

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

Outbound link status:

- `https://cineterns.vercel.app/` loads.
- `https://safilmacademy.org/` loads.
- `https://www.greenset.org/` loads.
- Social links return either 200 or expected platform redirects.
- `wa.me/27123456789` is a placeholder number and needs the verified SAFA WhatsApp Business number.
- `https://empoweryouth.vercel.app/` loads.

## 6. Locked Images

The mandate locks the approved visuals on:

- Home
- Foundation
- Visibility
- Growth Engine
- Delivery
- Smart Tools

Rules to implement:

- Do not replace.
- Do not regenerate.
- Do not change subject.
- Allow brightness/contrast adjustments only.
- Mark as locked in CMS.

## 7. Images Safe to Replace

Safe to replace:

- All broken image references listed above.
- Subpage supporting images that are missing, weak, too dark, placeholder-like, or duplicated.
- Poster/proof section visuals.
- Admin/CMS UI screenshots or generated interface-style graphics, provided they contain no baked-in readable text.

Do not replace approved top-level page hero images.

## 8. British English Copy Items Requiring Correction

Known public copy issues:

- `Who are you here for?` must become `Who are we here for?`.
- `Aspiring Trainees` must become `Trainee and Aspiring Film Practitioners`.
- `Who we are, what we actually do...` must remove `actually`.
- Public `Cineterns` labels must become `SA Film Intense` or `SA Film Intense Talent Portal`.
- `cost center` in `src/lib/content/pageData.ts` must become `cost centre`.
- Some comments and hidden source text still use `Organization`; visible public copy must use `Organisation`.

## 9. Legacy Naming Occurrences

Public-facing `Cineterns` remains throughout:

- Homepage hero CTA and portal section.
- Mega navigation descriptions.
- Footer trainee services.
- Ecosystem page and architecture diagram.
- Infrastructure, KPI, budget, implementation, risk, contact, and Smart Tools copy.
- `src/lib/content/pageData.ts`.

No current `Sinence` string was found in active `src`, but the meeting transcript confirms Sinence is the old name.

## 10. “Strangers” Terminology Occurrences

Visible occurrences found:

- `src/components/layout/MegaNavbar.tsx`
- `src/app/foundation/brand/page.tsx`

Both must become `subsidiaries`, `coherent family`, `unified brand family`, or `branded house`.

## 11. Male-Dominated Visuals to Rebalance

Highest priority:

- Homepage stakeholder cards, especially `Production Companies` and `Funders & Partners`.
- Ecosystem entity cards where the visual mix can skew male.
- Leadership and partnerships sections should show women in leadership and technical contexts.

The image mandate requires professional Black South African film-sector representation, balanced across women and men, with equipment and working environments included.

## 12. Text-Heavy Sections Needing Visual Relief

Priority sections:

- Homepage definitions.
- Organisation: Work Skills Facilitator, Two-Tier Pathway, Administrative Infrastructure, Shifting the Perception.
- Ecosystem architecture explanation.
- Infrastructure technical stack.
- SEO and AI SEO.
- Leadership calendar and content cadence.
- Budget framework.
- Implementation and risk register.

## 13. Current CMS/Admin/Auth Status

The repository now includes a first-release file-backed CMS/admin portal:

- signed HTTP-only admin session cookie;
- bootstrap password verification through environment variables, with optional scrypt password-hash support;
- role model: viewer, editor, approver, admin and super-admin;
- admin and super-admin user creation from the Users page;
- protected admin routes;
- page manager, visual editor, media library, approvals, users, settings and audit-log routes;
- draft save and publish API routes;
- locked-image enforcement for approved mandate visuals.

The CMS uses Supabase in production when `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are configured. Vercel production is configured against the `safa-cms` Supabase project, so users, account requests, draft saves, approvals, publishes and audit events persist outside the deployment filesystem. `data/cms/content-store.json` remains the local seed/offline fallback.

## 14. Recommended Implementation Plan

1. Fix public copy, terminology, and broken routes.
2. Replace all broken image references with existing compliant assets, generated assets, or official posters.
3. Add production poster metadata and a premium poster rail.
4. Add image lock metadata and audit information for CMS.
5. Build Supabase-backed CMS storage for production, with JSON seed fallback for local/offline development.
6. Add password-protected admin routes with secure signed sessions and role checks.
7. Add dashboard, page manager, editor, media, approvals, analytics, settings, users, audit log, and help routes.
8. Add board access route with password protection and approved viewer model.
9. Run build, lint, route/link/image scan, and admin flow tests.
10. Create QA report and final handover.

## 15. Risks, Unresolved Facts, and Assumptions

- The brand manual and partnerships list have not been supplied in the repo.
- Empower Youth and Fame Week photos have not been supplied or approved in the repo.
- The verified WhatsApp Business number is not present.
- Budget figures require confirmation. Public pages should avoid unapproved figures and use `TBC — post audit` where necessary.
- Official posters are copyright promotional assets. They will be stored locally only for this strategic presentation, with source metadata recorded.
- Wix editor inspection is complete. The SAFA editor follows the workflow pattern without copying Wix branding or assets.
