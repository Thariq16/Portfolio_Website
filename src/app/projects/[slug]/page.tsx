import { dictionary } from '@/lib/dictionaries';
import CaseStudyContent from './CaseStudyContent';
import { Metadata } from 'next';

// Generate static paths for all case studies at build time
export function generateStaticParams() {
    return dictionary.en.projects.items.map((item) => ({
        slug: item.slug,
    }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const item = dictionary.en.projects.items.find((p) => p.slug === slug);

    if (!item) {
        return { title: 'Case Study | Thariq Hamad' };
    }

    const metricsStr = item.metrics
        .map((m) => `${m.value} ${m.label}`)
        .join(' · ');

    const description = `${item.context.goal} ${metricsStr}. A product management case study by Thariq Hamad.`;

    return {
        title: item.title,
        description,
        openGraph: {
            title: `${item.title} | Thariq Hamad`,
            description,
            url: `https://thariqhamad.com/projects/${item.slug}`,
            images: [
                {
                    url: '/images/og-projects.png',
                    width: 1200,
                    height: 630,
                    alt: item.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${item.title} | Thariq Hamad`,
            description,
            images: ['/images/og-projects.png'],
        },
        alternates: {
            canonical: `/projects/${item.slug}`,
        },
    };
}

export default function CaseStudyPage() {
    return <CaseStudyContent />;
}
