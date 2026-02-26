import { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/site-config'
import { PageHero } from '@/components/sections/page-hero'
import { ArrowRight } from 'lucide-react'
import {
  createOpenGraph,
  createTwitterCard,
  standardRobots,
  createBreadcrumbSchema,
  createWebPageSchema,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Good Faith Estimate | Pathways Within',
  description: 'Your right to a Good Faith Estimate of the total expected cost of care at Pathways Within. Information for uninsured and self-pay clients.',
  alternates: { canonical: `${SITE_URL}/good-faith-estimate` },
  openGraph: createOpenGraph({
    title: 'Good Faith Estimate | Pathways Within',
    description: 'Your right to a Good Faith Estimate of the total expected cost of care.',
    url: `${SITE_URL}/good-faith-estimate`,
  }),
  twitter: createTwitterCard({
    title: 'Good Faith Estimate | Pathways Within',
    description: 'Your right to a Good Faith Estimate of the total expected cost of care.',
  }),
  robots: standardRobots,
}

export default function GoodFaithEstimatePage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Good Faith Estimate', url: `${SITE_URL}/good-faith-estimate` },
  ])
  const webPageSchema = createWebPageSchema({
    name: 'Good Faith Estimate',
    description: 'Good Faith Estimate notice for Pathways Within.',
    url: `${SITE_URL}/good-faith-estimate`,
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
        eyebrow="Good Faith Estimate"
        headline="Good Faith Estimate"
        body="You have the right to receive a Good Faith Estimate of the total expected cost of your care."
        image="/images/hero/hero-4-people.png"
        imageAlt="Pathways Within"
      />
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              Under the No Surprises Act, health care providers must give clients who are uninsured or self pay a Good Faith Estimate of the total expected cost of services. The estimate is based on what we reasonably expect your care to involve.
            </p>
            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              You can request a Good Faith Estimate before you schedule a service. If you receive a bill that is at least $400 more than your Good Faith Estimate, you have the right to dispute the bill. Make sure to keep a copy of your estimate.
            </p>
            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              For questions about our fees, a written estimate, or the dispute process, please contact us.
            </p>
            <Link href="/contact" className="btn-pill btn-pill-primary inline-flex">
              <span className="btn-text">Contact us</span>
              <span className="btn-arrow">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
