import React from 'react';
import styles from './page.module.css';

interface PostSummary {
    num: string;
    title: string;
    track: 'Builder' | 'Analyst';
    meta: string;
    impressions: number;
    reached: number;
    reactions: number;
    comments: number;
    reposts: number;
    engagementRate: string;
    length: string;
    lengthVsDraft: string;
}

const POST_SUMMARIES: PostSummary[] = [
    {
        num: '1', title: 'Post 1 — Failed product story', track: 'Builder',
        meta: 'Published Thu Jul 9, 7:14 AM · checked 6 days later',
        impressions: 658, reached: 405, reactions: 6, comments: 0, reposts: 0,
        engagementRate: '0.91%', length: '170 words', lengthVsDraft: '-8 words (-4%)',
    },
    {
        num: '24', title: 'Post 24 — Glacis United FC recap', track: 'Analyst',
        meta: 'Published Sun Jul 12, 10:05 AM · checked 3 days later',
        impressions: 492, reached: 262, reactions: 11, comments: 0, reposts: 0,
        engagementRate: '2.24%', length: '330 words', lengthVsDraft: 'n/a — self-written, no draft',
    },
    {
        num: '4', title: 'Post 4 — RAGAS/trust pivot', track: 'Builder',
        meta: 'Published Wed Jul 15, 7:35 AM · checked same day',
        impressions: 80, reached: 38, reactions: 4, comments: 0, reposts: 0,
        engagementRate: '5.00%', length: '358 words', lengthVsDraft: '+56 words (+19%)',
    },
];

const BAR_DATA = [
    { label: 'Post 1 (170 words)', widthPct: 18, value: '0.91%' },
    { label: 'Post 24 (330 words)', widthPct: 45, value: '2.24%' },
    { label: 'Post 4 (358 words)', widthPct: 100, value: '5.00%' },
];

function trackClass(t: 'Builder' | 'Analyst') {
    return t === 'Builder' ? styles.bTrackBuilder : styles.bTrackAnalyst;
}

