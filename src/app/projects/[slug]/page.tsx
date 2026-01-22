import { dictionary } from '@/lib/dictionaries';
import CaseStudyContent from './CaseStudyContent';

// Generate static paths for all case studies at build time
export function generateStaticParams() {
    return dictionary.en.projects.items.map((item) => ({
        slug: item.slug,
    }));
}

export default function CaseStudyPage() {
    return <CaseStudyContent />;
}
