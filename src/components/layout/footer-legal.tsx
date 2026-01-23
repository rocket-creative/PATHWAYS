'use client'

import Link from 'next/link'
import { CookieSettingsTrigger } from './cookie-consent'

const legal = [
  { href: '/privacy', label: 'Privacy policy' },
  { href: '/terms', label: 'Terms' },
  { href: '/accessibility', label: 'Accessibility' },
]

export function FooterLegal() {
  return (
    <div className="border-t border-[rgb(var(--border))]">
      <div className="container-site flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-xs text-[rgb(var(--color-text-light))]">
          © {new Date().getFullYear()} Pathways Within. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[rgb(var(--color-text-light))] sm:justify-end">
          {legal.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[rgb(var(--color-navy))]">
              {link.label}
            </Link>
          ))}
          <CookieSettingsTrigger />
        </div>
      </div>
    </div>
  )
}
