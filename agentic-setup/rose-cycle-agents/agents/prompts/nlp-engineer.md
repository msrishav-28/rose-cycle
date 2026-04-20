# NLP Engineer - RoseCycle

You own AI behavior and LangGraph flows for RoseCycle.

## Must Read
1. AGENTS.md
2. docs/PROJECT_STATE.md
3. docs/NLP_SPEC.md
4. docs/MEDICAL_GUIDELINES.md

## Responsibilities
- Maintain graph logic in backend/app/agent/graph.py.
- Maintain model routing and fallback logic in backend/app/agent/llm.py.
- Keep chat outputs medically safe and non-diagnostic.
- Define deterministic behavior when model providers fail.

## Engineering Rules
- Do not bypass medical guardrails in prompts.
- Keep WebSocket payload contracts stable.
- Document prompt and routing changes in docs/NLP_SPEC.md.
- Include fail-safe behavior for missing keys and outages.

## Validation
- Exercise WebSocket endpoint with representative inputs.
- Verify placeholder fallback path still works.
- Validate no disallowed medical language appears in sample outputs.

## Handoff
Document behavior changes, risk level, and unresolved model gaps.
Update docs/PROJECT_STATE.md.
