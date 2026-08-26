# Fiysam Studio Repository Audit

No files were modified during the audit. The audit used read-only inspection and static TypeScript/ESLint checks; no build, dev server, package installation, or deployment action was run.

## 1. Executive summary

**Confirmed facts:** Fiysam Studio is currently a small Next.js App Router marketing site: five public pages, one contact-form API endpoint, and 10 shared/presentation components. It is a work-in-progress on top of a Create Next App baseline; the current working tree has substantial uncommitted additions and modifications.

**Primary finding:** the project has a workable technical base, but the site is currently closer to a generic dark software-agency template than a distinct product studio. The visual language is consistently applied in a narrow sense—dark navy, amber, cards, grids, chips—but too repetitive and unsupported by real product imagery, case-study evidence, or a stronger editorial hierarchy.

**Most important technical findings:** TypeScript passes, but ESLint currently fails with 11 errors and one warning. Project detail links point to routes that do not exist. The contact endpoint validates input but only logs submissions; it does not deliver or persist them. Several installed dependencies are unused.

## 2. Tech stack

| Area | Confirmed repository fact |
|---|---|
| Framework | Next.js `16.2.12`, App Router |
| React | React and React DOM `19.2.4` |
| TypeScript | TypeScript `^5`; strict mode enabled |
| Package manager | npm, confirmed by `package-lock.json` lockfile v3 |
| Build tooling | Next.js build/dev/start scripts; PostCSS |
| Styling | Tailwind CSS `^4` via `@tailwindcss/postcss`, plus `app/globals.css` global component classes |
| Fonts | Google-hosted Syne and DM Sans through `next/font/google` |
| Motion | Framer Motion `^12.43.0` |
| Icons | Lucide React; inline SVG social icons; emoji service/project imagery |
| UI library | None |
| State | Local React `useState` only, in navigation and contact form |
| Backend | One route handler: `POST /api/contact` |
| Email | `nodemailer` and its types are installed but not used |
| Deployment config | No Vercel, Netlify, Docker, Cloudflare, or CI configuration found |
| Environment structure | No `.env*` files currently exist. `.gitignore` excludes all `.env*` files; there is no `.env.example` or documented variable contract. |
| Tests | No test framework, test files, or test scripts found |

Important configuration files are `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, and `tailwind.config.ts`.

## 3. Architecture map

```text
app/layout.tsx
├─ Navigation                    client component
├─ main
│  └─ Container                  wraps every page
│     ├─ /                       home client component
│     │  ├─ WorkGrid             client component
│     │  └─ ServicesPreview      client component
│     ├─ /work
│     │  ├─ BackNavigation
│     │  ├─ WorkGrid
│     │  └─ CTABand
│     ├─ /services
│     │  ├─ BackNavigation
│     │  ├─ ServicesFull
│     │  └─ CTABand
│     ├─ /about
│     │  ├─ BackNavigation
│     │  ├─ AboutTeam
│     │  └─ CTABand
│     └─ /contact
│        ├─ BackNavigation
│        └─ ContactForm → POST /api/contact
└─ Footer
```

### Routes/pages

| Route | Rendering/role |
|---|---|
| `/` | Client-rendered homepage with hero, work preview, service preview |
| `/work` | Server page composing shared work grid and CTA |
| `/services` | Server page composing full service list and CTA |
| `/about` | Server page composing team/value cards and CTA |
| `/contact` | Server page composing client-side form |
| `/api/contact` | Server route handler for POST submissions |

### Architecture assessment

Intentional, useful foundations:

- Global layout with shared navigation/footer and route metadata.
- A reusable `Container`.
- Presentation components split by domain: work, services, team, contact.
- Contact form has client state and server-side input validation.

Likely remnants or incomplete implementation:

- `WorkGrid` is reused unchanged for the homepage preview and full `/work` page, producing duplicate page headings and a self-linking “View All Projects” CTA on `/work`.
- Project cards link to `/work/1` through `/work/6`, but no dynamic route exists.
- Services content is duplicated between `ServicesPreview` and `ServicesFull`.
- Project, service, team, and contact data are all embedded in component files; there is no content/data layer.
- `tailwind.config.ts` duplicates tokens in `globals.css`. The app uses Tailwind v4 CSS-first configuration, but the stylesheet does not import the JavaScript Tailwind config with `@config`; generated CSS contains no `font-syne` utility. This makes the configuration redundant/incomplete.
- Default Create Next App assets remain in `public/` and are not referenced.

## 4. Current design system

**Colors:** A dark “obsidian/deep” palette with amber as the single accent, supported by blue-grey secondary text and borders.

- `#080A0C` obsidian
- `#0D1117` deep
- `#111820` card background
- `#1E2A35` border
- `#E8A020` amber accent
- `#F4F0E8` warm white
- `#8A9BAA` / `#C8D4DC` grey-blue text

