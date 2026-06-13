import { MetadataRoute } from 'next';
import { dictionary } from '@/lib/dictionaries';

export const dynamic = 'force-static';

// Fixed dates — update when page content meaningfully changes
const DATES: Record<string, string> = {
    '':          '2025-06-01',
    '/about':    '2025-06-01',
    '/projects': '2025-06-01',
    '/career':   '2025-06-01',
    '/design':   '2025-05-01',
    '/cv':       '2025-06-01',
    '/football': '2025-05-01',
    '/privacy':  '2025-01-01',
};

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://thariqhamad.com';

    // Base routes — /intro is intentionally excluded (noindex)
    const routes = [
        '',
        '/about',
        '/projects',
        '/career',
        '/design',
        '/cv',
        '/football',
        '/privacy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: DATES[route] ?? '2025-06-01',
        changeFrequency: route === '' || route === '/projects' ? 'weekly' as const : 'monthly' as const,
        priority: route === '' ? 1.0 : route === '/projects' ? 0.9 : 0.8,
    }));

    // Dynamic case studies
    const projectRoutes = dictionary.en.projects.items.map((item) => ({
        url: `${baseUrl}/projects/${item.slug}`,
        lastModified: '2025-06-01',
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Dynamic career jobs
    const careerRoutes = dictionary.en.career.jobs.map((job) => ({
        url: `${baseUrl}/career/${job.slug}`,
        lastModified: '2025-06-01',
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...projectRoutes, ...careerRoutes];
}
