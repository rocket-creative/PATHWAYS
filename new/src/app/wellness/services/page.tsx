import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
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
        headline="Our wellness offerings"
        body="From therapeutic massage to advanced aesthetic treatments, we offer a comprehensive range of wellness services to support your physical health and overall wellbeing."
        image="/images/hero/wellness-services-hero.jpg"
        imageAlt="Wellness services at Pathways Within"
      />

      {/* Services Grid */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wellnessServicesList.map((service) => (
              <Link
                key={service.slug}
                href={`/wellness/services/${service.slug}`}
                className="group rounded-lg border border-[rgb(var(--border))]/50 bg-white p-6 transition-all hover:border-[rgb(var(--color-green))] hover:shadow-lg"
              >
                <div className="mb-4 aspect-[16/9] w-full overflow-hidden rounded-md bg-[rgb(var(--color-placeholder))]" />
                
                <h3 className="mb-2 text-lg font-medium text-[rgb(var(--color-navy))]">
                  {service.name}
                </h3>
                
                <p className="mb-2 text-sm text-[rgb(var(--color-green))]">
                  {service.headline}
                </p>
                
                <p className="mb-4 text-sm text-[rgb(var(--color-text-light))] line-clamp-2">
                  {service.description}
                </p>
                
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--color-green))]">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-[rgb(var(--color-navy))]">Not sure which service is right for you?</h2>
            <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              Our team can help you find the best treatment for your needs. Contact us for a consultation.
            </p>
            <Link href="/contact" className="btn-pill btn-pill-primary">
              <span className="btn-text">Get in touch</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
