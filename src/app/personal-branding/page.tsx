'use client';

import React, { useMemo, useState } from 'react';
import { Info } from 'lucide-react';
import { posts, type Post } from './data';
import styles from './page.module.css';

type SortMode = 'order' | 'score-desc' | 'score-asc' | 'date';

function statusClass(s: Post['status']) {
    if (s === 'Ready') return styles.sReady;
    if (s === 'Skeleton') return styles.sSkeleton;
    return styles.sNotcleared;
}
function scoreClass(n: number) {
    if (n >= 8) return styles.scoreHigh;
    if (n >= 6) return styles.scoreMid;
    return styles.scoreLow;
}
function trackClass(t: Post['track']) {
    return t === 'Builder' ? styles.bTrackBuilder : styles.bTrackAnalyst;
}
function firstParagraph(body: string) {
    return body.trim().split(/\n\n+/)[0];
}
function paragraphs(body: string) {
    return body.trim().split(/\n\n+/);
}

export default function PersonalBrandingPage() {
    const [query, setQuery] = useState('');
    const [track, setTrack] = useState('');
    const [pillar, setPillar] = useState('');
    const [status, setStatus] = useState('');
    const [format, setFormat] = useState('');
    const [sort, setSort] = useState<SortMode>('order');
    const [expanded, setExpanded] = useState<Set<number>>(new Set());
    const [editing, setEditing] = useState<Set<number>>(new Set());
    const [edits, setEdits] = useState<Record<number, string>>({});
    const [copiedNum, setCopiedNum] = useState<number | null>(null);

    const tracks = useMemo(() => Array.from(new Set(posts.map(p => p.track))).sort(), []);
    const pillars = useMemo(() => Array.from(new Set(posts.map(p => p.pillar))).sort(), []);
    const statuses = useMemo(() => Array.from(new Set(posts.map(p => p.status))).sort(), []);
    const formats = useMemo(() => Array.from(new Set(posts.map(p => p.format))).sort(), []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        let list = posts.filter(p => {
            if (track && p.track !== track) return false;
            if (pillar && p.pillar !== pillar) return false;
            if (status && p.status !== status) return false;
            if (format && p.format !== format) return false;
            if (q && !(p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q))) return false;
            return true;
        });
        if (sort === 'score-desc') list = list.slice().sort((a, b) => b.score - a.score);
        else if (sort === 'score-asc') list = list.slice().sort((a, b) => a.score - b.score);
        else list = list.slice().sort((a, b) => a.num - b.num);
        return list;
    }, [query, track, pillar, status, format, sort]);

    const stats = useMemo(() => {
        const total = posts.length;
        const ready = posts.filter(p => p.status === 'Ready').length;
        const avg = (posts.reduce((a, p) => a + p.score, 0) / total).toFixed(1);
        return { total, ready, avg };
    }, []);

    function toggle(num: number) {
        setExpanded(prev => {
            const next = new Set(prev);
            if (next.has(num)) next.delete(num); else next.add(num);
            return next;
        });
    }
    function clearFilters() {
        setTrack(''); setPillar(''); setStatus(''); setFormat('');
        setSort('order'); setQuery('');
    }
    function startEdit(p: Post) {
        setExpanded(prev => new Set(prev).add(p.num));
        setEditing(prev => new Set(prev).add(p.num));
        setEdits(prev => (p.num in prev ? prev : { ...prev, [p.num]: p.body }));
    }
    function stopEdit(num: number) {
        setEditing(prev => {
            const next = new Set(prev);
            next.delete(num);
            return next;
        });
    }
    function resetEdit(p: Post) {
        setEdits(prev => ({ ...prev, [p.num]: p.body }));
    }
    async function copyForLinkedIn(p: Post) {
        const text = edits[p.num] ?? p.body;
        const full = p.hashtags ? `${text}\n\n${p.hashtags}` : text;
        try {
            await navigator.clipboard.writeText(full);
            setCopiedNum(p.num);
            setTimeout(() => setCopiedNum(n => (n === p.num ? null : n)), 2000);
        } catch {
            // clipboard API unavailable — ignore
        }
    }

    return (
        <main className={styles.main}>
            {/* ── Hero ── */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroInner}>
                        <div className={styles.heroBadge}>
                            <Info size={14} />
                            <span>Private · Not Indexed</span>
                        </div>
                        <h1 className={styles.heroTitle}>
                            Personal Branding <span className={styles.heroAccent}>Content Calendar</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            {posts.length} drafted posts (Jul 5 – Aug 25, 2026) · Builder Thariq &amp; Analyst Thariq tracks
                        </p>
                    </div>
                </div>
            </section>

            <div className="container">
                {/* ── Disclaimer ── */}
                <div className={styles.note}>
                    Scores are a relative editorial read on hook strength, strategic fit, and real-world readiness across
                    this batch — not an engagement prediction. <strong>Status:</strong> Ready = drafted and cleared ·
                    Skeleton = needs input before it&apos;s real · Not Cleared = drafted but flagged as needing more time.
                    <strong> 📷 icon</strong> = this post got an image/carousel recommendation.
                    Use <strong>✎ Edit</strong> to tweak a draft in-browser, then <strong>Copy for LinkedIn</strong> —
                    edits only live in this browser tab and reset on refresh, so update the source markdown files
                    yourself once you&apos;re happy with a version.
                </div>

                {/* ── KPI Grid ── */}
                <div className={styles.kpiGrid}>
                    <div className={`${styles.kpi} ${styles.kpiInfo}`}>
                        <div className={styles.kpiNum}>{stats.total}</div>
                        <div className={styles.kpiLabel}>Total posts</div>
                    </div>
                    <div className={`${styles.kpi} ${styles.kpiPositive}`}>
                        <div className={styles.kpiNum}>{stats.ready}</div>
                        <div className={styles.kpiLabel}>Ready</div>
                    </div>
                    <div className={styles.kpi}>
                        <div className={styles.kpiNum}>{stats.avg}</div>
                        <div className={styles.kpiLabel}>Avg score</div>
                    </div>
                    <div className={styles.kpi}>
                        <div className={styles.kpiNum}>Jul 5 – Aug 25</div>
                        <div className={styles.kpiLabel}>Date range</div>
                    </div>
                </div>

                {/* ── Filters ── */}
                <div className={styles.controls}>
                    <input type="text" className={styles.searchInput} placeholder="Search title or body..."
                        value={query} onChange={e => setQuery(e.target.value)} />
                    <select className={styles.select} value={track} onChange={e => setTrack(e.target.value)}>
                        <option value="">All tracks</option>
                        {tracks.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <select className={styles.select} value={pillar} onChange={e => setPillar(e.target.value)}>
                        <option value="">All pillars</option>
                        {pillars.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                    <select className={styles.select} value={status} onChange={e => setStatus(e.target.value)}>
                        <option value="">All statuses</option>
                        {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <select className={styles.select} value={format} onChange={e => setFormat(e.target.value)}>
                        <option value="">All formats</option>
                        {formats.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                    <select className={styles.select} value={sort} onChange={e => setSort(e.target.value as SortMode)}>
                        <option value="order">Post order</option>
                        <option value="score-desc">Score (high → low)</option>
                        <option value="score-asc">Score (low → high)</option>
                    </select>
                    <button className={styles.clearBtn} onClick={clearFilters}>Clear filters</button>
                    <span className={styles.pillCount}>{filtered.length} of {posts.length}</span>
                </div>

                {/* ── Card Grid ── */}
                <div className={styles.grid}>
                    {filtered.map(p => {
                        const isOpen = expanded.has(p.num);
                        const isEditing = editing.has(p.num);
                        const isEdited = edits[p.num] !== undefined && edits[p.num] !== p.body;
                        const currentBody = edits[p.num] ?? p.body;
                        return (
                            <div key={p.num} className={styles.card}>
                                <div className={styles.cardTop}>
                                    <span className={styles.postNum}>POST {p.num}</span>
                                    <div className={styles.datetime}>
                                        <div className={styles.datetimeD}>{p.date}</div>
                                        <div>{p.time}</div>
                                    </div>
                                </div>
                                <div className={styles.badges}>
                                    <span className={`${styles.badge} ${trackClass(p.track)}`}>{p.track}</span>
                                    <span className={`${styles.badge} ${styles.bPillar}`}>{p.pillar}</span>
                                    <span className={`${styles.badge} ${statusClass(p.status)}`}>{p.status}</span>
                                    <span className={`${styles.badge} ${styles.bFormat}`}>{p.format}</span>
                                    <span className={`${styles.badge} ${styles.bFormat}`}>{p.image ? '📷 Image recommended' : '✎ Text-only'}</span>
                                    {isEdited && <span className={`${styles.badge} ${styles.bEdited}`}>Edited (unsaved)</span>}
                                    <span className={styles.scoreWrap}>
                                        <span className={`${styles.scoreCircle} ${scoreClass(p.score)}`}>{p.score}</span>
                                    </span>
                                </div>
                                <h3 className={styles.cardTitle}>{p.title}</h3>
                                <div className={styles.scoreWhy}>{p.why}</div>
                                {!isOpen && <div className={styles.preview}>{firstParagraph(currentBody)}</div>}
                                {isOpen && !isEditing && (
                                    <div className={styles.fullBody}>
                                        {paragraphs(currentBody).map((para, i) => <p key={i}>{para}</p>)}
                                        {p.links && (
                                            <div className={styles.links}>
                                                <strong>First comment:</strong><br />
                                                {p.links.map(([label, href], i) => (
                                                    <React.Fragment key={href}>
                                                        <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                                                        {i < p.links!.length - 1 && <br />}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        )}
                                        {p.hashtags && <div className={styles.hashtags}>{p.hashtags}</div>}
                                        {p.note && <div className={styles.cardNote}>{p.note}</div>}
                                    </div>
                                )}
                                {isEditing && (
                                    <div className={styles.editBox}>
                                        <textarea
                                            className={styles.editTextarea}
                                            value={currentBody}
                                            onChange={e => setEdits(prev => ({ ...prev, [p.num]: e.target.value }))}
                                            rows={12}
                                        />
                                        {p.hashtags && <div className={styles.hashtags}>{p.hashtags}</div>}
                                    </div>
                                )}
                                <div className={styles.cardActions}>
                                    <button className={styles.toggleBtn} onClick={() => toggle(p.num)}>
                                        {isOpen ? 'Show less ▲' : 'Read full draft ▼'}
                                    </button>
                                    {!isEditing && (
                                        <button className={styles.toggleBtn} onClick={() => startEdit(p)}>
                                            ✎ Edit
                                        </button>
                                    )}
                                    {isEditing && (
                                        <>
                                            <button className={styles.toggleBtn} onClick={() => stopEdit(p.num)}>
                                                Done editing
                                            </button>
                                            {isEdited && (
                                                <button className={styles.toggleBtnMuted} onClick={() => resetEdit(p)}>
                                                    Reset to original
                                                </button>
                                            )}
                                        </>
                                    )}
                                    <button className={styles.copyBtn} onClick={() => copyForLinkedIn(p)}>
                                        {copiedNum === p.num ? 'Copied ✓' : '📋 Copy for LinkedIn'}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filtered.length === 0 && (
                    <div className={styles.emptyState}>No posts match these filters.</div>
                )}

                <p className={styles.footerNote}>
                    Posting window: 8:00–10:00 AM AST (Riyadh) · Builder posts run Sun/Tue/Thu · Analyst crossover posts
                    (21–23) are logged here but marked Not Cleared — do not post without revisiting first.
                </p>
            </div>
        </main>
    );
}
