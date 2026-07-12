// Content calendar data — sourced from content-calendar.html (Builder Thariq personal branding drafts).
// Synced 2026-07-06 against the PBOS-fixed source (dates shifted Jul 7 – Aug 27; several bodies/notes reworded).

export interface Post {
    num: number;
    date: string;
    time: string;
    track: 'Builder' | 'Analyst';
    pillar: string;
    title: string;
    status: 'Ready' | 'Skeleton' | 'Not Cleared';
    format: string;
    image: boolean;
    score: number;
    why: string;
    body: string;
    hashtags: string;
    links?: [string, string][];
    note: string;
}

export const posts: Post[] = [
    {
        num: 1, date: 'Tue, Jul 7, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'Personal Experiences',
        title: 'Failed product story — OPENER', status: 'Ready', format: 'Text-only', image: false, score: 9.5,
        why: 'Strongest hook in the batch, fully cleared, no anonymization needed — recommended opener.',
        body: `I was Head of Product on something that ran for six years, and then a trust breakdown triggered a social backlash and user activity went from normal to zero in about six weeks. I'm not going to name it. The specifics aren't really the point, and I'm not turning this into a case study with a tidy resolution because there isn't one — the product's on hibernation now, user data deleted, platform made inaccessible.

Six years of work, gone in six weeks.

I used to think the value in telling a story like this was showing that you recovered. I don't really think that anymore. I think the value is just being honest that it happened and what it actually taught me, and it taught me more than any course or mentor or anything else has.

Being the Head of Product on a failed product is a blessing you can have in your career, because success teaches you a few things, failure teaches you many that you can avoid in the next stage. I don't think I understood how literally true that was until I'd actually lived through it.

If you're early in product and most of what you've shipped has gone fine so far, that's not a bad thing, but there's a category of lesson you just haven't hit yet. I'd rather tell you what it cost me than have you find out the same way I did.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: "Moved to Post 1/opener 2026-07-05 — no anonymization gymnastics needed, strongest opener in the set. Correction 2026-07-06: an earlier pass today wrongly flattened this into generic paraphrase, misreading Thariq's own verbatim quote as a Generic Language Filter violation. Restored his real words, verbatim, from facts-source.md's CLEARED section. Second correction, same day: rewrote the surrounding paragraphs to break the 'every paragraph ends on a crafted rhetorical button' pattern a human reviewer flagged as AI-polished — looser run-ons, split off a short stand-alone line, cut a tidy superlative. Date confirmed 2026-07-06 (second adjustment) — now Tue, Jul 7.",
    },
    {
        num: 2, date: 'Thu, Jul 9, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'KSA Product Reviews',
        title: 'Jeeny review — live-tracking confidence gap', status: 'Ready', format: 'Carousel', image: true, score: 8.7,
        why: 'Real, verifiable research; specific and evidence-based — exactly the differentiation this pillar is for.',
        body: `Jeeny's core loop is simple: request a ride, watch a car icon move toward you on a map, get in when it arrives. That map is arguably the single most important screen in the entire app — it's the only thing standing between "I trust this ride is coming" and "I'm standing on the curb wondering if I've been forgotten."

Worth looking at closely, then. A recurring theme across Jeeny's Play Store reviews is drivers appearing to be "arriving" on the map while the icon hasn't actually moved for several minutes — followed by a cancellation after the rider's already invested a 10+ minute wait. On the driver side, a separate complaint pattern shows up too: the demand map lighting up red zones that don't correspond to actual incoming ride requests, and drivers getting matched to fares 8-17km away for SAR 5-10 — a mismatch that all but guarantees the driver cancels or the rider gives up first.

Both complaints point at the same underlying gap, I think — the live-tracking feature shows position, but it doesn't show confidence in that position. A stale pin and an accurate pin look identical to the rider — there's no signal telling you "this hasn't updated in 90 seconds" versus "this is live right now." Silence reads as normal until it very obviously isn't, and by then the wait's already sunk.

Two fixes I'd want to test if I were on this: first, a simple staleness indicator on the driver pin itself — not a redesign, just an honest "last updated Xs ago" so a rider isn't guessing. Second, on the matching side, a visible cancellation-likelihood signal before a match is confirmed rather than after — so a rider facing a long-distance, low-probability match can choose to wait for a better one instead of finding out the hard way ten minutes in.

None of this is a small-team-can't-do-it problem. It's a "which metric are we actually optimizing" problem, and right now it looks like the metric is match speed, not match confidence. Those aren't really the same thing, and I think riders can tell the difference even if they couldn't put a name to it.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        links: [
            ['Jeeny — Google Play', 'https://play.google.com/store/apps/details?id=com.jeeny.rider'],
        ],
        note: "Research note: built from Jeeny's own Google Play/App Store listings, Arab News' coverage of Jeeny's Vision 2030 positioning, and complaint patterns on Jeeny's Google Play review section. Rider feedback here is a paraphrased pattern, not a verbatim quote — flagged deliberately, not put in quotation marks. Sources: Jeeny — Google Play; Saudi ride-hailing app Jeeny goes the distance to meet Vision 2030 goals — Arab News. Second pass 2026-07-06: loosened sentence rhythm per the batch-wide 'sounds like AI' fix.",
    },
    {
        num: 3, date: 'Sun, Jul 12, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'Growing Technology',
        title: 'AI accountability in the GCC', status: 'Ready', format: 'Text-only', image: false, score: 6.5,
        why: 'Solid, well-argued opinion, but general commentary without a personal proof point or citation — lower ceiling than the case-study posts.',
        body: `Every enterprise conversation in the Gulf right now has an AI angle. Most of them stall at the same point: the demo is impressive, and then someone asks "okay, but who's accountable when it gives a wrong answer to a customer."

In the enterprise AI conversations I've been part of, that question stalls rollouts more often than any technical limitation does. I've watched vendors solve the accuracy problem and completely ignore the accountability problem — and if I were leading product on one of these tools, accountability is what I'd want solved before accuracy, especially in regulated or relationship-driven industries where a wrong answer costs more than a bad UX moment does.

The GCC advantage here, if I were building for it deliberately: this region is making infrastructure-level AI and Vision 2030-aligned digital transformation bets faster than almost anywhere else. But a lot of the AI products arriving here were built assuming a US/EU market's tolerance for "the model is 94% accurate, ship it." That tolerance doesn't transfer, and I wouldn't want to find that out after a GCC launch.

If it were my roadmap, trust and auditability would be built in from day one, not bolted on after a launch built for somewhere else — that's a product strategy call before it's ever an engineering one.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: "PBOS fix 2026-07-06: softened two unqualified universal claims that failed Devil's Advocate's Generalisation Test. Second pass, same day: loosened sentence rhythm per the batch-wide 'sounds like AI' fix. Third pass 2026-07-08: rewritten for narrative stance per PBOS/EDITORIAL/02_Content_Guardrails.md's new 'candidate, not consultant' rule — was giving the market advice, now frames the same claims as what Thariq himself would build/insist on if he had the seat.",
    },
    {
        num: 4, date: 'Tue, Jul 14, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'Personal Experiences',
        title: 'RAGAS/trust pivot (employer anonymized)', status: 'Ready', format: 'Text-only', image: false, score: 8.2,
        why: 'Strong, real craft story (RAGAS/trust score/thumbs up-down) — held back from opener only because the anonymization reads more abstract as a cold open.',
        body: `We launched an enterprise AI answer assistant internally first, before taking it to any client. Adoption was bad. Not "needs a few tweaks" bad — people just weren't using it.

I sat down with one colleague to understand why, expecting a technical complaint. I got two, and neither was about the model. First: the tool gave answers but never showed where they came from, so nobody could tell a current, correct answer from a stale or wrong one — and without that, nobody trusted it enough to act on it. Second, separately: the people testing it were the same people whose day-to-day work looked a lot like what the tool was now doing, and they weren't shy about saying they thought it was there to replace them.

Neither of those is an accuracy problem. Both are a rollout problem — how we introduced the tool mattered as much as what the tool actually did.

So we built a validation layer that grades every answer's sources for relevance before the answer ever reaches the user, scored against a real framework (RAGAS: faithfulness, accuracy, relevancy, among other checks) — and we surfaced that as a trust score per answer, plus a simple thumbs up / thumbs down the user could act on, with a prompt for what went wrong on a thumbs down.

That's what actually turned it around — once people could see why an answer deserved trust, not just that it sounded confident, usage started moving. Not long after, we pitched the same tool to a new client, and they liked it enough to want to run with it.

Usage among early adopters grew 75%.

The model never actually got smarter through any of this. What changed was what the user could see. Trust is a product feature, not an engineering metric.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: 'Rewritten 2026-07-04 from your own raw account in "Fortude Story.docx." Company, product names, and the Toyota Sri Lanka detail stay fully out per the anonymization rule. Moved from opener to Post 4 on 2026-07-05. PBOS fix 2026-07-06: cut an antithesis tic and an advice-shaped closer. Correction same day: swapped in Thariq\'s own verbatim quotable line for this story, which hadn\'t been used before. Second pass, same day: loosened sentence rhythm per the batch-wide \'sounds like AI\' fix — his verbatim quote kept untouched.',
    },
    {
        num: 5, date: 'Thu, Jul 16, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'AI & Product Development',
        title: 'Framework: what decision does this replace?', status: 'Ready', format: 'Carousel/Document', image: true, score: 8.4,
        why: 'Numbered, structured framework — the strongest natural use case for the carousel/document format in this whole batch.',
        body: `Before any AI feature gets built, I ask one question first, before "can we build this": what decision does this replace, and who was making that decision before?

If the answer is "nobody was making a decision, we're adding a capability that didn't exist before" — that's a different, riskier bet than replacing an existing manual decision with a faster one. Both can be the right call. But teams that skip this question end up shipping AI features nobody asked for, then wondering why usage is flat despite genuinely good model performance.

The framework I use now, after watching an enterprise AI assistant I led earn adoption through trust rather than raw accuracy:
1. What decision or task does this actually replace?
2. Who currently owns that decision, and what do they lose by handing it to the model?
3. What does the user need to see to trust the output enough to act on it without re-verifying?
4. What's the cost of the model being wrong here, and who bears it?

Question 3 is the one most roadmaps skip entirely. It's also the one that determines whether your AI feature gets adopted or gets quietly ignored after the initial curiosity wears off.

It's the one I end up spending as much design time on as the model itself, if I'm honest.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: "PBOS fix 2026-07-06: closing line was a direct command to the reader — reworded as a first-person statement of practice. Second pass, same day: loosened closing rhythm per the batch-wide 'sounds like AI' fix.",
    },
    {
        num: 6, date: 'Sun, Jul 19, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'Potential in the Market',
        title: 'KSA EV/charging market — where the real demand sits', status: 'Ready', format: 'Carousel', image: true, score: 8.8,
        why: 'Well-researched, properly sourced, and a genuinely specific market read rather than generic "EVs are growing" commentary.',
        body: `Most conversations about EV infrastructure in Saudi Arabia default to "more public chargers, more adoption." I think that framing skips over where the real demand actually sits.

Battery-swap and battery-as-a-service models make the most sense in markets where home charging is unreliable — frequent power cuts, no dedicated parking, no fixed address to install a charger at. That's not the typical Saudi household story. Grid reliability here is high, and charging is increasingly getting built into new residential developments as a fixed amenity rather than retrofitted later — ABB recently supplied EV chargers directly into a residential compound project in Riyadh, with different charger specs for apartment units versus villas. That's the pattern actually forming: infrastructure investment flowing into large, planned residential communities, not scattered individual household retrofits.

So where's the real gap? Three places: large compound developments (already happening, per that example), university campuses — confined, high-density populations with short daily travel distances — and dense urban districts where, in my read, road capacity hasn't kept pace with residence density — a two-wheeler EV fleet for last-mile delivery matters more there than another public charger for personal cars.

EVIQ's own rollout already reflects some of this logic — its near-term buildout is concentrated on cities and the highway corridors connecting them (Riyadh, Jeddah, Dammam) rather than a blanket household push, with a 2030 target of 5,000 chargers across 1,000 hubs.

The part I don't see many companies treating as a product problem yet: who owns and services this infrastructure inside a compound or a campus, not just who installs the charger. Public charging still matters for tourism and event-driven demand, but if this were my roadmap, that operational layer is where I'd actually build — a narrower, more specific bet than just "EVs are growing, so charging companies win."`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        links: [
            ['EVIQ to complete 60 EV charging stations by end of 2025, focus shifts to highways — Arab News', 'https://www.arabnews.com/node/2621290/business-economy'],
            ['ABB supplies EV chargers for residential compound in Saudi Arabia — ABB official news center', 'https://new.abb.com/news/detail/67379/abb-supplies-ev-chargers-for-residential-compound-in-saudi-arabia'],
        ],
        note: 'Post links as the first comment, not inline, per LinkedIn\'s algorithm. Both sources checked directly. A widely-repeated "1,500 solar-powered two-wheeler stations" stat was deliberately skipped — no reputable primary source found. Pairs naturally with Post 13\'s Energy-as-a-Service post. Second pass 2026-07-06: loosened closing rhythm per the batch-wide \'sounds like AI\' fix. Third pass 2026-07-08: reworded closer for narrative stance — was framed as a gap \'companies\' should notice, now framed as what Thariq would build if it were his roadmap. Fourth pass, same day (see pbos-audit-2026-07-08.md): hedged an unsourced claim and added a one-clause trade-off acknowledgment per the Devil\'s Advocate Simplicity Test.',
    },
    {
        num: 7, date: 'Tue, Jul 21, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'Personal Experiences',
        title: 'Import ban & learning electronics from zero (Sling Mobility)', status: 'Ready', format: 'Text-only', image: false, score: 7.6,
        why: 'Honest, specific, well-sourced personal story — slightly narrower appeal than the top-tier posts since it\'s a set-up story rather than a resolved lesson.',
        body: `I joined Sling Mobility in June 2021 as employee #1 — and for the first few months, I couldn't actually do the job I was hired for. Sri Lanka had a vehicle import ban in place. Our bikes and batteries were stuck, even though the paperwork had been approved before the ban started. Ministries, banks, and customs all had to agree to let them through, and none of them were in a hurry.

I came from a pure IT background. I knew nothing about electronics, IoT, or how a motor and a battery actually behave inside a vehicle. So instead of waiting idle, I spent that blocked window teaching myself — free resources, evenings, the basics of what affects a motor, a battery, an incline. No course, no mentor for this part, just time I'd otherwise have lost.

By the time the bikes actually arrived, I wasn't the same product lead who'd joined. I was assigned the full application design — website, inventory system, rider app — because I'd used the delay to actually understand what I was building, not just manage it.

A blocker I couldn't control turned out to still be time I controlled, and what I did inside it was really the only part that was ever up to me.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: "Source: Sling Mobility Story.docx, read in full 2026-07-05. Real, specific, dated — no invented figures. PBOS fix 2026-07-06: removed \"The lesson I keep coming back to:\" label, reworded as first-person reflection. Second pass, same day: loosened closing rhythm per the batch-wide 'sounds like AI' fix.",
    },
    {
        num: 8, date: 'Thu, Jul 23, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'KSA Product Reviews',
        title: 'KSA Product Review #2 — SKELETON, needs your input', status: 'Skeleton', format: 'Carousel (pending)', image: true, score: 2.0,
        why: 'Not a real draft yet — waiting on your choice of product before this can be written.',
        body: `Same reason as Post 2 — not fabricating specifics about a real, named product. Structure this one around a different category if you want variety (e.g. fintech/BNPL, delivery/super-app, booking/travel) — send me the product and the specific detail, and I'll write it the same way as Post 2's structure.`,
        hashtags: '',
        note: '',
    },
    {
        num: 9, date: 'Sun, Jul 26, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'Growing Technology',
        title: "China's battery-swap scale (NIO) & vehicle-class-first infrastructure", status: 'Ready', format: 'Single image or chart', image: true, score: 6.7,
        why: 'Solid, sourced trend commentary, but more observational than personally differentiated.',
        body: `Battery swapping is having a real moment in China — NIO's network alone has crossed 100 million total battery swaps, with single-day volume peaking above 175,000 swaps during this year's Spring Festival rush. Gulf mobility planning is starting to ask the same question India and Southeast Asia asked a few years ago: charging or swapping, or both, and for which vehicle classes.

The answer isn't universal, and most of the public discussion treats it like one. Swapping wins for high-utilization commercial fleets — delivery bikes, last-mile logistics, anything where downtime is the actual cost driver, not just charge time. Charging wins for passenger vehicles where the car sits idle most of the day anyway and home/office charging fits the existing routine.

If I were the one deciding, I wouldn't pick an infrastructure model because it's more exciting to announce — I'd pick it because it actually matches how the vehicle class gets used. A swap network built for passenger cars solves a problem passenger car owners don't really have, and a charging-only strategy for a last-mile delivery fleet just recreates the exact downtime problem swapping was supposed to solve.

Vehicle class first, infrastructure model second — that's the order I'd insist on, because getting it backwards is an expensive mistake once the hardware's already in the ground.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: "NIO figures verified via web search 2026-07-02 — sources: cnevpost.com, nio.com official release. PBOS fix 2026-07-06: reworded a prescriptive closer into an observed pattern. Second pass, same day: loosened sentence rhythm throughout per the batch-wide 'sounds like AI' fix. Third pass 2026-07-08: reworded for narrative stance — was commenting on others' mistakes, now framed as what Thariq would decide himself.",
    },
    {
        num: 10, date: 'Tue, Jul 28, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'Personal Experiences',
        title: 'FieldR founder story — 0→1 to two countries', status: 'Ready', format: 'Carousel', image: true, score: 8.6,
        why: 'Concrete numbers, real named collaborators, clean founder arc — a strong, differentiated case study.',
        body: `In 2019, FieldR was a university research project. By the time we wound it down, it was Sri Lanka's first cricket data analytics platform, running in two countries.

It didn't start that way. We built it because we had access to something nobody else did: direct relationships with Sri Lanka Cricket coaches, who gave us letters of intent before we'd written a line of production code. That's the only reason a research project survived contact with a real market — we validated demand with the people who'd actually pay before we validated the tech.

From there, with Nasif Nuha and Azhar Anees, we built it out properly: 30+ tracked data points per game, a platform academies and club-level coaches actually used, and enough traction (pre-seed funding, selection into the Spiralation Seed Funding program run by ICTA Sri Lanka) to take it to Australia — two clubs, serving the Sri Lankan diaspora community there.

We converted 75% of free users to paid, on 2,823 paying users out of 3,568 registrations. For a bootstrapped cricket analytics tool built by a small team, that's a number I'm still proud of.

What I'd do differently: we spent too long chasing analytical depth before we'd nailed simplicity. The coaches who actually used the tool weekly wanted three numbers they could trust and act on before a match, not thirty they had to interpret. We learned that lesson through user pushback, not through planning for it upfront.

Six years, one research project, two countries — still the clearest example I've got of what "founder-level ownership" actually means, day to day.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: "Second pass 2026-07-06: loosened closing rhythm per the batch-wide 'sounds like AI' fix. Housekeeping, 2026-07-08 (see pbos-audit-2026-07-08.md): this post was missing its sourcing note during earlier passes — content was already clean. Source: facts-source.md Case Studies 5 and 6 (FieldR). 75% conversion, 2,823 paid users of 3,568 registrations, 30+ tracked data points, Spiralation Seed Funding selection, and the Australia expansion are all real per CV/Investor Deck. Nasif Nuha and Azhar Anees named as co-founders per Thariq's own account.",
    },
    {
        num: 11, date: 'Thu, Jul 30, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'AI & Product Development',
        title: 'Capability vs. governance — the HR/PII insight problem', status: 'Ready', format: 'Text-only', image: false, score: 8.0,
        why: 'Timely, nuanced AI-governance angle with a real, specific (not generic) example.',
        body: `A tool I helped ship was built to answer product questions. During testing, we found it was just as good at surfacing insights from structured internal data — things like an employee's project history, KPIs, and career progression pulled straight from HR-style records.

It worked. Genuinely well — specific, correct answers, not vague AI-generated filler. And that's exactly the moment it stopped being a feature win and became a governance problem.

The instant a tool can answer "what has this person been working on and how are they performing" on demand, you've created a new kind of access that didn't exist before — whether you meant to or not. So before this went anywhere near a real rollout, we had to build two things that had nothing to do with the AI itself: PII-handling rules, and department-based access control, so only someone's actual manager could see their own team's data, not anyone with tool access.

A capability being technically real never meant it was ready to ship — the harder, less glamorous work was always figuring out who got to ask the question in the first place. That's not a problem you solve once, either — every new use case for the same underlying tool reopens it.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: "Source: Fortude Story.docx, HR/insights pivot detail. PII/department-access-control detail is real, not generalized — no employee, client, or company detail is identifying. PBOS fix 2026-07-06: removed \"The lesson:\" label, reworded as first-person reflection. Second pass, same day: loosened closing rhythm per the batch-wide 'sounds like AI' fix. Fourth pass, 2026-07-08 (see pbos-audit-2026-07-08.md): Insight Generation's chain wants an outcome step before Reflection; no clean postable outcome exists in facts-source.md for this pivot (the only downstream result is NDA-covered), so added an honest acknowledgment that the governance question reopens each time, rather than inventing a resolution.",
    },
    {
        num: 12, date: 'Sun, Aug 2, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'Personal Experiences',
        title: 'Sling Mobility cabinet engineering & geofencing', status: 'Ready', format: 'Carousel', image: true, score: 8.7,
        why: 'Vivid, hands-on, highly specific engineering story — very carousel-friendly natural sequence.',
        body: `When we built Sri Lanka's first battery-swapping cabinets at Sling Mobility, the hardest decisions weren't about software. They were about a battery and a box.

The battery was heavy enough that a rider fumbling with it in under a minute was a real risk — to the rider, and to the equipment. So before we finalized cabinet design, I physically tested carrying a battery at different pigeonhole heights to find what a person could manage comfortably, one-handed, without strain. We landed on 4.5 feet as the sweet spot: high enough to avoid awkward bending, low enough that anyone could lift into it without help.

Then came the fraud problem. Batteries were a real asset — if swapping was too easy to trigger remotely, we'd have people opening cabinets they weren't standing in front of. So the final system checked whether the rider's location was within a 5-meter radius of the cabinet before releasing a pigeonhole, backed up by CCTV and voice-command stations at each cabinet, so a rider having trouble could get help from our command center directly instead of improvising.

None of that shows up on a product roadmap slide, but it's the actual work of taking an idea from "this should work in theory" to "this is safe and fast enough that a rider trusts it without thinking twice."

Unglamorous, physical, get-your-hands-on-the-hardware decisions are usually the ones that end up deciding whether a product ships at the quality it actually needs — that's been true on pretty much everything I've built since.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: "Second pass 2026-07-06: loosened closing rhythm per the batch-wide 'sounds like AI' fix. Housekeeping, 2026-07-08 (see pbos-audit-2026-07-08.md): this post was missing its sourcing note during earlier passes — content was already clean. Source: facts-source.md Case Study 4 (Sling Mobility), cabinet-engineering and geofencing detail from Sling Mobility Story.docx — the 4.5-foot pigeonhole height, 5-meter geofence radius, and CCTV/voice-command detail are all real, specific figures.",
    },
    {
        num: 13, date: 'Tue, Aug 4, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'Potential in the Market',
        title: 'From battery-swap service to Energy-as-a-Service', status: 'Ready', format: 'Carousel/Document', image: true, score: 7.6,
        why: 'Interesting strategic-evolution angle, pairs naturally with Post 6, though slightly more abstract than the hands-on posts.',
        body: `The most interesting product decision I made at Sling Mobility wasn't a feature. It was deciding what the battery itself was allowed to become.

We started as a straightforward battery-swap service — a rider needs power, we hand them a charged battery, repeat. But the battery was the single biggest physical asset in the entire business, sitting mostly idle in a cabinet between swaps. So the real second phase wasn't "add more stations." It was tokenizing partial ownership of the batteries themselves, opening that asset up to community investment, and shifting the business model from selling swaps to selling energy as an ongoing service.

That's a genuinely different business once you make that shift, and a harder one to run — the batteries stop being infrastructure you own and start being an asset the community owns alongside you, and your job changes from "run the swap network" to "manage the energy asset," with everything that adds in accountability to people who now have a stake in it.

Most EV infrastructure conversations stop at charging versus swapping, but the question I'd keep asking on any team building this is who owns the asset once you've built the network — and whether the business is actually designed to answer that.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: "Source: Sling Mobility Story.docx — \"Battery as a Service / Energy as a Service\" is Thariq's own term. Pairs naturally with Post 6's KSA EV market research. Second pass 2026-07-06: loosened closing rhythm per the batch-wide 'sounds like AI' fix. Third pass 2026-07-08: closer reworded for narrative stance — 'the bigger question is' read as neutral analysis, now framed as the question Thariq himself would keep asking on a team. Fourth pass, same day (see pbos-audit-2026-07-08.md): the post named the tokenization pivot's upside but never its cost, per Content Guardrails' 'trade-offs beat frameworks' — added a general, logically-entailed acknowledgment of added accountability rather than an unsourced specific.",
    },
    {
        num: 14, date: 'Thu, Aug 6, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'Personal Experiences',
        title: 'UX validation with people who had zero idea of the concept', status: 'Ready', format: 'Carousel', image: true, score: 7.7,
        why: 'Good, specific process story with a natural before/after sequence — solid carousel candidate.',
        body: `Before we shipped a single line of the rider app at Sling Mobility, we tested the design on people who had no idea what battery-swapping even was.

That was deliberate. It's easy to validate a UI with people who already understand the concept — they'll fill in gaps in your design with their own understanding, and you'll think it's working when it's really just being carried by their imagination. So we ran the wireframes and high-fidelity UI past people with zero context first, then followed up with a proper study against real potential riders, A/B testing different flows against each other to see what actually held up.

We found roadblocks. None of them were showstoppers — but we only knew that because we'd tested against confusion on purpose, instead of testing against people already primed to understand us.

Testing only with people who already get the pitch isn't really testing the UX, if I'm honest — it's testing the pitch, and those two things get confused more often than they should.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: "Source: Sling Mobility Story.docx, UX-validation-process detail. PBOS fix 2026-07-06: removed an advice-shaped closer addressed directly at the reader. Second pass, same day: loosened closer rhythm further per the batch-wide 'sounds like AI' fix.",
    },
    {
        num: 15, date: 'Sun, Aug 9, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'Growing Technology',
        title: 'Data isolation & enterprise AI trust in the GCC', status: 'Ready', format: 'Text-only', image: false, score: 8.1,
        why: 'Timely, regionally relevant (data sovereignty), grounded in a real architectural constraint.',
        body: `One of the hardest problems on an enterprise AI product I worked on had nothing to do with the model. It was that the product had to be installed entirely inside each client's own server — no external access to that data, not even for us.

This single constraint reshaped everything downstream: separate environments per client, a roughly two-week test window with manual validation against their own knowledge base before anything went live, and a real QA and project-management process just to update or patch the product safely once it was inside a wall we couldn't see over ourselves.

This is the part of enterprise AI adoption in this region I'd want any product I led to get right early — not the only blocker, but one I'd never leave unanswered. In my experience, buyers here often aren't asking "can the model do this" first — they're asking "who else can see my data if I say yes to this," and if I couldn't answer that cleanly, with real architecture behind the answer rather than a compliance slide, I'd expect the deal to stall no matter how good the model actually was.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: "Source: Fortude Story.docx, on-prem/per-client-instance deployment detail. The GCC-data-sovereignty framing is Thariq's own market read, not a direct source quote. Second pass 2026-07-06: loosened sentence rhythm per the batch-wide 'sounds like AI' fix. Third pass 2026-07-08: closer reworded for narrative stance — was general market observation ('any product that can't...'), now framed as Thariq's own standard for anything he'd lead. Fourth pass, same day (see pbos-audit-2026-07-08.md): fixed single-cause framing (data isolation presented as *the* blocker, not *a* blocker) and hedged an unqualified 'serious buyers' claim per the Devil's Advocate Generalisation Test.",
    },
    {
        num: 16, date: 'Tue, Aug 11, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'Personal Experiences',
        title: 'Test-automation pricing & GTM (ForTest)', status: 'Ready', format: 'Single image or document', image: true, score: 7.5,
        why: 'Solid, specific GTM story with a real number (90% time-savings claim) — good but slightly less vivid than the top narrative posts.',
        body: `Everyone selling into enterprise software eventually hits the same pricing question: undercut on price, or compete on defensible value. I did both — priced a product 30-40% below the market leader, but won deals on a specific number, not the discount.

The product was a test-automation tool I ran GTM for. The discount wasn't really why it won. Enterprise clients running major platform releases a couple of times a year can't afford broken IT for a day or two around that window, and our entire pitch was built around that calendar, not a features list. We packaged pre-built test suites into three tiers by severity, recorded and screenshotted every test session so a fix could be reproduced without re-running anything, and led every conversation with one line: this cuts the time it takes you to find and fix a bug by roughly 90%.

The discount got us in the room, but the 90% number is what actually kept the deal there once we were in it.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: "Source: Fortude Story.docx (Case Study 1, ForTest). Company/product name withheld per the anonymization rule. PBOS fix 2026-07-06: reworded an antithesis tic and cut a generic tacked-on closing paragraph. Second pass, same day: loosened closer rhythm per the batch-wide 'sounds like AI' fix.",
    },
    {
        num: 17, date: 'Thu, Aug 13, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'AI & Product Development',
        title: 'The "why not just use ChatGPT" problem', status: 'Ready', format: 'Text-only', image: false, score: 8.2,
        why: 'Honest, unresolved, differentiated — matches the "less AI slop" instruction directly by not offering a tidy fix.',
        body: `We gave enterprise prospects 90 days to trial an AI tool built specifically on their own data, for free. A lot of them still asked why they'd pay for it instead of just using ChatGPT.

That question stalled more deals than any feature gap did — and the frustrating part is, it wasn't wrong on day one. A general-purpose model and a tool trained on your own documents look nearly identical the first time you use them. The real gap only shows up over weeks, as the tool gets sharper on your specific product, your specific clients, your specific internal process — value that compounds, and can't be proven in a single trial session.

We never fully solved this while I was there. What I'd try differently now: stop selling the tool on day-one capability at all, and instead show the same query answered on day one versus day thirty, side by side — so the buyer sees the compounding curve directly instead of being asked to just trust it exists.

A sales motion that depends on data compounding over time has to prove the curve, not just the starting point — and that's the part I never actually solved.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: 'Source: Fortude Story.docx. Genuinely unresolved in the source material — framed as an honest open problem, not a tidy win. PBOS fix 2026-07-06: reworded a closer that addressed the reader directly with a directive.',
    },
    {
        num: 18, date: 'Sun, Aug 16, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'Personal Experiences',
        title: 'The honest "it wasn\'t foolproof" admission (Sling Mobility)', status: 'Ready', format: 'Text-only', image: false, score: 8.6,
        why: 'Vivid, specific, and unusually honest engineering-judgment story — one of the strongest in the batch.',
        body: `One version of a product I built made an assumption I knew wasn't fully safe — and we shipped it anyway, because it was still better than what came before.

At Sling Mobility, an early version of our battery-swap system needed to know when a battery was fully charged before releasing it to a rider. We didn't have a direct, certain reading at that stage. What we had was the charger's current draw — if current was still flowing, we inferred the battery wasn't done; once it dropped, we assumed full charge and opened the pigeonhole. It worked, and it cut swap time meaningfully. It also wasn't foolproof, and I knew it wasn't while we shipped it.

We fixed it properly in the next version, once we'd built the IoT layer that let the battery and the backend talk directly instead of us inferring anything. But I don't think the earlier version was a mistake. Waiting for the perfect measurement would have meant shipping nothing while riders kept losing 90 seconds a swap in the meantime.

Knowing the right answer was only part of it. The rest was knowing exactly which assumption I was making, shipping it anyway because it was still the right call, and fixing it the moment I could do better.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: 'Source: Sling Mobility Story.docx — "not foolproof" is Thariq\'s own phrase, not a paraphrase. PBOS fix 2026-07-06: reworded a recurring antithesis tic into a grounded first-person reflection.',
    },
    {
        num: 19, date: 'Tue, Aug 18, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'AI & Product Development',
        title: 'Trust as a measurable product metric', status: 'Ready', format: 'Text-only or short document', image: false, score: 6.5,
        why: 'Substantially rewritten 2026-07-06 — now an explicit synthesis of Posts 4/11/17 rather than a bare universal claim. Score adjusted down slightly from the original 7.0 to reflect that it\'s still the most synthesis-heavy, least standalone-differentiated post in the AI & Product Development set, even after the fix.',
        body: `Three different products taught me a version of the same thing: the RAGAS-based trust score on an enterprise AI assistant, the access controls we had to build once a tool got good at surfacing HR-style data, and the enterprise buyers who kept asking why they'd pay for a tool instead of just using ChatGPT.

None of those were solved by making a model more accurate. All three came down to whether the user could see a reason to trust the output enough to act on it — or in the ChatGPT case, a reason I never fully found.

That's made me suspicious of any product review that only reports accuracy, precision, and recall. Those numbers describe the model. They don't describe whether anyone actually trusts it enough to use it without checking behind it first.

I don't have a clean metric for this yet. What I've started watching instead: does the user check the answer before acting on it, does usage repeat without someone pulling them back in to verify, does asking "why did it say that" get a real answer or a shrug. None of that is as tidy as an accuracy score. It's closer to what actually predicts adoption.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: 'PBOS fix 2026-07-06 — substantially rewritten, not a line edit. Original had no experiential anchor (failed Content Guardrails\' "write from experience"), skipped straight from claim to lesson (failed Insight Generation), made an unqualified "most AI product teams" claim (failed Devil\'s Advocate), and closed with a literal command ("Ship the trust metric..."). Now explicitly draws its insight from Posts 4, 11, and 17 instead of asserting a bare truism — turns the pre-existing thematic overlap into an intentional synthesis.',
    },
    {
        num: 20, date: 'Thu, Aug 20, 2026', time: '8:00–10:00 AM AST', track: 'Builder', pillar: 'Potential in the Market',
        title: 'Closing synthesis — "no playbook yet"', status: 'Ready', format: 'Text-only', image: false, score: 7.6,
        why: 'Strong closer with a clear identity statement — score held back slightly by the closing-line CTA judgment call flagged in the draft itself.',
        body: `Every product leadership role I've had shared one pattern: nobody handed me a playbook, because the thing I was building didn't have one yet. Sri Lanka's first cricket analytics platform. Its first battery-swapping ecosystem. An enterprise AI assistant that had to earn trust before it earned usage.

The GCC right now has an unusual amount of "no playbook yet" work available, precisely because Vision 2030-scale ambition is moving faster than most organizations' internal playbooks for it. Enterprise AI adoption, EV infrastructure, digital-first consumer brands — the market potential isn't in doing the well-understood version of these categories better. It's in the parts nobody's built a repeatable process for yet, because the category itself is still being defined here.

That's a specific kind of product leader to look for: less "give me the requirements and I'll execute," more "there are no requirements yet, here's how I'd find them." A different skill, and a much smaller pool of people who've actually done it more than once.

If that's the gap on your team, that's the work I keep ending up doing — on purpose.`,
        hashtags: '#ProductManagement #ProductLeadership #Vision2030 #SaudiArabia',
        note: 'Judgment call flag: the closing line is the softest edge of the "no direct CTA" rule — it implies availability without stating it. Cut it if it reads too close to a pitch.',
    },
    {
        num: 21, date: 'Sun, Aug 23, 2026', time: '8:00–10:00 AM AST', track: 'Analyst', pillar: 'Crossover — Credibility & Process',
        title: 'Self-built performance analysis platform', status: 'Not Cleared', format: 'Text-only', image: false, score: 5.2,
        why: 'Good bridge content for a mixed SportsTech/Tech audience, but you flagged 2026-07-05 that all three crossover posts need more time before use.',
        body: `Before I write a line of code or open a spreadsheet, I ask what a head coach actually needs to make a decision before Saturday.

Working as a performance analyst at first-team level, I produce two structured outputs a week: a post-match performance report, and a pre-match report on the upcoming opponent. Early on I was doing this on borrowed tools that half-fit the job. So I built my own — a web-based platform that tracks pass maps, possession-loss zones, set-piece retention, attacking-phase sequencing, and individual player tactical profiles.

Building this forced me to ask the same question I ask in product work, more than any of the visualizations did: what decision does this actually inform, and who's making that decision under time pressure? A pass map that looks impressive but doesn't change what a coach does before kickoff is a wasted afternoon of engineering.

Sports analytics and enterprise product work share more of a spine than people expect, I've found — both come down to building something that earns trust fast enough to actually get used before the moment it mattered has already passed.`,
        hashtags: '#PerformanceAnalysis #SportsTech #ProductManagement',
        note: "NOT CLEARED — you said 2026-07-05 these three need more time before use. Canonical draft: analyst-thariq/linkedin-crossover-posts.md Draft 1. Also flagged: posting Posts 21-23 back-to-back conflicts with the \"occasional, ~monthly\" crossover cadence in platform-rules.md. PBOS fix 2026-07-06 (wording only, clearance unchanged): reworded an antithesis tic. Second pass, same day (wording only): loosened closing rhythm per the batch-wide 'sounds like AI' fix.",
    },
    {
        num: 22, date: 'Tue, Aug 25, 2026', time: '8:00–10:00 AM AST', track: 'Analyst', pillar: 'Crossover — Tactical Opinion',
        title: 'ACL injury & the case for injury-prevention data', status: 'Not Cleared', format: 'Text-only', image: false, score: 5.6,
        why: 'The most personal, honest hook of the three crossover drafts — still not cleared for use per your note.',
        body: `I care about performance analysis for a specific, personal reason. I ruptured my ACL playing football at university, without access to the surgical facilities that would have caught it early. That's a large part of why I care more about the load and movement data most clubs already collect and barely use, than about the highlight-reel stats everyone tracks anyway.

Most club-level analytics conversations are still built entirely around what happened in the match. The more useful, less-discussed question is what the data says about what's about to happen to a player's body — before it becomes an injury instead of a statistic.

That's the layer of performance analysis I actually want to spend a career on — less what won the match, more what kept the team available to compete in the next one.`,
        hashtags: '#PerformanceAnalysis #SportsTech #InjuryPrevention',
        note: "NOT CLEARED — same caveat as Post 21. Canonical draft: analyst-thariq/linkedin-crossover-posts.md Draft 2. Second pass 2026-07-06 (wording only, clearance unchanged): loosened closing rhythm per the batch-wide 'sounds like AI' fix.",
    },
    {
        num: 23, date: 'Thu, Aug 27, 2026', time: '8:00–10:00 AM AST', track: 'Analyst', pillar: 'Crossover — Credibility & Process',
        title: 'Barça Innovation Hub & FA coaching credentialing', status: 'Not Cleared', format: 'Text-only', image: false, score: 5.0,
        why: 'Solid credibility piece, but the narrowest appeal of the three, and also not cleared for use.',
        body: `Two credentials I'm working through right now, alongside a first-team analyst role: a professional diploma with the Barça Innovation Hub, and an FA coaching certification.

Neither is required for the seat I already have. I'm doing them anyway because the best performance-analysis work I've seen comes from people who understand the coaching decision from the inside, not just the data pipeline feeding it. A pass map means something different once you've had to make a substitution call in real time, with incomplete information, under a clock.

Credentialing myself on the coaching side of the game has mattered more to how I read the data than getting better at the tools ever did.`,
        hashtags: '#PerformanceAnalysis #SportsTech #BarcaInnovationHub',
        note: 'NOT CLEARED — same caveat as Post 21. Canonical draft: analyst-thariq/linkedin-crossover-posts.md Draft 3. PBOS fix 2026-07-06 (wording only, clearance unchanged): removed an advice-shaped closer, reworded as first-person reflection.',
    },
    {
        num: 24,
        date: 'Sun, Jul 12, 2026',
        time: '8:00–10:00 AM AST',
        track: 'Analyst',
        pillar: 'Crossover — Credibility & Process',
        title: 'First season at Glacis United FC — recap and the platform I built',
        status: 'Ready',
        format: 'Text-only',
        image: false,
        score: 8.8,
        why: 'Extremely specific numbers, honest trade-off reasoning (budget and facility constraints named together, not oversimplified to one cause), and a concrete build log (MVP through V0.3). Written by Thariq himself, not a Claude draft; this pass fixed em dashes, three stated-conclusion lines, and a factual correction on Gibraltar\'s ground count.',
        body: `I joined midway through the 25/26 season at Glacis United FC as their part-time First Team Performance Analyst. After 10 matches, 4,437 match events, 10 opposition team analyses, and countless player feedback sessions, the season came to an end a few months back.

Implementing the data gathering process and translating that data into something meaningful for coaches and players, many of whom were seeing visualisations of their own match performance for the first time in their playing careers.

I had to rely on my own football knowledge and spend time with the coaches to understand their game model and the functional responsibilities of each player. As analysts, we see data and plan our reports and recommendations. But the moment you truly understand the coach's game model and what each player is responsible for on match day, the data starts to make far more sense. That realisation made the platform I built significantly better and more meaningful.

Capturing the data was a tedious process, entirely manual, but detailed. I know that in today's AI-driven world I could have explored computer vision solutions. But when a club is going through challenging times, it's difficult to ask them to invest. On top of that, Gibraltar only has two grounds, and both have similar setups, so getting usable tactical camera footage is genuinely difficult no matter which one you're working from.

In an environment where a club can't afford a proper setup, I needed a different approach to solving problems. My background in tech and product management pushed me to build this platform instead.

MVP — Excel Workbook
V0.1 — Lovable web app for data visualisation
V0.2 — Lovable for data entry and visualisation
V0.3 — Migrated away from Lovable, running directly on my own Supabase project instead
Next — Automate what can be automated

Building this while keeping the analysis work on track meant most of it happened late at night, around matchday deadlines.

First season done. A lot learned. Nowhere near finished.`,
        hashtags: '#PerformanceAnalysis #SportsTech #GlacisUnitedFC',
        note: "Written by Thariq, brought to Claude for a PBOS pass 2026-07-12. Data confirmed cleared to share by Thariq directly. Fixed: five prose em dashes removed per the standing no-em-dash rule; three stated-conclusion lines cut or replaced with concrete detail ('pushed me miles outside my comfort zone', 'gave me a real sense of achievement', 'one of the most rewarding things I've done') per Writing DNA's 'avoid advice, describe experience'; factual correction, Gibraltar has two grounds not one, both similarly limited for tactical camera access; V0.3 given its reason (migrated to a self-managed Supabase project) instead of stating the change with no explanation. Hashtags aligned to the established Analyst crossover signature (#PerformanceAnalysis #SportsTech + one topic tag), matching Posts 21-23, rather than the four ad hoc tags in Thariq's original draft. Also fixed, 2026-07-12: 'you need a different approach to solving problems' addressed the reader directly with generic advice; changed to 'I needed a different approach' to keep it in his own experience, per Thariq's confirmation. Score of 8.8 sits just below Post 1's 9.5 opener (that post has a sharper hook) but above most of the Builder batch's Authority/Experience posts (typically 8.0-8.7), reflecting the density of real, specific detail (4,437 events, the version history, the two named constraints) with very little left ungrounded."
    }
];
