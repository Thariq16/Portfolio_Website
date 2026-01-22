'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.copyright}>
                        &copy; {currentYear} Thariq Hamad. {t.footer.rights}
                    </div>

                    <div className={styles.links}>
                        <a
                            href="https://www.linkedin.com/in/thariqhamad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
                <div className={styles.builtWith}>
                    {t.footer.builtWith}
                </div>
            </div>
        </footer>
    );
}
