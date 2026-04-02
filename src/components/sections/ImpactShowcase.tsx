'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { TrendingUp, ArrowRight } from 'lucide-react';
import styles from './ImpactShowcase.module.css';
import { CaseStudy, CaseStudyCategory } from '@/lib/dictionaries';

const categoryColors: Record<CaseStudyCategory, string> = {
    'Software Development': '#3b82f6',
    'Marketing': '#8b5cf6',
    'UX': '#ec4899',
    'Ops': '#f59e0b',
};

export default function ImpactShowcase() {
    const { t } = useLanguage();

    // Showcase top featured projects (Lead with zero-to-one stories to back up Hero claim)
    const featuredSlugs = ['foundership-product', 'chonk-cookies-d2c', 'saas-growth-platform', 'retention-engine'];
    const sortedProjects = featuredSlugs
        .map(slug => t.projects.items.find((p: CaseStudy) => p.slug === slug))
        .filter(Boolean) as CaseStudy[];

    return (
        <section className={styles.section}>
            <div className="container">
                <header className={styles.header}>
                    <div className={styles.titleRow}>
                        <TrendingUp size={24} className={styles.icon} />
                        <h2 className={styles.title}>Impact & Value Creation</h2>
                    </div>
                    <p className={styles.subtitle}>
                        Selected projects highlighting business value and scaling
                    </p>
                </header>

                <div className={styles.grid}>
                    {sortedProjects.map((project: CaseStudy, index: number) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className={styles.card}
                        >
                            <div className={styles.rank}>
                                #{index + 1}
                            </div>

                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <span
                                        className={styles.category}
                                        style={{
                                            background: `${categoryColors[project.category]}20`,
                                            color: categoryColors[project.category]
                                        }}
                                    >
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.company}>{project.company}</p>

                                <div className={styles.metrics}>
                                    {project.metrics.slice(0, 2).map((metric: { value: string; label: string }, idx: number) => (
                                        <div key={idx} className={styles.metric}>
                                            <span className={styles.metricValue}>{metric.value}</span>
                                            <span className={styles.metricLabel}>{metric.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.viewMore}>
                                    View Case Study
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
