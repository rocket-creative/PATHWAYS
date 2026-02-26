'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { FooterLegal } from './footer-legal'

const mentalHealth = [
  { href: '/wisdom/services/individual-therapy', label: 'Individual Therapy' },
  { href: '/wisdom/services/couples-therapy', label: 'Couples Therapy' },
  { href: '/wisdom/services/trauma-therapy', label: 'Trauma Therapy' },
  { href: '/wisdom/services/emdr-therapy', label: 'EMDR Therapy' },
  { href: '/wisdom/services/child-therapy', label: 'Child Therapy' },
  { href: '/wisdom/services/teen-therapy', label: 'Teen Therapy' },
]

const wellness = [
  { href: '/wellness/services/massage', label: 'Massage Therapy' },
  { href: '/wellness/services/acupuncture', label: 'Acupuncture' },
  { href: '/wellness/services/skincare', label: 'Skincare' },
  { href: '/wellness/services/iv-vitamin-infusion', label: 'IV Vitamin Infusion' },
  { href: '/wisdom/services/medication-management', label: 'Medication Management' },
]

const company = [
  { href: '/about', label: 'About Us' },
  { href: '/providers', label: 'Our Providers' },
  { href: '/locations', label: 'Locations' },
  { href: '/faq', label: 'FAQ' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

const locationNames = [
  'Garden City — Wisdom',
  'Garden City — Wellness',
  'Port Jefferson',
  'Massapequa',
  'Smithtown',
  'Rockville Centre',
]

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))] bg-[rgb(var(--color-navy))]">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="block">
              <Image
                src="/logo.png"
                alt="Pathways Within"
                width={180}
                height={180}
                className="h-auto w-[160px] brightness-0 invert"
              />
            </Link>
            <p className="mt-3 text-sm text-white/50">
              Wisdom and Wellness Collaborative
            </p>

            <div className="mt-8 space-y-1">
              <a
                href="tel:+16313713825"
                className="block text-white/80 hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
              >
                (631) 371-3825
              </a>
              <a
                href="mailto:info@pathwayswithin.com"
                className="block text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                info@pathwayswithin.com
              </a>
            </div>

            <Link href="/client-intake" className="btn-pill btn-pill-green mt-8">
              <span className="btn-text">GET STARTED</span>
              <span className="btn-arrow">
                <ArrowRight />
              </span>
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6 xl:grid-cols-4">
            <div>
              <h4
                className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
              >
                Mental Health
              </h4>
              <ul className="space-y-2 text-sm">
                {mentalHealth.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
              >
                Wellness
              </h4>
              <ul className="space-y-2 text-sm">
                {wellness.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
              >
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                {company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
              >
                Locations
              </h4>
              <ul className="space-y-2 text-sm">
                {locationNames.map((loc) => (
                  <li key={loc} className="text-white/60">{loc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <FooterLegal />
    </footer>
  )
}
