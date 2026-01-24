import { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/site-config'
import { PageHero } from '@/components/sections/page-hero'
import { 
  createOpenGraph, 
  createTwitterCard, 
  standardRobots,
  createBreadcrumbSchema,
  createWebPageSchema,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Terms of Service | Pathways Within',
  description: 'Pathways Within terms of service. Terms governing use of our website, services, and policies for therapy and wellness clients.',
  alternates: { canonical: `${SITE_URL}/terms` },
  openGraph: createOpenGraph({
    title: 'Terms of Service | Pathways Within',
    description: 'Pathways Within terms of service. Terms governing use of our website, services, and policies for therapy and wellness clients.',
    url: `${SITE_URL}/terms`,
  }),
  twitter: createTwitterCard({
    title: 'Terms of Service | Pathways Within',
    description: 'Pathways Within terms of service. Terms governing use of our website and services.',
  }),
  robots: standardRobots,
}

export default function TermsPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Terms of Service', url: `${SITE_URL}/terms` },
  ])
  const webPageSchema = createWebPageSchema({
    name: 'Terms of Service',
    description: 'Pathways Within terms of service.',
    url: `${SITE_URL}/terms`,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <PageHero
        eyebrow="Legal"
        headline="Terms of service"
        body="Terms governing use of our website and services."
        image="/images/hero/freepik__a-diverse-group-of-three-young-adults-two-women-an__72250.jpeg"
        imageAlt="Pathways Within"
      />
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              This is a placeholder. Replace with your full terms of service.
            </p>
            <Link href="/contact" className="btn-pill btn-pill-primary">
              <span className="btn-text">Contact us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
