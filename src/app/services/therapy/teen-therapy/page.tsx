import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { getRandomOfficeImage } from '@/lib/office-images'

export const metadata: Metadata = {
  title: 'Teen Therapy on Long Island | Pathways Within',
  description: 'Support for adolescents at Pathways Within. Our therapists help teens navigate school pressures, family dynamics, identity, and the unique challenges of growing up.',
}

const faqs = [
  { q: 'What issues do teens typically work on in therapy?', a: 'Teens often work on anxiety, depression, school stress, social pressures, family conflict, identity exploration, self-esteem, and navigating relationships.' },
  { q: 'Will my teen\'s sessions be confidential?', a: 'We maintain confidentiality with teens while keeping parents informed of progress. We discuss confidentiality boundaries at the start of therapy so everyone knows what to expect.' },
  { q: 'How can I support my teen in therapy?', a: 'Supporting your teen means respecting their privacy while staying engaged. We may provide guidance on how to communicate and support your teen at home.' },
  { q: 'What if my teen doesn\'t want to go to therapy?', a: 'It\'s common for teens to be hesitant. We work to build trust and create a judgment-free space. Many teens become more engaged once they feel heard and understood.' },
]

const relatedServices = [
  { name: 'Child Therapy', href: '/services/therapy/child-therapy' },
  { name: 'Individual Therapy', href: '/services/therapy/individual-therapy' },
  { name: 'Trauma Therapy', href: '/services/therapy/trauma-therapy' },
]

export default function TeenTherapyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Therapy Services"
        headline="Teen therapy"
        subheadline="Navigating the teenage years together"
        body="Support for adolescents facing the unique pressures of school, family, social life, and identity development. Our therapists create a safe, judgment-free space for teens to explore their thoughts and feelings."
        variant="stacked"
        size="sm"
        image={{ alt: 'Modern comfortable therapy space for teens', placeholder: true }}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>About</p>
              <h2 className="text-[rgb(var(--color-navy))]">Understanding teen struggles</h2>
            </div>
            <div className="space-y-6">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                The teenage years bring unique challenges: academic pressure, social dynamics, family relationships, and the journey of discovering who you are. These can feel overwhelming.
              </p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Our therapists specialize in working with adolescents and understand the complexities of this life stage. We meet teens where they are, without judgment, and help them develop skills for both now and the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={getRandomOfficeImage()}
                alt="Teen therapy at Pathways Within"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Our Approach</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Building trust and skills</h2>
              <p className="mb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                We focus on creating a genuine connection with each teen. Through conversation, creative approaches, and evidence-based techniques, we help teens develop:
              </p>
              <ul className="space-y-3 text-[rgb(var(--color-text-light))]">
                <li>• Healthy coping strategies</li>
                <li>• Communication skills</li>
                <li>• Self-awareness and self-esteem</li>
                <li>• Stress management techniques</li>
                <li>• Decision-making skills</li>
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
            <h2 className="mb-6 text-white">Ready to support your teen?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to learn more about teen therapy and find the right fit for your family.</p>
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
