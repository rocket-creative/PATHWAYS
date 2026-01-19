// Layout components
export { Navigation } from './components/layout/navigation'
export { Footer } from './components/layout/footer'

// Section components
export { HeroSection } from './components/sections/hero'
export { PageHero } from './components/sections/page-hero'
export { ApproachSection } from './components/sections/approach'
export { ServicesOverview } from './components/sections/services-overview'
export { WhyPathways } from './components/sections/why-pathways'
export { TeamPreview } from './components/sections/team-preview'
export { LocationsPreview } from './components/sections/locations-preview'
export { InsuranceSection } from './components/sections/insurance'
export { FAQPreview } from './components/sections/faq-preview'
export { TestimonialSection } from './components/sections/testimonial'
export { CTASection } from './components/sections/cta'
export { ServiceFinder } from './components/sections/service-finder'

// UI components
export { CrisisBanner } from './components/ui/crisis-banner'
export { CookieConsent } from './components/ui/cookie-consent'
export { Button, buttonVariants } from './components/ui/button'

// SEO components
export { JsonLd } from './components/seo/json-ld'
export { MedicalDisclaimer } from './components/seo/medical-disclaimer'
export { ContentMeta } from './components/seo/content-meta'
export { SourcesCitations, AUTHORITATIVE_SOURCES } from './components/seo/sources-citations'

// Analytics
export { ConsentScripts } from './components/analytics/consent-scripts'

// Utilities
export { cn, formatPhone, formatPhoneHref, prefersReducedMotion, debounce } from './lib/utils'
export { useScrollAnimation, scrollToNextSection } from './lib/use-scroll-animation'

// Structured Data (JSON-LD) for SEO/AI
export {
  createOrganizationSchema,
  createLocalBusinessSchema,
  createServiceSchema,
  createFAQSchema,
  createBreadcrumbSchema,
  createWebPageSchema,
  LOCATIONS,
  INSURANCE_PROVIDERS,
  type ServiceSchema,
  type LocationSchema,
  type FAQSchema,
} from './lib/structured-data'

// Types
export type { SiteConfig, NavLink, Location, Service, TeamMember, FAQ } from './types'

// Site configuration
export { 
  SITE_CONFIG,
  getSiteUrl,
  getNavigationLinks,
  getContactUrl,
  getStartUrl,
  getFooterLinks,
  // Legacy exports for backwards compatibility
  getNavigationForSite,
  getFooterLinksForSite,
  type SiteName 
} from './lib/site-config'
