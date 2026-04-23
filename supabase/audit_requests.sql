create table if not exists public.audit_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text,
  company_url text not null,
  monthly_revenue text,
  email text not null,
  platform text
);

alter table public.audit_requests enable row level security;

drop policy if exists "Allow public audit request inserts" on public.audit_requests;

create policy "Allow public audit request inserts"
  on public.audit_requests
  for insert
  to anon
  with check (
    email is not null
    and company_url is not null
  );
