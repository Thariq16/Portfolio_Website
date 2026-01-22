import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import BentoGrid from '@/components/sections/BentoGrid';
import ImpactShowcase from '@/components/sections/ImpactShowcase';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <BentoGrid />
      <ImpactShowcase />
      <FeaturedProjects />
      <ContactCTA />
    </main>
  );
}
