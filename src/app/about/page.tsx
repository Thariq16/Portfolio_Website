'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
    const builderStack = [
        {
            title: 'ENGINEERING',
            tools: [
                { name: 'Flutter', icon: '/icons/flutter.svg' },
                { name: 'MySQL', icon: '/icons/mysql.svg' },
                { name: 'Python', icon: '/icons/python.svg' },
            ],
        },
        {
            title: 'AI',
            tools: [
                { name: 'Gemini', icon: '/icons/gemini.svg' },
                { name: 'Antigravity', icon: '/icons/antigravity.svg' },
                { name: 'Lovable', icon: '/icons/lovable.svg' },
                { name: 'Claude', icon: '/icons/claude.svg' },
            ],
        },
        {
            title: 'DATA',
            tools: [
                { name: 'HotJar', icon: '/icons/hotjar.svg' },
                { name: 'MS Clarity', icon: '/icons/clarity.svg' },
                { name: 'GA4', icon: '/icons/ga4.svg' },
            ],
        },
        {
            title: 'PM TOOLS',
            tools: [
                { name: 'Jira', icon: '/icons/jira.svg' },
                { name: 'ClickUp', icon: '/icons/clickup.svg' },
                { name: 'Azure DevOps', icon: '/icons/azuredevops.svg' },
            ],
        },
        {
            title: 'DESIGN',
            tools: [
                { name: 'Figma', icon: '/icons/figma.svg' },
                { name: 'Illustrator', icon: '/icons/illustrator.svg' },
            ],
        },
    ];

    return (
        <main className="container">
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
                                src="/images/portrait.jpg"
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
            </div>
        </main>
    );
}
