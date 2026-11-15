'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
                        {t.home.writingAll} <ArrowRight size={14} />
                    </Link>
                </header>
                <div className={styles.grid}>
                    {posts.map((p) => (
                        <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.card}>
                            <div className={styles.meta}>
                                <span className={styles.cat}>{p.category}</span>
                                <span aria-hidden="true">·</span>
                                <span>{p.displayDate}</span>
                            </div>
                            <h3 className={styles.title}>{p.title}</h3>
                            <p className={styles.excerpt}>{p.excerpt}</p>
                            <span className={styles.cta}>
                                {t.home.read} <ArrowRight size={14} />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
