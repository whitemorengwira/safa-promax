create table if not exists public.cms_activity_log (
  id text primary key,
  action text not null,
  actor text not null,
  actor_role text,
  route text,
  summary text not null,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.cms_edit_journal (
  id text primary key,
  route text not null,
  actor text not null,
  action text not null,
  before_overrides jsonb not null default '[]'::jsonb,
  after_overrides jsonb not null default '[]'::jsonb,
  summary text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.cms_admin_sessions (
  id text primary key,
  email text not null,
  name text not null,
  role text not null,
  status text not null default 'active',
  route text,
  ip_address text,
  user_agent text,
  issued_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  ended_at timestamptz
);

create table if not exists public.site_access_sessions (
  id text primary key,
  email text not null,
  name text not null,
  role text not null,
  status text not null default 'active',
  route text,
  ip_address text,
  user_agent text,
  issued_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  ended_at timestamptz
);

alter table public.cms_activity_log enable row level security;
alter table public.cms_edit_journal enable row level security;
alter table public.cms_admin_sessions enable row level security;
alter table public.site_access_sessions enable row level security;

create index if not exists cms_activity_log_created_idx on public.cms_activity_log(created_at desc);
create index if not exists cms_edit_journal_created_idx on public.cms_edit_journal(created_at desc);
create index if not exists cms_admin_sessions_last_seen_idx on public.cms_admin_sessions(last_seen_at desc);
create index if not exists site_access_sessions_last_seen_idx on public.site_access_sessions(last_seen_at desc);
