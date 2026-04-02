import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Map } from 'lucide-react';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Map className={styles.icon} size={48} />
        </div>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Page Out of Scope</h2>
        <p className={styles.description}>
          The page you&apos;re looking for has either been pivoted, deprecated, or doesn&apos;t exist in the current roadmap.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.homeButton}>
            <ArrowLeft size={16} />
            Back to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
