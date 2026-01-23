import type { NavLink } from '../types'

export type SiteName = 'main' | 'wisdom' | 'wellness' | 'crm'

/**
 * Site URLs - Multi-app architecture
 * 
 * Main app = Hub with shared pages (about, team, locations, contact, start, faq)
 * Wisdom app = Therapy services only
 * Wellness app = Wellness services only
 * 
 * Production URLs:
 * - Main: pathwayswithin.com (or current Vercel URL)
 * - Wisdom: wisdom-eight-topaz.vercel.app
 * - Wellness: wellness-phi-three.vercel.app
 * - CRM: crm-sooty-one.vercel.app
 */
export const SITE_CONFIG = {
  main: {
    name: 'Pathways Within',
    tagline: 'Wisdom and Wellness Collaborative',
    url: process.env.NEXT_PUBLIC_MAIN_URL || 'https://pathways-2-eight.vercel.app',
  },
  wisdom: {
    name: 'Pathways Within',
    tagline: 'Therapy Services',
    url: process.env.NEXT_PUBLIC_WISDOM_URL || 'https://wisdom-eight-topaz.vercel.app',
  },
  wellness: {
    name: 'Pathways Within',
    tagline: 'Wellness Services',
    url: process.env.NEXT_PUBLIC_WELLNESS_URL || 'https://wellness-phi-three.vercel.app',
  },
  crm: {
    name: 'Pathways CRM',
    tagline: 'Internal Dashboard',
    url: process.env.NEXT_PUBLIC_CRM_URL || 'https://crm-sooty-one.vercel.app',
  },
}

/**
 * Get the base URL for a site
 */
export function getSiteUrl(site: SiteName): string {
  return SITE_CONFIG[site].url
}

/**
 * Get navigation links for a specific site
 * - Main app: all relative URLs
 * - Wisdom/Wellness: shared pages point to main app, services stay relative
 */
export function getNavigationLinks(site: SiteName = 'main'): NavLink[] {
  const mainUrl = SITE_CONFIG.main.url
  
  if (site === 'main') {
    // Main app - all relative
    return [
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
      { href: '/team', label: 'Team' },
      { href: '/locations', label: 'Locations' },
      { href: '/start', label: 'Get Started' },
    ]
  }
  
  // Wisdom/Wellness - shared pages go to main, services stay relative
  return [
    { href: `${mainUrl}/about`, label: 'About' },
    { href: '/services', label: 'Services' },
    { href: `${mainUrl}/team`, label: 'Team' },
    { href: `${mainUrl}/locations`, label: 'Locations' },
    { href: `${mainUrl}/start`, label: 'Get Started' },
  ]
}

/**
 * Get the contact URL (always on main site)
 */
export function getContactUrl(): string {
  return `${SITE_CONFIG.main.url}/contact`
}

/**
 * Get the start/onboarding URL (always on main site)
 */
export function getStartUrl(): string {
  return `${SITE_CONFIG.main.url}/start`
}

/**
 * Unified footer links
 */
export function getFooterLinks() {
  const mainUrl = SITE_CONFIG.main.url
  const wisdomUrl = SITE_CONFIG.wisdom.url
  const wellnessUrl = SITE_CONFIG.wellness.url

  return {
    services: [
      { href: `${wisdomUrl}/services/individual-therapy`, label: 'Individual therapy' },
      { href: `${wisdomUrl}/services/couples-therapy`, label: 'Couples therapy' },
      { href: `${wellnessUrl}/services/massage`, label: 'Massage therapy' },
      { href: `${wellnessUrl}/services/acupuncture`, label: 'Acupuncture' },
      { href: `${mainUrl}/services`, label: 'View all →' },
    ],
    company: [
      { href: `${mainUrl}/start`, label: 'Get Started', highlight: true },
      { href: `${mainUrl}/about`, label: 'About us' },
      { href: `${mainUrl}/team`, label: 'Our team' },
      { href: `${mainUrl}/locations`, label: 'Locations' },
      { href: `${mainUrl}/faq`, label: 'FAQ' },
      { href: `${mainUrl}/contact`, label: 'Contact' },
    ],
    legal: [
      { href: `${mainUrl}/privacy`, label: 'Privacy policy' },
      { href: `${mainUrl}/terms`, label: 'Terms' },
      { href: `${mainUrl}/accessibility`, label: 'Accessibility' },
    ],
    locations: [
      'Garden City',
      'Port Jefferson', 
      'Massapequa',
      'Smithtown',
      'Rockville Centre',
    ],
  }
}

// Legacy exports for backwards compatibility
export function getNavigationForSite(site: SiteName): NavLink[] {
  return getNavigationLinks(site)
}

export function getFooterLinksForSite(_site: SiteName) {
  const links = getFooterLinks()
  return {
    services: links.services,
    company: links.company,
  }
}
