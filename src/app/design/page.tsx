'use client';

import React, { useState } from 'react';
import { ExternalLink, Layers, Smartphone, Tablet, Monitor } from 'lucide-react';
import styles from './page.module.css';

type FilterKey = 'all' | 'fieldr' | 'sling' | 'freelance';

interface DesignProject {
    id: string;
    title: string;
    company: string;
    filter: Exclude<FilterKey, 'all'>;
    deviceType: 'mobile' | 'tablet' | 'web';
    description: string;
    figmaEmbedSrc: string;
    figmaViewSrc: string;
    year: string;
    tags: string[];
}

const designProjects: DesignProject[] = [
    {
        id: 'fieldr-indoor-flow',
        title: 'FieldR – Indoor App Flow',
        company: 'FieldR',
        filter: 'fieldr',
        deviceType: 'mobile',
        description: 'End-to-end indoor cricket analytics flow — session tracking, player insights, and performance dashboards designed for grassroots coaches.',
        figmaEmbedSrc: 'https://embed.figma.com/design/bgmEUTAM2BP8x8lkVzoH3w/FieldR---Indoor---Flow?node-id=738-10826&embed-host=share',
        figmaViewSrc: 'https://www.figma.com/design/bgmEUTAM2BP8x8lkVzoH3w/FieldR---Indoor---Flow?node-id=738-10826',
        year: '2022',
        tags: ['Mobile App', 'Sports Analytics', 'Figma'],
    },
    {
        id: 'fieldr-tablet-app',
        title: 'FieldR – Tablet App',
        company: 'FieldR',
        filter: 'fieldr',
        deviceType: 'tablet',
        description: 'Tablet-optimised scoring and match management interface, designed for live use by scorers at cricket grounds.',
        figmaEmbedSrc: 'https://embed.figma.com/design/VETOGtVfFaZfQ7xYUfofHh/FieldR---Tablet-App?node-id=6-26&embed-host=share',
        figmaViewSrc: 'https://www.figma.com/design/VETOGtVfFaZfQ7xYUfofHh/FieldR---Tablet-App?node-id=6-26',
        year: '2023',
        tags: ['Tablet App', 'Live Scoring', 'Figma'],
    },
    {
        id: 'sling-rider-app',
        title: 'Sling Rider App',
        company: 'Sling Mobility',
        filter: 'sling',
        deviceType: 'mobile',
        description: 'Rider-facing EV app with real-time battery tracking, swap station navigation, and ride streak incentives built for last-mile delivery.',
        figmaEmbedSrc: 'https://embed.figma.com/design/fj7mVePeX7EHO3T5oBdzLX/Sling-Rider-App?node-id=0-1&embed-host=share',
        figmaViewSrc: 'https://www.figma.com/design/fj7mVePeX7EHO3T5oBdzLX/Sling-Rider-App?node-id=0-1',
        year: '2022',
        tags: ['Mobile App', 'EV Mobility', 'Figma'],
    },
    {
        id: 'sling-maldives',
        title: 'Sling Ride – Maldives',
        company: 'Sling Mobility',
        filter: 'sling',
        deviceType: 'mobile',
        description: 'Ride-hailing app adapted for the Maldives market, with island-specific navigation and a driver management interface.',
        figmaEmbedSrc: 'https://embed.figma.com/design/AaUJ1LZjZKKd5xdbJ8Mksp/Sling-Ride---Maldives?node-id=0-1&embed-host=share',
        figmaViewSrc: 'https://www.figma.com/design/AaUJ1LZjZKKd5xdbJ8Mksp/Sling-Ride---Maldives?node-id=0-1',
        year: '2023',
        tags: ['Mobile App', 'Ride Hailing', 'Figma'],
    },
    {
        id: 'connme',
        title: 'ConnMe – Networking App',
        company: 'ConnMe',
        filter: 'freelance',
        deviceType: 'mobile',
        description: 'Redesigned professional networking app for the Czech Republic market, with a focus on seamless contact sharing and a modern card-based profile UI.',
        figmaEmbedSrc: 'https://embed.figma.com/design/MyQVZDnm9m74Q9dBuEZA5A/ConnMe---New-Version?node-id=1-6&embed-host=share',
        figmaViewSrc: 'https://www.figma.com/design/MyQVZDnm9m74Q9dBuEZA5A/ConnMe---New-Version?node-id=1-6',
        year: '2023',
        tags: ['Mobile App', 'Freelance', 'Networking'],
    },
    {
        id: 'allo-qatar',
        title: 'Allo UI – Qatar',
        company: 'Allo Qatar',
        filter: 'freelance',
        deviceType: 'mobile',
        description: 'Consumer super-app UI for the Qatari market — combining delivery, services, and local commerce into a unified, bilingual interface.',
        figmaEmbedSrc: 'https://embed.figma.com/design/bq01R7Vyi08j7M3RQ2L1Su/Allo-UI---Qatar?node-id=4213-3496&embed-host=share',
        figmaViewSrc: 'https://www.figma.com/design/bq01R7Vyi08j7M3RQ2L1Su/Allo-UI---Qatar?node-id=4213-3496',
        year: '2024',
        tags: ['Mobile App', 'Freelance', 'Super App'],
    },
];

