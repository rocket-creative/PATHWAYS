import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
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
        eyebrow="Therapy Services"
        headline="Our therapy offerings"
        body="We provide a comprehensive range of therapy services to support your mental health and personal growth. Our licensed clinicians use evidence-based approaches tailored to your needs."
        image="/images/hero/freepik__ecommerce-catalog-photo-of-a-group-of-4-happy-dive__69753.jpeg"
        imageAlt="Therapy services at Pathways Within"
      />

      {/* Services Grid */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {therapyServicesList.map((service) => (
              <Link
                key={service.slug}
                href={`/wisdom/services/${service.slug}`}
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
            <h2 className="mb-6 text-[rgb(var(--color-navy))]">Not sure which therapy is right for you?</h2>
            <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              We can help you find the best approach for your needs. Schedule a consultation to discuss your options.
            </p>
            <Link href="/contact" className="btn-pill btn-pill-primary">
              <span className="btn-text">Schedule consultation</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
