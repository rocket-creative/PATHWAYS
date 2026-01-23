import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { getHeroImageByIndex } from '@/lib/hero-images'

export const metadata: Metadata = {
  title: 'Child Therapy on Long Island | Pathways Within',
  description: 'Specialized therapy for children at Pathways Within. Our trained therapists use play therapy and developmentally appropriate techniques to help kids navigate big feelings.',
}

const faqs = [
  { q: 'How do I know if my child needs therapy?', a: 'Signs that your child might benefit from therapy include persistent behavior changes, difficulty managing emotions, trouble at school, withdrawal from activities they used to enjoy, or significant life changes like divorce or loss.' },
  { q: 'What happens in child therapy sessions?', a: 'Child therapy often looks different from adult therapy. We use play therapy, art, and other creative approaches to help children express themselves in age-appropriate ways.' },
  { q: 'Will you involve me in my child\'s therapy?', a: 'Yes, parent involvement is often an important part of child therapy. We may meet with you separately, include you in sessions, or provide guidance on how to support your child at home.' },
  { q: 'How long does child therapy typically last?', a: 'The length of therapy depends on your child\'s specific needs and goals. Some children benefit from short-term therapy, while others may need longer support.' },
]

const relatedServices = [
  { name: 'Teen Therapy', href: '/services/therapy/teen-therapy' },
  { name: 'Individual Therapy', href: '/services/therapy/individual-therapy' },
  { name: 'Trauma Therapy', href: '/services/therapy/trauma-therapy' },
]

export default function ChildTherapyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Therapy Services"
        headline="Child therapy"
        subheadline="Helping children navigate big feelings"
        body="Specialized support for children navigating big feelings and challenging behaviors. We use play therapy and developmentally appropriate techniques to help your child express themselves and develop healthy coping skills."
        variant="centered"
        size="sm"
        image={{ alt: 'Colorful play therapy room', placeholder: true }}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>About</p>
              <h2 className="text-[rgb(var(--color-navy))]">A safe space to grow</h2>
            </div>
            <div className="space-y-6">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Children experience the world differently than adults, and they need therapy that meets them where they are. Our child therapists are specially trained to work with young minds, using creative and engaging approaches.
              </p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Through play, art, and conversation, we help children understand and express their emotions, develop problem-solving skills, and build resilience for life's challenges.
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
                alt="Child therapy at Pathways Within"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Our Approach</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Play therapy and beyond</h2>
              <p className="mb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Play therapy is a powerful tool that allows children to express themselves naturally. Through play, children can work through difficult experiences and emotions in a safe, supportive environment.
              </p>
              <ul className="space-y-3 text-[rgb(var(--color-text-light))]">
                <li>• Play therapy and creative expression</li>
                <li>• Age-appropriate coping skills</li>
                <li>• Parent guidance and support</li>
                <li>• School collaboration when needed</li>
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
            <h2 className="mb-6 text-white">Ready to help your child thrive?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to learn more about child therapy and find the right therapist for your family.</p>
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
