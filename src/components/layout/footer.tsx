import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { FooterLegal } from './footer-legal'

const services = [
  { href: '/wisdom/services/individual-therapy', label: 'Individual therapy' },
  { href: '/wisdom/services/couples-therapy', label: 'Couples therapy' },
  { href: '/wellness/services/massage', label: 'Massage therapy' },
  { href: '/wellness/services/acupuncture', label: 'Acupuncture' },
]

const company = [
  { href: '/start', label: 'Get Started', highlight: true },
  { href: '/client-intake', label: 'Client intake' },
  { href: '/about', label: 'About us' },
  { href: '/wisdom/team', label: 'Therapy team' },
  { href: '/wellness/team', label: 'Wellness team' },
  { href: '/locations', label: 'Locations' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]


const locations = [
  'Garden City',
  'Port Jefferson', 
  'Massapequa',
  'Smithtown',
  'Rockville Centre',
]

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))] bg-white">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="block">
              <Image 
                src="/logo.png" 
                alt="Pathways Within" 
                width={200} 
                height={200}
                className="h-auto w-[200px]"
              />
            </Link>
            <p className="mt-4 text-sm text-[rgb(var(--color-text-light))]">
              Wisdom and Wellness Collaborative
            </p>
            
            <div className="mt-8">
              <a 
                href="tel:+16313713825" 
                className="text-[rgb(var(--color-navy))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
              >
                (631) 371-3825
              </a>
              <br />
              <a 
                href="mailto:info@pathwayswithin.com" 
                className="text-sm text-[rgb(var(--color-text-light))] hover:text-[rgb(var(--color-navy))]"
              >
                info@pathwayswithin.com
              </a>
            </div>
            
            <Link href="/start" className="btn-pill btn-pill-green mt-8">
              <span className="btn-text">Get Started</span>
              <span className="btn-arrow">
                <ArrowRight />
              </span>
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
            <div>
              <h4 
                className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--color-text-light))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
              >
                Services
              </h4>
              <ul className="space-y-2 text-sm">
                {services.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-green))]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 
                className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--color-text-light))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
              >
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                {company.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className={link.highlight ? 'font-semibold text-[rgb(var(--color-green))]' : 'text-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-green))]'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 
                className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--color-text-light))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
              >
                Locations
              </h4>
              <ul className="space-y-2 text-sm text-[rgb(var(--color-text-light))]">
                {locations.map((location) => (
                  <li key={location}>{location}</li>
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
