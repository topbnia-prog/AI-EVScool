# Project Tasks Seed

This file tracks tasks that should appear in the future admin dashboard task system.

## Open Tasks

| Priority | Area | Status | Task | Related document |
|---|---|---|---|---|
| High | Legal | Todo | Send lawyer review email | `docs/legal/03_lawyer_review_email_he.md` |
| High | Legal | Done | Create privacy policy draft page | `app/app/privacy/page.tsx` |
| High | Legal | Done | Create Terms of Service draft page | `app/app/terms/page.tsx` |
| High | Legal | Done | Create Child Safety Policy draft page | `app/app/child-safety-policy/page.tsx` |
| High | Legal | Todo | Schedule Israeli lawyer review and record answers | `docs/legal/03_lawyer_review_email_he.md` |
| High | Product | Todo | Finalize parent offer, child offer, price, refund, and cancellation policy | `docs/operations/06_molecular_project_audit.md` |
| High | Payments | Todo | Choose PayPal or Rapyd for MVP and document checkout/webhook flow | `docs/operations/06_molecular_project_audit.md` |
| High | Technical | Todo | Finalize Supabase SQL migrations and RLS policies | `docs/technical/02_database_schema.md` |
| High | AI Mentor | Todo | Create mentor backend test suite for homework, safety, out-of-context, manipulation, and progress bypass | `docs/technical/03_ai_mentor_system_prompt.md` |
| High | Safety | Todo | Specify and implement 90-day mentor message retention job | `docs/legal/01_safety_privacy_legal_requirements.md` |
| High | Course | Todo | Finish Mission 3 Hebrew draft | `docs/course/02_mission_template.md` |
| High | Course | Todo | Write Missions 4-7 Hebrew drafts before payment testing | `docs/operations/06_molecular_project_audit.md` |
| High | App | Todo | Create shared mock data and TypeScript types for parent/operator/missions/admin | `docs/operations/07_next_build_sequence.md` |
| High | App | Todo | Create parent dashboard with summary, consent, billing, progress, and safety placeholders | `docs/operations/07_next_build_sequence.md` |
| High | App | Todo | Create operator login and MindScan routes | `docs/operations/07_next_build_sequence.md` |
| High | App | Todo | Refactor mission runner to read mission data and support all 6 steps | `docs/operations/07_next_build_sequence.md` |
| High | AI Mentor | Todo | Create frontend mentor guardrail states before real Claude integration | `docs/operations/07_next_build_sequence.md` |
| High | Admin | Todo | Create admin operators list and operator detail pages | `docs/operations/07_next_build_sequence.md` |
| High | Operations | Todo | Create canonical MVP build spec from accepted docs | `docs/operations/07_next_build_sequence.md` |
| Medium | Technical | Done | Scaffold Next.js app | `docs/operations/01_deploy_plan.md` |
| Medium | Deploy | Done | Configure manual Vercel deploy only | `docs/operations/01_deploy_plan.md` |
| Medium | Technical | Done | Add frontend operator dashboard prototype to local app | `app/app/operator/dashboard/page.tsx` |
| Medium | UX | Todo | Rebuild sanitized UX prototype ideas as React components without private names | `docs/operations/06_molecular_project_audit.md` |
| Medium | Admin | Done | Build admin task dashboard UI prototype from admin task system spec | `app/app/admin/tasks/page.tsx` |
| Medium | Operations | Todo | Add backup, monitoring, cost, and safety notification plan | `docs/operations/06_molecular_project_audit.md` |

## Rule

Every future unresolved action should be added here first, then later moved into the `admin_tasks` database table when the admin dashboard exists.
