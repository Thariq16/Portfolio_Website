import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Proposal for Ana Almadinah',
    description: 'Private strategic proposal prepared for Ana Almadinah.',
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

export default function AnaAlmadinahProposalLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
