'use client';

import React, { useEffect, useMemo, useState } from 'react';
import styles from './page.module.css';

const STORAGE_KEY = 'jobapp_outreach_tracker_v1';

type OutreachStatus = 'Planned' | 'Sent' | 'Replied' | 'No Response' | 'Connected';
const STATUSES: OutreachStatus[] = ['Planned', 'Sent', 'Replied', 'No Response', 'Connected'];

interface OutreachEntry {
    id: string;
    company: string;
    contact: string;
    title: string;
    channel: string;
    status: OutreachStatus;
    date: string; // ISO date, e.g. 2026-07-21
    time: string; // HH:MM, optional
    notes: string;
}

const EMPTY_DRAFT: Omit<OutreachEntry, 'id'> = {
    company: '', contact: '', title: '', channel: 'LinkedIn', status: 'Planned', date: '', time: '', notes: '',
};

function loadEntries(): OutreachEntry[] {
    if (typeof window === 'undefined') return [];
    try {
        const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        return Array.isArray(raw) ? raw : [];
    } catch {
        return [];
    }
}

function statusBadgeClass(status: OutreachStatus) {
    if (status === 'Replied' || status === 'Connected') return styles.sReady;
    if (status === 'No Response') return styles.sRejected;
    if (status === 'Sent') return styles.sInprogress;
    return styles.sNoresponse; // Planned
}