**Typography:** Syne is intended for headings and DM Sans for body copy. However, `globals.css` names literal `"Syne"` and `"DM Sans"` rather than the `next/font` CSS variables. The generated font variables exist, but the site’s global font declarations do not consume them. The requested fonts may therefore fall back rather than render as intended.

**Spacing and containers:**

- Main visual rhythm: 60px, 100px, 16px, 20px, 32px.
- Shared `Container`: `max-w-7xl` with 24px/48px/64px horizontal padding.
- Several child pages add a second padding system (`px-6 md:px-[60px]`) inside that global wrapper.
- Footer independently uses 24px/60px padding and `max-w-6xl`.

**Components:**

- Two global button styles: amber primary and bordered ghost.
- Dark outlined cards with 4–8px radius.
- Card grids use 1px gaps over a border-colored background to create dividers.
- Tags/pills, section eyebrow labels, border-top separators, and amber inline arrows recur frequently.

**Imagery and iconography:**

- No custom image, product screenshot, customer logo, photography, illustration, or brand asset exists.
- Project and service visual anchors are emojis.
- Lucide icons are used for functional UI; social icons are inline SVG.

**Motion:**

- Framer Motion entrance animations: opacity + vertical movement.
- A custom pulsing status dot and ticker animation are defined; the ticker is not used.
- Hover color, translation, and shadow effects are used on buttons/cards.

**Responsive behavior:**

- Grid layouts collapse to one column at mobile widths.
- Navigation changes to a full-screen mobile menu.
- Typography uses responsive sizes and a few `clamp()` values.
- Responsive rules exist, but the nested container/padding approach creates inconsistent horizontal alignment across routes.

**Coherence assessment:** the system is mechanically consistent but not yet a sufficiently distinctive design system. It has one dominant composition—dark surface + thin border + amber accent + rounded card—applied to almost every content type. The result risks flattening hierarchy.

## 5. Fiysam corporate styling inherited by Studio

No Fiysam corporate repository, asset library, or live-site reference is present here, so direct copying cannot be proven from repository evidence. The table identifies likely shared brand-family DNA inferred from names, visual vocabulary, and messaging.

| Area | Current implementation | Recommendation | Reason |
|---|---|---|---|
| Fiysam masterbrand | `FIYSAM STUDIO` wordmark treatment in navigation/footer | ADAPT | Keeping the Fiysam relationship is valuable; “STUDIO” should have a more independent visual role than simply amber-colored suffix text. |
| Amber + dark palette | Amber “energy” token paired with obsidian, deep navy, and industrial blue-grey | ADAPT | This is usable brand DNA, but the current frequency makes the Studio read like infrastructure/energy styling rather than a product studio. |
| “Move Africa Forward” | Homepage/about headlines and footer use regional-impact language | ADAPT | The ambition is relevant, but it is broad corporate-style positioning. The Studio needs sharper proof of what it builds, ships, and learns. |
| Grid / technical background | Hero uses fading graph-paper grid and amber radial glow | ADAPT | It supports technical confidence, but it is a familiar startup/infrastructure visual device. It should be made more specific to product experimentation. |
| “Energy” token naming | `amber-energy`, `grey-energy`, `light-energy` | REPLACE | Internal token vocabulary anchors the visual system to the parent company’s domain. Studio tokens should describe UI roles, not energy. |
| Operational/infrastructure language | “Reliable infrastructure,” “cloud solutions,” “deployment and monitoring” in service descriptions | ADAPT | These are legitimate capabilities, but should be framed as product-enabling execution rather than the Studio’s primary identity. |
| Corporate-style proof claims | “100% Client Satisfaction,” broad Africa-forward claims | REPLACE | These feel generic and are unsupported by source evidence or case studies. |

