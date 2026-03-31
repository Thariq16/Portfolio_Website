import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'The story behind Thariq Hamad — Senior PM, football performance analyst at Glacis United FC, and former Rotaract Club President. Builder of SaaS products, custom analysis platforms, and community programmes across Sri Lanka & the GCC.',
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: 'About Thariq Hamad | Senior Product Manager',
        description: 'Senior PM. Football Performance Analyst. Rotaract Club President. 8+ years building products across SaaS, AI & the GCC.',
        url: 'https://thariqhamad.com/about',
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
