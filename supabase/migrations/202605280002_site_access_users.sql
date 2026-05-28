create table if not exists public.site_access_users (
  id text primary key,
  email text not null unique,
  name text not null,
  organisation text not null default '',
  role text not null default 'viewer' check (role in ('board_member', 'executive', 'partner_funder', 'production_company', 'viewer')),
  status text not null default 'pending' check (status in ('pending', 'active', 'suspended', 'revoked')),
  password_hash text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  approved_at timestamptz,
  revoked_at timestamptz,
  approved_by text
);

create table if not exists public.site_access_audit_log (
  id text primary key,
  action text not null,
  actor text not null,
  summary text not null,
  created_at timestamptz not null default now()
);

alter table public.site_access_users enable row level security;
alter table public.site_access_audit_log enable row level security;

create index if not exists site_access_users_email_idx on public.site_access_users(email);
create index if not exists site_access_users_status_idx on public.site_access_users(status);
create index if not exists site_access_audit_created_idx on public.site_access_audit_log(created_at desc);
