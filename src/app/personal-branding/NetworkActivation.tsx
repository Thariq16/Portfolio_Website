'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';

const STORAGE_KEY = 'napChecklist';

const DAILY_IDS = ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7'];
const DAILY_LABELS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const PERPOST_IDS = ['p1', 'p2', 'p3'];
const WEEKLY_IDS = ['w1'];
const MONTHLY_IDS = ['m1', 'm2'];

function loadState(): Record<string, boolean> {
    if (typeof window === 'undefined') return {};
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch {
        return {};
    }
}

function ChecklistItem({
    id, checked, onToggle, children,
}: { id: string; checked: boolean; onToggle: (id: string) => void; children: React.ReactNode }) {
    return (
        <li className={`${styles.checkItem} ${checked ? styles.checkItemDone : ''}`}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={() => onToggle(id)}
                className={styles.checkBox}
            />
            <label htmlFor={id}>{children}</label>
        </li>
    );
}

function ProgressBar({ checked, total, suffix }: { checked: number; total: number; suffix: string }) {
    const pct = total ? Math.round((checked / total) * 100) : 0;
    return (
        <div className={styles.progressWrap}>
            <div className={styles.progressTrack}>
                <div className={styles.progressFill} style={{ width: `${pct}%` }} />
            </div>
            <div className={styles.progressLabel}>{checked} / {total} {suffix}</div>
        </div>
    );
}

