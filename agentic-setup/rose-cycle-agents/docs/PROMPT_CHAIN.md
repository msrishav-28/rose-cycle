# PROMPT_CHAIN.md - Ready-To-Use Multi-Agent Command Prompts

Use these prompts in order for a strict handoff workflow.
Replace placeholders in ALL_CAPS before sending.

## 1) Orchestrator Kickoff Prompt

Role: Orchestrator
Feature: FEATURE_NAME
Goal: BUSINESS_GOAL
Constraints: CONSTRAINTS

Read AGENTS.md, docs/PROJECT_STATE.md, docs/ARCHITECTURE.md.
Produce:
1. Sequenced task list with dependencies.
2. Owner role for each task.
3. Required review gates (medical, UI/UX, security, backend).
4. Validation plan per task.
5. Definition of done per task.
6. Update plan snippet ready to paste into docs/PROJECT_STATE.md.

## 2) Backend Engineer Prompt

Role: Backend Engineer
Task: BACKEND_TASK

Read AGENTS.md, docs/PROJECT_STATE.md, docs/API_SPEC.md, docs/ARCHITECTURE.md.
Implement the task with smallest safe changes.
Then provide:
1. Files changed.
2. API contract impact.
3. Validation steps and results.
4. Any blocker or follow-up.
5. Exact PROJECT_STATE changelog entry.

## 3) Security Auditor Prompt

Role: Security Auditor
Scope: SECURITY_SCOPE

Read AGENTS.md, docs/PROJECT_STATE.md, docs/MEDICAL_GUIDELINES.md, docs/ARCHITECTURE.md.
Review auth, sensitive data handling, CORS, secret handling, and model prompt privacy.
Return:
1. Findings with severity.
2. Required fixes.
3. Verdict: APPROVED, NEEDS_CHANGES, or BLOCKED.
4. PROJECT_STATE security note.

## 4) NLP Engineer Prompt

Role: NLP Engineer
Task: NLP_TASK

Read AGENTS.md, docs/PROJECT_STATE.md, docs/NLP_SPEC.md, docs/MEDICAL_GUIDELINES.md.
Implement with medical-safe output constraints and fallback behavior.
Return:
1. Files changed.
2. Prompt or routing changes.
3. Safety checks performed.
4. Validation results.
5. PROJECT_STATE update entry.

## 5) Medical Advisor Prompt

Role: Medical Advisor
Scope: MEDICAL_SCOPE

Read AGENTS.md, docs/MEDICAL_GUIDELINES.md, docs/PROJECT_STATE.md.
Review all changed health-facing text and outputs.
Return using this format:
MEDICAL REVIEW: ITEM_NAME
- Safety risk: low/medium/high
- Diagnostic language found: yes/no
- Missing disclaimers: yes/no
- Escalation guidance adequate: yes/no
- Required edits
- Verdict: APPROVED/NEEDS_CHANGES/BLOCKED

## 6) Frontend Engineer Prompt

Role: Frontend Engineer
Task: FRONTEND_TASK

Read AGENTS.md, docs/PROJECT_STATE.md, docs/DESIGN_SYSTEM.md, docs/API_SPEC.md.
Implement UI and integration changes.
Return:
1. Files changed.
2. UX impact summary.
3. Error/loading state behavior.
4. Validation results (lint/build/manual).
5. PROJECT_STATE update entry.

## 7) UI/UX Guardian Prompt

Role: UI/UX Guardian
Scope: DESIGN_SCOPE

Read AGENTS.md, docs/DESIGN_SYSTEM.md, docs/PROJECT_STATE.md.
Review changed screens/components.
Return:
DESIGN REVIEW: ITEM_NAME
- Passes
- Issues
- Accessibility risks
- Consistency risks
- Verdict: APPROVED/NEEDS_CHANGES/BLOCKED

## 8) QA Engineer Prompt

Role: QA Engineer
Scope: QA_SCOPE

Read AGENTS.md, docs/PROJECT_STATE.md, docs/API_SPEC.md.
Run smoke and regression checks for touched flows.
Return:
QA REPORT: FEATURE_NAME
- Coverage scope
- Passes
- Fails
- Severity
- Repro steps
- Release recommendation: GO/GO_WITH_RISKS/NO_GO

## 9) Documentation Agent Prompt

Role: Documentation Agent
Scope: DOC_SYNC_SCOPE

Read AGENTS.md, docs/PROJECT_STATE.md, and all changed specs.
Update docs to reflect final merged behavior.
Return:
1. Files updated.
2. What changed in each doc.
3. Stale-reference check result.

## 10) Final Orchestrator Closeout Prompt

Role: Orchestrator
Feature: FEATURE_NAME

Read latest docs/PROJECT_STATE.md and all reviewer outputs.
Produce final closeout:
1. Completed tasks.
2. Deferred tasks.
3. Residual risks.
4. Next sprint proposal (top 3 priorities).
