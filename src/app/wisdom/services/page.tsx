import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { ResourcesSection } from '@/components/sections/resources-section'
import { FilteredServicesSection } from '@/components/sections/filtered-services-section'
import { therapyServicesList } from '@/data/therapy-services'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Therapy Services',
  description: 'Browse all therapy services at Pathways Within. Individual, couples, child, teen, trauma, EMDR, somatic, and hypnotherapy on Long Island.',
  alternates: { canonical: `${SITE_URL}/wisdom/services` },
  openGraph: { title: 'Therapy Services | Pathways Within', url: `${SITE_URL}/wisdom/services` },
}

export default function TherapyServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Mental Health Services"
        headline="Our Therapy Offerings"
        body="We provide a comprehensive range of therapy services to support your mental health and personal growth. Our licensed clinicians use evidence-based approaches tailored to your needs."
        ctaText="GET STARTED"
        ctaHref="/client-intake"
        ctaSecondaryText="FIND A PROVIDER"
        ctaSecondaryHref="/providers"
      />

      <Suspense fallback={<ServicesGridSkeleton />}>
        <FilteredServicesSection
          services={therapyServicesList}
          serviceHrefPrefix="/wisdom/services/"
          categories={['Mental Health', 'Medication Management']}
        />
      </Suspense>

      <ResourcesSection />

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-white">Not sure which therapy is right for you?</h2>
            <p className="mb-8 text-white/70" style={{ lineHeight: 1.8 }}>
              We can help you find the best approach for your needs. Schedule a consultation to discuss your options.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/client-intake" className="btn-pill btn-pill-green">
                <span className="btn-text">GET STARTED</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </Link>
              <Link href="/providers" className="btn-pill btn-pill-white">
                <span className="btn-text">FIND A PROVIDER</span>
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
