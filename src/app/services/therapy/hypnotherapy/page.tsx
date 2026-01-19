import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'

export const metadata: Metadata = {
  title: 'Hypnotherapy on Long Island | Pathways Within',
  description: 'Access your unconscious mind through hypnotherapy at Pathways Within. Gentle trance states help release psychological, emotional, and physical experiences.',
}

const faqs = [
  { q: 'What is hypnotherapy?', a: 'Hypnotherapy uses guided relaxation and focused attention to reach a heightened state of awareness, sometimes called a trance. In this state, you can explore thoughts, feelings, and memories that may be hidden from your conscious mind.' },
  { q: 'Will I lose control during hypnosis?', a: 'No. Hypnotherapy is not like what you see in movies. You remain aware and in control throughout the session. You cannot be made to do anything against your will.' },
  { q: 'What can hypnotherapy help with?', a: 'Hypnotherapy can help with anxiety, phobias, habits, pain management, sleep issues, and processing difficult experiences. It can also support personal growth and self-improvement goals.' },
  { q: 'How many sessions do I need?', a: 'The number of sessions varies based on your goals. Some issues may improve in just a few sessions, while others benefit from longer-term work.' },
]

const relatedServices = [
  { name: 'Individual Therapy', href: '/services/therapy/individual-therapy' },
  { name: 'Trauma Therapy', href: '/services/therapy/trauma-therapy' },
  { name: 'Energy Work', href: '/services/wellness/energy-work' },
]

export default function HypnotherapyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Therapy Services"
        headline="Hypnotherapy"
        subheadline="Access your inner wisdom"
        body="Access your unconscious mind through gentle trance states to release psychological, emotional, and physical experiences. Hypnotherapy offers a unique pathway to healing and transformation."
        variant="diagonal"
        images={[
          { alt: 'Serene hypnotherapy session environment', placeholder: true }
        ]}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>About</p>
              <h2 className="text-[rgb(var(--color-navy))]">Beyond the conscious mind</h2>
            </div>
            <div className="space-y-6">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Our conscious mind is just the tip of the iceberg. Beneath the surface lies a wealth of memories, beliefs, and patterns that influence our daily lives. Hypnotherapy provides access to this deeper level.
              </p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                In a relaxed, focused state, you can explore and shift patterns that may have been resistant to change through other approaches.
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
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Our Approach</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Safe and supportive</h2>
              <p className="mb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Our hypnotherapy sessions are gentle, client-centered experiences. You might explore:
              </p>
              <ul className="space-y-3 text-[rgb(var(--color-text-light))]">
                <li>• Root causes of current challenges</li>
                <li>• Releasing limiting beliefs</li>
                <li>• Building new positive patterns</li>
                <li>• Accessing inner resources and wisdom</li>
                <li>• Deep relaxation and stress relief</li>
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
            <h2 className="mb-6 text-white">Ready to explore hypnotherapy?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to learn more about hypnotherapy and how it can support your growth.</p>
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
