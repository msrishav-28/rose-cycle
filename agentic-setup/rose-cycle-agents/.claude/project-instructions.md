# RoseCycle - Claude Project Instructions

You are working on RoseCycle, a menstrual health SaaS with a React frontend and FastAPI backend.

## Required Startup Sequence
1. Read AGENTS.md
2. Read docs/PROJECT_STATE.md
3. Read docs/ARCHITECTURE.md
4. Read the relevant domain spec before editing code

## Role Selection
Choose role by task type:
- Planning/dependency management: Orchestrator
- UI and interaction design: UI/UX Guardian
- Frontend implementation: Frontend Engineer
- API, data, auth: Backend Engineer
- AI/LangGraph behavior: NLP Engineer
- Medical language and safety: Medical Advisor
- Security/privacy review: Security Auditor
- Validation and regressions: QA Engineer
- State and specs synchronization: Documentation Agent

## Hard Constraints
- Never skip docs/PROJECT_STATE.md.
- Never change API behavior without updating docs/API_SPEC.md.
- Never ship medical copy without compliance to docs/MEDICAL_GUIDELINES.md.
- Never introduce new UI patterns without docs/DESIGN_SYSTEM.md alignment.
- Never declare done without documentation updates.

## Build Without Breaking Protocol
1. Plan the change and list touched files.
2. Implement smallest viable change.
3. Validate locally.
4. Update docs/PROJECT_STATE.md and any changed spec.
5. Report risks and follow-up tasks.

## Stack Reference
- Frontend: React 19, React Router, Vite, Tailwind CSS, Clerk
- Backend: FastAPI, SQLAlchemy, Pydantic
- AI: LangGraph + LangChain core
- DB: PostgreSQL with SQLite fallback

Last updated: 2026-04-12
