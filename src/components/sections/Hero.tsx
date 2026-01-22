'use client';

import React from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Button } from '@/components/ui/Button';
import styles from './Hero.module.css';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';

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
                            onClick={() => window.open('https://calendar.app.google/vDMbaPoDc2vYVQaK8', '_blank')}
                        >
                            {t.hero.ctaPrimary} <ArrowRight size={18} />
                        </Button>
                        <Link href="/projects">
                            <Button variant="outline" size="lg">
                                {t.hero.ctaSecondary}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
