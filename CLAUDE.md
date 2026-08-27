# Fiysam Studio — Claude Instructions

## Project identity

Fiysam Studio is the software/product studio arm of Fiysam, based in Lagos, Nigeria.

Studio builds software products both for itself and for clients across sectors.

Core operating philosophy:

> Build. Ship. Learn. Double down on what works. Shut down what doesn't.

Fiysam Studio is part of the Fiysam brand family, but it is not a visual clone of the Fiysam corporate website.

## Brand relationship

Carry forward roughly 30–40% of Fiysam's established brand DNA:

- dark/obsidian foundation
- amber/gold accent
- confident typography
- technical precision
- strong contrast
- Nigerian/West African identity
- ambition and seriousness

The remaining 60–70% should be distinctly Studio.

Studio should feel:

- modern
- technical
- experimental
- intelligent
- entrepreneurial
- product-focused
- confident
- premium

Avoid:

- generic SaaS-template aesthetics
- generic software-agency aesthetics
- traditional consultancy language
- copying Fiysam corporate layouts/components
- exaggerated futuristic/AI-startup aesthetics
- visually noisy portfolios

## Business model

Studio has two sides:

1. Client engagements — building software solutions for organizations.
2. Studio ventures — identifying, building, testing, and scaling Studio-owned products.

The website must support both models without making Studio look like a conventional software agency.

## Current content truth

Studio does not currently have verified Studio-owned products that should be presented as launched products.

Do not invent:

- products
- projects
- clients
- testimonials
- metrics
- partnerships
- revenue
- user counts
- outcomes

Do not use fictional portfolio work as if it were real.

The site should be structured so real products, experiments, client engagements, and case studies can be added naturally as they exist.

## Design direction

Favor an editorial/product-lab aesthetic:

- strong typography
- controlled asymmetry
- generous negative space
- real product/interface artifacts
- technical annotations
- experiment and case-study structures
- intentional grids
- purposeful motion
- strong visual hierarchy

Do not make every section a repeated dark card with a border and amber accent.

Use amber as a precision accent, not as the default treatment for every important element.

Prefer authentic product interfaces, prototypes, diagrams, and project artifacts over generic stock imagery or emoji.

## Content voice

Write copy that is:

- direct
- concise
- confident
- intelligent
- practical
- product-oriented

Avoid empty phrases such as:

- innovative solutions
- transforming the future
- trusted technology partner
- cutting-edge digital transformation

unless specifically justified by context.

## Engineering rules

- Inspect existing implementation before making changes.
- Preserve good architecture and established patterns.
- Prefer the smallest appropriate change.
- Do not modify unrelated features.
- Reuse existing dependencies where appropriate.
- Do not add dependencies without a clear reason.
- Maintain responsive behavior across mobile, tablet, and desktop.
- Maintain accessibility and semantic HTML.
- Use Lucide icons rather than emoji for UI iconography.
- Never expose secrets or environment variables.
- Do not modify `.env` files unless explicitly instructed.
- Do not make destructive changes.
- Do not commit or push unless explicitly instructed.

## Repository context

The Studio project is a small Next.js App Router application using:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

Inspect the actual repository before assuming architecture.

Known areas identified during the repository audit that may require deliberate future work include:

- global container/padding strategy
- typography/font configuration
- duplicated service data
- work/project routing
- accessibility issues
- ESLint issues
- contact-form delivery
- redundant dependencies/configuration

Do not automatically fix these when working on an unrelated task.

## Working philosophy

Prefer useful, real software over decorative complexity.

Prefer evidence over impressive claims.

Prefer shipping over unnecessary abstraction.

The website should communicate the Studio's build/ship/learn philosophy through its structure and content, not merely by stating it.
