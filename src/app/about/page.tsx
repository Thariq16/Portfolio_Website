'use client';

import React from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import styles from './page.module.css';
import {
    CheckSquare,
    Ticket,
    Database,
    Code2,
    Flame,
    Activity
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
    const { t } = useLanguage();

    const tools = [
        { name: 'ClickUp', icon: CheckSquare },
        { name: 'Jira', icon: Ticket },
        { name: 'SQL', icon: Database },
        { name: 'Python', icon: Code2 },
        { name: 'Hotjar', icon: Flame },
        { name: 'Clarity', icon: Activity },
    ];

    return (
        <main className="container">
            <div className={styles.wrapper}>
                <section className={styles.narrativeSection}>
                    <h1 className={styles.title}>{t.about.title}</h1>
                    <p className={styles.narrative}>
                        {t.about.narrative}
                    </p>
                    <div className={styles.ctaWrapper}>
                        <Button
                            onClick={() => window.open('https://www.linkedin.com/in/thariqhamad', '_blank')}
                        >
                            LinkedIn Profile
                        </Button>
                    </div>
                </section>

                <section className={styles.stackSection}>
                    <h2 className={styles.subtitle}>{t.about.toolsTitle}</h2>
                    <div className={styles.grid}>
                        {tools.map((tool, index) => (
                            <div key={index} className={styles.toolItem}>
                                <div className={styles.iconWrapper}>
                                    <tool.icon size={32} strokeWidth={1.5} />
                                </div>
                                <span className={styles.toolName}>{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
