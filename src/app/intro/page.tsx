import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Thariq Hamad — Quick Introduction',
    description: 'Senior PM with 8+ years building SaaS, EV, and D2C products across KSA and the GCC. SAR 7.5M pipeline, 34-person team, available now.',
    robots: { index: false, follow: false },
};

const proofPoints = [
    {
        value: 'SAR 7.5M',
        label: 'SaaS pipeline built at Fortude',
        detail: '1,800% ROAS · SAR 750K net-new ARR closed',
    },
    {
        value: '1 → 34',
        label: 'Team built at Sling Mobility (EV)',
        detail: 'Employee #1 · Vision 2030 KSA · Toyota SL pilot',
    },
    {
        value: 'Top 28',
        label: 'Venture Engine (300+ startups)',
        detail: 'Chonk Cookies · Zero ad spend · Validated D2C model',
    },
    {
        value: '8+ Years',
        label: 'Product across SaaS · EV · D2C · Events',
        detail: 'Fortude · Sling · FieldR · MillenniumIT',
    },
];

export default function IntroPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>

                {/* Header */}
                <header className={styles.header}>
                    <div className={styles.portraitWrap}>
                        <Image
                            src="/images/portrait.jpg"
                            alt="Thariq Hamad"
                            width={96}
                            height={96}
                            className={styles.portrait}
                            priority
                        />
                    </div>
                    <div>
                        <h1 className={styles.name}>Thariq Hamad</h1>
                        <p className={styles.title}>Senior Product Manager · KSA &amp; GCC</p>
                        <p className={styles.availability}>Available now · Transferable Iqama</p>
                    </div>
                </header>

                {/* Hero claim */}
                <section className={styles.claim}>
                    <p>
                        I build products from zero and measure every outcome in revenue.
                        Employee #1 on a 34-person EV team. SAR 7.5M SaaS pipeline. Venture Engine Top 28.
                        Eight years across SaaS, EV, D2C, and enterprise platforms — always as the person who owns the number.
                    </p>
                </section>

                {/* Proof points */}
                <section className={styles.proofGrid}>
                    {proofPoints.map((p, i) => (
                        <div key={i} className={styles.proofCard}>
                            <span className={styles.proofValue}>{p.value}</span>
                            <span className={styles.proofLabel}>{p.label}</span>
                            <span className={styles.proofDetail}>{p.detail}</span>
                        </div>
                    ))}
                </section>

                {/* CTAs */}
                <section className={styles.ctas}>
                    <Link href="/cv" className={styles.ctaPrimary}>
                        Download CV
                    </Link>
                    <a
                        href="https://calendar.app.google/vDMbaPoDc2vYVQaK8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaSecondary}
                    >
                        Book a 30-min Call
                    </a>
                    <Link href="/projects" className={styles.ctaGhost}>
                        View Case Studies →
                    </Link>
                </section>

                {/* Footer note */}
                <p className={styles.footerNote}>
                    Full portfolio at{' '}
                    <Link href="/" className={styles.footerLink}>thariqhamad.com</Link>
                </p>

            </div>
        </main>
    );
}
