# AI Provider Strategy

MindPilot must not be hard-wired to one AI company.

The product logic is the mentor protocol, mission state, safety rules, scoring rubrics, parent consent, and admin review. The model provider is a replaceable adapter.

## Current Provider Switch

Use environment variables:

```env
AI_PROVIDER=mock
AI_MODEL=
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
GEMINI_API_KEY=
```

Supported provider IDs:

- `mock` for local development and tests
- `openai` for a production candidate with strong guardrail and structured-output support
- `anthropic` for Claude comparison tests
- `gemini` for Google Gemini comparison tests
- `custom` for another API or a future internal mentor service

## Selection Rule

Do not choose a provider by brand preference. Choose by mentor behavior:

- asks questions instead of giving answers
- refuses homework completion
- stays inside the current mission
- handles Hebrew and Russian cleanly
- outputs structured metric data reliably
- supports safety escalation rules
- keeps monthly cost inside the subscription margin

## Product Rule

Any child-facing AI call must pass through the MindPilot mentor engine. UI pages and mission code must not call a provider SDK directly.
