# MindPilot Course Integration

## What was integrated

The external `courses` folder is now represented in the application as a structured course catalog.
The app does not rely on raw markdown files at runtime. Runtime course data lives in:

```text
mindpilot/app/app/lib/courses.ts
```

This keeps the product stable, avoids broken source encodings in the UI, and lets future admin tools
validate courses before publishing them.

## Active catalog

1. `mindpilot-30-day-ai-literacy`
   - Status: active
   - Duration: 30 days
   - Role: first AI literacy course
   - Current operator progress: lesson 2 active

2. `codex-inventor-kids`
   - Status: locked
   - Duration: 12 lessons
   - Role: next course after AI literacy
   - Opens after the base course is complete

## Product routes

```text
/courses
/operator/courses
/admin/courses
```

## Login rule

MindPilot now uses one login screen:

```text
/login
```

The user does not choose a role. The system resolves the role from the account identifier and sends
the user to the correct dashboard:

- parent account -> `/parent/dashboard`
- operator account -> `/operator/dashboard`
- admin account -> `/admin/safety`

The old `/operator/login` route redirects to `/login`.

## Next backend step

When Supabase auth is connected, replace the demo account resolver in:

```text
mindpilot/app/app/lib/auth.ts
```

with a server-side profile lookup:

```text
auth.users -> profiles.role -> role-specific dashboard
```

Role selection must remain server-controlled. The user should never choose parent/operator/admin
manually during login.
