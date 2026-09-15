import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '../posts';
import Faq from './Faq';
import EngagementBar from '@/components/engagement/EngagementBar';
import WritingCTA from '@/components/sections/WritingCTA';
import styles from './page.module.css';

const post = BLOG_POSTS.find((p) => p.slug === 'arsenal-2026-27-ucl-ambitions')!;

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
                url: '/images/arsenal-channel-map-og.png',
                width: 1200,
                height: 630,
                alt: 'Arsenal 2026/27 attacking channel map: left side 35%, middle channel 33%, right side 32%',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: ['/images/arsenal-channel-map-og.png'],
    },
};

const FAQS = [
    {
        q: "Why do you think Arsenal's Champions League chances hinge on the left side?",
        a: "Last season the left channel didn't explode the way the squad needed – that limited how many ways Arsenal could break teams down. With a signing built to make quick, secure decisions in that channel, all three attacking lanes open up instead of relying on the right or central overloads alone.",
    },
    {
        q: 'How did the transfer market move around Arsenal this summer?',
        a: "PSG sold Barcola and Mbaye but brought in Torres, which softens the blow. Real Madrid signed Bernardo Silva as their one real upgrade and changed their system under Jose Mourinho, but nothing else in the window moves the needle. Barcelona added Rodri, though it is unlikely to transform them on its own. Bayern made no major signings in the market, but Vincent Kompany continuing to build the team is its own kind of reinforcement.",
    },
    {
        q: 'Who unlocks the left channel for Arsenal this season?',
        a: 'Tzolis, operating alongside Calafiori inverting into midfield, is the pairing expected to make the left a trusted, repeatable outlet rather than an occasional spark – freeing Martinelli-era patterns without disrespecting what Martinelli still offers off the opposite rotation.',
    },
    {
        q: "Will Arsenal win their first Champions League in 2026/27?",
        a: "It's not a certainty, but the case is real: once the left side becomes a natural, trusted channel, Arsenal becomes a high-threat team by design – robust as a collective rather than dependent on one superstar's individual quality. There is also squad depth that hasn't been properly explored yet.",
    },
];

