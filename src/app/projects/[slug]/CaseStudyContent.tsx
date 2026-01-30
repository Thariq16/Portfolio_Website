'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Button } from '@/components/ui/Button';
import { Calendar, ArrowLeft, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/JsonLd';

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
        // First, handle links [text](url) then bold **text**
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const boldRegex = /\*\*(.*?)\*\*/g;

        // Split by links first
        const parts: React.ReactNode[] = [];
        let lastIndex = 0;
        let match;

        const textWithLinks = text.replace(linkRegex, '___LINK_START___$1___LINK_SEP___$2___LINK_END___');
        const segments = textWithLinks.split(/(___LINK_START___.*?___LINK_END___)/g);

        return segments.map((segment, index) => {
            if (segment.startsWith('___LINK_START___')) {
                const linkMatch = segment.match(/___LINK_START___(.*)___LINK_SEP___(.*)___LINK_END___/);
                if (linkMatch) {
                    return (
                        <a
                            key={index}
                            href={linkMatch[2]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline hover:text-primary/80"
                        >
                            {linkMatch[1]}
                        </a>
                    );
                }
            }
            // Handle bold within non-link segments
            const boldParts = segment.split(/(\*\*.*?\*\*)/g);
            return boldParts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={`${index}-${i}`} className="font-bold text-primary">{part.slice(2, -2)}</strong>;
                }
                return part;
            });
        });
    };

    return (
        <main className={styles.main}>
            {/* JSON-LD Structured Data */}
            <ArticleSchema
                title={project.title}
                description={project.context?.goal || project.title}
                url={`https://thariq16.github.io/Portfolio_Website/projects/${slug}`}
                author="Thariq Hamad"
            />
            <BreadcrumbSchema
                items={[
                    { name: 'Home', url: 'https://thariq16.github.io/Portfolio_Website' },
                    { name: 'Case Studies', url: 'https://thariq16.github.io/Portfolio_Website/projects' },
                    { name: project.company, url: `https://thariq16.github.io/Portfolio_Website/projects/${slug}` },
                ]}
            />

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

                    {/* 9. Media & Links (if available) */}
                    {project.media && (
                        <section className={styles.section}>
                            <h2 className={styles.heading}>9. Media & Links</h2>
                            <div className={styles.mediaSection}>
                                <div className={styles.mediaButtons}>
                                    {project.media.website && (
                                        <a
                                            href={project.media.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${styles.mediaButton} ${styles.mediaButtonWebsite}`}
                                        >
                                            <Globe size={20} />
                                            Visit Website
                                        </a>
                                    )}
                                    {project.media.instagram && (
                                        <a
                                            href={project.media.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${styles.mediaButton} ${styles.mediaButtonInstagram}`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                            </svg>
                                            Follow @chonk.sl
                                        </a>
                                    )}
                                </div>
                                {project.media.images && project.media.images.length > 0 && (
                                    <>
                                        <p className={styles.featuredMediaTitle}>Featured Media</p>
                                        <div className={styles.mediaCards}>
                                            {project.media.images.map((img: { url: string; caption: string }, idx: number) => (
                                                <a
                                                    key={idx}
                                                    href={img.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.mediaCard}
                                                >
                                                    <span className={styles.mediaCardIcon}>📸</span>
                                                    <div className={styles.mediaCardContent}>
                                                        <span className={styles.mediaCardCaption}>{img.caption}</span>
                                                        <span className={styles.mediaCardLink}>View on Instagram →</span>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </section>
                    )}
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
