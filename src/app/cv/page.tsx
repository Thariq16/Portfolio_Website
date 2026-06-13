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
        description: 'Leads with SAR 7.5M SaaS pipeline and 1,800% ROAS at Fortude. Tailored for fintech, payments, and digital financial product roles — emphasises monetisation strategy and revenue outcomes.',
        filename: 'Thariq_Hamad - Fintech_Digital_Products.pdf',
        tags: ['Fintech', 'Payments', 'Digital Banking', 'Monetisation'],
        featured: true,
        accentClass: 'accentFintech',
    },
    {
        id: 'startup',
        category: 'Startup Product Lead',
        label: 'Startup Product Lead',
        description: 'Leads with the 0→1 EV story — Employee #1 scaling to a 34-person team — and Venture Engine Top 28 validation. Best for early-stage and growth-stage roles where founder-mindset matters.',
        filename: 'Thariq_Hamad - Startup_Product_Lead.pdf',
        tags: ['0→1 Product', 'Founder Mindset', 'Team Scaling', 'Venture Engine'],
        accentClass: 'accentStartup',
    },
    {
        id: 'digital-transformation',
        category: 'Digital Transformation PM',
        label: 'Digital Transformation PM',
        description: 'Highlights the FieldR platform (Sri Lanka\'s first cricket analytics product, 75% free-to-paid conversion) and ERP/enterprise transformation work. Ideal for enterprise PM and digital transformation roles.',
        filename: 'Thariq_Hamad - Digital_Transformation_PM.pdf',
        tags: ['Digital Transformation', 'Enterprise', 'Platform Products', 'Analytics'],
        accentClass: 'accentDT',
    },
    {
        id: 'business-analyst',
        category: 'Business Analyst & AI',
        label: 'Business Analyst (AI)',
        description: 'Centres on the Charlie AI assistant (+75% usage growth) and data-driven discovery work at Fortude. Suited for BA, AI Product, and data-adjacent roles where analytical rigour is the primary signal.',
        filename: 'Thariq_Hamad - Business_Analyst_AI.pdf',
        tags: ['AI Products', 'Business Analysis', 'Data', 'Enterprise SaaS'],
        accentClass: 'accentBA',
    },
    {
        id: 'strategy',
        category: 'Strategy, Design & Research',
        label: 'Strategy, Design & Research',
        description: 'Emphasises product strategy, UX leadership, and research-led decisions across the portfolio. Suited for strategy consulting, Head of Product, and design-led PM roles.',
        filename: 'Thariq_Hamad - Strategy_Designer_Researcher.pdf',
        tags: ['Product Strategy', 'UX Design', 'Research', 'Head of Product'],
        accentClass: 'accentStrategy',
    },
    {
        id: 'football',
        category: 'Football Video Analyst',
        label: 'Football Video Analyst',
        description: 'Dedicated CV for football analytics, performance analysis, and video scouting roles. Completely separate from the product management track — includes match analysis and data methodology.',
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
