'use client';

import React, { useMemo, useState } from 'react';
import { Info } from 'lucide-react';
import { applications, recruiterOutreach, linkedinContacts, recruiterMessages, type Application } from './data';
import styles from './page.module.css';

/* ─── Date boundaries ─── */
const DATE_START_OVERALL = '2025-12-15';
const DATE_CUTOFF        = '2026-04-02'; // New CV date
const DATE_END           = '2026-07-01';
const DATE_JUL1          = '2026-07-01'; // Rolling "since Jul 1" window, open-ended

const PRE_CV_LABEL   = 'Dec 15 – Apr 1';
const POST_CV_LABEL  = 'Apr 2 – Jul 1';
const JUL1_CV_LABEL  = 'Jul 1 – present';

/* ─── Monthly chart config ─── */
const MONTHS       = ['2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07'];
const MONTH_LABELS = ['Dec 25', 'Jan 26', 'Feb 26', 'Mar 26', 'Apr 26', 'May 26', 'Jun 26', 'Jul 26'];
const MONTH_IS_POST = MONTHS.map(m => m >= '2026-04');

/* ─── Timeline toggle ─── */
type Timeline = 'overall' | 'pre' | 'post' | 'jul1';
const TIMELINES: { id: Timeline; label: string; sub: string }[] = [
    { id: 'overall', label: 'Overall',        sub: 'Dec 15, 2025 – present' },
    { id: 'pre',     label: 'Pre-New CV',     sub: PRE_CV_LABEL  },
    { id: 'post',    label: 'Post-New CV',    sub: POST_CV_LABEL },
    { id: 'jul1',    label: 'Jul 1 – Present', sub: JUL1_CV_LABEL },
];

/* ─── Table tab config ─── */
type TabId = 'all' | 'pre' | 'post' | 'jul1' | 'recruiters' | 'linkedin' | 'messages';
const TABS: { id: TabId; label: string }[] = [
    { id: 'all',        label: 'All Applications' },
    { id: 'pre',        label: `Pre-New CV (${PRE_CV_LABEL})` },
    { id: 'post',       label: `Post-New CV (${POST_CV_LABEL})` },
    { id: 'jul1',       label: `Since Jul 1 (${JUL1_CV_LABEL})` },
    { id: 'recruiters', label: 'Recruiter Outreach' },
    { id: 'linkedin',   label: 'LinkedIn Recruiter Contacts' },
    { id: 'messages',   label: 'Recruiter Messages' },
];

