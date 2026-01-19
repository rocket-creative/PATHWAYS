import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'

export const metadata: Metadata = {
  title: 'HydraFacial on Long Island | Pathways Within',
  description: 'Revolutionary HydraFacial treatment at Pathways Within. Cleanse, exfoliate, extract, and hydrate for immediate, visible results.',
}

const steps = ['Cleanse & peel', 'Extract & hydrate', 'Fuse & protect', 'LED light therapy']

const faqs = [
  { q: 'What is a HydraFacial?', a: 'HydraFacial is a multi-step treatment that cleanses, exfoliates, extracts impurities, and hydrates your skin using patented technology.' },
  { q: 'How long does it take?', a: 'A typical HydraFacial takes 30-45 minutes. You can return to normal activities immediately.' },
  { q: 'How often should I get a HydraFacial?', a: 'Monthly treatments are recommended to maintain results, but even a single treatment provides visible improvement.' },
]

const relatedServices = [
  { name: 'Skincare & Facials', href: '/services/wellness/skincare' },
  { name: 'PRP Vampire Facial', href: '/services/wellness/prp-vampire-facial' },
  { name: 'Injectables', href: '/services/wellness/injectables' },
]

export default function HydrafacialPage() {
  return (
    <main>
      <PageHero 
        eyebrow="Wellness Services" 
        headline="HydraFacial" 
        subheadline="Immediate, visible results" 
        body="Revolutionary skin rejuvenation that cleanses, exfoliates, extracts, and hydrates with immediate results. The HydraFacial is suitable for all skin types."
        variant="offset"
        size="sm"
        image={{ alt: 'HydraFacial treatment in progress', placeholder: true }}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">The HydraFacial process</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <div key={step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10 text-lg font-medium text-[rgb(var(--color-green))]">{idx + 1}</div>
                <p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="img-placeholder aspect-[4/3]" />
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Benefits</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Why HydraFacial?</h2>
              <ul className="space-y-3 text-[rgb(var(--color-text-light))]">
                <li>• Immediate visible results</li>
                <li>• No downtime required</li>
                <li>• Suitable for all skin types</li>
                <li>• Addresses multiple skin concerns</li>
                <li>• Gentle yet effective</li>
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
            <h2 className="mb-6 text-white">Ready for your best skin?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to schedule your HydraFacial.</p>
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
