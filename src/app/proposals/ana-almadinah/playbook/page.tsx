'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    ArrowLeft, Camera, Youtube, MapPin, MessageCircle, Linkedin, Megaphone, Check,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import shared from '../page.module.css';
import styles from './page.module.css';

type GrowthTrack = 'visitors' | 'franchise';

const GROWTH_FUNNELS: Record<GrowthTrack, { goal: string; steps: { stage: string; body: string }[] }> = {
    visitors: {
        goal: 'Fill the Madinah venue, build the proof-of-demand library',
        steps: [
            { stage: 'Awareness', body: 'Short-form video shot from inside the VR headset – POV footage no competitor can replicate. Arabic voiceover, English subtitles.' },
            { stage: 'Consideration', body: 'Google Business Profile + Maps SEO; listings on Nusuk and Umrah tour-operator itineraries.' },
            { stage: 'Conversion', body: 'WhatsApp Business booking; on-site NFC tap (Waseej) at hotel concierges and airport lounges.' },
            { stage: 'Advocacy', body: 'A branded hashtag challenge for pilgrims to share their VR moment – raw material for next month’s content.' },
        ],
    },
    franchise: {
        goal: 'Fill the pipeline for the next licensed territory',
        steps: [
            { stage: 'Awareness', body: 'LinkedIn thought-leadership on religious-tourism economics; the proposal page as the always-on anchor.' },
            { stage: 'Consideration', body: 'A franchise info-pack with unit economics from the Madinah flagship; a monthly investor webinar.' },
            { stage: 'Conversion', body: 'LinkedIn + Google Search ads; direct outreach through the TechTaswiq growth engine.' },
            { stage: 'Enablement', body: 'Signed franchisees get a co-op marketing fund and a local-page content kit.' },
        ],
    },
};

const CHANNELS: { icon: React.ElementType; label: string; track: 'b2c' | 'b2b'; cadence: string }[] = [
    { icon: Camera, label: 'Instagram & TikTok Reels', track: 'b2c', cadence: '4–5×/week' },
    { icon: Youtube, label: 'YouTube Shorts & long-form', track: 'b2c', cadence: '2×/week' },
    { icon: MapPin, label: 'Google Business Profile + Maps', track: 'b2c', cadence: 'Always-on' },
    { icon: MessageCircle, label: 'WhatsApp Business + NFC', track: 'b2c', cadence: 'Always-on' },
    { icon: Linkedin, label: 'LinkedIn (company + leadership)', track: 'b2b', cadence: '3×/week' },
    { icon: Megaphone, label: 'Google & LinkedIn Ads', track: 'b2b', cadence: 'Always-on' },
];

const PILLARS = [
    { title: 'Inside the Experience', body: 'Raw POV clips from the VR headset – Hajj, Umrah, Seerah.' },
    { title: 'Faith & Feeling', body: 'Pilgrim reactions and testimonials, captured on exit.' },
    { title: 'Behind the Build', body: 'Production process – the Sri Lanka dev team, new film drops.' },
    { title: 'Franchise Economics', body: 'Unit economics, territory maps, investor Q&A clips.' },
    { title: 'Calendar Moments', body: 'Ramadan, Hajj season, and Seerah-anniversary tie-ins.' },
];

const ROADMAP = [
    {
        days: 'Days 1–30', label: 'Foundation',
        tasks: [
            'Claim & fully optimize Google Business Profile',
            'Set up WhatsApp Business catalog + booking flow',
            'Shoot the first 20 POV clips for the content bank',
            'Build the 5-email franchise nurture sequence',
        ],
    },
    {
        days: 'Days 31–60', label: 'Launch',
        tasks: [
            'Go live with paid Reels/TikTok in the Riyadh & Jeddah radius',
            'Launch the first franchise LinkedIn + Search ad campaigns',
            'Pitch three Umrah tour operators for itinerary inclusion',
            'Run the first monthly investor webinar',
        ],
    },
    {
        days: 'Days 61–90', label: 'Scale',
        tasks: [
            'Double paid budget on the best-performing B2C creative',
            'Book a stand at the next Saudi franchise expo',
            'Ship the franchisee co-op marketing kit',
            'Report 90-day KPIs to leadership, reset targets',
        ],
    },
];

const BUDGET = [
    { label: 'B2C content & paid', pct: 45 },
    { label: 'Franchise lead gen', pct: 35 },
    { label: 'Tooling & analytics', pct: 15 },
    { label: 'Contingency', pct: 5 },
];

