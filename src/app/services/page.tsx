import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Brain, Leaf, Heart, Sparkles, Shield, Sun } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { JsonLd } from '@pathways/ui'
import { generateBreadcrumbSchema } from '@/lib/structured-data'
import { getHeroImageByIndex } from '@/lib/hero-images'

export const metadata: Metadata = {
  title: 'Therapy and Wellness Services | Pathways Within',
  description: 'Explore our integrated therapy and wellness services on Long Island. From individual therapy to massage and skincare, we offer complete care for your mind, body, and spirit.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Therapy and Wellness Services | Pathways Within',
    description: 'Explore our integrated therapy and wellness services on Long Island.',
    url: '/services',
  },
}

const therapyServices = [
  { name: 'Individual Therapy', slug: 'individual-therapy', description: 'Classic counseling for personal growth, mental health challenges, and life transitions.' },
  { name: 'Child Therapy', slug: 'child-therapy', description: 'Specialized support for children navigating big feelings and challenging behaviors.' },
  { name: 'Teen Therapy', slug: 'teen-therapy', description: 'Support for adolescents facing the unique pressures of school, family, and identity.' },
  { name: 'Couples Therapy', slug: 'couples-therapy', description: 'Strengthen your connection through improved communication and conflict resolution.' },
  { name: 'Trauma Therapy', slug: 'trauma-therapy', description: 'Heal from past experiences with specialized approaches and trauma informed care.' },
  { name: 'EMDR Therapy', slug: 'emdr-therapy', description: 'Eye Movement Desensitization and Reprocessing helps you heal from trauma.' },
  { name: 'Somatic Therapy', slug: 'somatic-therapy', description: 'Address trauma and tension held in the body through mind body connection.' },
  { name: 'Hypnotherapy', slug: 'hypnotherapy', description: 'Access your unconscious mind through gentle trance states for healing.' },
  { name: 'Veterans & First Responders', slug: 'veterans-first-responders', description: 'Specialized support for those who protect and serve.' },
  { name: 'Weight Loss Surgery Support', slug: 'weight-loss-surgery-support', description: 'Pre and post operative evaluation and support for bariatric surgery.' },
]

