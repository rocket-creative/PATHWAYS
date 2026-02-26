'use client'

import Link from 'next/link'
import { CookieSettingsTrigger } from './cookie-consent'

const legal = [
  { href: '/privacy', label: 'Privacy policy' },
  { href: '/terms', label: 'Terms' },
  { href: '/accessibility', label: 'Accessibility' },
  { href: '/good-faith-estimate', label: 'Good Faith Estimate' },
]

export function FooterLegal() {
  return (
    <div className="border-t border-white/10">
      <div className="container-site flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Pathways Within - Wisdom and Wellness Collaborative. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/30 sm:justify-end">
          {legal.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white/60 transition-colors">
              {link.label}
            </Link>
          ))}
          <CookieSettingsTrigger />
        </div>
      </div>
    </div>
  )
}
