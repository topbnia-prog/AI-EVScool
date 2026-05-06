# Mission Template

Every mission must use the same structure so learning, UX, metrics, and AI mentor behavior remain predictable.

## Required Fields

- `course_id`
- `mission_number`
- `status`: draft, qa, published, archived
- `age_branch`: junior, senior, both
- `language`: he, ru, en
- `title`
- `operator_goal`
- `mentor_goal`
- `metric_focus`
- `estimated_minutes`
- `unlock_requirements`

## Required Learning Blocks

1. Hook
   - A short question or scenario that activates curiosity.

2. Concept
   - Short educational explanation.
   - Junior should be about 30% shorter than Senior.

3. Visual
   - Diagram, card, comparison, or HUD-style element.
   - Avoid cartoon characters.

4. Challenge
   - The child does something, not only reads.

5. Simulation
   - Check understanding through a scenario.
   - This is not a grade.

6. Reflection
   - The child writes what they noticed, understood, or would do next.

7. Metric Update
   - Rubric-based scoring updates one or more operator metrics.

8. Mentor Rule
   - The exact boundary for what the AI mentor may and may not say in this mission.

## QA Checklist

Before publishing, every mission must pass:

- No real child names or private examples
- No instruction to use AI for cheating
- Clear refusal behavior for homework-copy requests
- One focused learning goal
- One metric focus
- Short enough for mobile
- Has active challenge
- Has reflection
- Has Junior/Senior fit
- Does not ask the model to reveal hidden chain-of-thought
- Safety fallback exists
