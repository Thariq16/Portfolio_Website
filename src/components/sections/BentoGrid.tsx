'use client';

import React from 'react';
import styles from './BentoGrid.module.css';
import { useLanguage } from '@/components/providers/LanguageProvider';
import clsx from 'clsx';
import { DollarSign, Cpu, TrendingUp, ShoppingCart } from 'lucide-react';

export default function BentoGrid() {
    const { t } = useLanguage();

    const formatText = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <span key={index} className={styles.highlight}>{part.slice(2, -2)}</span>;
            }
            return part;
        });
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Core Expertise</h2>
                    <p className={styles.sectionSubtitle}>Functional leadership across the product lifecycle.</p>
                </div>
                <div className={styles.grid}>
                    {/* Block 1: Revenue (Double Wide) */}
                    <div className={clsx(styles.card, styles.colSpan2)}>
                        <div className={styles.iconWrapper}><DollarSign size={24} /></div>
                        <h3 className={styles.title}>{t.bento.revenue.title}</h3>
                        <p className={styles.desc}>{formatText(t.bento.revenue.desc)}</p>
                    </div>

                    {/* Block 2: AI (Standard) */}
                    <div className={clsx(styles.card, styles.colSpan1)}>
                        <div className={styles.iconWrapper}><Cpu size={24} /></div>
                        <h3 className={styles.title}>{t.bento.ai.title}</h3>
                        <p className={styles.desc}>{formatText(t.bento.ai.desc)}</p>
                    </div>

                    {/* Block 3: Data (Standard) */}
                    <div className={clsx(styles.card, styles.colSpan1)}>
                        <div className={styles.iconWrapper}><TrendingUp size={24} /></div>
                        <h3 className={styles.title}>{t.bento.data.title}</h3>
                        <p className={styles.desc}>{formatText(t.bento.data.desc)}</p>
                    </div>

                    {/* Block 4: GTM (Double Wide) */}
                    <div className={clsx(styles.card, styles.colSpan2)}>
                        <div className={styles.iconWrapper}><ShoppingCart size={24} /></div>
                        <h3 className={styles.title}>{t.bento.gtm.title}</h3>
                        <p className={styles.desc}>{formatText(t.bento.gtm.desc)}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
