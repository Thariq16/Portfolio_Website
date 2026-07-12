// Dev projects / MVP showcase data.
// Edit this file to add, remove, or update builds. It is intentionally simple
// and English-only (separate from the bilingual PM case studies).
//
// For each project fill in: blurb (one line), liveUrl (leave '' if none yet),
// image (drop a screenshot in /public/builds/ and reference it), and status.
// repoUrl and tech are pre-filled from your local repos.

export type BuildStatus = 'Live' | 'MVP' | 'WIP' | 'Archived';

export interface Build {
    slug: string;
    title: string;
    blurb: string;            // TODO: one-line description in your own words
    tech: string[];
    status: BuildStatus;
    liveUrl?: string;         // TODO: add deployed URL when available
    repoUrl?: string;
    image?: string;           // e.g. '/builds/dua-center.png' (place file in /public/builds/)
}

export const builds: Build[] = [
    {
        slug: 'dua-center',
        title: 'Dua Center',
        blurb: 'TODO: describe Dua Center in one line.',
        tech: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Supabase'],
        status: 'MVP',
        liveUrl: '',
        repoUrl: 'https://github.com/Thariq16/duacenter',
        image: '',
    },
    {
        slug: 'thinkflow',
        title: 'ThinkFlow',
        blurb: 'TODO: describe ThinkFlow in one line.',
        tech: ['Flutter', 'Firebase'],
        status: 'MVP',
        liveUrl: '',
        repoUrl: 'https://github.com/Thariq16/ThinkFlow',
        image: '',
    },
    {
        slug: 'job-tracker',
        title: 'Job Tracker',
        blurb: 'TODO: describe Job Tracker in one line.',
        tech: ['Flutter', 'Firebase'],
        status: 'MVP',
        liveUrl: '',
        repoUrl: 'https://github.com/Thariq16/Job-Tracker',
        image: '',
    },
    {
        slug: 'habit-tracker',
        title: 'Habit Tracker',
        blurb: 'TODO: describe Habit Tracker in one line.',
        tech: ['Flutter'],
        status: 'MVP',
        liveUrl: '',
        repoUrl: 'https://github.com/Thariq16/Habit-Tracker',
        image: '',
    },
    {
        slug: 'loan-repayer',
        title: 'Loan Repayer',
        blurb: 'TODO: describe Loan Repayer in one line.',
        tech: ['Flutter'],
        status: 'MVP',
        liveUrl: '',
        repoUrl: 'https://github.com/Thariq16/loanrepayer',
        image: '',
    },
    {
        slug: 'la3ib',
        title: 'LA3IB',
        blurb: 'TODO: describe LA3IB in one line.',
        tech: ['Flutter Web'],
        status: 'MVP',
        liveUrl: '',
        repoUrl: 'https://github.com/Thariq16/LA3IB',
        image: '',
    },
    {
        slug: 'glacisunited-stats',
        title: 'Glacis United Stats',
        blurb: 'TODO: describe Glacis United Stats in one line.',
        tech: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Supabase'],
        status: 'MVP',
        liveUrl: '',
        repoUrl: 'https://github.com/Thariq16/glacisunited-stats',
        image: '',
    },
];
