import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn about Thariq Hamad, Senior Product Manager specializing in SaaS, AI products, and revenue growth. Founder of FieldR and Chonk Cookies, based in Riyadh, Saudi Arabia.',
    openGraph: {
        title: 'About Thariq Hamad | Senior Product Manager',
        description: 'Learn about Thariq Hamad, Senior Product Manager with 8+ years experience in SaaS & AI platforms.',
        url: 'https://thariq16.github.io/Portfolio_Website/about',
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
