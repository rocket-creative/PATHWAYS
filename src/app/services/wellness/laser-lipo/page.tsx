import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'

export const metadata: Metadata = {
  title: 'Laser Lipo on Long Island | Pathways Within',
  description: 'Non-invasive laser lipo body sculpting at Pathways Within. Reduce stubborn fat with no surgery and no downtime on Long Island.',
}

const areas = ['Abdomen', 'Love handles', 'Thighs', 'Arms', 'Back', 'Chin']

const faqs = [
  { q: 'What is laser lipo?', a: 'Laser lipo uses laser energy to target and break down fat cells, which are then naturally eliminated by your body.' },
  { q: 'Is it surgery?', a: 'No, laser lipo is completely non-invasive. There are no incisions, no anesthesia, and no downtime.' },
  { q: 'How many sessions do I need?', a: 'Most people see best results with a series of treatments. We will create a personalized plan during your consultation.' },
  { q: 'When will I see results?', a: 'Some people notice changes immediately, but full results typically develop over several weeks as your body eliminates fat cells.' },
]

const relatedServices = [
  { name: 'Cryotherapy', href: '/services/wellness/cryotherapy' },
  { name: 'IV Vitamin Infusion', href: '/services/wellness/iv-vitamin-infusion' },
  { name: 'Laser Hair Removal', href: '/services/wellness/laser-hair-removal' },
]

export default function LaserLipoPage() {
  return (
    <main>
      <PageHero 
        eyebrow="Wellness Services" 
        headline="Laser lipo" 
        subheadline="Sculpt without surgery" 
        body="Non-invasive body sculpting to reduce stubborn fat with no downtime. Laser lipo offers a safe, effective alternative to surgical liposuction."
        variant="stacked"
        size="sm"
        image={{ alt: 'Modern laser lipo treatment equipment', placeholder: true }}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">Treatment areas</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (<div key={a} className="rounded-lg bg-white p-6 text-center"><p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{a}</p></div>))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="img-placeholder aspect-[4/3]" />
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Benefits</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Why laser lipo?</h2>
              <ul className="space-y-3 text-[rgb(var(--color-text-light))]">
                <li>• Completely non-invasive</li>
                <li>• No downtime required</li>
                <li>• Painless treatment</li>
                <li>• Target stubborn fat areas</li>
                <li>• Natural-looking results</li>
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
            <h2 className="mb-6 text-white">Ready to sculpt your body?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to schedule your laser lipo consultation.</p>
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
