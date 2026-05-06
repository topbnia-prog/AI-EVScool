# Next Build Sequence

## Status Date

2026-05-06

## Current Product State

The app now has a local frontend-only MVP path:

- `/` landing page
- `/login`
- `/register`
- `/parent/signup`
- `/parent/dashboard`
- `/operator/login`
- `/operator/mindscan`
- `/operator/dashboard`
- `/operator/mission/[id]`
- `/operator/mentor`
- `/operator/profile`
- `/admin/safety`
- `/admin/tasks`
- `/admin/operators`
- `/admin/operators/[id]`
- `/terms`
- `/privacy`
- `/parent-consent`
- `/child-safety-policy`

This is a visible product skeleton with a consistent local data model, not a working platform yet. The next work should add server-side guardrails and persistence before connecting real payments or production AI.

## What To Create Next

### 1. Shared Mock Data Layer

Create local data modules before adding more UI.

Why:

- current pages duplicate sample ideas
- dashboards and mission pages need the same operator/course/task data
- later Supabase integration will be easier if the app already has clean data shapes

Create:

- `app/lib/mockData.ts`
- `app/lib/types.ts`

Include:

- parent
- operator
- pilot profile
- missions
- mission progress
- mentor messages
- admin tasks
- safety alerts

### 2. Parent Dashboard

Create `/parent/dashboard`.

Why:

- parent pays and owns the account
- current parent flow stops after signup
- parent needs to see progress, weekly summary, consent, and billing status

Must show:

- operator profile
- completed missions
- weekly summary
- metric growth
- consent status
- billing placeholder
- safety alert placeholder

### 3. Operator Login And MindScan

Create:

- `/operator/login`
- `/operator/mindscan`

Why:

- child should not enter through parent signup
- MindScan is the product's personalization gate
- operator dashboard should feel earned, not random

Operator login should be PIN/code based in the prototype.

MindScan should ask:

- age branch
- language
- interests
- AI experience
- learning goal
- preferred challenge style

### 4. Mission Runner From Data

Refactor `/operator/mission/[id]`.

Why:

- the route exists but does not read mission data
- mission 1 and mission 2 content already exist in docs
- the UI needs to support all 6 mission steps

Create:

- step navigation
- mission content object
- reflection state placeholder
- completion state placeholder
- locked mission state
- paywall transition after Mission 2

### 5. Mentor Chat Prototype With Guardrail States

Status: frontend prototype complete. Backend API and tests are still required.

Create frontend mentor states before using a real model.

States:

- mission guidance
- reflection guidance
- homework refusal
- out-of-context redirect
- safety fallback

Why:

- the UX must show the boundaries before backend AI exists
- safety behavior can be reviewed visually
- later tests can use the same scenario list

### 6. Admin Operator Detail

Status: frontend prototype complete. Database-backed notes, filtering, and role checks are still required.

Create `/admin/operators` and `/admin/operators/[id]`.

Why:

- admin needs to inspect operator progress and safety context
- safety queue without operator detail is not enough

Must show:

- operator profile
- current mission
- metric trend
- latest session summaries
- safety events
- admin notes
- subscription status placeholder

### 7. Canonical MVP Spec Cleanup

Create one implementation-ready spec before backend work.

Create:

- `docs/operations/08_mvp_build_spec.md`

It should merge accepted decisions from:

- product docs
- gap audit
- legal docs
- technical architecture
- course docs
- UX docs

Why:

- current docs still contain duplicated and draft material
- backend implementation should not start from scattered sources

## Do Not Create Yet

Do not create these before the shared local model and user flow are clearer:

- real payment integration
- real Claude mentor API
- real production auth
- public deploy update
- broad marketing pages

## Recommended Immediate Order

1. Supabase schema and RLS plan.
2. Mock mentor API route with strict state validation.
3. Guardrail test suite for safety, homework, bypass, manipulation, and out-of-context prompts.
4. Local progress persistence.
5. Parent consent state wired to registration.
6. Admin task CRUD backed by database.
7. Payment provider decision and checkout prototype.

## Done Criteria For Next Stage

Before Supabase integration, the local app should allow this full click path:

1. Parent starts from landing.
2. Parent creates an operator.
3. Operator logs in with code/PIN.
4. Operator completes MindScan.
5. Operator opens dashboard.
6. Operator starts Mission 1.
7. Mentor shows safe guided behavior.
8. Reflection unlocks progress.
9. Parent dashboard shows summary.
10. Admin dashboard shows task and safety context.

Only after this path exists locally should the project move to real database and backend guardrails.
