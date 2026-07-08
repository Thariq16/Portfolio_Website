'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SkillConstellation.module.css';

interface Node {
    id: string;
    label: string;
    sub: string;
    href: string;
    x: number; // base position in viewBox units
    y: number;
    speed: number; // drift speed multiplier
    phase: number; // drift phase offset
    flip?: boolean; // label sits left of the dot (right-edge nodes)
}

const NODES: Node[] = [
    { id: 'revenue', label: 'revenue strategy', sub: 'SAR 7.5M PIPELINE', href: '/projects/saas-growth-platform', x: 175, y: 150, speed: 0.9, phase: 0.0 },
    { id: 'ai', label: 'ai products', sub: 'SAR 750K NEW ARR', href: '/projects/saas-growth-platform', x: 455, y: 85, speed: 1.1, phase: 1.3 },
    { id: 'zero', label: 'zero-to-one', sub: '2 COMPANIES FOUNDED', href: '/projects/foundership-product', x: 420, y: 255, speed: 0.8, phase: 2.6 },
    { id: 'gtm', label: 'gtm & cro', sub: '1,800% ROAS', href: '/projects/chonk-cookies-d2c', x: 155, y: 330, speed: 1.2, phase: 3.9 },
    { id: 'data', label: 'data & retention', sub: '+17% RETENTION', href: '/projects/retention-engine', x: 640, y: 385, speed: 1.0, phase: 5.2 },
    { id: 'design', label: 'product design', sub: 'FIGMA · UI/UX', href: '/design', x: 725, y: 175, speed: 0.85, phase: 0.7 },
    { id: 'football', label: 'football analytics', sub: 'GLACIS UNITED FC', href: '/football', x: 920, y: 300, speed: 1.15, phase: 2.0, flip: true },
    { id: 'team', label: 'team leadership', sub: '1 → 34 SCALED', href: '/career', x: 930, y: 90, speed: 0.95, phase: 3.3, flip: true },
    { id: 'community', label: 'community', sub: '150+ PROJECTS · ROTARACT', href: '/about#rotaract', x: 385, y: 410, speed: 1.05, phase: 4.6 },
];

const EDGES: [string, string][] = [
    ['revenue', 'ai'],
    ['revenue', 'gtm'],
    ['revenue', 'zero'],
    ['ai', 'zero'],
    ['ai', 'design'],
    ['ai', 'team'],
    ['zero', 'gtm'],
    ['zero', 'data'],
    ['zero', 'community'],
    ['data', 'football'],
    ['data', 'design'],
    ['design', 'team'],
    ['design', 'football'],
    ['gtm', 'community'],
];

const DRIFT = 7; // max drift in viewBox units

export default function SkillConstellation() {
    const router = useRouter();
    const groupRefs = useRef<Record<string, SVGGElement | null>>({});
    const lineRefs = useRef<(SVGLineElement | null)[]>([]);
    const [active, setActive] = useState<string | null>(null);

    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }
        let raf = 0;
        let visible = false;
        const start = performance.now();
        const pos: Record<string, { x: number; y: number }> = {};

        const tick = (now: number) => {
            const t = (now - start) / 1000;
            for (const n of NODES) {
                const dx = Math.sin(t * 0.4 * n.speed + n.phase) * DRIFT;
                const dy = Math.cos(t * 0.31 * n.speed + n.phase * 1.7) * DRIFT;
                pos[n.id] = { x: n.x + dx, y: n.y + dy };
                const g = groupRefs.current[n.id];
                if (g) g.setAttribute('transform', `translate(${dx.toFixed(2)}, ${dy.toFixed(2)})`);
            }
            EDGES.forEach(([a, b], i) => {
                const line = lineRefs.current[i];
                const pa = pos[a];
                const pb = pos[b];
                if (line && pa && pb) {
                    line.setAttribute('x1', pa.x.toFixed(2));
                    line.setAttribute('y1', pa.y.toFixed(2));
                    line.setAttribute('x2', pb.x.toFixed(2));
                    line.setAttribute('y2', pb.y.toFixed(2));
                }
            });
            if (visible) raf = requestAnimationFrame(tick);
        };

        const observer = new IntersectionObserver(([entry]) => {
            const wasVisible = visible;
            visible = entry.isIntersecting;
            if (visible && !wasVisible) raf = requestAnimationFrame(tick);
        });
        if (svgRef.current) observer.observe(svgRef.current);

        return () => {
            cancelAnimationFrame(raf);
            observer.disconnect();
        };
    }, []);

    return (
        <section className={styles.section}>
            <div className="container">
                <p className={styles.eyebrow}>The Map</p>
                <h2 className={styles.title}>Where the work connects</h2>
                <p className={styles.hint}>Each point is a practice — with the number that proves it. Click to explore.</p>
            </div>
            <div className={styles.canvas}>
                <svg
                    ref={svgRef}
                    viewBox="0 0 1060 480"
                    className={styles.svg}
                    role="img"
                    aria-label="Map of skill areas: revenue strategy, AI products, zero-to-one, GTM, data and retention, product design, football analytics, team leadership, community"
                >
                    {EDGES.map(([a, b], i) => {
                        const na = NODES.find((n) => n.id === a)!;
                        const nb = NODES.find((n) => n.id === b)!;
                        const isActive = active === a || active === b;
                        return (
                            <line
                                key={`${a}-${b}`}
                                ref={(el) => { lineRefs.current[i] = el; }}
                                x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                                className={`${styles.edge} ${isActive ? styles.edgeActive : ''}`}
                            />
                        );
                    })}
                    {NODES.map((n) => (
                        <g
                            key={n.id}
                            ref={(el) => { groupRefs.current[n.id] = el; }}
                            className={`${styles.node} ${active === n.id ? styles.nodeActive : ''}`}
                            onMouseEnter={() => setActive(n.id)}
                            onMouseLeave={() => setActive(null)}
                            onClick={() => router.push(n.href)}
                            tabIndex={0}
                            role="link"
                            aria-label={`${n.label} — ${n.sub}`}
                            onKeyDown={(e) => { if (e.key === 'Enter') router.push(n.href); }}
                        >
                            <circle cx={n.x} cy={n.y} r={26} className={styles.hitArea} />
                            <circle cx={n.x} cy={n.y} r={7} className={styles.dot} />
                            <text x={n.flip ? n.x - 16 : n.x + 16} y={n.y + 6} textAnchor={n.flip ? 'end' : 'start'} className={styles.label}>{n.label}</text>
                            <text x={n.flip ? n.x - 17 : n.x + 17} y={n.y + 24} textAnchor={n.flip ? 'end' : 'start'} className={styles.sub}>{n.sub}</text>
                        </g>
                    ))}
                </svg>
            </div>
        </section>
    );
}
