'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import styles from './Thesis.module.css';

/**
 * One dealt moment: the thesis paragraph reads itself in as the visitor scrolls past it.
 * Progress is written to a single CSS variable (--p), so there are no React re-renders.
 * Without JS or with reduced motion the full paragraph is simply visible.
 */
export default function Thesis() {
    const { t } = useLanguage();
    const ref = useRef<HTMLParagraphElement>(null);
    const words = t.home.thesis.split(' ');

    useEffect(() => {
        const el = ref.current;
        if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let frame = 0;
        const update = () => {
            frame = 0;
            const r = el.getBoundingClientRect();
            const vh = window.innerHeight;
            // 0 when the paragraph's top reaches 80% of the viewport, 1 when its bottom reaches 40%.
            const p = (0.8 * vh - r.top) / (0.4 * vh + r.height);
            el.style.setProperty('--p', Math.min(1, Math.max(0, p)).toFixed(4));
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        el.dataset.live = 'true';
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, [t.home.thesis]);

    return (
        <section className={styles.section} aria-label="Summary">
            <div className="container">
                <p ref={ref} className={styles.thesis} style={{ ['--n' as string]: words.length }}>
                    {words.map((w, i) => (
                        <span key={i} className={styles.word} style={{ ['--i' as string]: i }}>
                            {w}{' '}
                        </span>
                    ))}
                </p>
            </div>
        </section>
    );
}
