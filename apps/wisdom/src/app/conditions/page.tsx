import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero, JsonLd, createBreadcrumbSchema, MedicalDisclaimer } from '@pathways/ui'

export const metadata: Metadata = {
  title: 'Mental health conditions we treat',
  description: 'Learn about the mental health conditions we treat at Pathways Within, including anxiety, depression, trauma, PTSD, and more. Evidence-based care from licensed therapists.',
  openGraph: {
    title: 'Conditions We Treat | Pathways Within Wisdom',
    description: 'Expert treatment for anxiety, depression, trauma, PTSD, and other mental health conditions.',
  },
}

const siteUrl = process.env.NEXT_PUBLIC_WISDOM_URL || 'http://localhost:3001'

const conditions = [
  {
    slug: 'anxiety',
    name: 'Anxiety disorders',
    description: 'Persistent worry, fear, and physical symptoms that interfere with daily life.',
    prevalence: 'Affects 40M+ adults in the U.S.',
  },
  {
    slug: 'depression',
    name: 'Depression',
    description: 'Persistent sadness, loss of interest, and difficulty functioning.',
    prevalence: 'Affects 21M+ adults in the U.S.',
  },
  {
    slug: 'trauma',
    name: 'Trauma and PTSD',
    description: 'Lasting effects from traumatic experiences, including flashbacks and avoidance.',
    prevalence: 'Affects 12M+ adults in the U.S.',
  },
]

const alsoTreated = [
  'Grief and loss',
  'Relationship issues',
  'Life transitions',
  'Stress management',
  'Self-esteem concerns',
  'Anger management',
  'OCD and related disorders',
  'Phobias',
  'Eating concerns',
  'Chronic pain',
  'Caregiver stress',
  'Work-related stress',
]

export default function ConditionsPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Conditions', url: '/conditions' },
  ], siteUrl)

  return (
    <main>
      <JsonLd data={breadcrumbs} />
      
      <PageHero
        eyebrow="Conditions we treat"
        headline="Expert care for mental health"
        body="Our licensed clinicians specialize in treating a wide range of mental health conditions using proven, research-backed approaches. Learn more about specific conditions below."
        image="/hero-images/freepik__professional-studio-portrait-of-a-person-diverse-w__19265.jpeg"
        site="wisdom"
      />

      {/* Main Conditions */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="grid gap-8 lg:grid-cols-3">
            {conditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="group rounded-lg border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))] p-6 transition-all hover:border-[rgb(var(--color-green))] hover:shadow-lg"
              >
                <p className="mb-2 text-xs text-[rgb(var(--color-green))]">{condition.prevalence}</p>
                <h2 className="mb-3 text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]">
                  {condition.name}
                </h2>
                <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.6 }}>
                  {condition.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-[rgb(var(--color-green))]">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Also Treated */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <h2 className="mb-8 text-center">We also help with</h2>
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-3">
              {alsoTreated.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[rgb(var(--border))] bg-white px-4 py-2 text-sm text-[rgb(var(--color-navy))]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section-sm">
          <div className="mx-auto max-w-3xl">
            <MedicalDisclaimer variant="prominent" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">Not sure where to start?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Schedule a consultation and we will help match you with the right therapist for your needs.
          </p>
          <Link href="/services" className="btn-pill btn-pill-white">
            <span className="btn-text">View our services</span>
            <span className="btn-arrow"><ArrowRight aria-hidden="true" /></span>
          </Link>
        </div>
      </section>
    </main>
  )
}
