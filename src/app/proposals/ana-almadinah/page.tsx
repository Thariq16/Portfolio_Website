'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    MapPin, Clock, Briefcase, Camera, Youtube, MessageCircle,
    Linkedin, Megaphone, Layers, Users, Languages,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './page.module.css';

type PathId = 'provider' | 'employee';
type GrowthTrack = 'visitors' | 'franchise';

const PROVIDER_SCOPE = [
    {
        title: 'Offshore technology team',
        body: 'Source, hire, and manage a technical team, including Game Dev, Unreal Engine, and Unity specialists, delivered through an established Sri Lanka technology network.',
    },
    {
        title: 'Technical implementation from Sri Lanka',
        body: 'Run delivery through a cost-efficient offshore base without losing coordination quality with the Madinah team.',
    },
    {
        title: 'Bilingual product pages',
        body: 'Manage and maintain product web pages in Arabic and English, consistent with how ANA ALMADINAH already presents itself.',
    },
    {
        title: 'Digital marketing at scale',
        body: 'Build out an Arabic content and design function, the same bilingual growth model TechTaswiq already runs for GCC clients.',
    },
    {
        title: 'New films and games',
        body: 'Ideate and help implement new 360° film and interactive game concepts alongside the existing Hajj, Umrah, and Seerah catalogue.',
    },
    {
        title: 'Franchise-focused ad campaigns',
        body: 'Run paid campaigns built specifically to attract and convert franchise partners and investors.',
    },
    {
        title: 'NFC-based systems',
        body: 'Scope and coordinate delivery of NFC-enabled experiences for events and venues.',
    },
];

const EMPLOYEE_SCOPE = [
    {
        title: 'Offshore technology team',
        body: 'Same as the contract path, hire and manage Game Dev, Unreal Engine, and Unity talent through an offshore network.',
    },
    {
        title: 'Head of Product, focused on marketing & PR',
        body: 'Own the product function with digital marketing and public relations as the primary lens, not a generic product mandate.',
    },
    {
        title: 'Guide and strategize ad campaigns',
        body: 'Set the direction and framework for paid growth, rather than executing it hands-on day to day.',
    },
    {
        title: 'New films and games',
        body: 'Ideate and implement new immersive content, as a core, ongoing part of the role rather than a project add-on.',
    },
];

const PROOF_RAIL = [
    { num: '1 → 34', label: 'Team scaled from Employee #1 to full operating team', source: 'Sling Mobility', logo: '/logos/sling.svg' },
    { num: 'SAR 7M', label: 'Pipeline built from a SAR 3,750 campaign, 1,800% ROAS', source: 'Fortude', logo: '/logos/fortude.png' },
    { num: '75%', label: 'Free-to-paid conversion on a self-built SaaS platform', source: 'FieldR', logo: '/logos/fieldr.png' },
    { num: '23', label: 'Games launched across multiple publishers', source: 'Motion Miracles', logo: '/logos/motion-miracles.png' },
];

const GROWTH_FUNNELS: Record<GrowthTrack, { goal: string; steps: string[] }> = {
    visitors: {
        goal: 'Fill the Madinah venue, build the proof-of-demand library',
        steps: [
            'Awareness – POV clips shot straight from the VR headset, Arabic voiceover with English subtitles',
            'Consideration – Google Business Profile + Maps SEO, Umrah tour-operator itinerary listings',
            'Conversion – WhatsApp Business booking and on-site NFC tap-to-reserve via Waseej',
        ],
    },
    franchise: {
        goal: 'Fill the pipeline for the next licensed territory',
        steps: [
            'Awareness – LinkedIn thought-leadership, this proposal page as the always-on anchor',
            'Consideration – franchise info-pack with unit economics from the Madinah flagship',
            'Conversion – LinkedIn + Google Search ads, direct outreach via the TechTaswiq growth engine',
        ],
    },
};

