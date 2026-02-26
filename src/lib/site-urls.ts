/**
 * Site URLs Configuration (Simplified)
 * 
 * Single Vercel deployment with multiple domains:
 * - pathwayswithin.com (main site)
 * - wisdom.pathwayswithin.com (therapy)
 * - wellness.pathwayswithin.com (wellness)
 * - crm.pathwayswithin.com (internal)
 * 
 * All domains point to the SAME deployment.
 * Middleware handles domain-specific routing when custom domains are configured.
 * 
 * For now, use relative links - they all work on the single deployment.
 */

// Production domains (for reference and future middleware)
export const PRODUCTION_DOMAINS = {
  main: 'pathwayswithin.com',
  wisdom: 'wisdom.pathwayswithin.com',
  wellness: 'wellness.pathwayswithin.com',
  crm: 'crm.pathwayswithin.com',
} as const

/**
 * Internal links - use relative paths since it's one deployment
 * These work regardless of which domain the user is on
 */
export const LINKS = {
  // Main site pages
  home: '/',
  about: '/about',
  contact: '/contact',
  start: '/start',
  faq: '/faq',
  locations: '/locations',
  
  // Forms (internal use)
  businessIntake: '/business-intake',
  clientIntake: '/client-intake',
  
  // Therapy (Wisdom)
  wisdom: '/wisdom',
  wisdomServices: '/wisdom/services',
  wisdomConditions: '/wisdom/conditions',
  wisdomTeam: '/wisdom/team',
  
  // Wellness
  wellness: '/wellness',
  wellnessServices: '/wellness/services',
  wellnessTeam: '/wellness/team',
  
  // CRM (Internal)
  crm: '/crm',
} as const

// Legacy export for backward compatibility
// TODO: Remove after updating all components to use LINKS
export const CROSS_SITE_LINKS = LINKS