function formatDisplayDate(iso: string) {
    if (!iso) return '—';
    const [y, m, d] = iso.split('-').map(Number);
    if (!y || !m || !d) return iso;
    return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function OutreachTracker() {
    const [entries, setEntries] = useState<OutreachEntry[]>([]);
    const [loaded, setLoaded]   = useState(false);
    const [draft, setDraft]     = useState(EMPTY_DRAFT);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [statusFilter, setStatusFilter] = useState('');
    const [query, setQuery]     = useState('');

    useEffect(() => {
        setEntries(loadEntries());
        setLoaded(true);
    }, []);

    useEffect(() => {
        if (!loaded) return;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    }, [entries, loaded]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return entries
            .filter(e => {
                const matchesQ  = !q || e.company.toLowerCase().includes(q) || e.contact.toLowerCase().includes(q);
                const matchesSt = !statusFilter || e.status === statusFilter;
                return matchesQ && matchesSt;
            })
            .sort((a, b) => {
                if (a.date !== b.date) return (b.date || '').localeCompare(a.date || '');
                return (b.time || '').localeCompare(a.time || '');
            });
    }, [entries, query, statusFilter]);

    const stats = useMemo(() => {
        const total    = entries.length;
        const sent     = entries.filter(e => e.status !== 'Planned').length;
        const replied  = entries.filter(e => e.status === 'Replied' || e.status === 'Connected').length;
        const planned  = entries.filter(e => e.status === 'Planned').length;
        return { total, sent, replied, planned };
    }, [entries]);

    function updateDraft<K extends keyof typeof EMPTY_DRAFT>(key: K, value: typeof EMPTY_DRAFT[K]) {
        setDraft(prev => ({ ...prev, [key]: value }));
    }

    function startEdit(e: OutreachEntry) {
        setEditingId(e.id);
        setDraft({ company: e.company, contact: e.contact, title: e.title, channel: e.channel, status: e.status, date: e.date, time: e.time, notes: e.notes });
    }

    function cancelEdit() {
        setEditingId(null);
        setDraft(EMPTY_DRAFT);
    }

    function saveDraft() {
        if (!draft.company.trim() && !draft.contact.trim()) return;
        if (editingId) {
            setEntries(prev => prev.map(e => (e.id === editingId ? { ...e, ...draft } : e)));
        } else {
            const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
            setEntries(prev => [...prev, { id, ...draft }]);
        }
        setEditingId(null);
        setDraft(EMPTY_DRAFT);
    }

    function removeEntry(id: string) {
        if (!confirm('Remove this contact/message from the tracker?')) return;
        setEntries(prev => prev.filter(e => e.id !== id));
        if (editingId === id) cancelEdit();
    }

    return (
        <div className={styles.card}>
            <h3 className={styles.cardHeading}>My Outreach Tracker</h3>
            <p className={styles.trackerHint}>
                Track companies/contacts you plan to message, messages already sent, and follow-ups — separate
                from the Gmail-synced tables above. Saved only in this browser (not synced across devices).
            </p>

            {/* ── Summary ── */}
            <div className={styles.trackerStats}>
                <div className={styles.trackerStat}><span className={styles.trackerStatNum}>{stats.total}</span><span className={styles.trackerStatLabel}>Total</span></div>
                <div className={styles.trackerStat}><span className={styles.trackerStatNum}>{stats.planned}</span><span className={styles.trackerStatLabel}>Planned</span></div>
                <div className={styles.trackerStat}><span className={styles.trackerStatNum}>{stats.sent}</span><span className={styles.trackerStatLabel}>Sent</span></div>
                <div className={styles.trackerStat}><span className={styles.trackerStatNum}>{stats.replied}</span><span className={styles.trackerStatLabel}>Replied/Connected</span></div>
            </div>

            {/* ── Add / Edit form ── */}
            <div className={styles.trackerForm}>
                <input type="text" className={styles.searchInput} placeholder="Company *"
                    value={draft.company} onChange={e => updateDraft('company', e.target.value)} />
                <input type="text" className={styles.searchInput} placeholder="Contact name"
                    value={draft.contact} onChange={e => updateDraft('contact', e.target.value)} />
                <input type="text" className={styles.searchInput} placeholder="Title / role"
                    value={draft.title} onChange={e => updateDraft('title', e.target.value)} />
                <input type="text" className={styles.select} placeholder="Channel (LinkedIn, Email...)" style={{ minWidth: 140 }}
                    value={draft.channel} onChange={e => updateDraft('channel', e.target.value)} />
                <select className={styles.select} value={draft.status} onChange={e => updateDraft('status', e.target.value as OutreachStatus)}>
                    {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <input type="date" className={styles.select}
                    value={draft.date} onChange={e => updateDraft('date', e.target.value)} />
                <input type="time" className={styles.select}
                    value={draft.time} onChange={e => updateDraft('time', e.target.value)} />
                <input type="text" className={styles.searchInput} placeholder="Notes / message summary"
                    value={draft.notes} onChange={e => updateDraft('notes', e.target.value)} style={{ flexBasis: '100%' }} />
                <button className={styles.copyBtnSmall} onClick={saveDraft}>
                    {editingId ? 'Save changes' : '+ Add entry'}
                </button>
                {editingId && (
                    <button className={styles.clearBtnSmall} onClick={cancelEdit}>Cancel</button>
                )}
            </div>

            {/* ── Filters ── */}
            <div className={styles.controls}>
                <input type="text" className={styles.searchInput} placeholder="Search company or contact..."
                    value={query} onChange={e => setQuery(e.target.value)} />
                <select className={styles.select} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                    <option value="">All statuses</option>
                    {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <span className={styles.pillCount}>{filtered.length} of {entries.length}</span>
            </div>

            {/* ── Table ── */}
            <div className={styles.tableScroll}>
                <table className={styles.table}>
                    <thead><tr>
                        <th style={{ width: 100 }}>Date</th>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Notes</th>
                        <th style={{ width: 110 }}>Channel</th>
                        <th style={{ width: 110 }}>Status</th>
                        <th style={{ width: 90 }}></th>
                    </tr></thead>
                    <tbody>
                        {filtered.map(e => (
                            <tr key={e.id}>
                                <td>{formatDisplayDate(e.date)}{e.time ? <div className={styles.locationSub}>{e.time}</div> : null}</td>
                                <td>{e.company}</td>
                                <td>{e.contact}{e.title ? <div className={styles.locationSub}>{e.title}</div> : null}</td>
                                <td className={styles.msgCell}>{e.notes}</td>
                                <td>{e.channel}</td>
                                <td><span className={`${styles.badge} ${statusBadgeClass(e.status)}`}>{e.status}</span></td>
                                <td>
                                    <button className={styles.rowActionBtn} onClick={() => startEdit(e)}>Edit</button>
                                    <button className={styles.rowActionBtn} onClick={() => removeEntry(e.id)}>Del</button>
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr><td colSpan={7} className={styles.trackerEmpty}>
                                No entries yet — add a target company or contact above.
                            </td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
