# DESIGN_SYSTEM.md - RoseCycle

This document codifies the visual and interaction system currently used in the app.
UI/UX Guardian owns this document.

## 1. Product Tone
RoseCycle should feel:
- Calm
- Trustworthy
- Supportive
- Modern but warm

Avoid harsh clinical presentation for routine wellness flows.

## 2. Token Source Of Truth
Primary token definitions live in:
- frontend/src/index.css

Rule:
- Prefer tokens and semantic classes over one-off literal colors.
- If a new reusable token is needed, add it centrally before using it across pages.

## 3. Core Color Tokens In Use
Representative tokens (see index.css for full set):
- --color-primary
- --color-primary-container
- --color-secondary
- --color-secondary-container
- --color-tertiary
- --color-tertiary-container
- --color-surface
- --color-surface-container
- --color-surface-container-low
- --color-surface-container-high
- --color-on-surface
- --color-on-surface-variant
- --color-outline
- --color-error

## 4. Typography
Current font tokens:
- Headline: Noto Serif
- Body: Manrope
- Label: Manrope

Brand treatments in UI:
- Instrument Serif appears in brand/hero areas.

Guidelines:
- Use headline style for major page identity and section anchors.
- Use body for readability-heavy blocks.
- Keep label styles compact and high contrast.

## 5. Spacing And Shape
- Prefer 4px rhythm increments through utility classes.
- Rounded, soft geometry is the default visual language.
- Use generous whitespace around sensitive health content.

## 6. Interaction Patterns

### Navigation
- Top nav for identity and profile/context actions.
- Bottom nav for primary app movement.
- Active tab should be visually unambiguous.

### Cards
- Surface and glass-card variants are both used.
- Cards must clearly separate content priority and actions.

### Forms
- Inputs should have clear labels or obvious context.
- Include explicit save feedback for user actions.

## 7. Accessibility Requirements
- Minimum target size around 44x44 for touch controls when practical.
- Ensure sufficient contrast for all text and action elements.
- Never rely on color only for meaning (include icon/text cues).
- Keep keyboard focus visibility for interactive controls.

## 8. Responsive Behavior
- Mobile-first defaults.
- Preserve readability at narrow widths.
- Avoid layout breakage in bottom navigation and fixed headers.

## 9. Design Review Checklist
Use this on every significant UI change:
1. Token usage consistent with index.css
2. Typography hierarchy clear
3. Navigation consistency preserved
4. Accessibility checks completed
5. Mobile behavior verified
6. Any new pattern documented here

## 10. Current UI Debt (Known)
- Multiple pages include hardcoded colors not tied to reusable tokens.
- Some pages duplicate top/bottom nav shells rather than reusing shared layout.
- Interaction patterns vary across feature pages.

## 11. Next Improvements
1. Introduce shared component primitives for buttons, cards, and form controls.
2. Consolidate duplicated nav markup into reusable components.
3. Standardize action states (hover, disabled, loading) across pages.

Last updated: 2026-04-12
