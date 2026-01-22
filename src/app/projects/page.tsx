'use client';

import React from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import ProjectCard from '@/components/ui/ProjectCard';
import styles from './page.module.css';

export default function ProjectsPage() {
    const { t } = useLanguage();

    return (
        <main className="container">
            <div className={styles.wrapper}>
                <h1 className={styles.title}>{t.projects.title}</h1>
                <div className={styles.grid}>
                    {t.projects.items.map((item, index) => (
                        <ProjectCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </main>
    );
}
