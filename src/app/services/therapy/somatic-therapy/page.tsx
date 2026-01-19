import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'

export const metadata: Metadata = {
  title: 'Somatic Therapy on Long Island | Pathways Within',
  description: 'Address trauma and tension held in the body through somatic therapy at Pathways Within. Mind-body connection techniques for healing on Long Island.',
}

const faqs = [
  { q: 'What is somatic therapy?', a: 'Somatic therapy is a body-centered approach that recognizes the connection between physical sensations and emotional experiences. It helps release trauma and tension stored in the body.' },
  { q: 'How is somatic therapy different from talk therapy?', a: 'While talk therapy focuses on thoughts and emotions, somatic therapy incorporates body awareness, movement, and physical sensation to process experiences held in the body.' },
  { q: 'What happens in a somatic therapy session?', a: 'Sessions may include guided body awareness, breathing exercises, gentle movement, and exploring the physical sensations connected to emotions and memories.' },
  { q: 'Who can benefit from somatic therapy?', a: 'Somatic therapy can help anyone, but it is especially beneficial for those with trauma, chronic stress, anxiety, or physical symptoms with emotional roots.' },
]

const relatedServices = [
  { name: 'Trauma Therapy', href: '/services/therapy/trauma-therapy' },
  { name: 'EMDR Therapy', href: '/services/therapy/emdr-therapy' },
  { name: 'Massage Therapy', href: '/services/wellness/massage' },
  { name: 'Energy Work', href: '/services/wellness/energy-work' },
]

export default function SomaticTherapyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Therapy Services"
        headline="Somatic therapy"
        subheadline="Healing through the body"
        body="Address trauma and tension held in the body through mind-body connection techniques. Somatic therapy recognizes that our bodies hold our experiences and offers a path to release and heal."
        variant="default"
        size="sm"
        image={{ alt: 'Mind-body connection in therapy', placeholder: true }}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>About</p>
              <h2 className="text-[rgb(var(--color-navy))]">The body remembers</h2>
            </div>
            <div className="space-y-6">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Our bodies hold our experiences, including trauma and stress. You might notice tension in your shoulders, a tight chest when anxious, or physical symptoms that seem to have no medical cause.
              </p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Somatic therapy helps you tune into these body signals and work with them to release stored tension and trauma. It's a gentle, powerful approach to healing that honors the whole person.
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
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Mind-body integration</h2>
              <p className="mb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Our somatic therapy sessions may include:
              </p>
              <ul className="space-y-3 text-[rgb(var(--color-text-light))]">
                <li>• Body awareness and tracking sensations</li>
                <li>• Breath work and grounding techniques</li>
                <li>• Gentle movement and release</li>
                <li>• Exploring the physical-emotional connection</li>
                <li>• Building capacity for presence and regulation</li>
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
            <h2 className="mb-6 text-white">Ready to connect mind and body?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to learn more about somatic therapy and how it can support your healing.</p>
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
