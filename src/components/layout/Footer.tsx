'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Linkedin, Mail } from 'lucide-react';
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

                    <Link href="/privacy" className={styles.privacyLink}>
                        {t.footer.privacy}
                    </Link>

                    <div className={styles.links}>
                        <a
                            href="mailto:thariqhamad6@gmail.com"
                            className={styles.link}
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
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
                <a
                    href="https://www.techtaswiq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.builtWith}
                >
                    <span>{t.footer.builtWith}</span>
                    <span className={styles.builtWithLogo}>
                        <Image
                            src="/images/techtaswiq-logo.png"
                            alt="TechTaswiq"
                            width={440}
                            height={75}
                            className={styles.builtWithLogoImg}
                        />
                    </span>
                </a>
            </div>
        </footer>
    );
}
