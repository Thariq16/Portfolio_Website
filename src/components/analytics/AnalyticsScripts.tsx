'use client';

import { useCookieConsent } from '@/components/providers/CookieConsentProvider';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

export default function AnalyticsScripts() {
    const { consent } = useCookieConsent();

    if (consent !== 'accepted') return null;

    return (
        <>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
            <Script
                id="microsoft-clarity"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
                    `,
                }}
            />
        </>
    );
}