const CHANNEL_STRIP: { icon: React.ElementType; label: string; track: 'b2c' | 'b2b' }[] = [
    { icon: Camera, label: 'Reels & TikTok', track: 'b2c' },
    { icon: Youtube, label: 'YouTube', track: 'b2c' },
    { icon: MapPin, label: 'Google & Maps', track: 'b2c' },
    { icon: MessageCircle, label: 'WhatsApp + NFC', track: 'b2c' },
    { icon: Linkedin, label: 'LinkedIn', track: 'b2b' },
    { icon: Megaphone, label: 'Paid ads', track: 'b2b' },
];

const BUDGET_SPLIT = [
    { label: 'Visitor content & paid', pct: 45 },
    { label: 'Franchise lead gen', pct: 35 },
    { label: 'Tooling & analytics', pct: 20 },
];

const QUICK_WINS = [
    'Claim & fully optimize the Google Business Profile',
    'Set up WhatsApp Business with a bookable slot catalog',
    'Shoot the first 15 POV clips straight from the headset feed',
];

const WHY_ME: { icon: React.ElementType; title: string; body: string }[] = [
    {
        icon: Layers,
        title: 'One person, not a hand-off',
        body: 'Most growth hires can’t touch the product, and most product hires can’t run the funnel. This proposal only works because one person can do both without a relay between teams.',
    },
    {
        icon: Users,
        title: 'Built teams from zero before',
        body: 'Scaled Sling Mobility from Employee #1 to a 34-person team. Sourcing and managing the offshore Sri Lanka technical team is a repeat, not a first attempt.',
    },
    {
        icon: Languages,
        title: 'Already runs bilingual growth',
        body: 'TechTaswiq is a live agency serving funded GCC startups in Arabic and English today – the exact operating model this proposal brings in-house.',
    },
    {
        icon: Clock,
        title: 'Already in Madinah',
        body: 'Based in Madinah today, transferable Iqama, zero relocation lead time. Whichever path fits, start date isn’t the bottleneck.',
    },
];

