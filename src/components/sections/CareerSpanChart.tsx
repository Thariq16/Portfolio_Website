'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './CareerSpanChart.module.css';

interface JobLike {
    slug: string;
    company: string;
    dateRange: string;
}

const MONTHS: Record<string, number> = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
};

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
    const end = parts[1].toLowerCase().includes('present') ? null : parse(parts[1]);
    if (start === null) return null;
    return [start, end ?? start + 1];
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
    const endYear = Math.ceil(max / 12);

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
                                    <span className={styles.barLabel}>{j.company}</span>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