export default function PerformanceAnalysis() {
    return (
        <>
            <div className={styles.updatedBadge}>Last updated 2026-07-15 (profile-level data added), by Claude</div>
            <p className={styles.perfIntro}>
                A working analysis of the three posts published so far, matching them against the drafts originally
                provided, tracking what changed before posting, how long each post is, and what the real LinkedIn data
                shows. This page isn&apos;t connected to LinkedIn — it&apos;s updated by hand each time a new
                post-performance-log.xlsx analytics export comes in.
            </p>

            {/* KPI Grid */}
            <div className={styles.kpiGrid}>
                <div className={`${styles.kpi} ${styles.kpiInfo}`}>
                    <div className={styles.kpiNum}>3</div>
                    <div className={styles.kpiLabel}>Posts published</div>
                </div>
                <div className={styles.kpi}>
                    <div className={styles.kpiNum}>1,230</div>
                    <div className={styles.kpiLabel}>Total impressions</div>
                </div>
                <div className={styles.kpi}>
                    <div className={styles.kpiNum}>21</div>
                    <div className={styles.kpiLabel}>Total reactions</div>
                </div>
                <div className={styles.kpi}>
                    <div className={styles.kpiNum}>0</div>
                    <div className={styles.kpiLabel}>Total comments</div>
                </div>
            </div>

            {/* Profile overview */}
            <h2 className={styles.sectionTitle}>Profile overview — the account, not just these 3 posts</h2>
            <p className={styles.sectionSub}>
                Pulled 2026-07-15 from LinkedIn&apos;s whole-account Content and Audience analytics exports, not the
                per-post ones. This is the context the per-post numbers above sit inside.
            </p>
            <div className={styles.infoBox}>
                <h4>The account was dormant, this week is close to its real start</h4>
                <p>
                    The trailing 12 months (Jul 16, 2025 – Jul 15, 2026) totaled <strong>3,541 impressions</strong> account-wide.
                    The last 7 days alone, the 3 posts tracked on this page, produced <strong>1,264</strong> of those, over
                    a third of a full year&apos;s reach in one week. Before this month the account was running at roughly
                    6-7 impressions a day. This isn&apos;t an underperforming push, it&apos;s closer to the actual starting
                    point of the account&apos;s real activity, and it&apos;s already outpacing its own baseline by a wide margin.
                </p>
                <p>
                    <strong>The Colombo-heavy audience is structural, not a per-post fluke.</strong> Across all 3,138 followers,
                    not just people who saw one specific post, <strong>29% are Colombo-based and only 2% are in the Riyadh
                    region.</strong> Every per-post demographic breakdown logged so far (25%, 34%, 21% Colombo) has just been
                    sampling from this same underlying pool. No amount of editing an individual post&apos;s content or length
                    changes who the algorithm has to distribute it to first.
                </p>
                <p>
                    <strong>Topic fit is actually reasonable</strong>, even though geography isn&apos;t: the follower base skews
                    senior (37% Senior, 7% Director, 6% CXO, 6% Owner) and IT/tech-heavy (20% IT Services and IT Consulting, 15%
                    Software Development, 6% Tech/Info/Internet), which lines up with the PM/product content being posted. The
                    gap to close is location, not subject-matter relevance.
                </p>
                <p>
                    <strong>One previously untracked post surfaced in this export:</strong> a post from <strong>May 14,
                    2026</strong> (&quot;productmanagement-ev-mobility&quot;) got <strong>574 impressions and 6
                    engagements</strong>, the second-best of any post on the account, ever, and it predates this current batch
                    entirely. Worth asking for the text and logging it properly, since whatever it did right is worth
                    understanding.
                </p>
            </div>

            {/* Three posts at a glance */}
            <h2 className={styles.sectionTitle}>The three posts, at a glance</h2>
            <p className={styles.sectionSub}>
                Checked at very different post-ages (6 days, 3 days, same-day) — don&apos;t read the impression gap between
                them as a verdict on which post performed better. See the caveat under the chart below.
            </p>
            <div className={styles.pGrid}>
                {POST_SUMMARIES.map(p => (
                    <div key={p.num} className={styles.pCard}>
                        <h3 className={styles.pCardTitle}>{p.title}</h3>
                        <div className={styles.pCardMeta}>
                            <span className={`${styles.badge} ${trackClass(p.track)}`}>{p.track}</span> · {p.meta}
                        </div>
                        <div className={styles.pMetricRow}><span className={styles.k}>Impressions</span><span className={styles.v}>{p.impressions}</span></div>
                        <div className={styles.pMetricRow}><span className={styles.k}>Members reached</span><span className={styles.v}>{p.reached}</span></div>
                        <div className={styles.pMetricRow}><span className={styles.k}>Reactions / Comments / Reposts</span><span className={styles.v}>{p.reactions} / {p.comments} / {p.reposts}</span></div>
                        <div className={styles.pMetricRow}><span className={styles.k}>Engagement rate</span><span className={styles.v}>{p.engagementRate}</span></div>
                        <div className={styles.pMetricRow}><span className={styles.k}>Length</span><span className={styles.v}>{p.length}</span></div>
                        <div className={styles.pMetricRow}><span className={styles.k}>Length vs. draft</span><span className={styles.v}>{p.lengthVsDraft}</span></div>
                    </div>
                ))}
            </div>

            {/* Bar chart */}
            <h2 className={styles.sectionTitle}>Length vs. engagement rate</h2>
            <p className={styles.sectionSub}>
                Engagement rate = (reactions + comments + reposts) ÷ impressions. Post 4 shows the highest rate, but
                that&apos;s 4 reactions on 80 impressions — a single extra reaction would swing it by more than a full
                point. Not a reliable read yet with only three data points.
            </p>
            <div className={styles.barBox}>
                {BAR_DATA.map(b => (
                    <div key={b.label} className={styles.barRow}>
                        <div className={styles.barLabel}>{b.label}</div>
                        <div className={styles.barTrack}>
                            <div className={styles.barFill} style={{ width: `${b.widthPct}%` }} />
                        </div>
                        <div className={styles.barVal}>{b.value}</div>
                    </div>
                ))}
                <p className={styles.barCaveat}>
                    No consistent length-to-engagement pattern yet: the shortest post (Post 1) has the lowest rate, but
                    the two longer posts don&apos;t move in a clean line either, and Post 4&apos;s rate is built on only 4
                    reactions. Worth re-plotting once 8-10 posts are logged before treating length as a real driver either way.
                </p>
            </div>

            {/* Draft vs published */}
            <h2 className={styles.sectionTitle}>Draft vs. published: what actually changed</h2>
            <p className={styles.sectionSub}>
                Post 24 was self-written, no draft to compare. Posts 1 and 4 were drafts edited before publishing.
                Here&apos;s exactly what moved.
            </p>

            <div className={styles.diffCard}>
                <h3 className={styles.diffCardTitle}>Post 1 — Failed product story</h3>
                <div className={styles.diffCardMeta}>178 words (draft) → 170 words (published). Two small cuts, nothing added, nothing reworded.</div>
                <ul className={styles.diffList}>
                    <li className={styles.diffCut}>
                        <span className={`${styles.diffTag} ${styles.tagCut}`}>Cut</span>
                        <del>&quot;There&apos;s no tidy resolution here:&quot;</del> removed from the opening of paragraph 2. The
                        sentence now goes straight from &quot;The specifics aren&apos;t the point&quot; to &quot;The product is on
                        hibernation now&quot; — tighter, loses a slightly writerly transition phrase.
                    </li>
                    <li className={styles.diffCut}>
                        <span className={`${styles.diffTag} ${styles.tagCut}`}>Cut</span>
                        <del>&quot;in this world&quot;</del> trimmed from the end of &quot;...any course you can find in this
                        world.&quot; Shortens the verbatim/sourced quote slightly, the core claim is intact.
                    </li>
                </ul>
            </div>

            <div className={styles.diffCard}>
                <h3 className={styles.diffCardTitle}>Post 4 — RAGAS/trust pivot</h3>
                <div className={styles.diffCardMeta}>302 words (draft) → 358 words (published), +56 words. Substantially rewritten, not just trimmed, more added than cut.</div>
                <ul className={styles.diffList}>
                    <li className={styles.diffReword}>
                        <span className={`${styles.diffTag} ${styles.tagReword}`}>Reworded</span>
                        &quot;I sat down with <del>one colleague</del> <ins>a few colleagues</ins>&quot; — draft matched the
                        sourced fact (facts-source.md says &quot;a colleague,&quot; singular); published broadens it. Minor
                        drift from the source, worth knowing if this detail ever needs to line up with other posts about the
                        same story.
                    </li>
                    <li className={styles.diffReword}>
                        <span className={`${styles.diffTag} ${styles.tagReword}`}>Restructured</span>
                        The two-reason paragraph was split into three short paragraphs (setup, &quot;First:&quot;,
                        &quot;Second:&quot;) instead of one dense block — better rhythm, easier to scan.
                    </li>
                    <li className={styles.diffReword}>
                        <span className={`${styles.diffTag} ${styles.tagReword}`}>Style</span>
                        Em dashes removed in two places (&quot;a rollout problem — how&quot; → &quot;a rollout problem. How&quot;,
                        &quot;turned it around — once&quot; → &quot;turned it around. Once&quot;), consistent with the standing
                        no-em-dash rule. Note the draft itself still had these dashes; the rule wasn&apos;t swept across this
                        post before it was edited.
                    </li>
                    <li className={styles.diffReword}>
                        <span className={`${styles.diffTag} ${styles.tagReword}`}>Restructured</span>
                        The single &quot;validation layer / trust score per answer&quot; paragraph was split into &quot;So we
                        made two changes&quot; followed by two clearly separated paragraphs (&quot;Behind the scenes&quot; /
                        &quot;For users&quot;). The &quot;trust score per answer&quot; framing was dropped in favor of
                        &quot;surfaced supporting sources&quot; — a real framing change, not just a style edit.
                    </li>
                    <li className={styles.diffAdd}>
                        <span className={`${styles.diffTag} ${styles.tagAdd}`}>Added</span>
                        A new paragraph entirely absent from the draft: &quot;We also couldn&apos;t solve the second concern
                        with a feature alone. It took open conversations, setting the right expectations, and positioning the
                        assistant as a tool to support people&apos;s work rather than replace it. The product could earn
                        trust, but the rollout had to earn buy-in.&quot; The draft raised the &quot;fear of replacement&quot;
                        concern early on but never came back to resolve it — this closes that open loop. A real improvement
                        in completeness.
                    </li>
                    <li className={styles.diffFact}>
                        <span className={`${styles.diffTag} ${styles.tagFact}`}>Fact changed</span>
                        &quot;Usage among early adopters grew <del>75%</del> <ins>70%</ins>.&quot; <code>facts-source.md</code>&apos;s
                        sourced figure for this story is 75%. The published post says 70% — worth checking whether this was an
                        intentional correction or a slip while editing, since the two numbers can&apos;t both be the sourced fact.
                    </li>
                    <li className={styles.diffReword}>
                        <span className={`${styles.diffTag} ${styles.tagReword}`}>Quote replaced</span>
                        The closing line <del>&quot;Trust is a product feature, not an engineering metric&quot;</del> (a
                        verbatim, sourced quote flagged as protected in earlier passes) was replaced with <ins>&quot;Trust
                        isn&apos;t something users assume, it&apos;s something products have to earn&quot;</ins> — a new line,
                        not sourced from facts-source.md. Worth knowing this quote no longer appears anywhere in what&apos;s
                        actually live.
                    </li>
                    <li className={styles.diffAdd}>
                        <span className={`${styles.diffTag} ${styles.tagAdd}`}>Added</span>
                        A closing question, &quot;We spend a lot of time improving AI models. But are we spending enough time
                        designing for trust?&quot; — the draft had no closer at all. This follows the &quot;invite comments
                        organically&quot; rule, though this specific post got zero comments despite it — a real test case, not
                        yet a conclusive one.
                    </li>
                    <li className={styles.diffCut}>
                        <span className={`${styles.diffTag} ${styles.tagCut}`}>Cut</span>
                        Hashtag <del>#ProductLeadership</del> dropped, published with 3 tags instead of the draft&apos;s 4
                        (#ProductManagement #Vision2030 #SaudiArabia).
                    </li>
                </ul>
            </div>

            <div className={styles.warnBox}>
                <h4>Worth a direct check</h4>
                <ul>
                    <li>The 75%→70% usage-growth figure: <code>facts-source.md</code> says 75%. If 70% is actually correct, the source file needs updating so future drafts don&apos;t drift back to 75%.</li>
                    <li>The protected verbatim quote (&quot;Trust is a product feature, not an engineering metric&quot;) isn&apos;t in the live post anymore — if that line still matters as a signature line for future content, it may be worth reserving it for a different post rather than treating it as used up.</li>
                </ul>
            </div>

            {/* What the data is showing */}
            <h2 className={styles.sectionTitle}>What the data is showing so far</h2>
            <p className={styles.sectionSub}>Same analysis logged in <code>PBOS/EXECUTION/03_Knowledge_Evolution.md</code>, kept in sync here.</p>
            <div className={styles.infoBox}>
                <h4>Consistent across all three posts, regardless of track or format</h4>
                <p>
                    <strong>Zero comments on every post</strong>, including Post 1, which closed on a genuine question
                    specifically to invite one. One data point isn&apos;t enough to call the &quot;invite comments
                    organically&quot; rule ineffective — it may be a reach problem rather than a content problem, worth
                    tracking over the next few posts.
                </p>
                <p>
                    <strong>Viewer base is Sri Lanka-dominant on every post</strong>, 25%, 34%, and 21% Colombo respectively,
                    against 2% or 0% Riyadh region each time. This points at the account&apos;s underlying network as the
                    binding constraint on KSA reach, not any individual post&apos;s content or length.
                </p>
                <p>
                    <strong>Impression counts aren&apos;t comparable across these three</strong> since they were checked at
                    very different post-ages (6 days, 3 days, same-day). Don&apos;t read Post 4&apos;s low number as a verdict
                    yet — LinkedIn keeps distributing a post for 24-48 hours after publish.
                </p>
            </div>

            <p className={styles.footerNote}>
                Maintained manually. To update: share a new post&apos;s analytics export (the xlsx LinkedIn generates from
                &quot;View analytics&quot; → export) and, if the post was a drafted post, note any changes made before
                posting. This page, <code>post-performance-log.xlsx</code>, and{' '}
                <code>PBOS/EXECUTION/03_Knowledge_Evolution.md</code> get updated together so the numbers and the reasoning
                stay in sync.
            </p>
        </>
    );
}
