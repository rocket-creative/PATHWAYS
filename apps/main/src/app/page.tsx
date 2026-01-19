import {
  HeroSection,
  ServiceFinder,
  ApproachSection,
  ServicesOverview,
  WhyPathways,
  TeamPreview,
  LocationsPreview,
  InsuranceSection,
  FAQPreview,
  TestimonialSection,
  CTASection,
} from '@pathways/ui'

export default function HomePage() {
  return (
    <>
      <HeroSection site="main" />
      <ServiceFinder site="main" />
      <ApproachSection />
      <ServicesOverview site="main" />
      <WhyPathways />
      <TeamPreview site="main" />
      <LocationsPreview site="main" />
      <InsuranceSection />
      <FAQPreview site="main" />
      <TestimonialSection />
      <CTASection site="main" />
    </>
  )
}
