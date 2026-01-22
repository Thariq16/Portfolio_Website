'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionary, Locale } from '@/lib/dictionaries';

type Dictionary = typeof dictionary.en;

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: Dictionary;
    direction: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<Locale>('en');

    // Persist preference
    useEffect(() => {
        const stored = localStorage.getItem('locale') as Locale;
        if (stored && (stored === 'en' || stored === 'ar')) {
            setLocale(stored);
        }
    }, []);

    const handleSetLocale = (newLocale: Locale) => {
        setLocale(newLocale);
        localStorage.setItem('locale', newLocale);
        document.documentElement.lang = newLocale;
        document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
    };

    const t = dictionary[locale];
    const direction = locale === 'ar' ? 'rtl' : 'ltr';

    // Sync document on mount/change
    useEffect(() => {
        document.documentElement.lang = locale;
        document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    }, [locale]);

    return (
        <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t, direction }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
