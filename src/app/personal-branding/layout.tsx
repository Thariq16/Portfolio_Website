import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Personal Branding Content Calendar',
    description: 'Private personal branding content calendar.',
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

export default function PersonalBrandingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
