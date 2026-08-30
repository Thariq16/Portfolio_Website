'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { trackEvent } from '@/utils/analytics';

/** Fires a GA4 event once when this page is reached via a `?src=qr` tagged QR code. */
export default function QrScanTracker() {
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.get('src') === 'qr') {
            trackEvent('qr_scan', { landing_page: 'intro' });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}
