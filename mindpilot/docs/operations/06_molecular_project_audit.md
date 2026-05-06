# Molecular Project Audit

## Audit Date

2026-05-06

## Executive Conclusion

MindPilot is a strong product concept with a clear educational angle: teach children to control, verify, and question AI instead of copying from it.

The project is not ready to be built as a full production platform in one pass yet. The documentation has the right foundation, but several layers are still split across drafts, the app is only a deployable shell, and the operational/legal/AI guardrails are not executable.

The correct next move is not to add random features. The correct next move is to consolidate the existing documents into one implementation source of truth, close the P0 decisions below, then build the real MVP in vertical slices.

## What Is Solid

- The core positioning is clear: "operator, not user".
- The first buyer/user split is clear: parent pays, child uses.
- The first market is clear: Israel.
- The MVP content language is clear: Hebrew.
- The first course shape is clear: 30 daily missions.
- The first two Hebrew missions exist and are usable as free-tier value proof.
- The AI mentor philosophy is clear: Socratic guidance, not answer generation.
- The GitHub public package is separated from the private source folder.
- Manual Vercel deployment is configured and matches the owner's requested workflow.
- The production build currently passes.

## Confirmed Working Locally

- `npm run build` passes in `mindpilot/app`.
- Git working tree was clean before this audit started.
- No tracked match was found for private child/family markers in the current public `mindpilot` folder.
- The old UX prototype exists outside the public project at `C:\Users\USER\Desktop\AI school\mindpilot_game_ux_system.html`, but it contains a real child name and must not be copied directly into GitHub.

## Confirmed Breaks

### P0: `npm run lint` Was Broken

The app used `next lint`, which fails under the current Next.js setup. This is dangerous because a pre-deploy quality command must be trustworthy.

Fix applied in this audit:

- `lint` now runs TypeScript validation.
- `typecheck` was added as an explicit script.

### P0: The App Is Not The Product Yet

The deployed app is a static shell page. It does not yet contain:

- parent registration
- operator login
- MindScan
- operator dashboard
- mission runner
- mentor chat
- parent dashboard
- admin dashboard
- payment flow
- safety event handling
- database integration

This is not bad, but it must be named clearly: the current app proves deployment, not product readiness.

### P0: Documentation Is Split Across Multiple Truths

Some details exist in `operations/03_full_gap_audit.md`, while shorter canonical docs still say the same areas are unfinished. This creates implementation risk because a developer could build from the wrong document.

Needed repair:

- make one canonical MVP specification
- keep the full gap audit as source material
- move accepted details into final product/course/technical/legal docs
- mark duplicated draft sections as deprecated or merged

## Product Gaps

### P0: Final Parent Offer

Current offer is directionally good, but not checkout-ready.

Missing:

- one-sentence parent promise
- 3-5 concrete parent benefits
- what parent sees before paying
- why this is not another generic AI course
- exact language for Hebrew/Russian/English parent pages

### P0: Final Child Offer

"You are not a user, you are an operator" is strong, but the child-facing promise needs to become screen copy.

Missing:

- first-login message
- mission intro language
- progress/rank names
- achievement names
- paywall language that does not shame the child

### P0: Pricing And Refund Policy

The project names PayPal first, but has no final MVP price or cancellation policy.

Missing:

- monthly price in ILS
- annual price if any
- family/sibling rule
- trial/free path
- refund window
- cancellation timing
- VAT/invoice handling
- parent-facing billing text

## Course Gaps

### P0: Mission 3-30 Are Not Written

The 30-day map exists, but only missions 1 and 2 are fully written in Hebrew. A real MVP needs the full paid path before charging.

Minimum next course target:

- write Missions 3-7 in Hebrew before any payment test
- write Missions 8-30 before broad launch
- keep Junior/Senior variants explicit
- QA each mission before publishing

### P1: Junior/Senior Rules Need Examples

The distinction exists, but it is still abstract.

Needed:

- max text length per branch
- example tone differences
- challenge difficulty rules
- mentor hint depth rules
- forbidden complexity for ages 10-13

### P1: Visual System Needs Migration

The old HTML prototype contains useful UX ideas, but it includes private child data. It should be rebuilt into sanitized React components, not copied.

Needed:

- operator dashboard component spec
- mission runner component spec
- level-up overlay spec
- streak component spec
- metric radar or metric bars
- mobile-first chat screen

## AI Mentor Gaps

