import React from 'react';
import styles from './page.module.css';

const FOLLOWUP_ROWS = [
    { touchpoint: 'Initial Outreach', timing: 'Day 0', purpose: 'Introduce fit, ask permission to share CV', send: 'What you’re already sending — keep it, but personalize (see recommendations)' },
    { touchpoint: 'Second Outreach', timing: 'Day 3–4 (if no reply)', purpose: 'Light bump — assume they’re busy, not disinterested', send: '“Hi [Name], following up in case this got buried — still very interested in the [Role] opening. Happy to send my CV directly if useful.”' },
    { touchpoint: 'Third Outreach', timing: 'Day 8–10 (if still no reply)', purpose: 'Add new value — don’t just repeat the ask', send: 'Attach CV proactively (if not sent) or share one concrete result tied to their JD (e.g. “Since I last messaged — wanted to share I built X, which is close to what you’re solving for with [product].”)' },
    { touchpoint: 'Fourth Outreach', timing: 'Day 18–21', purpose: 'Create a low-effort next step + graceful close', send: '“No worries if the timing isn’t right — happy to jump on a 10-min call this week if useful, otherwise I’ll leave it here and would love to stay on your radar for future roles.”' },
];

export default function OutreachReview() {
    return (
        <div className={styles.articleWrap}>
            <p className={styles.articleMeta}>
                Based on 18 direct outreach messages + 13 recruiter-initiated conversations logged Dec 2025–Jul 2026
            </p>

            <h2 className={styles.articleH2}>The headline</h2>
            <p className={styles.articleP}>
                The strategy itself is sound — messaging hiring managers and recruiters directly, in addition to
                applying, is exactly the kind of multiplier a job search needs. The core content of your pitch (8
                years PM, 0→1 scaling, named companies, transferable iqama, immediate availability) is also strong
                and relevant for the GCC market. The main issue isn&apos;t what you&apos;re saying — it&apos;s that
                the same message is going out almost word-for-word to everyone, which is very likely capping your
                reply rate below where the substance deserves.
            </p>

            <h2 className={styles.articleH2}>What&apos;s working</h2>
            <ul className={styles.articleList}>
                <li>Consistent, credible value proposition — 8 years, founding PM at Sling Mobility/FieldR, 0→1 scaling — comes through in every message.</li>
                <li>You always address the practical GCC-hiring concerns up front: current location, transferable iqama, availability, openness to relocate. Recruiters don&apos;t have to ask.</li>
                <li>Low-pressure close (&quot;would it make hiring easier if I sent my CV&quot;) — respects their process instead of pushing.</li>
                <li>Good persistence when redirected — the Devoteam thread (Lorelis → Joud, Sewar) followed through on every contact she gave you instead of dropping it.</li>
                <li>When someone said yes, you moved fast — CV sent same day, short thank-you, no dead air (SITA, Lucidya, Devoteam/Joud).</li>
            </ul>

            <h2 className={styles.articleH2}>What&apos;s not working</h2>
            <ul className={styles.articleList}>
                <li>
                    <strong>Near-identical copy sent to two people at the same company, same day.</strong> Both
                    Tarmeez contacts (Deema, Munthir) and both Binalyze contacts (Fulya, Elif) got the exact same
                    paragraph, word for word:
                    <blockquote className={styles.articleQuote}>
                        &quot;I noticed you are looking for a product manager with experience in scaling products
                        from 0 to 1... Would it make finding the right person for this any easier if I share my CV
                        here?&quot;
                    </blockquote>
                    If either pair compares notes internally — which is common when two people at one company both
                    do hiring — this reads as copy-paste, not genuine interest. Message the most relevant contact
                    first; only loop in a second person after a few days of silence, and vary the wording.
                </li>
                <li>
                    <strong>Typos and grammar slips</strong> undercut the &quot;detail-oriented PM&quot; pitch:
                    &quot;I&apos;m have 8 years of experience&quot; (Lucidya), &quot;I good at Excel&quot;
                    (Devoteam/Sewar), &quot;the the job post&quot; (both Binalyze messages), &quot;if this role
                    require me to relocated&quot; (MBC Shahid).
                </li>
                <li>
                    <strong>The opening line is templated almost verbatim</strong> across nearly all 18 messages
                    (&quot;I noticed you are looking for...&quot; / &quot;Would it make hiring/finding the right
                    person any easier if I sent my CV&quot;). Frequent recruiters see hundreds of these and will
                    recognize the pattern — it reduces how genuine the outreach feels even though the underlying fit
                    is real.
                </li>
                <li>
                    <strong>No follow-up currently happens.</strong> Of the 18 direct messages, only 3–4 got a
                    confirmed reply (SITA, Lucidya, Devoteam/Joud, and Mrsool which replied then rejected) — the
                    rest show no visible response. Every one of those is a dead-end right now instead of a queued
                    follow-up.
                </li>
                <li>
                    <strong>Minor inconsistency in stated location</strong> — Riyadh in most messages, Madinah in
                    the Lucidya message sent the same week. Worth picking one true &quot;currently based in&quot;
                    line and sticking to it, since recruiters occasionally cross-reference.
                </li>
                <li>
                    <strong>The ask is always &quot;can I send my CV&quot;</strong> — never a lighter/faster
                    alternative like a quick call, which sometimes moves things along faster than a CV sitting in
                    an inbox.
                </li>
            </ul>

            <h2 className={styles.articleH2}>Quick fixes for the message itself</h2>
            <ul className={styles.articleList}>
                <li>Proofread before sending — the typos above are avoidable and each one is in a message you can still edit your habits around.</li>
                <li>Swap the opening line per company: reference something specific — a metric from the JD, their recent product launch, a mutual connection, or the actual post they shared — instead of the generic &quot;I noticed you are looking for X.&quot;</li>
                <li>Pick one company detail to go deep on rather than listing three-plus industries every time (fintech/mobility/sportstech/AI SaaS in one message dilutes focus — the two or three most relevant to that specific JD land harder).</li>
                <li>Standardize your &quot;currently based in&quot; line to one city.</li>
            </ul>

            <h2 className={styles.articleH2}>Recommended follow-up sequence</h2>
            <p className={styles.articleP}>
                Your own tracker template already has the right columns for this — Initial / Second / Third / Fourth
                Outreach. Here&apos;s what should go in each one:
            </p>
            <div className={styles.tableScroll}>
                <table className={styles.table}>
                    <thead><tr>
                        <th style={{ width: 130 }}>Touchpoint</th>
                        <th style={{ width: 150 }}>Timing</th>
                        <th style={{ width: 220 }}>Purpose</th>
                        <th>What to send</th>
                    </tr></thead>
                    <tbody>
                        {FOLLOWUP_ROWS.map(r => (
                            <tr key={r.touchpoint}>
                                <td>{r.touchpoint}</td>
                                <td>{r.timing}</td>
                                <td>{r.purpose}</td>
                                <td>{r.send}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className={styles.articleP}>
                If there&apos;s still no reply after the fourth touchpoint, stop and move on — log the thread as
                closed rather than continuing to message. That keeps the approach professional and preserves the
                relationship for future roles.
            </p>

            <h2 className={styles.articleH2}>Threads to act on now</h2>
            <p className={styles.articleP}>Based on the timing rules above, applied to today (Jul 21, 2026):</p>
            <ul className={styles.articleList}>
                <li><strong>Recruited</strong> (Alex Elliott, Jul 13) — 8 days out, due for third outreach.</li>
                <li><strong>Node Technologies</strong> (Ahmed Alanazi, Jul 13) — 8 days out, due for third outreach.</li>
                <li><strong>King Salman International Airport</strong> (Faisal Alahmari, Jul 12) — 9 days out, due for third outreach.</li>
                <li><strong>TeamFeePay</strong> (James McGrath, Jul 10) — 11 days out, due for third/fourth outreach.</li>
                <li><strong>Devoteam</strong> — Sewar Abu Hejleh (Jul 6, no reply) and <strong>MBC Shahid</strong> / <strong>Tarmeez</strong> (x2) / <strong>SumerSports</strong> (Jul 8) — all past day 10–14, due for fourth/closing outreach.</li>
                <li><strong>SILQFi</strong> (Yasmen Baraja, Jul 16) — 5 days out, due for second outreach.</li>
                <li><strong>Lucidya</strong> (Amal Yaghi) and <strong>SITA</strong> (Igor Oliveira) already have CVs sent and acknowledged — these are in &quot;wait&quot; state, not follow-up state; a light nudge around day 14–21 from your CV-sent date if no next step is still reasonable.</li>
            </ul>
        </div>
    );
}
