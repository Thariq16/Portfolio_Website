# Colour

Source of truth: `src/app/globals.css`. Neutrals do most of the work; green is the single accent, used sparingly.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--background` | `#f6f2e8` paper | `#14110b` | page |
| `--foreground` | `#1d1a13` ink | `#ece5d3` ivory | text |
| `--card` | `#f1ecdf` | `#1a160f` | surfaces |
| `--secondary` | `#ece6d6` | `#242019` | bands, chips |
| `--primary` | `#1e5a43` ledger green | `#85b89d` mint | the one accent, CTAs, links, rules |
| `--muted-foreground` | `#6d6250` | `#a2977f` | secondary text, mono labels |
| `--destructive` | `#9c3b2b` | `#c4695a` | errors only |
| `--border` | `rgba(80,66,40,.25)` | `rgba(210,193,155,.22)` | hairlines |

## Contrast (WCAG 2.2, computed)

| Pair | Light | Dark |
|---|---|---|
| ink on background | 15.53 | 14.99 |
| muted on background | 5.35 | 6.52 |
| muted on card | 5.07 | 6.24 |
| green on background | 7.23 | 8.38 |
| green on card | 6.85 | 8.01 |
| destructive on background | 6.11 | 4.95 |
| background on green (button label) | 7.23 | 8.38 |

Every text pair clears AA (4.5:1). The lowest, dark-mode red at 4.95:1, is for short error text only. Never put `--muted-foreground` on `--secondary` below 14px without checking.

## Rules

- One accent. No violet/lavender, no gradients, no second brand colour.
- Colour never carries meaning alone (errors also get text and an icon).
- Brand tile: `--primary` ground, `--primary-foreground` letters. On photos use the paper tile.
- OG/share graphics use the light palette (paper, ink, green) regardless of the viewer's theme.
