'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Button } from '@/components/ui/Button';
import { getAssetPath } from '@/utils/assets';
import { Trophy, Users, Calendar, Star } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export default function AboutPage() {
    const builderStack = [
        {
            title: 'ENGINEERING',
            tools: [
                { name: 'Flutter', icon: getAssetPath('/icons/flutter.svg') },
                { name: 'MySQL', icon: getAssetPath('/icons/mysql.svg') },
                { name: 'Python', icon: getAssetPath('/icons/python.svg') },
            ],
        },
        {
            title: 'AI',
            tools: [
                { name: 'Gemini', icon: getAssetPath('/icons/gemini.svg') },
                { name: 'Antigravity', icon: getAssetPath('/icons/antigravity.svg') },
                { name: 'Lovable', icon: getAssetPath('/icons/lovable.svg') },
                { name: 'Claude', icon: getAssetPath('/icons/claude.svg') },
            ],
        },
        {
            title: 'DATA',
            tools: [
                { name: 'HotJar', icon: getAssetPath('/icons/hotjar.svg') },
                { name: 'MS Clarity', icon: getAssetPath('/icons/clarity.svg') },
                { name: 'GA4', icon: getAssetPath('/icons/ga4.svg') },
            ],
        },
        {
            title: 'PM TOOLS',
            tools: [
                { name: 'Jira', icon: getAssetPath('/icons/jira.svg') },
                { name: 'ClickUp', icon: getAssetPath('/icons/clickup.svg') },
                { name: 'Azure DevOps', icon: getAssetPath('/icons/azuredevops.svg') },
            ],
        },
        {
            title: 'DESIGN',
            tools: [
                { name: 'Figma', icon: getAssetPath('/icons/figma.svg') },
                { name: 'Illustrator', icon: getAssetPath('/icons/illustrator.svg') },
            ],
        },
    ];

    return (
        <main className="container">
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://thariqhamad.com' },
                { name: 'About', url: 'https://thariqhamad.com/about' },
            ]} />
            <div className={styles.wrapper}>
                {/* Section 1: Bio */}
                <section className={styles.bioSection}>
                    <div className={styles.bioContent}>
                        <h1 className={styles.headline}>
                            I build products that pay for themselves.
                        </h1>

                        <div className={styles.storyBlock}>
                            <h2 className={styles.sectionLabel}>The Story</h2>
                            <p className={styles.paragraph}>
                                I'm Thariq, a Product Manager and Zero-to-One specialist based in KSA.
                                My career hasn't been a straight line—it's been a continuous loop of
                                building, measuring, and scaling.
                            </p>
                            <p className={styles.paragraph}>
                                I've worn the founder's hat (co-founding FieldR and Chonk Cookies), where
                                I learned that a product isn't finished until it sells. I've also worn
                                the corporate strategist hat (at Fortude), where I learned how to maneuver
                                large-scale revenue pipelines and complex stakeholder maps.
                            </p>
                        </div>

                        <div className={styles.storyBlock}>
                            <h2 className={styles.sectionLabel}>What I Do</h2>
                            <p className={styles.paragraph}>
                                I bridge the gap between technical possibility and business reality.
                                Whether it's using AI to optimize workflows or engineering retention
                                loops that keep users coming back, my goal is always the same:
                                sustainable growth.
                            </p>
                        </div>

                        <div className={styles.storyBlock}>
                            <h2 className={styles.sectionLabel}>Currently</h2>
                            <p className={styles.paragraph}>
                                Right now, I'm focused on the intersection of AI and human productivity.
                                I'm diving deep into Python and building custom AI agents, exploring how
                                we can automate the mundane to make room for the creative.
                            </p>
                        </div>

                        <div className={styles.storyBlock}>
                            <h2 className={styles.sectionLabel}>The Bottom Line</h2>
                            <p className={styles.paragraph}>
                                I don't just manage backlogs; I manage business outcomes. If you're
                                looking for a PM who treats your budget like his own investment, let's talk.
                            </p>
                        </div>

                        <div className={styles.ctaWrapper}>
                            <Button
                                onClick={() => window.open('https://www.linkedin.com/in/thariqhamad', '_blank')}
                            >
                                Let's Connect on LinkedIn
                            </Button>
                        </div>
                    </div>

                    <div className={styles.portraitColumn}>
                        <div className={styles.portraitWrapper}>
                            <Image
                                src={getAssetPath('/images/portrait.jpg')}
                                alt="Thariq - Product Manager"
                                width={400}
                                height={500}
                                className={styles.portrait}
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Section 2: Builder's Stack */}
                <section className={styles.stackSection}>
                    <h2 className={styles.stackTitle}>Builder's Stack</h2>
                    <div className={styles.stackGrid}>
                        {builderStack.map((category, idx) => (
                            <div key={idx} className={styles.stackColumn}>
                                <h3 className={styles.columnTitle}>{category.title}</h3>
                                <div className={styles.toolsGrid}>
                                    {category.tools.map((tool, toolIdx) => (
                                        <div key={toolIdx} className={styles.toolCard}>
                                            <div className={styles.toolIcon}>
                                                <Image
                                                    src={tool.icon}
                                                    alt={tool.name}
                                                    width={32}
                                                    height={32}
                                                />
                                            </div>
                                            <span className={styles.toolName}>{tool.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 3: Rotaract Leadership */}
                <section id="rotaract" className={styles.rotaractSection}>
                    <div className={styles.rotaractHeader}>
                        <p className={styles.rotaractEyebrow}>Rotaract International · 2016–2021</p>
                        <h2 className={styles.rotaractTitle}>Leading Beyond Product</h2>
                        <p className={styles.rotaractSubtitle}>
                            Five years of progressive leadership across three Rotaract clubs and District 3220 (Sri Lanka &amp; Maldives) —
                            building skills in event management, stakeholder coordination, community mobilisation, and executive
                            operations long before the corporate world.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className={styles.rotaractStats}>
                        {[
                            { icon: Trophy, value: '30+', label: 'Projects Completed', sub: 'As Club President' },
                            { icon: Users, value: 'LKR 125K', label: 'Funds Raised', sub: 'In a single term' },
                            { icon: Calendar, value: '5 Years', label: 'Of Service', sub: '2016–2021' },
                            { icon: Star, value: '3 Clubs', label: '& 1 District', sub: 'Leadership across all levels' },
                        ].map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div key={i} className={styles.rotaractStat}>
                                    <div className={styles.rotaractStatIcon}><Icon size={16} /></div>
                                    <div className={styles.rotaractStatValue}>{stat.value}</div>
                                    <div className={styles.rotaractStatLabel}>{stat.label}</div>
                                    <div className={styles.rotaractStatSub}>{stat.sub}</div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Timeline */}
                    <div className={styles.rotaractTimeline}>
                        <h3 className={styles.timelineTitle}>Leadership Progression</h3>
                        <p className={styles.timelineSub}>Every year, a new level of responsibility.</p>

                        <div className={styles.timelineItems}>
                            {[
                                { role: 'Community Service Joint Director', org: 'Rotaract Club of IIT', period: 'May 2016–Jun 2017', highlight: 'Entry into Rotaract leadership — managing community service delivery and cross-club coordination.', isTop: false },
                                { role: 'Secretary', org: 'Rotaract Club of IIT', period: 'Mar 2017–Jun 2018', highlight: 'Owned club operations, correspondence, records, and internal reporting for a full club year.', isTop: false },
                                { role: 'Coordinator, Digital Communication Services', org: 'Rotaract District 3220 — Sri Lanka & Maldives', period: 'May 2018–Jun 2019', highlight: 'Elevated to District level — led digital communications strategy across Sri Lanka and the Maldives.', isTop: false },
                                { role: 'Vice President', org: 'Rotaract Club of Colombo North', period: 'May 2019–May 2020', highlight: 'Stepped into executive leadership, supporting the President and driving programme delivery.', isTop: false },
                                { role: 'President', org: 'Rotaract Club of PanColombo', period: 'Sep 2020–Aug 2021', highlight: "Led the club through a full presidential term — completed 30 projects and raised LKR 125,000 for the club's future.", isTop: true },
                            ].map((step, i, arr) => (
                                <div key={i} className={`${styles.timelineItem} ${step.isTop ? styles.topRole : ''}`}>
                                    <div className={styles.timelinePeriod}>{step.period}</div>
                                    <div className={styles.timelineDotCol}>
                                        <div className={styles.dot} />
                                        {i < arr.length - 1 && <div className={styles.line} />}
                                    </div>
                                    <div className={styles.timelineContent}>
                                        <div className={styles.timelineRole}>{step.role}</div>
                                        <div className={styles.timelineOrg}>{step.org}</div>
                                        <p className={styles.timelineHighlight}>{step.highlight}</p>
                                        {step.isTop && <span className={styles.topBadge}>Presidential Term</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
