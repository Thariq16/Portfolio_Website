'use client';

import React from 'react';
import styles from './TrustBar.module.css';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { getAssetPath } from '@/utils/assets';

import Image from 'next/image';

const companies = [
    { name: 'Fortude', url: '#', logo: '/logos/fortude.png' },
    { name: 'Sling Mobility', url: '#', logo: '/logos/sling.svg' },
    { name: 'FieldR', url: '#', logo: '/logos/fieldr.png' },
    { name: 'MillenniumIT', url: '#', logo: '/logos/millenniumit.svg' },
];

export default function TrustBar() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <p className={styles.label}>{t.trust.title}</p>
                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeTrack}>
                        {[...companies, ...companies, ...companies].map((company, i) => (
                            <div key={i} className={styles.logoItem}>
                                {company.logo ? (
                                    <div className={styles.logoWrapper}>
                                        <Image
                                            src={getAssetPath(company.logo)}
                                            alt={company.name}
                                            width={140}
                                            height={50}
                                            className={styles.logoImage}
                                        />
                                    </div>
                                ) : (
                                    <span className={styles.logoText}>{company.name}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
