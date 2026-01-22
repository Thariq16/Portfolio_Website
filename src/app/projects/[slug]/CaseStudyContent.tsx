'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Button } from '@/components/ui/Button';
import { Calendar, ArrowLeft, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function CaseStudyContent() {
    const { t, locale } = useLanguage();
    const params = useParams();
    const slug = params.slug as string;

    // Find the case study in the current locale
    const project = t.projects.items.find((p: { slug: string }) => p.slug === slug);

    if (!project) {
        return <div className="container py-20">Case Study Not Found: {slug}</div>;
    }

    const formatText = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index} className="font-bold text-primary">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    return (
        <main className={styles.main}>
            {/* Navigation Back */}
            <div className="container py-8">
                <Link href="/projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
                    <ArrowLeft size={16} className={locale === 'ar' ? 'ml-2 rotate-180' : 'mr-2'} />
                    {t.projects.title}
                </Link>
            </div>

            <article className="container">
                {/* Hero */}
                <header className={styles.header}>
                    <div className={styles.headerTop}>
                        {project.logo && (
                            <div className={styles.logoContainer}>
                                <Image
                                    src={project.logo}
                                    alt={project.company}
                                    width={48}
                                    height={48}
                                    className={styles.logo}
                                />
                            </div>
                        )}
                        <div className={styles.metaCol}>
                            <h1 className={styles.title}>{project.title}</h1>
                            <div className={styles.metaRow}>
                                <span className={styles.metadata}>
                                    {project.company} &middot; {project.market} &middot; {project.timeframe}
                                </span>
                                {project.website && (
                                    <a
                                        href={project.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.visitLink}
                                    >
                                        <Globe size={14} className="mr-1.5" />
                                        Visit Website
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={styles.metricsHero}>
                        {project.metrics.map((m: { value: string; label: string }, i: number) => (
                            <div key={i} className={styles.metricBig}>
                                <span className={styles.metricValueBig}>{m.value}</span>
                                <span className={styles.metricLabelBig}>{m.label}</span>
                            </div>
                        ))}
                    </div>
                </header>

                <div className={styles.grid}>
                    {/* 1. Context */}
                    <section className={styles.section}>
                        <h2 className={styles.heading}>1. Context & Business Problem</h2>
                        <div className={styles.content}>
                            <p className="font-semibold mb-2">{formatText(project.context.goal)}</p>
                            <p>{formatText(project.context.details)}</p>
                        </div>
                    </section>

                    {/* 2. My Role */}
                    <section className={styles.section}>
                        <h2 className={styles.heading}>2. My Role & Ownership</h2>
                        <div className={styles.content}>
                            <p>{formatText(project.role.details)}</p>
                        </div>
                    </section>

                    {/* 3. Constraints */}
                    <section className={styles.section}>
                        <h2 className={styles.heading}>3. Constraints & Trade-offs</h2>
                        <div className={styles.content}>
                            <p>{formatText(project.constraints.details)}</p>
                        </div>
                    </section>

                    {/* 4. Discovery */}
                    <section className={styles.section}>
                        <h2 className={styles.heading}>4. Discovery & Key Insights</h2>
                        <div className={styles.content}>
                            <p>{formatText(project.discovery.details)}</p>
                        </div>
                    </section>

                    {/* 5. Decisions */}
                    <section className={styles.section}>
                        <h2 className={styles.heading}>5. Key Decisions</h2>
                        <div className={styles.content}>
                            <p>{formatText(project.decisions.details)}</p>
                        </div>
                    </section>

                    {/* 6. Execution */}
                    <section className={styles.section}>
                        <h2 className={styles.heading}>6. Execution Snapshot</h2>
                        <div className={styles.content}>
                            <p>{formatText(project.execution.details)}</p>
                        </div>
                    </section>

                    {/* 7. Outcomes */}
                    <section className={styles.section}>
                        <h2 className={styles.heading}>7. Outcomes & Impact</h2>
                        <div className={styles.content}>
                            <p>{formatText(project.outcomes.details)}</p>
                        </div>
                    </section>

                    {/* 8. Learnings */}
                    <section className={styles.section}>
                        <h2 className={styles.heading}>8. Learnings & What I'd Do Differently</h2>
                        <div className={styles.content}>
                            <div className="mb-4">
                                <strong className="block text-primary mb-1">Repeat</strong>
                                <p>{formatText(project.learnings.repeat)}</p>
                            </div>
                            <div>
                                <strong className="block text-destructive mb-1">Change</strong>
                                <p>{formatText(project.learnings.change)}</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* CTA */}
                <div className={styles.cta}>
                    <h3 className={styles.ctaTitle}>
                        {locale === 'ar' ? 'مهتم كيف أتعامل مع تحديات مماثلة؟' : 'Interested in how I approach similar product challenges?'}
                    </h3>
                    <Button
                        size="lg"
                        onClick={() => window.open('https://calendar.app.google/vDMbaPoDc2vYVQaK8', '_blank')}
                    >
                        <Calendar size={18} />
                        {t.hero.ctaPrimary}
                    </Button>
                </div>
            </article>
        </main>
    );
}
