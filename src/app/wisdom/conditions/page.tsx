import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { conditionsList } from '@/data/conditions'
import { SITE_URL } from '@/lib/site-config'
import { 
  createOpenGraph, 
  createTwitterCard, 
  standardRobots,
  createBreadcrumbSchema,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Mental Health Conditions We Treat | Pathways Within',
  description: 'Learn about mental health conditions we treat at Pathways Within, including anxiety, depression, and trauma. Evidence based treatment from licensed therapists.',
  alternates: { canonical: `${SITE_URL}/wisdom/conditions` },
  openGraph: createOpenGraph({
    title: 'Mental Health Conditions We Treat | Pathways Within',
    description: 'Learn about mental health conditions we treat at Pathways Within, including anxiety, depression, and trauma. Evidence based treatment from licensed therapists.',
    url: `${SITE_URL}/wisdom/conditions`,
  }),
  twitter: createTwitterCard({
    title: 'Mental Health Conditions We Treat | Pathways Within',
    description: 'Learn about mental health conditions we treat at Pathways Within, including anxiety, depression, and trauma.',
  }),
  robots: standardRobots,
}

export default function ConditionsPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Therapy', url: `${SITE_URL}/wisdom` },
    { name: 'Conditions', url: `${SITE_URL}/wisdom/conditions` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        eyebrow="Conditions"
        headline="Conditions we treat"
        body="We provide expert, compassionate care for a range of mental health conditions. Learn about symptoms, causes, and evidence-based treatments available at Pathways Within."
        image="/images/hero/hero-original-4-people.jpeg"
        imageAlt="Mental health support at Pathways Within"
      />

      {/* Conditions Grid */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="grid gap-8 md:grid-cols-3">
            {conditionsList.map((condition) => (
              <Link
                key={condition.slug}
                href={`/wisdom/conditions/${condition.slug}`}
                className="group rounded-lg border border-[rgb(var(--border))]/50 bg-white p-8 transition-all hover:border-[rgb(var(--color-green))] hover:shadow-lg"
              >
                <h3 className="mb-2 text-xl font-medium text-[rgb(var(--color-navy))]">
                  {condition.name}
                </h3>
                <p className="mb-4 text-sm text-[rgb(var(--color-green))]">
                  {condition.headline}
                </p>
                <p className="mb-6 text-sm text-[rgb(var(--color-text-light))] line-clamp-3">
                  {condition.overview}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--color-green))]">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-[rgb(var(--color-navy))]">Struggling with something not listed?</h2>
            <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              We treat many conditions beyond those listed here. Contact us to discuss your specific situation and how we can help.
            </p>
            <Link href="/contact" className="btn-pill btn-pill-primary">
              <span className="btn-text">Get in touch</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
