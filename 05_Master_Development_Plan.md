# 05 — Master Development Plan
**Goal:** A portfolio that (1) survives recruiter cross-checking, (2) is memorable vs other Senior PM/HoP portfolios, (3) converts visitors into CV downloads and booked calls, and (4) functions flawlessly on mobile/WhatsApp — the real GCC referral channel.

**Inputs:** Audit docs 01–04 + Claude's code/visual review (ran the site locally, all pages, desktop + mobile).
**Owners:** 🤖 = Claude can do it solo · 👤 = needs Thariq (decision, content, or external action) · 🤝 = joint.
**Definition of Done per phase included — each phase ends with a verifiable exit test.**

---

## ✅ PHASE 0 — Canonical Facts — COMPLETE
All conflicts resolved in `00_Canonical_Facts.md`. Every ⚠️ row answered by Thariq, enforcement applied to codebase.

---

## ✅ PHASE 1A — Data Integrity — COMPLETE
All 18 fixes applied and verified via browser inspection.

| # | Task | Status |
|---|---|---|
| 1A.1 | Fix `$180K` meta — projects OG/Twitter description | ✅ → "SAR 750K new revenue generated" |
| 1A.2 | Chonk 60K, swap-time 90→20sec, FieldR user count removed | ✅ |
| 1A.3 | All meta/OG tags audited sitewide | ✅ |
| 1A.4 | Fortude case study timeframe → Oct 2024 – Jan 2026 | ✅ |
| 1A.5 | Rotaract "SAR 1,500" → "SAR 1.875M"; overall stat → SAR 18.75M | ✅ |
| 1A.6 | "Contributed to" → "Built"; filler metrics killed | ✅ |
| 1A.7 | Trust bar → "Where I've Built"; AR dict updated | ✅ |
| 1A.8 | Fortude title → Senior PM; career blurbs rewritten | ✅ |
| 1B.3 | Render-blocking `@import` font removed from globals.css | ✅ |

---

## ✅ PHASE 1B — Looks-Broken Engineering Fixes — COMPLETE

| # | Task | Why | Status |
|---|---|---|---|
| 1B.1 | Pre-hydration theme script — kills the light→dark flash | Page renders light then snaps dark on every load | ✅ |
| 1B.2 | Dark-mode primary `#1e40af` → `#3b82f6`; WCAG AA contrast pass | "Book a Call" is muddy/low-contrast on dark bg | ✅ |
| 1B.4 | Fix empty logo box on case-study headers when logo is `''` | Empty box renders for Chonk Cookies | ✅ (guard already existed) |
| 1B.5 | Navbar: prevent "Case Studies" two-line wrap; demote Download CV to text link | Two boxed buttons fight each other; nav text wraps | ✅ |
| 1B.6 | Cookie banner: delay appearance + compact on mobile so CTAs are never covered | Banner hides hero CTAs on first mobile visit | ✅ |
| 1B.7 | TrustBar: stop 3× logo repeat marquee — show logos once, static | Fake animation reads as padding | ✅ |

---

## PHASE 2 — Positioning, Conversion & Structure (Week 1 · 🤝)
*Rationale: the site has Head-of-Product evidence with mid-level framing. Fix the framing, then make the conversion path singular.*

