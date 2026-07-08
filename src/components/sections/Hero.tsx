'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Button } from '@/components/ui/Button';
import styles from './Hero.module.css';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { trackButtonClick, trackOutboundLink } from '@/utils/analytics';

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.12 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.layout}>
                <div className={styles.content}>
                    <motion.div className={styles.badges} variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                        <span className={styles.locationBadge}>
                            <MapPin size={16} /> {t.hero.location}
                        </span>
                    </motion.div>
                    <motion.h1 className={styles.headline} variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                        {t.hero.headline.split('\n').map((line, i) => (
                            <span key={i} className={styles.headlineLine}>{line}<br /></span>
                        ))}
                    </motion.h1>
                    <motion.p className={styles.subheadline} variants={fadeUp} initial="hidden" animate="visible" custom={2}>
                        {t.hero.subheadline}
                    </motion.p>
                    <motion.p className={styles.availability} variants={fadeUp} initial="hidden" animate="visible" custom={3}>
                        Open to Senior PM · Head of Product · KSA &amp; GCC · Available now
                    </motion.p>
                    <motion.div className={styles.actions} variants={fadeUp} initial="hidden" animate="visible" custom={4}>
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
                    </motion.div>
                </div>
                <motion.div
                    className={styles.portraitWrap}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Image
                        src="/images/portrait.jpg"
                        alt="Thariq Hamad, Senior Product Manager"
                        width={400}
                        height={400}
                        className={styles.portrait}
                        sizes="320px"
                        priority
                    />
                </motion.div>
                </div>
            </div>
        </section>
    );
}
