import { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/page-hero'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Good Faith Estimate | Pathways Within',
  description: 'Pathways Within provides a Good Faith Estimate for healthcare services. Learn about your right to receive cost estimates before receiving care.',
  alternates: { canonical: `${SITE_URL}/good-faith-estimate` },
  robots: { index: true, follow: true },
}

export default function GoodFaithEstimatePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        headline="Good Faith Estimate"
        body="You have the right to receive a Good Faith Estimate for the total expected cost of healthcare services."
      />
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
            <p className="mb-6">
              Under the No Surprises Act, you have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency healthcare services, including psychotherapy and wellness services. This estimate will be provided before you receive care.
            </p>
            <p className="mb-6">
              If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill. Contact us at <a href="tel:+16313713825" className="text-[rgb(var(--color-green))] underline">(631) 371-3825</a> or <a href="mailto:info@pathwayswithin.com" className="text-[rgb(var(--color-green))] underline">info@pathwayswithin.com</a> to request a Good Faith Estimate or to discuss your care costs.
            </p>
            <Link href="/" className="btn-pill btn-pill-primary">
              <span className="btn-text">Return home</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
