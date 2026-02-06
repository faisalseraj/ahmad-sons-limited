-- Run this in Supabase Dashboard → SQL Editor to create the contact form table.

-- Table: contact_submissions
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz default now() not null
);

-- Optional: index for listing by date
create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

-- RLS: allow anonymous inserts (form submissions), no public read
alter table public.contact_submissions enable row level security;

-- Anyone can insert a submission (contact form)
create policy "Allow anonymous insert"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

-- Only authenticated users (e.g. you) can read – adjust role if needed
create policy "Allow authenticated read"
  on public.contact_submissions
  for select
  to authenticated
  using (true);

-- Optional: service role can do everything (backend/admin)
-- create policy "Service role full access"
--   on public.contact_submissions for all to service_role using (true) with check (true);
