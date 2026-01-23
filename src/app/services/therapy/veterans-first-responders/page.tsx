import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { getHeroImageByIndex } from '@/lib/hero-images'

export const metadata: Metadata = {
  title: 'Veterans & First Responders Therapy | Pathways Within',
  description: 'Specialized therapy for veterans and first responders at Pathways Within. We understand the unique challenges of military service and crisis response work.',
}

const faqs = [
  { q: 'Do you understand military and first responder culture?', a: 'Yes. Our therapists have experience working with veterans and first responders and understand the unique culture, challenges, and strengths of those who serve.' },
  { q: 'What issues do you help with?', a: 'We help with PTSD, combat stress, transition challenges, moral injury, relationship issues, substance use, depression, anxiety, and other concerns common among those who serve.' },
  { q: 'Do you accept VA benefits?', a: 'Yes, we accept VA Community Care benefits. We can help you navigate the process of getting approved for services.' },
  { q: 'Is seeking help a sign of weakness?', a: 'Absolutely not. Seeking help takes courage and strength. Many of the same qualities that make someone effective in service—commitment, perseverance, teamwork—also help in therapy.' },
]

const relatedServices = [
  { name: 'Trauma Therapy', href: '/services/therapy/trauma-therapy' },
  { name: 'EMDR Therapy', href: '/services/therapy/emdr-therapy' },
  { name: 'Individual Therapy', href: '/services/therapy/individual-therapy' },
  { name: 'Couples Therapy', href: '/services/therapy/couples-therapy' },
]

export default function VeteransFirstRespondersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Therapy Services"
        headline="Veterans & first responders"
        subheadline="We understand your service"
        body="Specialized support for those who protect and serve. We understand the unique challenges of military service, law enforcement, firefighting, EMS, and other crisis response work."
        variant="fullBleed"
        size="sm"
        image={{ alt: 'Honoring those who serve - supportive environment for veterans and first responders', placeholder: true }}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>About</p>
              <h2 className="text-[rgb(var(--color-navy))]">We speak your language</h2>
            </div>
            <div className="space-y-6">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Those who serve face unique stressors that civilians may not understand. From combat exposure to the daily traumas of first response, these experiences can take a toll.
              </p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Our therapists have experience working with service members and first responders. We understand the culture, the challenges, and what it takes to seek help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[3/2] w-full overflow-hidden border-8 border-black">
              <Image
                src={"/placeholder-grey.svg"}
                alt="Veterans and first responders therapy at Pathways Within"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Our Approach</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Evidence-based treatment</h2>
              <p className="mb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                We use approaches proven effective for those who serve:
              </p>
              <ul className="space-y-3 text-[rgb(var(--color-text-light))]">
                <li>• PTSD and trauma treatment</li>
                <li>• EMDR therapy</li>
                <li>• Cognitive Processing Therapy</li>
                <li>• Transition and reintegration support</li>
                <li>• Couples and family therapy</li>
                <li>• Substance use support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Insurance</p>
            <h2 className="mb-6 text-[rgb(var(--color-navy))]">VA Community Care accepted</h2>
            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              We accept VA Community Care benefits and can help you navigate the approval process. We also accept most major insurance plans and offer sliding scale options.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
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

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
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
            <h2 className="mb-6 text-white">Ready to take the first step?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to learn more about our services for veterans and first responders.</p>
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
