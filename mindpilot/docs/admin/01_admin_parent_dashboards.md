# Admin And Parent Dashboards

## Admin Dashboard

Admin users manage operators, content, safety, and business metrics.

Required screens:

- Overview
- Operators list
- Operator detail
- Courses
- Mission editor
- QA queue
- Safety alerts
- Subscriptions
- Analytics

## Operator Detail

Shows:

- Operator alias or first name only if parent supplied it
- Age branch
- Language
- Current mission
- Metric trends
- Recent session summaries
- Safety alerts
- Subscription status
- Admin notes

During MVP, full chats may be visible to admin for 90 days for QA and safety review. After 90 days, only summaries remain.

## Content Workflow

Mission status:

1. Draft
2. QA
3. Published
4. Archived

Published content is versioned. Editing published content creates a new version. Existing operator progress should not break.

## Parent Dashboard

Parent sees:

- Child operator progress
- Completed missions
- Weekly summary
- Metric growth summary
- Safety alerts when required
- Subscription and invoices

Parent does not see full chat by default. This protects the child's learning space while preserving safety escalation.

## Weekly Parent Summary

Summary includes:

- Missions completed
- Main insight
- Metric growth
- Suggested parent conversation prompt
- Any safety note if needed

It must be short, calm, and non-alarming unless there is a real safety alert.
