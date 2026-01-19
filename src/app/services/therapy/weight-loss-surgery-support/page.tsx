import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'

export const metadata: Metadata = {
  title: 'Weight Loss Surgery Support | Pathways Within',
  description: 'Pre-operative evaluation and post-operative counseling for bariatric surgery at Pathways Within. Psychological support throughout your weight loss journey.',
}

const faqs = [
  { q: 'Why is psychological evaluation required for bariatric surgery?', a: 'Most surgeons and insurance companies require a psychological evaluation before approving bariatric surgery. This helps ensure you are mentally prepared for the significant lifestyle changes ahead.' },
  { q: 'What does the evaluation involve?', a: 'The evaluation typically includes discussing your mental health history, relationship with food, support systems, understanding of the surgery, and readiness for lifestyle changes.' },
  { q: 'Do you offer ongoing support after surgery?', a: 'Yes! We offer post-operative counseling to help you navigate the emotional and psychological aspects of your transformation, including body image, relationship changes, and maintaining new habits.' },
  { q: 'How long does the evaluation process take?', a: 'Typically, we can complete the evaluation in 1-2 sessions, though this may vary based on individual circumstances.' },
]

const relatedServices = [
  { name: 'Individual Therapy', href: '/services/therapy/individual-therapy' },
  { name: 'Hypnotherapy', href: '/services/therapy/hypnotherapy' },
  { name: 'IV Vitamin Infusion', href: '/services/wellness/iv-vitamin-infusion' },
]

export default function WeightLossSurgerySupportPage() {
  return (
    <main>
      <PageHero
        eyebrow="Therapy Services"
        headline="Weight loss surgery support"
        subheadline="Psychological care for your journey"
        body="Pre-operative evaluation and post-operative support for those pursuing bariatric surgery. We help you prepare mentally and emotionally for this significant life change."
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>About</p>
              <h2 className="text-[rgb(var(--color-navy))]">More than physical change</h2>
            </div>
            <div className="space-y-6">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Bariatric surgery is a powerful tool for health transformation, but it's about more than physical change. The emotional and psychological aspects of this journey are just as important.
              </p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                We provide comprehensive psychological support before, during, and after your surgery to help you succeed in the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="img-placeholder aspect-[4/3]" />
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Our Services</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Comprehensive support</h2>
              <p className="mb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                We offer support at every stage:
              </p>
              <ul className="space-y-3 text-[rgb(var(--color-text-light))]">
                <li>• Pre-operative psychological evaluation</li>
                <li>• Readiness assessment and preparation</li>
                <li>• Post-operative emotional support</li>
                <li>• Body image counseling</li>
                <li>• Lifestyle change support</li>
                <li>• Relationship navigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">Frequently asked questions</h2>
            <div className="space-y-0">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group border-b border-[rgb(var(--border))]/50">
                  <summary className="flex cursor-pointer items-center justify-between py-6">
                    <span className="pr-8 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{faq.q}</span>
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="pb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">Related services</h2>
          <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-3">
            {relatedServices.map((service) => (
              <Link key={service.href} href={service.href} className="group rounded-lg border border-[rgb(var(--border))]/50 bg-white p-6 text-center transition-all hover:border-[rgb(var(--color-green))] hover:shadow-md">
                <span className="text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>{service.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-white">Ready to start your journey?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to schedule your pre-operative evaluation or learn more about post-operative support.</p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-pill btn-pill-white"><span className="btn-text">Contact us</span><span className="btn-arrow"><ArrowRight /></span></Link>
              <a href="tel:+16313713825" className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Or call (631) 371-3825</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
