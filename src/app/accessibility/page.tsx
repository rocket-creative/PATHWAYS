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
  title: 'Accessibility Statement | Pathways Within',
  description: 'Pathways Within accessibility statement. We are committed to digital accessibility and aim for WCAG 2.1 AA compliance. We welcome feedback.',
  alternates: { canonical: `${SITE_URL}/accessibility` },
  openGraph: createOpenGraph({
    title: 'Accessibility Statement | Pathways Within',
    description: 'Pathways Within accessibility statement. We are committed to digital accessibility and aim for WCAG 2.1 AA compliance. We welcome feedback.',
    url: `${SITE_URL}/accessibility`,
  }),
  twitter: createTwitterCard({
    title: 'Accessibility Statement | Pathways Within',
    description: 'Pathways Within accessibility statement. We are committed to digital accessibility and WCAG 2.1 AA compliance.',
  }),
  robots: standardRobots,
}

export default function AccessibilityPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Accessibility', url: `${SITE_URL}/accessibility` },
  ])
  const webPageSchema = createWebPageSchema({
    name: 'Accessibility Statement',
    description: 'Pathways Within accessibility statement and WCAG compliance.',
    url: `${SITE_URL}/accessibility`,
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
        eyebrow="Accessibility"
        headline="Accessibility statement"
        body="We are committed to ensuring our website is accessible to everyone. We aim to meet WCAG 2.1 AA where possible."
        image="/images/hero/freepik__a-diverse-group-of-three-young-adults-two-women-an__72250.jpeg"
        imageAlt="Pathways Within"
      />
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              This is a placeholder. Replace with your accessibility statement, including standards, limitations, and contact for feedback.
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
