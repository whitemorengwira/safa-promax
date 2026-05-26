# SAFA Promax Final Handover

Date: 26 May 2026

## URLs

- Public site: `https://safa-promax.vercel.app/`
- Local QA site: `http://localhost:3007/`
- Admin portal: `/admin`
- Admin login: `/admin/login`
- Editor: `/admin/editor`
- Board view: `/board`

## Admin Setup

Production currently uses these Vercel environment variables:

- `SAFA_ADMIN_EMAIL`
- `SAFA_ADMIN_NAME`
- `SAFA_ADMIN_PASSWORD`

Optional stricter setup can use a scrypt password hash instead:

```bash
npm run admin:hash -- "your strong password"
```

Set that output as `SAFA_ADMIN_PASSWORD_HASH` and leave `SAFA_ADMIN_PASSWORD` blank if the raw password should not be held in the deployment environment. The CMS uses a signed HTTP-only session cookie, role checks, protected server routes and per-user password hashes for additional CMS users.

## Editing Workflow

1. Sign in at `/admin/login`.
2. Open `/admin/dashboard`.
3. Select `Edit Site`.
4. Choose a page from the page selector.
5. Edit title, hero, summary, SEO text and image path where permitted.
6. Use `Save Draft`.
7. An approver, admin or super-admin uses `Publish`.

Locked mandate-approved images cannot be replaced by ordinary editors. They are marked as locked and must remain subject to brightness/contrast-only treatment unless a super-admin explicitly approves otherwise.

## CMS Storage

Production CMS storage is Supabase-backed:

- Project: `safa-cms`
- Table: `public.safa_cms_store`
- Store row: `id = default`
- Data shape: single JSONB content store containing pages, media, CMS users, approvals, audit log and site settings.

The local seed and offline fallback remains:

- `data/cms/content-store.json`

When `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are present, admin reads and writes go to Supabase. Vercel production is configured this way, so admin users, account requests, draft saves, publish approvals and audit entries now persist beyond deployments.

## Poster Assets

Production posters are stored locally at:

- `public/images/safa-promax/productions/posters/`

Metadata lives in:

- `src/data/productions.ts`
- `public/images/safa-promax/productions/posters/poster-sources.json`

## Remaining Confirmations

- Final SA Film Intense production domain.
- Verified SAFA WhatsApp Business number.
- Brand manual and final partnerships list from Lindi Ndebele-Koka.
- Approved Empower Youth, Fame Week and team photos.
- Final budget figures and board-safe subscription wording.
- Long-term CMS database and IT/security handover with SAFA's IT company.

## Before Board Presentation

- Production deployment is complete at `https://safa-promax.vercel.app/`.
- Production admin environment variables are configured in Vercel.
- Super-admin login, dashboard access and Users page access have been confirmed.
- Supabase-backed CMS persistence has been confirmed with a live account-request write/read/cleanup cycle.
- Verify the live homepage no longer shows stale `Who are you here for?` or text-only production credits.
- Confirm `/admin/login`, `/download-prospectus`, `/api/contact`, `/sitemap.xml` and `/robots.txt` on the production URL.
