import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Growth Playbook',
    description: 'Condensed digital marketing and franchise growth playbook prepared for Ana Almadinah.',
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
        },
    },
    alternates: {
        canonical: undefined,
    },
    openGraph: undefined,
    twitter: undefined,
};

export default function AnaAlmadinahPlaybookLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
