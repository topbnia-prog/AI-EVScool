# Database Schema Draft

## Core Tables

### parents

- id
- email
- display_name
- locale
- created_at

### operators

- id
- parent_id
- display_name
- age
- age_branch: junior, senior
- language
- pin_hash
- streak_current
- streak_best
- streak_freeze_available
- last_activity_date
- created_at

### pilot_profiles

- id
- operator_id
- thinking_style
- ai_level
- goal
- interests_json
- metric_ai_understanding
- metric_critical_thinking
- metric_prompt_quality
- metric_verification
- metric_error_detection
- metric_autonomy
- updated_at

### courses

- id
- slug
- title
- status
- default_language
- created_at

### missions

- id
- course_id
- mission_number
- status
- current_version_id
- created_at

### mission_versions

- id
- mission_id
- version_number
- age_branch
- language
- title
- hook
- concept
- visual_spec
- challenge
- simulation
- reflection_prompt
- metric_focus
- mentor_rule
- qa_status
- published_at

### mission_progress

- id
- operator_id
- mission_id
- mission_version_id
- current_step
- status
- reflection_answer
- completed_at
- attempts

### mentor_sessions

- id
- operator_id
- mission_id
- messages_json
- started_at
- expires_at

Full messages expire after 90 days.

### session_summaries

- id
- operator_id
- mission_id
- session_date
- depth_score
- key_insight
- metric_delta_json
- flags_json

### safety_alerts

- id
- operator_id
- mentor_session_id
- severity
- category
- summary
- status
- created_at
- resolved_at

### xp_events

- id
- operator_id
- amount
- reason
- created_at

### achievements

- id
- operator_id
- achievement_id
- unlocked_at

### subscriptions

- id
- parent_id
- provider
- provider_customer_id
- provider_subscription_id
- status
- plan
- current_period_end

## RLS Rule

Parents can only access their own account and operators. Operators can only access their own learning surface. Admin access must use separate role checks.
