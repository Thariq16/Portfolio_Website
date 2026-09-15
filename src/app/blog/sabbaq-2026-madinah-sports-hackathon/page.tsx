import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '../posts';
import Faq from './Faq';
import EngagementBar from '@/components/engagement/EngagementBar';
import WritingCTA from '@/components/sections/WritingCTA';
import styles from './page.module.css';

const post = BLOG_POSTS.find((p) => p.slug === 'sabbaq-2026-madinah-sports-hackathon')!;

export const metadata: Metadata = {
    title: `${post.title} – Thariq Hamad`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
        type: 'article',
        title: post.title,
        description: post.excerpt,
        url: `/blog/${post.slug}/`,
        images: [
            {
                url: '/images/sabbaq-al-ansar-exterior.jpg',
                width: 1600,
                height: 900,
                alt: "Al-Ansar Sports Club's illuminated entrance and signage in Madinah at night",
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: ['/images/sabbaq-al-ansar-exterior.jpg'],
    },
};

const FAQS = [
    {
        q: 'What is SABBAQ?',
        a: 'SABBAQ 2026 was a 72-hour sports innovation hackathon in Madinah focused on technology-driven ideas and solutions for the sports sector.',
    },
    {
        q: 'Where was SABBAQ 2026 held?',
        a: (
            <>
                SABBAQ 2026 was held at{' '}
                <a href="https://alansar.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                    Al-Ansar
                </a>{' '}
                in Madinah, Saudi Arabia, from August 18 to 20, 2026.
            </>
        ),
    },
    {
        q: 'Who organized SABBAQ 2026?',
        a: (
            <>
                SABBAQ 2026 was organized by{' '}
                <a href="https://www.businesshub.com.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                    Business Hub Madinah
                </a>{' '}
                and{' '}
                <a href="https://alansar.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                    Al-Ansar Sports Club
                </a>.
            </>
        ),
    },
    {
        q: 'What was SABBAQ 2026 about?',
        a: 'The event brought together people exploring different challenges within sports, including technology, data, performance, safety, player development and sports innovation.',
    },
    {
        q: 'Why is sports technology important for Saudi Arabia?',
        a: "Sports technology can help connect areas such as performance analysis, talent development, player recruitment, safety and data-driven decision-making. As Saudi Arabia's sports ecosystem continues to develop, technology can become an important part of the infrastructure supporting that growth.",
    },
    {
        q: 'What could be next for sports technology in Madinah?',
        a: 'One opportunity is connecting different technologies, datasets and stakeholders across the sports ecosystem. Events such as SABBAQ provide a glimpse of the people and ideas that could contribute to that ecosystem.',
    },
];

export default function SabbaqArticlePage() {
    return (
        <main className={styles.main}>
            <article className="container">
                <div className={styles.article}>
                    <Link href="/blog" className={styles.backLink}>
                        <ArrowLeft size={15} />
                        Back to Writing
                    </Link>

                    <span className="eyebrow">{post.category} · {post.readTime}</span>
                    <h1 className={styles.title}>{post.title}</h1>
                    <div className={styles.meta}>
                        <span>By Thariq Hamad</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.displayDate}</span>
                        <span aria-hidden="true">·</span>
                        <span>Madinah, Saudi Arabia</span>
                    </div>

                    <EngagementBar pageType="blog" slug={post.slug} title={post.title} />

                    <div className={styles.prose}>
                        <p className={styles.lede}>
                            I went to SABBAQ expecting a three-day hackathon.
                        </p>
                        <p className={styles.lede}>
                            I left thinking about something much bigger.
                        </p>

                        <p className={styles.pullquote}>
                            What happens when a city starts building not just sports teams,
                            but an entire ecosystem around sport?
                        </p>

                        <p>
                            SABBAQ 2026 was a 72-hour sports innovation hackathon held from
                            August 18 to 20 at{' '}
                            <a href="https://alansar.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                                Al-Ansar
                            </a>{' '}
                            in Madinah, bringing together people working on technology-driven
                            ideas and solutions for the sports sector.
                        </p>
                        <p>After three days, my biggest takeaway was simple:</p>
                        <p className={styles.pullquote}>
                            Madinah&apos;s sports-tech story may only be getting started.
                        </p>

                        <figure className={styles.figureWide}>
                            <Image
                                src="/images/sabbaq-al-ansar-exterior.jpg"
                                alt="Al-Ansar Sports Club's illuminated entrance and signage in Madinah at night"
                                width={1600}
                                height={900}
                                className={styles.figureWideImage}
                                priority
                            />
                            <figcaption className={styles.figureCaption}>
                                <a href="https://alansar.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                                    Al-Ansar Sports Club
                                </a>{' '}
                                in Madinah during SABBAQ 2026.
                            </figcaption>
                        </figure>

                        <h2>SABBAQ was about more than football</h2>
                        <p>
                            One of the things I found interesting about SABBAQ was seeing how{' '}
                            <a href="https://alansar.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                                Al-Ansar
                            </a>{' '}
                            is thinking about its future. The club&apos;s recent rebranding is
                            not simply about changing its visual identity. There seems to be a
                            broader ambition around what the club can become within Madinah&apos;s
                            sports ecosystem.
                        </p>
                        <p>
                            One part that resonated with me was the focus on
                            bringing the club closer to the families of Madinah. That changes
                            the way you think about a football club. It isn&apos;t only about
                            what happens on the pitch.
                        </p>
                        <p>
                            A club can become a platform for community, participation, youth
                            development, technology, entertainment and new businesses around
                            sport. And that creates opportunities far beyond traditional
                            football.
                        </p>

                        <h2>A three-day event with a wide range of ideas</h2>
                        <p>
                            What stood out most was the scale of participation. Organizers
                            later confirmed the final numbers: more than 400 registrations and
                            200+ participants across 90-plus teams, narrowed down to 13
                            qualified finalist projects and three winners.
                        </p>

                        <figure className={styles.figureWide}>
                            <Image
                                src="/images/sabbaq-applicant-funnel.jpg"
                                alt="A slide shown during SABBAQ 2026 tracking the shortlisting funnel: 200+ applications, 75 accepted, 10 finalists at that stage, 3 winners"
                                width={1400}
                                height={788}
                                className={styles.figureWideImage}
                                loading="eager"
                            />
                            <figcaption className={styles.figureCaption}>
                                The shortlisting funnel, as shared mid-event.
                            </figcaption>
                        </figure>

                        <p>
                            But the numbers were only part of what made the event interesting.
                            The ideas being explored covered a surprisingly broad range of
                            sports and technology problems.
                        </p>
                        <p>There were concepts around:</p>
                        <ul>
                            <li>Computer vision</li>
                            <li>IoT</li>
                            <li>Player performance</li>
                            <li>Talent identification</li>
                            <li>Sports safety</li>
                            <li>Data analytics</li>
                            <li>Player development</li>
                        </ul>

                        <figure className={styles.figureWide}>
                            <Image
                                src="/images/sabbaq-values-slide.jpg"
                                alt="A conference slide listing SABBAQ's five values: Responsibility, Innovation, Competitiveness, Initiative and Discipline"
                                width={1400}
                                height={788}
                                className={styles.figureWideImage}
                                loading="eager"
                            />
                            <figcaption className={styles.figureCaption}>
                                Different problems, different technologies, but a common focus
                                on the future of sport.
                            </figcaption>
                        </figure>

                        <p>
                            One concept explored how visual technology could be used around
                            swimming pools to help identify people who may be drowning,
                            particularly in environments where children are learning to swim.
                            There were also ideas looking at player fatigue using IoT and data,
                            alongside research-backed approaches to understanding player quality
                            and development. Other teams were working on computer vision and
                            sports analytics. These are very different problems.
                        </p>
                        <p>But they all point towards the same thing:</p>
                        <p className={styles.pullquote}>
                            Technology is becoming increasingly embedded in sport.
                        </p>
                        <p>And the opportunity is not limited to what happens during a match.</p>

                        <h2>A small detail that made the experience personal</h2>

                        <div className={styles.statCard}>
                            <p className={`${styles.statCardTitle} eyebrow`}>SABBAQ 2026 · Final Numbers</p>
                            <div className={styles.statGrid}>
                                <div>
                                    <div className={styles.statValue}>90+</div>
                                    <div className={styles.statLabel}>Teams</div>
                                </div>
                                <div>
                                    <div className={styles.statValue}>200+</div>
                                    <div className={styles.statLabel}>Participants</div>
                                </div>
                                <div>
                                    <div className={styles.statValue}>400+</div>
                                    <div className={styles.statLabel}>Registered</div>
                                </div>
                                <div>
                                    <div className={styles.statValue}>72</div>
                                    <div className={styles.statLabel}>Hours</div>
                                </div>
                                <div>
                                    <div className={styles.statValue}>13</div>
                                    <div className={styles.statLabel}>Finalist Projects</div>
                                </div>
                                <div>
                                    <div className={styles.statValue}>3</div>
                                    <div className={styles.statLabel}>Winning Projects</div>
                                </div>
                            </div>
                            <p className={styles.statSource}>
                                As shared by{' '}
                                <a href="https://alansar.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                                    Al-Ansar Sports Club
                                </a>{' '}
                                and{' '}
                                <a href="https://www.businesshub.com.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                                    Business Hub Madinah
                                </a>{' '}
                                after the event.
                            </p>
                        </div>

                        <p>
                            It may seem like a small thing, but this is what made the
                            experience personal for me. I wasn&apos;t looking at these ideas
                            from a distance. I was sitting in the room, listening to people
                            explain the problems they were trying to solve, seeing different
                            approaches to sports technology and watching people test whether
                            their ideas could become something real.
                        </p>
                        <p>And after three days, I kept coming back to one question.</p>

                        <h2>What happens when we connect the data?</h2>
                        <p>
                            There were a lot of interesting pieces of the sports-tech puzzle at
                            SABBAQ. Player data. Computer vision. IoT. Performance monitoring.
                            Talent identification. Player development. Analytics.
                        </p>
                        <p>
                            But what happens when we connect them? This was probably my biggest
                            takeaway from the event.
                        </p>
                        <p>
                            During one of the discussions, the topic of player transfers came
                            up, including how data could help predict and support
                            transfers within the Saudi sports ecosystem. That immediately got
                            me thinking.
                        </p>
                        <p>Imagine being able to combine information about a player&apos;s:</p>
                        <ul>
                            <li>Performance</li>
                            <li>Development trajectory</li>
                            <li>Physical condition</li>
                            <li>Playing style</li>
                            <li>Match involvement</li>
                            <li>Historical progression</li>
                            <li>Team context</li>
                        </ul>
                        <p>
                            And then use that information to help clubs make better
                            recruitment and transfer decisions. The interesting opportunity may
                            not be another isolated analytics product.
                        </p>
                        <p className={styles.pullquote}>It may be the layer that connects the data.</p>

                        <h2>From individual products to an ecosystem</h2>
                        <p>
                            This is where I think Saudi Arabia has an interesting opportunity.
                            We often talk about sports technology as individual products. An
                            analytics platform. A computer vision system. An IoT device. A
                            performance tool. A talent identification platform.
                        </p>
                        <p>
                            But ecosystems become much more powerful when these systems start
                            working together.
                        </p>
                        <p>A player&apos;s journey generates data across multiple stages:</p>
                        <p className={styles.flowLine}>
                            Discovery → Development → Performance → Recruitment → Transfer → Continued Development
                        </p>
                        <p>
                            The more connected those stages become, the more useful the data
                            becomes. And the more useful the data becomes, the better decisions
                            clubs, academies, athletes and other stakeholders can potentially
                            make. That is a much bigger opportunity than simply building
                            another dashboard.
                        </p>

                        <h2>Why Madinah matters</h2>
                        <p>
                            What struck me most about SABBAQ was where it
                            happened. This was happening in Madinah, Saudi Arabia. And the room
                            was full of people thinking about how technology could be applied
                            to sport in ways that could work within Saudi Arabia.
                        </p>
                        <p>
                            That&apos;s important. Technology doesn&apos;t always need to be
                            copied from another market and simply dropped into Saudi Arabia.
                        </p>
                        <p>
                            There is an opportunity to build products specifically around the
                            Saudi sports ecosystem, its culture, its communities and the
                            direction the country is heading. Madinah can be part of that
                            story.
                        </p>

                        <h2>The people were perhaps the most encouraging part</h2>
                        <p>
                            The products and technology were impressive, but it was the people
                            who left the strongest impression.
                        </p>
                        <p>
                            There was genuine excitement from people who wanted to understand
                            how they could participate in the sports ecosystem. Some were
                            building. Some were pitching. Some were researching. Some were
                            exploring completely new problems. Others were simply trying to
                            understand where they could contribute.
                        </p>
                        <p>
                            That matters because ecosystems do not emerge from technology
                            alone. They emerge when enough people start believing there is an
                            opportunity worth building around.
                        </p>

                        <h2>My biggest takeaway from SABBAQ</h2>
                        <p>
                            I went to SABBAQ expecting a hackathon. What I saw was a glimpse of
                            something much bigger.
                        </p>
                        <p className={styles.pullquote}>Madinah has people who want to build in sports.</p>
                        <p>
                            There are ideas. There is technology. There is talent. There is
                            institutional interest. And there is an increasingly ambitious
                            sports ecosystem developing across Saudi Arabia.
                        </p>
                        <p>The next question is how we connect all of these pieces.</p>
                        <p>
                            SABBAQ made me think that the future of sports technology in
                            Madinah may not be about one breakthrough product. It may be about
                            building an ecosystem where many different ideas, technologies and
                            people can work together.
                        </p>
                        <p>And if this was the beginning, I am genuinely curious to see what comes next.</p>

                        <h2>With thanks</h2>
                        <p>
                            An event like this doesn&apos;t happen without institutional
                            backing. Thank you to:
                        </p>
                        <ul>
                            <li>
                                <a href="https://alansar.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                                    Al-Ansar FC
                                </a>{' '}
                                (نادي الأنصار)
                            </li>
                            <li>
                                <a href="https://www.businesshub.com.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                                    Business Hub Madinah
                                </a>{' '}
                                (بزنس هب)
                            </li>
                            <li>
                                <a href="https://abasco.com.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                                    ABASCO
                                </a>{' '}
                                (شركة عودة البلادي وأبنائه)
                            </li>
                            <li>
                                <a href="https://mda.gov.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                                    Al Madinah Region Development Authority
                                </a>{' '}
                                (هيئة تطوير منطقة المدينة المنورة)
                            </li>
                            <li>
                                <a href="https://www.mcci.org.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                                    Al Madinah Al Munawwarah Chamber of Commerce
                                </a>{' '}
                                (غرفة المدينة المنورة)
                            </li>
                            <li>
                                <a href="https://mcit.gov.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                                    Ministry of Communications and Information Technology
                                </a>{' '}
                                (وزارة الاتصالات وتقنية المعلومات)
                            </li>
                            <li>
                                <a href="https://mos.gov.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                                    Ministry of Sport
                                </a>{' '}
                                (وزارة الرياضة)
                            </li>
                        </ul>
                        <p>
                            Thank you to Al-Ansar and Business Hub Madinah for organizing, and
                            to the Ministry of Sport, the Ministry of Communications and
                            Information Technology, the Al Madinah Region Development
                            Authority, ABASCO, and the Al Madinah Al Munawwarah Chamber of
                            Commerce for backing an event like this.
                        </p>
                    </div>

                    <hr className={styles.divider} />

                    <div className={styles.factbox}>
                        <h3 className={styles.factboxTitle}>SABBAQ 2026 at a glance</h3>
                        <dl className={styles.factboxGrid}>
                            <dt>Event</dt><dd>SABBAQ 2026</dd>
                            <dt>Format</dt><dd>72-hour sports innovation hackathon</dd>
                            <dt>Dates</dt><dd>August 18–20, 2026</dd>
                            <dt>Location</dt><dd>Al-Ansar, Madinah, Saudi Arabia</dd>
                            <dt>Organizers</dt>
                            <dd>
                                <a href="https://www.businesshub.com.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                                    Business Hub Madinah
                                </a>{' '}
                                and{' '}
                                <a href="https://alansar.sa" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                                    Al-Ansar Sports Club
                                </a>
                            </dd>
                            <dt>Focus</dt><dd>Sports innovation, technology and solutions for the future of sport</dd>
                        </dl>
                    </div>

                    <Faq items={FAQS} />

                    <WritingCTA />

                    <p className={styles.footerNote}>
                        Written by Thariq Hamad ·{' '}
                        <Link href="/blog">More writing</Link> ·{' '}
                        <Link href="/about">About Thariq</Link>
                    </p>
                </div>
            </article>
        </main>
    );
}
