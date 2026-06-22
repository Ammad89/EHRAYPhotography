create extension if not exists pgcrypto;

create table if not exists public.cms_pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  nav_label text not null,
  page_type text not null default 'custom',
  is_system boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.cms_page_versions (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.cms_pages(id) on delete cascade,
  version_number integer not null,
  status text not null check (status in ('draft', 'published', 'archived')),
  content jsonb not null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  published_at timestamptz,
  publish_note text,
  unique (page_id, version_number)
);

create table if not exists public.cms_page_live_versions (
  page_id uuid primary key references public.cms_pages(id) on delete cascade,
  version_id uuid not null references public.cms_page_versions(id) on delete restrict,
  published_by uuid references auth.users(id) on delete set null,
  published_at timestamptz not null default now()
);

create table if not exists public.cms_media (
  id uuid primary key default gen_random_uuid(),
  bucket text not null default 'ehray-media',
  path text not null,
  public_url text not null,
  alt text,
  original_name text,
  mime_type text,
  size_bytes bigint,
  uploaded_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.cms_pages enable row level security;
alter table public.cms_page_versions enable row level security;
alter table public.cms_page_live_versions enable row level security;
alter table public.cms_media enable row level security;

create or replace function public.is_cms_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;

grant execute on function public.is_cms_admin() to anon, authenticated;

drop policy if exists "Anyone can read CMS pages" on public.cms_pages;
create policy "Anyone can read CMS pages"
on public.cms_pages
for select
to anon, authenticated
using (true);

drop policy if exists "CMS admins can manage CMS pages" on public.cms_pages;
create policy "CMS admins can manage CMS pages"
on public.cms_pages
for all
to authenticated
using (public.is_cms_admin())
with check (public.is_cms_admin());

drop policy if exists "Anyone can read published versions" on public.cms_page_versions;
create policy "Anyone can read published versions"
on public.cms_page_versions
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.cms_page_live_versions live
    where live.version_id = cms_page_versions.id
  )
);

drop policy if exists "CMS admins can manage versions" on public.cms_page_versions;
create policy "CMS admins can manage versions"
on public.cms_page_versions
for all
to authenticated
using (public.is_cms_admin())
with check (public.is_cms_admin());

drop policy if exists "Anyone can read live version links" on public.cms_page_live_versions;
create policy "Anyone can read live version links"
on public.cms_page_live_versions
for select
to anon, authenticated
using (true);

drop policy if exists "CMS admins can manage live version links" on public.cms_page_live_versions;
create policy "CMS admins can manage live version links"
on public.cms_page_live_versions
for all
to authenticated
using (public.is_cms_admin())
with check (public.is_cms_admin());

drop policy if exists "Anyone can read CMS media" on public.cms_media;
create policy "Anyone can read CMS media"
on public.cms_media
for select
to anon, authenticated
using (true);

drop policy if exists "CMS admins can manage CMS media" on public.cms_media;
create policy "CMS admins can manage CMS media"
on public.cms_media
for all
to authenticated
using (public.is_cms_admin())
with check (public.is_cms_admin());
