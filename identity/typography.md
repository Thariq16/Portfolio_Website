# Typography

| Role | Face | Use |
|---|---|---|
| Display | **Fraunces** (variable: opsz, wght, SOFT, WONK) | h1-h3, the wordmark, large numerals and pull quotes. Weight 500, tight tracking (-0.01em). |
| Body | **Inter** | paragraphs, UI text, forms. |
| Label | **JetBrains Mono** | eyebrows, nav, dates, captions, figures in tables. 11-13px, uppercase, tracking 0.08-0.14em. |

Loaded with `next/font` (self-hosted, no layout shift). Fallbacks: Georgia / system-ui / monospace.

## Scale (current)

| Step | Size | Used for |
|---|---|---|
| Display | 3rem, 4.5rem from the desktop breakpoint | home hero h1 |
| H1 | clamp(1.75rem, 4.5vw, 2.5rem) | page and article titles |
| H2 | 1.5rem | section headings |
| Lede | 1.25rem | article opening lines |
| Body | 1.0625rem / 1.75 | reading text |
| Small | 0.875-0.9375rem | secondary copy |
| Label | 0.6875-0.8125rem mono | eyebrows, meta |

## Rules

- Serif for the idea, sans for the explanation, mono for the metadata. Don't swap roles.
- Headlines are sentence case; only mono labels are uppercase.
- The wordmark is Fraunces 500 at `opsz 72`; the monogram uses `opsz 96`, weight 640 so the hairline serifs survive at 16px.
- Licensing: Fraunces, Inter and JetBrains Mono are all SIL OFL. Free for web, no pageview fees.
