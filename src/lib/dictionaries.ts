import { getAssetPath } from '@/utils/assets';
export type Locale = 'en' | 'ar';

export type CaseStudyCategory = 'Software Development' | 'Marketing' | 'UX' | 'Ops';

export interface Job {
    slug: string;
    title: string;
    company: string;
    logo: string;
    website?: string;
    location: string;
    dateRange: string;
    summary: string;
    description: string;
    skills: string[];
    images?: string[];
    caseStudyIds: string[];
}

export interface CaseStudy {
    slug: string;
    title: string;
    company: string;
    market: string;
    timeframe: string;
    subheading?: string;
    metrics: { label: string; value: string }[]; // Top 3 visible immediately
    logo: string; // Path to logo in public folder
    website: string; // URL to company website
    // New fields for career path feature
    category: CaseStudyCategory;
    impactScore: number; // 1-10 scale
    jobSlug: string; // Back-reference to parent job
    context: {
        goal: string;
        details: string; // 4-6 lines
    };
    role: {
        details: string;
    };
    constraints: {
        details: string;
    };
    discovery: {
        details: string;
    };
    decisions: {
        details: string;
    };
    execution: {
        details: string;
    };
    outcomes: {
        details: string;
    };
    learnings: {
        repeat: string;
        change: string;
    };
    featured?: {
        headline: string;
        tag: string;
        outcome: string; // Short summary
        badges: {
            value: string;
            label: string;
            description: string;
        }[];
    };
    media?: {
        website?: string;
        instagram?: string;
        images?: { url: string; caption: string }[];
    };
}