const wellnessServices = [
  { name: 'Massage Therapy', slug: 'massage', description: 'Swedish, deep tissue, sports, hot stone, and pregnancy massage.' },
  { name: 'Acupuncture', slug: 'acupuncture', description: 'Traditional Chinese medicine to relieve pain and promote well being.' },
  { name: 'Energy Work', slug: 'energy-work', description: 'Reiki and Integrative Energy Therapy for healing and balance.' },
  { name: 'Pain Management', slug: 'pain-management', description: 'Comprehensive pain relief through trigger point injections and more.' },
  { name: 'IV Vitamin Infusion', slug: 'iv-vitamin-infusion', description: 'Essential nutrients delivered directly for energy and immunity.' },
  { name: 'Injectables', slug: 'injectables', description: 'Botox, dermal fillers, and Kybella by medical professionals.' },
  { name: 'Skincare & Facials', slug: 'skincare', description: 'European facials to advanced treatments like dermaplaning.' },
  { name: 'HydraFacial', slug: 'hydrafacial', description: 'Revolutionary skin rejuvenation with immediate results.' },
  { name: 'KeraLase Hair Restoration', slug: 'keralase-hair-restoration', description: 'Advanced laser technology for hair rejuvenation.' },
  { name: 'Laser Hair Removal', slug: 'laser-hair-removal', description: 'Permanent hair reduction using advanced laser technology.' },
  { name: 'PRP Vampire Facial', slug: 'prp-vampire-facial', description: 'Harness your own blood to stimulate collagen and rejuvenate skin.' },
  { name: 'Cryotherapy', slug: 'cryotherapy', description: 'Reduce inflammation and boost wellness through cold therapy.' },
  { name: 'Laser Lipo', slug: 'laser-lipo', description: 'Non invasive body sculpting with no downtime.' },
  { name: 'Teeth Whitening', slug: 'teeth-whitening', description: 'Brighten your smile by three to twelve shades.' },
  { name: 'Permanent Makeup', slug: 'permanent-makeup', description: 'Microblading, lip liner, and other permanent cosmetic services.' },
]

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://pathwayswithin.com' },
  { name: 'Services', url: 'https://pathwayswithin.com/services' },
])

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema} />
      {/* Hero - Default side-by-side */}
      <PageHero
        eyebrow="Our Services"
        headline="Complete care for your whole self"
        subheadline="Therapy and wellness services working together for your well being"
        body="At Pathways Within, we offer a full range of mental health therapy and holistic wellness services. Our 360 degree approach means your care team can work together to support every aspect of your health."
        variant="default"
        size="md"
        image={{ alt: 'Therapy and wellness services', placeholder: true }}
        imageStyle="split"
      />

      {/* How It Works */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-16 text-center">
            <p 
              className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              How It Works
            </p>
            <h2 className="mb-4 text-[rgb(var(--color-navy))]">Your personalized journey</h2>
            <p className="mx-auto max-w-2xl text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              When you come to Pathways Within, you enter through one door and receive care tailored to your unique needs.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative rounded-lg bg-white p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                <Heart className="h-5 w-5 text-[rgb(var(--color-green))]" />
              </div>
              <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>1. Intake Conversation</h3>
              <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                We explore what brings you in, how long it has been going on, and how it affects your daily life. We discuss sleep, stress, digestion, energy, pain, relationships, and what you have already tried.
              </p>
            </div>
            
            <div className="relative rounded-lg bg-white p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                <Sparkles className="h-5 w-5 text-[rgb(var(--color-green))]" />
              </div>
              <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>2. Personalized Recommendations</h3>
              <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                Based on our conversation, we may suggest therapy services, wellness services, or both. These recommendations are always optional and offered only when we feel they may truly support you.
              </p>
            </div>
            
            <div className="relative rounded-lg bg-white p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                <Shield className="h-5 w-5 text-[rgb(var(--color-green))]" />
              </div>
              <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>3. Treatment Plan</h3>
              <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                We create a personalized plan, help you schedule next steps, and coordinate with your care team for ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Two Columns */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          {/* Headers Row */}
          <div className="mb-10 grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Therapy Header */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Brain className="h-6 w-6 text-[rgb(var(--color-green))]" />
                <p 
                  className="text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
                  style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
                >
                  Therapy Services
                </p>
              </div>
              <h2 className="mb-4 text-[rgb(var(--color-navy))]">Mental health & healing</h2>
              <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                Together we can explore your experiences to help you feel safe and secure again.
              </p>
            </div>

            {/* Wellness Header */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-[rgb(var(--color-green))]" />
                <p 
                  className="text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
                  style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
                >
                  Wellness Services
                </p>
              </div>
              <h2 className="mb-4 text-[rgb(var(--color-navy))]">Body care & beauty</h2>
              <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                Let us help you build a beautiful outside that matches your inside.
              </p>
            </div>
          </div>

          {/* Service Images Row */}
          <div className="mb-12 grid gap-8 lg:grid-cols-2">
            <div className="relative aspect-[3/2] w-full overflow-hidden shadow-md">
              <Image
                src={"/placeholder-grey.svg"}
                alt="Therapy services at Pathways Within"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[3/2] w-full overflow-hidden shadow-md">
              <Image
                src={"/placeholder-grey.svg"}
                alt="Wellness services at Pathways Within"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Services Links Row */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Therapy Links */}
            <div className="flex flex-col gap-3">
              {therapyServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/therapy/${service.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-lg border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))] px-5 py-4 transition-all hover:border-[rgb(var(--color-green))] hover:bg-white hover:shadow-md"
                >
                  <h3 className="text-base text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>
                    {service.name}
                  </h3>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-[rgb(var(--color-text-light))] transition-all group-hover:translate-x-1 group-hover:text-[rgb(var(--color-green))]" />
                </Link>
              ))}
            </div>

            {/* Wellness Links */}
            <div className="flex flex-col gap-3">
              {wellnessServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/wellness/${service.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-lg border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))] px-5 py-4 transition-all hover:border-[rgb(var(--color-green))] hover:bg-white hover:shadow-md"
                >
                  <h3 className="text-base text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>
                    {service.name}
                  </h3>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-[rgb(var(--color-text-light))] transition-all group-hover:translate-x-1 group-hover:text-[rgb(var(--color-green))]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-green))]">
        <div className="container-site py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <p className="text-lg text-white" style={{ fontWeight: 500 }}>
                Not sure which service is right for you?
              </p>
              <p className="text-white/80">Take our quick quiz to get personalized recommendations.</p>
            </div>
            <Link href="/start" className="btn-pill btn-pill-white flex-shrink-0">
              <span className="btn-text">Find Your Path</span>
              <span className="btn-arrow">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Sun className="h-6 w-6 text-[rgb(var(--color-green))]" />
                <p 
                  className="text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
                  style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
                >
                  Insurance & Payment
                </p>
              </div>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Making care accessible</h2>
              <p className="mb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                We are in network for most major insurance providers in New York. Insurance applies to both therapy and applicable wellness services.
              </p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Out of network options are available. We offer a limited number of sliding scale spots based on financial need and availability. We accept cash, major credit cards, and HSA or FSA funds. Cherry financing is available for wellness services.
              </p>
            </div>
            <div className="rounded-lg bg-[rgb(var(--color-linen))] p-8">
              <h3 className="mb-6 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>Insurance providers we accept</h3>
              <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 2 }}>
                Aetna • Cigna • Optum • UHC • Oxford • UMR • Oscar • 1199 • Meritain • Magnacare • Humana • Medicare • NYSHIP • Student Resource Allied Benefit • ComPsych • VA Community Care benefits • MVP • Northwell Brighton Health
              </p>
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
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
              <Link href="/contact" className="btn-pill btn-pill-white">
                <span className="btn-text">Contact Us</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/50">
              Insurance accepted • Same-week appointments available
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
