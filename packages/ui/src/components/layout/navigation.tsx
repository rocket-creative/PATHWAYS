'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import { getNavigationLinks, getContactUrl, type SiteName, type NavLinkWithDropdown } from '../../lib/site-config'

interface NavigationProps {
  site?: SiteName
}

/**
 * Navigation - Unified navigation across all sites
 * Features dropdowns for Therapy and Wellness services
 */
export function Navigation({ site = 'main' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const navLinks = getNavigationLinks(site)
  const contactUrl = getContactUrl()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => setIsOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="border-b border-[rgb(var(--border))] bg-white">
      <nav className="flex h-14 items-center justify-between px-6 lg:h-16 lg:px-12">
        
        {/* Logo */}
        <a href={site === 'main' ? '/' : (navLinks[0]?.href || '/')} className="flex-shrink-0">
          <Image 
            src="/pathways-logo.png" 
            alt="Pathways Within" 
            width={120}
            height={40}
            className="h-8 w-auto lg:h-10"
          />
        </a>

        {/* Desktop Navigation */}
        <div ref={dropdownRef} className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <NavItem 
              key={link.label} 
              link={link} 
              isOpen={openDropdown === link.label}
              onToggle={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
              onClose={() => setOpenDropdown(null)}
            />
          ))}
          
          {/* CTA Button */}
          <a 
            href={contactUrl} 
            className="btn-pill btn-pill-primary ml-2 py-2.5 pl-5 pr-2.5 text-sm"
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
        <div className="flex h-14 items-center justify-between px-6">
          <Image src="/pathways-logo.png" alt="Pathways Within" width={100} height={28} className="h-7 w-auto brightness-0 invert" />
          <button onClick={() => setIsOpen(false)} className="p-2 text-white" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="mt-8 flex flex-col gap-4 px-6">
          {navLinks.map((link) => (
            <MobileNavItem key={link.label} link={link} />
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

/**
 * Desktop nav item with optional dropdown
 */
function NavItem({ 
  link, 
  isOpen, 
  onToggle,
  onClose 
}: { 
  link: NavLinkWithDropdown
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}) {
  const hasDropdown = link.dropdown && link.dropdown.length > 0

  if (!hasDropdown) {
    return (
      <a
        href={link.href}
        className="text-sm uppercase tracking-widest transition-colors text-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-green))]"
        style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
      >
        {link.label}
      </a>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm uppercase tracking-widest transition-colors text-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-green))]"
        style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
      >
        {link.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 min-w-[220px] rounded-lg border border-[rgb(var(--border))] bg-white py-2 shadow-lg">
          {/* View all link */}
          <a
            href={link.href}
            onClick={onClose}
            className="block px-4 py-2 text-sm font-medium text-[rgb(var(--color-navy))] hover:bg-[rgb(var(--color-cream))]"
            style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
          >
            View all {link.label.toLowerCase()}
          </a>
          <div className="my-2 h-px bg-[rgb(var(--border))]" />
          
          {link.dropdown?.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block px-4 py-2 text-sm text-[rgb(var(--color-navy))]/80 hover:bg-[rgb(var(--color-cream))] hover:text-[rgb(var(--color-navy))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

/**
 * Mobile nav item with collapsible dropdown
 */
function MobileNavItem({ link }: { link: NavLinkWithDropdown }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasDropdown = link.dropdown && link.dropdown.length > 0

  if (!hasDropdown) {
    return (
      <a
        href={link.href}
        className="text-xl text-white/60 hover:text-white"
        style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}
      >
        {link.label}
      </a>
    )
  }

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between text-xl text-white/60 hover:text-white"
        style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}
      >
        {link.label}
        <ChevronDown className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      
      {isExpanded && (
        <div className="mt-2 space-y-2 pl-4">
          <a
            href={link.href}
            className="block text-sm text-white/40 hover:text-white/80"
            style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
          >
            View all {link.label.toLowerCase()}
          </a>
          {link.dropdown?.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-sm text-white/40 hover:text-white/80"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
