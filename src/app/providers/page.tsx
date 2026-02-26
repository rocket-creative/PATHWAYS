import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { ArrowRight } from 'lucide-react'
import { SITE_URL } from '@/lib/site-config'
import { ProviderDirectory } from './provider-directory'
import { ResourcesSection } from '@/components/sections/resources-section'

export const metadata: Metadata = {
  title: 'Our Providers | Pathways Within',
  description: 'Browse providers at Pathways Within - Wisdom and Wellness Collaborative. Filter by category, location, specialization, or population served.',
  alternates: { canonical: `${SITE_URL}/providers` },
  openGraph: {
    title: 'Our Providers | Pathways Within',
    url: `${SITE_URL}/providers`,
  },
}

export default function ProvidersPage() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen bg-[rgb(var(--color-cream))]" />}>
        <ProviderDirectory />
      </Suspense>
      <ResourcesSection />
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-white">Ready to get started?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>
              Complete our intake form and our front desk will match you with the right provider.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/client-intake" className="btn-pill btn-pill-green">
                <span className="btn-text">COMPLETE INTAKE FORM</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </Link>
              <Link href="/contact" className="btn-pill btn-pill-white">
                <span className="btn-text">CONTACT US</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
