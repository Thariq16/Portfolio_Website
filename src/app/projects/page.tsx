import type { Metadata } from 'next';
import ProjectsContent from './ProjectsContent';

export const metadata: Metadata = {
    title: 'Case Studies – Thariq Hamad',
    description: 'Product case studies from Thariq Hamad — zero-to-one builds, enterprise SaaS pricing and growth, and GTM work across the GCC.',
    alternates: { canonical: '/projects/' },
    openGraph: {
        type: 'website',
        title: 'Case Studies – Thariq Hamad',
        description: 'Product case studies from Thariq Hamad — zero-to-one builds, enterprise SaaS pricing and growth, and GTM work across the GCC.',
        url: '/projects/',
        images: [
            {
                url: '/images/projects-case-studies-og.jpg',
                width: 1200,
                height: 630,
                alt: 'Product Case Studies by Thariq Hamad: 8 case studies, SAR 7.5M+ pipeline built, 1 to 34 team scaled',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Case Studies – Thariq Hamad',
        description: 'Product case studies from Thariq Hamad — zero-to-one builds, enterprise SaaS pricing and growth, and GTM work across the GCC.',
        images: ['/images/projects-case-studies-og.jpg'],
    },
};

export default function ProjectsPage() {
    return <ProjectsContent />;
}
