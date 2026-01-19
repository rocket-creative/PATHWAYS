'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { getNavigationLinks, getContactUrl, type SiteName } from '../../lib/site-config'

interface NavigationProps {
  site?: SiteName // Kept for backwards compatibility, but nav is now unified
}

/**
 * Navigation - Unified navigation across all 3 sites
 * All links use absolute URLs so they work seamlessly across domains
 */
export function Navigation({ site: _site }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const navLinks = getNavigationLinks()
  const contactUrl = getContactUrl()

  useEffect(() => setIsOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header className="border-b border-[rgb(var(--border))] bg-white">
      <nav className="flex h-14 items-center justify-end px-6 lg:h-16 lg:px-12">

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest transition-colors text-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
          
          {/* CTA Button */}
          <a 
            href={contactUrl} 
            className="btn-pill btn-pill-primary ml-4 py-2.5 pl-5 pr-2.5 text-sm"
          >
            <span className="btn-text">Book now</span>
            <span className="btn-arrow !h-6 !w-6">
              <ArrowRight className="!h-3.5 !w-3.5" />
            </span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[rgb(var(--color-navy))] lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-[rgb(var(--color-navy))] transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-14 items-center justify-end px-6">
          <button onClick={() => setIsOpen(false)} className="p-2 text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="mt-8 flex flex-col gap-6 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl text-white/60 hover:text-white"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}
            >
              {link.label}
            </a>
          ))}
          
          <div className="my-6 h-px w-16 bg-white/30" />
          
          {/* Mobile CTA */}
          <a href={contactUrl} className="btn-pill btn-pill-white w-fit">
            <span className="btn-text">Book a session</span>
            <span className="btn-arrow">
              <ArrowRight />
            </span>
          </a>
          
          <a href="tel:+16313713825" className="mt-4 text-white/60">(631) 371-3825</a>
        </nav>
      </div>
    </header>
  )
}
