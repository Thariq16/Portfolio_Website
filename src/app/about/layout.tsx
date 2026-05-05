import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'About',
    description: 'The story behind Thariq Hamad — Senior PM, football performance analyst at Glacis United FC, and former Rotaract Club President. Builder of SaaS products, custom analysis platforms, and community programmes across Sri Lanka & the GCC.',
    keywords: ['Thariq Hamad', 'Senior Product Manager', 'About', 'Product Manager Sri Lanka', 'GCC Product Manager', 'Rotaract President', 'Football Performance Analyst', 'Zero-to-One', 'SaaS', 'AI Products'],
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: 'About Thariq Hamad | Senior Product Manager',
        description: 'Senior PM. Football Performance Analyst. Rotaract Club President. 8+ years building products across SaaS, AI & the GCC.',
        url: 'https://thariqhamad.com/about',
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
        title: 'About Thariq Hamad | Senior Product Manager',
        description: 'Senior PM. Football Performance Analyst. Rotaract Club President. 8+ years building products across SaaS, AI & the GCC.',
        images: ['/images/og-image.png'],
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://thariqhamad.com' },
                { name: 'About', url: 'https://thariqhamad.com/about' },
            ]} />
            {children}
        </>
    );
}