const KPIS = [
    { value: 'CPB', label: 'Cost per booking, Track A' },
    { value: '30%', label: 'Bookings via NFC tap or WhatsApp, not walk-in' },
    { value: '1M+', label: 'Monthly POV-content views' },
    { value: '10', label: 'Qualified franchise leads / month by day 90' },
    { value: 'CPQL', label: 'Cost per qualified franchise lead' },
    { value: '2', label: 'Signed territory LOIs in the first two quarters' },
];

const CHECKLIST_ITEMS = [
    'Claim and fully complete the Google Business Profile',
    'Publish the franchise landing page as the one link every investor conversation points to',
    'Set up WhatsApp Business with a saved catalog of experience slots',
    'Film the first 10–15 POV clips straight from the headset feed',
];

const CHECKLIST_KEY = 'ana-almadinah-playbook-page-checklist';

export default function AnaAlmadinahPlaybookPage() {
    const [track, setTrack] = useState<GrowthTrack>('visitors');
    const funnel = GROWTH_FUNNELS[track];

    const [checked, setChecked] = useState<boolean[]>(() => CHECKLIST_ITEMS.map(() => false));
    useEffect(() => {
        try {
            const saved = JSON.parse(localStorage.getItem(CHECKLIST_KEY) || 'null');
            if (Array.isArray(saved)) setChecked(saved);
        } catch {
            // ignore malformed storage
        }
    }, []);
    const toggleCheck = (i: number) => {
        setChecked((prev) => {
            const next = prev.map((v, idx) => (idx === i ? !v : v));
            try {
                localStorage.setItem(CHECKLIST_KEY, JSON.stringify(next));
            } catch {
                // storage unavailable, skip persistence
            }
            return next;
        });
    };
    const doneCount = checked.filter(Boolean).length;

    const audienceRef = useScrollReveal<HTMLElement>();
    const channelsRef = useScrollReveal<HTMLElement>();
    const pillarsRef = useScrollReveal<HTMLElement>();
    const roadmapRef = useScrollReveal<HTMLElement>();
    const budgetRef = useScrollReveal<HTMLElement>();
    const checklistRef = useScrollReveal<HTMLElement>();

    return (
        <main className={shared.main}>
            <section className={styles.hero}>
                <div className="container">
                    <Link href="/proposals/ana-almadinah" className={styles.backLink}>
                        <ArrowLeft size={15} />
                        Back to the proposal
                    </Link>
                    <div className={styles.kicker}>Condensed Growth Playbook</div>
                    <h1 className={styles.heroTitle}>
                        Sell the pilgrimage <em className={shared.heroAccent}>experience</em> to
                        visitors. Sell the pilgrimage <em className={shared.heroAccent}>economy</em> to
                        investors.
                    </h1>
                    <p className={styles.heroSub}>
                        HOOPO VR and Waseej already have the hardest part solved: content nobody else
                        can show. This playbook runs two marketing tracks off that same content engine
                        – one that fills seats today, one that fills franchise territories for the next
                        two years.
                    </p>
                </div>
            </section>

            <div className="container">
                {/* ── Audiences ── */}
                <section ref={audienceRef} className={`${shared.section} reveal`} id="audiences">
                    <div className={shared.sectionHead}>
                        <span className="eyebrow">01 · Two audiences, one engine</span>
                        <p className={shared.sectionSub}>
                            Consumer content builds the proof franchise prospects check before they
                            invest. Franchise messaging never reaches a pilgrim by accident.
                        </p>
                    </div>

                    <div className={shared.toggleFrame} role="tablist" aria-label="Growth track">
                        <button
                            type="button" role="tab" aria-selected={track === 'visitors'}
                            className={`${shared.toggleBtn} ${track === 'visitors' ? shared.toggleBtnActive : ''}`}
                            onClick={() => setTrack('visitors')}
                        >
                            Visitors & Pilgrims
                        </button>
                        <button
                            type="button" role="tab" aria-selected={track === 'franchise'}
                            className={`${shared.toggleBtn} ${track === 'franchise' ? shared.toggleBtnActive : ''}`}
                            onClick={() => setTrack('franchise')}
                        >
                            Franchise Investors
                        </button>
                    </div>

                    <p className={styles.trackGoal}>{funnel.goal}</p>

                    <div className={shared.scopeList}>
                        {funnel.steps.map((step, i) => (
                            <div className={shared.scopeItem} key={step.stage}>
                                <div className={shared.scopeNum}>{String(i + 1).padStart(2, '0')}</div>
                                <div>
                                    <h4 className={shared.scopeTitle}>{step.stage}</h4>
                                    <p className={shared.scopeBody}>{step.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Channels ── */}
                <section ref={channelsRef} className={`${shared.section} reveal`} id="channels">
                    <div className={shared.sectionHead}>
                        <span className="eyebrow">02 · Channel plan</span>
                        <p className={shared.sectionSub}>
                            One engine, two feeds. Production stays centralized; distribution and CTAs
                            split by track.
                        </p>
                    </div>

                    <div className={styles.channelList}>
                        {CHANNELS.map(({ icon: Icon, label, track: t, cadence }) => (
                            <div className={styles.channelRow} key={label}>
                                <span className={styles.channelIcon}><Icon size={16} /></span>
                                <span className={styles.channelLabel}>{label}</span>
                                <span className={`${styles.trackPill} ${t === 'b2c' ? styles.trackPillA : styles.trackPillB}`}>
                                    {t === 'b2c' ? 'Visitors' : 'Franchise'}
                                </span>
                                <span className={styles.channelCadence}>{cadence}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Content pillars ── */}
                <section ref={pillarsRef} className={`${shared.section} reveal`} id="content">
                    <div className={shared.sectionHead}>
                        <span className="eyebrow">03 · Content pillars</span>
                        <p className={shared.sectionSub}>
                            Five recurring formats, shot once and cut for both tracks. Arabic-first
                            captions, English subtitles on every asset.
                        </p>
                    </div>

                    <div className={styles.pillarGrid}>
                        {PILLARS.map((p, i) => (
                            <div className={styles.pillarCard} key={p.title}>
                                <div className={styles.pillarNum}>{String(i + 1).padStart(2, '0')}</div>
                                <h4 className={styles.pillarTitle}>{p.title}</h4>
                                <p className={styles.pillarBody}>{p.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Roadmap ── */}
                <section ref={roadmapRef} className={`${shared.section} reveal`} id="roadmap">
                    <div className={shared.sectionHead}>
                        <span className="eyebrow">04 · 90-day roadmap</span>
                        <p className={shared.sectionSub}>
                            Foundation, then two tracks running in parallel at increasing spend.
                        </p>
                    </div>

                    <div className={styles.roadmap}>
                        {ROADMAP.map((phase) => (
                            <div className={styles.phase} key={phase.label}>
                                <div className={styles.phaseLabel}>
                                    <div className={styles.phaseDays}>{phase.days}</div>
                                    <h4 className={styles.phaseTitle}>{phase.label}</h4>
                                </div>
                                <div className={styles.phaseTasks}>
                                    {phase.tasks.map((task) => (
                                        <div className={styles.task} key={task}>{task}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Budget & KPIs ── */}
                <section ref={budgetRef} className={`${shared.section} reveal`} id="budget">
                    <div className={shared.sectionHead}>
                        <span className="eyebrow">05 · Budget & KPIs</span>
                        <p className={shared.sectionSub}>
                            Indicative allocation of the monthly digital marketing budget – adjust to
                            actual spend once approved.
                        </p>
                    </div>

                    <div className={shared.budgetMini}>
                        {BUDGET.map((row) => (
                            <div className={shared.budgetRow} key={row.label}>
                                <span className={shared.budgetLabel}>{row.label}</span>
                                <span className={shared.budgetTrack}>
                                    <span className={shared.budgetFill} style={{ width: `${row.pct}%` }} />
                                </span>
                                <span className={shared.budgetPct}>{row.pct}%</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.kpiGrid}>
                        {KPIS.map((k) => (
                            <div className={styles.kpiCard} key={k.label}>
                                <div className={styles.kpiValue}>{k.value}</div>
                                <div className={styles.kpiLabel}>{k.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Checklist ── */}
                <section ref={checklistRef} className={`${shared.section} reveal`} id="checklist" style={{ borderBottom: 'none' }}>
                    <div className={shared.sectionHead}>
                        <span className="eyebrow">06 · First two weeks</span>
                        <p className={shared.sectionSub}>
                            What can start before any budget is approved. Checked items are saved on
                            this device.
                        </p>
                    </div>

                    <div className={shared.quickWins}>
                        <div className={shared.quickWinsHead}>
                            <span>Quick wins</span>
                            <span className={shared.quickWinsCount}>{doneCount} of {CHECKLIST_ITEMS.length} done</span>
                        </div>
                        {CHECKLIST_ITEMS.map((item, i) => (
                            <button
                                type="button" key={item}
                                className={`${shared.quickWin} ${checked[i] ? shared.quickWinDone : ''}`}
                                onClick={() => toggleCheck(i)}
                                aria-pressed={checked[i]}
                            >
                                <span className={shared.quickWinBox}>{checked[i] && <Check size={11} />}</span>
                                <span>{item}</span>
                            </button>
                        ))}
                    </div>
                </section>

                <p className={shared.footerNote}>
                    Prepared by Thariq Hamad for Ana Almadinah · Madinah, Saudi Arabia ·{' '}
                    <Link href="/proposals/ana-almadinah">Back to the full proposal</Link>
                </p>
            </div>
        </main>
    );
}
