import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Job Search Dashboard',
    description: 'Private job search tracking dashboard.',
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

export default function JobApplicationLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
