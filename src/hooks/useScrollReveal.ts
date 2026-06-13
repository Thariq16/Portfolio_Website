'use client';

import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>(
    options: IntersectionObserverInit = {}
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Respect user preference — skip animation entirely
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            el.style.opacity = '1';
            el.style.transform = 'none';
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('revealed');
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px', ...options }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return ref;
}