### P0: Prompt Is Not Enough

The system prompt is a baseline, not a safety system.

Needed before real child usage:

- JSON schema validation for mentor output
- backend-only progress decisions
- server-side daily mission limit
- server-side homework refusal classifier
- safety classifier before and after generation
- prompt versioning
- logs for mentor intent
- test suite of adversarial child messages

### P0: Mission-Step Awareness Is Not Implemented

The prompt says the backend injects current mission state. The app has no backend yet, so the rule is only theoretical.

Needed:

- API route for mission start
- API route for step completion
- API route for mentor turn
- database read of current mission/version/step
- server decision for `may_progress`

### P1: Homework Boundary Needs More Cases

The prompt contains a homework rule, but a product for children needs many refusal examples.

Needed test cases:

- "write my essay"
- "solve this math problem, just answer"
- "summarize this book for my homework"
- "hide that I used AI"
- "my teacher will not know"
- "give me the answer because I paid"

## Safety And Legal Gaps

### P0: Lawyer Review Is A Launch Gate

The lawyer email exists, but legal review is not scheduled or completed. Paid child-facing launch in Israel should not happen before review.

The legal review must cover:

- Israeli privacy law
- child/minor consent
- consumer protection
- subscriptions and cancellation
- VAT/tax invoices
- AI chatbot safety language
- retention/deletion obligations
- payment provider terms
- processor agreements for Supabase, Vercel, Anthropic, PayPal/Rapyd

### P0: Privacy Policy, Terms, And Child Safety Policy Are Missing

Parent consent is not enough. The project still needs:

- Privacy Policy
- Terms of Service
- Child Safety Policy
- Cookie/analytics notice if analytics are added
- Data deletion request procedure
- Support/contact procedure

### P0: Data Retention Is Documented But Not Executable

The rule says full mentor messages expire after 90 days, but there is no database job or backend cron in the app.

Needed:

- retention SQL/job
- deletion audit log
- safety-alert exception rules
- admin review window
- documented backup retention

## Technical Gaps

### P0: Database Schema Is Draft

The schema exists as a list and a fuller SQL block in the gap audit, but the canonical database document is not final.

Needed:

- final SQL migration files
- RLS policies per table
- role model for parent/operator/admin
- storage policy if files are ever added
- seed data for missions 1-2
- migration strategy for mission versions

### P0: Authentication Is Not Designed Enough

The intended model is parent account plus child operator PIN, but implementation details are missing.

Needed:

- parent registration flow
- parent email verification
- operator creation flow
- child login without email
- PIN reset flow
- session timeout policy
- admin role assignment

### P0: Payments Are Not Decided Enough

Stripe direct Israel support is not available on Stripe global availability as of this audit. PayPal and Rapyd are plausible, but the MVP provider is not implementation-ready.

Needed:

- provider choice: PayPal first or Rapyd first
- checkout flow
- webhook verification
- subscription status sync
- failed payment handling
- cancellation flow
- invoices/receipts
- test account setup

### P1: Observability Is Missing

Needed:

- error tracking
- audit logs
- admin safety notifications
- payment webhook logs
- AI cost logs
- abuse/rate-limit logs
- backup plan

## UX Gaps

### P0: Child UX Is A Spec, Not A Product

The UX language is good. The app does not yet implement it.

MVP child screens needed:

- parent-created operator entry
- MindScan
- dashboard
- mission runner
- mentor chat
- reflection submission
- progress/metrics profile
- paywall handoff to parent

### P0: Admin Dashboard Must Exist Early

Because this is a child-facing AI product, admin is not optional.

MVP admin must include:

- operators list
- operator progress
- latest session summaries
- safety alerts
- admin task system
- manual notes
- content QA status

### P1: Parent Dashboard Needs Boundaries

The parent dashboard must avoid exposing full child chat by default while still handling safety.

Needed:

- weekly summary card
- completed missions
- metric growth
- billing/subscription
- safety alert protocol
- data request/delete path

## Research And Market Gaps

The research direction is strong, but claims must be separated into:

- verified claims allowed in public marketing
- internal assumptions
- claims needing source check
- claims needing legal review

Do not use exact percentages in public copy until each has a current source URL, date, and quote-safe summary.

## External Verification Notes

