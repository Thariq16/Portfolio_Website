// Type declarations for browser globals injected by third-party scripts

interface Window {
    gtag?: (
        command: 'event' | 'config' | 'js' | 'set',
        targetId: string | Date,
        params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
    clarity?: (command: string, ...args: unknown[]) => void;
}
