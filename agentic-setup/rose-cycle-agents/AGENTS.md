# AGENTS.md - RoseCycle Agent Operating System

This repository hosts RoseCycle, a menstrual health SaaS in active development.
This file is the operating contract for all coding agents and contributors.

## Mission
Build RoseCycle quickly without build-break loops by enforcing:
1. Source-of-truth documentation.
2. Role ownership and review gates.
3. Small, verified, documented changes.

## Mandatory Read Order
Before changing code, always read in this order:
1. docs/PROJECT_STATE.md
2. docs/ARCHITECTURE.md
3. The domain spec you are touching:
- docs/API_SPEC.md
- docs/DESIGN_SYSTEM.md
- docs/MEDICAL_GUIDELINES.md
- docs/NLP_SPEC.md

## Actual Stack (Current)
- Frontend: React 19, React Router 7, Vite 8, Tailwind CSS 4, Clerk auth
- Backend: FastAPI, SQLAlchemy, Pydantic v2, Uvicorn
- AI: LangGraph + LangChain core, WebSocket chat endpoint
- Database: PostgreSQL (preferred) with SQLite fallback for local dev
- Auth: Clerk JWT validation through JWKS

## Repository Map
- frontend/: SPA client app
- backend/: FastAPI service
- docs/: user-facing project docs in root repo
- agentic-setup/rose-cycle-agents/: agent governance package (this folder)

## Operator Guides
- docs/AUTONOMOUS_RUNBOOK.md: first-time end-to-end workflow guide
- docs/PROMPT_CHAIN.md: copy-paste role prompts for strict handoff execution

## Agent Roster

### Orchestrator
- Owns task breakdown, dependency order, and sprint sequencing.
- Must keep docs/PROJECT_STATE.md current.

### Frontend Engineer
- Owns routes, pages, shared layout, UI state, and API wiring in frontend/src/.
- Must follow docs/DESIGN_SYSTEM.md.

### Backend Engineer
- Owns API contracts, auth middleware, models, schemas, and DB behavior in backend/app/.
- Must update docs/API_SPEC.md before or with endpoint changes.

### NLP Engineer
- Owns backend/app/agent/* and AI behavior.
- Must follow docs/NLP_SPEC.md and docs/MEDICAL_GUIDELINES.md.

### Medical Advisor
- Owns medical language safety, disclaimers, escalation copy, and symptom taxonomy policy.
- Reviews all user-facing health claims and AI health outputs.

### UI/UX Guardian
- Owns visual coherence, mobile-first behavior, accessibility, and token usage.
- Reviews all new UI patterns before merge.

### Security Auditor
- Reviews auth, sensitive data handling, secret usage, CORS, and privacy-impacting changes.

### QA Engineer
- Owns test plans, smoke checks, regression checklists, and release confidence.

### Documentation Agent
- Synchronizes docs after every meaningful change.
- Never leaves docs/API_SPEC.md and docs/PROJECT_STATE.md stale.

### DevOps Engineer
- Owns deployment workflow, env conventions, and runtime reliability.

## Task Lifecycle (Mandatory)
1. Read current state and relevant spec docs.
2. State plan: files to touch, risk class, validation plan.
3. Implement smallest useful change.
4. Validate:
- Frontend touched: run npm run lint and npm run build in frontend/
- Backend touched: run basic import/runtime checks and backend tests if present
5. Update docs/PROJECT_STATE.md with:
- What changed
- What remains
- Any blockers
6. If API, UX pattern, or medical behavior changed, also update the corresponding spec doc.

## Non-Negotiable Safety Rules
- Never diagnose conditions.
- Never provide medication or treatment instructions.
- Never present predictions as guarantees.
- Never claim contraceptive reliability.
- Never log or expose secrets, tokens, or personally identifiable health data in prompts/logs.
- Never change endpoint behavior without updating docs/API_SPEC.md.
- Never add hardcoded one-off colors where tokens already exist.
- Never mark work complete without updating docs/PROJECT_STATE.md.

## Required Review Gates
- Medical Advisor required when health copy, symptom interpretation, or AI health content changes.
- UI/UX Guardian required when new components/patterns are introduced.
- Backend Engineer required when schema or endpoint contracts change.
- Security Auditor required when auth, data sensitivity, or external API handling changes.

## Handoff Format
Every completed task must include:
- Scope completed
- Files changed
- Validation performed
- Risks and follow-ups
- PROJECT_STATE update entry

## Blocker Protocol
If blocked:
1. Do not guess.
2. Record blocker in docs/PROJECT_STATE.md under Active Blockers.
3. Propose 1-2 safe paths forward.
4. Hand back to Orchestrator.

## Definition Of Done
Work is done only when all are true:
- Code implemented
- Validation completed
- Required reviewers identified or completed
- Specs updated if behavior changed
- docs/PROJECT_STATE.md updated

Last updated: 2026-04-12