const filters: { key: FilterKey; label: string; count?: number }[] = [
    { key: 'all', label: 'All Work' },
    { key: 'fieldr', label: 'FieldR' },
    { key: 'sling', label: 'Sling Mobility' },
    { key: 'freelance', label: 'Freelance' },
];

const DeviceIcon = ({ type }: { type: DesignProject['deviceType'] }) => {
    if (type === 'tablet') return <Tablet size={14} />;
    if (type === 'web') return <Monitor size={14} />;
    return <Smartphone size={14} />;
};

export default function DesignPage() {
    const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const filtered = activeFilter === 'all'
        ? designProjects
        : designProjects.filter(p => p.filter === activeFilter);

    return (
        <main className={styles.main}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroInner}>
                        <div className={styles.heroBadge}>
                            <Layers size={14} />
                            <span>UI / UX Design Portfolio</span>
                        </div>
                        <h1 className={styles.heroTitle}>
                            Designing for <span className={styles.heroAccent}>clarity</span>,<br />
                            not just aesthetics
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Selected product design work from real-world projects — mobile apps, tablet
                            experiences, and consumer platforms across Sri Lanka, Maldives, and Qatar.
                            Each design was built alongside the product I shipped.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>6</span>
                                <span className={styles.statLabel}>Projects</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.stat}>
                                <span className={styles.statValue}>4</span>
                                <span className={styles.statLabel}>Companies</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.stat}>
                                <span className={styles.statValue}>3</span>
                                <span className={styles.statLabel}>Markets</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className={styles.filterSection}>
                <div className="container">
                    <div className={styles.filterBar}>
                        {filters.map(f => (
                            <button
                                key={f.key}
                                id={`design-filter-${f.key}`}
                                className={`${styles.filterBtn} ${activeFilter === f.key ? styles.filterActive : ''}`}
                                onClick={() => setActiveFilter(f.key)}
                            >
                                {f.label}
                                <span className={styles.filterCount}>
                                    {f.key === 'all'
                                        ? designProjects.length
                                        : designProjects.filter(p => p.filter === f.key).length}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className={styles.gridSection}>
                <div className="container">
                    <div className={styles.grid}>
                        {filtered.map((project) => {
                            const isExpanded = expandedId === project.id;
                            return (
                                <article
                                    key={project.id}
                                    id={`design-card-${project.id}`}
                                    className={`${styles.card} ${isExpanded ? styles.cardExpanded : ''}`}
                                >
                                    {/* Card Header */}
                                    <div className={styles.cardHeader}>
                                        <div className={styles.cardMeta}>
                                            <span className={`${styles.companyBadge} ${styles[`badge_${project.filter}`]}`}>
                                                {project.company}
                                            </span>
                                            <span className={styles.deviceBadge}>
                                                <DeviceIcon type={project.deviceType} />
                                                {project.deviceType.charAt(0).toUpperCase() + project.deviceType.slice(1)}
                                            </span>
                                            <span className={styles.yearBadge}>{project.year}</span>
                                        </div>
                                        <a
                                            href={project.figmaViewSrc}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.figmaLink}
                                            title="Open in Figma"
                                        >
                                            <ExternalLink size={15} />
                                            <span>Figma</span>
                                        </a>
                                    </div>

                                    <h2 className={styles.cardTitle}>{project.title}</h2>
                                    <p className={styles.cardDescription}>{project.description}</p>

                                    {/* Tags */}
                                    <div className={styles.tags}>
                                        {project.tags.map(tag => (
                                            <span key={tag} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>

                                    {/* Figma Embed */}
                                    <div className={styles.embedWrapper}>
                                        <div className={styles.embedGlow} />
                                        <iframe
                                            className={styles.embed}
                                            src={project.figmaEmbedSrc}
                                            allowFullScreen
                                            loading="lazy"
                                            title={project.title}
                                        />
                                        {/* Expand overlay */}
                                        {!isExpanded && (
                                            <button
                                                className={styles.expandOverlay}
                                                onClick={() => setExpandedId(project.id)}
                                                aria-label="Expand preview"
                                            >
                                                <span className={styles.expandHint}>Click to expand</span>
                                            </button>
                                        )}
                                        {isExpanded && (
                                            <button
                                                className={styles.collapseBtn}
                                                onClick={() => setExpandedId(null)}
                                                aria-label="Collapse preview"
                                            >
                                                ✕ Collapse
                                            </button>
                                        )}
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Want to collaborate on a design?</h2>
                        <p className={styles.ctaBody}>
                            I approach design as a product tool — every screen is a decision rooted in
                            user behaviour and business outcomes, not just aesthetics.
                        </p>
                        <a
                            href="https://calendar.app.google/vDMbaPoDc2vYVQaK8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaBtn}
                        >
                            Book a Call
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