| # | Task | Detail | Owner |
|---|---|---|---|
| 2.1 | LinkedIn headline update | Highest-leverage single edit in the whole plan | 👤 |
| 2.2 | Hero rewrite | Outcome-led headline; concrete proof line (Employee #1 → 34 · SAR 7M+ pipeline · Sri Lanka's first battery-swap network); availability line; CTA pair = **Download CV (primary)** + Book a Call (secondary), case-studies as quiet link | 🤝 (Claude drafts, you approve) |
| 2.3 | Leadership-scale strip on homepage | 1→34 team · ~30 cross-functional · board/CSO reporting · Maldivian government presentation | 🤖 |
| 2.4 | Merge ImpactShowcase + FeaturedProjects → one "Selected Work" grid of 4 | Kills duplicate story, halves scroll; drop rank chips & carousel | 🤖 |
| 2.5 | Career page blurb rewrites (Fortude roadmap/team/board framing; Motion Miracles leads with BNPL 0→1; GOOD LIFE X active voice) | Per audit 01 §2.5 | 🤝 |
| 2.6 | Nav reorder: Case Studies before Career | Case studies are the differentiator | 🤖 |
| 2.7 | About "Currently": lead with what you're building, demote tool name-drops | Per audit 01 §3.3 | 🤝 |
| 2.8 | Team size + reporting line added to "My Role & Ownership" in every case study | The seniority data points | 🤝 |
| 2.9 | KSA/Vision-2030 context line in Sling EV case study | Local-market resonance | 🤝 |

**Exit test:** A stranger reading only the first viewport can answer: who is he, how senior, what does he want, what do I click. Hero → one obvious primary action.

---

## PHASE 3 — Proof & Evidence (Weeks 2–3 · 🤝) — *the standout layer*
*Rationale: benchmark gap #1 is zero visual artifacts; gap #2 is zero social proof. Structure already exceeds benchmark.*

| # | Task | Detail | Owner |
|---|---|---|---|
| 3.1 | **Start testimonial outreach NOW** (lead time!) | Permission for existing Sling rec; request from Fortude manager/CSO, FieldR co-founder, SL Cricket, Glacis United | 👤 |
| 3.2 | Testimonials strip component on homepage | Built ready to receive quotes | 🤖 |
| 3.3 | Case study page redesign: TL;DR outcome card up top, sticky metric bar, pull-quotes/callouts replacing blue-bold inline highlighting | Scannability + senior feel | 🤖 |
| 3.4 | Visual artifacts: 2–3 per top-4 case study | You supply: Figma screens (Sling app, FieldR dashboards — Figma MCP is connected, Claude can pull them), IoT command-centre photos, swap-cabinet photos, Maldives deck excerpt. Claude builds: funnel charts, before/after adoption charts, pricing-matrix mockups as clean SVGs from canon numbers | 🤝 |
| 3.5 | Third-party anchor badges: Sri Lanka Cricket, Toyota SL pilot, Barca Innovation Hub, Venture Engine Top 28 | Visual treatment, not buried prose | 🤖 |
| 3.6 | One sanitized process artifact (lean PRD excerpt / Fortest complexity framework / Sling KPI framework) | HoP-screening signal | 🤝 |
| 3.7 | Chonk story rework per canon: lead with repeat rate + Venture Engine, reuse stronger LinkedIn copy | Per audit 02 §4.3 | 🤖 |

**Exit test:** Each top-4 case study has ≥2 visuals and states team size/reporting line. Homepage has ≥1 real attributed testimonial.

---

## PHASE 4 — Distinctive Identity & Functional Excellence (Weeks 3–4 · 🤖)
*Rationale: deferred until trust/proof are fixed — but "looks like every shadcn template" is the memorability gap. Scoped tight to avoid over-design.*

| # | Task | Detail |
|---|---|---|
| 4.1 | Typography identity: one characterful display face for headings (e.g. Fraunces/Newsreader) + Inter body; real type & spacing token scale in `globals.css`; delete per-module duplicate `.container`s | |
| 4.2 | Signature accent color replacing Tailwind-default blue; category colors → CSS variables (currently hardcoded hex in `ImpactShowcase.tsx`) | |
| 4.3 | Portrait on homepage (photo exists unused at `public/images/portrait.jpg`) | |
| 4.4 | Subtle scroll-entry motion + hover/focus states, `prefers-reduced-motion` respected | |
| 4.5 | WhatsApp contact button (GCC founders convert via WhatsApp, not email) | |
| 4.6 | `/intro` one-pager: hero claim, 4 proof points, testimonial, CV + call buttons — purpose-built for "let me forward you his profile" referrals | |
| 4.7 | Lighthouse mobile+desktop: ≥90 performance & accessibility; image optimization (`next/image` everywhere) | |
| 4.8 | GA4 funnel definition: CV download + call booking as conversions; weekly check of which case studies precede conversion | 👤 sets GA4 goals, 🤖 verifies events fire |
| 4.9 | End-to-end phone test via WhatsApp link-open (the real recruiter path) | 👤 |

**Exit test:** Lighthouse ≥90/90. A designer would not guess "template." Site is recognizably YOURS at a squint.

---

## PHASE 5 — CV Library Alignment (Weeks 3–4 · 🤝)
Depends on Phase 0 canon + (ideally) "The Job Hunt" reference material.

| # | Task | Owner |
|---|---|---|
| 5.1 | Export "The Job Hunt" Claude project materials (chats, CV rules, all 8 variants) into a local folder so Claude can read them | 👤 |
| 5.2 | Conform all CVs to canon dates/titles/figures; fix rule violations (Fintech CV "Skills" header, "PMP Candidate · Exam: July 2026", bolding style) | 🤝 (Claude can read/diff the PDFs; regeneration needs source docs) |
| 5.3 | Consolidate to ~3 core variants + one-offs | 🤝 |
| 5.4 | Resolve Glacis United on Startup CV; standardize MillenniumIT framing | 👤 decision, 🤖 apply |
| 5.5 | Re-export and replace `/public/cv` downloads; verify `/cv` page descriptions match | 🤝 |

**Exit test:** Diff any CV against site + LinkedIn: zero contradictions. Only 6 files in `public/cv` and each matches canon.

---

## ENGINEERING IMPROVEMENTS TRACK (woven into phases, listed for visibility)
- Pre-hydration theme script (P1) · font loading fix (P1) · contrast tokens (P1)
- Content architecture: `dictionaries.ts` is a 1,000+ line god-file mixing types, EN, AR, jobs, case studies → split into `content/` modules; Arabic preserved but gated until complete (P2, during the Selected Work merge)
- Markdown-by-regex in `BentoGrid.tsx` → proper rich-text rendering or restructured content (P2)
- Design tokens & shared container (P4) · `next/image` adoption (P4)
- OG-preview test added to the deploy checklist; GitHub Actions deploy already exists (`.github/workflows/deploy.yml`)

---

## SKILLS / TOOLING — what you need (and don't)
**Nothing needs to be "imported" for the core work** — the heavy lifting is content + code, which Claude Code does natively. Already available and relevant in this environment:

| Skill/Tool (already installed) | Used in |
|---|---|
| `design:design-critique` | Phase 2/4 — structured critique passes on redesigned sections |
| `design:accessibility-review` | Phase 4 — WCAG 2.1 AA audit |
| `design:ux-copy` | Phase 2 — hero/CTA/microcopy rewrites |
| `marketing:seo-audit` | Phase 1/4 — meta/OG/keyword audit (KSA recruiter search terms) |
| `anthropic-skills:pdf` | Phase 5 — reading/diffing the CV PDFs |
| `product-management:write-spec` | Phase 3 — structuring the process-artifact showcase |
| **Figma MCP (connected)** | Phase 3 — pulling Sling/FieldR design artifacts straight from Figma |
| Claude Preview (local browser) | Every phase — visual verification before deploy |

**The one thing to bring IN:** the "The Job Hunt" Claude.ai project content. Claude Code can't access claude.ai projects — export the key chats (CV rules, agreed formatting decisions) and CV source files into a folder in/near this repo.

---

## SEQUENCE & FIRST MOVES
```
P0 (you, 1 hr) ──► P1A (Claude, same day) ──► P2 ──► P3 builds ──► P4 ──► P5
P1B (Claude) ──── can start IMMEDIATELY, no dependencies
P3.1 testimonial outreach (you) ── start NOW, longest lead time
2-hour quick wins: P0 → LinkedIn headline → $180K meta fix → cookie banner fix
```
**Cadence suggestion:** after each phase, Claude runs the site locally, screenshots desktop+mobile, and you review before the next phase starts. Deploy at end of P1, P2, P3, P4 — each deploy is a visibly better site, no big-bang risk.
