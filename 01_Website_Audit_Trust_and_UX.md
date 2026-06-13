# Website Audit — thariqhamad.com
**Scope:** Homepage, Career, About, Case Studies index, Fortude case study (full read). Content & structure audit — visual rendering, mobile layout, and load speed not assessed (run Lighthouse separately).
**Date:** June 2026

---

## 1. POSITIONING VERDICT

| Level | Verdict | Why |
|---|---|---|
| Product Manager | ✅ Clears easily | Outcomes, metrics, case studies all present |
| Senior Product Manager | ⚠️ Claims it, partially proves it | Headline says Senior PM, but the most recent role (Fortude) is titled "Product Manager" with a junior-reading blurb |
| Head of Product | ❌ Not yet | Org-level signals (1→34 scaling, ~30-person team, board reporting, government presentation) exist in the history but are buried or absent from the homepage |

**Core diagnosis:** The site has Head-of-Product *evidence* presented with mid-level-PM *framing* and Senior-PM *labelling*. The three layers don't agree.

---

## 2. TRUST FINDINGS (Critical)

### 2.1 Number inconsistencies — the #1 trust leak
A recruiter who catches one mismatch discounts every other number on the site.

| Metric | Homepage | Case Study Page | Career Page / Other | CVs |
|---|---|---|---|---|
| Fortude new revenue | SAR 675K | **$180K (USD!)** | — | SAR 700K |
| Fortude pipeline | SAR 7.5M | **$2M (USD!)** | — | SAR 7M+ |
| Battery swap time | 90→20 sec | **15 seconds** (EV card) | — | 90→20 sec |
| Chonk revenue | **SAR 60K** (Core Expertise) | **SAR 30K ARR** (project card) | — | Not on CVs |
| FieldR users | "2,800+ paid users" (appears once, nowhere else) | — | — | Not on CVs |
| Rotaract funds | SAR 714K raised overall | — | President term: **SAR 1,500** (reads as typo) | — |

**The USD problem is severe:** The Fortude case study body uses $180K/$2M while every other page uses SAR. The Case Studies page **meta description says "$180K revenue generated"** — this is what appears in Google results and WhatsApp/LinkedIn link previews sent to recruiters.

### 2.2 Date inconsistencies
- Fortude case study header says "2024–2025"; career page says Oct 2024 – Jan 2026
- FieldR: site says July 2019; CVs say June 2019

### 2.3 Framing that erodes credibility
- **"Trusted by leading tech companies"** above employer logos — vendor/client framing. These are employers. Recruiters notice the inflation. → Change to "Where I've Built" / "Companies I've Worked With"
- **"Contributed to a SAR 7.5M pipeline"** — hedging verb. CVs say "generated." Pick the strong, true verb and use it everywhere.
- **Vague filler metrics** on cards: "Strong Engagement," "High Repeat Retention," "Proactive Maintenance," "2 Types Products," "100% Digital Channel." Real numbers next to vague ones make the vague ones look like padding. Quantify or cut.
- **"80% checkout conversion rate"** (Chonk) — extraordinary claim with no case study backing on the page. Either evidence it or soften it.

### 2.4 Zero social proof — the biggest missing trust asset
- No testimonials anywhere on the site.
- **You already have one:** a LinkedIn recommendation from a direct report at Sling Mobility praising your roadmap translation, calm structured decision-making, and leadership. This is sitting unused.
- Sri Lanka Cricket validation (FieldR), Toyota SL pilot (Charlie AI), and the Maldivian government presentation are third-party trust anchors mentioned only in passing.

### 2.5 Career page blurbs contradict the Senior PM headline
| Role | Current blurb | Problem |
|---|---|---|
| Fortude | "Building market traction for AI products through product marketing and UI redesign" | Reads as product *marketer*. No roadmap, no team of ~30, no board. Titled "Product Manager" under a "Senior Product Manager" hero. |
| Motion Miracles | "Managing creative delivery across animation, game development, and service teams" | Omits the BNPL fintech launch entirely — the most senior-relevant part |
| GOOD LIFE X | "Helping founders navigate incubation" | Passive framing |

---

## 3. UX FINDINGS

### 3.1 Structure
1. **Homepage tells the same story twice.** "Impact & Value Creation" (4 cards) and "Featured Projects" (8 cards) overlap — FieldR, Chonk, Fortude, Sling appear in both. Merge into one "Selected Work" section of 4–5 strongest items. Halves scroll length.
2. **Logo carousel repeats the same 4 logos three times** to simulate movement — reads as padding. Show 4 logos once, statically.
3. **Inconsistent navigation:** case study pages drop "Design" and "Football" from the nav and show an "AR" toggle not present elsewhere. Disorienting; also signals unfinished build.
4. **Nav order:** Case Studies should come before Career — case studies are the differentiator; the career page is a weaker version of the CV.

### 3.2 Conversion & CTAs
5. **Competing CTAs:** "Schedule Intro Call," "Book a Call," "Download CV," "View Case Studies" all compete on first screen. Recruiters want the CV; founders want a call. Recommendation while in job-sprint mode: **Download CV = primary**, Book a Call = secondary.
6. **The site never says you're available.** "Available immediately" + target roles (Senior PM / Head of Product, KSA & GCC) appears on the CVs but not on the site. Add one line under the hero.
7. **Case study CTA** ("Interested in how I approach similar product challenges? → Schedule Intro Call") is consultant framing — fine if you want fractional work, mixed signal if the audience is recruiters.

### 3.3 Content hierarchy
8. **Seniority proof buried:** Employee #1 → 34-person company, ~30-person cross-functional team, board reporting, Maldivian government presentation — none above the fold.
9. **Hero line is vague:** "treated every budget like my own" is sentiment, not evidence. Concrete beats charming.
10. **About page "Currently" section name-drops tools** (Lovable, Antigravity, Claude) — reads junior. Frame around what you're *building*, not what you're *using*.

### 3.4 Case study quality (Fortude deep-read)
**What's good:** The 8-section structure (Context → Role → Constraints → Discovery → Decisions → Execution → Outcomes → Learnings) is genuinely strong — better than most PM portfolios. The "Constraints & Trade-offs" and "What I'd Do Differently" sections signal senior judgment.
**What's missing:**
- No artifacts: no screenshots, journey maps, pricing matrix mockups, funnel charts, before/after visuals. PM case studies live or die on visual evidence of process.
- "My Role & Ownership" doesn't state team size or reporting line (board/CSO) — the seniority data points.
- Currency mismatch with rest of site (see 2.1).

---

## 4. WHAT'S ALREADY WORKING (don't break these)
- 8-section case study framework — keep and extend
- Sling titled "Product Lead — Software & Hardware" — accurate founding-level framing
- Outcome-first card design with real metrics
- Football & Design pages as differentiators ("Two Dimensions You Won't Find on Most PM CVs" is a great section title)
- Rotaract leadership story (fix the SAR 1,500 figure)
- Clean SEO foundations (canonical URLs, OG tags exist — just contain wrong data)
- "Builder's Stack" concept — good idea, needs reframing
