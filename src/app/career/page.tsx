'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { ArrowRight, Briefcase, Calendar } from 'lucide-react';
import styles from './page.module.css';

export default function CareerPage() {
    const { t, locale } = useLanguage();
    const career = t.career;

    // Reverse to show oldest first (career progression)
    const jobs = [...career.jobs].reverse();

    return (
        <main className={styles.main}>
            <div className="container">
                <header className={styles.header}>
                    <h1 className={styles.title}>{career.title}</h1>
                    <p className={styles.subtitle}>{career.subtitle}</p>
                </header>

                <div className={styles.timeline}>
                    {jobs.map((job, index) => (
                        <div key={job.slug} className={styles.timelineItem}>
                            <div className={styles.timelineConnector}>
                                <div className={styles.timelineDot} />
                                {index < jobs.length - 1 && <div className={styles.timelineLine} />}
                            </div>

                            <div className={styles.jobCard}>
                                <div className={styles.jobHeader}>
                                    <div className={styles.logoContainer}>
                                        {job.logo ? (
                                            <Image
                                                src={job.logo}
                                                alt={job.company}
                                                width={48}
                                                height={48}
                                                className={styles.logo}
                                            />
                                        ) : (
                                            <div className={styles.logoPlaceholder}>
                                                <Briefcase size={24} />
                                            </div>
                                        )}
                                    </div>
                                    <div className={styles.jobInfo}>
                                        <h2 className={styles.jobTitle}>{job.title}</h2>
                                        <p className={styles.company}>{job.company}</p>
                                        <div className={styles.meta}>
                                            <span className={styles.dateRange}>
                                                <Calendar size={14} />
                                                {job.dateRange}
                                            </span>
                                            <span className={styles.location}>{job.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className={styles.summary}>{job.summary}</p>

                                {job.caseStudyIds.length > 0 && (
                                    <div className={styles.caseStudyBadge}>
                                        {job.caseStudyIds.length} Case {job.caseStudyIds.length === 1 ? 'Study' : 'Studies'}
                                    </div>
                                )}

                                <Link href={`/career/${job.slug}`} className={styles.viewButton}>
                                    View Details
                                    <ArrowRight size={16} className={locale === 'ar' ? 'rotate-180' : ''} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
