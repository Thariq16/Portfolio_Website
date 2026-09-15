'use client';

import React from 'react';
import { Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { trackButtonClick } from '@/utils/analytics';
import styles from './WritingCTA.module.css';

const CALENDAR_URL = 'https://calendar.app.google/vDMbaPoDc2vYVQaK8';
const EMAIL = 'thariqhamad6@gmail.com';

export default function WritingCTA() {
    return (
        <section className={styles.section}>
            <p className={styles.line}>Hiring for a Senior PM or Head of Product role?</p>
            <p className={styles.line}>Need a hand with a project like this one?</p>

            <div className={styles.actions}>
                <Button
                    size="lg"
                    onClick={() => {
                        trackButtonClick('Book a Call', 'blog_cta');
                        window.open(CALENDAR_URL, '_blank');
                    }}
                >
                    <Calendar size={18} />
                    Book a Call
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                        trackButtonClick('Email', 'blog_cta');
                        window.location.href = `mailto:${EMAIL}`;
                    }}
                >
                    <Mail size={18} />
                    Email Me
                </Button>
            </div>
        </section>
    );
}
