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
                    <p className={styles.availability}>
                        Open to Senior PM · Head of Product · KSA &amp; GCC · Available now
                    </p>
                    <div className={styles.actions}>
                        <Link href="/cv" onClick={() => trackButtonClick('Download CV', 'hero')}>
                            <Button size="lg">
                                Download CV <ArrowRight size={18} />
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => {
                                trackOutboundLink('https://calendar.app.google/vDMbaPoDc2vYVQaK8', 'Book a Call');
                                window.open('https://calendar.app.google/vDMbaPoDc2vYVQaK8', '_blank');
                            }}
                        >
                            Book a Call
                        </Button>
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
