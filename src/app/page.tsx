import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import LeadershipStrip from '@/components/sections/LeadershipStrip';
import SkillConstellation from '@/components/sections/SkillConstellation';
import ImpactShowcase from '@/components/sections/ImpactShowcase';
import BeyondResume from '@/components/sections/BeyondResume';
import TestimonialsStrip from '@/components/sections/TestimonialsStrip';
import ContactCTA from '@/components/sections/ContactCTA';
import { PersonSchema, WebsiteSchema } from '@/components/seo/JsonLd';

export default function Home() {
  return (
    <main>
      <PersonSchema
        name="Thariq Hamad"
        jobTitle="Senior Product Manager"
        description="Senior Product Manager with 8+ years driving revenue, monetization, and growth for SaaS & AI platforms. Expert in zero-to-one product development."
        url="https://thariqhamad.com"
        image="https://thariqhamad.com/images/portrait.jpg"
        sameAs={[
          'https://www.linkedin.com/in/thariqhamad/',
        ]}
        worksFor={[
          { name: 'Fortude', url: 'https://www.fortude.io' },
        ]}
      />
      <WebsiteSchema
        name="Thariq Hamad - Product Manager Portfolio"
        url="https://thariqhamad.com"
        description="Portfolio of Thariq Hamad, Senior Product Manager specializing in SaaS, AI products, and revenue growth."
      />
      <Hero />
      <TrustBar />
      <LeadershipStrip />
      <SkillConstellation />
      <ImpactShowcase />
      <TestimonialsStrip />
      <BeyondResume />
      <ContactCTA />
    </main>
  );
}
