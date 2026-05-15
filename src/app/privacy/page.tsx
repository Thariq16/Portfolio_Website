'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import styles from './page.module.css';

const content = {
    en: {
        title: 'Privacy Policy',
        lastUpdated: 'Last updated: May 2026',
        intro: 'This Privacy Policy explains how Thariq Hamad ("I", "me") collects, uses, and protects data when you visit thariqhamad.com (the "Site"). I am committed to transparency and to complying with applicable data protection laws, including the EU General Data Protection Regulation (GDPR) and the Kingdom of Saudi Arabia Personal Data Protection Law (PDPL).',
        sections: [
            {
                heading: '1. Data Controller',
                body: 'Thariq Hamad is the data controller for this Site.\nContact: thariqhamad6@gmail.com',
            },
            {
                heading: '2. What Data Is Collected',
                body: 'I do not collect personal data directly. However, this Site uses two third-party analytics services that may collect the following data automatically when you visit:\n\n• Pages visited and navigation paths\n• Time spent on pages\n• Scroll depth and click interactions\n• Approximate geographic location (country/city level)\n• Device type, browser, and operating system\n• Referring website or source\n• Anonymous session recordings and heatmaps (Clarity only)',
            },
            {
                heading: '3. Third-Party Services',
                body: 'Google Analytics 4 (Google LLC)\nPurpose: Understand aggregate site traffic and visitor behaviour.\nData retained: 14 months (Google default).\nOptout: https://tools.google.com/dlpage/gaoptout\nPrivacy policy: https://policies.google.com/privacy\n\nMicrosoft Clarity (Microsoft Corporation)\nPurpose: Session recordings and heatmaps to improve site usability.\nData retained: 90 days (Clarity default).\nOptout: https://clarity.microsoft.com/optout\nPrivacy policy: https://privacy.microsoft.com/privacystatement',
            },
            {
                heading: '4. Legal Basis for Processing',
                body: 'Under GDPR (EU/EEA visitors): Processing is based on your freely given consent (Article 6(1)(a)). You may withdraw consent at any time by clicking "Decline" in the cookie banner or clearing your browser\'s local storage.\n\nUnder KSA PDPL (Saudi Arabia visitors): Processing is based on your consent provided via the cookie consent banner on this Site, in accordance with the Personal Data Protection Law issued by Royal Decree No. M/19.',
            },
            {
                heading: '5. Cookies',
                body: 'Both Google Analytics and Microsoft Clarity use cookies and similar tracking technologies to identify returning visitors and maintain session continuity. No cookies are set until you explicitly accept via the consent banner.',
            },
            {
                heading: '6. Data Sharing',
                body: 'I do not sell, rent, or trade your data. Analytics data is shared with Google and Microsoft solely as processors for the services described above. Both companies maintain their own compliance certifications under applicable privacy frameworks.',
            },
            {
                heading: '7. Your Rights',
                body: 'Depending on your jurisdiction, you may have the following rights:\n\n• Right to access: Request a copy of data held about you.\n• Right to erasure: Request deletion of your data.\n• Right to object: Object to processing of your data.\n• Right to withdraw consent: Opt out at any time.\n• Right to lodge a complaint: Contact your local data protection authority (EU/EEA) or the Saudi Data & AI Authority (SDAIA) for KSA residents.\n\nTo exercise any right, contact: thariqhamad6@gmail.com',
            },
            {
                heading: '8. Data Transfers',
                body: 'Google and Microsoft may process data on servers outside your country of residence, including in the United States. Both maintain Standard Contractual Clauses (SCCs) and other safeguards required under GDPR and applicable laws.',
            },
            {
                heading: '9. Data Security',
                body: 'All data is processed by Google and Microsoft under their respective security standards. This Site is served over HTTPS to protect data in transit.',
            },
            {
                heading: '10. Changes to This Policy',
                body: 'This policy may be updated from time to time. The "Last updated" date at the top of this page reflects the most recent revision. Continued use of the Site after changes constitutes acceptance of the updated policy.',
            },
            {
                heading: '11. Contact',
                body: 'For any privacy-related questions or requests:\nEmail: thariqhamad6@gmail.com\nWebsite: https://thariqhamad.com',
            },
        ],
    },
    ar: {
        title: 'سياسة الخصوصية',
        lastUpdated: 'آخر تحديث: مايو 2026',
        intro: 'توضح سياسة الخصوصية هذه كيفية جمع طارق حماد ("أنا") للبيانات واستخدامها وحمايتها عند زيارتك لموقع thariqhamad.com ("الموقع"). أنا ملتزم بالشفافية والامتثال لقوانين حماية البيانات المعمول بها، بما في ذلك اللائحة الأوروبية العامة لحماية البيانات (GDPR) ونظام حماية البيانات الشخصية في المملكة العربية السعودية.',
        sections: [
            {
                heading: '١. المتحكم في البيانات',
                body: 'طارق حماد هو المتحكم في البيانات لهذا الموقع.\nللتواصل: thariqhamad6@gmail.com',
            },
            {
                heading: '٢. البيانات التي يتم جمعها',
                body: 'لا أجمع بيانات شخصية مباشرةً. غير أن هذا الموقع يستخدم خدمتي تحليلات خارجيتين قد تجمعان البيانات التالية تلقائياً عند زيارتك:\n\n• الصفحات التي تمت زيارتها ومسارات التصفح\n• الوقت المستغرق في الصفحات\n• عمق التمرير وتفاعلات النقر\n• الموقع الجغرافي التقريبي (على مستوى الدولة/المدينة)\n• نوع الجهاز والمتصفح ونظام التشغيل\n• الموقع أو المصدر المُحيل\n• تسجيلات الجلسات المجهولة وخرائط الحرارة (Clarity فقط)',
            },
            {
                heading: '٣. الخدمات الخارجية',
                body: 'Google Analytics 4 (شركة Google LLC)\nالغرض: فهم حركة الزوار الإجمالية وسلوكهم على الموقع.\nمدة الاحتفاظ بالبيانات: 14 شهراً (الإعداد الافتراضي لـ Google).\nإلغاء الاشتراك: https://tools.google.com/dlpage/gaoptout\nسياسة الخصوصية: https://policies.google.com/privacy\n\nMicrosoft Clarity (شركة Microsoft)\nالغرض: تسجيلات الجلسات وخرائط الحرارة لتحسين سهولة الاستخدام.\nمدة الاحتفاظ بالبيانات: 90 يوماً (الإعداد الافتراضي لـ Clarity).\nإلغاء الاشتراك: https://clarity.microsoft.com/optout\nسياسة الخصوصية: https://privacy.microsoft.com/privacystatement',
            },
            {
                heading: '٤. الأساس القانوني للمعالجة',
                body: 'بموجب اللائحة العامة لحماية البيانات (GDPR) للزوار من الاتحاد الأوروبي/المنطقة الاقتصادية الأوروبية: تستند المعالجة إلى موافقتك المقدَّمة بحرية (المادة 6(1)(أ)). يمكنك سحب موافقتك في أي وقت بالنقر على "رفض" في لافتة الموافقة على ملفات تعريف الارتباط أو مسح التخزين المحلي لمتصفحك.\n\nبموجب نظام حماية البيانات الشخصية في المملكة العربية السعودية (PDPL) للزوار من المملكة: تستند المعالجة إلى موافقتك المقدَّمة عبر لافتة الموافقة على هذا الموقع، وفقاً لنظام حماية البيانات الشخصية الصادر بالمرسوم الملكي م/19.',
            },
            {
                heading: '٥. ملفات تعريف الارتباط',
                body: 'يستخدم كل من Google Analytics وMicrosoft Clarity ملفات تعريف الارتباط وتقنيات التتبع المماثلة للتعرف على الزوار العائدين والحفاظ على استمرارية الجلسة. لا يتم تعيين أي ملفات تعريف ارتباط حتى تقبل صراحةً عبر لافتة الموافقة.',
            },
            {
                heading: '٦. مشاركة البيانات',
                body: 'لا أبيع بياناتك أو أؤجرها أو أتداولها. تُشارَك بيانات التحليلات مع Google وMicrosoft فقط بوصفهما معالجَين للخدمات الموضحة أعلاه، وكلاهما يحتفظ بشهادات الامتثال الخاصة به بموجب أطر الخصوصية المعمول بها.',
            },
            {
                heading: '٧. حقوقك',
                body: 'قد تتمتع بالحقوق التالية بحسب ولايتك القضائية:\n\n• حق الوصول: طلب نسخة من البيانات المحتفظ بها عنك.\n• حق المحو: طلب حذف بياناتك.\n• حق الاعتراض: الاعتراض على معالجة بياناتك.\n• حق سحب الموافقة: إلغاء الاشتراك في أي وقت.\n• حق تقديم شكوى: التواصل مع سلطة حماية البيانات المحلية (الاتحاد الأوروبي/المنطقة الاقتصادية الأوروبية) أو الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا) للمقيمين في المملكة.\n\nلممارسة أي حق، تواصل معي على: thariqhamad6@gmail.com',
            },
            {
                heading: '٨. نقل البيانات',
                body: 'قد تعالج Google وMicrosoft البيانات على خوادم خارج بلد إقامتك، بما في ذلك الولايات المتحدة الأمريكية. تحتفظ كلتا الشركتين بالبنود التعاقدية المعيارية (SCCs) وضمانات أخرى مطلوبة بموجب اللائحة العامة لحماية البيانات والقوانين المعمول بها.',
            },
            {
                heading: '٩. أمان البيانات',
                body: 'تتم معالجة جميع البيانات بواسطة Google وMicrosoft وفق معاييرهما الأمنية الخاصة. يُقدَّم هذا الموقع عبر بروتوكول HTTPS لحماية البيانات أثناء النقل.',
            },
            {
                heading: '١٠. التغييرات على هذه السياسة',
                body: 'قد يتم تحديث هذه السياسة من وقت لآخر. يعكس تاريخ "آخر تحديث" في أعلى هذه الصفحة أحدث مراجعة. يُعدّ الاستمرار في استخدام الموقع بعد التغييرات قبولاً للسياسة المحدَّثة.',
            },
            {
                heading: '١١. التواصل',
                body: 'لأي أسئلة أو طلبات تتعلق بالخصوصية:\nالبريد الإلكتروني: thariqhamad6@gmail.com\nالموقع: https://thariqhamad.com',
            },
        ],
    },
};

