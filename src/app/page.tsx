import { HeroSection } from '@/components/sections/hero'
import { ServiceFinder } from '@/components/sections/service-finder'
import { ApproachSection } from '@/components/sections/approach'
import { ServicesOverview } from '@/components/sections/services-overview'
import { WhyPathways } from '@/components/sections/why-pathways'
import { TeamPreview } from '@/components/sections/team-preview'
import { LocationsPreview } from '@/components/sections/locations-preview'
import { InsuranceSection } from '@/components/sections/insurance'
import { FAQPreview } from '@/components/sections/faq-preview'
import { TestimonialSection } from '@/components/sections/testimonial'
import { CTASection } from '@/components/sections/cta'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceFinder />
      <ApproachSection />
      <ServicesOverview />
      <WhyPathways />
      <TeamPreview />
      <LocationsPreview />
      <InsuranceSection />
      <FAQPreview />
      <TestimonialSection />
      <CTASection />
    </>
  )
}
