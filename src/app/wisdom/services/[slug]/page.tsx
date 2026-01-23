import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Check, Clock, MapPin } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { therapyServices } from '@/data/therapy-services'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(therapyServices).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = therapyServices[slug]
  
  if (!service) return { title: 'Service not found' }
  
  return {
    title: service.name,
    description: service.metaDescription,
  }
}

export default async function TherapyServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = therapyServices[slug]
  
  if (!service) notFound()

  return (
    <>
      <PageHero
        eyebrow="Therapy Services"
        headline={service.name}
        subheadline={service.headline}
        body={service.description}
        image="/images/hero/therapy-service-hero.jpg"
        imageAlt={`${service.name} at Pathways Within`}
        ctaText="Schedule consultation"
        ctaHref="/contact"
      />

      {/* Benefits */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Benefits</p>
              <h2 className="mb-8">How this service helps</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))]" />
                    <span className="text-[rgb(var(--color-text-light))]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-[rgb(var(--color-placeholder))]" />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <div className="mb-12">
            <p className="eyebrow mb-4">What to expect</p>
            <h2>Your journey with us</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.whatToExpect.map((step, index) => (
              <div key={step} className="rounded-lg bg-white p-6">
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10 text-sm text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>
                  {index + 1}
                </span>
                <p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Info */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section-sm">
          <div className="flex flex-col items-center justify-center gap-8 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-[rgb(var(--color-green))]" />
              <div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">Session length</p>
                <p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{service.duration}</p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-[rgb(var(--border))] sm:block" />
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[rgb(var(--color-green))]" />
              <div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">Available at</p>
                <p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>All 5 locations + telehealth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {service.relatedServices.length > 0 && (
        <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
          <div className="container-site section">
            <h2 className="mb-8 text-center">Related services</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.relatedServices.map((relatedSlug) => {
                const related = therapyServices[relatedSlug]
                if (!related) return null
                return (
                  <Link
                    key={relatedSlug}
                    href={`/wisdom/services/${relatedSlug}`}
                    className="group rounded-lg bg-white p-6 transition-all hover:shadow-md"
                  >
                    <h3 className="mb-2 text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>
                      {related.name}
                    </h3>
                    <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]">{related.headline}</p>
                    <span className="inline-flex items-center gap-2 text-sm text-[rgb(var(--color-green))]">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">Ready to get started?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Schedule a consultation to learn more about {service.name.toLowerCase()} and whether it is right for you.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-pill btn-pill-white">
              <span className="btn-text">Schedule consultation</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
            <Link href="/wisdom/services" className="btn-pill btn-pill-outline">
              <ArrowLeft className="h-4 w-4" />
              <span className="btn-text">All services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
