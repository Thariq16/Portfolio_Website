'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './CareerSpanChart.module.css';

interface JobLike {
    slug: string;
    company: string;
    title: string;
    dateRange: string;
}

const MONTHS: Record<string, number> = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
};

// Snapshot taken when the site is built — refreshed on every rebuild/redeploy.
// Used so an ongoing ("Present") role renders through today rather than a 1-month sliver.
const BUILD_MONTH_INDEX = (() => {
    const d = new Date();
    return d.getFullYear() * 12 + d.getMonth();
})();

/** "October 2024 – January 2026" -> months since Jan of chart start */
function parseRange(range: string): [number, number] | null {
    const parts = range.split(/[–—-]/).map((s) => s.trim());
    if (parts.length !== 2) return null;
    const parse = (str: string): number | null => {
        const m = str.toLowerCase().match(/([a-z]+)\s+(\d{4})/);
        if (!m || !(m[1] in MONTHS)) return null;
        return parseInt(m[2], 10) * 12 + MONTHS[m[1]];
    };
    const start = parse(parts[0]);
    const isPresent = parts[1].toLowerCase().includes('present');
    const end = isPresent ? null : parse(parts[1]);
    if (start === null) return null;
    const resolvedEnd = isPresent ? Math.max(BUILD_MONTH_INDEX, start + 1) : (end ?? start + 1);
    return [start, resolvedEnd];
}

export default function CareerSpanChart({ jobs }: { jobs: JobLike[] }) {
    const spans = jobs
        .map((j) => ({ ...j, span: parseRange(j.dateRange) }))
        .filter((j): j is JobLike & { span: [number, number] } => j.span !== null);

    if (spans.length === 0) return null;

    const min = Math.min(...spans.map((s) => s.span[0]));
    const max = Math.max(...spans.map((s) => s.span[1]));
    const total = max - min;
    const startYear = Math.floor(min / 12);
    // `max` is a month-index position on the axis (e.g. Aug 2026), not a duration count,
    // so the calendar year it falls in is a floor, not a ceiling (ceil overshoots by a
    // year for any end month after January).
    const endYear = Math.floor(max / 12);

    const years: number[] = [];
    for (let y = startYear; y <= endYear; y++) years.push(y);

    return (
        <div className={styles.chart} role="img" aria-label={`Timeline of roles from ${startYear} to ${endYear}`}>
            <div className={styles.chartLabel}>Roles · {startYear}–{endYear}</div>
            <div className={styles.plotArea}>
                {/* Year gridlines */}
                {years.map((y) => {
                    const pct = ((y * 12 - min) / total) * 100;
                    if (pct < 0 || pct > 100) return null;
                    return (
                        <div key={y} className={styles.gridline} style={{ left: `${pct}%` }}>
                            <span className={styles.yearLabel}>{String(y).slice(2)}</span>
                        </div>
                    );
                })}
                {/* Bars */}
                <div className={styles.rows}>
                    {spans.map((j, i) => {
                        const left = ((j.span[0] - min) / total) * 100;
                        const width = ((j.span[1] - j.span[0]) / total) * 100;
                        const labelRight = left < 18;
                        return (
                            <div key={j.slug} className={styles.row}>
                                <motion.div
                                    className={`${styles.bar} ${labelRight ? styles.labelRight : ''}`}
                                    style={{ left: `${left}%`, width: `${width}%` }}
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ delay: 0.08 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <span className={styles.barLabel}>
                                        <span className={styles.barLabelTitle}>{j.title}</span>
                                        <span className={styles.barLabelCompany}>{j.company}</span>
                                    </span>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
