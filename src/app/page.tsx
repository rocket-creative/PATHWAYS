import { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Pathways Within | Therapy and Wellness on Long Island',
  description: 'Experience integrated mental health therapy and holistic wellness services at Pathways Within. Our 360 degree approach supports your mind, body, and spirit at five Long Island locations.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pathways Within | Therapy and Wellness on Long Island',
    description: 'Experience integrated mental health therapy and holistic wellness services. Our 360 degree approach supports your mind, body, and spirit.',
    url: '/',
    siteName: 'Pathways Within',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pathways Within | Therapy and Wellness on Long Island',
    description: 'Experience integrated mental health therapy and holistic wellness services.',
  },
}

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
