# MindPilot Admin Operating System

## Purpose

The admin panel is not just a list of pages. It is the daily command center for running a child-safe
AI literacy product.

The admin must immediately understand:

1. What needs attention today.
2. Which operators are blocked, at risk, or progressing.
3. Which safety events are open.
4. Which courses and missions are ready, blocked, or still in QA.
5. Which mentor behavior tests are failing.
6. Which parent accounts need consent, billing, or weekly summary attention.
7. Which operational tasks must not be forgotten.

## Entry after admin login

Admin accounts must redirect to:

```text
/admin
```

The user must never manually choose the admin role during login. Role resolution comes from the
account profile.

## Sections

### 1. Command Center

Route:

```text
/admin
```

Shows:

- KPI cards: active operators, open safety events, course readiness, pending consent/billing.
- Attention queue: highest priority items across safety, courses, parents, mentor and legal.
- Today operations: who needs review now.
- Audit log: recent admin/system actions.

### 2. Operators CRM

Routes:

```text
/admin/operators
/admin/operators/[id]
```

Shows:

- operator list;
- age branch, language, rank, active course, active mission;
- parent insight;
- MindScan;
- metrics;
- safety history;
- admin notes and first-session plan.

### 3. Courses & Missions

Route:

```text
/admin/courses
```

Shows:

- course status;
- lesson count;
- dependency;
- metrics;
- QA readiness;
- source folder;
- publication state.

### 4. AI Mentor Control

Route:

```text
/admin/mentor
```

Shows:

- active system prompt version;
- provider-neutral AI configuration;
- behavior tests;
- forbidden behavior coverage;
- homework refusal;
- out-of-context redirect;
- safety fallback;
- reflection guardrail.

### 5. Safety Center

Route:

```text
/admin/safety
```

Shows:

- safety queue;
- severity;
- status;
- category;
- required next action;
- parent notification flag;
- resolution notes;
- retention guardrails.

### 6. Parents, Consent & Billing

Route:

```text
/admin/parents
```

Shows:

- parent account status;
- consent;
- billing;
- linked operators;
- weekly summary readiness;
- document acceptance status.

### 7. Analytics

Route:

```text
/admin/analytics
```

Shows:

- registration to MindScan funnel;
- MindScan to mission completion;
- retention;
- course progress;
- where operators drop;
- safety rates.

### 8. Tasks

Route:

```text
/admin/tasks
```

Shows:

- legal, product, AI, safety and UX tasks;
- priority;
- status;
- owner and next action in the future database model.

### 9. Settings

Route:

```text
/admin/settings
```

Shows:

- AI provider settings;
- privacy retention;
- daily mission limit;
- allowed languages;
- deployment rule: deploy only on explicit owner request.

## Data model direction

The first app version can use structured mock data. The database version should split it into:

- `admin_attention_items`
- `admin_audit_logs`
- `mentor_behavior_tests`
- `admin_parent_records`
- `platform_settings`
- `analytics_snapshots`

All admin actions that change safety, courses, prompts, users or payments must write to an audit log.
