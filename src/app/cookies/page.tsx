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
  title: 'Cookie Policy | Pathways Within',
  description: 'Pathways Within cookie policy. How we use cookies for necessary function, analytics, and marketing, and how you can manage your preferences.',
  alternates: { canonical: `${SITE_URL}/cookies` },
  openGraph: createOpenGraph({
    title: 'Cookie Policy | Pathways Within',
    description: 'How we use cookies and how you can manage your preferences.',
    url: `${SITE_URL}/cookies`,
  }),
  twitter: createTwitterCard({
    title: 'Cookie Policy | Pathways Within',
    description: 'How we use cookies and how you can manage your preferences.',
  }),
  robots: standardRobots,
}

export default function CookiesPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Cookie Policy', url: `${SITE_URL}/cookies` },
  ])
  const webPageSchema = createWebPageSchema({
    name: 'Cookie Policy',
    description: 'Pathways Within cookie policy.',
    url: `${SITE_URL}/cookies`,
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
        eyebrow="Cookie Policy"
        headline="Cookie policy"
        body="We use cookies for necessary site function and, with your consent, analytics and marketing."
        image="/images/hero/hero-4-people.png"
        imageAlt="Pathways Within"
      />
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              We use cookies to make our website work and to improve your experience. Necessary cookies are required for the site to function. We may also use optional cookies for analytics (e.g. to understand how visitors use our site) and marketing (e.g. to deliver relevant content), but only with your consent.
            </p>
            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              You can change your cookie preferences at any time via the Cookie settings link in our footer. For more detail on how we collect and use information, see our{' '}
              <Link href="/privacy" className="text-[rgb(var(--color-green))] underline hover:no-underline">
                Privacy policy
              </Link>
              .
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
