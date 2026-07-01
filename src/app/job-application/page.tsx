'use client';

import React, { useMemo, useState } from 'react';
import { Info } from 'lucide-react';
import { applications, recruiterOutreach, linkedinContacts, recruiterMessages, type Application } from './data';
import styles from './page.module.css';

const RECENT_CUTOFF = '2026-04-02';
const MONTHS = ['2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07'];
const MONTH_LABELS = ['Dec 25', 'Jan 26', 'Feb 26', 'Mar 26', 'Apr 26', 'May 26', 'Jun 26', 'Jul 26'];

function shortChannel(channel: string) {
    const m = channel.match(/^([^(]+)/);
    return (m ? m[1] : channel).trim();
}

function badgeVariant(channel: string) {
    if (/linkedin/i.test(channel)) return styles.bLinkedin;
    if (/indeed/i.test(channel)) return styles.bIndeed;
    if (/recruiter|agency/i.test(channel)) return styles.bRecruiter;
    if (/direct/i.test(channel)) return styles.bDirect;
    if (/ai screening/i.test(channel)) return styles.bAi;
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

type TabId = 'all' | 'recent' | 'recruiters' | 'linkedin' | 'messages';

const TABS: { id: TabId; label: string }[] = [
    { id: 'all', label: 'All Applications' },
    { id: 'recent', label: 'Since New CV (Apr 2 – Jul 1)' },
    { id: 'recruiters', label: 'Recruiter Outreach' },
    { id: 'linkedin', label: 'LinkedIn Recruiter Contacts' },
    { id: 'messages', label: 'Recruiter Messages' },
];

function ApplicationsTable({ rows }: { rows: Application[] }) {
    const [query, setQuery] = useState('');
    const [channel, setChannel] = useState('');
    const [status, setStatus] = useState('');

    const channels = useMemo(
        () => Array.from(new Set(rows.map(r => shortChannel(r.channel)))).sort(),
        [rows]
    );

    const filtered = useMemo(() => {
        const q = query.toLowerCase();
        return rows.filter(r => {
            const matchesQ = !q || r.company.toLowerCase().includes(q) || (r.role || '').toLowerCase().includes(q);
            const matchesCh = !channel || shortChannel(r.channel) === channel;
            const matchesSt = !status || (r.status || 'No Response') === status;
            return matchesQ && matchesCh && matchesSt;
        }).sort(compareRows);
    }, [rows, query, channel, status]);

    return (
        <>
            <div className={styles.controls}>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search company or role..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <select className={styles.select} value={channel} onChange={e => setChannel(e.target.value)}>
                    <option value="">All channels</option>
                    {channels.map(c => (
                        <option key={c} value={c}>{c}</option>
                    ))}
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
                    <thead>
                        <tr>
                            <th style={{ width: 112 }}>Date</th>
                            <th>Company</th>
                            <th>Role / Notes</th>
                            <th style={{ width: 150 }}>Channel</th>
                            <th style={{ width: 110 }}>Status</th>
                        </tr>
                    </thead>
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

export default function JobApplicationPage() {
    const recent = useMemo(() => applications.filter(a => a.date >= RECENT_CUTOFF), []);

    const kpis = useMemo(() => {
        const rejectedCount = applications.filter(a => a.status === 'Rejected').length;
        const noResponseCount = applications.length - rejectedCount;
        return [
            { label: 'Total applications logged', value: applications.length },
            { label: 'Applications since new CV (Apr 2 – Jul 1)', value: recent.length },
            { label: 'Distinct companies (full range)', value: new Set(applications.map(a => a.company)).size },
            { label: 'Distinct companies since new CV (Apr 2 – Jul 1)', value: new Set(recent.map(a => a.company)).size },
            { label: 'Rejections found', value: rejectedCount },
            { label: 'No response yet', value: noResponseCount },
            { label: 'Recruiter / company outreach', value: recruiterOutreach.length },
            { label: 'LinkedIn recruiter contacts', value: linkedinContacts.length },
        ];
    }, [recent]);

    const monthCounts = useMemo(
        () => MONTHS.map(m => applications.filter(a => a.date.startsWith(m)).length),
        []
    );
    const maxMonth = Math.max(...monthCounts, 1);

    const channelCounts = useMemo(() => {
        const groups: Record<string, number> = {};
        recent.forEach(a => {
            const s = shortChannel(a.channel);
            groups[s] = (groups[s] || 0) + 1;
        });
        return Object.entries(groups).sort((a, b) => b[1] - a[1]);
    }, [recent]);
    const maxChannel = Math.max(...channelCounts.map(([, v]) => v), 1);

    const sortedRecruiterOutreach = useMemo(
        () => [...recruiterOutreach].sort((a, b) => {
            if (a.date !== b.date) return a.date < b.date ? 1 : -1;
            return shortChannel(a.channel).localeCompare(shortChannel(b.channel));
        }),
        []
    );
    const sortedLinkedinContacts = useMemo(
        () => [...linkedinContacts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)),
        []
    );
    const sortedRecruiterMessages = useMemo(
        () => [...recruiterMessages].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)),
        []
    );

    const [tab, setTab] = useState<TabId>('all');

    return (
        <main className={styles.main}>
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
                            Coverage: Dec 15, 2025 – Jul 1, 2026 · Source: Gmail (thariqhamad6@gmail.com)
                        </p>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className={styles.note}>
                    Figures are counts of distinct application / outreach emails found via Gmail search. Routine
                    LinkedIn job-alert and newsletter emails were excluded. &quot;Rejected&quot; means a rejection/decline
                    email was found for that application; &quot;No Response&quot; means none was found (it may still be
                    under review).
                </div>

                <div className={styles.kpiGrid}>
                    {kpis.map(k => (
                        <div key={k.label} className={styles.kpi}>
                            <div className={styles.kpiNum}>{k.value}</div>
                            <div className={styles.kpiLabel}>{k.label}</div>
                        </div>
                    ))}
                </div>

                <div className={styles.chartsGrid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardHeading}>Applications by Month</h3>
                        <div className={styles.barchart}>
                            {monthCounts.map((c, i) => (
                                <div key={MONTH_LABELS[i]} className={styles.barCol}>
                                    <div className={styles.barVal}>{c}</div>
                                    <div className={styles.bar} style={{ height: Math.max(2, (c / maxMonth) * 140) }} />
                                    <div className={styles.barLabel}>{MONTH_LABELS[i]}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardHeading}>Applications by Channel — Since New CV (Apr 2 – Jul 1)</h3>
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

                <div className={styles.cvNote}>
                    The Apr 2 – Jul 1 window marks the period since receiving the revamped CV from the Professional
                    Pyramid team — tracked separately below to gauge its impact on response rates.
                </div>

                <div className={styles.tabs}>
                    {TABS.map(t => (
                        <button
                            key={t.id}
                            className={`${styles.tabBtn} ${tab === t.id ? styles.tabBtnActive : ''}`}
                            onClick={() => setTab(t.id)}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                {tab === 'all' && <ApplicationsTable rows={applications} />}
                {tab === 'recent' && <ApplicationsTable rows={recent} />}

                {tab === 'recruiters' && (
                    <div className={styles.tableScroll}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th style={{ width: 112 }}>Date</th>
                                    <th>Company / Contact</th>
                                    <th>Context</th>
                                    <th style={{ width: 180 }}>Channel</th>
                                </tr>
                            </thead>
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
                            <thead>
                                <tr>
                                    <th style={{ width: 112 }}>Date</th>
                                    <th>Name</th>
                                    <th>Title</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
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
                            <thead>
                                <tr>
                                    <th style={{ width: 112 }}>Messaged Date</th>
                                    <th style={{ width: 150 }}>Company</th>
                                    <th style={{ width: 150 }}>Recruiter Name</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
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