- Stripe global availability does not list Israel as a directly supported Stripe Payments business location; Stripe states unsupported locations have "Payments not supported yet." Source: https://stripe.com/global
- Vercel CLI supports manual production deploys from a project root with `vercel --prod`. Source: https://vercel.com/docs/cli/deploy
- Israel's 105 hotline is the national child online protection hotline for harm to children and adolescents in cyberspace. Source: https://www.gov.il/en/Departments/Units/105_call_center
- Israel Privacy Protection Law Amendment 13 is now a material compliance issue and expanded privacy enforcement. Source context: https://www.loc.gov/item/global-legal-monitor/2025-11-17/israel-amendment-to-privacy-protection-law-goes-into-effect/
- The European Commission and OECD AI literacy framework for primary and secondary education is a real direction and is set around 2026 public framework work. Source: https://www.oecd.org/en/events/public-consultations/2025/09/ailit-framework.html
- Claude Sonnet 4.6 pricing at $3 input / $15 output per million tokens is confirmed by Anthropic public material as of this audit. Source: https://www.anthropic.com/claude/sonnet
- PayPal lists ILS as a supported REST API currency. Source: https://developer.paypal.com/api/rest/reference/currency-codes/
- Rapyd documents subscription capabilities. Source: https://docs.rapyd.net/en/subscription.html

## Rebuild Blueprint

### Stage 1: Source Of Truth Cleanup

Goal: make docs buildable.

Tasks:

- merge accepted details from `operations/03_full_gap_audit.md` into canonical docs
- mark old duplicate sections as source/background
- finalize product offer, pricing, cancellation
- finalize legal document set for lawyer review
- finalize database SQL and RLS
- finalize UX screen requirements

### Stage 2: Real Local MVP Skeleton

Goal: replace static shell with real routes and fake/local data.

Routes:

- `/`
- `/parent/signup`
- `/parent/dashboard`
- `/operator/login`
- `/operator/mindscan`
- `/operator/dashboard`
- `/operator/mission/[id]`
- `/admin`
- `/admin/tasks`
- `/admin/safety`

No production deploy until reviewed locally.

### Stage 3: Supabase Integration

Goal: real data with RLS.

Tasks:

- create migrations
- create seed missions 1-2
- implement parent auth
- implement operator profiles
- implement mission progress
- implement admin role checks
- test RLS with parent/operator/admin cases

### Stage 4: Mentor Backend

Goal: AI mentor cannot bypass product rules.

Tasks:

- create mentor API route
- validate JSON schema
- enforce mission state server-side
- enforce daily limit server-side
- implement homework and safety classifiers
- log mentor sessions and summaries
- create automated mentor behavior tests

### Stage 5: Payments

Goal: paid unlock works safely.

Tasks:

- choose PayPal or Rapyd for MVP
- implement checkout
- implement webhooks
- sync subscription status
- create cancellation flow
- test failed payment path
- show parent billing status

### Stage 6: Admin And QA

Goal: launch control exists before children use it.

Tasks:

- admin task system UI
- content QA queue
- safety alert queue
- operator progress view
- session summary view
- retention job monitor

### Stage 7: Controlled Launch

Goal: small safe test, not broad release.

Tasks:

- test with 1-2 operators only
- review mentor transcripts
- tune missions and prompts
- review parent feedback
- verify no private data is committed
- deploy only after explicit owner request

## P0 Backlog

1. Finalize parent offer, child offer, price, cancellation, and refund policy.
2. Create Privacy Policy, Terms of Service, and Child Safety Policy drafts.
3. Schedule Israeli lawyer review and record answers.
4. Choose PayPal or Rapyd for MVP payments.
5. Finalize canonical database SQL and RLS policies.
6. Build real local operator dashboard, mission runner, and mentor chat.
7. Build admin dashboard with tasks and safety alerts.
8. Write Missions 3-7 in Hebrew before payment testing.
9. Create AI mentor backend tests for homework, safety, out-of-context, manipulation, and progress bypass.
10. Add retention/deletion jobs for mentor messages.

## P1 Backlog

1. Write Missions 8-30 in Hebrew.
2. Create Junior/Senior examples and content limits.
3. Migrate sanitized UX prototype ideas into React components.
4. Create parent weekly summary generation.
5. Add analytics and cost tracking.
6. Create backup and monitoring plan.
7. Add support/data deletion request workflow.

## Build Rule After This Audit

The project should now be built as a real product only through vertical slices:

1. one user flow
2. one database path
3. one UI surface
4. one backend guardrail
5. one test

This keeps the product coherent while still allowing fast progress.
