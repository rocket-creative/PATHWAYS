import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { ResourcesSection } from '@/components/sections/resources-section'
import { FilteredServicesSection } from '@/components/sections/filtered-services-section'
import { wellnessServicesList } from '@/data/wellness-services'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Wellness Services',
  description: 'Browse all wellness services at Pathways Within. Massage, acupuncture, skincare, IV vitamin therapy, injectables, and more on Long Island.',
  alternates: { canonical: `${SITE_URL}/wellness/services` },
  openGraph: { title: 'Wellness Services | Pathways Within', url: `${SITE_URL}/wellness/services` },
}

export default function WellnessServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Wellness Services"
        headline="Our Wellness Offerings"
        body="From therapeutic massage to advanced aesthetic treatments, we offer a comprehensive range of wellness services to support your physical health and overall wellbeing."
        ctaText="GET STARTED"
        ctaHref="/client-intake"
        ctaSecondaryText="FIND A PROVIDER"
        ctaSecondaryHref="/providers"
      />

      <Suspense fallback={<ServicesGridSkeleton />}>
        <FilteredServicesSection
          services={wellnessServicesList}
          serviceHrefPrefix="/wellness/services/"
          categories={['Wellness']}
        />
      </Suspense>

      <ResourcesSection
        title="Wellness Resources"
        resources={[
          { title: 'How Massage Therapy Supports Mental Health', description: 'The science behind how therapeutic bodywork complements psychological care.', type: 'article', href: '/wellness/services/massage' },
          { title: 'Acupuncture for Stress and Anxiety', description: 'What the research says about acupuncture and its role in nervous system regulation.', type: 'article', href: '/wellness/services/acupuncture' },
          { title: 'What Is IV Vitamin Therapy?', description: 'An overview of IV infusion benefits, what to expect, and who it is best for.', type: 'article', href: '/wellness/services/iv-vitamin-infusion' },
          { title: 'Get Started', description: 'Complete the intake form and our team will match you with the right wellness provider.', type: 'download', href: '/client-intake' },
        ]}
      />

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-white">Not sure which service is right for you?</h2>
            <p className="mb-8 text-white/70" style={{ lineHeight: 1.8 }}>
              Our team can help you find the best treatment for your needs. Contact us for a consultation.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/client-intake" className="btn-pill btn-pill-green">
                <span className="btn-text">GET STARTED</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </Link>
              <Link href="/contact" className="btn-pill btn-pill-white">
                <span className="btn-text">CONTACT US</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ServicesGridSkeleton() {
  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-white">
      <div className="container-site section">
        <div className="mb-8 h-[200px] animate-pulse rounded-lg bg-[rgb(var(--color-cream))]" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-48 animate-pulse rounded-lg bg-[rgb(var(--color-cream))]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
