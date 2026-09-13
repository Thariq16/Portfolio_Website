'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './page.module.css';

interface FaqItem {
    q: string;
    a: ReactNode;
}

export default function Faq({ items }: { items: FaqItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className={styles.faq}>
            <h3 className={styles.faqTitle}>Frequently asked questions</h3>
            {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                    <div key={item.q} className={styles.faqItem}>
                        <button
                            type="button"
                            className={styles.faqQ}
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                            aria-expanded={isOpen}
                        >
                            <span>{item.q}</span>
                            <ChevronDown
                                size={16}
                                className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ''}`}
                            />
                        </button>
                        {isOpen && <p className={styles.faqA}>{item.a}</p>}
                    </div>
                );
            })}
        </div>
    );
}
