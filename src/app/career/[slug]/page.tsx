'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Calendar, MapPin, Globe, Briefcase } from 'lucide-react';
import styles from './page.module.css';

export default function JobDetailPage() {
    const { t, locale } = useLanguage();
    const params = useParams();
    const slug = params.slug as string;

    const job = t.career.jobs.find((j: { slug: string }) => j.slug === slug);

    if (!job) {
        return <div className="container py-20">Job not found: {slug}</div>;
    }

    // Find related case studies
    const relatedCaseStudies = t.projects.items.filter((cs: { slug: string }) =>
        job.caseStudyIds.includes(cs.slug)
    );

    // Parse description for markdown-like formatting
    const formatText = (text: string) => {
        // Split by **bold** markers
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index} className={styles.highlight}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    return (
        <main className={styles.main}>
            <div className="container">
                {/* Back Navigation */}
                <Link href="/career" className={styles.backLink}>
                    <ArrowLeft size={16} className={locale === 'ar' ? 'rotate-180' : ''} />
                    Back to Career
                </Link>

                {/* Header */}
                <header className={styles.header}>
                    <div className={styles.logoContainer}>
                        {job.logo ? (
                            <Image
                                src={job.logo}
                                alt={job.company}
                                width={72}
                                height={72}
                                className={styles.logo}
                            />
                        ) : (
                            <div className={styles.logoPlaceholder}>
                                <Briefcase size={32} />
                            </div>
                        )}
                    </div>
                    <div className={styles.headerInfo}>
                        <h1 className={styles.title}>{job.title}</h1>
                        <p className={styles.company}>{job.company}</p>
                        <div className={styles.meta}>
                            <span className={styles.metaItem}>
                                <Calendar size={16} />
                                {job.dateRange}
                            </span>
                            <span className={styles.metaItem}>
                                <MapPin size={16} />
                                {job.location}
                            </span>
                            {job.website && (
                                <a
                                    href={job.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.websiteLink}
                                >
                                    <Globe size={16} />
                                    Visit Website
                                </a>
                            )}
                        </div>
                    </div>
                </header>

                {/* Content Grid */}
                <div className={styles.grid}>
                    {/* Main Content */}
                    <div className={styles.content}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>About This Role</h2>
                            <div className={styles.description}>
                                {job.description.split('\n').map((paragraph: string, idx: number) => (
                                    <p key={idx}>{formatText(paragraph)}</p>
                                ))}
                            </div>
                        </section>

                        {/* Skills */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
                            <div className={styles.skills}>
                                {job.skills.map((skill: string, idx: number) => (
                                    <span key={idx} className={styles.skillTag}>{skill}</span>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar - Case Studies */}
                    <aside className={styles.sidebar}>
                        {relatedCaseStudies.length > 0 && (
                            <div className={styles.caseStudiesCard}>
                                <h3 className={styles.sidebarTitle}>Case Studies</h3>
                                <p className={styles.sidebarSubtitle}>
                                    Detailed projects from this role
                                </p>
                                <div className={styles.caseStudyList}>
                                    {relatedCaseStudies.map((cs: { slug: string; title: string; category: string; impactScore: number }) => (
                                        <Link
                                            key={cs.slug}
                                            href={`/projects/${cs.slug}`}
                                            className={styles.caseStudyItem}
                                        >
                                            <div className={styles.caseStudyInfo}>
                                                <span className={styles.caseStudyTitle}>{cs.title}</span>
                                                <div className={styles.caseStudyMeta}>
                                                    <span className={styles.categoryBadge}>{cs.category}</span>
                                                    <span className={styles.impactBadge}>
                                                        Impact: {cs.impactScore}/10
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>
                </div>
            </div>
        </main>
    );
}
