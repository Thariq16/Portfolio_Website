'use client';

import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>(
    options: IntersectionObserverInit = {}
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Respect user preference: skip animation entirely
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            el.style.opacity = '1';
            el.style.transform = 'none';
            return;
        }

        const reveal = () => {
            el.classList.add('revealed');
            observer.disconnect();
            window.removeEventListener('scroll', onScroll);
        };

        // A section skipped in one jump (End key, anchor link, restored scroll) never changes
        // intersection state, so the observer alone would leave it invisible.
        const onScroll = () => {
            if (el.getBoundingClientRect().top < window.innerHeight) reveal();
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) reveal();
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px', ...options }
        );

        observer.observe(el);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return ref;
}
