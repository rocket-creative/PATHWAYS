import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { getHeroImageByIndex } from '@/lib/hero-images'

export const metadata: Metadata = {
  title: 'Energy Work on Long Island | Pathways Within',
  description: 'Reiki and Integrative Energy Therapy at Pathways Within. Promote healing, release stored emotions, and enhance your inner spirit.',
}

const modalities = [
  { name: 'Reiki', desc: 'A Japanese technique for stress reduction and relaxation that promotes healing through energy transfer.' },
  { name: 'Integrative Energy Therapy', desc: 'Works with cellular memory to release suppressed emotions and limiting beliefs.' },
]

const faqs = [
  { q: 'What is energy work?', a: 'Energy work is a holistic practice that works with the body\'s energy systems to promote healing, balance, and well-being.' },
  { q: 'What will I experience during a session?', a: 'Many people feel deep relaxation, warmth, tingling, or emotional release. Some see colors or images. Every experience is unique.' },
  { q: 'Is energy work safe?', a: 'Yes, energy work is gentle and non-invasive. It can complement other treatments and therapies.' },
]

const relatedServices = [
  { name: 'Massage Therapy', href: '/services/wellness/massage' },
  { name: 'Acupuncture', href: '/services/wellness/acupuncture' },
  { name: 'Somatic Therapy', href: '/services/therapy/somatic-therapy' },
]

export default function EnergyWorkPage() {
  return (
    <main>
      <PageHero 
        eyebrow="Wellness Services" 
        headline="Energy work" 
        subheadline="Heal from within" 
        body="Reiki and Integrative Energy Therapy to promote healing, release stored emotions, and enhance your inner spirit."
        variant="centered"
        size="sm"
        image={{ alt: 'Peaceful energy healing session', placeholder: true }}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div><p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>About</p><h2 className="text-[rgb(var(--color-navy))]">Balance your energy</h2></div>
            <div className="relative aspect-[3/2] w-full overflow-hidden">
              <Image
                src={getHeroImageByIndex(17)}
                alt="Pathways Within office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="mt-12 space-y-6">
            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>Energy work addresses the subtle energy systems of the body that influence our physical, emotional, and spiritual well-being.</p>
            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>By working with these energy systems, we can release blockages, restore balance, and support your natural healing processes.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">Our modalities</h2>
          <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
            {modalities.map((m) => (
              <div key={m.name} className="rounded-lg border border-[rgb(var(--border))]/50 p-8">
                <h3 className="mb-4 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{m.name}</h3>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">Frequently asked questions</h2>
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border-b border-[rgb(var(--border))]/50">
                <summary className="flex cursor-pointer items-center justify-between py-6"><span className="pr-8 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{faq.q}</span><ChevronDown className="h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))] transition-transform group-open:rotate-180" /></summary>
                <p className="pb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">Related services</h2>
          <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-3">
            {relatedServices.map((service) => (<Link key={service.href} href={service.href} className="group rounded-lg border border-[rgb(var(--border))]/50 bg-white p-6 text-center transition-all hover:border-[rgb(var(--color-green))] hover:shadow-md"><span className="text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>{service.name}</span></Link>))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-white">Ready to experience energy work?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to schedule your session.</p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-pill btn-pill-white"><span className="btn-text">Book now</span><span className="btn-arrow"><ArrowRight /></span></Link>
              <a href="tel:+16313713825" className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Or call (631) 371-3825</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
