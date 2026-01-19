import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Brain } from 'lucide-react'
import { PageHero } from '@pathways/ui'

export const metadata: Metadata = {
  title: 'Therapy Services',
  description: 'Explore our comprehensive therapy services including individual, couples, child, teen, trauma, and EMDR therapy.',
}

const therapyServices = [
  { name: 'Individual Therapy', slug: 'individual-therapy', description: 'Classic counseling for personal growth, mental health challenges, and life transitions.' },
  { name: 'Child Therapy', slug: 'child-therapy', description: 'Specialized support for children navigating big feelings and challenging behaviors.' },
  { name: 'Teen Therapy', slug: 'teen-therapy', description: 'Support for adolescents facing the unique pressures of school, family, and identity.' },
  { name: 'Couples Therapy', slug: 'couples-therapy', description: 'Strengthen your connection through improved communication and conflict resolution.' },
  { name: 'Trauma Therapy', slug: 'trauma-therapy', description: 'Heal from past experiences with specialized approaches and trauma informed care.' },
  { name: 'EMDR Therapy', slug: 'emdr-therapy', description: 'Eye Movement Desensitization and Reprocessing helps you heal from trauma.' },
  { name: 'Somatic Therapy', slug: 'somatic-therapy', description: 'Address trauma and tension held in the body through mind body connection.' },
  { name: 'Hypnotherapy', slug: 'hypnotherapy', description: 'Access your unconscious mind through gentle trance states for healing.' },
  { name: 'Veterans & First Responders', slug: 'veterans-first-responders', description: 'Specialized support for those who protect and serve.' },
  { name: 'Weight Loss Surgery Support', slug: 'weight-loss-surgery-support', description: 'Pre and post operative evaluation and support for bariatric surgery.' },
]

export default function TherapyServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Therapy Services"
        headline="Mental health support for every stage of life"
        body="Our licensed therapists offer a range of evidence-based approaches to help you heal, grow, and thrive."
        site="wisdom"
        layout="trio"
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            {therapyServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex gap-4 rounded-lg border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))] p-6 transition-all hover:border-[rgb(var(--color-green))] hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                  <Brain className="h-5 w-5 text-[rgb(var(--color-green))]" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>
                    {service.name}
                  </h3>
                  <p className="mb-3 text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.6 }}>
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-[rgb(var(--color-green))]">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
