import { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/site-config'
import { PageHero } from '@/components/sections/page-hero'

export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'Pathways Within is committed to digital accessibility. We aim for WCAG 2.1 AA and welcome feedback.',
  alternates: { canonical: `${SITE_URL}/accessibility` },
  robots: { index: true, follow: true },
}

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Accessibility"
        headline="Accessibility statement"
        body="We are committed to ensuring our website is accessible to everyone. We aim to meet WCAG 2.1 AA where possible."
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
