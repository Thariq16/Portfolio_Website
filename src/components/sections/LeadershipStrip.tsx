'use client';

import React from 'react';
import styles from './LeadershipStrip.module.css';

const stats = [
    { value: '1 → 34', label: 'Team Scaled', sub: 'Employee #1 to full ops team' },
    { value: 'SAR 7.5M+', label: 'Pipeline Built', sub: 'Enterprise SaaS, 15 months' },
    { value: '~30', label: 'Cross-Functional', sub: 'Stakeholders led at Fortude' },
    { value: 'Board + CSO', label: 'Reporting Line', sub: 'Direct to executive level' },
];

export default function LeadershipStrip() {
    return (
        <section className={styles.strip}>
            <div className={styles.container}>
                {stats.map((stat, i) => (
                    <div key={i} className={styles.stat}>
                        <span className={styles.value}>{stat.value}</span>
                        <span className={styles.label}>{stat.label}</span>
                        <span className={styles.sub}>{stat.sub}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
