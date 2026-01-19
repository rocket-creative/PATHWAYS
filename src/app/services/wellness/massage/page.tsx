import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'

export const metadata: Metadata = {
  title: 'Massage Therapy on Long Island | Pathways Within',
  description: 'Relax and restore with professional massage therapy at Pathways Within. Swedish, deep tissue, sports, hot stone, and pregnancy massage available on Long Island.',
}

const massageTypes = [
  { name: 'Swedish Massage', desc: 'Classic technique using long, flowing strokes to promote relaxation and improve circulation.' },
  { name: 'Deep Tissue', desc: 'Intense massage targeting deeper layers of muscle tissue for chronic pain and tension.' },
  { name: 'Sports Massage', desc: 'Designed for athletes to prevent injuries, improve performance, and speed recovery.' },
  { name: 'Hot Stone', desc: 'Heated stones warm muscles and promote deep relaxation.' },
  { name: 'Pregnancy Massage', desc: 'Specially designed for expectant mothers to reduce pregnancy-related discomfort.' },
  { name: 'Relaxation Massage', desc: 'Gentle, soothing massage to unwind and recharge.' },
]

const faqs = [
  { q: 'How long should my massage be?', a: 'A typical session is 60 minutes, but we also offer 30-minute express sessions and 90-minute deep dive sessions.' },
  { q: 'How often should I get a massage?', a: 'This depends on your individual needs. Some clients benefit from weekly sessions, while others prefer monthly treatments.' },
  { q: 'What should I expect during my first massage?', a: 'We will discuss your needs and goals, and customize the massage to address your specific concerns. You will be draped for comfort and privacy.' },
]

const relatedServices = [
  { name: 'Acupuncture', href: '/services/wellness/acupuncture' },
  { name: 'Energy Work', href: '/services/wellness/energy-work' },
  { name: 'Somatic Therapy', href: '/services/therapy/somatic-therapy' },
  { name: 'Cryotherapy', href: '/services/wellness/cryotherapy' },
]

export default function MassagePage() {
  return (
    <main>
      <PageHero 
        eyebrow="Wellness Services" 
        headline="Massage therapy" 
        subheadline="Let your mind and body find peace" 
        body="Expert massage therapy from our certified massage therapist. We offer a range of massage styles designed to reduce stress, improve circulation, and promote overall wellness."
        variant="carousel"
        images={[
          { alt: 'Relaxing massage therapy session', placeholder: true },
          { alt: 'Hot stone massage treatment', placeholder: true },
          { alt: 'Professional massage therapist at work', placeholder: true }
        ]}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Benefits</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Why massage therapy?</h2>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>A therapeutic massage is the perfect complement to your wellness journey. Whether you are looking to relieve stress, reduce pain, or simply enjoy some relaxation, our services are tailored to your individual needs.</p>
            </div>
            <div className="img-placeholder aspect-[4/3] rounded-lg" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {['Stress relief', 'Reduced muscle tension', 'Improved circulation', 'Promotes relaxation', 'Increased flexibility', 'Supports better sleep'].map((benefit) => (
              <div key={benefit} className="rounded-lg bg-white p-6"><p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{benefit}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">Types of massage</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {massageTypes.map((type) => (
              <div key={type.name} className="rounded-lg border border-[rgb(var(--border))]/50 p-6">
                <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{type.name}</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>{type.desc}</p>
              </div>
            ))}
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
          <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">Complement your massage</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((service) => (<Link key={service.href} href={service.href} className="group rounded-lg border border-[rgb(var(--border))]/50 bg-white p-6 text-center transition-all hover:border-[rgb(var(--color-green))] hover:shadow-md"><span className="text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>{service.name}</span></Link>))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-white">Ready to relax?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to schedule your massage therapy appointment.</p>
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
