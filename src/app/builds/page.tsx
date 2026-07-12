import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';
import { builds } from './data';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Builds',
    description: 'Development projects and MVPs built by Thariq Hamad, with live links and source code.',
    alternates: { canonical: '/builds' },
    openGraph: {
        title: 'Builds | Thariq Hamad',
        description: 'Development projects and MVPs, with live links and source code.',
        url: 'https://thariqhamad.com/builds',
    },
};

export default function BuildsPage() {
    return (
        <main className="container">
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <span className={styles.eyebrow}>Builds</span>
                    <h1 className={styles.title}>Things I&apos;ve built</h1>
                    <p className={styles.lead}>
                        A selection of development projects and MVPs. Each links to a live demo
                        and/or its source code.
                    </p>
                </header>

                <div className={styles.grid}>
                    {builds.map((b) => (
                        <article key={b.slug} className={styles.card}>
                            <div className={styles.thumb}>
                                {b.image ? (
                                    <Image src={b.image} alt={b.title} width={640} height={400} className={styles.thumbImg} />
                                ) : (
                                    <div className={styles.thumbPlaceholder} aria-hidden>
                                        {b.title.charAt(0)}
                                    </div>
                                )}
                                <span className={`${styles.status} ${styles[`status_${b.status}`]}`}>{b.status}</span>
                            </div>

                            <div className={styles.body}>
                                <h2 className={styles.cardTitle}>{b.title}</h2>
                                <p className={styles.blurb}>{b.blurb}</p>

                                <div className={styles.tech}>
                                    {b.tech.map((t) => (
                                        <span key={t} className={styles.techTag}>{t}</span>
                                    ))}
                                </div>

                                <div className={styles.links}>
                                    {b.liveUrl ? (
                                        <a href={b.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.linkPrimary}>
                                            Live <ArrowUpRight size={16} />
                                        </a>
                                    ) : null}
                                    {b.repoUrl ? (
                                        <a href={b.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.linkGhost}>
                                            <Github size={16} /> Code
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
