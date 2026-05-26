# SAFA Promax Finishing Handover

Date: 2026-05-26

## Scope Completed

- Read and applied `protocol/safa-promax-codex-finishing-mandate.md`.
- Read and applied `protocol/MANUS_IMAGE_GENERATION_MANDATE_V2.md`.
- Extracted and reviewed the Gemini meeting notes PDF as supporting context.
- Audited the live Vercel site before edits.
- Preserved the locked visual direction and kept the red cinematic theme.
- Brightened the shared `PageHero` scrim treatment slightly without replacing locked hero images.
- Replaced missing local image references with existing approved/generated project assets.
- Replaced the text-only production credits rail with poster visuals.
- Added sitemap and robots coverage.
- Added secure admin/CMS routes and a board portal surface.

## Public Site Changes

- `Who are you here for?` is now `Who are we here for?`.
- `Aspiring Trainees` is now `Trainee and Aspiring Film Practitioners`.
- Public-facing `Cineterns` naming was changed to `SA Film Intense` / `SA Film Intense Talent Portal`.
- The technical URL `https://cineterns.vercel.app/` remains in place until a final SA Film Intense domain exists.
- `what we actually do` was changed to `what we do`.
- `five strangers` / `strangers` wording was changed to coherent brand family / connected subsidiary language.
- Broken Strategy Index links were replaced with canonical existing routes.
- Contact form now posts to `/api/contact`.
- Partnership prospectus CTA now points to `/download-prospectus`, with a gated PDF response from `/api/download-prospectus`.

## Production Poster Sources

Local poster files are stored in `public/images/safa-promax/productions/posters/`.

- The Woman King: Sony Pictures, `https://www.sonypictures.com/movies/thewomanking`
- Blood & Water: Netflix Media Center, `https://media.netflix.com/en/only-on-netflix/81044547`
- One Piece: Netflix Media Center, `https://media.netflix.com/en/only-on-netflix/80217863`
- Servant: Apple TV+ Press, `https://www.apple.com/tv-pr/originals/servant/`
- Devil's Peak: TheTVDB poster archive, `https://thetvdb.com/series/devils-peak`
- Warrior: TheTVDB poster archive, `https://thetvdb.com/series/warrior`
- The Newsroom: TheTVDB poster archive, `https://thetvdb.com/series/the-newsroom`
- The Wheel of Time: public key-art archive via Wheel of Time Fandom gallery.

The downloaded source manifest is in `public/images/safa-promax/productions/posters/poster-sources.json`.

## Admin/CMS Portal

Routes added:

- `/admin/login`
- `/admin/dashboard`
- `/admin/pages`
- `/admin/editor`
- `/admin/editor/[slug]`
- `/admin/media`
- `/admin/approvals`
- `/admin/users`
- `/admin/audit-log`
- `/admin/settings`
- `/board`
- `/board/login`
- `/board/admin`

API routes added:

- `/api/admin/login`
- `/api/admin/logout`
- `/api/admin/session`
- `/api/admin/content`
- `/api/admin/content/pages/[slug]`
- `/api/admin/content/pages/[slug]/publish`

Security model:

- Admin access uses a signed HTTP-only session cookie.
- The bootstrap admin password is verified from deployment environment variables.
- Additional CMS users are stored with per-user scrypt password hashes.
- Required environment variables:
  - `SAFA_ADMIN_EMAIL`
  - optional `SAFA_ADMIN_NAME`
  - `SAFA_ADMIN_PASSWORD`
- Optional stricter setup: generate a password hash with `npm run admin:hash -- "your strong password"` and set `SAFA_ADMIN_PASSWORD_HASH` instead of `SAFA_ADMIN_PASSWORD`.
- Role model supports `viewer`, `editor`, `approver`, `admin`, and `super-admin`.
- Admins and super-admins can add additional CMS users from `/admin/users`.
- Editors can save drafts. Approvers/admins/super-admins can publish.
- Mandate-locked hero images are protected in the editor.

CMS storage:

- Production source of truth: Supabase project `safa-cms`, table `public.safa_cms_store`, row `id = default`.
- The row stores the full CMS state as JSONB: pages, media, CMS users, approvals, audit log and site settings.
- Local seed/offline fallback: `data/cms/content-store.json`.
- When `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are configured, all admin reads and writes use Supabase.
- Account requests, approved admin users, draft saves, publishes and audit entries now persist in production beyond Vercel deployments.

## Verification

Commands run:

- `npm run lint`
- `npm run build`
- `npm run typecheck`

Route and API checks run locally against `http://localhost:3007`:

- Public routes checked: all primary pillar, chapter, tool, contact and prospectus routes.
- Internal link scan: 26 internal links checked, 0 failures.
- Missing local image scan: 165 source image references checked, 0 missing.
- Admin dashboard protection: redirects to `/admin/login`.
- Board portal protection: redirects to `/admin/login`.
- Admin content API without session: `401`.
- Contact form endpoint: `303` redirect to `/contact?sent=1`.
- Prospectus endpoint: `200`, `application/pdf`.
- Temporary QA admin session: login, content fetch, draft save and publish all returned `200`.
- Production Supabase persistence: live account-request write/read/cleanup cycle confirmed against `safa-cms`.

`npm run lint` exits successfully with warnings inherited from existing components, mostly unused imports, legacy `<img>` guidance, and React's set-state-in-effect warning in existing interactive widgets.

## Browser/Wix Note

The mandate requested inspection of the user's open Wix dashboard/editor. The local Chrome automation bridge was unavailable because the Codex Chrome extension/native host was not installed in the active browser profile. The admin UI therefore follows the mandate's Wix-style requirements directly: left dashboard, page list, edit-site entry, live preview, desktop/mobile preview toggle, editable page fields, media library, save draft, approval and publish flow.
