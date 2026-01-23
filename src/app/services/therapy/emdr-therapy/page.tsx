import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { getHeroImageByIndex } from '@/lib/hero-images'

export const metadata: Metadata = {
  title: 'EMDR Therapy on Long Island | Pathways Within',
  description: 'Eye Movement Desensitization and Reprocessing (EMDR) therapy at Pathways Within. Heal from trauma without extensive talk therapy. Internationally recognized for treating PTSD.',
}

const faqs = [
  { q: 'What is EMDR?', a: 'EMDR (Eye Movement Desensitization and Reprocessing) is a structured therapy that helps you process traumatic memories using bilateral stimulation, typically eye movements, while focusing on disturbing memories.' },
  { q: 'How does EMDR work?', a: 'EMDR helps your brain process stuck memories. Through guided eye movements or other bilateral stimulation, your brain can reprocess traumatic memories so they no longer cause distress.' },
  { q: 'Is EMDR effective?', a: 'Yes, EMDR is internationally recognized as an effective treatment for PTSD and trauma. Research shows it can produce results more quickly than traditional talk therapy for many people.' },
  { q: 'What can EMDR treat?', a: 'EMDR is most commonly used for trauma and PTSD, but it can also help with anxiety, depression, phobias, and other conditions rooted in disturbing experiences.' },
]

const relatedServices = [
  { name: 'Trauma Therapy', href: '/services/therapy/trauma-therapy' },
  { name: 'Somatic Therapy', href: '/services/therapy/somatic-therapy' },
  { name: 'Individual Therapy', href: '/services/therapy/individual-therapy' },
]

export default function EMDRTherapyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Therapy Services"
        headline="EMDR therapy"
        subheadline="Heal from trauma, differently"
        body="Eye Movement Desensitization and Reprocessing helps you heal from trauma without extensive talk therapy. Internationally recognized for treating PTSD and other trauma-related conditions."
        variant="centered"
        size="sm"
        image={{ alt: 'Calm, focused therapy environment for EMDR', placeholder: true }}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>About</p>
              <h2 className="text-[rgb(var(--color-navy))]">A different approach to healing</h2>
            </div>
            <div className="space-y-6">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                EMDR is unique because it doesn't require you to talk in detail about disturbing events or complete homework between sessions. Instead, it uses your brain's natural healing processes to process traumatic memories.
              </p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Many people find EMDR produces results more quickly than traditional therapy, making it an attractive option for those seeking relief from trauma symptoms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
              <Image
                src={getHeroImageByIndex(0)}
                alt="EMDR therapy at Pathways Within"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>The Process</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">What to expect</h2>
              <p className="mb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                EMDR follows a structured eight-phase approach:
              </p>
              <ul className="space-y-3 text-[rgb(var(--color-text-light))]">
                <li>• History taking and treatment planning</li>
                <li>• Preparation and building coping skills</li>
                <li>• Assessment of target memories</li>
                <li>• Desensitization through bilateral stimulation</li>
                <li>• Installation of positive beliefs</li>
                <li>• Body scan and closure</li>
                <li>• Reevaluation and ongoing support</li>
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
            <h2 className="mb-6 text-white">Ready to try EMDR?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to learn more about EMDR therapy and see if it's right for you.</p>
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
