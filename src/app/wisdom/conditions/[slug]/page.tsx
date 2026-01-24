import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { conditions } from '@/data/conditions'
import { createBreadcrumbSchema } from '@/lib/structured-data'
import { SITE_URL } from '@/lib/site-config'
import { ConditionAnimatedSections } from './animated-sections'

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
  const url = `${SITE_URL}/wisdom/conditions/${slug}`
  return {
    title: condition.name,
    description: condition.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${condition.name} | Pathways Within`,
      description: condition.metaDescription,
      url,
    },
  }
}

export default async function ConditionPage({ params }: PageProps) {
  const { slug } = await params
  const condition = conditions[slug]
  
  if (!condition) notFound()

  const conditionUrl = `${SITE_URL}/wisdom/conditions/${slug}`
  const breadcrumb = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Therapy', url: `${SITE_URL}/wisdom` },
    { name: 'Conditions We Treat', url: `${SITE_URL}/wisdom/conditions` },
    { name: condition.name, url: conditionUrl },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHero
        eyebrow="Conditions We Treat"
        headline={condition.name}
        subheadline={condition.headline}
        body={condition.overview}
        image="/images/hero/hero-original-4-people.jpeg"
        imageAlt={`${condition.name} treatment at Pathways Within`}
        ctaText="Get help today"
        ctaHref="/contact"
      />

      <ConditionAnimatedSections 
        condition={{
          name: condition.name,
          symptoms: condition.symptoms,
          causes: condition.causes,
          prevalence: condition.prevalence,
          treatments: condition.treatments,
          selfCare: condition.selfCare,
          whenToSeekHelp: condition.whenToSeekHelp,
        }}
      />

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
