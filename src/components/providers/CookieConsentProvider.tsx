'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ConsentStatus = 'pending' | 'accepted' | 'declined';

interface CookieConsentContextType {
    consent: ConsentStatus;
    accept: () => void;
    decline: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
    const [consent, setConsent] = useState<ConsentStatus>('pending');

    useEffect(() => {
        const stored = localStorage.getItem('cookie-consent') as ConsentStatus | null;
        if (stored === 'accepted' || stored === 'declined') {
            setConsent(stored);
        }
    }, []);

    const accept = () => {
        setConsent('accepted');
        localStorage.setItem('cookie-consent', 'accepted');
    };

    const decline = () => {
        setConsent('declined');
        localStorage.setItem('cookie-consent', 'declined');
    };

    return (
        <CookieConsentContext.Provider value={{ consent, accept, decline }}>
            {children}
        </CookieConsentContext.Provider>
    );
}

export function useCookieConsent() {
    const context = useContext(CookieConsentContext);
    if (context === undefined) {
        throw new Error('useCookieConsent must be used within a CookieConsentProvider');
    }
    return context;
}
