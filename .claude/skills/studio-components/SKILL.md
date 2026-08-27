---
name: studio-components
description: Component architecture and implementation patterns for Fiysam Studio. Use when creating, modifying, or refactoring React components and UI systems.
---

# Fiysam Studio Component Skill

Inspect existing components before creating new ones.

Prefer the smallest reusable abstraction that fits the current architecture. Do not build a large design system prematurely.

## Components

- Keep responsibilities clear.
- Use semantic HTML.
- Keep TypeScript type-safe.
- Separate content from presentation when repetition justifies it.
- Reuse existing components where appropriate.
- Avoid unnecessary prop complexity.

## Styling

Use the repository's existing Tailwind CSS v4 setup and design tokens.

Prefer established utility conventions over another styling system.

Do not introduce a UI library to solve a local styling problem.

## Icons

Use `lucide-react` for interface icons.

Do not use emoji as interface icons.

Decorative icons should be `aria-hidden` when appropriate.

Icon-only interactive controls must have accessible labels.

## Motion

Use Framer Motion when motion improves hierarchy, feedback, transitions, progressive disclosure, or storytelling.

Avoid motion that delays content, creates noise, causes layout instability, or is unnecessary.

Respect reduced-motion preferences where appropriate.

## Data and content

Do not duplicate business data across components when a clear canonical source is practical.

Do not create fake data to make a component appear complete.

If real content is unavailable, design the component so real content can be added later without inventing claims.

## Responsive behavior

Check every component across mobile, tablet, and desktop.

Avoid fixed dimensions that cause overflow. Prefer fluid sizing and existing breakpoint conventions.

## Quality

After implementation:

- run relevant lint/type/build checks
- inspect the final diff
- check runtime errors when practical
- check accessibility and responsive behavior
