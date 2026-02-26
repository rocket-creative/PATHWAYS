import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { ResourcesSection } from '@/components/sections/resources-section'
import { wellnessServicesList } from '@/data/wellness-services'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Holistic Wellness Services | Pathways Within',
  description: 'Discover holistic wellness services at Pathways Within. Massage, acupuncture, skincare, IV vitamin therapy, and more on Long Island.',
  alternates: { canonical: `${SITE_URL}/wellness` },
  openGraph: { title: 'Wellness | Pathways Within', url: `${SITE_URL}/wellness` },
}

// Only the wellness services that are currently active (no "Full Wellness" label)
const featuredServices = wellnessServicesList.slice(0, 8)

const benefits = [
  { title: 'Complements Your Therapy', body: 'Physical care and mental health care work best together. Our wellness providers and therapists are in the same building — and in communication.' },
  { title: 'Integrated Billing', body: 'Because wellness care is offered alongside therapy in the Collaborative, coordination is built in. No separate intake, no new chart.' },
  { title: 'Expert Providers', body: 'All wellness providers hold current certifications and licenses. They receive ongoing training and bring a commitment to whole-person care.' },
]

export default function WellnessHomePage() {
  return (
    <>
      <PageHero
        eyebrow="Wellness — Holistic Care"
        headline="Whole Body Wellness Services"
        body="Pathways Within - Wisdom and Wellness Collaborative offers wellness services that support your physical health and complement your mental health journey. Integrated within our Collaborative model."
        ctaText="VIEW ALL SERVICES"
        ctaHref="/wellness/services"
        ctaSecondaryText="FIND A PROVIDER"
        ctaSecondaryHref="/providers"
      />

      {/* Editorial: Asymmetric intro with wellness space imagery */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-6 lg:col-start-1 lg:-mt-8 lg:mb-0">
              <div className="bg-white p-8 shadow-sm lg:p-10">
                <p className="eyebrow mb-4">Why Integrated Wellness</p>
                <h2 className="mb-6 text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-clarendon), serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  Physical care and mental health under one roof
                </h2>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  Our wellness spaces are designed to complement your therapy journey. From massage to acupuncture to skincare, every service is offered in the same building where your care team can coordinate.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/offices/massage/83249798-a680-4196-9c22-9d8bc0ea6243.jpg"
                  alt="Pathways Within wellness space"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="bg-[rgb(var(--color-cream))] p-6">
                <h3 className="mb-2 text-base font-semibold text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                  {b.title}
                </h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow mb-3">Our Services</p>
              <h2 className="text-[rgb(var(--color-navy))]">What We Offer</h2>
            </div>
            <Link href="/wellness/services" className="flex-shrink-0 text-sm font-semibold text-[rgb(var(--color-green))] hover:underline" style={{ fontFamily: 'var(--font-raleway)' }}>
              View all services →
            </Link>
          </div>

          <div className="animate-stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/wellness/services/${service.slug}`}
                className="animate-on-scroll group border border-[rgb(var(--border))]/50 bg-white p-6 transition-all hover:border-[rgb(var(--color-green))]/50 hover:shadow-md"
              >
                <p
                  className="mb-1 text-xs uppercase tracking-wider text-[rgb(var(--color-green))]"
                  style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600 }}
                >
                  Wellness
                </p>
                <h3 className="mb-2 text-base font-semibold text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                  {service.name}
                </h3>
                <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.6 }}>
                  {service.headline}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--color-green))]">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/wellness/services" className="btn-pill btn-pill-primary">
              <span className="btn-text">VIEW ALL SERVICES</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial: Full-width office imagery with overlapping text */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-20 lg:py-28">
          <div className="relative overflow-hidden">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/offices/garden-city-wellness/ee9a0cca-5b5e-4c79-9aa6-5dcce5350e2f.jpg"
                    alt="Pathways Within wellness treatment room"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 lg:-ml-16 lg:z-10">
                <div className="bg-white p-8 shadow-md lg:p-10">
                  <p className="eyebrow mb-4">The Space</p>
                  <h2 className="mb-6 text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-clarendon), serif', fontSize: '1.5rem' }}>
                    Calm, private, and designed for healing
                  </h2>
                  <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                    Every treatment room is designed for comfort and privacy. Whether you are here for massage, acupuncture, or skincare, you will find a space that supports relaxation and restoration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview — aligned with Wisdom format: photo + stats */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="animate-fade-left">
              <p className="eyebrow mb-4">Our Team</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Meet Our Wellness Providers</h2>
              <p className="mb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Our wellness team includes certified massage therapists, licensed estheticians, registered nurses, acupuncturists, and energy work practitioners. Each provider holds current certifications and brings specialized expertise.
              </p>
              <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                All wellness providers are part of the Collaborative model — meaning they can communicate directly with your therapy team when it supports your care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/providers" className="btn-pill btn-pill-primary">
                  <span className="btn-text">FIND A PROVIDER</span>
                  <span className="btn-arrow"><ArrowRight /></span>
                </Link>
                <Link href="/wellness/team" className="btn-pill btn-pill-secondary">
                  <span className="btn-text">WELLNESS TEAM</span>
                  <span className="btn-arrow"><ArrowRight /></span>
                </Link>
              </div>
            </div>

            <div className="animate-fade-right flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/offices/massapequa-wellness/01e56c2c-ecc3-42bc-bdf4-abc7eeee6aef.jpg"
                  alt="Pathways Within wellness team"
                  fill
                  className="object-cover object-center"
                  sizes="50vw"
                />
              </div>
              <div className="animate-stagger grid grid-cols-4 gap-px bg-[rgb(var(--border))]/30">
                {[
                  { num: '14+', label: 'Wellness Services' },
                  { num: '6', label: 'Locations' },
                  { num: '360°', label: 'Care Model' },
                  { num: 'Integrated', label: 'Billing' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white px-4 py-4 text-center">
                    <p
                      className="mb-0.5 text-xl font-normal text-[rgb(var(--color-navy))]"
                      style={{ fontFamily: 'var(--font-clarendon), serif' }}
                    >
                      {stat.num}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-[rgb(var(--color-text-light))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <ResourcesSection
        title="Wellness Resources"
        resources={[
          { title: 'How Massage Therapy Supports Mental Health', description: 'The science behind how therapeutic bodywork complements psychological care.', type: 'article', href: '/wellness/services/massage' },
          { title: 'Acupuncture for Stress and Anxiety', description: 'What the research says about acupuncture and its role in nervous system regulation.', type: 'article', href: '/wellness/services/acupuncture' },
          { title: 'What Is IV Vitamin Therapy?', description: 'An overview of IV infusion benefits, what to expect, and who it is best for.', type: 'article', href: '/wellness/services/iv-vitamin-infusion' },
          { title: 'Understanding the Intake Process', description: 'How to get started at Pathways Within and what happens after you submit the form.', type: 'download', href: '/client-intake' },
        ]}
      />

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">Ready to Feel Your Best?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Submit an intake form and our team will match you with the right wellness provider.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/client-intake" className="btn-pill btn-pill-green">
              <span className="btn-text">GET STARTED</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
            <Link href="/wellness/services" className="btn-pill btn-pill-white">
              <span className="btn-text">BROWSE SERVICES</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
