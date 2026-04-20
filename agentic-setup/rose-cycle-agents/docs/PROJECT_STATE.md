# PROJECT_STATE.md - RoseCycle Build Tracker

Purpose: keep a single operational truth of what exists, what is partial, and what ships next.
Every completed task must update this file.

## Last Updated
2026-04-13

## Current Status Matrix

| Area | Status | Notes |
|---|---|---|
| Frontend Core Routing | In Progress | 13 routed pages are present; quality level varies by page |
| Frontend Data Integration | In Progress | Home, Calendar, Daily Log, and Chat use centralized API/WS base config; many pages remain static UX prototypes |
| Backend API | In Progress | Logs, chat stream, and cycle insights are functional with data-driven insight output |
| Database Model | In Progress | User + DailyLog models available; broader domain schema not implemented yet |
| Authentication | In Progress | Clerk token validation is active for HTTP and websocket channels with dev fallback |
| NLP / AI | In Progress | LangGraph flow active with DeepSeek/HuggingFace adapters plus deterministic fallback |
| Medical Safety Layer | Partial | Disclaimer patterns exist in some UI copy but not consistently enforced in code |
| Testing | Not Started | No comprehensive automated test suite |
| DevOps / CI | Not Started | No enforced pipeline for frontend/backend checks yet |
| Documentation Discipline | In Progress | Agent governance docs now aligned to real stack; continuous updates required |

## Built Features (Confirmed In Code)

### Frontend
- Public landing routes: / and /v1
- Auth-protected onboarding route
- Auth-protected app routes for dashboard, logging, calendar, chat, wellness, settings, report export
- Daily log form with flow, mood, pain, notes inputs
- Calendar page fetching logs and highlighting days
- Dashboard page fetching cycle insights
- Chat page connected to websocket stream

### Backend
- GET / and GET /health
- POST /api/v1/logs (create or update)
- GET /api/v1/logs (list user logs)
- GET /api/v1/cycle/insights (data-driven payload from stored log history)
- WS /api/v1/chat/stream (LangGraph invocation with websocket auth token support)
- Clerk JWT middleware and user scoping for protected HTTP routes

### AI Layer
- LangGraph state flow implemented
- DeepSeek and HuggingFace provider adapters implemented
- Deterministic fallback model path implemented when providers are unavailable

## Active Blockers
1. Lack of automated tests increases regression risk.
2. Emergency escalation annotation for high-risk chat inputs is not implemented yet.
3. Broader menstrual domain schema (cycles/symptoms exports) remains incomplete.
4. CI and monitoring hardening tasks remain.

## Priority Queue

### Priority 0 - Safety and Stability
1. Add backend error contract standardization.
2. Add explicit AI medical guardrail post-processor for chat responses.
3. Add security review pass for websocket auth and token transport.

### Priority 1 - Data Correctness
1. Define and implement migration strategy for expanding schema.
2. Add richer cycle-phase inference once cycle-specific tables are introduced.
3. Expand insights to include confidence and evidence fields.

### Priority 2 - AI Maturity
1. Implement DeepSeek/HuggingFace adapters in backend/app/agent/llm.py.
2. Add prompt safety filters and structured output constraints.
3. Introduce escalation detection for critical symptom language.

### Priority 3 - Quality and Delivery
1. Add backend tests (endpoint and auth behavior).
2. Add frontend test coverage for critical flows.
3. Add CI pipeline to run frontend and backend checks on PR.

## Sprint 1 - Owner-By-Owner Execution Plan

Sprint Window: 2026-04-13 to 2026-04-20
Status: Active

