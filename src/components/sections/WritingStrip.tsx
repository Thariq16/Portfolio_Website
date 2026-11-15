'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { BLOG_POSTS } from '@/app/blog/posts';
import styles from './WritingStrip.module.css';

export default function WritingStrip() {
    const { t } = useLanguage();
    const posts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);

    return (
        <section className={styles.section}>
            <div className="container">
                <header className={styles.header}>
                    <h2 className={styles.heading}>{t.home.writingTitle}</h2>
                    <Link href="/blog" className={styles.all}>
                        {t.home.writingAll}
                    </Link>
                </header>
                <ul className={styles.list}>
                    {posts.map((p) => (
                        <li key={p.slug} className={styles.item}>
                            <Link href={`/blog/${p.slug}`} className={styles.link}>
                                <span className={styles.meta}>
                                    <span>{p.category}</span>
                                    <time dateTime={p.date}>{p.displayDate}</time>
                                </span>
                                <h3 className={styles.title}>{p.title}</h3>
                                <p className={styles.excerpt}>{p.excerpt}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
