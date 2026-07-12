import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Case Studies — Full View',
    description: 'Every case study on one scrolling page: role, timeframe, impact metrics, and outcomes for each project Thariq Hamad has led.',
    alternates: {
        canonical: '/projects-preview',
    },
    openGraph: {
        title: 'Case Studies — Full View | Thariq Hamad',
        description: 'Every case study on one scrolling page: role, timeframe, impact metrics, and outcomes for each project Thariq Hamad has led.',
        url: 'https://thariqhamad.com/projects-preview',
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
        title: 'Case Studies — Full View | Thariq Hamad',
        description: 'Every case study on one scrolling page: role, timeframe, impact metrics, and outcomes for each project Thariq Hamad has led.',
        images: ['/images/og-projects.png'],
    },
};

export default function ProjectsPreviewLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
