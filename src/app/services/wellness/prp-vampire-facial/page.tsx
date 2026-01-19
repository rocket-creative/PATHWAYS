import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'

export const metadata: Metadata = {
  title: 'PRP Vampire Facial on Long Island | Pathways Within',
  description: 'PRP Vampire Facial at Pathways Within. Harness the power of your own blood to stimulate collagen and rejuvenate your skin naturally.',
}

const benefits = ['Natural rejuvenation', 'Collagen stimulation', 'Improved skin texture', 'Reduced fine lines', 'Even skin tone', 'Long-lasting results']

const faqs = [
  { q: 'What is a PRP Vampire Facial?', a: 'PRP (Platelet-Rich Plasma) uses your own blood to stimulate collagen production and skin rejuvenation. It is combined with microneedling for enhanced results.' },
  { q: 'Is it safe?', a: 'Yes, since we use your own blood, there is virtually no risk of allergic reaction. The procedure is performed by our trained medical professionals.' },
  { q: 'How long until I see results?', a: 'You may notice initial improvement within a few days. Full results develop over several weeks as collagen production increases.' },
  { q: 'Is there downtime?', a: 'Expect some redness and mild swelling for 1-3 days. Most people return to normal activities within 24-48 hours.' },
]

const relatedServices = [
  { name: 'HydraFacial', href: '/services/wellness/hydrafacial' },
  { name: 'Skincare', href: '/services/wellness/skincare' },
  { name: 'Injectables', href: '/services/wellness/injectables' },
]

export default function PRPVampireFacialPage() {
  return (
    <main>
      <PageHero eyebrow="Wellness Services" headline="PRP Vampire Facial" subheadline="Your own natural power" body="Harness the power of your own blood to stimulate collagen and rejuvenate your skin. The PRP Vampire Facial offers natural, long-lasting results." />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div><p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>About</p><h2 className="text-[rgb(var(--color-navy))]">How it works</h2></div>
            <div className="space-y-6">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>We draw a small amount of your blood and process it to concentrate the platelets. This PRP is then applied to your skin with microneedling to stimulate your body's natural healing response.</p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>The result is increased collagen production, improved texture, and a more youthful appearance—all using your own natural growth factors.</p>
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
            <h2 className="mb-6 text-white">Ready to rejuvenate your skin?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to schedule your PRP Vampire Facial.</p>
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