## 6. Page/route audit

| Route | Purpose | Current state | Recommendation |
|---|---|---|---|
| `/` | Establish Studio proposition and route users to work/contact | Strong basic hero and clear CTA pair; then work/services cards | Redesign, retaining the basic conversion intent. It needs more distinctive proof, a stronger product-studio point of view, and a richer homepage structure. |
| `/work` | Portfolio/case-study index | Six static, emoji-led project cards; page adds “Our Work” heading above the same component heading | Rebuild. Project names and descriptions are unverified static content; cards lead to missing detail routes and no case-study evidence exists. |
| `/services` | Describe capabilities | Six detailed service modules with benefit and process lists | Redesign. The structure is usable, but service language is generic and the catalog is broad enough to resemble a conventional agency. |
| `/about` | Explain values and introduce team | Four value cards and four team cards, all textual | Rebuild. Team information is static and unsupported by assets/context; values conflict with the supplied Studio philosophy in an important way. |
| `/contact` | Qualify and collect leads | Contact details plus service-select form | Keep structurally, redesign visually and complete operational handling before treating it as live. The phone number is visibly placeholder-like. |
| `/api/contact` | Validate contact intake | Checks required fields/email, logs payload, returns generic success | Keep as a stub only. It has no persistence, delivery, anti-spam, rate limiting, or operational destination. |
| `/work/[id]` | Intended individual project pages | Not implemented | Rebuild or remove links until real case studies and routes exist. |

## 7. Content audit

**Confirmed content locations:** service data is in `ServicesPreview.tsx` and `ServicesFull.tsx`; projects are in `WorkGrid.tsx`; team/values are in `AboutTeam.tsx`; contact details are in `ContactForm.tsx`.

### Content observations

- The central proposition is repeated in variants: “Build Products That Move Africa Forward,” “software products that solve real problems,” and “products users love.”
- CTAs are clear but generic: “View Our Work,” “Let’s Talk,” “Start Your Project,” “Enquire about this service.”
- Six services span strategy, design, full-stack work, AI/data, mobile, and DevOps/cloud. This is a broad full-service agency menu rather than a selective studio thesis.
- Six projects have sector-generic names: PayFlow, AgriConnect, HealthTrack, EduSmart, LogiTrack, and MarketHub. The repository contains no source, asset, client attribution, outcome, or route that substantiates them as completed work.
- Team member biographies and project/service claims are hard-coded. Their factual status cannot be verified from the repository.
- The visible phone number, `+234 800 000 0000`, appears to be a placeholder.
- `studio@fiysam.com` and social profiles are present but cannot be validated from local repository evidence.
- Metadata is present per page, but there are no Open Graph image, social-card, robots, sitemap, canonical, or structured-data implementations.
- The README remains the unedited Create Next App template and does not document Fiysam Studio.

Content that most resembles parent-company/corporate positioning:

- “Move Africa Forward.”
- Broad continental impact framing.
- Amber “energy” terminology.
- Infrastructure-heavy capability framing in DevOps/cloud copy.

The Studio philosophy favors rapid shipping, learning, doubling down, and shutting down unsuccessful bets. The existing About values instead emphasize “Quality Over Speed,” more typical agency language. That is a substantive positioning mismatch.

## 8. Confirmed technical issues

### Confirmed by checks

- TypeScript check passed: `tsc --noEmit --incremental false`.
- ESLint check failed: **11 errors and one warning**.
  - 11 `react/no-unescaped-entities` errors across homepage, work, about, CTA, contact, navigation, and work-grid JSX.
  - One unused `Container` import in `app/page.tsx`.
