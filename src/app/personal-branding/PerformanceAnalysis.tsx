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
        num: '1', title: 'Post 1: Failed product story', track: 'Builder',
        meta: 'Published Thu Jul 9, 7:14 AM · checked 6 days later',
        impressions: 658, reached: 405, reactions: 6, comments: 0, reposts: 0,
        engagementRate: '0.91%', length: '170 words', lengthVsDraft: '-8 words (-4%)',
    },
    {
        num: '24', title: 'Post 24: Glacis United FC recap', track: 'Analyst',
        meta: 'Published Sun Jul 12, 10:05 AM · checked 3 days later',
        impressions: 492, reached: 262, reactions: 11, comments: 0, reposts: 0,
        engagementRate: '2.24%', length: '330 words', lengthVsDraft: 'n/a (self-written, no draft)',
    },
    {
        num: '4', title: 'Post 4: RAGAS/trust pivot', track: 'Builder',
        meta: 'Published Wed Jul 15, 7:35 AM · checked 4 days later (updated 2026-07-19, first check was same-day)',
        impressions: 174, reached: 77, reactions: 5, comments: 2, reposts: 0,
        engagementRate: '4.02%', length: '358 words', lengthVsDraft: '+56 words (+19%)',
    },
    {
        num: '25', title: 'Post 25: "Seems like AI slop" flag opinion', track: 'Builder',
        meta: 'Published Fri Jul 31, 11:28 AM · checked 3 days later',
        impressions: 299, reached: 163, reactions: 3, comments: 0, reposts: 0,
        engagementRate: '1.00%', length: '185 words', lengthVsDraft: 'n/a (self-written, no draft)',
    },
    {
        num: '8', title: 'Post 8: HudHud Maps review', track: 'Builder',
        meta: 'Published Wed Aug 5, 8:15 AM · checked 3 days later (updated 2026-08-08, first check was 1 day)',
        impressions: 9621, reached: 6906, reactions: 30, comments: 6, reposts: 0,
        engagementRate: '0.37%', length: '327 words', lengthVsDraft: 'Published as the fixed draft, word for word, only hyperlinks and a single image added',
    },
];

const BAR_DATA = [
    { label: 'Post 1 (170 words)', widthPct: 23, value: '0.91%' },
    { label: 'Post 24 (330 words)', widthPct: 56, value: '2.24%' },
    { label: 'Post 4 (358 words)', widthPct: 100, value: '4.02%' },
    { label: 'Post 25 (185 words)', widthPct: 25, value: '1.00%' },
    { label: 'Post 8 (327 words)', widthPct: 9, value: '0.37%' },
];

function trackClass(t: 'Builder' | 'Analyst') {
    return t === 'Builder' ? styles.bTrackBuilder : styles.bTrackAnalyst;
}

