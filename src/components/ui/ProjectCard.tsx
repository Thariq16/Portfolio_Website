'use client';

import React from 'react';
import styles from './ProjectCard.module.css';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { CaseStudy } from '@/lib/dictionaries';
import Image from 'next/image';

export default function ProjectCard({ item }: { item: CaseStudy }) {
    return (
        <article className={styles.card}>
            <div className={styles.header}>
                <div className={styles.titleInfo}>
                    <div className={styles.companyRow}>
                        {item.logo && (
                            <a
                                href={item.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.logoLink}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className={styles.logoWrapper}>
                                    <Image
                                        src={item.logo}
                                        alt={item.company}
                                        width={24}
                                        height={24}
                                        className={styles.companyLogo}
                                    />
                                </div>
                            </a>
                        )}
                        <span className={styles.label}>{item.company} | {item.market}</span>
                    </div>
                    <Link href={`/projects/${item.slug}`} className={styles.titleLink}>
                        <h3 className={styles.title}>{item.title}</h3>
                    </Link>
                </div>
                <ArrowUpRight className={styles.icon} size={24} />
            </div>

            <div className={styles.metricsGrid}>
                {item.metrics.slice(0, 3).map((m, i) => (
                    <div key={i} className={styles.metricItem}>
                        <span className={styles.metricValue}>{m.value}</span>
                        <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                ))}
                {/* <div className={styles.impactBadge}>
                    <span className={styles.impactScore}>{project.impactScore}</span>
                    <span className={styles.impactLabel}>IMPACT</span>
                </div> */}
            </div>

            <p className={styles.desc}>{item.context.goal}</p>

            <div className={styles.footer}>
                <Link href={`/projects/${item.slug}`} className={styles.readMore}>Read Case Study</Link>
            </div>
        </article>
    );
}
