import type { NavLink } from '../types'

export type SiteName = 'main' | 'wisdom' | 'wellness'

/**
 * Site URLs - These are the 3 separate domains required for NY state compliance
 * Despite being on different URLs, the site should look and function as ONE website
 * 
 * Production URLs (Vercel):
 * - Wisdom: https://wisdom-eight-topaz.vercel.app ✅ LIVE
 * - Wellness: https://wellness-phi-three.vercel.app ✅ LIVE
 * - Main: [NEEDS DEPLOYMENT URL] - contains /about, /team, /locations, /contact, /start
 * - CRM: https://crm-sooty-one.vercel.app ✅ LIVE
 * 
 * TODO: Update these URLs once all apps are deployed:
 * 1. Deploy apps/main to Vercel and update NEXT_PUBLIC_MAIN_URL
 */
export const SITE_CONFIG = {
  main: {
    name: 'Pathways Within',
    tagline: 'Wisdom and Wellness Collaborative',
    // TODO: Update with actual main app URL when deployed
    url: process.env.NEXT_PUBLIC_MAIN_URL || 'https://wisdom-eight-topaz.vercel.app',
  },
  wisdom: {
    name: 'Pathways Within',
    tagline: 'Wisdom and Wellness Collaborative',
    url: process.env.NEXT_PUBLIC_WISDOM_URL || 'https://wisdom-eight-topaz.vercel.app',
  },
  wellness: {
    name: 'Pathways Within',
    tagline: 'Wisdom and Wellness Collaborative',
    url: process.env.NEXT_PUBLIC_WELLNESS_URL || 'https://wellness-phi-three.vercel.app',
  },
}

/**
 * Get the base URL for cross-site navigation
 */
export function getSiteUrl(site: SiteName): string {
  return SITE_CONFIG[site].url
}

/**
 * Unified navigation links - SAME on all 3 sites
 * Links point to the appropriate domain based on content type
 */
export function getNavigationLinks(): NavLink[] {
  // Use relative URLs since all pages are on the same site now
  return [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/team', label: 'Team' },
    { href: '/locations', label: 'Locations' },
    { href: '/start', label: 'Get Started' },
    { href: '/client-intake', label: 'PATHWAYS INFO' },
  ]
}

/**
 * Get the contact/booking URL (always on main site)
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
 * Unified footer links - SAME on all 3 sites
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
export function getNavigationForSite(_site: SiteName): NavLink[] {
  return getNavigationLinks()
}

export function getFooterLinksForSite(_site: SiteName) {
  const links = getFooterLinks()
  return {
    services: links.services,
    company: links.company,
  }
}
