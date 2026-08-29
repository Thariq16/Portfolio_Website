'use client';

import React from 'react';
import { Download, FileText, ArrowRight } from 'lucide-react';
import { trackCVDownload } from '@/utils/analytics';
import styles from './page.module.css';

interface CVOption {
    id: string;
    category: string;
    label: string;
    description: string;
    filename: string;
    tags: string[];
    featured?: boolean;
    accentClass: string;
}

const cvOptions: CVOption[] = [
    {
        id: 'product-management',
        category: 'Product Management',
        label: 'Product Management',
        description: 'Leads with head-of-product scope across Fortude, Sling Mobility, and FieldR — a SAR 7M+ revenue pipeline, teams scaled to 34, and direct board-level ownership. The broadest CV: best for Senior PM and Head of Product roles across SaaS, AI, and mobility.',
        filename: 'Thariq_Hamad - Product Management.pdf',
        tags: ['Head of Product', 'SaaS & AI', 'GTM Strategy', 'Revenue Growth'],
        featured: true,
        accentClass: 'accentFintech',
    },
    {
        id: 'business-analyst',
        category: 'Business Analyst',
        label: 'Business Analyst',
        description: 'Reframes the same track record through a requirements and stakeholder-management lens: RACI frameworks, structured discovery, and steering-committee facilitation across enterprise SaaS and mobility. Suited for Business Analyst and requirements-focused roles.',
        filename: 'Thariq_Hamad_CV_Business_Analyst.pdf',
        tags: ['Requirements Elicitation', 'Stakeholder Management', 'RACI & Process Mapping', 'Business Analysis'],
        accentClass: 'accentBA',
    },
    {
        id: 'football',
        category: 'Football Performance Analyst',
        label: 'Football Performance Analyst',
        description: 'Dedicated CV for football analytics, performance analysis, and video scouting roles. Completely separate from the product management track: includes match analysis and data methodology.',
        filename: 'Thariq_Hamad_Football_Performance_Analyst.pdf',
        tags: ['Football Analysis', 'Video Scouting', 'Performance Data', 'Sports Tech'],
        accentClass: 'accentFootball',
    },
];

export default function CVPage() {
    const handleDownload = (cv: CVOption) => {
        // Fire GA4 event before triggering download
        trackCVDownload(cv.label, cv.filename);

        const link = document.createElement('a');
        link.href = `/cv/${encodeURIComponent(cv.filename)}`;
        link.download = cv.filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <main className={styles.main}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroInner}>
                        <div className={styles.heroBadge}>
                            <FileText size={14} />
                            <span>CV Download</span>
                        </div>
                        <h1 className={styles.heroTitle}>
                            Pick the CV that fits<br />
                            <span className={styles.heroAccent}>your role</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            I have tailored my CV for different role types so you see what is most
                            relevant upfront. Choose the version that best matches the position you
                            are hiring for.
                        </p>
                        <div className={styles.heroHint}>
                            <ArrowRight size={14} />
                            <span>{cvOptions.length} versions available · Each focuses on different strengths</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CV Grid */}
            <section className={styles.gridSection}>
                <div className="container">
                    <div className={styles.grid}>
                        {cvOptions.map((cv) => (
                            <div
                                key={cv.id}
                                id={`cv-card-${cv.id}`}
                                className={`${styles.card} ${cv.featured ? styles.cardFeatured : ''}`}
                            >
                                {cv.featured && (
                                    <div className={styles.featuredBadge}>⭐ Recommended</div>
                                )}

                                <div className={styles.cardTop}>
                                    <div className={`${styles.iconWrap} ${styles[cv.accentClass]}`}>
                                        <FileText size={22} />
                                    </div>
                                    <div className={styles.cardInfo}>
                                        <h2 className={styles.cardTitle}>{cv.label}</h2>
                                        <span className={`${styles.categoryBadge} ${styles[cv.accentClass]}`}>
                                            {cv.category}
                                        </span>
                                    </div>
                                </div>

                                <p className={styles.cardDesc}>{cv.description}</p>

                                <div className={styles.tags}>
                                    {cv.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>

                                <button
                                    className={`${styles.downloadBtn} ${cv.featured ? styles.downloadBtnFeatured : ''}`}
                                onClick={() => handleDownload(cv)}
                                    id={`cv-download-${cv.id}`}
                                >
                                    <Download size={16} />
                                    Download CV
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer note */}
            <section className={styles.footerNote}>
                <div className="container">
                    <p className={styles.noteText}>
                        Not sure which to pick?{' '}
                        <a
                            href="https://calendar.app.google/vDMbaPoDc2vYVQaK8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.noteLink}
                        >
                            Book a 15-minute call
                        </a>{' '}
                        and I will send you the right one directly.
                    </p>
                </div>
            </section>
        </main>
    );
}
