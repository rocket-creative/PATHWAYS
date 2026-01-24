import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { wellnessServicesList } from '@/data/wellness-services'
import { SITE_URL } from '@/lib/site-config'
import { 
  createOpenGraph, 
  createTwitterCard, 
  standardRobots,
  createBreadcrumbSchema,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Wellness Services on Long Island | Pathways Within',
  description: 'Holistic wellness services at Pathways Within. Massage, acupuncture, skincare, IV therapy, injectables, and more. Book your appointment on Long Island.',
  alternates: { canonical: `${SITE_URL}/wellness` },
  openGraph: createOpenGraph({
    title: 'Wellness Services on Long Island | Pathways Within',
    description: 'Holistic wellness services at Pathways Within. Massage, acupuncture, skincare, IV therapy, injectables, and more. Book your appointment on Long Island.',
    url: `${SITE_URL}/wellness`,
  }),
  twitter: createTwitterCard({
    title: 'Wellness Services on Long Island | Pathways Within',
    description: 'Holistic wellness services at Pathways Within. Massage, acupuncture, skincare, IV therapy, injectables, and more.',
  }),
  robots: standardRobots,
}

export default function WellnessHomePage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Wellness', url: `${SITE_URL}/wellness` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        eyebrow="Wellness"
        headline="Whole body wellness"
        body="Our wellness services support your physical health and complement your mental health journey. From massage to advanced aesthetics, we offer a range of services to help you look and feel your best."
        image="/images/hero/freepik__catalog-style-portrait-blonde-white-woman-in-her-4__69759.jpeg"
        imageAlt="Wellness services at Pathways Within"
        ctaText="View all services"
        ctaHref="/wellness/services"
      />

      {/* Services Preview */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mb-12">
            <p className="eyebrow mb-4">Our Services</p>
            <h2>What we offer</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wellnessServicesList.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/wellness/services/${service.slug}`}
                className="group rounded-lg border border-[rgb(var(--border))]/50 bg-white p-6 transition-all hover:border-[rgb(var(--color-green))] hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-medium text-[rgb(var(--color-navy))]">
                  {service.name}
                </h3>
                <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]">
                  {service.headline}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--color-green))]">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/wellness/services" className="btn-pill btn-pill-primary">
              <span className="btn-text">View all services</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Our Team</p>
              <h2 className="mb-6">Meet our wellness providers</h2>
              <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Our wellness team includes certified massage therapists, licensed estheticians, registered nurses, and energy work practitioners. Each provider brings specialized training and a commitment to your wellbeing.
              </p>
              <Link href="/wellness/team" className="btn-pill btn-pill-secondary">
                <span className="btn-text">Meet the team</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[rgb(var(--color-placeholder))]" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">Ready to feel your best?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Schedule a wellness appointment today and experience the difference integrated care makes.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-pill btn-pill-green">
              <span className="btn-text">Book appointment</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
            <Link href="/wellness/services" className="btn-pill btn-pill-white">
              <span className="btn-text">Browse services</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
