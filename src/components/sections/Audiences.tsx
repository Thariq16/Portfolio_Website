'use client';

import React from 'react';
import Link from 'next/link';
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
                    {t.home.audiences.map((a: Audience, i: number) => (
                        <div key={i} className={styles.col}>
                            <h3 className={styles.title}>{a.title}</h3>
                            <p className={styles.body}>{a.body}</p>
                            {a.href.startsWith('http') ? (
                                <a
                                    href={a.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.cta}
                                    onClick={() => trackOutboundLink(a.href, `Audience: ${a.cta}`)}
                                >
                                    {a.cta}
                                </a>
                            ) : (
                                <Link
                                    href={a.href}
                                    className={styles.cta}
                                    onClick={() => trackButtonClick(a.cta, 'home_audiences')}
                                >
                                    {a.cta}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
