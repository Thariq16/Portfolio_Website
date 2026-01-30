import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Career',
    description: 'Professional career history of Thariq Hamad: Product Manager at Fortude, Sling Mobility, MillenniumIT, and founder of FieldR and Chonk Cookies.',
    openGraph: {
        title: 'Career | Thariq Hamad',
        description: '8+ years of product management experience across SaaS, mobility, and fintech industries.',
        url: 'https://thariq16.github.io/Portfolio_Website/career',
    },
};

export default function CareerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
