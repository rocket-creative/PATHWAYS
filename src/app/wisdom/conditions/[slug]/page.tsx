import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Check, AlertCircle } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { conditions } from '@/data/conditions'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(conditions).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const condition = conditions[slug]
  
  if (!condition) return { title: 'Condition not found' }
  
  return {
    title: condition.name,
    description: condition.metaDescription,
  }
}

export default async function ConditionPage({ params }: PageProps) {
  const { slug } = await params
  const condition = conditions[slug]
  
  if (!condition) notFound()

  return (
    <>
      <PageHero
        eyebrow="Conditions We Treat"
        headline={condition.name}
        subheadline={condition.headline}
        body={condition.overview}
        image="/images/hero/condition-hero.jpg"
        imageAlt={`${condition.name} treatment at Pathways Within`}
        ctaText="Get help today"
        ctaHref="/contact"
      />

      {/* Symptoms */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mb-12">
            <p className="eyebrow mb-4">Symptoms</p>
            <h2>Common signs and symptoms</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {condition.symptoms.map((symptom) => (
              <div key={symptom.name} className="rounded-lg border border-[rgb(var(--border))]/50 p-6">
                <h3 className="mb-2 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{symptom.name}</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]">{symptom.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site section">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Causes</p>
              <h2 className="mb-8">What contributes to {condition.name.toLowerCase()}</h2>
              <ul className="space-y-4">
                {condition.causes.map((cause) => (
                  <li key={cause} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))]" />
                    <span className="text-[rgb(var(--color-text-light))]">{cause}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-white p-8">
              <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]">Prevalence</p>
              <p className="text-[rgb(var(--color-navy))]" style={{ lineHeight: 1.8 }}>
                {condition.prevalence}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mb-12">
            <p className="eyebrow mb-4">Treatment Options</p>
            <h2>How we can help</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {condition.treatments.map((treatment) => (
              <Link
                key={treatment.name}
                href={treatment.link}
                className="group rounded-lg border border-[rgb(var(--border))]/50 bg-white p-6 transition-all hover:border-[rgb(var(--color-green))] hover:shadow-lg"
              >
                <h3 className="mb-2 text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>
                  {treatment.name}
                </h3>
                <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]">{treatment.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--color-green))]">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Self care and when to seek help */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Self care</p>
              <h2 className="mb-8">What you can do</h2>
              <ul className="space-y-4">
                {condition.selfCare.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))]" />
                    <span className="text-[rgb(var(--color-text-light))]">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">When to Seek Help</p>
              <h2 className="mb-8">Signs you need support</h2>
              <ul className="space-y-4">
                {condition.whenToSeekHelp.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))]" />
                    <span className="text-[rgb(var(--color-text-light))]">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">You do not have to face this alone</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Our compassionate therapists are here to help you understand and overcome {condition.name.toLowerCase()}. Take the first step today.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-pill btn-pill-green">
              <span className="btn-text">Schedule consultation</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
            <Link href="/wisdom/conditions" className="btn-pill btn-pill-white">
              <span className="btn-text">View all conditions</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
