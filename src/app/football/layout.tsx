import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Football Performance Analysis',
    description: 'Thariq Hamad — Performance Analyst at Glacis United FC (Gibraltar). Built a bespoke analysis platform, delivering match and opposition reports to first-team coaching staff. Currently completing a Professional Diploma at Barca Innovation Hub.',
    keywords: ['Football Performance Analyst', 'Glacis United FC', 'Match Analysis', 'Opposition Reports', 'Barca Innovation Hub', 'GCC Football', 'Performance Analyst'],
    alternates: {
        canonical: '/football',
    },
    openGraph: {
        title: 'Football Performance Analysis | Thariq Hamad',
        description: 'Performance Analyst at Glacis United FC. Custom analysis platform, Python data science, Barca Innovation Hub diploma.',
        url: 'https://thariqhamad.com/football',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Thariq Hamad – Football Performance Analyst',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Football Performance Analysis | Thariq Hamad',
        description: 'Performance Analyst at Glacis United FC. Custom analysis platform, Python data science, Barca Innovation Hub diploma.',
        images: ['/images/og-image.png'],
    },
};

export default function FootballLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://thariqhamad.com' },
                { name: 'Football Performance Analysis', url: 'https://thariqhamad.com/football' },
            ]} />
            {children}
        </>
    );
}
