-- Migration: portfolios, inquiries, storage buckets, RLS
-- Run this in Supabase SQL Editor or via supabase db push

-- Portfolios
create table if not exists portfolios (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text,
  thumbnail_url text not null,
  images text[] default '{}',
  preview_description text not null,
  detail_description text not null,
  client_name text,
  work_period text,
  tech_stack text[] default '{}',
  external_link text,
  is_published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Inquiries
create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact text not null,
  message text not null,
  attachment_urls text[] default '{}',
  status text default 'new' check (status in ('new', 'read', 'done')),
  created_at timestamptz default now()
);

-- updated_at trigger
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists portfolios_updated_at on portfolios;
create trigger portfolios_updated_at
  before update on portfolios
  for each row execute function update_updated_at_column();

-- RLS
alter table portfolios enable row level security;
alter table inquiries enable row level security;

-- Portfolios: anonymous read for published only
drop policy if exists "Public can read published portfolios" on portfolios;
create policy "Public can read published portfolios"
  on portfolios for select
  using (is_published = true);

-- Inquiries: anonymous insert only
drop policy if exists "Anyone can insert inquiries" on inquiries;
create policy "Anyone can insert inquiries"
  on inquiries for insert
  with check (true);

-- Note: SELECT/UPDATE/DELETE on both tables go through service role
-- (bypasses RLS). Admin dashboard uses SUPABASE_SERVICE_ROLE_KEY via server actions.

-- Storage buckets
insert into storage.buckets (id, name, public)
values ('portfolio-images', 'portfolio-images', true)
on conflict (id) do update set public = true;

insert into storage.buckets (id, name, public)
values ('inquiry-attachments', 'inquiry-attachments', true)
on conflict (id) do update set public = true;

-- Storage policies: public read
drop policy if exists "Public read portfolio images" on storage.objects;
create policy "Public read portfolio images"
  on storage.objects for select
  using (bucket_id = 'portfolio-images');

drop policy if exists "Public read inquiry attachments" on storage.objects;
create policy "Public read inquiry attachments"
  on storage.objects for select
  using (bucket_id = 'inquiry-attachments');

-- Anonymous can upload inquiry attachments (contact form)
drop policy if exists "Anyone can upload inquiry attachments" on storage.objects;
create policy "Anyone can upload inquiry attachments"
  on storage.objects for insert
  with check (bucket_id = 'inquiry-attachments');

-- Portfolio image writes: service role only (no anon insert policy)
-- Inquiry attachment deletes / portfolio uploads handled via service role
