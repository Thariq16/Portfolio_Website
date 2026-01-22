'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useTheme } from '@/components/providers/ThemeProvider';
import { Button } from '@/components/ui/Button';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';
import styles from './Navbar.module.css';
import clsx from 'clsx';

export default function Navbar() {
    const { t, locale, setLocale } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLanguage = () => {
        setLocale(locale === 'en' ? 'ar' : 'en');
    };

    return (
        <header className={styles.header}>
            <div className={clsx('container', styles.container)}>
                <Link href="/" className={styles.logo}>
                    THARIQ HAMAD
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    <Link href="/" className={styles.navLink}>{t.nav.home}</Link>
                    <Link href="/career" className={styles.navLink}>{t.nav.career}</Link>
                    <Link href="/projects" className={styles.navLink}>{t.nav.projects}</Link>
                    <Link href="/about" className={styles.navLink}>{t.nav.about}</Link>
                    <Button variant="outline" size="sm" onClick={toggleLanguage} className={styles.iconBtn}>
                        {locale === 'en' ? 'AR' : 'EN'}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={toggleTheme} className={styles.iconBtn}>
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </Button>
                    <Button
                        className={styles.ctaBtn}
                        onClick={() => window.open('https://calendar.app.google/vDMbaPoDc2vYVQaK8', '_blank')}
                    >
                        {t.nav.contact}
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <div className={styles.mobileControls}>
                    <Button variant="ghost" size="sm" onClick={toggleTheme} className={styles.iconBtn}>
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </Button>
                    <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link href="/" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>{t.nav.home}</Link>
                    <Link href="/career" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>{t.nav.career}</Link>
                    <Link href="/projects" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>{t.nav.projects}</Link>
                    <Link href="/about" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>{t.nav.about}</Link>
                    <div className={styles.mobileActions}>
                        <Button variant="outline" onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}>
                            {locale === 'en' ? 'Switch to Arabic' : 'Switch to English'}
                        </Button>
                        <Button className={styles.ctaBtn} onClick={() => window.open('https://calendar.app.google/vDMbaPoDc2vYVQaK8', '_blank')}>
                            {t.nav.contact}
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