export default function PerformanceAnalysis() {
    return (
        <>
            <div className={styles.updatedBadge}>Last updated 2026-08-08 (Post 8 re-checked), by Claude</div>
            <p className={styles.perfIntro}>
                A working analysis of the five posts published so far, matching them against the drafts originally
                provided (where a draft exists), tracking what changed before posting, how long each post is, and
                what the real LinkedIn data shows. This page isn&apos;t connected to LinkedIn: it&apos;s updated by
                hand each time a new post-performance-log.xlsx analytics export comes in.
            </p>

            {/* KPI Grid */}
            <div className={styles.kpiGrid}>
                <div className={`${styles.kpi} ${styles.kpiInfo}`}>
                    <div className={styles.kpiNum}>5</div>
                    <div className={styles.kpiLabel}>Posts published</div>
                </div>
                <div className={styles.kpi}>
                    <div className={styles.kpiNum}>11,244</div>
                    <div className={styles.kpiLabel}>Total impressions</div>
                </div>
                <div className={styles.kpi}>
                    <div className={styles.kpiNum}>55</div>
                    <div className={styles.kpiLabel}>Total reactions</div>
                </div>
                <div className={styles.kpi}>
                    <div className={styles.kpiNum}>8</div>
                    <div className={styles.kpiLabel}>Total comments</div>
                </div>
            </div>

            {/* Profile overview */}
            <h2 className={styles.sectionTitle}>Profile overview: the account, not just these 5 posts</h2>
            <p className={styles.sectionSub}>
                Pulled 2026-07-15 from LinkedIn&apos;s whole-account Content and Audience analytics exports, not the
                per-post ones (predates Posts 25 and 8). This is the context the per-post numbers above sit inside.
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

            {/* Five posts at a glance */}
            <h2 className={styles.sectionTitle}>The five posts, at a glance</h2>
            <p className={styles.sectionSub}>
                Checked at different post-ages (6, 4, 3, 3, and 3 days, Post 8 re-checked 2026-08-08): don&apos;t
                read the impression gap between them as a verdict on which post performed better. See the caveat
                under the chart below.
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
                Engagement rate = (reactions + comments + reposts) ÷ impressions. Post 4&apos;s number below is from
                a 4-day-later check (updated 2026-07-19); its first check was same-day and read 5.00% off just 4
                reactions, a reminder of how noisy this metric is at low volumes. Still not a reliable read with only
                five data points, and Post 8 below is the clearest example why: huge reach, lowest engagement rate
                of any post so far, see the caveat below the chart.
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
                    No consistent length-to-engagement pattern yet: the shortest post (Post 1, 170 words) and the
                    second-shortest (Post 25, 185 words) sit near the bottom, but Post 24 (330 words) and Post 4
                    (358 words) don&apos;t move together either, one&apos;s mid-pack, one&apos;s the highest. Post 8
                    (327 words, almost the same length as Post 24) has the lowest rate of any post despite having by
                    far the largest audience, which is the clearest evidence yet that engagement rate and reach are
                    measuring different things: a post can win decisively on distribution while still converting a
                    smaller share of viewers into a reaction. Worth re-plotting once 8-10 posts are logged before
                    treating length as a real driver either way.
                </p>
            </div>

            {/* Draft vs published */}
            <h2 className={styles.sectionTitle}>Draft vs. published: what actually changed</h2>
            <p className={styles.sectionSub}>
                Posts 24 and 25 were self-written, no draft to compare. Posts 1 and 4 were drafts edited before
                publishing. Here&apos;s exactly what moved.
            </p>

            <div className={styles.diffCard}>
                <h3 className={styles.diffCardTitle}>Post 1: Failed product story</h3>
                <div className={styles.diffCardMeta}>178 words (draft) → 170 words (published). Two small cuts, nothing added, nothing reworded.</div>
                <ul className={styles.diffList}>
                    <li className={styles.diffCut}>
                        <span className={`${styles.diffTag} ${styles.tagCut}`}>Cut</span>
                        <del>&quot;There&apos;s no tidy resolution here:&quot;</del> removed from the opening of paragraph 2. The
                        sentence now goes straight from &quot;The specifics aren&apos;t the point&quot; to &quot;The product is on
                        hibernation now&quot;, tighter, loses a slightly writerly transition phrase.
                    </li>
                    <li className={styles.diffCut}>
                        <span className={`${styles.diffTag} ${styles.tagCut}`}>Cut</span>
                        <del>&quot;in this world&quot;</del> trimmed from the end of &quot;...any course you can find in this
                        world.&quot; Shortens the verbatim/sourced quote slightly, the core claim is intact.
                    </li>
                </ul>
            </div>

            <div className={styles.diffCard}>
                <h3 className={styles.diffCardTitle}>Post 4: RAGAS/trust pivot</h3>
                <div className={styles.diffCardMeta}>302 words (draft) → 358 words (published), +56 words. Substantially rewritten, not just trimmed, more added than cut.</div>
                <ul className={styles.diffList}>
                    <li className={styles.diffReword}>
                        <span className={`${styles.diffTag} ${styles.tagReword}`}>Reworded</span>
                        &quot;I sat down with <del>one colleague</del> <ins>a few colleagues</ins>&quot;, draft matched the
                        sourced fact (facts-source.md says &quot;a colleague,&quot; singular); published broadens it. Minor
                        drift from the source, worth knowing if this detail ever needs to line up with other posts about the
                        same story.
                    </li>
                    <li className={styles.diffReword}>
                        <span className={`${styles.diffTag} ${styles.tagReword}`}>Restructured</span>
                        The two-reason paragraph was split into three short paragraphs (setup, &quot;First:&quot;,
                        &quot;Second:&quot;) instead of one dense block: better rhythm, easier to scan.
                    </li>
                    <li className={styles.diffReword}>
                        <span className={`${styles.diffTag} ${styles.tagReword}`}>Style</span>
                        Em dashes removed in two places (&quot;a rollout problem, how&quot; changed to &quot;a rollout problem. How&quot;,
                        &quot;turned it around, once&quot; changed to &quot;turned it around. Once&quot;), consistent with the standing
                        no-em-dash rule. Note the draft itself still had these dashes; the rule wasn&apos;t swept across this
                        post before it was edited.
                    </li>
                    <li className={styles.diffReword}>
                        <span className={`${styles.diffTag} ${styles.tagReword}`}>Restructured</span>
                        The single &quot;validation layer / trust score per answer&quot; paragraph was split into &quot;So we
                        made two changes&quot; followed by two clearly separated paragraphs (&quot;Behind the scenes&quot; /
                        &quot;For users&quot;). The &quot;trust score per answer&quot; framing was dropped in favor of
                        &quot;surfaced supporting sources&quot;: a real framing change, not just a style edit.
                    </li>
                    <li className={styles.diffAdd}>
                        <span className={`${styles.diffTag} ${styles.tagAdd}`}>Added</span>
                        A new paragraph entirely absent from the draft: &quot;We also couldn&apos;t solve the second concern
                        with a feature alone. It took open conversations, setting the right expectations, and positioning the
                        assistant as a tool to support people&apos;s work rather than replace it. The product could earn
                        trust, but the rollout had to earn buy-in.&quot; The draft raised the &quot;fear of replacement&quot;
                        concern early on but never came back to resolve it: this closes that open loop. A real improvement
                        in completeness.
                    </li>
                    <li className={styles.diffFact}>
                        <span className={`${styles.diffTag} ${styles.tagFact}`}>Fact changed</span>
                        &quot;Usage among early adopters grew <del>75%</del> <ins>70%</ins>.&quot; <code>facts-source.md</code>&apos;s
                        sourced figure for this story is 75%. The published post says 70%, worth checking whether this was an
                        intentional correction or a slip while editing, since the two numbers can&apos;t both be the sourced fact.
                    </li>
                    <li className={styles.diffReword}>
                        <span className={`${styles.diffTag} ${styles.tagReword}`}>Quote replaced</span>
                        The closing line <del>&quot;Trust is a product feature, not an engineering metric&quot;</del> (a
                        verbatim, sourced quote flagged as protected in earlier passes) was replaced with <ins>&quot;Trust
                        isn&apos;t something users assume, it&apos;s something products have to earn&quot;</ins>, a new line,
                        not sourced from facts-source.md. Worth knowing this quote no longer appears anywhere in what&apos;s
                        actually live.
                    </li>
                    <li className={styles.diffAdd}>
                        <span className={`${styles.diffTag} ${styles.tagAdd}`}>Added</span>
                        A closing question, &quot;We spend a lot of time improving AI models. But are we spending enough time
                        designing for trust?&quot;, the draft had no closer at all. This follows the &quot;invite comments
                        organically&quot; rule, though this specific post got zero comments despite it: a real test case, not
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
                    <li>The protected verbatim quote (&quot;Trust is a product feature, not an engineering metric&quot;) isn&apos;t in the live post anymore: if that line still matters as a signature line for future content, it may be worth reserving it for a different post rather than treating it as used up.</li>
                </ul>
            </div>

            {/* What the data is showing */}
            <h2 className={styles.sectionTitle}>What the data is showing so far</h2>
            <p className={styles.sectionSub}>Same analysis logged in <code>PBOS/EXECUTION/03_Knowledge_Evolution.md</code>, kept in sync here.</p>
            <div className={styles.infoBox}>
                <h4>Post 8 (HudHud Maps review) is the first real break in the pattern, updated 2026-08-08</h4>
                <p>
                    <strong>Reach jumped by an order of magnitude, and it&apos;s the first post with real KSA volume, not
                    just KSA percentage.</strong> Re-checked 3 days after publish (was 1 day): 9,621 impressions, more
                    than 14x Post 1&apos;s previous-best 658, 30 reactions, and 6 comments, up from 2 at the 1-day check,
                    the biggest comment count of any tracked post by a wide margin. Viewer demographics now show 8%
                    Riyadh Region plus 6% Makkah Region, 14% combined KSA representation (up slightly from 13% at the
                    first check), the best of any post tracked. The company list now also includes NEOM, alongside
                    HudHud Maps itself, Careem, PIF, stc, and Elm, real relevant KSA tech/enterprise/giga-project names,
                    not just geography. This is the first post that suggests content and format, not just the
                    underlying network, can move the needle: it&apos;s the second Authority-type, non-Sri-Lanka post in
                    a row to outperform on KSA reach (after Post 25&apos;s 5% Riyadh), and it&apos;s real hands-on
                    product commentary rather than a personal story, which may be resonating with the same PM/tech
                    audience the account&apos;s follower base already skews toward.
                </p>
                <p>
                    <strong>But reach and engagement rate are not the same thing, and this post is the clearest proof
                    yet.</strong> Despite the huge and growing audience, Post 8&apos;s engagement rate is still just
                    0.37% at the 3-day check (was 0.38% at 1 day), the lowest of any tracked post, well below Post
                    1&apos;s 0.91% on a fraction of the reach. It published with a single image, not the full
                    carousel/document treatment the review recommended, so this isn&apos;t a clean
                    text-only-versus-carousel comparison, worth watching whether the full carousel format would move
                    the rate further, or whether reach and rate genuinely trade off independent of format. One notable
                    oddity: saves dropped from 2 to 0 between the two checks, possibly an export quirk rather than a
                    real un-save, worth watching if it recurs on future re-checks.
                </p>

                <h4>Consistent across all five posts, regardless of track or format</h4>
                <p>
                    <strong>Comments take longer to show up than the same-day check suggests, and Post 8&apos;s
                    re-check is the strongest evidence yet.</strong> Post 4 read zero comments same-day, but a
                    follow-up check 4 days later (2026-07-19) found 2. Post 25, checked 3 days after publish, still
                    read zero. Post 8 read 2 comments at just 1 day, already the fastest of any post, then grew to 6
                    by day 3, a 3x increase in comments alone over 2 more days. Post 1 and Post 24 still haven&apos;t
                    been re-checked since their original pulls. Standing rule unchanged and now better evidenced:
                    don&apos;t judge a post&apos;s comment count from a same-day or even 1-day check, re-check again
                    after a few more days, especially on a high-reach post.
                </p>
                <p>
                    <strong>Viewer base is still Sri Lanka-dominant on four of five posts</strong>, 25%, 34%, 21%, and
                    24% Colombo respectively, against 2%, 0%, 0%, and 5% Riyadh region on Post 25. Post 8 breaks this
                    too, just 1% Colombo against 14% combined KSA regions at the latest check, the first post where the
                    Sri Lanka signal essentially disappears. Two data points now (Posts 25 and 8) both non-Sri-Lanka,
                    Authority-type content with meaningfully better KSA representation than the Experience-type batch.
                    Still not proof the underlying network constraint is gone, most of the account&apos;s followers are
                    still Colombo-based, but it&apos;s a repeating pattern now, not a one-off.
                </p>
                <p>
                    <strong>Impression counts aren&apos;t comparable across these five</strong> since they were checked
                    at very different post-ages (6, 3, 4, 3, and 3 days, Post 8&apos;s earlier 1-day check has now been
                    superseded by the 3-day re-check above). Don&apos;t read a low number as a verdict yet, LinkedIn
                    keeps distributing a post well past the first 24-48 hours, and Post 8&apos;s own growth between its
                    two checks (impressions, reactions, and especially comments all up) is direct proof of that inside
                    a single post, not just across different posts.
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
