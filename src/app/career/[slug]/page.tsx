import { dictionary } from '@/lib/dictionaries';
import JobDetailContent from './JobDetailContent';
import { Metadata } from 'next';

// Generate static paths for all jobs at build time
export function generateStaticParams() {
    return dictionary.en.career.jobs.map((job) => ({
        slug: job.slug,
    }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const job = dictionary.en.career.jobs.find((j) => j.slug === slug);

    if (!job) {
        return { title: 'Career | Thariq Hamad' };
    }

    const description = `${job.title} at ${job.company} (${job.dateRange}). ${job.summary}`;

    return {
        title: `${job.title} at ${job.company}`,
        description,
        openGraph: {
            title: `${job.title} at ${job.company} | Thariq Hamad`,
            description,
            url: `https://thariqhamad.com/career/${job.slug}`,
        },
        alternates: {
            canonical: `/career/${job.slug}`,
        },
    };
}

export default function JobDetailPage() {
    return <JobDetailContent />;
}
