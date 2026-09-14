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
        excerpt: "Notes from a 72-hour sports innovation hackathon in Madinah – and why the real opportunity may not be another isolated product, but the layer that connects the data.",
        date: '2026-08-25',
        displayDate: 'August 25, 2026',
        readTime: '6 min read',
        category: 'Sports Tech',
    },
    {
        slug: 'arsenal-2026-27-ucl-ambitions',
        title: 'Arsenal 2026/27: Why the Left Side Decides Our Champions League Campaign',
        excerpt: "A tactical read on Arsenal's transfer window and attacking rhythm this season – and why the real Champions League case rests on the left channel finally exploding, not on outside solutions.",
        date: '2026-08-15',
        displayDate: 'August 15, 2026',
        readTime: '5 min read',
        category: 'Tactical Analysis',
    },
];
