import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
// Placeholder images used

export const metadata: Metadata = {
  title: 'Pain Management on Long Island | Pathways Within',
  description: 'Comprehensive pain relief at Pathways Within. Trigger point injections, medical massage, and consultation for chronic and acute pain management.',
}

const treatments = ['Trigger point injections', 'Medical massage', 'Pain consultation', 'Integrative approaches']

const faqs = [
  { q: 'What conditions do you treat?', a: 'We help with chronic pain, muscle tension, headaches, back pain, neck pain, and other musculoskeletal conditions.' },
  { q: 'What are trigger point injections?', a: 'Trigger point injections deliver medication directly to tight, painful muscle knots to relieve pain and improve function.' },
  { q: 'Will I need ongoing treatment?', a: 'This depends on your condition. Some people find relief after a few sessions, while others benefit from ongoing care.' },
]

const relatedServices = [
  { name: 'Massage Therapy', href: '/services/wellness/massage' },
  { name: 'Acupuncture', href: '/services/wellness/acupuncture' },
  { name: 'Cryotherapy', href: '/services/wellness/cryotherapy' },
]

export default function PainManagementPage() {
  return (
    <main>
      <PageHero 
        eyebrow="Wellness Services" 
        headline="Pain management" 
        subheadline="Find relief, restore function" 
        body="Comprehensive pain relief through trigger point injections, medical massage, and consultation. We help you manage chronic and acute pain effectively."
        variant="default"
        size="sm"
        image={{ alt: 'Pain management consultation', placeholder: true }}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div><p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>About</p><h2 className="text-[rgb(var(--color-navy))]">Comprehensive care</h2></div>
            <div className="relative aspect-[3/2] w-full overflow-hidden border-8 border-black">
              <Image
                src={"/placeholder-grey.svg"}
                alt="Pathways Within office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="mt-12 space-y-6">
            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>Living with pain affects every aspect of your life. Our integrative approach addresses pain from multiple angles for more effective relief.</p>
            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>We combine medical interventions with hands-on therapies to help you reduce pain, improve function, and enhance your quality of life.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">Our treatments</h2>
          <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-2">
            {treatments.map((t) => (<div key={t} className="rounded-lg border border-[rgb(var(--border))]/50 bg-white p-6 text-center"><p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{t}</p></div>))}
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
            <h2 className="mb-6 text-white">Ready to find relief?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to schedule a pain management consultation.</p>
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
