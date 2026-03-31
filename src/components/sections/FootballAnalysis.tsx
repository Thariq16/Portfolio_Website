'use client';

import React from 'react';
import styles from './FootballAnalysis.module.css';
import { BarChart2, Monitor, Code2, GraduationCap, ExternalLink } from 'lucide-react';

const capabilities = [
    {
        icon: BarChart2,
        title: 'Match Reporting',
        badge: 'First Team',
        description:
            'Two structured analytical outputs per week at Glacis United FC: a full post-match performance report and a pre-match opposition report presented directly to the head coach.',
        tags: ['Post-Match Review', 'Opposition Intel', 'Video Packages'],
    },
    {
        icon: Monitor,
        title: 'Custom Analysis Platform',
        badge: 'Self-Built',
        description:
            'Designed and built a bespoke web-based performance analysis platform currently in active use with a first-team squad, covering pass mapping, possession loss hotspots, set-piece retention rates, attacking phase sequencing, and individual player profiles.',
        tags: ['Pass Maps', 'Possession Analysis', 'Set-Piece Metrics', 'Player Profiling'],
    },
    {
        icon: Code2,
        title: 'Python Data Science',
        badge: 'Data-Driven',
        description:
            'Apply Python to process match data, identify player combinations, and surface tactical patterns to supplement video-based observation — translating raw data into structured coaching insights.',
        tags: ['Pattern Recognition', 'Player Combinations', 'Tactical Modelling'],
    },
    {
        icon: GraduationCap,
        title: 'Formal Credentials',
        badge: 'Certified',
        description:
            'Currently completing a Professional Diploma in Football Tactical Analysis at Barca Innovation Hub (FC Barcelona) alongside an FA Introduction to Coaching Football certification. Studying Arabic with active interest in GCC football infrastructure.',
        tags: ['Barca Innovation Hub', 'FA Coaching', 'GCC Focus'],
    },
];

const credentials = [
    { name: 'Glacis United FC', location: 'Gibraltar', period: 'Nov 2025 – Present' },
    { name: 'MHFootballWorld', location: 'Colombo, Sri Lanka', period: 'Jan 2024 – Jan 2026' },
    { name: 'Barca Innovation Hub', location: 'FC Barcelona', period: '2026 – Present' },
];

export default function FootballAnalysis() {
    return (
        <section className={styles.section}>
            {/* Pitch texture overlay */}
            <div className={styles.pitchLines} aria-hidden="true">
                <div className={styles.pitchCircle} />
                <div className={styles.pitchHalfLine} />
                <div className={styles.pitchArc} />
            </div>

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.eyebrow}>
                        <span className={styles.eyebrowDot} />
                        Performance Analysis · Football
                    </div>
                    <h2 className={styles.title}>The Analytical Edge</h2>
                    <p className={styles.subtitle}>
                        Applying the same rigour used to run product teams to competitive club football — building systems, 
                        extracting patterns, and communicating insights that drive decisions on the pitch.
                    </p>
                </div>

                {/* Capability Cards */}
                <div className={styles.grid}>
                    {capabilities.map((cap, i) => {
                        const Icon = cap.icon;
                        return (
                            <div key={i} className={styles.card}>
                                <div className={styles.cardTop}>
                                    <div className={styles.iconBox}>
                                        <Icon size={20} />
                                    </div>
                                    <span className={styles.badge}>{cap.badge}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{cap.title}</h3>
                                <p className={styles.cardDesc}>{cap.description}</p>
                                <div className={styles.tags}>
                                    {cap.tags.map((tag, j) => (
                                        <span key={j} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Credentials Bar */}
                <div className={styles.credBar}>
                    <span className={styles.credLabel}>Active across</span>
                    <div className={styles.credList}>
                        {credentials.map((cred, i) => (
                            <div key={i} className={styles.credItem}>
                                <span className={styles.credName}>{cred.name}</span>
                                <span className={styles.credMeta}>{cred.location} · {cred.period}</span>
                            </div>
                        ))}
                    </div>
                    <a
                        href="https://www.linkedin.com/in/thariqhamad/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.credLink}
                    >
                        View on LinkedIn <ExternalLink size={12} />
                    </a>
                </div>
            </div>
        </section>
    );
}
