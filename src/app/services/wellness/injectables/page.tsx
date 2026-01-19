import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'

export const metadata: Metadata = {
  title: 'Injectables on Long Island | Pathways Within',
  description: 'Botox, dermal fillers, and Kybella at Pathways Within. Refresh your appearance with injectables administered by our medical professionals.',
}

const treatments = [
  { name: 'Botox', desc: 'Smooth fine lines and wrinkles by relaxing facial muscles.' },
  { name: 'Dermal Fillers', desc: 'Restore volume and contour to cheeks, lips, and other areas.' },
  { name: 'Kybella', desc: 'Reduce double chin with this FDA-approved treatment.' },
]

const faqs = [
  { q: 'Are injectables safe?', a: 'Yes, when administered by trained medical professionals. Our team has extensive experience with aesthetic injectables.' },
  { q: 'How long do results last?', a: 'Botox typically lasts 3-4 months. Fillers can last 6 months to 2 years depending on the product and area treated.' },
  { q: 'Is there downtime?', a: 'Most people return to normal activities immediately. Some temporary swelling or bruising may occur.' },
]

const relatedServices = [
  { name: 'HydraFacial', href: '/services/wellness/hydrafacial' },
  { name: 'PRP Vampire Facial', href: '/services/wellness/prp-vampire-facial' },
  { name: 'Skincare', href: '/services/wellness/skincare' },
]

export default function InjectablesPage() {
  return (
    <main>
      <PageHero 
        eyebrow="Wellness Services" 
        headline="Injectables" 
        subheadline="Refresh your natural beauty" 
        body="Refresh your appearance with Botox, dermal fillers, and Kybella administered by our medical professionals."
        variant="default"
        size="sm"
        image={{ alt: 'Professional injectable treatment consultation', placeholder: true }}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">Our treatments</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {treatments.map((t) => (
              <div key={t.name} className="rounded-lg bg-white p-8">
                <h3 className="mb-4 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{t.name}</h3>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>{t.desc}</p>
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
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Expert Care</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Medical professionals</h2>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>All injectable treatments are performed by our trained medical professionals who prioritize natural-looking results and your safety.</p>
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
            <h2 className="mb-6 text-white">Ready to refresh your look?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to schedule a consultation.</p>
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
