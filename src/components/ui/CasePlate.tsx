import React from 'react';
import styles from './CasePlate.module.css';

/** Deterministic pseudo-random sequence seeded by a string. */
function seeded(str: string): () => number {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return () => {
        h = Math.imul(h ^ (h >>> 15), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        h = (h ^= h >>> 16) >>> 0;
        return h / 4294967296;
    };
}

interface CasePlateProps {
    seed: string;
    metricValue: string;
    metricLabel: string;
}

const W = 420;
const H = 150;
const BARS = 26;

export default function CasePlate({ seed, metricValue, metricLabel }: CasePlateProps) {
    const rand = seeded(seed);
    const bars = Array.from({ length: BARS }, (_, i) => {
        const h = 14 + rand() * 66;
        return { x: 14 + i * ((W - 28) / BARS), h, o: 0.14 + rand() * 0.22 };
    });

    return (
        <svg viewBox={`0 0 ${W} ${H}`} className={styles.plate} aria-hidden="true" focusable="false">
            {/* Ruled paper */}
            {[1, 2, 3, 4, 5].map((i) => (
                <line key={i} x1="0" y1={i * (H / 6)} x2={W} y2={i * (H / 6)} className={styles.rule} />
            ))}
            {/* Ledger bar texture, seeded per case study */}
            {bars.map((b, i) => (
                <rect
                    key={i}
                    x={b.x}
                    y={H - 10 - b.h}
                    width={7}
                    height={b.h}
                    className={styles.bar}
                    style={{ opacity: b.o }}
                />
            ))}
            {/* Baseline */}
            <line x1="0" y1={H - 10} x2={W} y2={H - 10} className={styles.baseline} />
            {/* Hero metric */}
            <text x={16} y={44} className={styles.metric}>{metricValue}</text>
            <text x={17} y={62} className={styles.metricLabel}>{metricLabel.toUpperCase()}</text>
        </svg>
    );
}
