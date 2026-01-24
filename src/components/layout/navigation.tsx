'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'

interface NavLink {
  href: string
  label: string
  dropdown?: { href: string; label: string }[]
}

const THERAPY_SERVICES = [
  { slug: 'individual-therapy', label: 'Individual Therapy' },
  { slug: 'couples-therapy', label: 'Couples Therapy' },
  { slug: 'child-therapy', label: 'Child Therapy' },
  { slug: 'teen-therapy', label: 'Teen Therapy' },
  { slug: 'trauma-therapy', label: 'Trauma Therapy' },
  { slug: 'emdr-therapy', label: 'EMDR Therapy' },
]

const WELLNESS_SERVICES = [
  { slug: 'massage', label: 'Massage Therapy' },
  { slug: 'acupuncture', label: 'Acupuncture' },
  { slug: 'skincare', label: 'Skincare' },
  { slug: 'hydrafacial', label: 'HydraFacial' },
  { slug: 'injectables', label: 'Injectables' },
  { slug: 'iv-vitamin-infusion', label: 'IV Vitamin Infusion' },
]

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { 
    href: '/wisdom/services', 
    label: 'Therapy',
    dropdown: [
      ...THERAPY_SERVICES.map(s => ({
        href: `/wisdom/services/${s.slug}`,
        label: s.label
      })),
      { href: '/wisdom/team', label: 'Meet Our Therapists' }
    ]
  },
  { 
    href: '/wellness/services', 
    label: 'Wellness',
    dropdown: [
      ...WELLNESS_SERVICES.map(s => ({
        href: `/wellness/services/${s.slug}`,
        label: s.label
      })),
      { href: '/wellness/team', label: 'Meet Our Wellness Team' }
    ]
  },
  { href: '/locations', label: 'Locations' },
  { href: '/start', label: 'Get Started' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => setIsOpen(false), [pathname])

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
    <header className="border-b border-[rgb(var(--border))] bg-white">
      <nav className="flex h-14 items-center justify-between px-6 lg:h-16 lg:px-12">
        {/* Admin Intake Button - Top Left */}
        <Link 
          href="/business-intake"
          className="rounded bg-red-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-700 transition-colors"
        >
          Intake
        </Link>

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
          <Link 
            href="/contact" 
            className="btn-pill btn-pill-primary ml-2 py-2.5 pl-5 pr-2.5 text-sm"
          >
            <span className="btn-text">Book now</span>
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
        <div className="flex h-14 items-center justify-between px-6">
          <Link 
            href="/business-intake"
            className="rounded bg-red-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-700 transition-colors"
          >
            Intake
          </Link>
          <button onClick={() => setIsOpen(false)} className="p-2 text-white" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="mt-8 flex flex-col gap-4 px-6">
          {navLinks.map((link) => (
            <MobileNavItem key={link.label} link={link} />
          ))}
          
          <div className="my-6 h-px w-16 bg-white/30" />
          
          <Link href="/contact" className="btn-pill btn-pill-white w-fit">
            <span className="btn-text">Book a session</span>
            <span className="btn-arrow">
              <ArrowRight />
            </span>
          </Link>
          
          <a href="tel:+16313713825" className="mt-4 text-white/60">(631) 371-3825</a>
        </nav>
      </div>
    </header>
  )
}

function NavItem({ 
  link, 
  isOpen, 
  onToggle,
  onClose 
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
        className="text-sm uppercase tracking-widest transition-colors text-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-green))]"
        style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 300 }}
      >
        {link.label}
      </Link>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm uppercase tracking-widest transition-colors text-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-green))]"
        style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 300 }}
      >
        {link.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 min-w-[220px] rounded-lg border border-[rgb(var(--border))] bg-white py-2 shadow-lg">
          <Link
            href={link.href}
            onClick={onClose}
            className="block px-4 py-2 text-sm font-medium text-[rgb(var(--color-navy))] hover:bg-[rgb(var(--color-cream))]"
            style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
          >
            View all {link.label.toLowerCase()}
          </Link>
          <div className="my-2 h-px bg-[rgb(var(--border))]" />
          
          {link.dropdown?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block px-4 py-2 text-sm text-[rgb(var(--color-navy))]/80 hover:bg-[rgb(var(--color-cream))] hover:text-[rgb(var(--color-navy))]"
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

function MobileNavItem({ link }: { link: NavLink }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasDropdown = link.dropdown && link.dropdown.length > 0

  if (!hasDropdown) {
    return (
      <Link
        href={link.href}
        className="text-xl text-white/60 hover:text-white"
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
        className="flex w-full items-center justify-between text-xl text-white/60 hover:text-white"
        style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}
      >
        {link.label}
        <ChevronDown className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      
      {isExpanded && (
        <div className="mt-2 space-y-2 pl-4">
          <Link
            href={link.href}
            className="block text-sm text-white/40 hover:text-white/80"
            style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
          >
            View all {link.label.toLowerCase()}
          </Link>
          {link.dropdown?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm text-white/40 hover:text-white/80"
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
