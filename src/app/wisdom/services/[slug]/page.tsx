import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { therapyServices } from '@/data/therapy-services'
import { createBreadcrumbSchema, createMedicalTherapySchema } from '@/lib/structured-data'
import { SITE_URL } from '@/lib/site-config'
import { ServiceAnimatedSections } from './animated-sections'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(therapyServices).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = therapyServices[slug]
  if (!service) return { title: 'Service not found' }
  const url = `${SITE_URL}/wisdom/services/${slug}`
  return {
    title: service.name,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.name} | Pathways Within Therapy`,
      description: service.metaDescription,
      url,
    },
  }
}

export default async function TherapyServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = therapyServices[slug]
  
  if (!service) notFound()

  const serviceUrl = `${SITE_URL}/wisdom/services/${slug}`
  const breadcrumb = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Therapy', url: `${SITE_URL}/wisdom` },
    { name: 'Therapy Services', url: `${SITE_URL}/wisdom/services` },
    { name: service.name, url: serviceUrl },
  ])
  const therapySchema = createMedicalTherapySchema({
    name: service.name,
    description: service.description,
    url: serviceUrl,
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(therapySchema) }} />
      <PageHero
        eyebrow="Therapy Services"
        headline={service.name}
        subheadline={service.headline}
        body={service.description}
        image="/images/hero/hero-original-4-people.jpeg"
        imageAlt={`${service.name} at Pathways Within`}
        ctaText="Schedule consultation"
        ctaHref="/contact"
      />

      <ServiceAnimatedSections 
        service={{
          name: service.name,
          benefits: service.benefits,
          whatToExpect: service.whatToExpect,
          duration: service.duration,
          relatedServices: service.relatedServices,
        }}
        relatedServicesData={service.relatedServices
          .map((relatedSlug) => {
            const related = therapyServices[relatedSlug]
            if (!related) return null
            return { slug: relatedSlug, name: related.name, headline: related.headline }
          })
          .filter((r): r is { slug: string; name: string; headline: string } => r !== null)
        }
      />

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">Ready to get started?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Schedule a consultation to learn more about {service.name.toLowerCase()} and whether it is right for you.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-pill btn-pill-white">
              <span className="btn-text">Schedule consultation</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
            <Link href="/wisdom/services" className="btn-pill btn-pill-outline">
              <ArrowLeft className="h-4 w-4" />
              <span className="btn-text">All services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
