import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
// Will add ThemeProvider later if needed, or implement manually

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Thariq Hamad | Senior Product Manager',
    template: '%s | Thariq Hamad',
  },
  description: 'Senior Product Manager with 8+ years driving revenue, monetization, and growth for SaaS & AI platforms. Based in Riyadh, Saudi Arabia. Expert in zero-to-one product development for GCC startups and enterprises.',
  keywords: ['Product Manager', 'Senior PM', 'SaaS', 'AI Products', 'GCC', 'Saudi Arabia', 'Riyadh', 'Product Strategy', 'Revenue Growth', 'Startup', 'Enterprise'],
  authors: [{ name: 'Thariq Hamad' }],
  creator: 'Thariq Hamad',
  metadataBase: new URL('https://thariq16.github.io/Portfolio_Website'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thariq16.github.io/Portfolio_Website',
    siteName: 'Thariq Hamad - Product Manager Portfolio',
    title: 'Thariq Hamad | Senior Product Manager',
    description: 'Senior Product Manager with 8+ years driving revenue, monetization, and growth for SaaS & AI platforms. Based in Riyadh, Saudi Arabia.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Thariq Hamad - Senior Product Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thariq Hamad | Senior Product Manager',
    description: 'Senior Product Manager with 8+ years driving revenue, monetization, and growth for SaaS & AI platforms.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { LanguageProvider } from '@/components/providers/LanguageProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(inter.className, 'antialiased')}>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
