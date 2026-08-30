'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Linkedin, Mail } from 'lucide-react';
import { trackOutboundLink } from '@/utils/analytics';
import styles from './Footer.module.css';

// The QR PWA page is a standalone, app-like screen — keep it footer-free too
const CHROMELESS_ROUTES = ['/qr'];

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    if (CHROMELESS_ROUTES.some((route) => pathname?.startsWith(route))) {
        return null;
    }

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
                    onClick={() => trackOutboundLink('https://www.techtaswiq.com', 'TechTaswiq Footer Credit')}
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
