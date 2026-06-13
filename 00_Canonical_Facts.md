# 00 — Canonical Facts (Single Source of Truth)
**Status: CONFIRMED ✅** — All fields locked. No edit ships that contradicts this file.
**Last confirmed:** June 2026 by Thariq Hamad
**Currency rule:** All public-facing figures in SAR. USD 1 = SAR 3.75 (Saudi Riyal fixed peg).

---

## 1. TITLES (Site + LinkedIn canonical)

| Role | Canonical Title | Notes |
|---|---|---|
| Fortude | **Senior Product Manager** | Defensible: roadmap ownership, ~30 cross-functional, board/CSO reporting |
| Sling Mobility | **Product Lead** | Matches LinkedIn recommendation wording |
| FieldR | **Co-Founder & Product Lead** | Full title, not inverted |
| Motion Miracles | **Project Manager** | Scope was PM + de-facto Ops Manager |
| GOOD LIFE X | **Program Associate** | Contract role |
| Win Authority | **Project Manager** | Early career |
| MillenniumIT | **Project Manager** | Internship context is the STORY not the title; say "intern-led highest-budget project" in narrative |
| **LinkedIn headline** | **Senior Product Manager \| AI & SaaS Products \| 0→1 to Scale \| Riyadh, KSA · Transferable Iqama · Available Immediately** | Update manually — highest-leverage single action |

---

## 2. DATES (canonical date ranges)

| Role | Canonical Range | Notes |
|---|---|---|
| MillenniumIT | Jul 2017 – Jul 2018 | |
| Win Authority | **Jul 2018 – Aug 2020** | |
| Motion Miracles | **Dec 2020 – Jun 2021** | |
| GOOD LIFE X | Aug 2020 – Dec 2020 | |
| FieldR | **Jun 2019 – May 2025** | Start is June (not July) |
| Sling Mobility | **Jun 2021 – Oct 2024** | End is October 2024 (not May 2024) |
| Fortude | **Oct 2024 – Jan 2026** | Case study header must show full range, not "2024–2025" |

---

## 3. METRICS (all SAR, all verified)

| Metric | Canonical Value | Conversion / Notes |
|---|---|---|
| Fortude new revenue | **SAR 750K** | USD 200K × 3.75. Previously shown as SAR 675K — corrected. |
| Fortude pipeline | **SAR 7.5M** | USD 2M × 3.75. ✅ Was already correct in code. |
| Fortude ROAS | **1,800%** | ✅ |
| Chonk total revenue | **SAR 60K** | Confirmed. The SAR 30K ARR cards must be updated to SAR 60K. |
| Chonk checkout conversion | **Remove or soften** | "80% checkout conversion" has no case study backing. Replace with "Venture Engine Top 28 finalist" or remove. |
| FieldR paid user count | **Do not show** | Tricky number in international markets. Reference only "75% free-to-paid conversion" instead. |
| FieldR free-to-paid conversion | **75%** | ✅ Keep everywhere |
| FieldR pre-seed funding | **SAR 20K** | ✅ |
| Battery swap time | **90→20 seconds** | The "15 Seconds" on EV card is wrong — fix to 90→20 sec |
| Battery range | **60→100KM** | ✅ |
| Sling rides/day | **25→62** | ✅ |
| Sling roadside incidents | **−75%** | ✅ |
| Sling retention | **+17%** | ✅ |
| Sling revenue growth | **+30%** | ✅ |
| Motion Miracles revenue | **SAR 200K** | ✅ |
| Motion Miracles games | **23** | ✅ |
| Rotaract total project value | **SAR 18.75M** | USD 5M × 3.75. Replace old "SAR 714K Funds Raised Overall" stat. |
| Rotaract presidential raise | **SAR 1.875M** | USD 500K × 3.75. Fix "SAR 1,500" in About timeline — was a currency conversion error. |
| Rotaract projects completed | **150+** | ✅ |
| Charlie AI usage growth | **+75%** | ✅ |
| FieldR cricket platform | **Sri Lanka's first** | ✅ Distinctive claim — keep |
| Sling EV network | **Sri Lanka's first battery-swap network** | ✅ Distinctive claim — keep |

---

## 4. FRAMING DECISIONS

| Item | Decision |
|---|---|
| Trust bar label | **"Where I've Built"** (not "Trusted by leading tech companies" — these are employers) |
| Pipeline verb | **"Built a SAR 7.5M pipeline"** (not "Contributed to") |
| Filler metrics to remove | "Strong Engagement", "High Repeat Retention", "Proactive Maintenance", "2 Types Products", "100% Digital Channel" — quantify or cut |
| AR toggle | **Hide** until Arabic content is fully reviewed and complete |
| Primary CTA (job-hunting mode) | **Download CV** primary · Book a Call secondary |
| Availability line | **"Open to Senior PM / Head of Product roles · KSA & GCC · Available immediately"** |
| Fortude career blurb | Lead with: roadmap ownership, SAR 7.5M pipeline, ~30-person cross-functional team, board/CSO reporting. Remove "product marketing and UI redesign" framing. |
| Chonk story lead | **Venture Engine Top 28 finalist** + repeat customer rate. Not revenue as headline. |

---

## 5. ENFORCEMENT LOG (updated as Claude applies each fix)

- [x] **00_Canonical_Facts.md** created and confirmed
- [x] dictionaries.ts — SAR 675K → SAR 750K (all occurrences EN + AR)
- [x] dictionaries.ts — Chonk SAR 30K → SAR 60K; "High Repeat" → "Venture Engine Top 28"
- [x] dictionaries.ts — EV swap time "15 Seconds" → "90→20 sec"
- [x] dictionaries.ts — Remove "2,800+" and "2,823" user count mentions; keep 75% conversion
- [x] dictionaries.ts — Fortude case study timeframe "2024–2025" → "Oct 2024 – Jan 2026"
- [x] dictionaries.ts — Motion Miracles case study timeframe → "Dec 2020 – Jun 2021"
- [x] dictionaries.ts — Sling career dateRange end date → October 2024
- [x] dictionaries.ts — FieldR career dateRange start → June 2019
- [x] dictionaries.ts — Fortude career title → "Senior Product Manager"
- [x] dictionaries.ts — Trust bar label → "Where I've Built"
- [x] dictionaries.ts — "Contributed to" → "Built"
- [x] dictionaries.ts — Kill filler metrics (Proactive, 2 Types, Strong Engagement, High Repeat)
- [x] dictionaries.ts — Career blurbs: Fortude (roadmap/team/board framing), Motion Miracles (BNPL lead), FieldR (75% conversion lead)
- [x] about/page.tsx — Rotaract stats: "SAR 714K Funds Raised" → "SAR 18.75M Projects Managed"
- [x] about/page.tsx — Presidential term: "SAR 1,500" → "SAR 1.875M"
- [x] projects/layout.tsx — "$180K revenue generated" meta → "SAR 750K new revenue generated"
- [x] globals.css — Removed render-blocking @import font (duplicate of next/font)
- [ ] LinkedIn headline — Manual update by Thariq
