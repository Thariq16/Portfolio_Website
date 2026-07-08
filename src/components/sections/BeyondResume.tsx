'use client';

import React from 'react';
import Link from 'next/link';
import styles from './BeyondResume.module.css';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const cards = [
    {
        eyebrow: 'Performance Analysis · Football',
        title: 'The Analytical Edge',
        description:
            'Performance Analyst at Glacis United FC. Built a bespoke Python analysis platform for the club, currently in active use by the first team in the Gibraltar Premier Division. Completing a Professional Diploma at Barca Innovation Hub.',
        cta: 'View Football Work',
        href: '/football',
        pills: ['Glacis United FC', 'Barca Innovation Hub', 'Python · Pass Maps'],
    },
    {
        eyebrow: 'Rotaract International · 2016–2021',
        title: 'Leading Beyond Product',
        description:
            'Rose from Joint Director to Club President across three Rotaract clubs and District 3220 (Sri Lanka & Maldives). Completed 150+ community and national-level projects, managing SAR 18.75M in total project value.',
        cta: 'Read the Story',
        href: '/about#rotaract',
        pills: ['Club President', '150+ Projects', 'SAR 18.75M Projects'],
    },
];

export default function BeyondResume() {
    const ref = useScrollReveal<HTMLElement>();
    return (
        <section ref={ref} className={`${styles.section} reveal`}>
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
