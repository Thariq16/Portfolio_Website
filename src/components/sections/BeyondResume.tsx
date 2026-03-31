'use client';

import React from 'react';
import Link from 'next/link';
import styles from './BeyondResume.module.css';
import { ArrowRight } from 'lucide-react';

const cards = [
    {
        accent: '#10b981',
        accentBg: 'rgba(16,185,129,0.06)',
        accentBorder: 'rgba(16,185,129,0.18)',
        eyebrow: 'Performance Analysis · Football',
        title: 'The Analytical Edge',
        description:
            'Performance Analyst at Glacis United FC (Gibraltar). Built a bespoke analysis platform in active use with a first team. Currently completing a Professional Diploma at Barca Innovation Hub.',
        cta: 'View Football Work',
        href: '/football',
        pills: ['Glacis United FC', 'Barca Innovation Hub', 'Python · Pass Maps'],
    },
    {
        accent: '#f59e0b',
        accentBg: 'rgba(245,158,11,0.06)',
        accentBorder: 'rgba(245,158,11,0.18)',
        eyebrow: 'Rotaract International · 2016–2021',
        title: 'Leading Beyond Product',
        description:
            'Rose from Joint Director to Club President across three Rotaract clubs and District 3220 (Sri Lanka & Maldives). Completed 30+ projects and raised LKR 125K in a single presidential term.',
        cta: 'Read the Story',
        href: '/about#rotaract',
        pills: ['Club President', '30+ Projects', 'District 3220'],
    },
];

export default function BeyondResume() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.eyebrow}>Beyond the Resume</p>
                    <h2 className={styles.title}>Two Dimensions You Won't Find on Most PM CVs</h2>
                </div>

                <div className={styles.grid}>
                    {cards.map((card, i) => (
                        <Link
                            key={i}
                            href={card.href}
                            className={styles.card}
                            style={{
                                '--accent': card.accent,
                                '--accentBg': card.accentBg,
                                '--accentBorder': card.accentBorder,
                            } as React.CSSProperties}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.cardTop}>
                                    <span className={styles.cardEyebrow}>{card.eyebrow}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.cardDesc}>{card.description}</p>
                                <div className={styles.pills}>
                                    {card.pills.map((p, j) => (
                                        <span key={j} className={styles.pill}>{p}</span>
                                    ))}
                                </div>
                                <div className={styles.cardCta}>
                                    {card.cta} <ArrowRight size={14} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
