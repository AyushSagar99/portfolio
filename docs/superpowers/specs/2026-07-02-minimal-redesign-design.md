# Minimal Portfolio Redesign — Design Spec

**Date:** 2026-07-02
**Goal:** Restyle the portfolio to a minimalistic, professional, resume-like aesthetic modeled on chanhdai.com (MIT open source), recreated inside the existing Next.js 14 + Tailwind 3 codebase with Ayush's data.

## Approach

Recreate the visual language in the existing repo (chosen over forking the chanhdai.com template, which would mean migrating to Next 15/Tailwind 4 and deleting unneeded blog/registry features). Keep the data-driven `lib/data.ts` pattern and the working Resend contact form.

## Global frame

- Remove the pink/purple background blur blobs in `app/layout.tsx`.
- Background: white (`bg-white`), dark mode near-black (`dark:bg-zinc-950`). Text: zinc-900 / zinc-100. Strictly monochrome — no accent colors.
- Content sits in a single centered `max-w-3xl` column with thin left/right border lines (`border-x border-zinc-200 dark:border-zinc-800`) running the full page height.
- Sections separated by diagonal-stripe divider bands (CSS `repeating-linear-gradient`, ~2.5rem tall) — this replaces `section-divider.tsx`'s dot/line.
- Keep Inter font and the dark-mode toggle.

## Sections (top to bottom)

1. **Header/nav:** Replace the floating pill nav with a slim sticky top bar inside the column: name/monogram left; section anchor links + theme switch right. Keep active-section highlighting (existing context) but styled as plain underline/bold text.
2. **Hero/profile:** Small rounded photo, name, "Full Stack Developer". Below it, icon detail rows: Bengaluru, saggar.ayush@gmail.com (mailto), ayushsagar.vercel.app, GitHub, LinkedIn, Download CV. No emoji, no oversized headline.
3. **About:** The existing About paragraphs as plain prose under the profile block.
4. **Stack (Skills):** Grouped monochrome chips matching the resume grouping — Frontend, Backend, Databases, Tools.
5. **Experience:** Bordered rows (role, company, location, dates, description) for Infinity Box, Bizom, Business of Insights. Education (Bennett University) as the same row style. Removes `react-vertical-timeline-component`.
6. **Projects:** Clean rows — linked title, description, tag chips, small thumbnail. Replaces the tilting hover cards.
7. **Contact:** Keep the Resend form; restyle inputs/button to bordered minimal (square-ish corners, zinc borders). Fix footer year (currently "© 2030").

## Animations

Strip scroll-driven scale/opacity effects and entrance slides. Keep at most a subtle fade-in per section. `framer-motion` stays installed (used sparingly); `react-vertical-timeline-component` and its types are removed from `package.json`.

## Data changes

Extend `lib/data.ts` with a `profile` object (name, role, location, email, website, GitHub, LinkedIn URLs) and regroup `skillsData` into categories. Components keep deriving their prop types from the data.

## Out of scope

Multi-page IA, blog, project case-study pages, component registry, analytics/insights section, awards/certifications/bookmarks sections.

## Testing

`npm run build` must pass. Visual check of the rendered site (light + dark) against the reference. Contact form still submits.