export default function NetworkActivation() {
    const [state, setState] = useState<Record<string, boolean>>({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setState(loadState());
        setLoaded(true);
    }, []);

    useEffect(() => {
        if (!loaded) return;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [state, loaded]);

    // auto-reset the per-post checklist once all 3 are checked, ready for the next post
    useEffect(() => {
        if (!loaded) return;
        const allDone = PERPOST_IDS.every(id => state[id]);
        if (!allDone) return;
        const t = setTimeout(() => {
            setState(prev => {
                const next = { ...prev };
                PERPOST_IDS.forEach(id => { next[id] = false; });
                return next;
            });
        }, 900);
        return () => clearTimeout(t);
    }, [state, loaded]);

    function toggle(id: string) {
        setState(prev => ({ ...prev, [id]: !prev[id] }));
    }

    function resetAll() {
        if (!confirm('Reset all checkboxes on this page?')) return;
        localStorage.removeItem(STORAGE_KEY);
        setState({});
    }

    const dailyChecked = DAILY_IDS.filter(id => state[id]).length;
    const perpostChecked = PERPOST_IDS.filter(id => state[id]).length;

    return (
        <>
            <div className={styles.updatedBadge}>Added 2026-07-15, by Claude</div>
            <p className={styles.perfIntro}>
                The execution half of the content strategy that&apos;s been missing. The whole-account analytics
                confirmed the KSA-reach problem is structural — 29% of all 3,138 followers are Colombo-based, only 2%
                Riyadh region, and the account was largely dormant before this month. No amount of editing post content
                fixes that. This is real, not fake, activity: commenting genuinely on content you&apos;d read anyway, and
                reaching out to people you actually know. No engagement pods, no mass-connecting. Checkboxes below save
                in this browser so you can track your own weekly rhythm.
            </p>

            <div className={styles.infoBox}>
                <p>
                    See <code>platform-rules.md</code> for the mechanics behind why this matters: LinkedIn&apos;s 2026
                    algorithm runs on an Interest Graph rather than pure connections, roughly 70% of a post&apos;s reach is
                    decided in the first 60-90 minutes, and comments carry about 15x the weight of a like in that window.
                    A large but disengaged network actively suppresses reach, so depth with people you know beats growing
                    the connection count.
                </p>
            </div>

            {/* Daily habit */}
            <h2 className={styles.sectionTitle}>Daily habit</h2>
            <p className={styles.sectionSub}>
                Not just on posting days. Spreading this across the week builds an ongoing topic-relevance signal instead
                of a burst tied only to self-promotion.
            </p>
            <div className={styles.napCard}>
                <h3 className={styles.napCardTitle}>
                    Comment genuinely on 1 KSA/GCC post <span className={styles.freqBadge}>Every day</span>
                </h3>
                <p className={styles.napCardDesc}>
                    Find a product leader, founder, or tech account post worth a real reaction — something with an actual
                    point, not &quot;Great post!&quot; 10-15 minutes.
                </p>
                <ul className={styles.checklist}>
                    {DAILY_IDS.map((id, i) => (
                        <ChecklistItem key={id} id={id} checked={!!state[id]} onToggle={toggle}>
                            {DAILY_LABELS[i]}
                        </ChecklistItem>
                    ))}
                </ul>
                <ProgressBar checked={dailyChecked} total={DAILY_IDS.length} suffix="this week" />
            </div>

            {/* Pre-publish checklist */}
            <h2 className={styles.sectionTitle}>Before each post (Sun / Tue / Thu, 8:00-10:00 AM AST)</h2>
            <p className={styles.sectionSub}>
                Run this checklist for every post. It resets automatically once all three are checked, ready for the next
                posting day.
            </p>
            <div className={styles.napCard}>
                <h3 className={styles.napCardTitle}>Pre-publish and first-hour checklist</h3>
                <ul className={styles.checklist}>
                    <ChecklistItem id="p1" checked={!!state.p1} onToggle={toggle}>
                        <strong>Reach out first.</strong> The evening before or morning of, message 3-5 of the 501 Saudi
                        Arabia-based connections you actually know — colleagues, ex-clients, people you&apos;ve worked
                        with. Rotate who, not the same 5 people every time. Short and real: &quot;Posting something about
                        [topic] tomorrow morning, would genuinely value your take.&quot;
                    </ChecklistItem>
                    <ChecklistItem id="p2" checked={!!state.p2} onToggle={toggle}>
                        <strong>Publish in the window.</strong> 8:00-10:00 AM AST, Sun/Tue/Thu. Both real posts checked so
                        far slipped their planned date by a day or two — tightening this back up matters more now that
                        early velocity decides most of total reach.
                    </ChecklistItem>
                    <ChecklistItem id="p3" checked={!!state.p3} onToggle={toggle}>
                        <strong>Stay active for the first 60-90 minutes.</strong> Reply to every comment immediately.
                        Comment on 1-2 other people&apos;s posts in that same window instead of closing the tab — this is
                        the highest-leverage 90 minutes of the whole cycle.
                    </ChecklistItem>
                </ul>
                <ProgressBar checked={perpostChecked} total={PERPOST_IDS.length} suffix="for this post" />
            </div>

            {/* Weekly */}
            <h2 className={styles.sectionTitle}>Weekly</h2>
            <div className={styles.napCard}>
                <h3 className={styles.napCardTitle}>
                    Grow topic proximity, not connection count <span className={styles.freqBadge}>Once a week</span>
                </h3>
                <ul className={styles.checklist}>
                    <ChecklistItem id="w1" checked={!!state.w1} onToggle={toggle}>
                        Find and follow or genuinely engage with 1-2 new Saudi-based product/tech/founder accounts whose
                        content is actually relevant — not a mass-follow exercise. This nudges what topic cluster the
                        algorithm associates the account with, and slowly turns cold 1st-degree connections into people
                        who&apos;ve seen your name in their feed before.
                    </ChecklistItem>
                </ul>
            </div>

            {/* Monthly */}
            <h2 className={styles.sectionTitle}>Monthly network hygiene</h2>
            <div className={styles.napCard}>
                <h3 className={styles.napCardTitle}>
                    Audit the 501 <span className={styles.freqBadge}>Once a month</span>
                </h3>
                <ul className={styles.checklist}>
                    <ChecklistItem id="m1" checked={!!state.m1} onToggle={toggle}>
                        Skim the Saudi Arabia-based connections list and note which are real relationships (worked
                        together, met at an event, mutual connections in common) vs. old adds with no context. Prioritize
                        outreach toward the former — they&apos;re far more likely to give a genuine first-hour comment.
                    </ChecklistItem>
                    <ChecklistItem id="m2" checked={!!state.m2} onToggle={toggle}>
                        Don&apos;t chase new connection requests as the fix — a large but disengaged network actively
                        suppresses reach. Depth with the 501 matters more than growing to 600 or 700.
                    </ChecklistItem>
                </ul>
            </div>

            <div className={styles.warnBox}>
                <h4>What this plan does NOT ask for</h4>
                <ul>
                    <li>No engagement pods, no reciprocal like-for-like arrangements, no fake comments.</li>
                    <li>No mass-connecting with strangers to inflate the Saudi Arabia connection count.</li>
                    <li>No change to post content or length based on this — that&apos;s tracked separately in the Performance Analysis tab.</li>
                </ul>
            </div>

            <h2 className={styles.sectionTitle}>Tracking whether this works</h2>
            <div className={styles.infoBox}>
                <p>
                    Two columns were added to the Log sheet in <code>post-performance-log.xlsx</code>: &quot;Warm-up
                    outreach done?&quot; and &quot;# first-hour comments (known connections)&quot;. Fill these in alongside
                    each post&apos;s real numbers. As of 2026-07-15 zero posts have the warm-up actually logged, so
                    there&apos;s nothing to compare against yet, but once a few posts have it, it&apos;ll be possible to
                    check whether posts with warm-up genuinely outperform ones without.
                </p>
            </div>

            <div className={styles.napResetRow}>
                <button className={styles.resetBtn} onClick={resetAll}>Reset all checkboxes</button>
            </div>

            <p className={styles.footerNote}>
                Companion to the Performance Analysis tab (the content-and-data side of the strategy). Checkbox state
                saves locally in this browser only — it won&apos;t sync across devices.
            </p>
        </>
    );
}
