import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'

export const metadata: Metadata = {
  title: 'Teeth Whitening on Long Island | Pathways Within',
  description: 'Professional teeth whitening at Pathways Within. Brighten your smile by three to twelve shades in just fifteen minutes.',
}

const faqs = [
  { q: 'How white can my teeth get?', a: 'Results vary, but most people see 3-12 shades of improvement in a single session.' },
  { q: 'How long does it take?', a: 'Each session takes about 15 minutes. Multiple sessions can be done in one appointment for maximum results.' },
  { q: 'Is it safe?', a: 'Yes, professional teeth whitening is safe and effective. Some people experience temporary sensitivity that resolves quickly.' },
  { q: 'How long do results last?', a: 'Results can last months to years depending on your diet and habits. Touch-up treatments can maintain your bright smile.' },
]

const relatedServices = [
  { name: 'Skincare', href: '/services/wellness/skincare' },
  { name: 'Injectables', href: '/services/wellness/injectables' },
  { name: 'Permanent Makeup', href: '/services/wellness/permanent-makeup' },
]

export default function TeethWhiteningPage() {
  return (
    <main>
      <PageHero 
        eyebrow="Wellness Services" 
        headline="Teeth whitening" 
        subheadline="Brighten your smile" 
        body="Brighten your smile by three to twelve shades in just fifteen minutes. Professional teeth whitening delivers fast, dramatic results."
        variant="split"
        images={[
          { alt: 'Professional teeth whitening treatment', placeholder: true },
          { alt: 'Bright, confident smile after whitening', placeholder: true }
        ]}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div><p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>About</p><h2 className="text-[rgb(var(--color-navy))]">Fast, visible results</h2></div>
            <div className="space-y-6">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>Your smile is one of the first things people notice. Professional teeth whitening can dramatically brighten your teeth in just one visit.</p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>Unlike over-the-counter products, professional whitening delivers faster, more consistent results with less sensitivity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="img-placeholder aspect-[4/3]" />
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Benefits</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Why professional whitening?</h2>
              <ul className="space-y-3 text-[rgb(var(--color-text-light))]">
                <li>• Dramatically whiter teeth</li>
                <li>• Quick 15-minute sessions</li>
                <li>• Professional-strength results</li>
                <li>• Safer than DIY options</li>
                <li>• Long-lasting brightness</li>
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
            <h2 className="mb-6 text-white">Ready for a brighter smile?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to schedule your teeth whitening appointment.</p>
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
