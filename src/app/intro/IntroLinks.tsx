'use client';

import React from 'react';
import Link from 'next/link';
import {
    Contact, Calendar, MessageCircle, Mail, Linkedin, FileText, Briefcase,
} from 'lucide-react';
import { trackButtonClick } from '@/utils/analytics';
import styles from './page.module.css';

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

export default function IntroLinks() {
    return (
        <nav className={styles.linkList} aria-label="Contact and profile links">
            {links.map((l) => {
                const Icon = l.icon;
                const commonProps = {
                    className: `${styles.linkItem} ${l.primary ? styles.linkPrimary : ''}`,
                    onClick: () => trackButtonClick(l.label, 'intro_card'),
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
    );
}