export const dictionary = {
    en: {
        nav: {
            home: 'Home',
            projects: 'Case Studies',
            career: 'Career',
            football: 'Football',
            about: 'About',
            contact: 'Book a Call',
        },
        hero: {
            headline: 'Senior Product Manager\nZero-to-One Specialist',
            subheadline: 'I\'ve built products from zero, scaled revenue past SAR 7.5M, and treated every budget like my own.',
            ctaPrimary: 'Schedule Intro Call',
            ctaSecondary: 'View Case Studies',
            location: 'Based in Riyadh, Saudi Arabia (Iqama Transferable)',
        },
        trust: {
            title: 'Trusted by leading tech companies',
        },
        bento: {
            revenue: {
                title: 'Revenue Strategy',
                desc: 'Pricing, packaging, and commercial validation. Contributed to a **SAR 7.5M annual revenue pipeline** at Fortude.',
            },
            ai: {
                title: 'AI Product Leadership',
                desc: 'Product discovery, use-case definition, and workflow integration. Designed **AI workflows driving SAR 675K new ARR**.',
            },
            data: {
                title: 'Data & Retention',
                desc: '**17% retention improvement** and **30% revenue growth** at Sling Mobility via closed-loop decision making.',
            },
            gtm: {
                title: 'GTM & CRO',
                desc: 'Scaled [Chonk Cookies](/projects/chonk-cookies-d2c) to **SAR 60K revenue**. **80% checkout conversion rate** via user experimentation.',
            },
        },
        footer: {
            rights: 'All rights reserved.',
            builtWith: 'Built by Thariq Hamad',
        },
        projects: {
            title: 'Case Studies',
            items: [
                {
                    slug: 'saas-growth-platform',
                    title: 'Driving SaaS Revenue Growth Through Pricing & GTM Optimization',
                    company: 'Fortude',
                    logo: getAssetPath('/logos/fortude.png'),
                    website: 'https://www.fortude.co',
                    market: 'B2B SaaS | Data & Analytics Platform',
                    timeframe: '2024–2025',
                    category: 'Marketing' as CaseStudyCategory,
                    impactScore: 9,
                    jobSlug: 'fortude-product-manager',
                    metrics: [
                        { label: 'New Revenue', value: 'SAR 675K' },
                        { label: 'ROAS', value: '1,800%' },
                        { label: 'Pipeline', value: 'SAR 7.5M' },
                    ],
                    context: {
                        goal: 'Optimize monetization and value articulation for Enterprise B2B SaaS.',
                        details: '[Fortude](https://www.fortude.io) operates in a competitive B2B SaaS analytics market. The core challenge was not demand generation, but **inefficient monetization** and **unclear value articulation**, leading to **stalled deals** and **underperforming acquisition spend** despite long sales cycles. Products include the AI assistant Charlie and testing tool [Fortest.io](https://www.fortest.io).',
                    },
                    role: {
                        details: 'Owned **product strategy for monetization** and growth initiatives, pricing validation, and cross-functional alignment. Worked closely with **Sales leadership** (deal insights), **Marketing** (GTM execution), and **Engineering** (pricing/gating).',
                    },
                    constraints: {
                        details: 'No immediate capacity for major feature development. Existing pricing was **tightly coupled to legacy contracts**. Sales needed **near-term revenue impact**. Required **optimizing existing assets** rather than building net-new capabilities.',
                    },
                    discovery: {
                        details: 'Insights from win/loss analysis and sales feedback revealed that buyers understood technical value but **not commercial ROI**. This indicated a **pricing and packaging problem**, not a feature gap.',
                    },
                    decisions: {
                        details: 'Reframed pricing around **business outcomes** rather than features to avoid complexity. Focused GTM spend only on **high-intent segments**. Prioritized **ROAS and deal velocity** over raw lead volume.',
                    },
                    execution: {
                        details: 'Partnered with sales to pilot **revised pricing narratives**. Collaborated with marketing on **targeted GTM experiments**. Enabled pricing changes with **minimal engineering effort** and iterated weekly based on deal feedback.',
                    },
                    outcomes: {
                        details: 'Generated **SAR 675K in net-new revenue**. Achieved **1,800% ROAS** on targeted campaigns. Contributed to a **SAR 7.5M projected annual revenue pipeline**. Improved alignment across product, sales, and marketing.',
                    },
                    learnings: {
                        repeat: 'Anchoring pricing decisions in **real deal data** reduced internal debate.',
                        change: 'Involve **customer success earlier** to refine expansion pricing opportunities.',
                    },
                    featured: {
                        headline: 'SAR 7.5M SaaS Revenue Pipeline Strategy',
                        tag: 'SaaS Monetization',
                        outcome: 'Restructured SaaS pricing and packaging based on deal data, driving a SAR 7.5M pipeline and closing SAR 675K in net-new ARR.',
                        badges: [
                            { value: '1,800% ROAS', label: 'Return on Ad Spend', description: 'Achieved via integrated LinkedIn employee advocacy and paid media.' },
                            { value: 'SAR 675K New Revenue', label: 'Direct Revenue', description: 'Generated from 4 high-value enterprise clients in a single campaign.' }
                        ]
                    },
                },
                {
                    slug: 'retention-engine',
                    title: 'Improving Retention Through a Real-Time Data Feedback Loop',
                    company: 'Sling Mobility',
                    logo: getAssetPath('/logos/sling.svg'),
                    website: 'https://www.slingmobility.com',
                    market: 'B2B Mobility & Fleet Platform | APAC & Emerging Markets',
                    timeframe: '2023–2024',
                    category: 'Software Development' as CaseStudyCategory,
                    impactScore: 8,
                    jobSlug: 'sling-mobility-product-lead',
                    metrics: [
                        { label: 'Retention', value: '17% Up' },
                        { label: 'Revenue', value: '30% Up' },
                        { label: 'Maintenance', value: 'Proactive' },
                    ],
                    context: {
                        goal: 'The business needed to move from reactive issue resolution to proactive value delivery.',
                        details: '[Sling Mobility](https://www.slingmobility.com) operated a B2B mobility platform where customer churn was being driven by unexpected downtime and delayed issue detection. While the platform collected large volumes of operational data, it was not being translated into timely, actionable insights, resulting in **customer frustration** and **preventable revenue loss**.',
                    },
                    role: {
                        details: 'Owned **product strategy for retention-focused initiatives**, definition of the **data feedback loop** and alerting model, and prioritization. Collaborated closely with Engineering on data pipelines, Operations on real-world failure patterns, and Leadership on **retention and revenue targets**.',
                    },
                    constraints: {
                        details: '**Legacy data architecture** with limited real-time capabilities. Operational teams already **stretched with reactive workloads**. Need to **demonstrate impact quickly** to justify further investment. This required incremental but high-leverage product decisions, rather than a full platform rebuild.',
                    },
                    discovery: {
                        details: 'Analysis of churn data and operational logs revealed a clear pattern: Most customer churn was preceded by **repeatable warning signals** that were visible in the data but not surfaced in time. The issue wasn’t lack of data — it was **lack of productised insight**.',
                    },
                    decisions: {
                        details: 'Focused on **early-warning indicators** instead of broad dashboards. **Closed the loop between data and action** by designing alerts to trigger operational workflows. Measured success via **retention and revenue**, ensuring vanity metrics like system usage did not drive prioritisation.',
                    },
                    execution: {
                        details: 'Partnered with engineering to enable **near–real-time data processing**. Worked with operations to define **actionable thresholds**. Iterated alert logic based on false positives. Gradually expanded coverage once impact was proven.',
                    },
                    outcomes: {
                        details: 'Achieved a **17% improvement in retention**. Drove a **30% increase in revenue** through reduced churn and higher account longevity. Shifted the organisation from **reactive issue handling to proactive customer value delivery**.',
                    },
                    learnings: {
                        repeat: 'Focusing on a **small number of high-confidence signals** accelerated trust and adoption.',
                        change: 'I would **invest earlier in self-serve visibility** for customers alongside internal alerts.',
                    },
                    featured: {
                        headline: 'Data-Driven Retention Loop for Mobility',
                        tag: 'Product Analytics & Retention',
                        outcome: 'Built a real-time data feedback loop that increased customer retention by 17% and revenue by 30%.',
                        badges: [
                            { value: '+17% Retention', label: 'User Retention', description: 'Achieved by identifying and fixing drop-off points in the user journey.' },
                            { value: '+30% Revenue', label: 'Revenue Growth', description: 'Driven by operational optimizations and dynamic pricing experiments.' }
                        ]
                    },
                },
                {
                    slug: 'foundership-product',
                    title: 'Building and Monetizing a Sports Analytics Platform From Zero to Paid Adoption',
                    company: 'FieldR',
                    logo: getAssetPath('/logos/fieldr.png'),
                    website: 'https://www.fieldr.lk',
                    market: 'Sports Analytics & Community Platform | 0→1 Foundership',
                    timeframe: '2019–2025',
                    category: 'Software Development' as CaseStudyCategory,
                    impactScore: 10,
                    jobSlug: 'fieldr-product-lead',
                    metrics: [
                        { label: 'Product Launch', value: '0 → 1' },
                        { label: 'Paid Conversion', value: '75%' },
                        { label: 'Engagement', value: 'Strong' },
                    ],
                    context: {
                        goal: 'FieldR was created to serve athletes and sports communities that lacked accessible, actionable performance insights.',
                        details: 'The challenge was twofold: Validate whether users would **consistently use analytics tools** and prove whether they would **pay for them**. This required **tight feedback loops** and **disciplined scope control**.',
                    },
                    role: {
                        details: 'As a **founder-level product owner**, I owned **product vision, roadmap, and prioritization**. Led **user discovery** and validation. Defined the **monetization strategy** and worked directly with engineering and early adopters. This was **full end-to-end ownership**.',
                    },
                    constraints: {
                        details: '**Limited resources** and no margin for overbuilding. Early users had **varied expectations** and skill levels. Needed to **monetize without alienating the community**. Every decision had to balance **value delivery and sustainability**.',
                    },
                    discovery: {
                        details: 'Early user interviews and usage data revealed: Users valued **simple, comparative insights** far more than complex analytics. This challenged the initial assumption that “**more data = more value**”.',
                    },
                    decisions: {
                        details: 'Prioritized **clarity over analytical depth** by avoiding advanced metrics early. Introduced **monetization only after habit formation**, delaying paywalls until engagement stabilized. Tied paid features to **progression and performance improvement**.',
                    },
                    execution: {
                        details: 'Released a **lean MVP** focused on core performance insights. **Iterated rapidly** based on community feedback. Introduced **tiered pricing** aligned with user maturity. Continuously tested onboarding and upgrade flows.',
                    },
                    outcomes: {
                        details: 'Achieved **75% conversion** from free to paid users. Built a **loyal early user base**. Validated both **product-market fit** and **monetization viability**.',
                    },
                    learnings: {
                        repeat: '**Resisting feature bloat** allowed faster validation and stronger trust.',
                        change: 'I would **invest earlier in partnerships** to accelerate user acquisition.',
                    },
                    featured: {
                        headline: '0-1 Product Scale & Acquisition Strategy',
                        tag: 'Founder-Led Growth',
                        outcome: 'Designed, built, and launched Sri Lanka\'s first cricket analytics platform from zero to 2,800+ paid users.',
                        badges: [
                            { value: '75% Conversion', label: 'Free-to-Paid Conversion', description: 'Converted 75% of active users to paid subscriptions through disciplined, habit-first monetization.' },
                            { value: 'SAR 20K Pre-Seed', label: 'Seed Funding Raised', description: 'Secured pre-seed funding and expanded to international markets including Australia.' }
                        ]
                    },
                },
                {
                    slug: 'chonk-cookies-d2c',
                    title: 'Chonk Cookies — Launching a D2C Brand from Zero-to-One',
                    company: 'Chonk Cookies',
                    logo: '',
                    website: 'https://www.chonk.lk',
                    market: 'D2C Food & Beverage | Social Commerce',
                    timeframe: 'Mar 2024 – Dec 2025',
                    category: 'Marketing' as CaseStudyCategory,
                    impactScore: 8,
                    jobSlug: '',
                    metrics: [
                        { label: 'ARR', value: 'SAR 30K' },
                        { label: 'Channel', value: '100% Digital' },
                        { label: 'Retention', value: 'High Repeat' },
                    ],
                    context: {
                        goal: 'Test my ability to identify a global food trend and capture a local market with zero traditional advertising budget.',
                        details: 'I wanted to build a premium Direct-to-Consumer (D2C) brand using only social commerce and data-driven optimization. The challenge was to **create market demand** and **build a loyal customer base** without any traditional advertising spend.',
                    },
                    role: {
                        details: 'As founder, I owned **end-to-end brand strategy**, from market positioning to digital operations. Managed all aspects of **performance marketing**, **e-commerce**, and **community building**.',
                    },
                    constraints: {
                        details: '**Zero traditional advertising budget**. Reliance on organic reach and social commerce. Need to compete with established dessert brands. Required **high visual appeal** to drive Instagram-first sales.',
                    },
                    discovery: {
                        details: 'Identified a gap in the premium dessert market. Research showed that **"Instagrammable" experiences** drove significant organic reach. Keyword-based content strategy could boost visibility across social algorithms and AI-driven search engines.',
                    },
                    decisions: {
                        details: 'Positioned Chonk as a **high-end, "Instagrammable" experience**. Adopted a **100% digital-first approach** with Instagram as the primary sales engine. Developed keyword-based content strategy for algorithm visibility.',
                    },
                    execution: {
                        details: '**Performance Marketing:** Executed targeted Instagram ad campaigns through Meta Business Suite for pop-up events and product drops.\n\n**Conversion Optimization:** Used Microsoft Clarity and Google Analytics to map user flows, identifying and fixing friction points in mobile checkout.\n\n**Digital Operations:** Built end-to-end digital ecosystem from e-commerce storefront to automated customer communications.',
                    },
                    outcomes: {
                        details: 'Achieved **SAR 30,000 Annual Recurring Revenue (ARR)** within the first year. Built a loyal community with **high repeat-customer rate** through active direct engagement. Successfully transitioned digital interest into **physical sales at high-traffic pop-up stalls** across Colombo. Selected as **[Top 28 finalist](https://ventureengine.lk)** at [Lanka Angel Network](https://www.lankaaangelnetwork.com)\'s Venture Engine pitch competition. Follow our journey on [Instagram @chonk.sl](https://www.instagram.com/chonk.sl/).',
                    },
                    learnings: {
                        repeat: '**Community-first approach** created sustainable organic growth without paid advertising dependency.',
                        change: 'Would invest earlier in **automated fulfillment** to scale physical distribution faster.',
                    },
                    featured: {
                        headline: 'D2C Brand Launch with Zero Ad Budget',
                        tag: 'Social Commerce',
                        outcome: 'Built a premium dessert brand using only social commerce and data-driven optimization.',
                        badges: [
                            { value: 'SAR 30K ARR', label: 'Annual Revenue', description: 'Achieved within the first year through social commerce.' },
                            { value: 'High Retention', label: 'Repeat Customers', description: 'Built loyal community through direct engagement.' }
                        ]
                    },
                    media: {
                        website: 'https://www.chonk.lk',
                        instagram: 'https://www.instagram.com/chonk.sl/',
                        images: [
                            { url: 'https://www.instagram.com/p/DNNZnoaRfKS/', caption: 'Pitching at Venture Engine 2024' }
                        ]
                    },
                },
                {
                    slug: 'ev-battery-ecosystem',
                    title: "Building Sri Lanka's First EV Battery Swapping Ecosystem",
                    company: 'Sling Mobility',
                    logo: getAssetPath('/logos/sling.svg'),
                    website: 'https://www.slingmobility.com',
                    market: 'EV Mobility & Hardware-Software Platform | B2B2C',
                    timeframe: '2021–2024',
                    category: 'Software Development' as CaseStudyCategory,
                    impactScore: 9,
                    jobSlug: 'sling-mobility-product-lead',
                    metrics: [
                        { label: 'Battery Range', value: '60→100KM' },
                        { label: 'Battery Lifetime', value: '2× Longer' },
                        { label: 'Swap Time', value: '15 Seconds' },
                    ],
                    context: {
                        goal: "Design and build the infrastructure, software, and hardware for Sri Lanka's first EV battery swapping network.",
                        details: 'When [Sling Mobility](https://www.slingmobility.com) set out to create a last-mile EV delivery network in Sri Lanka, there was **no battery swapping infrastructure in the country**. Riders would run out of charge mid-route, battery degradation was rapid, and there was no data-driven visibility into vehicle or battery health. The product challenge was to design an **end-to-end hardware-software ecosystem** — cabinets, apps, sensors, and a command centre — entirely from scratch.',
                    },
                    role: {
                        details: "As the **first employee and sole Product Lead**, I owned every layer: hardware design spec, software architecture, mobile app, command centre, and operational SOPs. I liaised with the country's largest electrical product producer for cabinet manufacturing, coordinated with an Indian sister company for battery production, and led a 34-person team spanning software developers, mechanics, and riders.",
                    },
                    constraints: {
                        details: '**No existing reference architecture** — battery swapping at this scale had never been attempted in Sri Lanka. **Severe terrain variability** across the island required custom battery and motor configurations. **Limited engineering budget** demanded that every hardware investment be validated with data before scaling. Rider behaviour was unpredictable, making software design for real-world conditions especially difficult.',
                    },
                    discovery: {
                        details: 'I conducted deep research into electricity consumption patterns, fuel economics, bike wear and tear, terrain elevation challenges, and electronic component failure modes. Rider interviews revealed that **range anxiety** and **unplanned downtime** were the two biggest trust-killers. Data from early deployments showed that most battery degradation was caused by **irregular charging cycles**, not battery age.',
                    },
                    decisions: {
                        details: 'Built an **automated lock/unlock cabinet system** that identifies the rider, the discharged battery, and the nearest fully-charged battery — completing a swap in **15 seconds**. Designed a **command centre** to monitor vehicle movements, battery voltage, motor health, and ride routes in real time. Created a **revenue-share cabinet model** for roadside garages to expand the network without capital spend. Launched **battery tokens** enabling the public to fund new-gen batteries and receive revenue shares — funding 100 batteries through community capital.',
                    },
                    execution: {
                        details: "Designed Sri Lanka's first battery swapping cabinet in partnership with the country's largest electrical product manufacturer. Implemented a **digital tracking infrastructure** for every bike and hardware component, with routine service alerts. Built a **rider-facing navigation feature** that tracked battery voltage and directed riders to the nearest swap station before power cut-out. Rolled out an **anti-theft battery system** with remote subscription-based shutoff. Deployed a **rider incentive scheme** tied to ride streaks and performance data.",
                    },
                    outcomes: {
                        details: 'Extended battery range from **60KM to 100KM** per charge through command-centre optimization of charging cycles. Doubled battery lifetime from **2 to 4 years**, dramatically reducing hardware replacement costs. Grew daily ride counts from **25 to 62 per rider per day**. Reduced roadside assistance requests by **75%**. Launched **3 battery swapping stations** with a revenue-share model that grew network revenue by **30%**. The battery token programme funded **100 new-generation batteries** through community investment.',
                    },
                    learnings: {
                        repeat: 'Starting with a **data-first command centre** before scaling hardware was the right call — it allowed us to optimize before committing capital.',
                        change: 'I would invest earlier in **predictive battery failure models** to reduce the reactive maintenance burden on the operations team.',
                    },
                    featured: {
                        headline: "Sri Lanka's First EV Battery Swapping Network",
                        tag: 'Hardware-Software Co-Creation',
                        outcome: 'Designed and built an end-to-end EV battery swapping ecosystem — from cabinet hardware to command-centre software — doubling battery life and tripling daily ride counts.',
                        badges: [
                            { value: '60→100KM Range', label: 'Battery Range Extended', description: 'Achieved via command-centre data optimization of charging cycles across the fleet.' },
                            { value: '+30% Revenue', label: 'Network Revenue Growth', description: 'Driven by revenue-share battery swap cabinets placed in 10 garages and validated low-income households.' }
                        ]
                    },
                },
                {
                    slug: 'charlie-ai-product-strategy',
                    title: 'From Accurate to Adopted: Turning Charlie AI into a Product People Trust',
                    company: 'Fortude',
                    logo: getAssetPath('/logos/fortude.png'),
                    website: 'https://www.fortude.co',
                    market: 'Enterprise AI | B2B SaaS | Infor M3 ERP',
                    timeframe: '2024–2025',
                    category: 'Software Development' as CaseStudyCategory,
                    impactScore: 8,
                    jobSlug: 'fortude-product-manager',
                    metrics: [
                        { label: 'Usage Growth', value: '+75%' },
                        { label: 'Enterprise Pilot', value: 'Toyota SL' },
                        { label: 'Strategy Shift', value: 'Accuracy→Clarity' },
                    ],
                    context: {
                        goal: "Solve the adoption failure of an AI Answer Assistant by shifting the product strategy from technical accuracy to user-perceived trustworthiness.",
                        details: "[Fortude](https://www.fortude.co)'s Charlie AI Answer Assistant was designed to help Infor M3 ERP users query complex data through natural language. The product was technically functional, but **early adoption was stagnant**. Users were not abandoning it because it lacked features — they were abandoning it because they **didn't trust its responses**. When an AI assistant confidently delivers a wrong answer in an enterprise context, it doesn't get a second chance.",
                    },
                    role: {
                        details: "I **owned the product strategy for Charlie AI**, working directly with the engineering team to redefine what 'good' looked like for the product. I facilitated discovery sessions with early adopters, defined the new validation architecture, and drove the roadmap from the strategy pivot through to a standalone Insight Assistant built on Charlie's architecture.",
                    },
                    constraints: {
                        details: '**No ability to retrain the underlying model** — the pivot had to be achievable through product-layer changes, not ML infrastructure work. Enterprise customers have **zero tolerance for hallucinations**, meaning even a small error rate was catastrophic for trust. We had **limited early adopters** for testing, requiring every iteration to be deliberate and well-measured.',
                    },
                    discovery: {
                        details: "User interviews with early adopters revealed a clear pattern: it wasn't that Charlie was frequently wrong — it was that users **couldn't tell when to trust it**. An answer delivered with identical confidence regardless of data quality created anxiety. The insight: **trust is a product feature**, not an engineering metric. Users needed clarity about *why* a response was given, not just *what* the response was.",
                    },
                    decisions: {
                        details: 'Shifted the product strategy from **"maximize accuracy"** to **"maximize response clarity"**. The core decision was to implement a **validation agent** that checks data credibility before any response is delivered to the end user. Responses are only surfaced when the agent can confirm the supporting data is reliable — if not, the system explicitly flags the uncertainty rather than guessing. This was a deliberate trade-off: **slightly fewer answers, but dramatically higher trust**.',
                    },
                    execution: {
                        details: "Worked with engineering to design and deploy the **credibility validation agent** as a pre-response layer in Charlie's architecture. Redesigned the **response format** to surface source context alongside answers, giving users auditability. Iterated the feature with the early adopter cohort using usage frequency and session depth as trust proxies. Once adoption stabilized, ideated and structured a roadmap to launch a **standalone Insight Assistant** tool leveraging Charlie's architecture — positioning it as a general-purpose enterprise knowledge layer.",
                    },
                    outcomes: {
                        details: 'Achieved a **75% increase in usage** among early adopters following the strategy pivot and agent deployment. Signed up **Toyota Sri Lanka** to evaluate the standalone Insight Assistant for automating their manual service job tracking processes. Created a clear pathway to extend Charlie\'s architecture into new verticals beyond Infor M3, establishing a **platform strategy** rather than a single-product roadmap.',
                    },
                    learnings: {
                        repeat: 'The decision to **slow down responses** in exchange for higher confidence was initially controversial internally — but it was exactly the right call. Enterprise users would rather wait for a trustworthy answer than get an instant uncertain one.',
                        change: 'I would involve **customer success teams earlier** in the discovery process — they had the most direct signal on where user trust was breaking down.',
                    },
                    featured: {
                        headline: 'AI Trust as a Product Strategy',
                        tag: 'Enterprise AI Product',
                        outcome: 'Pivoted Charlie AI from an accuracy-focused assistant to a trust-centred product, growing adoption by 75% and unlocking a Toyota Sri Lanka enterprise pilot.',
                        badges: [
                            { value: '+75% Usage', label: 'Early Adopter Growth', description: 'Achieved by implementing a credibility validation agent that users could understand and trust.' },
                            { value: 'Toyota SL Pilot', label: 'Enterprise Expansion', description: 'Signed up to evaluate the standalone Insight Assistant for manual process automation.' }
                        ]
                    },
                },
                {
                    slug: 'motion-miracles-gtm',
                    title: 'From Creative Studio to Revenue Engine: 23 Game Launches & a FinTech MVP',
                    company: 'Motion Miracles',
                    logo: getAssetPath('/logos/motion-miracles.png'),
                    website: 'https://www.motionmiracles.com',
                    market: 'Mobile Gaming & FinTech | B2C & B2B',
                    timeframe: 'Jan 2021 – May 2021',
                    category: 'Ops' as CaseStudyCategory,
                    impactScore: 7,
                    jobSlug: 'motion-miracles-pm',
                    metrics: [
                        { label: 'Games Shipped', value: '23' },
                        { label: 'New Revenue', value: 'SAR 200K' },
                        { label: 'Products', value: '2 Types' },
                    ],
                    context: {
                        goal: 'Transform delivery visibility and revenue capture across a multi-vertical creative studio simultaneously managing game publishing and a FinTech product launch.',
                        details: '[Motion Miracles](https://www.motionmiracles.com) operated across animation, game development, and digital services. When I joined as Project Manager, the studio had **strong creative output but weak delivery governance** — projects slipped, resource allocation was opaque, and there was no unified view of financial performance across teams. At the same time, the organization was being asked to consult on the launch of a **BNPL FinTech product**, an entirely new domain requiring user research, KYC process design, and structured project management.',
                    },
                    role: {
                        details: 'I started as Project Manager but quickly took on the **Operations Manager** responsibilities for the entire organization. I owned resource planning, financial tracking, KPI design for creative teams, and managed cross-team delivery. Simultaneously, I led the project management for the FinTech product consultation — including the KYC process design and user research oversight.',
                    },
                    constraints: {
                        details: '**Highly varied workstreams** — animation, game development, and services teams operate on fundamentally different timelines and success metrics. The FinTech consultation was a **new domain with no internal precedent**. Resource contention between the studio\'s own projects and the external consultation required careful prioritization. The entire tenure lasted **5 months**, demanding rapid impact.',
                    },
                    discovery: {
                        details: 'A quick audit of delivery processes revealed that **games were being completed but not strategically published** — they were shipped to whichever publisher was available, rather than matched to publishers with the best fit for each game\'s genre and audience. Revenue leakage was significant. For the FinTech product, user research revealed that the target demographic had **significant trust concerns** about BNPL products, making KYC UX design critical to conversion.',
                    },
                    decisions: {
                        details: 'Built a **financial tracking tool** to give leadership real-time visibility into revenue, cost allocation, and project margins across all three departments. Implemented **KPI frameworks tailored to each creative team** — avoiding the mistake of applying the same metrics to animation, game dev, and services. For the FinTech product, structured a **KYC process** that balanced regulatory compliance with minimal user friction, informed by direct user research.',
                    },
                    execution: {
                        details: 'Managed the **publisher selection and submission pipeline** for 23 hyper-casual games, matching each title to the most appropriate publisher based on genre, audience, and commercial terms. Built out **delivery dashboards** that gave leadership a clear view of project risks, timelines, and resource utilization. For the FinTech product: created the full project plan, tracked milestones, designed the KYC process flow, and coordinated the user research sessions to validate feature decisions.',
                    },
                    outcomes: {
                        details: 'Launched **23 hyper-casual games** through multiple publishers, generating **SAR 200K in new revenue** within the tenure period. Delivered the **FinTech BNPL MVP** with a structured KYC process informed by user research. Established the organization\'s first unified **financial tracking and KPI dashboard**, giving the board clear visibility into performance across all departments for the first time.',
                    },
                    learnings: {
                        repeat: 'Treating **game publishing as a distribution strategy** (matching title to publisher) rather than a submission process was the key to unlocking the revenue uplift.',
                        change: 'I would push for a **longer engagement** — 5 months was enough to build the foundation, but not enough to see the full impact of the systems I put in place.',
                    },
                    featured: {
                        headline: 'SAR 200K in 5 Months: Games & FinTech',
                        tag: 'Cross-Vertical PM',
                        outcome: 'Built delivery infrastructure and publisher strategy across a creative studio, shipping 23 games and SAR 200K new revenue while simultaneously launching a FinTech product.',
                        badges: [
                            { value: '23 Games', label: 'Games Launched', description: 'Shipped through strategic publisher selection across multiple game genres.' },
                            { value: 'SAR 200K', label: 'New Revenue', description: 'Generated through optimized publisher relationships and game portfolio strategy.' }
                        ]
                    },
                },
                {
                    slug: 'fieldr-origin-to-international',
                    title: "From a University Project to Sri Lanka's First Cricket Analytics Platform",
                    company: 'FieldR',
                    logo: getAssetPath('/logos/fieldr.png'),
                    website: 'https://www.fieldr.lk',
                    market: 'Sports Analytics SaaS | Grassroots to International',
                    timeframe: '2019–2021',
                    category: 'Marketing' as CaseStudyCategory,
                    impactScore: 9,
                    jobSlug: 'fieldr-product-lead',
                    metrics: [
                        { label: 'Market Entry', value: 'Grassroots First' },
                        { label: 'International', value: 'Australia (2 Clubs)' },
                        { label: 'Revenue Streams', value: '2 Launched' },
                    ],
                    context: {
                        goal: "Validate, launch, and expand Sri Lanka's first cricket analytics platform — starting from a university research project with no budget, no team, and no existing market.",
                        details: "[FieldR](https://www.fieldr.lk) began as a final year research project exploring cricket performance data. When several cricket coaches from clubs registered under Sri Lanka Cricket reviewed the project, they provided **Letters of Intent** committing to use the application and urged commercialization. In 2021, the project secured **SAR 20K in pre-seed funding**. The challenge then became: how do you build a product business in a market that has never used data analytics before, with a small team, limited budget, and no clear GTM playbook?",
                    },
                    role: {
                        details: 'As **Co-Founder and Product Lead**, I owned everything: product vision, UI design, user research, GTM strategy, monetization, and international expansion. I led a team of 12 across development, marketing, and operations. I also served as the primary commercial relationship holder with Sri Lanka Cricket coaches, scorers, and club administrators.',
                    },
                    constraints: {
                        details: '**Zero precedent** — no cricket analytics product existed in Sri Lanka, meaning there was no market education to build on and no comparable pricing to reference. **Coaches and scorers were non-technical users**, so UX had to be exceptionally intuitive. **Budget constraints** meant every GTM experiment had to be low-cost and high-feedback. The risk of over-building was real — adding features before validating usage patterns would have killed the product.',
                    },
                    discovery: {
                        details: 'Conducted direct user interviews and **A/B testing sessions** with coaches and scorers registered under Sri Lanka Cricket. Identified **30+ specific data points** that coaches cared about — not generic statistics, but performance indicators tied to real coaching decisions (e.g. fielding position heat maps, scoring rate by over range). Discovery also revealed that **grassroots club and school cricket** was far more underserved than national-level cricket, making it the right beachhead market.',
                    },
                    decisions: {
                        details: 'Adopted a **schools and grassroots GTM** — going bottom-up rather than top-down through national boards. This built a larger, more loyal user base before approaching professional clubs. Introduced a **digital scoresheet** as a second, standalone revenue stream — giving everyday club players a reason to engage with FieldR even if they were not interested in advanced analytics. Expanded to **Australia** in 2021, signing two clubs from the Sri Lankan diaspora community as the first international users.',
                    },
                    execution: {
                        details: 'Designed all UIs based on coach and scorer feedback, validated through **A/B testing** before final implementation. Built the **scoring and analytics data architecture** to capture 30+ performance metrics per game. Launched the **digital scoresheet** feature as a low-friction entry point for casual players. Executed the Australia expansion through community outreach to diaspora cricket clubs, securing two club sign-ups for the fielding performance analysis module.',
                    },
                    outcomes: {
                        details: "Grew FieldR from a university project to **Sri Lanka's first cricket analytics SaaS platform**. Achieved **75% free-to-paid conversion** among active users. Expanded internationally to **Australia** within two years of launch. Established **two distinct revenue streams** (analytics subscriptions and digital scoresheet). Secured **SAR 20K pre-seed funding** based on traction and coach adoption.",
                    },
                    learnings: {
                        repeat: 'Starting at the **grassroots level** built a far more loyal and vocal user base than a top-down institutional approach would have. Coaches became advocates who recruited other coaches.',
                        change: 'I would invest earlier in **B2B partnerships with cricket academies** — they had the scale and budget to accelerate paid adoption much faster than individual coaches.',
                    },
                    featured: {
                        headline: 'Grassroots-to-International Cricket Analytics',
                        tag: 'Founder-Led GTM',
                        outcome: "Took a university research project to Sri Lanka's first cricket analytics platform, achieving international reach in Australia and a 75% free-to-paid conversion rate.",
                        badges: [
                            { value: 'Australia Expansion', label: 'International Market', description: 'Signed 2 Australian clubs from the diaspora community for fielding performance analysis.' },
                            { value: '2 Revenue Streams', label: 'Monetization Model', description: 'Analytics subscriptions plus a standalone digital scoresheet for everyday players.' }
                        ]
                    },
                },
            ] as CaseStudy[],
        },
        about: {
            title: 'About Me',
            narrative: 'Senior Product Leader with ownership mindset. Proven track record of leading distributed teams across USA, India, and Sri Lanka. Expert in stakeholder management and executing under ambiguity.',
            toolsTitle: 'Tools & Stack',
        },
        career: {
            title: 'Career Journey',
            subtitle: 'From enterprise systems to founding products',
            jobs: [
                {
                    slug: 'fortude-product-manager',
                    title: 'Product Manager',
                    company: 'Fortude',
                    logo: getAssetPath('/logos/fortude.png'),
                    website: 'https://www.fortude.co',
                    location: 'Colombo, Sri Lanka · Hybrid',
                    dateRange: 'Oct 2024 – Jan 2026',
                    summary: 'Building market traction for AI products through product marketing and UI redesign.',
                    description: `When I joined Fortude, the AI assistant 'Charlie' and the testing tool 'Fortest.io' were technically sound but lacked market traction. I stepped into a Product Marketing role to build their independent identities and social channels, moving them away from being seen as just "internal tools."

**Key Outcomes:**
• Built a **SAR 7.5M sales pipeline** from scratch by activating the European market through high-engagement LinkedIn webinars
• Secured **SAR 675K in immediate sign-ups** by focusing on how AI could solve specific pain points for Infor M3 ERP users
• Led the **UI redesign for Charlie** to make it feel native to Microsoft Teams, which was the turning point for user adoption`,
                    skills: ['Stakeholder Management', 'Product Roadmap Management', 'Product Strategy', 'AI Products', 'Enterprise SaaS', 'Revenue Growth'],
                    caseStudyIds: ['saas-growth-platform', 'charlie-ai-product-strategy'],
                } as Job,
                {
                    slug: 'fieldr-product-lead',
                    title: 'Product Lead (Co-Founder)',
                    company: 'FieldR',
                    logo: getAssetPath('/logos/fieldr.png'),
                    website: 'https://www.fieldr.lk',
                    location: 'Colombo · Remote',
                    dateRange: 'Jul 2019 – May 2025',
                    summary: "Sri Lanka's first cricket analytics platform. My 'Founder's MBA' in building products from zero.",
                    description: `As a co-founder, I took FieldR from a blank page to Sri Lanka's first cricket analytics platform. This was my "Founder's MBA"—it taught me that an imperfect product in the hands of users is better than a perfect one that never ships.

**Key Outcomes:**
• Achieved **2,823 paid users** from 3,568 registrations by ruthlessly prioritizing features that coaches actually asked for in discovery sessions
• Secured **SAR 20K in seed funding** and managed the entire roadmap across web and mobile
• Designed the **data architecture to capture 32+ performance metrics**, turning complex sports data into simple, actionable insights
• Expanded internationally to **Australia** in 2021, signing up 2 clubs for the fielding performance analysis module`,
                    skills: ['Product Leadership', 'Product Strategy', 'Go-to-Market Strategy', 'Product-Led Growth', 'Monetization Strategy', 'Founder Mindset'],
                    caseStudyIds: ['foundership-product', 'fieldr-origin-to-international'],
                } as Job,
                {
                    slug: 'sling-mobility-product-lead',
                    title: 'Product Lead - Software & Hardware',
                    company: 'Sling Mobility',
                    logo: getAssetPath('/logos/sling.svg'),
                    website: 'https://www.slingmobility.com',
                    location: 'Colombo, Sri Lanka · On-site',
                    dateRange: 'Jun 2021 – May 2024',
                    summary: 'First employee. Built the product, team, and physical operations for EV mobility.',
                    description: `I was the first employee at Sling, which meant I had to build the product, the team, and the physical operations with no supervision. I managed a diverse team of 34, ranging from software developers to mechanics and a fleet of 20 riders.

**Key Outcomes:**
• Launched **Sri Lanka's first battery-swapping architecture**, growing daily ride counts from **25 to 62 per rider per day**
• Reduced rider call-backs to tech office by **75%** by tracking specific app behaviors and simplifying the UX
• Extended battery range from **60KM to 100KM** and battery lifetime from **2 to 4 years** via command-centre data optimization
• Spearheaded a **pilot with Uber Sri Lanka** and secured **USAID funding** to launch the first two-wheeler EVs on their platform`,
                    skills: ['Battery Swapping Network', 'Cross-functional Team Leadership', 'Platform Product Management', 'Data-driven Decision Making', 'Operational Excellence'],
                    caseStudyIds: ['retention-engine', 'ev-battery-ecosystem'],
                } as Job,
                {
                    slug: 'motion-miracles-pm',
                    title: 'Project Manager',
                    company: 'Motion Miracles',
                    logo: getAssetPath('/logos/motion-miracles.png'),
                    website: 'https://www.motionmiracles.com',
                    location: 'Colombo, Sri Lanka · Hybrid',
                    dateRange: 'Jan 2021 – May 2021',
                    summary: 'Managing creative delivery across animation, game development, and service teams.',
                    description: `In this role, I stepped into the creative world to manage delivery across animation, game development, and service teams. It was a fast-paced environment where I had to align very different creative workstreams with strict quarterly KPIs.

**Key Focus Areas:**
• **Visibility:** Built out delivery tracking dashboards from scratch to give leadership a clear view of project risks and progress
• **Resource Strategy:** Owned the financial tracking and cost analysis, ensuring efficient utilization of developers and artists during global expansion planning`,
                    skills: ['Operational Planning', 'Delivery Management', 'Cross-functional Coordination', 'Budget Management', 'KPI Tracking'],
                    caseStudyIds: ['motion-miracles-gtm'],
                } as Job,
                {
                    slug: 'goodlifex-program-associate',
                    title: 'Program Associate',
                    company: 'GOOD LIFE X',
                    logo: getAssetPath('/logos/goodlifex.png'),
                    website: 'https://www.goodlifex.com',
                    location: 'Colombo, Sri Lanka · Remote',
                    dateRange: 'Aug 2020 – Dec 2020',
                    summary: 'Helping founders navigate incubation and hit their growth targets.',
                    description: `This was a contract role where I sat on the other side of the table, helping other founders navigate the incubation process. I was responsible for keeping startups accountable to their own growth targets.

**Key Focus Areas:**
• **Founder Coaching:** Worked directly with founders on pitch decks and business presentations, helping them simplify value propositions for investors
• **Milestone Tracking:** Managed progress dashboards for the entire cohort, ensuring every startup met weekly KPIs to drive actual business outcomes`,
                    skills: ['Stakeholder Engagement', 'Performance Reporting', 'Program Management', 'Process Improvement', 'KPI Tracking'],
                    caseStudyIds: [],
                } as Job,
                {
                    slug: 'win-authority-pm',
                    title: 'Project Manager',
                    company: 'Win Authority Innovatives',
                    logo: '',
                    website: '',
                    location: 'Wyoming, USA · Remote',
                    dateRange: 'Aug 2018 – Dec 2019',
                    summary: 'First experience managing multiple SaaS projects in a high-pressure startup.',
                    description: `This was my first experience managing multiple SaaS and web projects simultaneously in a high-pressure startup setting. I learned how to balance client expectations with a small, 4-member dev team.

**Key Focus Areas:**
• **Delivery Record:** Personally led delivery of 8 separate projects, all within tight budgets and timelines
• **Business Development:** Supported growth by pitching to prospective clients and helping define pricing and resource plans to stay profitable`,
                    skills: ['Business Development Support', 'Pricing Strategy', 'Project Management', 'Resource Planning', 'Client Engagement', 'SaaS Delivery'],
                    caseStudyIds: [],
                } as Job,
                {
                    slug: 'millenniumit-pm',
                    title: 'Project Manager (Intern)',
                    company: 'MillenniumIT',
                    logo: getAssetPath('/logos/millenniumit.svg'),
                    website: 'https://www.mitesp.com',
                    location: 'Sri Lanka · On-site',
                    dateRange: 'Jul 2017 – Jul 2018',
                    summary: 'Enterprise banking and capital markets. A deep-end introduction to regulated systems.',
                    description: `My entry into the industry was in the high-stakes world of enterprise banking and capital markets. It was a "deep end" introduction to regulated systems and cross-border coordination.

**Key Focus Areas:**
• **Global Coordination:** Helped manage communication and delivery across teams in Sri Lanka, India, Bangladesh, and the UK
• **Risk Management:** Supporting senior leadership taught me how to identify and mitigate delivery risks in large-scale financial systems with zero room for error`,
                    skills: ['Stakeholder Management', 'Delivery Governance', 'Enterprise Software Delivery', 'Financial Services Systems', 'Risk Management'],
                    caseStudyIds: [],
                } as Job,
                {
                    slug: 'novitat-media-producer',
                    title: 'Video Producer & Director',
                    company: 'Novitat Media',
                    logo: '',
                    website: '',
                    location: 'Sri Lanka',
                    dateRange: 'Feb 2017 – Jun 2017',
                    summary: 'Led end-to-end production of branded digital video content.',
                    description: `Led end-to-end production of branded digital video content for a food media platform.

**Key Focus Areas:**
• Directed production, post-production, and creative collaboration aligned with brand goals`,
                    skills: ['Video Production', 'Creative Direction', 'Brand Collaboration'],
                    caseStudyIds: [],
                } as Job,
            ] as Job[],
        },
    },
    ar: {
        nav: {
            home: 'الرئيسية',
            projects: 'دراسات الحالة',
            career: 'المسيرة المهنية',
            football: 'كرة القدم',
            about: 'عني',
            contact: 'احجز مكالمة',
        },
        hero: {
            headline: 'مدير منتج أول\nتوسيع منصات البرمجيات والبيانات',
            subheadline: 'أكثر من 8 سنوات في زيادة الإيرادات والنمو لفرق عالمية موزعة.',
            ctaPrimary: 'احجز مكالمة تعارف',
            ctaSecondary: 'عرض دراسات الحالة',
            location: 'مقرها الرياض، المملكة العربية السعودية (إقامة قابلة للتحويل)',
        },
        trust: {
            title: 'موثوق به لدى شركات التكنولوجيا الرائدة',
        },
        bento: {
            revenue: {
                title: 'استراتيجية الإيرادات',
                desc: 'التسعير والتعبئة والتحقق التجاري. المساهمة في **خط إيرادات سنوي بقيمة 7.5 مليون ريال** في Fortude.',
            },
            ai: {
                title: 'قيادة منتجات الذكاء الاصطناعي',
                desc: 'اكتشاف المنتج وتحديد حالات الاستخدام وتكامل سير العمل.',
            },
            data: {
                title: 'البيانات والاحتفاظ',
                desc: 'تحسين الاحتفاظ بنسبة **17%** ونمو الإيرادات بنسبة **30%** في Sling Mobility.',
            },
            gtm: {
                title: 'اكتشاف السوق وتحسين التحويل',
                desc: 'توسيع Chonk Cookies إلى **إيرادات 60 ألف ريال**. **معدل تحويل 80%** عبر التجارب.',
            },
        },
        footer: {
            rights: 'جميع الحقوق محفوظة.',
            builtWith: 'تم البناء بواسطة طارق حماد',
        },
        projects: {
            title: 'دراسات الحالة',
            items: [
                // Placeholder for Arabic translations of Case Studies - using English structure but localized usage would be ideal.
                // For simplicity and to avoid huge payload, I will mirror the English content structure but with Arabic text where possible or keep English for now as "Translation Pending" is better than broken code.
                // User requested "Arabic content should be a translated equivalent". I will translate key fields.
                {
                    slug: 'saas-growth-platform',
                    title: 'توسيع إيرادات SaaS للمؤسسات',
                    company: 'Fortude',
                    logo: getAssetPath('/logos/fortude.png'),
                    website: 'https://www.fortude.co',
                    market: 'الشركات (B2B)',
                    timeframe: '2021 - 2023',
                    category: 'Marketing' as CaseStudyCategory,
                    impactScore: 9,
                    jobSlug: 'fortude-product-manager',
                    metrics: [
                        { label: 'إيرادات جديدة', value: '675 ألف ريال' },
                        { label: 'عائد الإعلان', value: '1,800%' },
                        { label: 'قيمة المبيعات', value: '7.5 مليون ريال' },
                    ],
                    context: {
                        goal: 'فتح مصادر إيرادات جديدة لمزود خدمات ERP.',
                        details: 'تحتاج Fortude إلى التنويع خارج نطاق تنفيذ الخدمات. كانت الفرصة تكمن في تحويل الملكية الفكرية المخصصة إلى وحدات SaaS قابلة للتطوير.',
                    },
                    role: {
                        details: 'مدير منتج رئيسي. امتلاك خارطة الطريق من الفكرة إلى السوق. إدارة فريق متعدد الوظائف عبر سريلانكا وأستراليا.',
                    },
                    constraints: {
                        details: 'ديون فنية قديمة. ميزانية تسويق محدودة. ضغط كبير من أصحاب المصلحة لعائد الاستثمار السريع.',
                    },
                    discovery: {
                        details: 'تحليل تذاكر الدعم والتحقق من الطلب عبر 20 مقابلة. اكتشاف أن تسوية البيانات اليدوية كانت عنق الزجاجة الرئيسي.',
                    },
                    decisions: {
                        details: 'أعطيت الأولوية لوحدة "Connector" لحل المشكلة الفورية. اخترت نموذج تسعير متدرج.',
                    },
                    execution: {
                        details: 'اعتماد نهج Agile. التركيز على الاستقرار والامتثال الأمني أولاً لكسب ثقة المؤسسات.',
                    },
                    outcomes: {
                        details: 'تحقيق 675 ألف ريال في السنة الأولى. تحقيق عائد 1800% على الإنفاق الإعلاني.',
                    },
                    learnings: {
                        repeat: 'التحقق المبكر مع العملاء قبل كتابة الكود.',
                        change: 'الاستثمار مبكراً في التشغيل الآلي.',
                    },
                },
                {
                    slug: 'retention-engine',
                    title: 'محرك الاحتفاظ للخدمات اللوجستية',
                    company: 'Sling Mobility',
                    logo: getAssetPath('/logos/sling.svg'),
                    website: 'https://www.slingmobility.com',
                    market: 'تكنولوجيا اللوجستيات',
                    timeframe: '2020 - 2021',
                    category: 'Software Development' as CaseStudyCategory,
                    impactScore: 8,
                    jobSlug: 'sling-mobility-product-lead',
                    metrics: [
                        { label: 'تحسن الاحتفاظ', value: '17%' },
                        { label: 'نمو الإيرادات', value: '30%' },
                        { label: 'تقليل التسرب', value: '12%' },
                    ],
                    context: {
                        goal: 'استقرار قاعدة المستخدمين وتقليل التسرب.',
                        details: 'واجهت Sling Mobility تسرباً عالياً للسائقين. كان الهدف بناء نظام بيئي متماسك.',
                    },
                    role: {
                        details: 'مدير منتج للتجربة الأساسية. امتلاك مقاييس الاحتفاظ بالسائقين.',
                    },
                    constraints: {
                        details: 'قيود صارمة على الحوافز النقدية. موارد هندسية محدودة. مشاكل في الاتصال بالإنترنت.',
                    },
                    discovery: {
                        details: 'كشف تحليل البيانات أن التسرب يرتفع بعد 3 أيام من الأرباح المنخفضة. الشفافية كانت أهم من المكافآت الصغيرة.',
                    },
                    decisions: {
                        details: 'تطبيق نظام "Streak" لمكافأة السلوك المستمر. ميزة "توقعات الأرباح" للشفافية.',
                    },
                    execution: {
                        details: 'إطلاق تدريجي للميزات. تحسين أداء التطبيق للأجهزة الضعيفة.',
                    },
                    outcomes: {
                        details: 'تحسن الاحتفاظ بنسبة 17%. زيادة الإيرادات بنسبة 30%.',
                    },
                    learnings: {
                        repeat: 'استخدام البيانات السلوكية للتدخل الاستباقي.',
                        change: 'إشراك فريق العمليات في وقت مبكر.',
                    },
                },
                {
                    slug: 'foundership-product',
                    title: 'إطلاق منتج من الصفر',
                    company: 'FieldR',
                    logo: getAssetPath('/logos/fieldr.png'),
                    website: 'https://www.fieldr.lk',
                    market: 'SaaS للأعمال',
                    timeframe: '2018 - 2020',
                    category: 'Software Development' as CaseStudyCategory,
                    impactScore: 10,
                    jobSlug: 'fieldr-product-lead',
                    metrics: [
                        { label: 'تحويل', value: '75%' },
                        { label: 'المستخدمين', value: '0 -> 5K' },
                        { label: 'رضا العملاء', value: '4.8/5' },
                    ],
                    context: {
                        goal: 'إطلاق منتج جديد لتحديث عمليات المبيعات الميدانية.',
                        details: 'كانت فرق المبيعات تستخدم الورق. تهدف FieldR إلى رقمنة هذه القوى العاملة.',
                    },
                    role: {
                        details: 'مدير منتج مؤسس. امتلاك الرؤية والتنفيذ من الصفر.',
                    },
                    constraints: {
                        details: 'ميزانية محدودة. فريق صغير جداً. الحاجة لدعم وضع عدم الاتصال.',
                    },
                    discovery: {
                        details: 'مرافقة المندوبين ميدانياً. اكتشاف أن "سرعة الإدخال" هي العامل الحاسم.',
                    },
                    decisions: {
                        details: 'بناء ميزة "زيارة بنقرة واحدة". إزالة 80% من الحقول غير الضرورية. التركيز على Android.',
                    },
                    execution: {
                        details: 'شحن أسبوعي. الاعتماد على مجتمع المتبنين الأوائل.',
                    },
                    outcomes: {
                        details: 'تحقيق معدل تحويل 75%. الوصول إلى 5000 مستخدم نشط.',
                    },
                    learnings: {
                        repeat: 'التركيز الشديد على "ميزة قاتلة" واحدة.',
                        change: 'التركيز على شريحة المؤسسات في وقت أقرب.',
                    },
                },
                {
                    slug: 'chonk-cookies-d2c',
                    title: 'Chonk Cookies — إطلاق علامة D2C من الصفر',
                    company: 'Chonk Cookies',
                    logo: '',
                    website: 'https://www.chonk.lk',
                    market: 'الأغذية والمشروبات | التجارة الاجتماعية',
                    timeframe: 'مارس 2024 – ديسمبر 2025',
                    category: 'Marketing' as CaseStudyCategory,
                    impactScore: 8,
                    jobSlug: '',
                    metrics: [
                        { label: 'الإيرادات السنوية', value: '30 ألف ريال' },
                        { label: 'القناة', value: '100% رقمي' },
                        { label: 'الاحتفاظ', value: 'تكرار عالي' },
                    ],
                    context: {
                        goal: 'اختبار قدرتي على تحديد اتجاه غذائي عالمي والاستحواذ على سوق محلي بدون ميزانية إعلانية.',
                        details: 'أردت بناء علامة تجارية مباشرة للمستهلك (D2C) باستخدام التجارة الاجتماعية والتحسين المبني على البيانات فقط.',
                    },
                    role: {
                        details: 'كمؤسس، امتلكت استراتيجية العلامة التجارية من البداية للنهاية، من التموضع السوقي إلى العمليات الرقمية.',
                    },
                    constraints: {
                        details: 'صفر ميزانية إعلانية تقليدية. الاعتماد على الوصول العضوي والتجارة الاجتماعية.',
                    },
                    discovery: {
                        details: 'تحديد فجوة في سوق الحلويات الفاخرة. أظهر البحث أن التجارب "القابلة للنشر على Instagram" تدفع وصولاً عضوياً كبيراً.',
                    },
                    decisions: {
                        details: 'تموضع Chonk كتجربة فاخرة "قابلة للنشر على Instagram". اعتماد نهج رقمي 100% مع Instagram كمحرك مبيعات رئيسي.',
                    },
                    execution: {
                        details: 'التسويق الأدائي عبر Meta Business Suite. تحسين التحويل باستخدام Microsoft Clarity وGoogle Analytics.',
                    },
                    outcomes: {
                        details: 'تحقيق 30,000 ريال سعودي إيرادات سنوية متكررة. بناء مجتمع مخلص مع معدل تكرار عملاء عالي. اختيارها ضمن **أفضل 28 متسابق** في مسابقة Venture Engine من Lanka Angel Network.',
                    },
                    learnings: {
                        repeat: 'نهج المجتمع أولاً يخلق نمواً عضوياً مستداماً.',
                        change: 'الاستثمار المبكر في التوصيل الآلي.',
                    },
                },
            ] as CaseStudy[],
        },
        about: {
            title: 'عني',
            narrative: 'قائد منتجات خبير بعقلية التملك. سجل حافل في قيادة فرق موزعة عبر الولايات المتحدة والهند وسريلانكا. خبير في إدارة أصحاب المصلحة والتنفيذ في ظل الغموض.',
            toolsTitle: 'الأدوات والتقنيات',
        },
        career: {
            title: 'المسيرة المهنية',
            subtitle: 'من الأنظمة المؤسسية إلى تأسيس المنتجات',
            jobs: [
                {
                    slug: 'fortude-product-manager',
                    title: 'مدير منتج',
                    company: 'Fortude',
                    logo: getAssetPath('/logos/fortude.png'),
                    website: 'https://www.fortude.co',
                    location: 'كولومبو، سريلانكا',
                    dateRange: 'أكتوبر 2024 – يناير 2026',
                    summary: 'بناء جاذبية السوق لمنتجات الذكاء الاصطناعي.',
                    description: 'بناء خط مبيعات بقيمة 7.5 مليون ريال وتأمين 675 ألف ريال في التسجيلات.',
                    skills: ['إدارة أصحاب المصلحة', 'استراتيجية المنتج', 'منتجات الذكاء الاصطناعي'],
                    caseStudyIds: ['saas-growth-platform', 'charlie-ai-product-strategy'],
                } as Job,
                {
                    slug: 'fieldr-product-lead',
                    title: 'قائد منتج (مؤسس مشارك)',
                    company: 'FieldR',
                    logo: getAssetPath('/logos/fieldr.png'),
                    website: 'https://www.fieldr.lk',
                    location: 'كولومبو',
                    dateRange: 'يوليو 2019 – مايو 2025',
                    summary: 'أول منصة تحليلات رياضية في سريلانكا.',
                    description: 'تحقيق 2,823 مستخدم مدفوع من 3,568 تسجيل.',
                    skills: ['قيادة المنتج', 'استراتيجية الانتقال للسوق', 'النمو'],
                    caseStudyIds: ['foundership-product', 'fieldr-origin-to-international'],
                } as Job,
                {
                    slug: 'sling-mobility-product-lead',
                    title: 'قائد منتج - البرمجيات والأجهزة',
                    company: 'Sling Mobility',
                    logo: getAssetPath('/logos/sling.svg'),
                    website: 'https://www.slingmobility.com',
                    location: 'كولومبو، سريلانكا',
                    dateRange: 'يونيو 2021 – مايو 2024',
                    summary: 'أول موظف. بناء المنتج والفريق.',
                    description: 'إطلاق أول بنية تبديل بطاريات في سريلانكا.',
                    skills: ['قيادة الفرق', 'إدارة المنتجات', 'التميز التشغيلي'],
                    caseStudyIds: ['retention-engine', 'ev-battery-ecosystem'],
                } as Job,
                {
                    slug: 'motion-miracles-pm',
                    title: 'مدير مشروع',
                    company: 'Motion Miracles',
                    logo: getAssetPath('/logos/motion-miracles.png'),
                    website: 'https://www.motionmiracles.com',
                    location: 'كولومبو، سريلانكا',
                    dateRange: 'يناير 2021 – مايو 2021',
                    summary: 'إدارة التسليم الإبداعي.',
                    description: 'بناء لوحات تتبع التسليم.',
                    skills: ['التخطيط التشغيلي', 'إدارة التسليم'],
                    caseStudyIds: ['motion-miracles-gtm'],
                } as Job,
                {
                    slug: 'goodlifex-program-associate',
                    title: 'مساعد برنامج',
                    company: 'GOOD LIFE X',
                    logo: getAssetPath('/logos/goodlifex.png'),
                    website: 'https://www.goodlifex.com',
                    location: 'كولومبو، سريلانكا',
                    dateRange: 'أغسطس 2020 – ديسمبر 2020',
                    summary: 'مساعدة المؤسسين.',
                    description: 'توجيه المؤسسين وتتبع المعالم.',
                    skills: ['إدارة البرامج', 'تتبع الأداء'],
                    caseStudyIds: [],
                } as Job,
                {
                    slug: 'win-authority-pm',
                    title: 'مدير مشروع',
                    company: 'Win Authority Innovatives',
                    logo: '',
                    website: '',
                    location: 'وايومنغ، الولايات المتحدة · عن بُعد',
                    dateRange: 'أغسطس 2018 – ديسمبر 2019',
                    summary: 'إدارة مشاريع SaaS متعددة.',
                    description: 'تسليم 8 مشاريع منفصلة.',
                    skills: ['إدارة المشاريع', 'تخطيط الموارد'],
                    caseStudyIds: [],
                } as Job,
                {
                    slug: 'millenniumit-pm',
                    title: 'مدير مشروع (متدرب)',
                    company: 'MillenniumIT',
                    logo: getAssetPath('/logos/millenniumit.svg'),
                    website: 'https://www.mitesp.com',
                    location: 'سريلانكا',
                    dateRange: 'يوليو 2017 – يوليو 2018',
                    summary: 'الخدمات المصرفية وأسواق رأس المال.',
                    description: 'التنسيق العالمي وإدارة المخاطر.',
                    skills: ['إدارة أصحاب المصلحة', 'إدارة المخاطر'],
                    caseStudyIds: [],
                } as Job,
                {
                    slug: 'novitat-media-producer',
                    title: 'منتج ومخرج فيديو',
                    company: 'Novitat Media',
                    logo: '',
                    website: '',
                    location: 'سريلانكا',
                    dateRange: 'فبراير 2017 – يونيو 2017',
                    summary: 'إنتاج محتوى فيديو رقمي.',
                    description: 'إخراج الإنتاج والتعاون الإبداعي.',
                    skills: ['إنتاج الفيديو', 'الإخراج الإبداعي'],
                    caseStudyIds: [],
                } as Job,
            ] as Job[],
        },
    },
};
