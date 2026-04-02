'use client';

import React from 'react';
import styles from './EventManagement.module.css';
import { Users, Trophy, Calendar, Star } from 'lucide-react';

const stats = [
    { icon: Trophy, value: '150+', label: 'Projects Completed', sub: 'Overall' },
    { icon: Users, value: 'SAR 714K', label: 'Funds Raised', sub: 'Overall' },
    { icon: Calendar, value: '5 Years', label: 'Of Service', sub: '2016 – 2021' },
    { icon: Star, value: '3 Clubs', label: '& 1 District', sub: 'Leadership across all levels' },
];

const journey = [
    {
        role: 'Community Service Joint Director',
        org: 'Rotaract Club of IIT',
        period: 'May 2016 – Jun 2017',
        highlight: 'Entry into Rotaract leadership — managing community service delivery and cross-club coordination.',
        isTop: false,
    },
    {
        role: 'Secretary',
        org: 'Rotaract Club of IIT',
        period: 'Mar 2017 – Jun 2018',
        highlight: 'Owned club operations, correspondence, records, and internal reporting for a full club year.',
        isTop: false,
    },
    {
        role: 'Coordinator, Digital Communication Services',
        org: 'Rotaract District 3220 — Sri Lanka & Maldives',
        period: 'May 2018 – Jun 2019',
        highlight: 'Elevated to District level — architected a centralized, multi-user digital platform to streamline the reporting and management of District-wide projects. Engineered using PHP, Laravel, and MySQL.',
        isTop: false,
    },
    {
        role: 'Vice President',
        org: 'Rotaract Club of Colombo North',
        period: 'May 2019 – May 2020',
        highlight: 'Stepped into executive leadership, supporting the President and driving programme delivery.',
        isTop: false,
    },
    {
        role: 'President',
        org: 'Rotaract Club of PanColombo',
        period: 'Sep 2020 – Aug 2021',
        highlight: 'Led the club through a full presidential term — completed 30 projects and raised SAR 1,500 for the club\'s future.',
        isTop: true,
    },
];

export default function EventManagement() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.eyebrow}>
                        <span className={styles.eyebrowDot} />
                        Rotaract International · 2016 – 2021
                    </div>
                    <h2 className={styles.title}>Leading Beyond Product</h2>
                    <p className={styles.subtitle}>
                        Five years of progressive leadership within Rotaract — from Joint Director to Club President — 
                        building skills in event management, stakeholder coordination, community mobilisation, and executive operations long before the corporate world.
                    </p>
                </div>

                {/* Stats Row */}
                <div className={styles.statsGrid}>
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div key={i} className={styles.statCard}>
                                <div className={styles.statIcon}>
                                    <Icon size={18} />
                                </div>
                                <div className={styles.statValue}>{stat.value}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                                <div className={styles.statSub}>{stat.sub}</div>
                            </div>
                        );
                    })}
                </div>

                {/* Journey Timeline */}
                <div className={styles.timelineWrapper}>
                    <div className={styles.timelineHeader}>
                        <h3 className={styles.timelineTitle}>Leadership Progression</h3>
                        <p className={styles.timelineSubtitle}>Every year, a new level of responsibility.</p>
                    </div>

                    <div className={styles.timeline}>
                        {journey.map((step, i) => (
                            <div key={i} className={`${styles.timelineItem} ${step.isTop ? styles.topRole : ''}`}>
                                <div className={styles.timelineLeft}>
                                    <div className={styles.timelinePeriod}>{step.period}</div>
                                </div>
                                <div className={styles.timelineDot}>
                                    <div className={styles.dot} />
                                    {i < journey.length - 1 && <div className={styles.line} />}
                                </div>
                                <div className={styles.timelineContent}>
                                    <div className={styles.timelineRole}>{step.role}</div>
                                    <div className={styles.timelineOrg}>{step.org}</div>
                                    <p className={styles.timelineHighlight}>{step.highlight}</p>
                                    {step.isTop && (
                                        <span className={styles.topBadge}>Presidential Term</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
