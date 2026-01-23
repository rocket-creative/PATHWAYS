import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { getHeroImageByIndex } from '@/lib/hero-images'

export const metadata: Metadata = {
  title: 'Permanent Makeup on Long Island | Pathways Within',
  description: 'Permanent makeup services at Pathways Within. Enhance your natural beauty with microblading, lip liner, and other permanent cosmetic services.',
}

const services = ['Microblading eyebrows', 'Lip liner & blushing', 'Eyeliner', 'Beauty marks', 'Scar camouflage', 'Areola restoration']

const faqs = [
  { q: 'What is permanent makeup?', a: 'Permanent makeup uses micropigmentation to implant color into the skin, creating the appearance of makeup that does not wash off.' },
  { q: 'How long does it last?', a: 'Results typically last 1-3 years depending on the area treated and your skin type. Touch-ups can maintain your results.' },
  { q: 'Is it painful?', a: 'We use topical numbing to minimize discomfort. Most clients find the procedure tolerable.' },
  { q: 'How long is the healing process?', a: 'Initial healing takes about 7-10 days. The color will appear darker at first and soften as it heals.' },
]

const relatedServices = [
  { name: 'Injectables', href: '/services/wellness/injectables' },
  { name: 'Skincare', href: '/services/wellness/skincare' },
  { name: 'Teeth Whitening', href: '/services/wellness/teeth-whitening' },
]

export default function PermanentMakeupPage() {
  return (
    <main>
      <PageHero 
        eyebrow="Wellness Services" 
        headline="Permanent makeup" 
        subheadline="Wake up beautiful" 
        body="Enhance your natural beauty with microblading, lip liner, and other permanent cosmetic services. Save time on your daily routine with long-lasting results."
        variant="offset"
        size="sm"
        image={{ alt: 'Beautiful microblading results', placeholder: true }}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">Our services</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (<div key={s} className="rounded-lg bg-white p-6 text-center"><p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{s}</p></div>))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
              <Image
                src={getHeroImageByIndex(16)}
                alt="Permanent makeup at Pathways Within"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Benefits</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Why permanent makeup?</h2>
              <ul className="space-y-3 text-[rgb(var(--color-text-light))]">
                <li>• Save time every morning</li>
                <li>• Always look polished</li>
                <li>• Sweatproof and waterproof</li>
                <li>• Natural-looking enhancement</li>
                <li>• Ideal for busy lifestyles</li>
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
            <h2 className="mb-6 text-white">Ready to enhance your beauty?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to schedule your permanent makeup consultation.</p>
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
