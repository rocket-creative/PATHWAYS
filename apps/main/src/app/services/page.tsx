import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Brain, Leaf, Heart, Sparkles, Shield, Sun } from 'lucide-react'
import { PageHero, SITE_CONFIG } from '@pathways/ui'

export const metadata: Metadata = {
  title: 'Therapy and Wellness Services | Pathways Within',
  description: 'Explore our integrated therapy and wellness services on Long Island.',
}

const wisdomUrl = process.env.NEXT_PUBLIC_WISDOM_URL || 'http://localhost:3001'
const wellnessUrl = process.env.NEXT_PUBLIC_WELLNESS_URL || 'http://localhost:3002'

const therapyServices = [
  { name: 'Individual Therapy', slug: 'individual-therapy' },
  { name: 'Child Therapy', slug: 'child-therapy' },
  { name: 'Teen Therapy', slug: 'teen-therapy' },
  { name: 'Couples Therapy', slug: 'couples-therapy' },
  { name: 'Trauma Therapy', slug: 'trauma-therapy' },
  { name: 'EMDR Therapy', slug: 'emdr-therapy' },
  { name: 'Somatic Therapy', slug: 'somatic-therapy' },
  { name: 'Hypnotherapy', slug: 'hypnotherapy' },
  { name: 'Veterans & First Responders', slug: 'veterans-first-responders' },
  { name: 'Weight Loss Surgery Support', slug: 'weight-loss-surgery-support' },
]

const wellnessServices = [
  { name: 'Massage Therapy', slug: 'massage' },
  { name: 'Acupuncture', slug: 'acupuncture' },
  { name: 'Energy Work', slug: 'energy-work' },
  { name: 'Pain Management', slug: 'pain-management' },
  { name: 'IV Vitamin Infusion', slug: 'iv-vitamin-infusion' },
  { name: 'Injectables', slug: 'injectables' },
  { name: 'Skincare & Facials', slug: 'skincare' },
  { name: 'HydraFacial', slug: 'hydrafacial' },
  { name: 'KeraLase Hair Restoration', slug: 'keralase-hair-restoration' },
  { name: 'Laser Hair Removal', slug: 'laser-hair-removal' },
  { name: 'PRP Vampire Facial', slug: 'prp-vampire-facial' },
  { name: 'Cryotherapy', slug: 'cryotherapy' },
  { name: 'Laser Lipo', slug: 'laser-lipo' },
  { name: 'Teeth Whitening', slug: 'teeth-whitening' },
  { name: 'Permanent Makeup', slug: 'permanent-makeup' },
]

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Services"
        headline="Complete care for your whole self"
        subheadline="Therapy and wellness services working together for your well being"
        body="At Pathways Within, we offer a full range of mental health therapy and holistic wellness services. Our 360 degree approach means your care team can work together to support every aspect of your health."
        site="main"
        imageClass="img-placeholder-split"
      />

      {/* How It Works */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
              How It Works
            </p>
            <h2 className="mb-4 text-[rgb(var(--color-navy))]">Your personalized journey</h2>
            <p className="mx-auto max-w-2xl text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              When you come to Pathways Within, you enter through one door and receive care tailored to your unique needs.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Heart, title: '1. Intake Conversation', desc: 'We explore what brings you in, how long it has been going on, and how it affects your daily life.' },
              { icon: Sparkles, title: '2. Personalized Recommendations', desc: 'Based on our conversation, we may suggest therapy services, wellness services, or both.' },
              { icon: Shield, title: '3. Treatment Plan', desc: 'We create a personalized plan, help you schedule next steps, and coordinate with your care team.' },
            ].map((item) => (
              <div key={item.title} className="relative rounded-lg bg-white p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                  <item.icon className="h-5 w-5 text-[rgb(var(--color-green))]" />
                </div>
                <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{item.title}</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Links to separate sites */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-10 grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Brain className="h-6 w-6 text-[rgb(var(--color-green))]" />
                <p className="text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                  Therapy Services
                </p>
              </div>
              <h2 className="mb-4 text-[rgb(var(--color-navy))]">Mental health & healing</h2>
              <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                Together we can explore your experiences to help you feel safe and secure again.
              </p>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-[rgb(var(--color-green))]" />
                <p className="text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                  Wellness Services
                </p>
              </div>
              <h2 className="mb-4 text-[rgb(var(--color-navy))]">Body care & beauty</h2>
              <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                Let us help you build a beautiful outside that matches your inside.
              </p>
            </div>
          </div>

          <div className="mb-12 grid gap-8 lg:grid-cols-2">
            <div className="img-placeholder aspect-[16/9] rounded-lg" />
            <div className="img-placeholder aspect-[16/9] rounded-lg" />
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Therapy Links - Go to Wisdom site */}
            <div className="flex flex-col gap-3">
              {therapyServices.map((service) => (
                <a
                  key={service.slug}
                  href={`${wisdomUrl}/services/${service.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-lg border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))] px-5 py-4 transition-all hover:border-[rgb(var(--color-green))] hover:bg-white hover:shadow-md"
                >
                  <h3 className="text-base text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>
                    {service.name}
                  </h3>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-[rgb(var(--color-text-light))] transition-all group-hover:translate-x-1 group-hover:text-[rgb(var(--color-green))]" />
                </a>
              ))}
            </div>

            {/* Wellness Links - Go to Wellness site */}
            <div className="flex flex-col gap-3">
              {wellnessServices.map((service) => (
                <a
                  key={service.slug}
                  href={`${wellnessUrl}/services/${service.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-lg border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))] px-5 py-4 transition-all hover:border-[rgb(var(--color-green))] hover:bg-white hover:shadow-md"
                >
                  <h3 className="text-base text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>
                    {service.name}
                  </h3>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-[rgb(var(--color-text-light))] transition-all group-hover:translate-x-1 group-hover:text-[rgb(var(--color-green))]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-white">Ready to start your journey?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>
              Join thousands of Long Islanders who&apos;ve found their path to wellness with us.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/start" className="btn-pill btn-pill-green">
                <span className="btn-text">Get Started Today</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </Link>
              <Link href="/contact" className="btn-pill btn-pill-white">
                <span className="btn-text">Contact Us</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
