import { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/site-config'
import { PageHero } from '@/components/sections/page-hero'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Pathways Within privacy policy. How we collect, use, and protect your personal and health information. HIPAA and consent.',
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        headline="Privacy policy"
        body="We take your privacy seriously. This page outlines how we collect, use, and protect your information."
        image="/images/hero/wellness-hero.jpg"
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
