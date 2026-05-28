create table if not exists public.cms_site_overrides (
  id uuid primary key default gen_random_uuid(),
  route text not null unique,
  draft_overrides jsonb not null default '[]'::jsonb,
  published_overrides jsonb not null default '[]'::jsonb,
  versions jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by text
);

alter table public.cms_site_overrides enable row level security;

drop policy if exists "cms_site_overrides_admin_read" on public.cms_site_overrides;
drop policy if exists "cms_site_overrides_admin_write" on public.cms_site_overrides;

create policy "cms_site_overrides_admin_read"
on public.cms_site_overrides
for select
to authenticated
using (
  coalesce(auth.jwt() -> 'app_metadata' ->> 'role', auth.jwt() -> 'user_metadata' ->> 'role') in ('super_admin', 'editor')
);

create policy "cms_site_overrides_admin_write"
on public.cms_site_overrides
for all
to authenticated
using (
  coalesce(auth.jwt() -> 'app_metadata' ->> 'role', auth.jwt() -> 'user_metadata' ->> 'role') in ('super_admin', 'editor')
)
with check (
  coalesce(auth.jwt() -> 'app_metadata' ->> 'role', auth.jwt() -> 'user_metadata' ->> 'role') in ('super_admin', 'editor')
);
