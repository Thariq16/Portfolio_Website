import type { Metadata } from 'next';
import { Suspense } from 'react';
import Image from 'next/image';
import IntroLinks from './IntroLinks';
import QrScanTracker from './QrScanTracker';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Thariq Hamad – Digital Card',
    description: 'Save Thariq Hamad\'s contact, book a call, or view the full portfolio — tap any link below.',
    robots: { index: false, follow: false },
};

export default function IntroPage() {
    return (
        <main className={styles.main}>
            <div className={styles.card}>

                <header className={styles.header}>
                    <div className={styles.portraitWrap}>
                        <Image
                            src="/images/portrait-card.jpg"
                            alt="Thariq Hamad"
                            width={104}
                            height={104}
                            className={styles.portrait}
                            priority
                        />
                    </div>
                    <h1 className={styles.name}>Thariq Hamad</h1>
                    <p className={styles.title}>Senior Product Manager · KSA &amp; GCC</p>
                    <p className={styles.availability}>Open to Senior PM / Head of Product roles</p>
                </header>

                <p className={styles.strip}>
                    <span>SAR 7.5M pipeline</span>
                    <span aria-hidden="true">·</span>
                    <span>1 → 34 team scaled</span>
                    <span aria-hidden="true">·</span>
                    <span>2 companies founded</span>
                </p>

                <IntroLinks />

                <div className={styles.qrBlock}>
                    <Image
                        src="/images/intro-qr.svg"
                        alt="QR code linking to this page"
                        width={132}
                        height={132}
                        className={styles.qrImage}
                    />
                    <p className={styles.qrCaption}>Scan to open this page on your phone</p>
                </div>

                <p className={styles.footerNote}>thariqhamad.com</p>
            </div>
            <Suspense fallback={null}>
                <QrScanTracker />
            </Suspense>
        </main>
    );
}
