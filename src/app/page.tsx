import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import BentoGrid from '@/components/sections/BentoGrid';
import ImpactShowcase from '@/components/sections/ImpactShowcase';
import ContactCTA from '@/components/sections/ContactCTA';
import { PersonSchema, WebsiteSchema } from '@/components/seo/JsonLd';

export default function Home() {
  return (
    <main>
      <PersonSchema
        name="Thariq Hamad"
        jobTitle="Senior Product Manager"
        description="Senior Product Manager with 8+ years driving revenue, monetization, and growth for SaaS & AI platforms. Expert in zero-to-one product development."
        url="https://thariq16.github.io/Portfolio_Website"
        sameAs={[
          'https://www.linkedin.com/in/thariqhamad/',
        ]}
        worksFor={[
          { name: 'Fortude', url: 'https://www.fortude.io' },
        ]}
      />
      <WebsiteSchema
        name="Thariq Hamad - Product Manager Portfolio"
        url="https://thariq16.github.io/Portfolio_Website"
        description="Portfolio of Thariq Hamad, Senior Product Manager specializing in SaaS, AI products, and revenue growth."
      />
      <Hero />
      <TrustBar />
      <BentoGrid />
      <ImpactShowcase />
      <FeaturedProjects />
      <ContactCTA />
    </main>
  );
}
