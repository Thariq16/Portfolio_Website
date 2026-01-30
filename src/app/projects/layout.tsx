import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Case Studies',
    description: 'Explore detailed case studies showcasing product management wins: SaaS monetization, retention engineering, founder-led growth. Real results from real projects.',
    openGraph: {
        title: 'Case Studies | Thariq Hamad',
        description: 'Product management case studies: $180K revenue generated, 17% retention improvement, 75% conversion rates.',
        url: 'https://thariq16.github.io/Portfolio_Website/projects',
    },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