/* ─── Helpers ─── */
function shortChannel(channel: string) {
    const m = channel.match(/^([^(]+)/);
    return (m ? m[1] : channel).trim();
}
function badgeVariant(channel: string) {
    if (/linkedin/i.test(channel))         return styles.bLinkedin;
    if (/indeed/i.test(channel))           return styles.bIndeed;
    if (/recruiter|agency/i.test(channel)) return styles.bRecruiter;
    if (/direct/i.test(channel))           return styles.bDirect;
    if (/ai screening/i.test(channel))     return styles.bAi;
    if (/company site|ats/i.test(channel)) return styles.bAts;
    return styles.bOther;
}
function compareRows(a: Application, b: Application) {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    const chA = shortChannel(a.channel);
    const chB = shortChannel(b.channel);
    if (chA !== chB) return chA.localeCompare(chB);
    return (a.status || 'No Response').localeCompare(b.status || 'No Response');
}
function formatDate(iso: string) {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
function pct(num: number, den: number): string {
    if (den === 0) return '—';
    return Math.round((num / den) * 100) + '%';
}

/* ─── Stats per period ─── */
interface PeriodStats {
    total:        number;
    rejected:     number;
    noResponse:   number;
    responseRate: string;
    ghostRate:    string;
    companies:    number;
    apps:         Application[];
}
function computeStats(apps: Application[]): PeriodStats {
    const total      = apps.length;
    const rejected   = apps.filter(a => a.status === 'Rejected').length;
    const noResponse = total - rejected;
    return {
        total,
        rejected,
        noResponse,
        responseRate: pct(rejected, total),
        ghostRate:    pct(noResponse, total),
        companies:    new Set(apps.map(a => a.company)).size,
        apps,
    };
}

/* ─── KPI tiles per timeline ─── */
interface KpiTile {
    label:   string;
    value:   string | number;
    sub?:    string;
    variant?: 'positive' | 'negative' | 'neutral' | 'info';
    tooltip?: string;
}

function buildKpis(stats: PeriodStats, timeline: Timeline, preStats: PeriodStats, postStats: PeriodStats, jul1Stats: PeriodStats): KpiTile[] {
    const preRatePct  = parseInt(preStats.responseRate)  || 0;
    const postRatePct = parseInt(postStats.responseRate) || 0;
    const jul1RatePct = parseInt(jul1Stats.responseRate) || 0;
    const delta       = postRatePct - preRatePct;
    const jul1Delta    = jul1RatePct - postRatePct;
    const deltaStr    = delta >= 0 ? `+${delta}pp vs pre-CV` : `${delta}pp vs pre-CV`;
    const jul1DeltaStr = jul1Delta >= 0 ? `+${jul1Delta}pp vs post-CV` : `${jul1Delta}pp vs post-CV`;

    if (timeline === 'overall') return [
        { label: 'Total Applications',          value: stats.total,       sub: 'Dec 2025 – present',         variant: 'info' },
        { label: 'Companies Targeted',           value: stats.companies,   sub: 'Distinct employers',           variant: 'info' },
        { label: 'Feedback Received',            value: stats.rejected,    sub: `${stats.responseRate} response rate`, variant: 'neutral',
          tooltip: 'Any reply (rejection / screening) = feedback; application was reviewed' },
        { label: 'No Response Yet',              value: stats.noResponse,  sub: `${stats.ghostRate} ghost rate`, variant: 'neutral',
          tooltip: 'Applications with zero reply — may still be under review' },
        { label: 'Pre-New CV Response Rate',     value: preStats.responseRate,  sub: `${preStats.rejected} replies / ${preStats.total} apps`, variant: 'neutral',
          tooltip: 'Dec 15 – Apr 1 (original CV)' },
        { label: 'Post-New CV Response Rate',    value: postStats.responseRate, sub: deltaStr, variant: delta >= 0 ? 'positive' : 'negative',
          tooltip: 'Apr 2 – Jul 1 (revamped CV from Professional Pyramid)' },
        { label: 'Since Jul 1 Response Rate',    value: jul1Stats.responseRate, sub: jul1DeltaStr, variant: jul1Delta >= 0 ? 'positive' : 'negative',
          tooltip: 'Jul 1, 2026 – present (rolling window)' },
        { label: 'Recruiter Outreach Received',  value: recruiterOutreach.length, sub: 'Inbound recruiter contacts', variant: 'info' },
        { label: 'LinkedIn Recruiter Contacts',  value: linkedinContacts.length,  sub: 'Direct recruiter messages',  variant: 'info' },
    ];

    if (timeline === 'pre') return [
        { label: 'Applications Sent',       value: stats.total,       sub: PRE_CV_LABEL,                    variant: 'info' },
        { label: 'Companies Reached',       value: stats.companies,   sub: 'Distinct employers',             variant: 'info' },
        { label: 'Feedback Received',       value: stats.rejected,    sub: 'Applications with any reply',    variant: 'neutral',
          tooltip: 'Rejection email = confirmation the application was reviewed' },
        { label: 'Response Rate',           value: stats.responseRate,sub: `${stats.rejected} of ${stats.total} apps`, variant: 'neutral' },
        { label: 'Ghost Rate',              value: stats.ghostRate,   sub: `${stats.noResponse} apps with no reply`, variant: 'neutral',
          tooltip: 'Ghost rate = % of applications with zero company response' },
        { label: 'No Response Count',       value: stats.noResponse,  sub: 'May still be under review',      variant: 'neutral' },
        { label: 'Avg Apps / Week',         value: Math.round(stats.total / 15), sub: '~15 weeks (Dec–Apr)', variant: 'info' },
        { label: 'Post-CV Response Rate',   value: postStats.responseRate, sub: deltaStr, variant: delta >= 0 ? 'positive' : 'negative',
          tooltip: 'After new CV: did response rate improve?' },
    ];

    if (timeline === 'post') return [
        { label: 'Applications Sent',    value: stats.total,       sub: POST_CV_LABEL,                   variant: 'info' },
        { label: 'Companies Reached',    value: stats.companies,   sub: 'Distinct employers',             variant: 'info' },
        { label: 'Feedback Received',    value: stats.rejected,    sub: 'Applications with any company reply', variant: 'neutral',
          tooltip: 'Response = rejection email, screening call, interview invite, etc.' },
        { label: 'Response Rate',        value: stats.responseRate,sub: deltaStr, variant: delta >= 0 ? 'positive' : 'negative',
          tooltip: 'Response rate = replies ÷ total apps. Higher = CV getting more traction.' },
        { label: 'Ghost Rate',           value: stats.ghostRate,   sub: `${stats.noResponse} apps with no reply yet`, variant: parseInt(stats.ghostRate) < parseInt(preStats.ghostRate) ? 'positive' : 'negative',
          tooltip: 'Ghost rate = % of applications with zero company response' },
        { label: 'No Response Count',    value: stats.noResponse,  sub: 'Still potentially active',       variant: 'neutral' },
        { label: 'Avg Apps / Week',      value: Math.round(stats.total / 13), sub: '~13 weeks (Apr–Jul)', variant: 'info' },
        { label: 'CV Impact',            value: delta >= 0 ? `↑ ${delta}pp` : `↓ ${Math.abs(delta)}pp`, sub: 'Change in response rate after new CV', variant: delta >= 0 ? 'positive' : 'negative',
          tooltip: `Pre-CV: ${preStats.responseRate} → Post-CV: ${stats.responseRate}` },
    ];

    // jul1 — rolling "since Jul 1" window
    return [
        { label: 'Applications Sent',    value: stats.total,       sub: JUL1_CV_LABEL,                   variant: 'info' },
        { label: 'Companies Reached',    value: stats.companies,   sub: 'Distinct employers',             variant: 'info' },
        { label: 'Feedback Received',    value: stats.rejected,    sub: 'Applications with any company reply', variant: 'neutral',
          tooltip: 'Response = rejection email, screening call, interview invite, etc.' },
        { label: 'Response Rate',        value: stats.responseRate,sub: jul1DeltaStr, variant: jul1Delta >= 0 ? 'positive' : 'negative',
          tooltip: 'Response rate = replies ÷ total apps, since Jul 1.' },
        { label: 'Ghost Rate',           value: stats.ghostRate,   sub: `${stats.noResponse} apps with no reply yet`, variant: parseInt(stats.ghostRate) < parseInt(postStats.ghostRate) ? 'positive' : 'negative',
          tooltip: 'Ghost rate = % of applications with zero company response' },
        { label: 'No Response Count',    value: stats.noResponse,  sub: 'Still potentially active',       variant: 'neutral' },
        { label: 'Companies This Window', value: stats.companies,  sub: 'Since Jul 1, 2026',              variant: 'info' },
        { label: 'CV Impact vs Post-CV', value: jul1Delta >= 0 ? `↑ ${jul1Delta}pp` : `↓ ${Math.abs(jul1Delta)}pp`, sub: 'Change in response rate vs Apr–Jul window', variant: jul1Delta >= 0 ? 'positive' : 'negative',
          tooltip: `Post-CV: ${postStats.responseRate} → Since Jul 1: ${stats.responseRate}` },
    ];
}

/* ─── Applications Table ─── */
function ApplicationsTable({ rows }: { rows: Application[] }) {
    const [query,   setQuery]   = useState('');
    const [channel, setChannel] = useState('');
    const [status,  setStatus]  = useState('');

    const channels = useMemo(
        () => Array.from(new Set(rows.map(r => shortChannel(r.channel)))).sort(),
        [rows]
    );
    const filtered = useMemo(() => {
        const q = query.toLowerCase();
        return rows.filter(r => {
            const matchesQ  = !q || r.company.toLowerCase().includes(q) || (r.role || '').toLowerCase().includes(q);
            const matchesCh = !channel || shortChannel(r.channel) === channel;
            const matchesSt = !status  || (r.status || 'No Response') === status;
            return matchesQ && matchesCh && matchesSt;
        }).sort(compareRows);
    }, [rows, query, channel, status]);

    return (
        <>
            <div className={styles.controls}>
                <input type="text" className={styles.searchInput} placeholder="Search company or role..."
                    value={query} onChange={e => setQuery(e.target.value)} />
                <select className={styles.select} value={channel} onChange={e => setChannel(e.target.value)}>
                    <option value="">All channels</option>
                    {channels.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select className={styles.select} value={status} onChange={e => setStatus(e.target.value)}>
                    <option value="">All statuses</option>
                    <option value="Rejected">Rejected</option>
                    <option value="No Response">No Response</option>
                </select>
                <span className={styles.pillCount}>{filtered.length} of {rows.length}</span>
            </div>
            <div className={styles.tableScroll}>
                <table className={styles.table}>
                    <thead><tr>
                        <th style={{ width: 112 }}>Date</th>
                        <th>Company</th>
                        <th>Role / Notes</th>
                        <th style={{ width: 150 }}>Channel</th>
                        <th style={{ width: 110 }}>Status</th>
                    </tr></thead>
                    <tbody>
                        {filtered.map((r, i) => (
                            <tr key={i}>
                                <td>{formatDate(r.date)}</td>
                                <td>{r.company}</td>
                                <td>{r.role}</td>
                                <td><span className={`${styles.badge} ${badgeVariant(r.channel)}`}>{shortChannel(r.channel)}</span></td>
                                <td><span className={`${styles.badge} ${r.status === 'Rejected' ? styles.sRejected : styles.sNoresponse}`}>{r.status || 'No Response'}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

/* ─── Main Page ─── */
export default function JobApplicationPage() {
    const [timeline, setTimeline] = useState<Timeline>('overall');
    const [tab,      setTab]      = useState<TabId>('all');

    const preApps  = useMemo(() => applications.filter(a => a.date >= DATE_START_OVERALL && a.date < DATE_CUTOFF), []);
    const postApps = useMemo(() => applications.filter(a => a.date >= DATE_CUTOFF && a.date <= DATE_END), []);
    const jul1Apps = useMemo(() => applications.filter(a => a.date >= DATE_JUL1), []);

    const preStats  = useMemo(() => computeStats(preApps),     [preApps]);
    const postStats = useMemo(() => computeStats(postApps),    [postApps]);
    const jul1Stats = useMemo(() => computeStats(jul1Apps),    [jul1Apps]);
    const allStats  = useMemo(() => computeStats(applications), []);

    const activeStats = timeline === 'pre' ? preStats : timeline === 'post' ? postStats : timeline === 'jul1' ? jul1Stats : allStats;
    const kpis = useMemo(() => buildKpis(activeStats, timeline, preStats, postStats, jul1Stats), [activeStats, timeline, preStats, postStats, jul1Stats]);

    const monthCounts = useMemo(() => MONTHS.map(m => applications.filter(a => a.date.startsWith(m)).length), []);
    const maxMonth    = Math.max(...monthCounts, 1);

    const channelCounts = useMemo(() => {
        const groups: Record<string, number> = {};
        activeStats.apps.forEach(a => {
            const s = shortChannel(a.channel);
            groups[s] = (groups[s] || 0) + 1;
        });
        return Object.entries(groups).sort((a, b) => b[1] - a[1]);
    }, [activeStats]);
    const maxChannel = Math.max(...channelCounts.map(([, v]) => v), 1);

    const comparisonBars = [
        { label: 'Overall',        rate: parseInt(allStats.responseRate)  || 0, count: allStats.rejected,  total: allStats.total,  color: '#6366f1' },
        { label: 'Pre-New CV',     rate: parseInt(preStats.responseRate)  || 0, count: preStats.rejected,  total: preStats.total,  color: '#94a3b8' },
        { label: 'Post-New CV',    rate: parseInt(postStats.responseRate) || 0, count: postStats.rejected, total: postStats.total, color: '#22c55e' },
        { label: 'Jul 1 – Present', rate: parseInt(jul1Stats.responseRate) || 0, count: jul1Stats.rejected, total: jul1Stats.total, color: '#f59e0b' },
    ];
    const maxRate = Math.max(...comparisonBars.map(b => b.rate), 1);

    const sortedRecruiterOutreach = useMemo(() => [...recruiterOutreach].sort((a, b) => {
        if (a.date !== b.date) return a.date < b.date ? 1 : -1;
        return shortChannel(a.channel).localeCompare(shortChannel(b.channel));
    }), []);
    const sortedLinkedinContacts  = useMemo(() => [...linkedinContacts].sort((a, b)  => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)), []);
    const sortedRecruiterMessages = useMemo(() => [...recruiterMessages].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)), []);

    const activeTimeline = TIMELINES.find(t => t.id === timeline)!;

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
                            Job Search <span className={styles.heroAccent}>Dashboard</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Coverage: Dec 15, 2025 – present · Source: Gmail (thariqhamad6@gmail.com)
                        </p>
                    </div>
                </div>
            </section>

            <div className="container">
                {/* ── Disclaimer ── */}
                <div className={styles.note}>
                    Figures are counts of distinct application / outreach emails found via Gmail search. Routine
                    LinkedIn job-alert and newsletter emails were excluded. &quot;Rejected&quot; means a
                    rejection/decline email was found — this counts as <strong>feedback received</strong> (the
                    application was reviewed). &quot;No Response&quot; means no reply was found and the
                    application may still be under consideration.
                </div>

                {/* ── Timeline Toggle ── */}
                <div className={styles.timelineToggle}>
                    <span className={styles.timelineToggleLabel}>View by period:</span>
                    <div className={styles.timelineBtns}>
                        {TIMELINES.map(t => (
                            <button key={t.id}
                                className={`${styles.timelineBtn} ${timeline === t.id ? styles.timelineBtnActive : ''}`}
                                onClick={() => setTimeline(t.id)}>
                                <span className={styles.timelineBtnLabel}>{t.label}</span>
                                <span className={styles.timelineBtnSub}>{t.sub}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Period Header ── */}
                <div className={styles.periodHeader}>
                    <span className={styles.periodLabel}>{activeTimeline.label}</span>
                    <span className={styles.periodSub}>{activeTimeline.sub}</span>
                    {timeline === 'post' && <span className={styles.periodBadge}>New CV Era</span>}
                    {timeline === 'pre'  && <span className={styles.periodBadgeGray}>Original CV Era</span>}
                </div>

                {/* ── KPI Grid ── */}
                <div className={styles.kpiGrid}>
                    {kpis.map(k => (
                        <div key={k.label}
                            className={`${styles.kpi} ${k.variant === 'positive' ? styles.kpiPositive : k.variant === 'negative' ? styles.kpiNegative : k.variant === 'info' ? styles.kpiInfo : ''}`}
                            title={k.tooltip}>
                            <div className={styles.kpiNum}>{k.value}</div>
                            <div className={styles.kpiLabel}>{k.label}</div>
                            {k.sub && <div className={styles.kpiSub}>{k.sub}</div>}
                        </div>
                    ))}
                </div>

                {/* ── Response Rate Comparison Banner ── */}
                <div className={styles.comparisonBanner}>
                    <div className={styles.comparisonTitle}>Response Rate by Period</div>
                    <div className={styles.comparisonSubtitle}>
                        Any company reply (rejection / screening / invite) ÷ applications sent
                    </div>
                    <div className={styles.compBars}>
                        {comparisonBars.map(b => (
                            <div key={b.label} className={styles.compBarRow}>
                                <div className={styles.compBarLabel}>{b.label}</div>
                                <div className={styles.compBarTrack}>
                                    <div className={styles.compBarFill}
                                        style={{ width: `${Math.max(2, (b.rate / maxRate) * 100)}%`, background: b.color }} />
                                </div>
                                <div className={styles.compBarStat}>
                                    <span className={styles.compBarPct} style={{ color: b.color }}>{b.rate}%</span>
                                    <span className={styles.compBarCount}>{b.count}/{b.total}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Charts ── */}
                <div className={styles.chartsGrid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardHeading}>Applications by Month</h3>
                        <div className={styles.barchart}>
                            {monthCounts.map((c, i) => (
                                <div key={MONTH_LABELS[i]} className={styles.barCol}>
                                    <div className={styles.barVal}>{c}</div>
                                    <div className={styles.bar} style={{
                                        height: Math.max(2, (c / maxMonth) * 140),
                                        background: MONTH_IS_POST[i]
                                            ? 'linear-gradient(180deg, #22c55e, #16a34a)'
                                            : 'linear-gradient(180deg, #3b82f6, #2563eb)',
                                    }} />
                                    <div className={styles.barLabel}>{MONTH_LABELS[i]}</div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.barLegend}>
                            <span className={styles.legendDot} style={{ background: '#3b82f6' }} /> Pre-New CV &nbsp;
                            <span className={styles.legendDot} style={{ background: '#22c55e' }} /> Post-New CV (Apr 2+)
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardHeading}>
                            Applications by Channel{timeline !== 'overall' ? ` — ${activeTimeline.label}` : ''}
                        </h3>
                        <div className={styles.hbarchart}>
                            {channelCounts.map(([label, val]) => (
                                <div key={label} className={styles.hbarRow}>
                                    <div className={styles.hbarLabel}>{label}</div>
                                    <div className={styles.hbarTrack}>
                                        <div className={styles.hbarFill} style={{ width: `${(val / maxChannel) * 100}%` }} />
                                    </div>
                                    <div className={styles.hbarVal}>{val}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Rate cards ── */}
                <div className={styles.rateGrid}>
                    {[
                        { label: 'Overall',        stats: allStats,  color: '#6366f1' },
                        { label: 'Pre-New CV',     stats: preStats,  color: '#94a3b8' },
                        { label: 'Post-New CV',    stats: postStats, color: '#22c55e' },
                        { label: 'Jul 1 – Present', stats: jul1Stats, color: '#f59e0b' },
                    ].map(({ label, stats, color }) => (
                        <div key={label} className={styles.rateCard}>
                            <div className={styles.rateCardTitle} style={{ color }}>{label}</div>
                            <div className={styles.rateCardTotal}>{stats.total} applications</div>
                            <div className={styles.rateRow}>
                                <span className={styles.rateDot} style={{ background: color }} />
                                <span className={styles.rateRowLabel}>Response rate</span>
                                <span className={styles.rateRowVal} style={{ color }}>{stats.responseRate}</span>
                            </div>
                            <div className={styles.rateRow}>
                                <span className={styles.rateDot} style={{ background: '#e2e8f0' }} />
                                <span className={styles.rateRowLabel}>Ghost rate</span>
                                <span className={styles.rateRowVal}>{stats.ghostRate}</span>
                            </div>
                            <div className={styles.rateRow}>
                                <span className={styles.rateDot} style={{ background: '#dc2626' }} />
                                <span className={styles.rateRowLabel}>Feedback received</span>
                                <span className={styles.rateRowVal}>{stats.rejected}</span>
                            </div>
                            <div className={styles.rateProgressTrack}>
                                <div className={styles.rateProgressFill}
                                    style={{ width: stats.responseRate, background: color }} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── CV Impact note ── */}
                <div className={styles.cvNote}>
                    <strong>Apr 2 – Jul 1</strong> marks the period since the revamped CV from the Professional
                    Pyramid team. The comparison above shows whether the new CV improved company response rates.
                    A <em>higher response rate post-Apr 2</em> signals the CV is passing ATS screening and
                    attracting recruiter attention more effectively.
                </div>

                {/* ── Tables ── */}
                <div className={styles.tabs}>
                    {TABS.map(t => (
                        <button key={t.id}
                            className={`${styles.tabBtn} ${tab === t.id ? styles.tabBtnActive : ''}`}
                            onClick={() => setTab(t.id)}>
                            {t.label}
                        </button>
                    ))}
                </div>

                {tab === 'all'  && <ApplicationsTable rows={applications} />}
                {tab === 'pre'  && <ApplicationsTable rows={preApps}      />}
                {tab === 'post' && <ApplicationsTable rows={postApps}     />}
                {tab === 'jul1' && <ApplicationsTable rows={jul1Apps}     />}

                {tab === 'recruiters' && (
                    <div className={styles.tableScroll}>
                        <table className={styles.table}>
                            <thead><tr>
                                <th style={{ width: 112 }}>Date</th>
                                <th>Company / Contact</th>
                                <th>Context</th>
                                <th style={{ width: 180 }}>Channel</th>
                            </tr></thead>
                            <tbody>
                                {sortedRecruiterOutreach.map((r, i) => (
                                    <tr key={i}>
                                        <td>{formatDate(r.date)}</td>
                                        <td>{r.company}</td>
                                        <td>{r.context}</td>
                                        <td><span className={`${styles.badge} ${badgeVariant(r.channel)}`}>{shortChannel(r.channel)}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {tab === 'linkedin' && (
                    <div className={styles.tableScroll}>
                        <table className={styles.table}>
                            <thead><tr>
                                <th style={{ width: 112 }}>Date</th>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Notes</th>
                            </tr></thead>
                            <tbody>
                                {sortedLinkedinContacts.map((c, i) => (
                                    <tr key={i}>
                                        <td>{formatDate(c.date)}</td>
                                        <td>{c.name}</td>
                                        <td>{c.title}</td>
                                        <td>{c.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {tab === 'messages' && (
                    <div className={styles.tableScroll}>
                        <table className={styles.table}>
                            <thead><tr>
                                <th style={{ width: 112 }}>Messaged Date</th>
                                <th style={{ width: 150 }}>Company</th>
                                <th style={{ width: 150 }}>Recruiter Name</th>
                                <th>Message</th>
                            </tr></thead>
                            <tbody>
                                {sortedRecruiterMessages.map((m, i) => (
                                    <tr key={i}>
                                        <td>{formatDate(m.date)}</td>
                                        <td>{m.company}</td>
                                        <td>{m.recruiter}</td>
                                        <td className={styles.msgCell}>{m.message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                <p className={styles.footerNote}>Generated from Gmail search results · Not a substitute for your own records</p>
            </div>
        </main>
    );
}
