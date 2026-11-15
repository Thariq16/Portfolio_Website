# Motion

Restraint. Motion confirms and orients; it never performs.

| Token | Value | Use |
|---|---|---|
| Fast | 150-250 ms | hover colour, underline draw (`scaleX`, 250 ms), button press |
| Base | 300-550 ms ease | reveal-on-scroll (`opacity` + 24px rise, 550 ms), accordion chevron |
| Slow | 800 ms+ | reserved for one deliberate moment per page |

- **Reveal:** sections enter once, only when reached. A scroll fallback guarantees nothing stays hidden after a jump (End key, anchor, restored scroll).
- **Hover:** links draw a 1px underline; cards lift 2px and gain the green border; no tilt, no parallax on text.
- **Reduced motion:** everything rests and nothing stays hidden (`prefers-reduced-motion`).
- **Brand moment (planned):** the ledger rule drawing left to right under the hero headline, once, on load.
- **Never:** scroll-jacking, auto-playing carousels, looping decoration, anything over 5 s without a pause control.
- 60 fps on a mid-range phone, or it doesn't ship.
