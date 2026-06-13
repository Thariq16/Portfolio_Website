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
  metadataBase: new URL('https://thariqhamad.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thariqhamad.com',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
};

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { LanguageProvider } from '@/components/providers/LanguageProvider';
import { CookieConsentProvider } from '@/components/providers/CookieConsentProvider';
import CookieBanner from '@/components/ui/CookieConsent';
import AnalyticsScripts from '@/components/analytics/AnalyticsScripts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs synchronously before paint — prevents light→dark flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.setAttribute('data-theme','dark');}else{document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={clsx(inter.className, 'antialiased')} data-clarity-unmask="true">
        <CookieConsentProvider>
          <ThemeProvider>
            <LanguageProvider>
              <Navbar />
              {children}
              <Footer />
              <CookieBanner />
            </LanguageProvider>
          </ThemeProvider>
          <AnalyticsScripts />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
