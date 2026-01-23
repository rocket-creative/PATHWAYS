import { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/site-config'
import { PageHero } from '@/components/sections/page-hero'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Pathways Within terms of service. Use of our website and services.',
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        headline="Terms of service"
        body="Terms governing use of our website and services."
        image="/images/hero/wisdom-hero.jpg"
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
