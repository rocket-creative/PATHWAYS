import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { ResourcesSection } from '@/components/sections/resources-section'
import { therapyServicesList } from '@/data/therapy-services'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Mental Health Therapy | Pathways Within',
  description: 'Discover therapy and counseling services at Pathways Within. Individual, couples, child, teen, trauma, and EMDR therapy with licensed clinicians on Long Island.',
  alternates: { canonical: `${SITE_URL}/wisdom` },
  openGraph: { title: 'Mental Health Therapy | Pathways Within', url: `${SITE_URL}/wisdom` },
}

const conditions = [
  { name: 'Anxiety', body: 'Overcome persistent worry and fear with evidence-based treatment and compassionate support.', href: '/wisdom/conditions/anxiety', image: '/images/offices/garden-city-wellness/b2b0a50b-47c1-402a-abec-021ad72c0e52.jpg' },
  { name: 'Depression', body: 'Find relief and rediscover joy through personalized, clinician-led care.', href: '/wisdom/conditions/depression', image: '/images/offices/garden-city-wellness/516767f1-b79a-4678-9e73-0427800b327a.jpg' },
  { name: 'Trauma & PTSD', body: 'Heal from difficult experiences with trauma-informed approaches including EMDR and somatic work.', href: '/wisdom/conditions/trauma', image: '/images/offices/garden-city-wellness/3126d651-e563-4a1e-8638-90957252900c.jpg' },
]

export default function WisdomHomePage() {
  return (
    <>
      <PageHero
        eyebrow="Wisdom — Mental Health"
        headline="Therapy & Counseling Services"
        body="Pathways Within - Wisdom and Wellness Collaborative offers licensed clinicians who provide compassionate, evidence-based therapy for individuals, couples, children, and families. We specialize in trauma, anxiety, depression, and life transitions."
        ctaText="VIEW ALL SERVICES"
        ctaHref="/wisdom/services"
        ctaSecondaryText="FIND A PROVIDER"
        ctaSecondaryHref="/providers"
      />

      {/* Editorial: Asymmetric intro with office imagery */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-5 lg:col-start-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/offices/garden-city-wellness/3126d651-e563-4a1e-8638-90957252900c.jpg"
                  alt="Pathways Within therapy space"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:-mt-8 lg:mb-0">
              <div className="bg-white p-8 shadow-sm lg:p-10">
                <p className="eyebrow mb-4">Our Approach</p>
                <h2 className="mb-6 text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-clarendon), serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  Evidence-based care in a space designed for healing
                </h2>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  Our therapy spaces are intentionally designed to feel calm and safe. From the moment you walk in, you will find a judgment-free environment where you can focus on what matters.
                </p>
              </div>
            </div>
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
            <Link href="/wisdom/services" className="flex-shrink-0 text-sm font-semibold text-[rgb(var(--color-green))] hover:underline" style={{ fontFamily: 'var(--font-raleway)' }}>
              View all services →
            </Link>
          </div>

          <div className="animate-stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {therapyServicesList.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/wisdom/services/${service.slug}`}
                className="group card-hover border border-[rgb(var(--border))]/50 bg-white p-6 hover:border-[rgb(var(--color-green))]/40"
              >
                <p
                  className="mb-1 text-xs uppercase tracking-wider text-[rgb(var(--color-green))]"
                  style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600 }}
                >
                  Mental Health
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
            <Link href="/wisdom/services" className="btn-pill btn-pill-primary">
              <span className="btn-text">VIEW ALL SERVICES</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Conditions — full-width color block */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site section">
          <div className="animate-on-scroll mb-12">
            <p className="eyebrow mb-4">We Can Help With</p>
            <h2 className="text-[rgb(var(--color-navy))]">Common Concerns</h2>
          </div>

          <div className="animate-stagger grid gap-px bg-[rgb(var(--border))]/40 md:grid-cols-3">
            {conditions.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="group block bg-white p-8 transition-all duration-200 hover:bg-[rgb(var(--color-cream))] hover:shadow-md xl:p-10"
              >
                <div className="relative mb-6 aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3
                  className="mb-3 text-[rgb(var(--color-navy))]"
                  style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600, fontSize: '1.1rem' }}
                >
                  {c.name}
                </h3>
                <p className="mb-5 text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                  {c.body}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--color-green))]">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="animate-fade-left">
              <p className="eyebrow mb-4">Our Team</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Meet Our Therapists</h2>
              <p className="mb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Our clinical team includes licensed clinical social workers (LCSW), licensed mental health counselors (LMHC), licensed marriage and family therapists (LMFT), and licensed psychologists. Each clinician works with specific populations based on their expertise and passion.
              </p>
              <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                All providers are part of the Collaborative model — meaning your therapist and wellness providers are in the same space and can coordinate your care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/providers" className="btn-pill btn-pill-primary">
                  <span className="btn-text">FIND A PROVIDER</span>
                  <span className="btn-arrow"><ArrowRight /></span>
                </Link>
                <Link href="/wisdom/team" className="btn-pill btn-pill-secondary">
                  <span className="btn-text">THERAPY TEAM</span>
                  <span className="btn-arrow"><ArrowRight /></span>
                </Link>
              </div>
            </div>

            {/* Real office photo */}
            <div className="animate-fade-right flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/offices/garden-city-wellness/516767f1-b79a-4678-9e73-0427800b327a.jpg"
                  alt="Pathways Within team"
                  fill
                  className="object-cover object-center"
                  sizes="50vw"
                />
              </div>
              {/* Inline stats below the photo */}
              <div className="animate-stagger grid grid-cols-4 gap-px bg-[rgb(var(--border))]/30">
                {[
                  { num: '10+', label: 'Clinicians' },
                  { num: '6', label: 'Locations' },
                  { num: '360°', label: 'Care Model' },
                  { num: '2018', label: 'Founded' },
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
        title="Mental Health Resources"
        resources={[
          { title: 'What Is EMDR Therapy?', description: 'A guide to Eye Movement Desensitization and Reprocessing and how it helps process trauma.', type: 'article', href: '/wisdom/services/emdr-therapy' },
          { title: 'Understanding the Intake Process', description: 'What to expect when you first reach out and how we match you with the right provider.', type: 'download', href: '/client-intake' },
          { title: 'Anxiety — Signs, Symptoms, and Support', description: 'Learn about anxiety disorders and the evidence-based treatments available.', type: 'article', href: '/wisdom/conditions/anxiety' },
          { title: 'The 360° Approach to Care', description: 'How integrated care at Pathways Within connects therapy, wellness, and medication management.', type: 'article', href: '/about' },
        ]}
      />

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">Ready to Start Your Journey?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Complete an intake form and our team will match you with the right clinician within one business day.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/client-intake" className="btn-pill btn-pill-green">
              <span className="btn-text">GET STARTED</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
            <Link href="/wisdom/services" className="btn-pill btn-pill-white">
              <span className="btn-text">BROWSE SERVICES</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
