import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Case Studies',
    description: 'Explore detailed case studies showcasing product management wins: SaaS monetization, retention engineering, founder-led growth. Real results from real projects.',
    keywords: ['Product Management Case Studies', 'SaaS Growth', 'Retention Engineering', 'GTM Strategy', 'AI Product Case Study'],
    alternates: {
        canonical: '/projects',
    },
    openGraph: {
        title: 'Case Studies | Thariq Hamad',
        description: 'Product management case studies: $180K revenue generated, 17% retention improvement, 75% conversion rates.',
        url: 'https://thariqhamad.com/projects',
        images: [
            {
                url: '/images/og-projects.png',
                width: 1200,
                height: 630,
                alt: 'Thariq Hamad – Case Studies & Product Impact',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Case Studies | Thariq Hamad',
        description: 'Product management case studies: $180K revenue generated, 17% retention improvement, 75% conversion rates.',
        images: ['/images/og-projects.png'],
    },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://thariqhamad.com' },
                { name: 'Case Studies', url: 'https://thariqhamad.com/projects' },
            ]} />
            {children}
        </>
    );
}
