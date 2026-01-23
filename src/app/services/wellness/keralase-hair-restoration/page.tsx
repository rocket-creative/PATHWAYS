import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { getHeroImageByIndex } from '@/lib/hero-images'

export const metadata: Metadata = {
  title: 'KeraLase Hair Restoration on Long Island | Pathways Within',
  description: 'Advanced KeraLase hair restoration at Pathways Within. Rejuvenate and revitalize your scalp with laser technology for thicker, healthier hair.',
}

const faqs = [
  { q: 'What is KeraLase?', a: 'KeraLase combines laser technology with a specialized serum to stimulate hair follicles and promote hair growth.' },
  { q: 'How many sessions do I need?', a: 'Most patients see best results with a series of treatments. We will create a personalized plan during your consultation.' },
  { q: 'Is it painful?', a: 'The treatment is comfortable for most patients. You may feel mild warmth during the laser portion.' },
  { q: 'When will I see results?', a: 'Results vary, but many patients notice improvement within a few months of starting treatment.' },
]

const relatedServices = [
  { name: 'PRP Vampire Facial', href: '/services/wellness/prp-vampire-facial' },
  { name: 'IV Vitamin Infusion', href: '/services/wellness/iv-vitamin-infusion' },
  { name: 'Skincare', href: '/services/wellness/skincare' },
]

export default function KeralaseHairRestorationPage() {
  return (
    <main>
      <PageHero 
        eyebrow="Wellness Services" 
        headline="KeraLase hair restoration" 
        subheadline="Revitalize your hair" 
        body="Rejuvenate and revitalize your scalp with advanced laser technology for hair restoration. KeraLase promotes thicker, healthier hair growth."
        variant="centered"
        size="sm"
        image={{ alt: 'KeraLase hair restoration treatment', placeholder: true }}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div><p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>About</p><h2 className="text-[rgb(var(--color-navy))]">How KeraLase works</h2></div>
            <div className="space-y-6">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>KeraLase uses laser energy to create micro-channels in the scalp, allowing a specialized growth serum to penetrate deeply and stimulate hair follicles.</p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>This non-invasive treatment is suitable for both men and women experiencing hair thinning or loss.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
              <Image
                src={getHeroImageByIndex(0)}
                alt="KeraLase hair restoration at Pathways Within"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Benefits</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Why KeraLase?</h2>
              <ul className="space-y-3 text-[rgb(var(--color-text-light))]">
                <li>• Non-invasive treatment</li>
                <li>• No downtime</li>
                <li>• Suitable for men and women</li>
                <li>• Promotes natural hair growth</li>
                <li>• Improves scalp health</li>
              </ul>
            </div>
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
            <h2 className="mb-6 text-white">Ready to restore your hair?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to schedule a KeraLase consultation.</p>
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
