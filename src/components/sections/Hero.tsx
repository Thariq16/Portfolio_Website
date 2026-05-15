'use client';

import React from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Button } from '@/components/ui/Button';
import styles from './Hero.module.css';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import { trackButtonClick, trackOutboundLink } from '@/utils/analytics';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badges}>
                        <span className={styles.locationBadge}>
                            <MapPin size={16} /> {t.hero.location}
                        </span>
                    </div>
                    <h1 className={styles.headline}>
                        {t.hero.headline.split('\n').map((line, i) => (
                            <span key={i} className={styles.headlineLine}>{line}<br /></span>
                        ))}
                    </h1>
                    <p className={styles.subheadline}>
                        {t.hero.subheadline}
                    </p>
                    <div className={styles.actions}>
                        <Button
                            size="lg"
                            onClick={() => {
                                trackOutboundLink('https://calendar.app.google/vDMbaPoDc2vYVQaK8', 'Schedule Intro Call');
                                window.open('https://calendar.app.google/vDMbaPoDc2vYVQaK8', '_blank');
                            }}
                        >
                            {t.hero.ctaPrimary} <ArrowRight size={18} />
                        </Button>
                        <Link href="/cv" onClick={() => trackButtonClick('Download CV', 'hero')}>
                            <Button variant="outline" size="lg">
                                Download CV
                            </Button>
                        </Link>
                        <Link href="/projects" onClick={() => trackButtonClick('View Case Studies', 'hero')}>
                            <Button variant="ghost" size="lg">
                                {t.hero.ctaSecondary}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
