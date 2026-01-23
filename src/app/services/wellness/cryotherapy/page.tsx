import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
// Placeholder images used

export const metadata: Metadata = {
  title: 'Cryotherapy on Long Island | Pathways Within',
  description: 'Whole body cryotherapy at Pathways Within. Reduce inflammation, accelerate recovery, and boost wellness through cold therapy on Long Island.',
}

const benefits = ['Reduced inflammation', 'Faster recovery', 'Pain relief', 'Boosted metabolism', 'Improved sleep', 'Enhanced mood', 'Increased energy', 'Better skin tone']

const faqs = [
  { q: 'What is cryotherapy?', a: 'Cryotherapy exposes your body to extremely cold temperatures for a short period, triggering natural healing responses and reducing inflammation.' },
  { q: 'How long is a session?', a: 'A typical cryotherapy session lasts 2-3 minutes. The entire appointment takes about 15-20 minutes.' },
  { q: 'Is it cold?', a: 'Yes, but the session is brief. Most people find it invigorating rather than uncomfortable. Your head stays above the chamber.' },
  { q: 'How often should I do cryotherapy?', a: 'For best results, many people do 2-3 sessions per week initially, then maintain with weekly sessions.' },
]

const relatedServices = [
  { name: 'IV Vitamin Infusion', href: '/services/wellness/iv-vitamin-infusion' },
  { name: 'Massage Therapy', href: '/services/wellness/massage' },
  { name: 'Pain Management', href: '/services/wellness/pain-management' },
]

export default function CryotherapyPage() {
  return (
    <main>
      <PageHero 
        eyebrow="Wellness Services" 
        headline="Cryotherapy" 
        subheadline="The power of cold" 
        body="Reduce inflammation, accelerate recovery, and boost wellness through whole body cold therapy. Cryotherapy harnesses extreme cold to trigger your body's natural healing processes."
        variant="fullBleed"
        size="sm"
        image={{ alt: 'Modern cryotherapy chamber with cool blue lighting', placeholder: true }}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">Benefits of cryotherapy</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (<div key={b} className="rounded-lg bg-white p-6 text-center"><p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{b}</p></div>))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[3/2] w-full overflow-hidden border-8 border-black">
              <Image
                src={"/placeholder-grey.svg"}
                alt="Cryotherapy at Pathways Within"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>How It Works</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Brief but powerful</h2>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>During cryotherapy, you stand in a chamber while nitrogen-cooled air surrounds your body. The extreme cold triggers vasoconstriction, reducing inflammation and promoting healing. After the session, your body warms up, improving circulation and delivering nutrients to tissues.</p>
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
            <h2 className="mb-6 text-white">Ready to try cryotherapy?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to schedule your cryotherapy session.</p>
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
