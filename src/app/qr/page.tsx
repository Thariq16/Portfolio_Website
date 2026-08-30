import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Thariq Hamad – Card QR',
    description: 'Scan to open Thariq Hamad\'s digital business card.',
    robots: { index: false, follow: false },
    manifest: '/qr-manifest.webmanifest',
    appleWebApp: {
        capable: true,
        title: 'Card QR',
        statusBarStyle: 'black-translucent',
    },
    icons: {
        apple: '/icons/apple-touch-icon.png',
    },
};

export default function QRPage() {
    return (
        <main className={styles.main}>
            <div className={styles.card}>
                <p className={styles.eyebrow}>Thariq Hamad</p>
                <Image
                    src="/images/card-qr-big.svg"
                    alt="QR code linking to Thariq Hamad's digital business card"
                    width={280}
                    height={280}
                    className={styles.qrImage}
                    priority
                />
                <p className={styles.caption}>Scan to save my contact</p>
                <p className={styles.url}>thariqhamad.com/intro</p>
            </div>
        </main>
    );
}
