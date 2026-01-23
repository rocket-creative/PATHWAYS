import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { therapyServicesList } from '@/data/therapy-services'

export const metadata: Metadata = {
  title: 'Therapy Services',
  description: 'Discover therapy services at Pathways Within. Individual, couples, child, teen, trauma, and EMDR therapy with licensed clinicians on Long Island.',
}

export default function WisdomHomePage() {
  return (
    <>
      <PageHero
        eyebrow="Therapy"
        headline="Mental health therapy"
        body="Our licensed clinicians provide compassionate, evidence-based therapy for individuals, couples, children, and families. We specialize in trauma, anxiety, depression, and life transitions."
        image="/images/hero/wisdom-hero.jpg"
        imageAlt="Therapy services at Pathways Within"
        ctaText="View all services"
        ctaHref="/wisdom/services"
      />

      {/* Services Preview */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mb-12">
            <p className="eyebrow mb-4">Our Services</p>
            <h2>What we offer</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {therapyServicesList.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/wisdom/services/${service.slug}`}
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
            <Link href="/wisdom/services" className="btn-pill btn-pill-primary">
              <span className="btn-text">View all services</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site section">
          <div className="mb-12">
            <p className="eyebrow mb-4">We Can Help With</p>
            <h2>Common concerns</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/wisdom/conditions/anxiety"
              className="group rounded-lg bg-white p-6 transition-all hover:shadow-lg"
            >
              <h3 className="mb-2 text-lg font-medium text-[rgb(var(--color-navy))]">Anxiety</h3>
              <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]">
                Overcome persistent worry and fear with evidence-based treatment.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--color-green))]">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/wisdom/conditions/depression"
              className="group rounded-lg bg-white p-6 transition-all hover:shadow-lg"
            >
              <h3 className="mb-2 text-lg font-medium text-[rgb(var(--color-navy))]">Depression</h3>
              <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]">
                Find relief and rediscover joy with compassionate care.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--color-green))]">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/wisdom/conditions/trauma"
              className="group rounded-lg bg-white p-6 transition-all hover:shadow-lg"
            >
              <h3 className="mb-2 text-lg font-medium text-[rgb(var(--color-navy))]">Trauma & PTSD</h3>
              <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]">
                Heal from difficult experiences with trauma-informed care.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--color-green))]">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
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
              <h2 className="mb-6">Meet our therapists</h2>
              <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Our clinical team includes licensed clinical social workers, licensed mental health counselors, and licensed marriage and family therapists. Each clinician works with special populations based on their expertise and passions.
              </p>
              <Link href="/wisdom/team" className="btn-pill btn-pill-secondary">
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
          <h2 className="mb-6 text-white">Ready to start your journey?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Schedule a consultation today and take the first step toward healing.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-pill btn-pill-green">
              <span className="btn-text">Schedule consultation</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
            <Link href="/wisdom/services" className="btn-pill btn-pill-white">
              <span className="btn-text">Browse services</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
