export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string; // ISO, for lastModified / sorting
    displayDate: string;
    readTime: string;
    category: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: 'sabbaq-2026-madinah-sports-hackathon',
        title: 'SABBAQ 2026: What a Madinah Sports Hackathon Says About Saudi Sports Tech',
        excerpt: "Notes from a 72-hour sports innovation hackathon in Madinah — and why the real opportunity may not be another isolated product, but the layer that connects the data.",
        date: '2026-08-25',
        displayDate: 'August 25, 2026',
        readTime: '6 min read',
        category: 'Sports Tech',
    },
];
