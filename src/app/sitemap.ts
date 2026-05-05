import { MetadataRoute } from 'next';
import { dictionary } from '@/lib/dictionaries';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://thariqhamad.com';
    const currentDate = new Date().toISOString();

    // Base routes
    const routes = [
        '',
        '/about',
        '/projects',
        '/career',
        '/football',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: currentDate,
        changeFrequency: route === '' || route === '/projects' ? 'weekly' as const : 'monthly' as const,
        priority: route === '' ? 1.0 : route === '/projects' ? 0.9 : 0.8,
    }));

    // Dynamic case studies
    const projectRoutes = dictionary.en.projects.items.map((item) => ({
        url: `${baseUrl}/projects/${item.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Dynamic career jobs
    const careerRoutes = dictionary.en.career.jobs.map((job) => ({
        url: `${baseUrl}/career/${job.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...projectRoutes, ...careerRoutes];
}
