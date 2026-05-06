# MVP Build Specification

## Status

Implementation source of truth for the current local MVP prototype.

Last updated: 2026-05-06

## Product Goal

MindPilot teaches children ages 10-16 to manage AI instead of depending on it. The first MVP should prove the core loop:

1. Parent owns the account.
2. Parent gives consent and creates an operator.
3. Operator enters through a child-safe login.
4. Operator completes MindScan.
5. Operator opens a dashboard.
6. Operator completes missions with a Socratic AI mentor.
7. Parent sees progress summaries, not full chat by default.
8. Admin sees tasks, operators, safety alerts, and QA signals.

## Current Local Routes

### Public

- `/`
- `/login`
- `/register`
- `/terms`
- `/privacy`
- `/parent-consent`
- `/child-safety-policy`

### Parent

- `/parent/signup`
- `/parent/dashboard`

### Operator

- `/operator/login`
- `/operator/mindscan`
- `/operator/dashboard`
- `/operator/mission/[id]`
- `/operator/mentor`
- `/operator/profile`

### Admin

- `/admin/tasks`
- `/admin/safety`
- `/admin/operators`
- `/admin/operators/[id]`

## Data Model

The local frontend uses:

- `app/lib/types.ts`
- `app/lib/mockData.ts`

These files are the temporary local replacement for Supabase. They define:

- parent account
- operator profile
- metrics
- missions
- mission steps
- mentor messages
- mentor guardrail scenarios
- weekly parent summary
- admin tasks
- safety alerts

When Supabase is added, these TypeScript shapes should inform the database and API contracts.

## Parent Flow

### Parent Signup

The parent signup screen must communicate:

- child does not create the main account
- parent/guardian owns the account
- consent is required before operator access
- child email is not needed for MVP

### Parent Dashboard

The parent dashboard must show:

- operator profile
- consent status
- billing placeholder
- completed mission summary
- weekly insight
- metric growth
- safety alerts if they exist

Parent should not see full chat by default.

## Operator Flow

### Operator Login

The operator login is code/PIN based in the prototype. This supports data minimization because the child does not need an email account.

### MindScan

MindScan captures:

- age branch
- AI experience
- interests
- learning goal

MindScan is not a grade. It sets personalization context.

### Operator Dashboard

The dashboard must show:

- rank
- streak
- daily mission limit
- mission path
- metric growth
- continue mission button

No public comparison with other children.

### Operator Mentor

The mentor screen must show guided conversation behavior before the real AI provider exists:

- mission context
- Socratic questions
- homework refusal
- out-of-context redirect
- safety fallback
- no free-form progress unlock controlled only by the model

### Operator Profile

The profile screen must show:

- operator rank
- current XP and streak
- six metric radar
- unlocked and locked achievements
- no public leaderboard

## Mission Runner

The mission runner must support six steps:

1. Hook
2. Concept
3. Visual
4. Challenge
5. Simulation
6. Reflection

The current prototype renders mission data from `mockData.ts`. Later, backend logic must control:

- mission unlock
- daily mission limit
- reflection completion
- progress updates
- paywall after Mission 2

## AI Mentor Guardrail States

The frontend currently includes visible guardrail scenarios:

- mission guidance
- reflection guidance
- homework boundary
- out-of-context redirect
- safety fallback

Before Claude integration, these states must become test cases. A real AI response must not be allowed to decide progress by itself.

## Admin Flow

### Admin Tasks

Admin tasks are currently local data. Later they should become an `admin_tasks` table.

### Admin Safety

Safety alerts are currently local data. Later they should become a `safety_alerts` table with:

- severity
- category
- status
- operator id
- mentor session id
- admin resolution notes

### Admin Operators

Admin can inspect:

- operator profile
- current mission
- metric state
- safety events
- session summary placeholder
- subscription placeholder

## Legal Gate

Before paid launch with children:

- Terms must be reviewed.
- Privacy Policy must be reviewed.
- Parent Consent must be reviewed.
- Child Safety Policy must be reviewed.
- Payment/cancellation/refund flow must be reviewed.
- Data retention must be implemented, not only documented.

## Technical Gate Before Supabase

The local app should pass:

- `npm run build`
- `npm run lint`
- all local routes return 200
- no private child/family data in tracked files

## Supabase Integration Order

1. Create SQL migrations.
2. Add RLS policies.
3. Add parent auth.
4. Add operator profile table.
5. Add mission tables and seed Mission 1-2.
6. Add mission progress.
7. Add admin role checks.
8. Add safety alerts.
9. Add retention job.

## Claude Integration Order

1. Build mentor API route without calling Claude.
2. Validate request state server-side.
3. Validate JSON response schema.
4. Add guardrail test fixtures.
5. Add safety classifier placeholder.
6. Connect real provider only after tests pass locally.

## Payment Integration Order

1. Finalize provider: PayPal or Rapyd.
2. Finalize price and cancellation policy.
3. Create checkout prototype.
4. Add webhook verification.
5. Sync subscription status.
6. Test failed payment and cancellation.

## Current Next Step

The next build step after this specification is Supabase schema/RLS planning and a mock mentor API route with tests, not production deployment.
