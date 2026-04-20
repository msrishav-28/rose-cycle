# NLP_SPEC.md - RoseCycle AI and NLP Specification

NLP Engineer and Medical Advisor co-own this document.

## 1. Scope
This spec covers:
- Chat behavior via WebSocket
- LangGraph state flow
- Model selection and fallback
- Medical safety constraints for generated responses

## 2. Current Implementation

### Entry point
- backend/app/api/v1/endpoints/chat.py

### Graph
- backend/app/agent/graph.py
- State fields:
  - messages
  - user_context
- Current flow:
  - START -> triage -> respond -> END
  - response node applies medical safety post-processing and appends disclaimer text

### LLM factory
- backend/app/agent/llm.py
- Current behavior:
  - DeepSeek adapter is used when DEEPSEEK_API_KEY is set.
  - HuggingFace adapter is used when HUGGINGFACE_API_KEY is set.
  - Deterministic placeholder fallback is used when providers are unavailable.

## 3. WebSocket Contract
Connection format:
- ws://127.0.0.1:8000/api/v1/chat/stream?token=<clerk_jwt>

Client sends:
{
  "message": "string"
}

Server returns:
{
  "type": "message",
  "content": "string"
}

Connection-level memory:
- Message history is currently kept in-memory per active websocket session.

## 4. Safety Rules For AI Output
- No diagnosis claims
- No medication advice
- No certainty framing for predictions
- Use supportive, non-judgmental language
- Include disclaimer language when output is interpreted as health insight

## 5. Prompt Policy
When implementing real model prompts:
1. Keep system instructions explicit and restrictive.
2. Include prohibited language rules.
3. Include escalation behavior for severe symptom language.
4. Avoid raw personal identifiers in prompt context.

## 6. Reliability Requirements
Planned behavior for production-ready NLP:
- Timeout and retry policy for model calls
- Deterministic fallback response when provider fails
- Structured response schema validation
- Logging that omits sensitive raw user text

## 7. Roadmap

### Phase 1
- Done: real provider adapters in llm.py.
- Done: configurable model routing by env.

### Phase 2
- Add structured triage node with intent classes:
  - education
  - logging support
  - cycle question
  - safety escalation

### Phase 3
- In progress: guardrail post-processor now handles banned phrase checks and disclaimer injection.
- Remaining: escalation annotation pipeline for emergency-intent responses.

## 8. Validation Plan
For any AI behavior change:
1. WebSocket smoke test
2. Prompt safety test cases
3. Failure path test (missing provider keys)
4. Manual review by Medical Advisor for health-sensitive outputs

## 9. Change Rule
Any change in model behavior, prompt policy, or payload structure must update this file and docs/PROJECT_STATE.md.

Last updated: 2026-04-13