export default function ArsenalUclArticlePage() {
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
                        <span>Season notes</span>
                    </div>

                    <EngagementBar pageType="blog" slug={post.slug} title={post.title} />

                    <div className={styles.prose}>
                        <p className={styles.lede}>
                            Every summer, Arsenal fans go looking outside for the answer to the
                            Champions League question.
                        </p>
                        <p className={styles.lede}>
                            I think the answer was always inside the building.
                        </p>

                        <p className={styles.pullquote}>
                            It won&apos;t be about looking outside for solutions but looking
                            inside for solutions.
                        </p>

                        <p>
                            How we played last season, with what we had, tells us most of what
                            we need to know about why this Champions League run is possible. It
                            can still work – but we do have to acknowledge that we didn&apos;t
                            have our left side covered enough to be exploding like we wanted, and
                            that&apos;s where the problem was.
                        </p>

                        <h2>What actually changed around Arsenal this summer</h2>
                        <p>
                            Before getting into our own business, it&apos;s worth looking at the
                            strengths and transfer dynamics that have played out elsewhere. None
                            of our direct European rivals had the kind of window that should
                            worry us:
                        </p>
                        <ul>
                            <li>PSG – sold Barcola and Mbaye, reduced strength, but signed Torres</li>
                            <li>Real Madrid – Bernardo Silva was their major signing, alongside a system change under Jose; nothing else in the window looks like an upgrade on what they already had</li>
                            <li>Barcelona – Rodri was their major signing, which doesn&apos;t improve them drastically</li>
                            <li>Bayern Munich – no major signings, but Kompany will come in strong</li>
                        </ul>
                        <p>
                            None of that is a team that has pulled decisively clear. If Arsenal
                            solve their own problem, the gap this season is ours to close.
                        </p>

                        <h2>The left side was always the missing piece</h2>
                        <p>
                            We signed someone who can run and make good decisions to make the
                            left side work. That creates the space for us to attack all three
                            channels, unlike last year. It also helps us change our attacking
                            strategy and off-ball possession – the team stops being predictable
                            about where the ball is going next.
                        </p>
                        <p>
                            I&apos;m expecting us to deliver more balls into the middle from the
                            left side than in any previous season. No disrespect to Martinelli –
                            it&apos;s that Tzolis has been making good decisions in decisive
                            moments, and Arteta has trust in that and his explosiveness. With
                            Calafiori inverting inside from left-back, that lane gets a second
                            layer of decision-making instead of relying on one player to create
                            everything alone.
                        </p>

                        <figure className={styles.pitchFigure}>
                            <div className={styles.pitchHead}>
                                <span>Channel share · attacking left to right</span>
                                <span>N = single match sample</span>
                            </div>
                            <svg
                                className={styles.pitchSvg}
                                viewBox="0 0 700 500"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Football pitch divided into three horizontal channels: left side 35%, middle channel 33%, right side 32% of attacking build-up"
                            >
                                <rect x="30" y="30" width="620" height="400" fill="none" className={styles.pitchLine} strokeWidth="1.5" />

                                <line x1="30" y1="163.33" x2="650" y2="163.33" className={styles.pitchLine} strokeWidth="1" />
                                <line x1="30" y1="296.67" x2="650" y2="296.67" className={styles.pitchLine} strokeWidth="1" />

                                <line x1="340" y1="30" x2="340" y2="430" className={styles.pitchLine} strokeWidth="1" />
                                <circle cx="340" cy="230" r="48" fill="none" className={styles.pitchLine} strokeWidth="1" />
                                <circle cx="340" cy="230" r="2" className={styles.pitchBarTrack} />

                                <rect x="562" y="114" width="88" height="232" fill="none" className={styles.pitchLineStrong} strokeWidth="1.5" />
                                <rect x="616" y="166" width="34" height="128" fill="none" className={styles.pitchLineStrong} strokeWidth="1.5" />
                                <path d="M 562 188 A 42 42 0 0 1 562 272" fill="none" className={styles.pitchLine} strokeWidth="1" />

                                <rect x="30" y="114" width="88" height="232" fill="none" className={styles.pitchLine} strokeWidth="1.2" />
                                <rect x="30" y="166" width="34" height="128" fill="none" className={styles.pitchLine} strokeWidth="1.2" />

                                <g transform="translate(340 462)">
                                    <line x1="-55" y1="0" x2="55" y2="0" className={styles.pitchArrowLine} strokeWidth="1" />
                                    <path d="M 47 -5 L 58 0 L 47 5" className={styles.pitchArrowLine} strokeWidth="1" />
                                    <text x="0" y="18" className={styles.pitchTag} textAnchor="middle">ATTACK</text>
                                </g>

                                <g transform="translate(470 96.67)">
                                    <text x="0" y="-8" textAnchor="middle" className={styles.pitchLabel}>ON LEFT SIDE</text>
                                    <text x="0" y="34" textAnchor="middle" className={`${styles.pitchPct} ${styles.pitchPctPrimary}`} fontSize="36">35%</text>
                                    <rect x="-30" y="44" width="60" height="4" className={styles.pitchBarTrack} />
                                    <rect x="-30" y="44" width="60" height="4" className={styles.pitchBarFill} />
                                    <text x="0" y="62" textAnchor="middle" className={styles.pitchNote}>Tzolis · Calafiori inverting</text>
                                </g>

                                <g transform="translate(470 230)">
                                    <text x="0" y="-8" textAnchor="middle" className={styles.pitchLabel}>MIDDLE CHANNEL</text>
                                    <text x="0" y="34" textAnchor="middle" className={styles.pitchPct} fontSize="36">33%</text>
                                    <rect x="-28" y="44" width="56.6" height="4" className={styles.pitchBarTrack} />
                                    <text x="0" y="62" textAnchor="middle" className={styles.pitchNote}>Ødegaard progression</text>
                                </g>

                                <g transform="translate(470 363.33)">
                                    <text x="0" y="-8" textAnchor="middle" className={styles.pitchLabel}>ON RIGHT SIDE</text>
                                    <text x="0" y="34" textAnchor="middle" className={styles.pitchPct} fontSize="36">32%</text>
                                    <rect x="-27" y="44" width="54.8" height="4" className={styles.pitchBarTrack} />
                                    <text x="0" y="62" textAnchor="middle" className={styles.pitchNote}>Saka · Madueke rotation</text>
                                </g>
                            </svg>
                            <figcaption className={styles.figureCaption}>
                                Projected share of attacking build-up by channel, per match –
                                left slightly ahead of middle and right, but all three now live.
                            </figcaption>
                        </figure>

                        <p>
                            By January 2027 we will know more about our ambitions than we do
                            now. But I expect Havertz, Gyökeres and Ødegaard among the goals and
                            assists, and balls into the box from the left side to double those
                            from the right.
                        </p>

                        <h2>What this does to the opposition</h2>
                        <p>
                            This is the tactical payoff. Once all three channels are live, it
                            puts the opposition in a decision dilemma, as they can&apos;t fully
                            overload one side and rely on the low block too much. A team that
                            could previously set its defensive shape around stopping Saka and
                            trusting the low block now has to respect a left side that&apos;s
                            just as capable of hurting them.
                        </p>
                        <p>
                            I&apos;ll be honest about the domestic risk. We will lose in the
                            Premier League due to our own mistakes with players at the back.
                            Barring that, I don&apos;t see us conceding much.
                        </p>

                        <h2>Can we win our first Champions League?</h2>
                        <p>
                            I don&apos;t know. But I can say this: once our attack on the left
                            side becomes natural and a trusted channel, we become a high threat
                            as a team but not dependent on a superstar player&apos;s individual
                            quality.
                        </p>
                        <p className={styles.pullquote}>
                            We become high threat as a team – robust, not dependent on a
                            superstar player&apos;s individual quality.
                        </p>
                        <p>
                            We still carry surprises within the squad that haven&apos;t been
                            explored properly. That, more than any single signing, is what makes
                            this season worth watching closely.
                        </p>
                    </div>

                    <hr className={styles.divider} />

                    <div className={styles.factbox}>
                        <h3 className={styles.factboxTitle}>Arsenal 2026/27 – the case at a glance</h3>
                        <dl className={styles.factboxGrid}>
                            <dt>Core issue, 2025/26</dt><dd>Left side not exploding as expected</dd>
                            <dt>Fix</dt><dd>Left-channel runner + Calafiori inverting to unlock all three lanes</dd>
                            <dt>Rivals&apos; window</dt><dd>PSG (–Barcola/Mbaye, +Torres), Real Madrid (+Bernardo Silva, system change under Jose), Barcelona (+Rodri), Bayern (quiet, Kompany continuity)</dd>
                            <dt>Expected end product</dt><dd>Havertz, Gyökeres, Ødegaard among goals and assists</dd>
                            <dt>Checkpoint</dt><dd>January 2027 – clearer read on ambitions</dd>
                            <dt>Thesis</dt><dd>Robust as a team, not dependent on one superstar</dd>
                        </dl>
                    </div>

                    <Faq items={FAQS} />

                    <WritingCTA />

                    <p className={styles.footerNote}>
                        Written by Thariq Hamad ·{' '}
                        <Link href="/blog">More writing</Link> ·{' '}
                        <Link href="/football">Football work</Link>
                    </p>
                </div>
            </article>
        </main>
    );
}
