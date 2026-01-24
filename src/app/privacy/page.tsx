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
  title: 'Privacy Policy | Pathways Within',
  description: 'Pathways Within privacy policy. Learn how we collect, use, and protect your personal and health information. HIPAA compliance and consent information.',
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: createOpenGraph({
    title: 'Privacy Policy | Pathways Within',
    description: 'Pathways Within privacy policy. Learn how we collect, use, and protect your personal and health information. HIPAA compliance and consent information.',
    url: `${SITE_URL}/privacy`,
  }),
  twitter: createTwitterCard({
    title: 'Privacy Policy | Pathways Within',
    description: 'Pathways Within privacy policy. Learn how we collect, use, and protect your personal and health information.',
  }),
  robots: standardRobots,
}

export default function PrivacyPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Privacy Policy', url: `${SITE_URL}/privacy` },
  ])
  const webPageSchema = createWebPageSchema({
    name: 'Privacy Policy',
    description: 'Pathways Within privacy policy and HIPAA information.',
    url: `${SITE_URL}/privacy`,
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
        headline="Privacy policy"
        body="We take your privacy seriously. This page outlines how we collect, use, and protect your information."
        image="/images/hero/freepik__a-diverse-group-of-three-young-adults-two-women-an__72250.jpeg"
        imageAlt="Pathways Within"
      />
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              This is a placeholder. Replace with your full privacy policy, cookie policy, and data practices.
              Include HIPAA notice, consent, and contact details for privacy requests.
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