export default function PrivacyPage() {
    const { locale } = useLanguage();
    const c = content[locale];
    const isRtl = locale === 'ar';

    return (
        <main className={styles.main} dir={isRtl ? 'rtl' : 'ltr'}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Link href="/" className={styles.backLink}>
                        {isRtl ? '→ العودة للرئيسية' : '← Back to Home'}
                    </Link>
                    <h1 className={styles.title}>{c.title}</h1>
                    <p className={styles.lastUpdated}>{c.lastUpdated}</p>
                    <p className={styles.intro}>{c.intro}</p>
                </div>

                <div className={styles.sections}>
                    {c.sections.map((section, i) => (
                        <section key={i} className={styles.section}>
                            <h2 className={styles.sectionHeading}>{section.heading}</h2>
                            <div className={styles.sectionBody}>
                                {section.body.split('\n').map((line, j) =>
                                    line.trim() === '' ? (
                                        <br key={j} />
                                    ) : (
                                        <p key={j}>{line}</p>
                                    )
                                )}
                            </div>
                        </section>
                    ))}
                </div>

                <div className={styles.footer}>
                    <p>
                        {isRtl
                            ? 'هل لديك أسئلة؟ تواصل معي على '
                            : 'Have questions? Contact me at '}
                        <a href="mailto:thariqhamad6@gmail.com" className={styles.emailLink}>
                            thariqhamad6@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
