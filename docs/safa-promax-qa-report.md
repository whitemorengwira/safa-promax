# SAFA Promax QA Report

Last updated: 26 May 2026, SAST

## Verification Summary

- `npm run lint`: passed with non-blocking warnings.
- `npm run build`: passed. Next.js generated 68 app routes.
- `npm run typecheck`: passed after `next build` regenerated `.next/types`.
- `npm run test`: passed. The test script now runs the typecheck path.
- Local public route scan: 28 public/protected route checks completed.
- Local internal link scan: 28 internal links checked, 0 broken links found.
- Local source image scan: 0 missing `/images/...` assets found in active source/data files.
- Production deployment to `https://safa-promax.vercel.app/`: completed and rechecked.

## Public Site Checks

- Homepage uses `Who are we here for?`.
- Homepage uses `Trainee and Aspiring Film Practitioners`.
- Public talent-portal label uses `SA Film Intense` / `SA Film Intense Talent Portal`.
- Technical portal URL remains `https://cineterns.vercel.app/` until the final SA Film Intense domain is supplied.
- Poster rail renders local poster assets for The Woman King, Warrior, One Piece, The Wheel of Time, Devil's Peak, Blood & Water, Servant and The Newsroom.
- Poster text has been moved outside the poster artwork area so official artwork remains inspectable.
- Homepage stat band now uses R60m+, 3,000+, 96% and 124.
- No live `placeholder-fill`, `WIX`, `Who are you here for?`, `Access Cineterns`, `Aspiring Trainees`, `five strangers`, `Sinence`, or `what we actually` strings were found in active `src`, `data` and public text scans.

## Admin/CMS Checks

- `/admin` redirects unauthenticated users to `/admin/login`.
- `/admin/dashboard` redirects unauthenticated users.
- Production super-admin login returned `200`.
- Production `/admin/dashboard` returned `200` after login.
- Production `/admin/users` returned `200` after login and shows the add-admin form.
- Production `/admin/settings` returned `200` and reports `supabase` CMS mode.
- Production account-request creation persisted to Supabase and was then cleaned from the live CMS store.
- Authenticated local QA session loads `/admin/dashboard` and `/admin/editor/home`.
- Editor includes SAFA-branded top bar, page selector, desktop/mobile toggles, tool rail, preview canvas, Save Draft and Publish actions.
- Editor does not display Wix branding.
- Locked-image text appears for locked hero assets.
- Footer no longer includes the old admin-entry button; CMS access now lives on the presentation access screen as a secondary internal path.
- Users page includes an add-admin form for approved CMS users.
- Admin draft save API returned `200`.
- Admin publish API returned `200`.
- Contact form endpoint accepts browser form submissions and JSON payloads.
- Prospectus endpoint returned `200` with `application/pdf`.

## Visual QA

- Chrome bridge was repaired and used successfully.
- The user's live Wix editor was inspected read-only.
- Live homepage hero, stakeholder section and production poster rail were visually checked in Chrome.
- Local editor shell was checked through authenticated HTML and server responses.

## Known Warnings

`npm run lint` still reports warnings inherited from existing components:

- unused imports in a few chapter pages;
- existing `<img>` usage in visual/motion components;
- React set-state-in-effect warnings in interactive widgets;
- a missing `onClose` dependency warning in the mobile menu.

These are not build blockers, but they should be cleaned in a future technical polish pass.

## Deployment Note

Vercel production has been redeployed from this repository. Live checks confirmed the corrected homepage copy, SA Film Intense labelling, updated statistics, poster rail, route responses, contact endpoint and prospectus endpoint.

Vercel production now uses the first-release admin login environment variables: `SAFA_ADMIN_EMAIL`, `SAFA_ADMIN_NAME` and `SAFA_ADMIN_PASSWORD`. Live super-admin login has been verified. `SAFA_ADMIN_PASSWORD_HASH` remains supported as an optional stricter alternative.

Production CMS persistence is now Supabase-backed through the `safa-cms` project. The active table is `public.safa_cms_store`; the live row stores pages, media, CMS users, approvals, account requests and audit entries as JSONB.
