'use client';

import React from 'react';
import styles from './ContactCTA.module.css';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Button } from '@/components/ui/Button';
import { Calendar, Linkedin } from 'lucide-react';

export default function ContactCTA() {
    const { t, locale } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.headline}>
                    {locale === 'ar' ? 'جاهز لتوسيع نطاق المنتجات في دول مجلس التعاون الخليجي؟' : 'Ready to scale products in the GCC?'}
                </h2>
                <div className={styles.actions}>
                    <Button
                        size="lg"
                        onClick={() => window.open('https://calendar.app.google/vDMbaPoDc2vYVQaK8', '_blank')}
                    >
                        <Calendar size={18} />
                        {t.nav.contact}
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => window.open('https://www.linkedin.com/in/thariqhamad', '_blank')}
                    >
                        <Linkedin size={18} />
                        LinkedIn
                    </Button>
                </div>
                <p className={styles.note}>
                    {t.hero.location}
                </p>
            </div>
        </section>
    );
}