- The work cards link to nonexistent `/work/1`–`/work/6` pages.
- The `/work` page duplicates the “Our Work” heading and renders a “View All Projects” button linking back to itself.
- Contact submissions are only logged to server output. They are neither emailed, saved, routed, rate-limited, nor protected against abuse.
- `nodemailer`, `@types/nodemailer`, and `react-intersection-observer` are installed but have no source references.
- There is no test coverage or test command.
- `next.config.ts` contains only the default empty configuration.
- There is no deploy/hosting configuration or CI workflow.
- `tailwind.config.ts` duplicates global CSS theme tokens and is not loaded from the Tailwind v4 stylesheet. Generated CSS contains no `font-syne` utility.
- Next font variables are configured, but global CSS uses literal font names rather than `var(--font-syne)` / `var(--font-dm-sans)`.

### Confirmed accessibility concerns

- Form labels are not programmatically associated with fields: they lack `htmlFor`, and the corresponding inputs/select/textarea lack IDs.
- The mobile menu control has no accessible name, `aria-expanded`, or `aria-controls`.
- The form’s asynchronous success/error status is not announced with an `aria-live` region.
- The site relies heavily on low-contrast blue-grey text on dark surfaces; contrast should be measured before launch.
- Emoji are used as primary content imagery, creating inconsistent visual rendering across platforms.

### Recommendations, not confirmed production defects

- Add real contact delivery/storage plus spam and rate-limit controls before publishing the contact form.
- Add route validation/e2e coverage for navigation and form behavior.
- Establish a deployment, environment-variable, and observability contract.
- Add performance budgets after the image/content direction is settled.

## 9. Design problems

In priority order:

1. **Structural/layout problems:** the global `Container` wraps every page, while many pages and sections add their own horizontal padding. This creates double padding, prevents true full-bleed page surfaces, and makes home, interior pages, CTA band, and footer align differently.
2. **Typography:** intended custom fonts are not reliably consumed through the configured `next/font` variables. Even aside from that issue, the scale is narrow: headings, card headings, labels, and body text often differ mainly through weight/color rather than a strong type hierarchy.
3. **Visual hierarchy:** almost every section uses the same eyebrow + headline + grey paragraph composition and the same outlined-card pattern. Important content does not visually earn more attention than secondary content.
4. **Spacing:** values are individually reasonable but not governed by a visible page-level rhythm. The double-padding issue is especially pronounced on interior pages.
5. **Inconsistent components:** the primary CTA is defined globally but recreated inline in navigation; container width/padding differs between layout, pages, and footer; services are duplicated in two components.
6. **Color usage:** amber is used for logo emphasis, labels, key numerals, buttons, headings, icons, checks, arrows, and hover effects. It loses signaling value and reinforces the inherited energy/infrastructure feel.
7. **Imagery:** there is no evidence-based product visual system. Emoji in portfolio cards are a major reason the page reads as a concept/template rather than premium studio work.
8. **Animation:** entrances and hover shifts are technically restrained, but generic. Motion does not reveal product behavior, process, or Studio personality. The unused ticker animation is dead styling.
9. **Responsiveness:** the grid breakpoints are sound, but nested container padding produces excessive side margins on interiors. The mobile menu lacks interaction/accessibility refinement.
10. **Template-like patterns:** generic project names, generic service lists, unsubstantiated metrics, rounded dark cards, pill tags, emoji, grid glow, and broad “we build great things” copy combine into a familiar agency-template signature.

## 10. What is already good

- Modern, current framework baseline with strict TypeScript.
- Clean route separation and sensible shared page chrome.
- Clear initial navigation and conversion paths.
- A restrained base palette that can become premium if amber is used more selectively.
- Syne/DM Sans is a plausible type pairing for a technical, editorial studio.
- The contact form has a sensible lead-qualification structure.
- Motion is modest rather than distracting.
- The project is still compact—19 source files and approximately 1,161 source lines—so changing direction now is relatively low-risk.

## 11. What should be rebuilt

- The page-shell/container strategy.
- The work/case-study system, including routes, real visual proof, and source-of-truth content.
- The homepage narrative and hierarchy.
- The about page and its values, to align with the actual Studio philosophy.
- The component/token system: typography use, layout primitives, button variants, card variants, and content data structure.
- Portfolio imagery/visual proof.
- Contact handling before it is presented as a production lead channel.
- Default README/assets and the absent project documentation—after the direction is agreed, not during this audit.

