import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Career',
    description: 'Professional career history of Thariq Hamad: Product Manager at Fortude, Sling Mobility, MillenniumIT, and founder of FieldR and Chonk Cookies. 8+ years driving revenue growth across SaaS, mobility, and AI.',
    keywords: ['Thariq Hamad Career', 'Product Manager Fortude', 'Sling Mobility', 'MillenniumIT', 'FieldR Founder', 'Chonk Cookies', 'Product Management Career', 'SaaS PM', 'GCC Product Manager'],
    alternates: {
        canonical: '/career',
    },
    openGraph: {
        title: 'Career | Thariq Hamad',
        description: '8+ years of product management experience across SaaS, mobility, AI, and fintech — from co-founding startups to managing enterprise revenue pipelines.',
        url: 'https://thariqhamad.com/career',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Thariq Hamad – Senior Product Manager',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Career | Thariq Hamad',
        description: '8+ years of product management experience across SaaS, mobility, AI, and fintech.',
        images: ['/images/og-image.png'],
    },
};

export default function CareerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://thariqhamad.com' },
                { name: 'Career', url: 'https://thariqhamad.com/career' },
            ]} />
            {children}
        </>
    );
}
