import { dictionary } from '@/lib/dictionaries';
import JobDetailContent from './JobDetailContent';

// Generate static paths for all jobs at build time
export function generateStaticParams() {
    return dictionary.en.career.jobs.map((job) => ({
        slug: job.slug,
    }));
}

export default function JobDetailPage() {
    return <JobDetailContent />;
}
