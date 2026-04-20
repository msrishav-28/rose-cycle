# AUTONOMOUS_RUNBOOK.md - Step-By-Step Guide For First-Time Autonomous Use

This guide explains exactly how to run the full RoseCycle agent system end to end.

## Who This Is For
You are new to high-autonomy coding and want a safe repeatable workflow.

## What This Setup Gives You
1. Clear role ownership (frontend, backend, NLP, medical, security, QA, docs, DevOps).
2. Strict review gates for medical and safety-sensitive work.
3. A source-of-truth documentation loop so the system does not forget project context.
4. A handoff chain that avoids random changes and rework.

## Files You Must Know
- AGENTS.md
- CLAUDE.md
- docs/PROJECT_STATE.md
- docs/ARCHITECTURE.md
- docs/API_SPEC.md
- docs/DESIGN_SYSTEM.md
- docs/MEDICAL_GUIDELINES.md
- docs/NLP_SPEC.md
- docs/PROMPT_CHAIN.md

## First-Time Setup (One-Time)

### Step 1: Open the project root
Open the rose-cycle workspace in VS Code.

### Step 2: Confirm docs exist
Verify the files listed above are present in agentic-setup/rose-cycle-agents.

### Step 3: Install project dependencies
Frontend:
- cd frontend
- npm install

Backend:
- cd backend
- pip install -r requirements.txt

### Step 4: Start local services for development
Backend:
- cd backend
- uvicorn app.main:app --reload

Frontend:
- cd frontend
- npm run dev

### Step 5: Read startup docs in order
1. AGENTS.md
2. docs/PROJECT_STATE.md
3. docs/ARCHITECTURE.md
4. Relevant domain docs for your task

## Day-To-Day Autonomous Workflow (Every Feature)

### Step 1: Start with Orchestrator
Use prompt 1 from docs/PROMPT_CHAIN.md.
This creates task order, owners, dependencies, and review gates.

### Step 2: Execute by owner sequence
Run specialist prompts in this order when relevant:
1. Backend Engineer
2. Security Auditor
3. NLP Engineer
4. Medical Advisor
5. Frontend Engineer
6. UI/UX Guardian
7. QA Engineer
8. Documentation Agent
9. Orchestrator closeout

Do not skip required review roles.

### Step 3: Validate before declaring done
Frontend changes:
- npm run lint (frontend)
- npm run build (frontend)

Backend changes:
- backend startup/import check
- endpoint smoke checks
- tests if available

### Step 4: Update docs as part of the same task
At minimum update docs/PROJECT_STATE.md.
If behavior changed, update corresponding spec docs too.

### Step 5: Close task only with evidence
Your closeout should include:
- Files changed
- Validation results
- Risk notes
- Follow-up items
- PROJECT_STATE entry

## How To Pick The Right Agent Quickly
- Routing/UI/forms/screen behavior -> Frontend Engineer
- Endpoints/auth/models/db behavior -> Backend Engineer
- Chat/model/prompt/routing behavior -> NLP Engineer
- Health language/disclaimer/escalation safety -> Medical Advisor
- Visual system/accessibility/mobile consistency -> UI/UX Guardian
- Security/privacy/auth boundary review -> Security Auditor
- Regression and release confidence -> QA Engineer
- Keeping docs synchronized -> Documentation Agent
- Planning and sequencing -> Orchestrator

## Safety Rules You Must Never Break
1. Never make diagnostic claims.
2. Never give medication/treatment advice.
3. Never skip medical review for health-facing changes.
4. Never change API contracts without API spec updates.
5. Never mark work complete without PROJECT_STATE updates.

## Common Failure Modes And Fixes

### Failure: Agent goes off-spec
Fix: Re-run Orchestrator prompt and enforce docs-read order.

### Failure: Changes keep breaking other layers
Fix: Split into smaller tasks and enforce owner sequence with review gates.

### Failure: Docs are stale
Fix: Run Documentation Agent prompt before closeout every time.

### Failure: Medical risk language slips in
Fix: Run Medical Advisor review before merge and add explicit disclaimer text.

## Recommended Weekly Cadence
- Daily: run task loop and update PROJECT_STATE.
- Twice weekly: run Security + QA focused review pass.
- Weekly: Orchestrator closes sprint and creates next sprint top 3 priorities.

## Your Fast Start Script For A New Feature
1. Open docs/PROMPT_CHAIN.md
2. Run prompt 1 (Orchestrator)
3. Execute specialist prompts in order
4. Validate
5. Update docs
6. Close with Orchestrator prompt 10

## Confidence Checklist Before You Ship
- Required reviewers completed
- Validation green
- Docs synchronized
- Known risks recorded
- Rollback note available

Last updated: 2026-04-13
