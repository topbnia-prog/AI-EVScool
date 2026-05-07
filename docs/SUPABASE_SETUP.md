# MindPilot Supabase Setup

## Current state

Supabase is connected at code level, but the app still falls back to mock data when env keys are
missing. This lets us continue local development safely while preparing the real database.

Implemented:

- browser client: `mindpilot/app/app/lib/supabase/client.ts`
- server SSR client: `mindpilot/app/app/lib/supabase/server.ts`
- server-only admin client: `mindpilot/app/app/lib/supabase/admin.ts`
- typed database contract: `mindpilot/app/app/lib/supabase/database.types.ts`
- first migration: `mindpilot/app/supabase/migrations/20260507190000_initial_mindpilot_schema.sql`
- admin users page reads Supabase when service env keys exist, otherwise mock data

## Required environment variables

Create `mindpilot/app/.env.local` locally. Do not commit it.

```bash
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
SUPABASE_PROJECT_ID=YOUR_PROJECT_ID
```

The anon key can exist in browser code only because all app tables use Row Level Security. The
service role key is server-only and must never be imported into client components.

## Database creation

Option A, Supabase SQL editor:

1. Open the Supabase project dashboard.
2. Go to SQL Editor.
3. Paste and run:

```text
mindpilot/app/supabase/migrations/20260507190000_initial_mindpilot_schema.sql
```

Option B, Supabase CLI:

```bash
cd mindpilot/app
npx supabase@latest link --project-ref YOUR_PROJECT_ID
npx supabase@latest db push
```

## What the first schema contains

Identity and access:

- `profiles`
- `parent_accounts`
- `operator_profiles`
- `access_grants`
- `access_invites`

Learning:

- `courses`
- `course_lessons`
- `course_enrollments`
- `mission_progress`
- `operator_metrics`
- `mentor_messages`

Safety and operations:

- `safety_events`
- `parent_summaries`
- `admin_tasks`
- `admin_audit_logs`
- `platform_settings`

## Child-data rule

The schema keeps parent identity separate from child/operator learning data.

For the first real version:

- parent account can use email/password;
- child/operator can use an operator code;
- no child email is required;
- no photos, geolocation, school name, biometrics, or unnecessary personal data;
- sensitive mentor/safety data must stay visible only to admin unless a parent-facing summary is
  explicitly generated.

## RLS model

Every public table has RLS enabled.

Access model:

- admin can manage operational tables;
- parent can read their own parent account and linked operator progress;
- operator can read/write only their own mission/mentor progress when `auth_user_id` is later used;
- safety queue and admin audit logs are admin-only;
- courses are readable by authenticated users but writable only by admin.

## First real Supabase tasks

1. Create the Supabase project.
2. Run the initial migration.
3. Add `.env.local` locally and in Vercel project settings.
4. Create the first admin user in Supabase Auth.
5. Insert a matching `profiles` row with `role = 'admin'`.
6. Replace demo login with Supabase Auth.
7. Convert `/admin/users` mutations from local state to route handlers that write:
   - `auth.users`
   - `profiles`
   - `access_grants`
   - `access_invites`
   - `admin_audit_logs`

## Verification

After env keys are added:

```bash
cd mindpilot/app
npm.cmd run verify
```

Then open:

```text
http://127.0.0.1:3000/admin/users
```

The `Data source` card should show `Supabase` instead of `Mock`.
