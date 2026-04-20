# CLAUDE.md - RoseCycle Session Bootstrap

Use this file as the startup checklist for every RoseCycle coding session.

## Read First
1. AGENTS.md
2. docs/PROJECT_STATE.md
3. docs/ARCHITECTURE.md
4. The domain spec you are touching (API, DESIGN_SYSTEM, MEDICAL_GUIDELINES, NLP_SPEC)

## Session Rules
- Do not start coding before reading the current project state.
- Keep edits small and verifiable.
- If behavior changes, update the corresponding spec in this folder.
- Always update docs/PROJECT_STATE.md at the end of work.

## Stack Reality Check
- Frontend: React + Vite (not Next.js)
- Backend: FastAPI + SQLAlchemy (not Fastify/Prisma)
- AI: LangGraph chat pipeline with placeholder model fallback

## Minimum Validation
- Frontend changes: npm run lint and npm run build in frontend/
- Backend changes: run backend runtime/import checks and tests if available

## Medical Guardrails
- No diagnosis claims
- No treatment or medication advice
- Include disclaimer language for AI health insights

## Completion Checklist
- Code complete
- Validation complete
- docs/PROJECT_STATE.md updated
- Any changed contract documented in corresponding spec

Last updated: 2026-04-12
