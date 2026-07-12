'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { formatText } from '@/lib/formatText';
import styles from './page.module.css';

export default function ProjectsPreviewPage() {
    const { t } = useLanguage();
    const items = t.projects.items;

    return (
        <main className="container">
            {/* Header */}
            <header className={styles.header}>
                <span className={styles.eyebrow}>{t.projects.title}</span>
                <h1 className={styles.headline}>
                    {items.length} projects that shaped how I work.
                </h1>
            </header>

            {/* Numbered index */}
            <nav className={styles.index}>
                <ol>
                    {items.map((item, i) => (
                        <li key={item.slug}>
                            <a href={`#${item.slug}`}>
                                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                                <span className={styles.indexTitle}>{item.title}</span>
                                <span aria-hidden className={styles.indexArrow}>&rarr;</span>
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>

            {/* Inline case studies */}
            {items.map((item, i) => (
                <section key={item.slug} id={item.slug} className={styles.caseSection}>
                    <div className={styles.caseTop}>
                        <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                        <span className={styles.tags}>{item.category} &middot; {item.market}</span>
                    </div>

                    <h2 className={styles.caseTitle}>{item.title}</h2>

                    <div className={styles.metaRow}>
                        <div className={styles.metaBlock}>
                            <span className={styles.metaLabel}>Role</span>
                            <p>{formatText(item.role.details)}</p>
                        </div>
                        <div className={styles.metaBlock}>
                            <span className={styles.metaLabel}>Timeframe</span>
                            <p>{item.timeframe}</p>
                        </div>
                    </div>

                    {item.media?.images?.length ? (
                        <div className={styles.gallery}>
                            {item.media.images.map((img, k) => (
                                <div key={k} className={styles.shotWrap}>
                                    <Image src={img.url} alt={img.caption} width={800} height={500} className={styles.shot} />
                                </div>
                            ))}
                        </div>
                    ) : null}

                    <p className={styles.intro}>{formatText(item.context.goal)}</p>

                    {/* Impact grid */}
                    <h3 className={styles.subhead}>Impact</h3>
                    <div className={styles.impactGrid}>
                        {item.metrics.map((m, k) => (
                            <div key={k} className={styles.impactItem}>
                                <span className={styles.impactValue}>{m.value}</span>
                                <span className={styles.impactLabel}>{m.label}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className={styles.subhead}>About {item.company}</h3>
                    <p>{formatText(item.context.details)}</p>

                    <h3 className={styles.subhead}>Challenge</h3>
                    <p>{formatText(item.constraints.details)}</p>

                    <h3 className={styles.subhead}>Key outcomes</h3>
                    <p>{formatText(item.outcomes.details)}</p>

                    <Link href={`/projects/${item.slug}`} className={styles.readMore}>
                        Read {item.company} as a standalone page &rarr;
                    </Link>
                </section>
            ))}
        </main>
    );
}
