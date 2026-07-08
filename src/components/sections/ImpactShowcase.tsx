'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { ArrowRight } from 'lucide-react';
import styles from './ImpactShowcase.module.css';
import { CaseStudy } from '@/lib/dictionaries';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import CasePlate from '@/components/ui/CasePlate';

export default function ImpactShowcase() {
    const { t } = useLanguage();
    const ref = useScrollReveal<HTMLElement>();

    // Showcase top featured projects (Lead with zero-to-one stories to back up Hero claim)
    const featuredSlugs = ['foundership-product', 'chonk-cookies-d2c', 'saas-growth-platform', 'retention-engine'];
    const sortedProjects = featuredSlugs
        .map(slug => t.projects.items.find((p: CaseStudy) => p.slug === slug))
        .filter(Boolean) as CaseStudy[];

    return (
        <section ref={ref} className={`${styles.section} reveal`}>
            <div className="container">
                <header className={styles.header}>
                    <div className={styles.titleRow}>
                        <h2 className={styles.title}>Selected Work</h2>
                    </div>
                    <p className={styles.subtitle}>
                        Four case studies — each with a real business outcome and a number to back it up
                    </p>
                </header>

                <div className={styles.grid}>
                    {sortedProjects.map((project: CaseStudy) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className={styles.card}
                        >
                            {project.metrics[0] && (
                                <div className={styles.plateWrap}>
                                    <CasePlate
                                        seed={project.slug}
                                        metricValue={project.metrics[0].value}
                                        metricLabel={project.metrics[0].label}
                                    />
                                </div>
                            )}
                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.category}>
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.company}>{project.company}</p>

                                <div className={styles.metrics}>
                                    {(project.metrics.length > 1 ? project.metrics.slice(1, 3) : project.metrics).map((metric: { value: string; label: string }, idx: number) => (
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
