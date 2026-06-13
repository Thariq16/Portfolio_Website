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

const testimonials: Testimonial[] = [
    {
        quote: "Thariq consistently demonstrated a rare balance of strategic thinking, technical understanding, and strong people leadership. He has a clear ability to translate complex business requirements into actionable product roadmaps while working closely with engineering, hardware, and operations teams. I would confidently recommend him for senior product leadership roles, especially in environments that require close coordination between software, hardware, and operational teams.",
        name: "Hikam Badurdeen",
        title: "DevOps Engineer",
        company: "Sling Mobility",
        relationship: "Direct Report · January 2026",
    },
    {
        quote: "Thariq's ability to handle multiple projects was unlike any I've seen before and made a dramatic increase in the productivity level of our company. No matter how tense a meeting, Thariq made sure everyone left with a smile. As a team member or a leader, Thariq earns my highest recommendation.",
        name: "Janith Tharaka Samaratunga",
        title: "Coach Development Lead",
        company: "MillenniumIT ESP",
        relationship: "Direct Manager · October 2019",
    },
    {
        quote: "Working with Thariq was refreshing and easy because he was crystal clear in his communication and expectations. He would go into the smallest detail to make sure everything was looked at. I would recommend Thariq to any brand that needs a Product Lead that goes above and beyond no matter what was tasked.",
        name: "Dhanushka De Silva",
        title: "Marketing Consultant",
        company: "Sling Mobility",
        relationship: "Client · June 2024",
    },
    {
        quote: "We started working as cross-functional teams and ended up building synergies and delivering as one team. Over the year long experience working with Thariq, I admired his patience, his perseverance, his team spirit and commitment for his work — and I'm glad to recommend him to those who like to get work done.",
        name: "Geetha Gopal",
        title: "PMI Future 50 Awardee · Digital Transformation Leader",
        company: "Client Collaboration",
        relationship: "Client · July 2024",
    },
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
