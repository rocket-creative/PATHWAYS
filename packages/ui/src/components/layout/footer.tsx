import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { getFooterLinks, getStartUrl, SITE_CONFIG, type SiteName } from '../../lib/site-config'

interface FooterProps {
  site?: SiteName // Kept for backwards compatibility, but footer is now unified
}

/**
 * Footer - Unified footer across all 3 sites
 * All links use absolute URLs so they work seamlessly across domains
 */
export function Footer({ site: _site }: FooterProps) {
  const { services, company, legal, locations } = getFooterLinks()
  const startUrl = getStartUrl()
  const homeUrl = SITE_CONFIG.main.url

  return (
    <footer className="border-t border-[rgb(var(--border))] bg-white">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Brand column */}
          <div className="lg:col-span-4">
            <a href={homeUrl} className="block">
              <Image 
                src="/pathways-logo.png" 
                alt="Pathways Within" 
                width={200} 
                height={200}
                className="h-auto w-[200px]"
              />
            </a>
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
            
            {/* CTA */}
            <a href={startUrl} className="btn-pill btn-pill-green mt-8">
              <span className="btn-text">Get Started</span>
              <span className="btn-arrow">
                <ArrowRight />
              </span>
            </a>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
            <div>
              <h4 
                className="mb-4 text-xs uppercase tracking-[0.2em] text-[rgb(var(--color-text-light))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                Services
              </h4>
              <ul className="space-y-2 text-sm">
                {services.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className={link.label.includes('→') ? 'text-[rgb(var(--color-green))]' : 'text-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-green))]'}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 
                className="mb-4 text-xs uppercase tracking-[0.2em] text-[rgb(var(--color-text-light))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                {company.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className={link.highlight ? 'text-[rgb(var(--color-green))] font-medium' : 'text-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-green))]'}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 
                className="mb-4 text-xs uppercase tracking-[0.2em] text-[rgb(var(--color-text-light))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
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

      {/* Bottom bar */}
      <div className="border-t border-[rgb(var(--border))]">
        <div className="container-site flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-[rgb(var(--color-text-light))]">
            © {new Date().getFullYear()} Pathways Within. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[rgb(var(--color-text-light))]">
            {legal.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-[rgb(var(--color-navy))]">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
