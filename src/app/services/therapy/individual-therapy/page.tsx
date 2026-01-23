import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { JsonLd } from '@pathways/ui'
import { generateBreadcrumbSchema } from '@/lib/structured-data'
import { HERO_IMAGES } from '@/lib/hero-images'

export const metadata: Metadata = {
  title: 'Individual Therapy on Long Island | Pathways Within',
  description: 'Find personal growth and healing through individual therapy at Pathways Within. Our licensed therapists offer CBT, psychodynamic therapy, and personalized care across Long Island.',
  alternates: {
    canonical: '/services/therapy/individual-therapy',
  },
  openGraph: {
    title: 'Individual Therapy on Long Island | Pathways Within',
    description: 'Find personal growth and healing through individual therapy at Pathways Within.',
    url: '/services/therapy/individual-therapy',
  },
}

const faqs = [
  { q: 'Why would I want to talk to a therapist?', a: 'Therapists are people too! The benefit of talking to a therapist is the training and experience we have collected over the years. Friends can be a great source of support, but they are often unable to provide an unbiased and judgment free perspective. Many people thrive on both: friends who love and cherish you, and a therapist who can help guide and support you.' },
  { q: 'How long do I have to be in therapy?', a: 'Therapy is meant to work for you. The length and frequency will depend on your goals and effort. You get to decide and the process can be as flexible as you need. You can see us for a few months, stop, and start back up again.' },
  { q: 'How confidential is therapy?', a: 'Your privacy is a major ethical concern for us. We adhere to APA and HIPAA guidelines. There are some limitations regarding intent to harm, but aside from those stipulations, what you say is completely confidential.' },
  { q: 'What happens in a counseling session?', a: 'Part of that is entirely up to you. It is a space for you to talk about whatever is on your mind. Your first session will be where you work out your specific concerns. You can think of the therapist like a conductor on a train—you decide which tunnel to explore and your therapist drives the train.' },
]

const relatedServices = [
  { name: 'Couples Therapy', href: '/services/therapy/couples-therapy' },
  { name: 'Trauma Therapy', href: '/services/therapy/trauma-therapy' },
  { name: 'EMDR Therapy', href: '/services/therapy/emdr-therapy' },
  { name: 'Somatic Therapy', href: '/services/therapy/somatic-therapy' },
]

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://pathwayswithin.com' },
  { name: 'Services', url: 'https://pathwayswithin.com/services' },
  { name: 'Individual Therapy', url: 'https://pathwayswithin.com/services/therapy/individual-therapy' },
])

export default function IndividualTherapyPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Therapy Services"
        headline="Individual therapy"
        subheadline='"The shoe that fits one person pinches another; there is no one recipe for living that suits all cases." — Carl Jung'
        body="Individual therapy is classic counseling where you work with a trained professional to explore the roots of your symptoms and gain greater self awareness. The goal is to give you the tools to live a more meaningful life."
        variant="default"
        size="sm"
        image={{ src: HERO_IMAGES.individualTherapy[0], alt: 'Person in peaceful reflection' }}
      />

      {/* About Section */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>About</p>
              <h2 className="text-[rgb(var(--color-navy))]">Self exploration and growth</h2>
            </div>
            <div className="space-y-6">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                The Greek philosopher Aristotle said, "Knowing yourself is the beginning of all wisdom." We believe that any form of therapy is a path to knowing yourself better with the final goal of managing any mental health issues you may experience.
              </p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Some issues that may be coming up for you include anxiety, depression, grief, anger, and low self esteem. Having someone to talk to who is unbiased and judgment free can be incredibly helpful. Add the support and knowledge a skilled therapist brings and you have a winning formula.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[3/2] w-full overflow-hidden border-8 border-black">
              <Image
                src={HERO_IMAGES.individualTherapy[1]}
                alt="Therapy session at Pathways Within"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Our Approach</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Skilled professionals, personalized care</h2>
              <p className="mb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Our therapists are trained, licensed, and experienced in different areas of counseling. Each clinician works with special populations based on their expertise and passions. We have been working for years with people of all kinds of backgrounds.
              </p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                We look to create a journey for each individual that is as individual as they are. We focus on getting to know you, being with you along the way, and figuring out how best to be of service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight: CBT */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Spotlight</p>
            <h2 className="mb-8 text-[rgb(var(--color-navy))]">Cognitive Behavioral Therapy (CBT)</h2>
            <div className="space-y-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              <p>
                One of the methods we use often is Cognitive Behavioral Therapy, or CBT. This is a type of therapy that focuses on achieving one or more goals by rewiring the brain through paying attention to our thoughts, feelings, and behaviors and the ways that they are connected.
              </p>
              <p>
                In this practice, a therapist works to change the patterns of thinking that may lurk behind the negative symptoms that may have originally brought you in for services. Often, CBT reveals the stark difference between what your brain thinks will happen and what will actually happen.
              </p>
              <p>
                To rewire the brain, a therapist will help you identify triggers and problematic thought patterns. By exploring where they originate and learning coping skills, you will be empowered to challenge those negative thoughts and develop a more positive way of thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Related Services */}
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

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-white">Ready to start your journey?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to schedule your first session or learn more about how individual therapy can help you.</p>
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
