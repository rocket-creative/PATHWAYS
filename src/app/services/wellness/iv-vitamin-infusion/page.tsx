import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'

export const metadata: Metadata = {
  title: 'IV Vitamin Infusion on Long Island | Pathways Within',
  description: 'IV vitamin therapy at Pathways Within. Deliver essential nutrients directly to your bloodstream for energy, immunity, mental clarity, and recovery.',
}

const benefits = ['Increased energy', 'Enhanced immunity', 'Improved mental clarity', 'Faster recovery', 'Better hydration', 'Nutrient optimization']

const faqs = [
  { q: 'What is IV vitamin therapy?', a: 'IV therapy delivers vitamins, minerals, and hydration directly to your bloodstream, bypassing the digestive system for maximum absorption.' },
  { q: 'How long does a session take?', a: 'Most IV infusions take 30-60 minutes. You can relax comfortably during the treatment.' },
  { q: 'How often should I get IV therapy?', a: 'This depends on your goals. Some people benefit from weekly sessions, while others use IV therapy as needed for recovery or immune support.' },
]

const relatedServices = [
  { name: 'Cryotherapy', href: '/services/wellness/cryotherapy' },
  { name: 'Massage Therapy', href: '/services/wellness/massage' },
  { name: 'Skincare', href: '/services/wellness/skincare' },
]

export default function IVVitaminInfusionPage() {
  return (
    <main>
      <PageHero 
        eyebrow="Wellness Services" 
        headline="IV vitamin infusion" 
        subheadline="Nourish from within" 
        body="Deliver essential nutrients directly to your bloodstream for energy, immunity, mental clarity, and recovery."
        variant="stacked"
        size="sm"
        image={{ alt: 'Comfortable IV therapy lounge', placeholder: true }}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div><p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>About</p><h2 className="text-[rgb(var(--color-navy))]">Maximum absorption</h2></div>
            <div className="space-y-6">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>When you take vitamins orally, only a fraction is absorbed. IV therapy delivers nutrients directly to your cells, ensuring 100% absorption.</p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>Whether you are recovering from illness, preparing for a big event, or simply want to optimize your wellness, IV therapy can help.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">Benefits</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (<div key={b} className="rounded-lg border border-[rgb(var(--border))]/50 bg-white p-6 text-center"><p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{b}</p></div>))}
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
            <h2 className="mb-6 text-white">Ready to feel your best?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to schedule your IV vitamin infusion.</p>
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
