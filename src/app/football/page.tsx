'use client';

import React from 'react';
import styles from './page.module.css';
import { BarChart2, Monitor, Code2, GraduationCap, ExternalLink, ChevronRight } from 'lucide-react';
import Link from 'next/link';


const capabilities = [
    {
        icon: BarChart2,
        title: 'Match Reporting',
        badge: 'First Team',
        description:
            'Two structured analytical outputs per week at Glacis United FC: a full post-match performance report for Glacis United and a pre-match opposition report for the upcoming opponent, presented directly to the head coach.',
        tags: ['Post-Match Review', 'Opposition Intel', 'Video Packages', 'Coaching Reports'],
    },
    {
        icon: Monitor,
        title: 'Custom Analysis Platform',
        badge: 'Self-Built',
        description:
            'Designed and built a bespoke web-based performance analysis platform currently in active use with a first-team squad. Covers pass maps, possession loss hotspots, set-piece retention rates, attacking phase sequencing, and individual player tactical profiles.',
        tags: ['Pass Maps', 'Possession Analysis', 'Set-Piece Metrics', 'Player Profiling', 'Phase Breakdowns'],
    },
    {
        icon: Code2,
        title: 'Python & Data Science',
        badge: 'Data-Driven',
        description:
            'Apply Python to process match data, identify player combinations, and surface tactical patterns to supplement video-based observation — translating raw data into structured, actionable coaching insights.',
        tags: ['Pattern Recognition', 'Player Combinations', 'Tactical Modelling', 'Data Processing'],
    },
    {
        icon: GraduationCap,
        title: 'Formal Credentials',
        badge: 'Certified',
        description:
            'Currently completing a Professional Diploma in Football Tactical Analysis at Barca Innovation Hub (FC Barcelona) and an FA Introduction to Coaching Football certification. Studying Arabic with active interest in contributing to GCC football infrastructure.',
        tags: ['Barca Innovation Hub', 'FA Coaching Certificate', 'GCC Football', 'Arabic Studies'],
    },
];

const experience = [
    {
        role: 'Performance Analyst',
        org: 'Glacis United FC',
        location: 'Gibraltar',
        period: 'November 2025 – Present',
        bullets: [
            'Deliver two structured analytical outputs per week: a full post-match performance report and a pre-match opposition report presented directly to the head coach.',
            'Designed and built a custom web-based performance analysis platform covering pass maps, possession loss hotspots, set-piece retention rates, phase breakdowns, and individual player profiles.',
            'Apply Python to process match data, identify player combinations, and surface tactical patterns to supplement video-based observation.',
            'Produce video clip packages and concise written reports tailored to coaching staff decision-making across training, match preparation, and post-match review.',
            'Conduct player-specific analysis covering tactical responsibilities, decision-making, and positional contribution.',
        ],
    },
    {
        role: 'Player Performance Analyst & Recruiter',
        org: 'MHFootballWorld',
        location: 'Colombo, Sri Lanka',
        period: 'January 2024 – January 2026',
        bullets: [
            'Conducted match and session analysis to inform tactical decisions and individual player development plans for the coaching staff.',
            'Used video analysis tools to assess player performance, identifying technical strengths, tactical weaknesses, and development priorities.',
            'Correlated performance metrics with training objectives to build data-informed development plans for individual players.',
        ],
    },
];

export default function FootballPage() {
    return (
        <main className={styles.main}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.pitchLines} aria-hidden="true">
                    <div className={styles.pitchCircle} />
                    <div className={styles.pitchHalfLine} />
                    <div className={styles.pitchArc} />
                </div>
                <div className={styles.container}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link>
                        <ChevronRight size={14} />
                        <span>Football Analysis</span>
                    </div>
                    <div className={styles.eyebrow}>
                        <span className={styles.eyebrowDot} />
                        Performance Analysis · Football
                    </div>
                    <h1 className={styles.heroTitle}>The Analytical Edge</h1>
                    <p className={styles.heroSubtitle}>
                        Experienced Football Performance Analyst with a strong track record of supporting first-team coaching staff 
                        through structured match and opposition analysis at competitive club level. Combines deep tactical 
                        understanding with proficiency in video analysis workflows to deliver actionable insights that directly 
                        inform pre-match preparation, in-game adjustments, and post-match review.
                    </p>

                    <div className={styles.credBar}>
                        {[
                            { name: 'Glacis United FC', meta: 'Gibraltar · Nov 2025–Present' },
                            { name: 'MHFootballWorld', meta: 'Colombo · 2024–2026' },
                            { name: 'Barca Innovation Hub', meta: 'Diploma · 2026–Present' },
                        ].map((c, i) => (
                            <div key={i} className={styles.credItem}>
                                <span className={styles.credName}>{c.name}</span>
                                <span className={styles.credMeta}>{c.meta}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className={styles.capSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Capabilities</h2>
                        <p className={styles.sectionSub}>What I deliver to coaching staff and clubs.</p>
                    </div>
                    <div className={styles.capGrid}>
                        {capabilities.map((cap, i) => {
                            const Icon = cap.icon;
                            return (
                                <div key={i} className={styles.capCard}>
                                    <div className={styles.capTop}>
                                        <div className={styles.capIcon}><Icon size={20} /></div>
                                        <span className={styles.capBadge}>{cap.badge}</span>
                                    </div>
                                    <h3 className={styles.capTitle}>{cap.title}</h3>
                                    <p className={styles.capDesc}>{cap.description}</p>
                                    <div className={styles.tags}>
                                        {cap.tags.map((t, j) => (
                                            <span key={j} className={styles.tag}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className={styles.expSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Experience</h2>
                        <p className={styles.sectionSub}>Roles held in competitive football environments.</p>
                    </div>
                    <div className={styles.expList}>
                        {experience.map((exp, i) => (
                            <div key={i} className={styles.expCard}>
                                <div className={styles.expLeft}>
                                    <div className={styles.expRole}>{exp.role}</div>
                                    <div className={styles.expOrg}>{exp.org}</div>
                                    <div className={styles.expMeta}>{exp.location} · {exp.period}</div>
                                </div>
                                <ul className={styles.expBullets}>
                                    {exp.bullets.map((b, j) => (
                                        <li key={j} className={styles.expBullet}>
                                            <span className={styles.bulletDot} />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GCC Ambition */}
            <section className={styles.gcSection}>
                <div className={styles.container}>
                    <div className={styles.gcCard}>
                        <div className={styles.gcLeft}>
                            <p className={styles.gcEyebrow}>GCC Football Infrastructure</p>
                            <h2 className={styles.gcTitle}>Contributing to the Growth of Football in Saudi Arabia & the GCC</h2>
                            <p className={styles.gcDesc}>
                                Currently studying Arabic with a strong interest in contributing to the growth of 
                                football performance infrastructure in Saudi Arabia and the wider GCC. 
                                Seeks to join a performance department where analytical rigour and clear 
                                communication drive competitive advantage.
                            </p>
                        </div>
                        <div className={styles.gcRight}>
                            <a
                                href="https://www.linkedin.com/in/thariqhamad/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.gcCta}
                            >
                                Connect on LinkedIn <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
