'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { trackButtonClick } from '@/utils/analytics';
import type { CaseStudy } from '@/lib/dictionaries';
import styles from './Pillars.module.css';

export default function Pillars() {
    const { t } = useLanguage();
    const [active, setActive] = useState(0);
    const blocks = useRef<(HTMLElement | null)[]>([]);

    const pillars = t.home.pillars.map((p: { slug: string; title: string; body: string }) => ({
        ...p,
        study: t.projects.items.find((c: CaseStudy) => c.slug === p.slug) as CaseStudy | undefined,
    }));

    useEffect(() => {
        const els = blocks.current.filter(Boolean) as HTMLElement[];
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
                });
            },
            { rootMargin: '-42% 0px -42% 0px', threshold: 0 }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    const current = pillars[active];
    const lead = current?.study?.metrics?.[0];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <aside className={styles.sticky} aria-hidden="true">
                        <div key={active} className={styles.panel}>
                            <div className={styles.panelValue}>{lead?.value}</div>
                            <div className={styles.panelLabel}>{lead?.label}</div>
                            <div className={styles.panelCase}>{current?.study?.company}</div>
                        </div>
                        <div className={styles.dots}>
                            {pillars.map((_: unknown, i: number) => (
                                <span key={i} className={i === active ? styles.dotOn : styles.dot} />
                            ))}
                        </div>
                    </aside>

                    <div className={styles.list}>
                        {pillars.map(
                            (
                                p: { slug: string; title: string; body: string; study?: CaseStudy },
                                i: number
                            ) => (
                                <article
                                    key={p.slug}
                                    ref={(el) => {
                                        blocks.current[i] = el;
                                    }}
                                    data-index={i}
                                    className={`${styles.block} ${i === active ? styles.blockOn : ''}`}
                                >
                                    <h2 className={styles.title}>{p.title}</h2>
                                    <p className={styles.body}>{p.body}</p>
                                    {p.study && (
                                        <>
                                            <ul className={styles.metrics}>
                                                {p.study.metrics.slice(0, 3).map((m) => (
                                                    <li key={m.label}>
                                                        <strong>{m.value}</strong>
                                                        <span>{m.label}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <Link
                                                href={`/projects/${p.study.slug}`}
                                                className={styles.link}
                                                onClick={() => trackButtonClick(p.title, 'home_pillars')}
                                            >
                                                {t.home.readCase}
                                            </Link>
                                        </>
                                    )}
                                </article>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
