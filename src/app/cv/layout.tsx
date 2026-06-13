import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Download CV',
    description: 'Download Thariq Hamad\'s CV — choose from role-specific versions tailored for Fintech, Business Analysis, Digital Transformation, Strategy, Startup Product Lead, and Football Video Analysis.',
    openGraph: {
        title: 'Download CV | Thariq Hamad',
        description: 'Role-specific CVs for download — Fintech, Business Analysis, Digital Transformation, Strategy, Startup Product, and Football Analysis.',
        url: 'https://thariqhamad.com/cv',
        type: 'website',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Thariq Hamad – Download CV',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Download CV | Thariq Hamad',
        description: 'Role-specific CVs for download — Fintech, Business Analysis, Digital Transformation, Strategy, Startup Product, and Football Analysis.',
        images: ['/images/og-image.png'],
    },
    alternates: {
        canonical: '/cv',
    },
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
