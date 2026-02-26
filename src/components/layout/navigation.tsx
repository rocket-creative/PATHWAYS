'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'

interface DropdownItem {
  href: string
  label: string
  description?: string
}

interface NavLink {
  href: string
  label: string
  dropdown?: DropdownItem[]
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  {
    href: '/about',
    label: 'About',
    dropdown: [
      { href: '/about', label: 'Our Story', description: 'Vision, mission, and the 360° approach' },
      { href: '/about#leadership', label: 'Leadership', description: 'Management and welcome team' },
      { href: '/careers', label: 'Careers', description: 'Join the Collaborative' },
    ],
  },
  {
    href: '/wisdom/services',
    label: 'Services',
    dropdown: [
      { href: '/wisdom/services', label: 'Mental Health', description: 'Therapy, counseling, and more' },
      { href: '/wellness/services', label: 'Wellness', description: 'Holistic body and aesthetic care' },
      { href: '/wisdom/services/medication-management', label: 'Medication Management', description: 'Psychiatric evaluation and care' },
    ],
  },
  { href: '/providers', label: 'Our Providers' },
  { href: '/locations', label: 'Locations' },
  { href: '/faq', label: 'FAQ' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => setIsOpen(false), [pathname])
  useEffect(() => setOpenDropdown(null), [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

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
    <header className="sticky top-0 z-40 border-b border-[rgb(var(--border))] bg-white">
      <nav className="flex h-16 items-center justify-between px-6 lg:h-[4.5rem] lg:px-12 xl:px-16">

        {/* Wordmark */}
        <Link
          href="/"
          className="flex-shrink-0 transition-opacity hover:opacity-60"
          aria-label="Pathways Within — home"
        >
          <span
            className="text-[rgb(var(--color-navy))] text-[0.8125rem] tracking-[0.12em]"
            style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}
          >
            PATHWAYS WITHIN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div ref={dropdownRef} className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <NavItem
              key={link.label}
              link={link}
              isOpen={openDropdown === link.label}
              onToggle={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
              onClose={() => setOpenDropdown(null)}
            />
          ))}

          <Link
            href="/client-intake"
            className="btn-pill btn-pill-primary ml-2 py-2.5 pl-5 pr-2.5 text-sm"
          >
            <span className="btn-text">GET STARTED</span>
            <span className="btn-arrow !h-6 !w-6">
              <ArrowRight className="!h-3.5 !w-3.5" />
            </span>
          </Link>
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
        <div className="flex h-16 items-center justify-between px-6">
          <span
            className="text-white text-[0.8125rem] tracking-[0.12em]"
            style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}
          >
            PATHWAYS WITHIN
          </span>
          <button onClick={() => setIsOpen(false)} className="p-2 text-white" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-6 flex flex-col gap-1 overflow-y-auto px-6 pb-20">
          {navLinks.map((link) => (
            <MobileNavItem key={link.label} link={link} />
          ))}

          <div className="my-6 h-px w-16 bg-white/20" />

          <Link href="/client-intake" className="btn-pill btn-pill-green w-fit">
            <span className="btn-text">GET STARTED</span>
            <span className="btn-arrow">
              <ArrowRight />
            </span>
          </Link>

          <a href="tel:+16313713825" className="mt-6 text-sm text-white/40">(631) 371-3825</a>
        </nav>
      </div>
    </header>
  )
}

function NavItem({
  link,
  isOpen,
  onToggle,
  onClose,
}: {
  link: NavLink
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}) {
  const hasDropdown = link.dropdown && link.dropdown.length > 0

  if (!hasDropdown) {
    return (
      <Link
        href={link.href}
        className="group relative py-1 text-[0.875rem] text-[rgb(var(--color-navy))]/60 transition-colors duration-200 hover:text-[rgb(var(--color-navy))]"
        style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}
      >
        {link.label}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[rgb(var(--color-green))] transition-[width] duration-300 group-hover:w-full" aria-hidden="true" />
      </Link>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="group relative flex items-center gap-1 py-1 text-[0.875rem] text-[rgb(var(--color-navy))]/60 transition-colors duration-200 hover:text-[rgb(var(--color-navy))]"
        style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}
        aria-expanded={isOpen}
      >
        {link.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[rgb(var(--color-green))] transition-[width] duration-300 group-hover:w-full" aria-hidden="true" />
      </button>

      {/* Dropdown — always rendered, toggled via CSS for smooth animation */}
      <div
        className={`absolute left-0 top-full z-50 mt-2 min-w-[280px] border border-[rgb(var(--border))]/60 bg-white shadow-2xl transition-all duration-200 ${
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0'
        }`}
      >
        <div className="py-2">
          {link.dropdown?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group/item block px-5 py-3.5 transition-colors duration-150 hover:bg-[rgb(var(--color-cream))]"
            >
              <span
                className="block text-[0.875rem] text-[rgb(var(--color-navy))] transition-colors group-hover/item:text-[rgb(var(--color-navy))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 600 }}
              >
                {item.label}
              </span>
              {item.description && (
                <span className="mt-0.5 block text-xs text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.5 }}>
                  {item.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileNavItem({ link }: { link: NavLink }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasDropdown = link.dropdown && link.dropdown.length > 0

  if (!hasDropdown) {
    return (
      <Link
        href={link.href}
        className="py-3 text-lg text-white/70 hover:text-white"
        style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}
      >
        {link.label}
      </Link>
    )
  }

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between py-3 text-lg text-white/70 hover:text-white"
        style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}
      >
        {link.label}
        <ChevronDown className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {isExpanded && (
        <div className="mb-2 mt-1 space-y-1 border-l border-white/10 pl-4">
          {link.dropdown?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm text-white/50 hover:text-white/90"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
