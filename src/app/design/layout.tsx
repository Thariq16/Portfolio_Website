import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'UI/UX Design Portfolio',
    description: 'Selected UI/UX design work by Thariq Hamad — mobile apps, tablet experiences, and product interfaces built for FieldR, Sling Mobility, ConnMe, and Allo Qatar.',
    openGraph: {
        title: 'UI/UX Design Portfolio | Thariq Hamad',
        description: 'Selected mobile and product UI/UX designs from real-world projects across Sri Lanka, Maldives, and Qatar.',
        url: 'https://thariqhamad.com/design',
        type: 'website',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Thariq Hamad – UI/UX Design Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'UI/UX Design Portfolio | Thariq Hamad',
        description: 'Mobile app and product UI/UX designs from FieldR, Sling Mobility, ConnMe, and Allo Qatar.',
        images: ['/images/og-image.png'],
    },
    alternates: {
        canonical: '/design',
    },
};

export default function DesignLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
