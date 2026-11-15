'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { trackButtonClick, trackOutboundLink } from '@/utils/analytics';
import styles from './Audiences.module.css';

interface Audience {
    title: string;
    body: string;
    cta: string;
    href: string;
}

export default function Audiences() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>{t.home.audiencesTitle}</h2>
                <div className={styles.grid}>
                    {t.home.audiences.map((a: Audience, i: number) => {
                        const external = a.href.startsWith('http');
                        const content = (
                            <>
                                <h3 className={styles.title}>{a.title}</h3>
                                <p className={styles.body}>{a.body}</p>
                                <span className={styles.cta}>
                                    {a.cta} <ArrowRight size={14} />
                                </span>
                            </>
                        );
                        return external ? (
                            <a
                                key={i}
                                href={a.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.card}
                                onClick={() => trackOutboundLink(a.href, `Audience: ${a.cta}`)}
                            >
                                {content}
                            </a>
                        ) : (
                            <Link
                                key={i}
                                href={a.href}
                                className={styles.card}
                                onClick={() => trackButtonClick(a.cta, 'home_audiences')}
                            >
                                {content}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
