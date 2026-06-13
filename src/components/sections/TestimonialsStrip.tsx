'use client';

import React from 'react';
import styles from './TestimonialsStrip.module.css';

export type Testimonial = {
    quote: string;
    name: string;
    title: string;
    company: string;
    relationship: string;
};

// Add real quotes here once collected. Component auto-hides when array is empty.
const testimonials: Testimonial[] = [
    // Example structure — replace with real quotes:
    // {
    //     quote: "Thariq built our entire product infrastructure from scratch and grew the team from 1 to 34. He thinks like a founder and executes like an operator.",
    //     name: "Founder",
    //     title: "CEO",
    //     company: "Sling Mobility",
    //     relationship: "Direct Manager, 3 years",
    // },
];

export default function TestimonialsStrip() {
    if (testimonials.length === 0) return null;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <p className={styles.label}>What colleagues say</p>
                <div className={styles.grid}>
                    {testimonials.map((t, i) => (
                        <figure key={i} className={styles.card}>
                            <blockquote className={styles.quote}>
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>
                            <figcaption className={styles.author}>
                                <span className={styles.name}>{t.name}</span>
                                <span className={styles.role}>{t.title} · {t.company}</span>
                                <span className={styles.relationship}>{t.relationship}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