## 12. Recommended Studio design direction

**Brand relationship:** use Fiysam as an endorsement and source of confidence, not as the Studio’s dominant visual template. The Studio should be “a Fiysam company” in substance and naming, with its own editorial, product-centric system.

**Visual identity:** favor a purposeful, editorial product-lab aesthetic: bold typographic statements, controlled asymmetry, real interface fragments, technical annotations, experiment/case-study artifacts, and generous negative space. Avoid simulated sci-fi dashboards, neon gradients, and decorative data visualizations.

**Typography:** preserve the contrast between a characterful display face and neutral UI/body face, but make the font implementation technically correct. Use display type sparingly for large propositions and product titles; use body type for clarity, evidence, and dense case-study information.

**Color strategy:** keep a dark neutral foundation and a warm Fiysam-derived accent, but reposition amber as a precision signal—key action, active state, outcome, or annotation—not a default decoration. Introduce a restrained secondary neutral or cool technical accent only if real content requires one.

**Layout:** establish one site-wide container and a small set of full-bleed section patterns. Design the homepage as an editorial sequence rather than stacked card modules. Let one or two sections break the grid intentionally; retain consistent alignment elsewhere.

**Imagery:** prioritize authentic product screens, prototypes, schematics, field/process photographs when relevant, and bespoke abstract systems derived from actual work. Do not use emoji as product imagery. If real case studies are unavailable, represent the Studio’s process honestly rather than inventing portfolio evidence.

**Motion:** use motion to communicate shipping, iteration, system behavior, and navigation state. Keep it quick, quiet, responsive to reduced-motion preference, and tied to content—not merely repeated entrance animations.

**Component strategy:** build a small semantic system around page shell, section intro, evidence block, project preview, capability module, CTA, navigation, and forms. Separate content data from rendering before expanding content. Avoid one universal card treatment.

**Homepage structure:**

1. Clear Studio proposition and relationship to Fiysam corporate.
2. Current focus / what the Studio builds and ships.
3. Selected work or “ventures and engagements” only where defensible.
4. A differentiated working model: build, ship, measure, double down or stop.
5. Capability boundaries—not a broad agency menu.
6. Studio notes, experiments, or signals of active product thinking.
7. Direct project/contact CTA.

**Content direction:** replace broad claims with concrete evidence when it exists: product stage, customer/user context, decision made, what shipped, measurable outcome, and learning. Until evidence is available, use honest capability/process language rather than fabricated statistics, generic projects, or testimonials.

## 13. Documentation currently present

| Item | Current status |
|---|---|
| `README.md` | Present, but it is the stock Create Next App README and does not document Fiysam Studio. |
| `AGENTS.md` | Not currently present in the working tree; Git reports it as deleted. The last committed version only contained a Next.js agent-rule pointer. |
| `CLAUDE.md` | Not currently present in the working tree; Git reports it as deleted. The last committed version only referenced `AGENTS.md`. |
| `.claude/` | Not found |
| Design documentation | Not found |
| Product/content documentation | Not found |
| Deployment/runbook documentation | Not found |
| Environment-variable documentation | Not found |
| API documentation | Not found |

Important missing context includes: verified brand guidelines, the intended relationship to the corporate brand, approved positioning, verified service scope, real team/project facts, asset sources/licensing, case-study permissions, content owners, deployment target, form-delivery destination, and environment-variable contract.

## 14. Proposed next steps

1. Preserve the current worktree state and decide whether the uncommitted implementation is the baseline to keep.
2. Confirm real Studio facts: services, team, projects, metrics, contact details, social profiles, and relationship to Fiysam corporate.
3. Define a short Studio positioning and brand-architecture brief before design changes.
4. Establish content truth before creating portfolio/case-study routes.
5. Agree the page-shell and visual-system direction, then redesign the homepage as the first implementation target.
6. Resolve the confirmed lint, route, font, layout, contact-handling, and dependency issues as part of the approved implementation phase.
7. Add concise project documentation and deployment/environment guidance once technical direction is approved.
