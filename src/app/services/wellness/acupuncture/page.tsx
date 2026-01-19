import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'

export const metadata: Metadata = {
  title: 'Acupuncture on Long Island | Pathways Within',
  description: 'Traditional Chinese medicine acupuncture at Pathways Within. Relieve pain, reduce stress, and promote overall well-being through balanced energy flow.',
}

const benefits = ['Pain relief', 'Stress reduction', 'Improved sleep', 'Enhanced energy', 'Digestive support', 'Headache relief', 'Anxiety reduction', 'Immune support']

const faqs = [
  { q: 'Does acupuncture hurt?', a: 'Most people feel minimal to no pain. The needles are very thin, and many people find the experience relaxing.' },
  { q: 'How many sessions will I need?', a: 'This varies based on your condition and goals. Some people feel improvement after one session, while others benefit from ongoing treatment.' },
  { q: 'Is acupuncture safe?', a: 'Yes, when performed by a trained practitioner, acupuncture is very safe. We use sterile, single-use needles.' },
]

const relatedServices = [
  { name: 'Massage Therapy', href: '/services/wellness/massage' },
  { name: 'Energy Work', href: '/services/wellness/energy-work' },
  { name: 'Pain Management', href: '/services/wellness/pain-management' },
]

export default function AcupuncturePage() {
  return (
    <main>
      <PageHero eyebrow="Wellness Services" headline="Acupuncture" subheadline="Ancient wisdom, modern healing" body="Traditional Chinese medicine to relieve pain, reduce stress, and promote overall well-being through balanced energy flow." />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div><p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>About</p><h2 className="text-[rgb(var(--color-navy))]">Restore balance</h2></div>
            <div className="space-y-6">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>Acupuncture is a time-tested healing practice that works by stimulating specific points on the body to restore the natural flow of energy, or qi.</p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>By addressing imbalances in the body's energy system, acupuncture can help with a wide range of physical and emotional conditions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">Benefits of acupuncture</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
            <h2 className="mb-6 text-white">Ready to try acupuncture?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to schedule your appointment.</p>
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
