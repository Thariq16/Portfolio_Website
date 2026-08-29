import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    Contact, Calendar, MessageCircle, Mail, Linkedin, FileText, Briefcase,
} from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Thariq Hamad — Digital Card',
    description: 'Save Thariq Hamad\'s contact, book a call, or view the full portfolio — tap any link below.',
    robots: { index: false, follow: false },
};

const WHATSAPP_NUMBER = '966565329004';
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Thariq, we just connected — great meeting you!");

const links = [
    {
        href: '/thariq-hamad.vcf',
        label: 'Save My Contact',
        detail: 'Adds me straight to your phone',
        icon: Contact,
        primary: true,
    },
    {
        href: 'https://calendar.app.google/vDMbaPoDc2vYVQaK8',
        label: 'Book a Call',
        detail: '30 minutes, pick a slot',
        icon: Calendar,
        external: true,
    },
    {
        href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
        label: 'WhatsApp',
        detail: '+966 56 532 9004',
        icon: MessageCircle,
        external: true,
    },
    {
        href: 'mailto:thariqhamad6@gmail.com',
        label: 'Email',
        detail: 'thariqhamad6@gmail.com',
        icon: Mail,
    },
    {
        href: 'https://www.linkedin.com/in/thariqhamad/',
        label: 'LinkedIn',
        detail: 'Connect with me',
        icon: Linkedin,
        external: true,
    },
    {
        href: '/cv',
        label: 'Download CV',
        detail: 'Pick the version for your role',
        icon: FileText,
    },
    {
        href: '/',
        label: 'Full Portfolio',
        detail: 'Case studies, career, design work',
        icon: Briefcase,
    },
];

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

                <nav className={styles.linkList} aria-label="Contact and profile links">
                    {links.map((l) => {
                        const Icon = l.icon;
                        const commonProps = {
                            className: `${styles.linkItem} ${l.primary ? styles.linkPrimary : ''}`,
                        };
                        const content = (
                            <>
                                <span className={styles.linkIcon}><Icon size={18} /></span>
                                <span className={styles.linkText}>
                                    <span className={styles.linkLabel}>{l.label}</span>
                                    <span className={styles.linkDetail}>{l.detail}</span>
                                </span>
                            </>
                        );
                        if (l.href.startsWith('/') && !l.external) {
                            return <Link key={l.label} href={l.href} {...commonProps}>{content}</Link>;
                        }
                        return (
                            <a
                                key={l.label}
                                href={l.href}
                                target={l.external ? '_blank' : undefined}
                                rel={l.external ? 'noopener noreferrer' : undefined}
                                {...commonProps}
                            >
                                {content}
                            </a>
                        );
                    })}
                </nav>

                <p className={styles.footerNote}>thariqhamad.com</p>
            </div>
        </main>
    );
}
