# Admin Task System

## Purpose

The MindPilot admin dashboard must include an internal task system so project, legal, content, QA, safety, and launch tasks do not disappear in chat history.

This is not a user-facing feature. It is an internal operating layer for the project team.

## Dashboard Placement

Admin home should show a `Project Tasks` panel above or beside analytics.

Default view:

- Urgent open tasks
- Blocked tasks
- Due this week
- Recently completed

## Task Areas

Use these areas:

- product
- course
- ux
- admin
- legal
- safety
- technical
- payments
- deploy
- research
- operations

## Task Statuses

- todo
- in_progress
- blocked
- waiting_external
- done
- archived

## Priorities

- urgent
- high
- medium
- low

## Required Fields

- `id`
- `title`
- `description`
- `area`
- `priority`
- `status`
- `owner`
- `due_label`
- `related_doc_path`
- `created_at`
- `updated_at`
- `completed_at`

## Optional Fields

- `external_contact`
- `github_issue_url`
- `blocked_reason`
- `decision_needed`
- `notes`

## MVP Database Table

```sql
create table admin_tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  area text not null check (area in (
    'product',
    'course',
    'ux',
    'admin',
    'legal',
    'safety',
    'technical',
    'payments',
    'deploy',
    'research',
    'operations'
  )),
  priority text not null default 'medium' check (priority in ('urgent', 'high', 'medium', 'low')),
  status text not null default 'todo' check (status in (
    'todo',
    'in_progress',
    'blocked',
    'waiting_external',
    'done',
    'archived'
  )),
  owner text not null default 'admin',
  due_label text,
  related_doc_path text,
  external_contact text,
  github_issue_url text,
  blocked_reason text,
  decision_needed text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  completed_at timestamptz
);
```

## RLS Direction

Only admin users can read or write `admin_tasks`.

Parent and operator accounts must never access internal project tasks.

## Initial Seed Tasks

```sql
insert into admin_tasks (
  title,
  description,
  area,
  priority,
  status,
  owner,
  due_label,
  related_doc_path,
  notes
) values
(
  'Send lawyer review email',
  'Send the Hebrew legal review email to an Israeli lawyer and request review of privacy, parent consent, safety, subscriptions, payments, and child data requirements.',
  'legal',
  'high',
  'todo',
  'admin',
  'before paid MVP',
  'mindpilot/docs/legal/03_lawyer_review_email_he.md',
  'Do not launch paid MVP before legal review is complete.'
),
(
  'Finish Mission 3 Hebrew draft',
  'Write the first paid mission on prompt structure in Hebrew, using the mission template and Junior/Senior rules.',
  'course',
  'high',
  'todo',
  'admin',
  'before app content import',
  'mindpilot/docs/course/02_mission_template.md',
  null
),
(
  'Create privacy policy draft',
  'Convert legal requirements into a parent-facing privacy policy draft for lawyer review.',
  'legal',
  'high',
  'todo',
  'admin',
  'before paid MVP',
  'mindpilot/docs/legal/01_safety_privacy_legal_requirements.md',
  null
),
(
  'Scaffold Next.js app',
  'Create the application under mindpilot/app with Next.js, TypeScript, Tailwind, and initial design tokens.',
  'technical',
  'medium',
  'done',
  'admin',
  'after documentation gate',
  'mindpilot/docs/operations/01_deploy_plan.md',
  null
),
(
  'Keep deployment manual',
  'Do not connect GitHub automatic deployments. Deploy production only after explicit owner request using npm run deploy:prod from mindpilot/app.',
  'deploy',
  'medium',
  'done',
  'admin',
  'current workflow',
  'mindpilot/docs/operations/01_deploy_plan.md',
  'Manual CLI production deploy works. Automatic GitHub deployments are intentionally disabled for now.'
);
```

## UX Requirements

Admin task cards should show:

- title
- area badge
- priority badge
- status
- due label
- owner
- related document link

Admin must be able to:

- create task
- edit task
- mark done
- archive task
- filter by area, priority, and status
- search by title

## Operating Rule

Whenever a new decision, blocker, or follow-up appears during product work, add it to `admin_tasks` instead of relying on memory.
