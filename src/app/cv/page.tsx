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
        id: 'fintech',
        category: 'Fintech & Digital Products',
        label: 'Fintech & Digital Products',
        description: 'Tailored for fintech, payments, and digital financial product roles. Emphasises monetisation strategy, product-market fit, and growth at scale.',
        filename: 'Thariq_Hamad - Fintech_Digital_Products.pdf',
        tags: ['Fintech', 'Payments', 'Digital Banking', 'Product Strategy'],
        featured: true,
        accentClass: 'accentFintech',
    },
    {
        id: 'business-analyst',
        category: 'Business Analyst & AI',
        label: 'Business Analyst (AI)',
        description: 'Focused on data-driven decision making, AI product discovery, and cross-functional analysis. Ideal for BA and AI Product roles.',
        filename: 'Thariq_Hamad - Business_Analyst_AI.pdf',
        tags: ['Business Analysis', 'AI Products', 'Data', 'Enterprise'],
        accentClass: 'accentBA',
    },
    {
        id: 'digital-transformation',
        category: 'Digital Transformation PM',
        label: 'Digital Transformation PM',
        description: 'Highlighting large-scale transformation programmes, ERP implementations, and enterprise change management across global teams.',
        filename: 'Thariq_Hamad - Digital_Transformation_PM.pdf',
        tags: ['Digital Transformation', 'ERP', 'Enterprise', 'Change Management'],
        accentClass: 'accentDT',
    },
    {
        id: 'startup',
        category: 'Startup Product Lead',
        label: 'Startup Product Lead',
        description: 'Zero-to-one product leadership, founder mindset, and growth from pre-seed to scaled operations. Best for early-stage and growth-stage roles.',
        filename: 'Thariq_Hamad - Startup_Product_Lead.pdf',
        tags: ['0→1 Product', 'Founder', 'Growth', 'Monetisation'],
        accentClass: 'accentStartup',
    },
    {
        id: 'strategy',
        category: 'Strategy, Design & Research',
        label: 'Strategy, Design & Research',
        description: 'Covers product strategy, UX design leadership, and research-led product development. Suited for strategy consulting and design-led PM roles.',
        filename: 'Thariq_Hamad - Strategy_Designer_Researcher.pdf',
        tags: ['Product Strategy', 'UX Design', 'Research', 'Design Thinking'],
        accentClass: 'accentStrategy',
    },
    {
        id: 'football',
        category: 'Football Video Analyst',
        label: 'Football Video Analyst',
        description: 'Specifically for football analytics, performance analysis, and video scouting roles. Separate from product management experience.',
        filename: 'Thariq_Hamad - Football_Video_Analyst.pdf',
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
