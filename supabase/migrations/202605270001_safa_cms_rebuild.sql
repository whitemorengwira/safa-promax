create extension if not exists "pgcrypto";

create table if not exists public.cms_pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  draft_content jsonb not null default '{}'::jsonb,
  published_content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

create table if not exists public.cms_versions (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.cms_pages(id) on delete cascade,
  content jsonb not null,
  published_at timestamptz not null default now(),
  published_by uuid references auth.users(id),
  label text not null
);

create table if not exists public.cms_navigation (
  id text primary key,
  label text not null,
  href text not null,
  parent_id text references public.cms_navigation(id) on delete set null,
  sort_order integer not null default 0,
  is_visible boolean not null default true
);

create table if not exists public.cms_blog_posts (
  id text primary key,
  title text not null,
  slug text not null unique,
  excerpt text not null default '',
  body text not null default '',
  cover_image_url text not null default '',
  author text not null default '',
  tags text[] not null default '{}'::text[],
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.cms_media (
  id text primary key,
  filename text not null,
  url text not null,
  mime_type text not null,
  size_bytes bigint not null default 0,
  uploaded_by uuid references auth.users(id),
  uploaded_at timestamptz not null default now()
);

create table if not exists public.cms_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.cms_pages enable row level security;
alter table public.cms_versions enable row level security;
alter table public.cms_navigation enable row level security;
alter table public.cms_blog_posts enable row level security;
alter table public.cms_media enable row level security;
alter table public.cms_settings enable row level security;

create or replace function public.cms_auth_role()
returns text
language sql
stable
as $$
  select coalesce(
    nullif(auth.jwt() -> 'app_metadata' ->> 'role', ''),
    nullif(auth.jwt() -> 'user_metadata' ->> 'role', ''),
    ''
  );
$$;

create or replace function public.cms_can_edit()
returns boolean
language sql
stable
as $$
  select public.cms_auth_role() in ('super_admin', 'editor');
$$;

drop policy if exists "cms_pages_editor_read" on public.cms_pages;
drop policy if exists "cms_pages_editor_write" on public.cms_pages;
drop policy if exists "cms_versions_editor_read" on public.cms_versions;
drop policy if exists "cms_versions_editor_write" on public.cms_versions;
drop policy if exists "cms_navigation_editor_read" on public.cms_navigation;
drop policy if exists "cms_navigation_editor_write" on public.cms_navigation;
drop policy if exists "cms_blog_posts_editor_read" on public.cms_blog_posts;
drop policy if exists "cms_blog_posts_editor_write" on public.cms_blog_posts;
drop policy if exists "cms_media_editor_read" on public.cms_media;
drop policy if exists "cms_media_editor_write" on public.cms_media;
drop policy if exists "cms_settings_editor_read" on public.cms_settings;
drop policy if exists "cms_settings_editor_write" on public.cms_settings;

create policy "cms_pages_editor_read" on public.cms_pages
  for select to authenticated using (public.cms_can_edit());
create policy "cms_pages_editor_write" on public.cms_pages
  for all to authenticated using (public.cms_can_edit()) with check (public.cms_can_edit());

create policy "cms_versions_editor_read" on public.cms_versions
  for select to authenticated using (public.cms_can_edit());
create policy "cms_versions_editor_write" on public.cms_versions
  for all to authenticated using (public.cms_can_edit()) with check (public.cms_can_edit());

create policy "cms_navigation_editor_read" on public.cms_navigation
  for select to authenticated using (public.cms_can_edit());
create policy "cms_navigation_editor_write" on public.cms_navigation
  for all to authenticated using (public.cms_can_edit()) with check (public.cms_can_edit());

create policy "cms_blog_posts_editor_read" on public.cms_blog_posts
  for select to authenticated using (public.cms_can_edit());
create policy "cms_blog_posts_editor_write" on public.cms_blog_posts
  for all to authenticated using (public.cms_can_edit()) with check (public.cms_can_edit());

create policy "cms_media_editor_read" on public.cms_media
  for select to authenticated using (public.cms_can_edit());
create policy "cms_media_editor_write" on public.cms_media
  for all to authenticated using (public.cms_can_edit()) with check (public.cms_can_edit());

create policy "cms_settings_editor_read" on public.cms_settings
  for select to authenticated using (public.cms_can_edit());
create policy "cms_settings_editor_write" on public.cms_settings
  for all to authenticated using (public.cms_can_edit()) with check (public.cms_can_edit());

create index if not exists cms_pages_slug_idx on public.cms_pages(slug);
create index if not exists cms_versions_page_id_published_at_idx on public.cms_versions(page_id, published_at desc);
create index if not exists cms_navigation_parent_sort_idx on public.cms_navigation(parent_id, sort_order);
create index if not exists cms_blog_posts_slug_idx on public.cms_blog_posts(slug);
