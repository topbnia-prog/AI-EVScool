create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'parent' check (role in ('parent', 'operator', 'admin')),
  display_name text not null,
  status text not null default 'active' check (status in ('active', 'invited', 'paused', 'blocked')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.parent_accounts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  email text not null,
  display_name text not null,
  consent_status text not null default 'missing' check (consent_status in ('accepted', 'missing', 'expired')),
  billing_status text not null default 'free' check (billing_status in ('free', 'trial', 'paid', 'past_due')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.operator_profiles (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.parent_accounts(id) on delete cascade,
  auth_user_id uuid unique references auth.users(id) on delete set null,
  display_name text not null,
  age smallint check (age between 10 and 16),
  age_branch text not null default 'junior' check (age_branch in ('junior', 'senior')),
  language text not null default 'ru' check (language in ('ru', 'he', 'en')),
  rank text not null default 'Operator I',
  streak_current integer not null default 0 check (streak_current >= 0),
  streak_best integer not null default 0 check (streak_best >= 0),
  daily_mission_limit integer not null default 2 check (daily_mission_limit between 1 and 2),
  interests text[] not null default '{}',
  learning_goal text,
  mindscan jsonb not null default '{}'::jsonb,
  admin_profile jsonb not null default '{}'::jsonb,
  active_course_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.operator_metrics (
  id uuid primary key default gen_random_uuid(),
  operator_id uuid not null references public.operator_profiles(id) on delete cascade,
  metric_id text not null,
  label text not null,
  value smallint not null default 1 check (value between 1 and 5),
  previous_value smallint not null default 1 check (previous_value between 1 and 5),
  updated_at timestamptz not null default now(),
  unique (operator_id, metric_id)
);

create table if not exists public.courses (
  id text primary key,
  slug text not null unique,
  title text not null,
  subtitle text not null default '',
  status text not null default 'draft' check (status in ('active', 'locked', 'draft')),
  duration_days integer not null default 30 check (duration_days > 0),
  required_course_id text references public.courses(id),
  promise text not null default '',
  child_pitch text not null default '',
  parent_pitch text not null default '',
  source_folder text not null default '',
  metrics text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.course_lessons (
  id uuid primary key default gen_random_uuid(),
  course_id text not null references public.courses(id) on delete cascade,
  lesson_number integer not null check (lesson_number > 0),
  title text not null,
  concept text not null default '',
  metric_focus text not null default '',
  estimated_minutes text not null default '10-15 min',
  steps jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (course_id, lesson_number)
);

create table if not exists public.course_enrollments (
  id uuid primary key default gen_random_uuid(),
  operator_id uuid not null references public.operator_profiles(id) on delete cascade,
  course_id text not null references public.courses(id) on delete cascade,
  status text not null default 'not_started' check (status in ('not_started', 'active', 'completed', 'locked')),
  completed_lessons integer not null default 0 check (completed_lessons >= 0),
  active_lesson_number integer not null default 1 check (active_lesson_number > 0),
  streak_days integer not null default 0 check (streak_days >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (operator_id, course_id)
);

create table if not exists public.mission_progress (
  id uuid primary key default gen_random_uuid(),
  operator_id uuid not null references public.operator_profiles(id) on delete cascade,
  course_id text not null references public.courses(id) on delete cascade,
  lesson_number integer not null check (lesson_number > 0),
  step_id text not null,
  status text not null default 'active' check (status in ('active', 'completed', 'locked')),
  reflection_answer text,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (operator_id, course_id, lesson_number, step_id)
);

create table if not exists public.mentor_messages (
  id uuid primary key default gen_random_uuid(),
  operator_id uuid not null references public.operator_profiles(id) on delete cascade,
  course_id text references public.courses(id) on delete set null,
  lesson_number integer,
  role text not null check (role in ('mentor', 'operator', 'system')),
  intent text,
  content text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.safety_events (
  id uuid primary key default gen_random_uuid(),
  operator_id uuid references public.operator_profiles(id) on delete set null,
  severity text not null default 'low' check (severity in ('info', 'low', 'medium', 'high')),
  category text not null,
  status text not null default 'open' check (status in ('open', 'reviewing', 'resolved')),
  trigger_text text,
  mentor_response text,
  parent_notified boolean not null default false,
  resolved_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.parent_summaries (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.parent_accounts(id) on delete cascade,
  operator_id uuid not null references public.operator_profiles(id) on delete cascade,
  week_start date not null,
  completed_missions integer not null default 0 check (completed_missions >= 0),
  main_insight text not null default '',
  metric_growth text not null default '',
  parent_prompt text not null default '',
  sent_at timestamptz,
  created_at timestamptz not null default now(),
  unique (operator_id, week_start)
);

create table if not exists public.access_grants (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan text not null default 'free_tester' check (plan in ('free_tester', 'trial', 'paid', 'internal')),
  status text not null default 'active' check (status in ('active', 'paused', 'blocked')),
  access_until timestamptz,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.access_invites (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  role text not null check (role in ('parent', 'operator', 'admin')),
  plan text not null default 'free_tester' check (plan in ('free_tester', 'trial', 'paid', 'internal')),
  seats integer not null default 1 check (seats > 0),
  used integer not null default 0 check (used >= 0 and used <= seats),
  expires_at timestamptz,
  status text not null default 'active' check (status in ('active', 'expired', 'disabled')),
  note text,
  created_at timestamptz not null default now()
);

create table if not exists public.admin_tasks (
  id uuid primary key default gen_random_uuid(),
  priority text not null default 'Medium' check (priority in ('High', 'Medium', 'Low')),
  area text not null,
  status text not null default 'Todo' check (status in ('Todo', 'Doing', 'Done')),
  task text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.admin_audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid references auth.users(id) on delete set null,
  action text not null,
  target_table text,
  target_id uuid,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.platform_settings (
  id text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at before update on public.profiles
for each row execute function public.touch_updated_at();

drop trigger if exists parent_accounts_touch_updated_at on public.parent_accounts;
create trigger parent_accounts_touch_updated_at before update on public.parent_accounts
for each row execute function public.touch_updated_at();

drop trigger if exists operator_profiles_touch_updated_at on public.operator_profiles;
create trigger operator_profiles_touch_updated_at before update on public.operator_profiles
for each row execute function public.touch_updated_at();

drop trigger if exists courses_touch_updated_at on public.courses;
create trigger courses_touch_updated_at before update on public.courses
for each row execute function public.touch_updated_at();

drop trigger if exists course_lessons_touch_updated_at on public.course_lessons;
create trigger course_lessons_touch_updated_at before update on public.course_lessons
for each row execute function public.touch_updated_at();

drop trigger if exists course_enrollments_touch_updated_at on public.course_enrollments;
create trigger course_enrollments_touch_updated_at before update on public.course_enrollments
for each row execute function public.touch_updated_at();

drop trigger if exists mission_progress_touch_updated_at on public.mission_progress;
create trigger mission_progress_touch_updated_at before update on public.mission_progress
for each row execute function public.touch_updated_at();

drop trigger if exists admin_tasks_touch_updated_at on public.admin_tasks;
create trigger admin_tasks_touch_updated_at before update on public.admin_tasks
for each row execute function public.touch_updated_at();

create or replace function public.is_admin(uid uuid default auth.uid())
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = uid
      and role = 'admin'
      and status = 'active'
  );
$$;

alter table public.profiles enable row level security;
alter table public.parent_accounts enable row level security;
alter table public.operator_profiles enable row level security;
alter table public.operator_metrics enable row level security;
alter table public.courses enable row level security;
alter table public.course_lessons enable row level security;
alter table public.course_enrollments enable row level security;
alter table public.mission_progress enable row level security;
alter table public.mentor_messages enable row level security;
alter table public.safety_events enable row level security;
alter table public.parent_summaries enable row level security;
alter table public.access_grants enable row level security;
alter table public.access_invites enable row level security;
alter table public.admin_tasks enable row level security;
alter table public.admin_audit_logs enable row level security;
alter table public.platform_settings enable row level security;

create policy "profiles own or admin select" on public.profiles
for select using (id = auth.uid() or public.is_admin());

create policy "profiles own update" on public.profiles
for update using (id = auth.uid()) with check (id = auth.uid());

create policy "profiles admin all" on public.profiles
for all using (public.is_admin()) with check (public.is_admin());

create policy "parents own or admin select" on public.parent_accounts
for select using (user_id = auth.uid() or public.is_admin());

create policy "parents own update" on public.parent_accounts
for update using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "parents admin all" on public.parent_accounts
for all using (public.is_admin()) with check (public.is_admin());

create policy "operators parent admin or self select" on public.operator_profiles
for select using (
  auth_user_id = auth.uid()
  or public.is_admin()
  or exists (
    select 1 from public.parent_accounts
    where parent_accounts.id = operator_profiles.parent_id
      and parent_accounts.user_id = auth.uid()
  )
);

create policy "operators admin all" on public.operator_profiles
for all using (public.is_admin()) with check (public.is_admin());

create policy "operator metrics visible to family or admin" on public.operator_metrics
for select using (
  public.is_admin()
  or exists (
    select 1
    from public.operator_profiles op
    left join public.parent_accounts pa on pa.id = op.parent_id
    where op.id = operator_metrics.operator_id
      and (op.auth_user_id = auth.uid() or pa.user_id = auth.uid())
  )
);

create policy "operator metrics admin all" on public.operator_metrics
for all using (public.is_admin()) with check (public.is_admin());

create policy "courses authenticated read" on public.courses
for select using (auth.role() = 'authenticated');

create policy "course lessons authenticated read" on public.course_lessons
for select using (auth.role() = 'authenticated');

create policy "courses admin all" on public.courses
for all using (public.is_admin()) with check (public.is_admin());

create policy "course lessons admin all" on public.course_lessons
for all using (public.is_admin()) with check (public.is_admin());

create policy "enrollments family or admin read" on public.course_enrollments
for select using (
  public.is_admin()
  or exists (
    select 1
    from public.operator_profiles op
    left join public.parent_accounts pa on pa.id = op.parent_id
    where op.id = course_enrollments.operator_id
      and (op.auth_user_id = auth.uid() or pa.user_id = auth.uid())
  )
);

create policy "enrollments admin all" on public.course_enrollments
for all using (public.is_admin()) with check (public.is_admin());

create policy "mission progress family or admin read" on public.mission_progress
for select using (
  public.is_admin()
  or exists (
    select 1
    from public.operator_profiles op
    left join public.parent_accounts pa on pa.id = op.parent_id
    where op.id = mission_progress.operator_id
      and (op.auth_user_id = auth.uid() or pa.user_id = auth.uid())
  )
);

create policy "mission progress operator self insert" on public.mission_progress
for insert with check (
  exists (
    select 1 from public.operator_profiles op
    where op.id = mission_progress.operator_id
      and op.auth_user_id = auth.uid()
  )
);

create policy "mission progress admin all" on public.mission_progress
for all using (public.is_admin()) with check (public.is_admin());

create policy "mentor messages family or admin read" on public.mentor_messages
for select using (
  public.is_admin()
  or exists (
    select 1
    from public.operator_profiles op
    left join public.parent_accounts pa on pa.id = op.parent_id
    where op.id = mentor_messages.operator_id
      and (op.auth_user_id = auth.uid() or pa.user_id = auth.uid())
  )
);

create policy "mentor messages operator self insert" on public.mentor_messages
for insert with check (
  exists (
    select 1 from public.operator_profiles op
    where op.id = mentor_messages.operator_id
      and op.auth_user_id = auth.uid()
  )
);

create policy "mentor messages admin all" on public.mentor_messages
for all using (public.is_admin()) with check (public.is_admin());

create policy "safety admin only" on public.safety_events
for all using (public.is_admin()) with check (public.is_admin());

create policy "parent summaries parent or admin read" on public.parent_summaries
for select using (
  public.is_admin()
  or exists (
    select 1 from public.parent_accounts pa
    where pa.id = parent_summaries.parent_id
      and pa.user_id = auth.uid()
  )
);

create policy "parent summaries admin all" on public.parent_summaries
for all using (public.is_admin()) with check (public.is_admin());

create policy "access grants own or admin select" on public.access_grants
for select using (user_id = auth.uid() or public.is_admin());

create policy "access grants admin all" on public.access_grants
for all using (public.is_admin()) with check (public.is_admin());

create policy "access invites admin read" on public.access_invites
for select using (public.is_admin());

create policy "access invites admin all" on public.access_invites
for all using (public.is_admin()) with check (public.is_admin());

create policy "admin tasks admin only" on public.admin_tasks
for all using (public.is_admin()) with check (public.is_admin());

create policy "admin audit logs admin read" on public.admin_audit_logs
for select using (public.is_admin());

create policy "admin audit logs admin insert" on public.admin_audit_logs
for insert with check (public.is_admin());

create policy "platform settings admin only" on public.platform_settings
for all using (public.is_admin()) with check (public.is_admin());

create index if not exists parent_accounts_user_id_idx on public.parent_accounts(user_id);
create index if not exists operator_profiles_parent_id_idx on public.operator_profiles(parent_id);
create index if not exists operator_profiles_auth_user_id_idx on public.operator_profiles(auth_user_id);
create index if not exists safety_events_status_severity_idx on public.safety_events(status, severity);
create index if not exists mission_progress_operator_course_idx on public.mission_progress(operator_id, course_id);
create index if not exists mentor_messages_operator_created_idx on public.mentor_messages(operator_id, created_at desc);
create index if not exists admin_audit_logs_created_idx on public.admin_audit_logs(created_at desc);