| Order | Owner | Task | Depends On | Review Gate | Acceptance Criteria |
|---|---|---|---|---|---|
| 1 | Backend Engineer | Enforce websocket auth in chat stream and bind session to clerk identity | None | Security Auditor | WS endpoint rejects unauthenticated connections and attaches user identity safely |
| 2 | Security Auditor | Review auth boundary and sensitive logging in chat flow | 1 | None | Security findings logged and all high issues resolved or blocked |
| 3 | Backend Engineer | Replace cycle insights placeholder with data-driven computation from daily logs | 1 | Medical Advisor | Insight fields are computed from user log history and contract stays stable |
| 4 | Medical Advisor | Approve wording for insight and severe symptom disclaimers | 3 | None | Approved language documented in MEDICAL_GUIDELINES and reflected in API behavior |
| 5 | NLP Engineer | Implement real provider adapters in llm factory with deterministic fallback | 1 | Security Auditor, Medical Advisor | Model routing works by env, fallback works without provider keys, safety guardrails applied |
| 6 | Frontend Engineer | Centralize API base URL config and add user-friendly error states on dashboard/log/calendar/chat | 3, 5 | UI/UX Guardian | Endpoints use env-aware base URL and major screens handle failure states clearly |
| 7 | UI/UX Guardian | Standardize disclaimer and warning UI presentation on insight/chat surfaces | 4, 6 | None | Disclaimer components are consistent, readable, and mobile-safe |
| 8 | QA Engineer | Execute regression and smoke suite for auth, logs, insights, and chat | 6, 7 | None | QA report produced with release recommendation and reproducible defects |
| 9 | DevOps Engineer | Add CI checks for frontend lint/build and backend startup/test smoke | 8 | Security Auditor | Pull requests run automated checks and fail fast on regressions |
| 10 | Documentation Agent | Sync API, NLP, medical, architecture, and project state docs after merged changes | 1-9 | None | All changed behavior reflected in docs with no stale references |

### Sprint 1 Exit Criteria
1. Websocket auth gap is closed.
2. Cycle insights are data-driven.
3. AI model routing is no longer placeholder-only.
4. Key screens show clear fail/error states.
5. CI guards are active for frontend and backend.
6. Docs remain synchronized with shipped behavior.

## Session Update Template
Use this template for each completed task:

[YYYY-MM-DD] <AgentRole>
- Scope: <what changed>
- Files: <paths>
- Validation: <commands/checks>
- Risks/Follow-up: <remaining concerns>

## Changelog

[2026-04-13] Backend Engineer
- Implemented websocket token authentication and user-bound context in chat stream endpoint.
- Replaced placeholder cycle insights with data-driven computation from stored logs.
- Implemented DeepSeek/HuggingFace adapters with deterministic fallback in LLM factory.
- Added AI response guardrail post-processing with banned phrase checks and disclaimer injection.
- Added schema validation for pain range (1-10), DB startup table bootstrap, env-driven CORS handling, and logs ordering.
- Added frontend env-driven API/WS base config and removed hardcoded localhost endpoints from active data pages.
- Validation: backend compile check passed, app import passed, health/insights/logs smoke tests passed, websocket chat smoke test passed.
- Validation: frontend lint passed and frontend production build passed after dependency install.

[2026-04-13] Orchestrator
- Created Sprint 1 owner-by-owner execution plan with dependency order and review gates.
- Set sprint exit criteria for auth, insights, NLP reliability, UX safety, QA, CI, and docs sync.

[2026-04-13] Documentation Agent
- Added first-time autonomous execution runbook and prompt chain references.
- Standardized setup usage guidance for orchestrated multi-agent execution.

[2026-04-12] Documentation Agent
- Rewrote agentic governance pack for RoseCycle actual stack.
- Expanded role prompts for orchestrator, frontend, backend, NLP, medical, UI/UX, QA, security, docs, and DevOps.
- Replaced generic template docs with implementation-grounded architecture/API/design/medical/NLP/state docs.

[2026-04-12] System Audit
- Confirmed codebase stack is React + Vite frontend and FastAPI + SQLAlchemy backend.
- Identified mismatch with prior template instructions that referenced a different architecture.

## Definition Of Done For Any Future Task
A task is not done unless:
1. Code change is implemented.
2. Relevant validation is executed.
3. This file is updated.
4. Related spec docs are updated when behavior/contracts changed.

Last updated by: Documentation Agent
