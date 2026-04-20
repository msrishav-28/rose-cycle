# ARCHITECTURE.md - RoseCycle

This document describes the real architecture currently present in this repository.
It is intentionally implementation-grounded and must be updated when behavior changes.

## 1. System Summary
RoseCycle is a menstrual health SaaS with:
- A React SPA frontend (frontend/)
- A FastAPI backend (backend/)
- SQLAlchemy persistence (PostgreSQL preferred, SQLite fallback)
- Clerk-based auth integration
- LangGraph-powered chat pipeline over WebSocket

## 2. Current Stack

### Frontend
- React 19
- React Router 7
- Vite 8
- Tailwind CSS 4
- Clerk React SDK
- Axios

### Backend
- FastAPI
- Uvicorn
- SQLAlchemy 2.x
- Pydantic v2
- python-jose for JWT verification
- LangGraph + LangChain core for AI flow

### Data and Auth
- Database URL configurable via env
- PostgreSQL expected for deployed environments
- SQLite fallback for local development
- Clerk JWT validation through JWKS endpoint

## 3. Repository Layout (Actual)
- backend/app/main.py: app setup, CORS, health endpoints
- backend/app/api/v1/api.py: API router composition
- backend/app/api/v1/endpoints/logs.py: daily log create/read
- backend/app/api/v1/endpoints/cycle.py: data-driven cycle insights endpoint
- backend/app/api/v1/endpoints/chat.py: WebSocket chat endpoint with token auth support
- backend/app/models/models.py: SQLAlchemy models (User, DailyLog)
- backend/app/schemas/schemas.py: Pydantic request/response models
- backend/app/middleware/auth.py: Clerk token verification
- backend/app/agent/graph.py: LangGraph flow
- backend/app/agent/llm.py: model factory with DeepSeek/HF adapters and deterministic fallback
- frontend/src/App.jsx: route map and auth-gated areas
- frontend/src/components/Layout.jsx: top/bottom nav shell
- frontend/src/components/ProtectedRoute.jsx: Clerk gate + dev fallback
- frontend/src/pages/*: route-level UI features
- frontend/src/index.css: design tokens and base styling

## 4. Frontend Architecture

### Route groups
Public:
- /
- /v1

Authenticated onboarding:
- /onboarding

Authenticated app shell routes:
- /home
- /daily-log
- /calendar-insights
- /ai-agent-chat
- /wellness-education-hub
- /settings-privacy
- /guided-breathwork
- /hormonal-skin-tracker
- /luteal-wellness-plan
- /doctors-report-export

### State and data strategy
- Local component state dominates current implementation.
- API access is direct through axios in pages.
- No centralized API client abstraction yet.

## 5. Backend Architecture

### API composition
- All v1 routes are mounted under /api/v1.
- Router modules:
  - logs
  - cycle
  - chat

### Data model
User:
- id (PK)
- clerk_id (unique)
- email (unique)
- preferences (JSON)
- created_at

DailyLog:
- id (PK)
- user_id (FK -> users.id)
- date
- flow
- mood
- pain_level
- notes
- created_at

### Service behavior
- logs endpoint upserts daily records by user/date.
- cycle insights endpoint computes values from stored flow/mood/pain history.
- chat endpoint maintains websocket-local message history and invokes LangGraph with authenticated user context.

## 6. AI Architecture

### Current graph
- Graph state: messages + user_context
- Nodes:
  - triage (placeholder pass-through)
  - respond (LLM invoke)
- Flow: START -> triage -> respond -> END

### Model selection
- If DEEPSEEK_API_KEY exists: DeepSeek chat completion adapter is used.
- Else if HUGGINGFACE_API_KEY exists: HuggingFace inference adapter is used.
- Else: deterministic placeholder fallback is used.

## 7. Authentication Flow
1. Frontend gets token via Clerk SDK.
2. Frontend sends Bearer token to backend endpoints.
3. Backend middleware fetches JWKS from Clerk.
4. Backend validates token and extracts sub as clerk_id.
5. Frontend sends websocket token via query string for chat stream auth.
6. Dev fallback returns placeholder user id when Clerk frontend API is not configured.

## 8. Environment Variables
Backend (from backend/app/core/config.py):
- PROJECT_NAME
- DATABASE_URL
- CLERK_SECRET_KEY
- CLERK_FRONTEND_API
- HUGGINGFACE_API_KEY
- DEEPSEEK_API_KEY
- HUGGINGFACE_MODEL
- DEEPSEEK_MODEL
- BACKEND_CORS_ORIGINS
- CLERK_JWKS_CACHE_TTL_SECONDS

Frontend:
- VITE_CLERK_PUBLISHABLE_KEY

## 9. Known Gaps (As Of 2026-04-13)
- No explicit AI medical guardrail post-processor yet.
- Limited automated tests.
- Some feature pages remain UI-first prototypes and are not yet API-backed.
- CORS is env-driven, but production origin hardening still depends on deploy configuration.

## 10. Target Near-Term Architecture
1. Add service-layer abstraction in backend for logs/insights/chat.
2. Add confidence/evidence metadata to insight responses.
3. Add explicit AI safety guardrails and escalation checks for medical language.
4. Add migration flow and explicit schema management strategy.
5. Add CI checks for frontend and backend quality gates.

## 11. Change Policy
Any architecture-impacting change must update this document and docs/PROJECT_STATE.md in the same task.

Last updated: 2026-04-13