export default function AnaAlmadinahProposalPage() {
    const [path, setPath] = useState<PathId>('provider');
    const scope = path === 'provider' ? PROVIDER_SCOPE : EMPLOYEE_SCOPE;

    const [growthTrack, setGrowthTrack] = useState<GrowthTrack>('visitors');
    const funnel = GROWTH_FUNNELS[growthTrack];

    const whyRef = useScrollReveal<HTMLElement>();
    const pathsRef = useScrollReveal<HTMLElement>();
    const proofRef = useScrollReveal<HTMLElement>();
    const growthRef = useScrollReveal<HTMLElement>();
    const closeRef = useScrollReveal<HTMLElement>();

    return (
        <main className={styles.main}>
            {/* ── Hero ── */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroTop}>
                        <div className={styles.kicker}>Prepared for Ana Almadinah</div>
                    </div>

                    <div className={styles.heroGrid}>
                        <div className={styles.heroCopy}>
                            <h1 className={styles.heroTitle}>
                                Two ways to bring{' '}
                                <em className={styles.heroAccent}>technology, growth, and product</em>{' '}
                                into one team.
                            </h1>
                            <p className={styles.heroSub}>
                                You&apos;re scaling HOOPO VR and Waseej into new markets and franchise
                                territories. That needs someone who can hire the right engineers, run the
                                marketing that fills the funnel, and shape the product itself. Below are two
                                ways I can be that person.
                            </p>

                            <div className={styles.heroMeta}>
                                <div className={styles.heroMetaItem}>
                                    <MapPin size={16} />
                                    <div>
                                        <strong>Madinah, KSA</strong>
                                        <span>Transferable Iqama</span>
                                    </div>
                                </div>
                                <div className={styles.heroMetaItem}>
                                    <Clock size={16} />
                                    <div>
                                        <strong>Available now</strong>
                                        <span>Immediate start</span>
                                    </div>
                                </div>
                                <div className={styles.heroMetaItem}>
                                    <Briefcase size={16} />
                                    <div>
                                        <strong>8+ years</strong>
                                        <span>Zero-to-one product &amp; growth</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.heroPortraitWrap}>
                            <div className={styles.heroPortrait}>
                                <Image
                                    src="/images/portrait.jpg"
                                    alt="Thariq Hamad"
                                    fill
                                    sizes="220px"
                                    className={styles.heroPortraitImg}
                                    priority
                                />
                            </div>
                            <div className={styles.heroPortraitCaption}>Thariq Hamad</div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                {/* ── Why me ── */}
                <section ref={whyRef} className={`${styles.section} reveal`} id="why">
                    <div className={styles.sectionHead}>
                        <span className="eyebrow">Why me</span>
                        <p className={styles.sectionSub}>
                            Not a generic growth-marketer pitch or a generic product-manager pitch – the
                            specific overlap this expansion actually needs.
                        </p>
                    </div>

                    <div className={styles.whyGrid}>
                        {WHY_ME.map(({ icon: Icon, title, body }) => (
                            <div className={styles.whyCard} key={title}>
                                <div className={styles.whyIcon}>
                                    <Icon size={18} />
                                </div>
                                <h4 className={styles.whyTitle}>{title}</h4>
                                <p className={styles.whyBody}>{body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Engagement paths ── */}
                <section ref={pathsRef} className={`${styles.section} reveal`} id="paths">
                    <div className={styles.sectionHead}>
                        <span className="eyebrow">Choose the shape of the engagement</span>
                        <p className={styles.sectionSub}>
                            Same capability, two different commitments. Pick the one that matches how you
                            want to bring this in-house.
                        </p>
                    </div>

                    <div className={styles.toggleFrame} role="tablist" aria-label="Engagement path">
                        <button
                            type="button"
                            role="tab"
                            aria-selected={path === 'provider'}
                            className={`${styles.toggleBtn} ${path === 'provider' ? styles.toggleBtnActive : ''}`}
                            onClick={() => setPath('provider')}
                        >
                            As a Service Provider
                        </button>
                        <button
                            type="button"
                            role="tab"
                            aria-selected={path === 'employee'}
                            className={`${styles.toggleBtn} ${path === 'employee' ? styles.toggleBtnActive : ''}`}
                            onClick={() => setPath('employee')}
                        >
                            As an Employee
                        </button>
                    </div>

                    <div className={styles.pathIntro}>
                        {path === 'provider' ? (
                            <>
                                Delivered through <strong>TechTaswiq</strong>, a bilingual growth and
                                technology partner already serving funded GCC startups. A contract
                                engagement, scoped and time-boxed.
                            </>
                        ) : (
                            <>
                                A direct hire inside ANA ALMADINAH, functioning as{' '}
                                <strong>Head of Product</strong> with a specific mandate around digital
                                marketing and PR.
                            </>
                        )}
                    </div>

                    <div className={styles.scopeList}>
                        {scope.map((item, i) => (
                            <div className={styles.scopeItem} key={item.title}>
                                <div className={styles.scopeNum}>{String(i + 1).padStart(2, '0')}</div>
                                <div>
                                    <h4 className={styles.scopeTitle}>{item.title}</h4>
                                    <p className={styles.scopeBody}>{item.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.termBox}>
                        {path === 'provider' ? (
                            <>
                                <div>
                                    <div className={styles.termLabel}>Commitment</div>
                                    <div className={styles.termValue}>Minimum 6-month contract</div>
                                </div>
                                <div>
                                    <div className={styles.termLabel}>Delivered via</div>
                                    <div className={styles.termValue}>
                                        <a href="https://www.techtaswiq.com" target="_blank" rel="noopener noreferrer">
                                            www.techtaswiq.com
                                        </a>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <div className={styles.termLabel}>Commitment</div>
                                    <div className={styles.termValue}>1-year contract or permanent</div>
                                </div>
                                <div>
                                    <div className={styles.termLabel}>Package</div>
                                    <div className={styles.termValue}>Insurance &amp; dependent visa</div>
                                </div>
                            </>
                        )}
                    </div>
                </section>

                {/* ── Proof ── */}
                <section ref={proofRef} className={`${styles.section} reveal`}>
                    <div className={styles.sectionHead}>
                        <span className="eyebrow">What the numbers say</span>
                        <p className={styles.sectionSub}>
                            Every figure below traces to a named product, a named company, and a
                            documented outcome.
                        </p>
                    </div>

                    <div className={styles.proofRail}>
                        {PROOF_RAIL.map((p) => (
                            <div className={styles.proofCell} key={p.source}>
                                <div className={styles.proofNum}>{p.num}</div>
                                <div className={styles.proofLabel}>{p.label}</div>
                                <div className={styles.proofLogo}>
                                    <Image
                                        src={p.logo}
                                        alt={p.source}
                                        width={88}
                                        height={22}
                                        className={styles.proofLogoImg}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.evidenceGrid}>
                        <div className={styles.evidenceCard}>
                            <div className={styles.evidenceHead}>
                                <Image
                                    src="/images/techtaswiq-icon.png"
                                    alt="TechTaswiq"
                                    width={32}
                                    height={32}
                                    className={styles.evidenceIcon}
                                />
                                <span className={styles.evidenceTag}>Growth &amp; Marketing</span>
                            </div>
                            <h4 className={styles.evidenceTitle}>TechTaswiq</h4>
                            <p className={styles.evidenceBody}>
                                Live bilingual growth agency for funded GCC startups. LinkedIn, Instagram,
                                SEO, and community, in Arabic and English, with a documented case study
                                driving qualified leads for a SaaS client.
                            </p>
                            <a href="https://www.techtaswiq.com" target="_blank" rel="noopener noreferrer" className={styles.evidenceLink}>
                                techtaswiq.com →
                            </a>
                        </div>

                        <div className={styles.evidenceCard}>
                            <div className={styles.evidenceHead}>
                                <span className={styles.evidenceTag}>Case Studies &amp; Track Record</span>
                            </div>
                            <h4 className={styles.evidenceTitle}>Portfolio &amp; Testimonials</h4>
                            <p className={styles.evidenceBody}>
                                Four documented case studies with named companies and outcomes, plus
                                direct testimonials from managers, direct reports, and clients across
                                Sling Mobility, MillenniumIT, and FieldR.
                            </p>
                            <a href="https://thariqhamad.com" target="_blank" rel="noopener noreferrer" className={styles.evidenceLink}>
                                thariqhamad.com →
                            </a>
                        </div>

                        <div className={styles.evidenceCard}>
                            <div className={styles.evidenceHead}>
                                <Image
                                    src="/logos/sling.svg"
                                    alt="Sling Mobility"
                                    width={32}
                                    height={32}
                                    className={styles.evidenceIcon}
                                />
                                <span className={styles.evidenceTag}>Zero-to-One Product</span>
                            </div>
                            <h4 className={styles.evidenceTitle}>Sling Mobility, Employee #1</h4>
                            <p className={styles.evidenceBody}>
                                Built an IoT-connected, hardware-integrated EV platform from a whiteboard,
                                consolidating five separate systems into one, scaling the team from 1 to 34
                                along the way.
                            </p>
                            <a href="https://thariqhamad.com/projects/retention-engine/" target="_blank" rel="noopener noreferrer" className={styles.evidenceLink}>
                                Read the case study →
                            </a>
                        </div>

                        <div className={styles.evidenceCard}>
                            <div className={styles.evidenceHead}>
                                <span className={styles.evidenceTag}>SuperApp &amp; Platform Strategy</span>
                            </div>
                            <h4 className={styles.evidenceTitle}>Allo App, Qatar (Ongoing)</h4>
                            <p className={styles.evidenceBody}>
                                Leading product strategy, research, and architecture for a merchant
                                platform being built toward a super app model, the same consolidation logic
                                ANA ALMADINAH is applying across HOOPO VR and Waseej.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── Growth Snapshot ── */}
                <section ref={growthRef} className={`${styles.section} reveal`} id="growth">
                    <div className={styles.sectionHead}>
                        <span className="eyebrow">Growth snapshot</span>
                        <p className={styles.sectionSub}>
                            A condensed look at the digital marketing engine behind this proposal – the
                            same dual-track plan (visitors, then franchise investors) laid out in full in{' '}
                            <Link href="/proposals/ana-almadinah/playbook" className={styles.evidenceLink}>
                                the growth playbook
                            </Link>.
                        </p>
                    </div>

                    <div className={styles.growthGrid}>
                        <div className={styles.growthFunnel}>
                            <div className={styles.toggleFrame} role="tablist" aria-label="Growth track">
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={growthTrack === 'visitors'}
                                    className={`${styles.toggleBtn} ${growthTrack === 'visitors' ? styles.toggleBtnActive : ''}`}
                                    onClick={() => setGrowthTrack('visitors')}
                                >
                                    Visitors
                                </button>
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={growthTrack === 'franchise'}
                                    className={`${styles.toggleBtn} ${growthTrack === 'franchise' ? styles.toggleBtnActive : ''}`}
                                    onClick={() => setGrowthTrack('franchise')}
                                >
                                    Franchise
                                </button>
                            </div>
                            <p className={styles.growthGoal}>{funnel.goal}</p>
                            <ol className={styles.growthSteps}>
                                {funnel.steps.map((step) => (
                                    <li key={step}>{step}</li>
                                ))}
                            </ol>
                        </div>

                        <div className={styles.growthSide}>
                            <div className={styles.channelStrip}>
                                {CHANNEL_STRIP.map(({ icon: Icon, label, track }) => (
                                    <div key={label} className={styles.channelChip}>
                                        <span className={`${styles.channelDot} ${track === 'b2c' ? styles.channelDotA : styles.channelDotB}`} />
                                        <Icon size={14} />
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.budgetMini}>
                                {BUDGET_SPLIT.map((row) => (
                                    <div className={styles.budgetRow} key={row.label}>
                                        <span className={styles.budgetLabel}>{row.label}</span>
                                        <span className={styles.budgetTrack}>
                                            <span
                                                className={styles.budgetFill}
                                                style={{ width: `${row.pct}%` }}
                                            />
                                        </span>
                                        <span className={styles.budgetPct}>{row.pct}%</span>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <p className={styles.growthGoal}>First moves, before any budget is approved</p>
                                <ol className={styles.growthSteps}>
                                    {QUICK_WINS.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Close ── */}
                <section ref={closeRef} className={`${styles.close} reveal`}>
                    <h2 className={styles.closeTitle}>Let&apos;s talk about which path fits.</h2>
                    <p className={styles.closeBody}>
                        Both paths solve the same problem. The difference is how deeply you want this
                        inside the team. Happy to walk through either in person.
                    </p>
                    <div className={styles.contactRow}>
                        <a href="mailto:thariqhamad6@gmail.com">thariqhamad6@gmail.com</a>
                        <a href="tel:+966565329004">+966 56 532 9004</a>
                        <a href="https://www.linkedin.com/in/thariqhamad" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        <a href="https://thariqhamad.com" target="_blank" rel="noopener noreferrer">
                            Full Portfolio
                        </a>
                    </div>
                </section>

                <p className={styles.footerNote}>
                    Prepared by Thariq Hamad for Ana Almadinah · Madinah, Saudi Arabia
                </p>
            </div>
        </main>
    );
}
