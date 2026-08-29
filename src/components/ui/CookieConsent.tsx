'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCookieConsent } from '@/components/providers/CookieConsentProvider';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { ShieldCheck, X } from 'lucide-react';
import styles from './CookieConsent.module.css';

// Routes that render as standalone, chrome-free pages (e.g. the NFC/QR digital card) —
// a consent banner would block the one-tap action the page exists for.
const CHROMELESS_ROUTES = ['/intro'];

export default function CookieBanner() {
    const { consent, accept, decline } = useCookieConsent();
    const { t, direction } = useLanguage();
    const [visible, setVisible] = useState(false);
    const pathname = usePathname();
    const isChromeless = CHROMELESS_ROUTES.some((route) => pathname?.startsWith(route));

    // Delay appearance slightly so it doesn't flash on hydration
    useEffect(() => {
        if (consent === 'pending' && !isChromeless) {
            const timer = setTimeout(() => setVisible(true), 800);
            return () => clearTimeout(timer);
        } else {
            setVisible(false);
        }
    }, [consent, isChromeless]);

    if (!visible) return null;

    return (
        <div
            className={styles.banner}
            dir={direction}
            role="dialog"
            aria-label={direction === 'rtl' ? 'إشعار ملفات تعريف الارتباط' : 'Cookie consent notice'}
        >
            <div className={styles.inner}>
                <div className={styles.iconWrap}>
                    <ShieldCheck size={22} strokeWidth={1.8} />
                </div>
                <div className={styles.text}>
                    <p className={styles.message}>{t.cookieBanner.message}</p>
                    <Link href="/privacy" className={styles.policyLink}>
                        {t.cookieBanner.policyLink} →
                    </Link>
                </div>
                <div className={styles.actions}>
                    <button
                        id="cookie-decline-btn"
                        className={styles.btnDecline}
                        onClick={decline}
                        aria-label={t.cookieBanner.decline}
                    >
                        {t.cookieBanner.decline}
                    </button>
                    <button
                        id="cookie-accept-btn"
                        className={styles.btnAccept}
                        onClick={accept}
                        aria-label={t.cookieBanner.accept}
                    >
                        {t.cookieBanner.accept}
                    </button>
                </div>
                <button
                    className={styles.closeBtn}
                    onClick={decline}
                    aria-label="Close"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
}
