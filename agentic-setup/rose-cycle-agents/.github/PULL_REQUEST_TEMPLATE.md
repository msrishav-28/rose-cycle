## Summary
Describe what changed and why.

## Scope
- Feature/bug/chore:
- Risk level: low | medium | high
- Areas touched: frontend | backend | ai | docs | infra | security

## Architecture/Contract Impact
- [ ] No API contract changes
- [ ] API contract changed and docs/API_SPEC.md updated
- [ ] AI behavior changed and docs/NLP_SPEC.md updated
- [ ] Medical copy behavior changed and docs/MEDICAL_GUIDELINES.md updated
- [ ] UI pattern changed and docs/DESIGN_SYSTEM.md updated

## Validation Performed
### Frontend
- [ ] npm run lint (frontend)
- [ ] npm run build (frontend)

### Backend
- [ ] Backend startup/import check
- [ ] Endpoint smoke checks for modified routes
- [ ] Tests (if present)

### Manual
- [ ] Critical user flow checked
- [ ] Mobile viewport checked for UI changes

## Required Reviews
- [ ] Medical Advisor (health-facing changes)
- [ ] UI/UX Guardian (new UI patterns)
- [ ] Security Auditor (auth/privacy/secrets/data handling)
- [ ] Backend Engineer (schema/contract changes)
- [ ] QA Engineer (release-risk changes)

## Documentation Sync
- [ ] docs/PROJECT_STATE.md updated
- [ ] Relevant specs updated for changed behavior

## Rollback Notes
Explain how to revert safely if this change causes issues.
