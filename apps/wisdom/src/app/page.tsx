import Link from 'next/link'
import { ArrowRight, Brain, Heart, Users, Shield } from 'lucide-react'
import { PageHero, CTASection, TestimonialSection, InsuranceSection } from '@pathways/ui'

const therapyServices = [
  { name: 'Individual Therapy', slug: 'individual-therapy', description: 'Personal growth, mental health challenges, and life transitions.' },
  { name: 'Child Therapy', slug: 'child-therapy', description: 'Specialized support for children navigating big feelings.' },
  { name: 'Teen Therapy', slug: 'teen-therapy', description: 'Support for adolescents facing unique pressures.' },
  { name: 'Couples Therapy', slug: 'couples-therapy', description: 'Strengthen your connection through improved communication.' },
  { name: 'Trauma Therapy', slug: 'trauma-therapy', description: 'Heal from past experiences with trauma informed care.' },
  { name: 'EMDR Therapy', slug: 'emdr-therapy', description: 'Eye Movement Desensitization and Reprocessing for trauma.' },
  { name: 'Somatic Therapy', slug: 'somatic-therapy', description: 'Address trauma and tension held in the body.' },
  { name: 'Hypnotherapy', slug: 'hypnotherapy', description: 'Access your unconscious mind for healing.' },
  { name: 'Veterans & First Responders', slug: 'veterans-first-responders', description: 'Specialized support for those who protect and serve.' },
  { name: 'Weight Loss Surgery Support', slug: 'weight-loss-surgery-support', description: 'Pre and post operative evaluation and support.' },
]

export default function WisdomHomePage() {
  return (
    <>
      <PageHero
        eyebrow="Therapy Services"
        headline="Mental health & healing"
        body="Our therapy team brings decades of combined experience in mental health. We offer a safe, compassionate space to explore your experiences and find your path forward."
        image="/hero-images/freepik__professional-studio-portrait-of-a-person-diverse-w__19265.jpeg"
        site="wisdom"
      />

      {/* Services Grid */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Our Services</p>
              <h2>Therapy services tailored to you</h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-7">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Every person&apos;s journey is unique. We offer a range of therapeutic approaches to meet you where you are.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {therapyServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-lg border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))] p-6 transition-all hover:border-[rgb(var(--color-green))] hover:bg-white hover:shadow-md"
              >
                <h3 className="mb-2 text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>
                  {service.name}
                </h3>
                <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.6 }}>
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-[rgb(var(--color-green))]">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-4">Why Pathways Within</p>
            <h2>Compassionate, expert care</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Brain, title: 'Evidence-based', desc: 'We use proven therapeutic approaches backed by research.' },
              { icon: Heart, title: 'Trauma-informed', desc: 'All our therapists are trained in trauma-sensitive care.' },
              { icon: Users, title: 'Collaborative', desc: 'We work with you to create your treatment plan.' },
              { icon: Shield, title: 'Confidential', desc: 'Your privacy and trust are our top priorities.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--color-navy))]">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-sm text-[rgb(var(--color-text-light))]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InsuranceSection />
      <TestimonialSection />
      <CTASection site="wisdom" />
    </>
  )
}
