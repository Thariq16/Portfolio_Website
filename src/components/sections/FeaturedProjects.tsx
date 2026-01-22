'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { ArrowRight } from 'lucide-react';
import styles from './FeaturedProjects.module.css';

export default function FeaturedProjects() {
    const { t } = useLanguage();

    // Filter projects that have featured data
    const featuredProjects = t.projects.items.filter(p => p.featured);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400; // Approx card width + gap
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (featuredProjects.length === 0) return null;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h2 className={styles.sectionTitle}>Featured Projects</h2>
                        <p className={styles.sectionSubtitle}>High-impact outcomes driven by product strategy.</p>
                    </div>
                    <div className={styles.controls}>
                        <button onClick={() => scroll('left')} className={styles.navButton} aria-label="Scroll left">
                            <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
                        </button>
                        <button onClick={() => scroll('right')} className={styles.navButton} aria-label="Scroll right">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className={styles.carousel} ref={scrollRef}>
                    {featuredProjects.map((project, index) => (
                        <Link href={`/projects/${project.slug}`} key={project.slug} className={styles.card}>
                            <div className={styles.tag}>{project.featured?.tag}</div>
                            <h3 className={styles.headline}>{project.featured?.headline}</h3>

                            <div className={styles.badges}>
                                {project.featured?.badges.map((badge, i) => (
                                    <div key={i} className={styles.badge}>
                                        <div className={styles.badgeValue}>{badge.value}</div>
                                        <div className={styles.badgeLabel}>{badge.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.outcome}>
                                <span className={styles.outcomeLabel}>Outcome:</span> {project.featured?.outcome}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
