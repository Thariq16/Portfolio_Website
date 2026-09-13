import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from './posts';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Writing – Thariq Hamad',
    description: 'Notes on product management, sports tech, and building in the GCC — from Thariq Hamad.',
    alternates: { canonical: '/blog' },
};

export default function BlogIndexPage() {
    return (
        <main className={styles.main}>
            <div className="container">
                <header className={styles.header}>
                    <span className="eyebrow">Writing</span>
                    <h1 className={styles.title}>Notes from the field</h1>
                    <p className={styles.subtitle}>
                        Occasional essays on product, sports tech, and building things in the GCC.
                    </p>
                </header>

                <div className={styles.list}>
                    {BLOG_POSTS.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                            <div className={styles.cardMeta}>
                                <span className={styles.cardCategory}>{post.category}</span>
                                <span aria-hidden="true">·</span>
                                <span>{post.displayDate}</span>
                                <span aria-hidden="true">·</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h2 className={styles.cardTitle}>{post.title}</h2>
                            <p className={styles.cardExcerpt}>{post.excerpt}</p>
                            <span className={styles.cardLink}>
                                Read the essay <ArrowRight size={14} />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
