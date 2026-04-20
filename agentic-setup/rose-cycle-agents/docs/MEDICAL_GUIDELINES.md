# MEDICAL_GUIDELINES.md - RoseCycle Safety Policy

RoseCycle is a health tracking and education product.
It is not a diagnostic or treatment tool.

Medical Advisor owns this document.

## 1. Core Principle
We describe patterns in user data.
We do not diagnose, prescribe, or guarantee outcomes.

## 2. Allowed Language
Examples:
- "Your logged data suggests a pattern worth monitoring."
- "If this persists or worsens, consider speaking with a clinician."
- "This prediction is an estimate and may change with more data."

## 3. Prohibited Language
Never output:
- Definitive diagnoses
- Medication recommendations
- Certainty claims for fertility, pregnancy, or contraception outcomes
- Dismissive statements about severe symptoms

## 4. Required Disclaimers

### AI Insight Disclaimer
"This insight is informational and based on logged data. It is not medical advice. Please consult a qualified healthcare professional for medical concerns."

### Prediction Disclaimer
"Cycle predictions are estimates, not guarantees, and should not be used as contraception guidance."

### Severe Symptom Prompt
"If your symptoms are severe, worsening, or affecting daily function, seek care from a qualified healthcare provider or urgent care service."

## 5. Escalation Triggers
Content that must trigger cautionary escalation language includes:
- Severe or escalating pain
- Very heavy bleeding
- Fainting/dizziness with concerning symptoms
- Self-harm or suicidal ideation
- Pregnancy emergency concerns

## 6. Inclusive Language Rules
- Prefer "you" or "people who menstruate" in generalized content.
- Do not assume gender identity.
- Avoid stigmatizing wording.

## 7. Data Sensitivity Rules
Treat menstrual health data as sensitive.
- Minimize retained personal content.
- Do not include identifiers in model prompts unless required.
- Avoid logging raw sensitive text in plaintext logs.

## 8. Medical Review Is Mandatory For
- New symptom interpretation logic
- AI prompt changes impacting health guidance
- Changes to disclaimer text
- New high-risk educational or advisory UI

## 9. Medical Review Template
MEDICAL REVIEW: <item>
- Risk level: low | medium | high
- Diagnostic language found: yes/no
- Required disclaimers present: yes/no
- Escalation guidance adequate: yes/no
- Verdict: APPROVED | NEEDS_CHANGES | BLOCKED

## 10. Emergency Handling Guidance
RoseCycle can direct users to seek urgent care but must not simulate emergency triage certainty.
Use supportive and urgent language without clinical overreach.

## 11. Change Rule
Any medical behavior change must update this document and docs/PROJECT_STATE.md.

Last updated: 2026-04-12
