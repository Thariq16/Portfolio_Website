/**
 * Sends a custom event to Google Analytics 4.
 * Only fires if the user has accepted cookies and gtag is loaded.
 */
export function trackEvent(
    eventName: string,
    params?: Record<string, string | number | boolean>
) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', eventName, params);
    }
}

// ----- Typed helpers for specific events -----

/** Track a CV file download */
export function trackCVDownload(cvType: string, filename: string) {
    trackEvent('file_download', {
        file_name: filename,
        file_extension: 'pdf',
        cv_type: cvType,
        link_text: cvType,
    });
}

/** Track a CTA button click */
export function trackButtonClick(buttonName: string, location: string) {
    trackEvent('button_click', {
        button_name: buttonName,
        button_location: location,
    });
}

/** Track an outbound link click (e.g. LinkedIn, calendar booking) */
export function trackOutboundLink(url: string, label: string) {
    trackEvent('click', {
        link_url: url,
        link_text: label,
        outbound: true,
    });
}
