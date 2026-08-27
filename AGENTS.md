# Fiysam Studio — Agent Instructions

## Before changes

1. Inspect the relevant implementation.
2. Identify the smallest set of files that need to change.
3. Check existing components, tokens, utilities, and patterns before creating new ones.
4. For substantial design or architectural changes, explain the approach before implementation.

## During changes

- Keep changes scoped to the requested task.
- Preserve existing architecture unless there is a clear reason to change it.
- Prefer reusable patterns over one-off duplication.
- Reuse existing dependencies.
- Do not introduce dependencies without justification.
- Keep TypeScript strict and type-safe.
- Preserve responsive behavior.
- Preserve accessibility.
- Use semantic HTML.
- Use Lucide React for interface icons; do not use emoji as UI icons.
- Do not invent business facts, products, clients, testimonials, metrics, or case studies.
- Never expose secrets.
- Do not modify `.env` files unless explicitly instructed.
- Do not make destructive changes.
- Do not commit or push unless explicitly instructed.

## Design guardrails

Fiysam Studio shares Fiysam's brand DNA but should not look like the Fiysam corporate website.

Use the corporate identity as a foundation, not a template.

Favor:

- editorial/product-lab layouts
- strong typography
- controlled asymmetry
- negative space
- authentic product artifacts
- technical detail
- purposeful motion
- restrained amber accents

Avoid:

- generic SaaS layouts
- generic agency sections
- repetitive card grids
- excessive gradients
- excessive amber
- fake portfolio content
- decorative complexity without purpose

## After changes

Run the relevant checks available in the repository.

Review the final diff for:

- unrelated changes
- accidental deletions
- accessibility regressions
- responsive issues
- unnecessary complexity

Report:

- files changed
- what changed
- checks performed
- remaining concerns
