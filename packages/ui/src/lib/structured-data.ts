/**
 * Structured Data (JSON-LD) Schemas for AI/Search Optimization
 * 
 * These schemas help search engines and AI systems understand:
 * - What the business is (Organization, MedicalBusiness)
 * - What services are offered (Service, MedicalProcedure)
 * - Where services are provided (LocalBusiness, Place)
 * - FAQ content (FAQPage)
 * - Breadcrumb navigation
 */

export interface ServiceSchema {
  name: string
  description: string
  url: string
  category: 'therapy' | 'wellness'
  provider?: string
}

export interface LocationSchema {
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  services: string[]
}

export interface FAQSchema {
  question: string
  answer: string
}

/**
 * Organization schema for the main business
 */
export function createOrganizationSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    '@id': `${siteUrl}/#organization`,
    name: 'Pathways Within',
    alternateName: 'Pathways Within Wisdom and Wellness Collaborative',
    description: 'Integrated mental health therapy and holistic wellness services on Long Island. We take a 360 degree approach to healing, looking at both your mental and physical well being.',
    url: siteUrl,
    logo: `${siteUrl}/pathways-logo.png`,
    image: `${siteUrl}/pathways-logo.png`,
    telephone: '+1-631-371-3825',
    email: 'Welcome@pathwayswithin.com',
    foundingDate: '2018',
    areaServed: {
      '@type': 'State',
      name: 'New York',
    },
    serviceArea: [
      { '@type': 'City', name: 'Garden City' },
      { '@type': 'City', name: 'Port Jefferson' },
      { '@type': 'City', name: 'Massapequa' },
      { '@type': 'City', name: 'Smithtown' },
      { '@type': 'City', name: 'Rockville Centre' },
    ],
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Therapy and Wellness Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Therapy Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Individual Therapy' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Couples Therapy' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trauma Therapy' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'EMDR Therapy' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Wellness Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Massage Therapy' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Acupuncture' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Skincare' } },
          ],
        },
      ],
    },
  }
}

/**
 * Local business schema for each location
 */
export function createLocalBusinessSchema(
  location: LocationSchema,
  siteUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: `Pathways Within ${location.name}`,
    description: `Therapy and wellness services in ${location.name}, Long Island`,
    url: `${siteUrl}/locations#${location.name.toLowerCase().replace(/\s+/g, '-')}`,
    telephone: location.phone || '+1-631-371-3825',
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Coordinates would be added per location
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    parentOrganization: {
      '@id': `${siteUrl}/#organization`,
    },
  }
}

/**
 * Service schema for individual services
 */
export function createServiceSchema(
  service: ServiceSchema,
  siteUrl: string
) {
  const serviceType = service.category === 'therapy' 
    ? 'MedicalTherapy' 
    : 'HealthAndBeautyBusiness'

  return {
    '@context': 'https://schema.org',
    '@type': serviceType,
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'MedicalOrganization',
      name: 'Pathways Within',
      '@id': `${siteUrl}/#organization`,
    },
    areaServed: {
      '@type': 'State',
      name: 'New York',
    },
  }
}

/**
 * FAQ Page schema
 */
export function createFAQSchema(faqs: FAQSchema[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Breadcrumb schema for navigation
 */
export function createBreadcrumbSchema(
  items: { name: string; url: string }[],
  siteUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  }
}

/**
 * WebPage schema with accessibility information
 */
export function createWebPageSchema(
  title: string,
  description: string,
  url: string,
  siteUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url.startsWith('http') ? url : `${siteUrl}${url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Pathways Within',
      url: siteUrl,
    },
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    accessibilityFeature: [
      'alternativeText',
      'captions',
      'structuralNavigation',
      'tableOfContents',
      'highContrast',
      'largePrint',
    ],
    accessibilityHazard: 'none',
    accessMode: ['textual', 'visual'],
    accessModeSufficient: ['textual'],
  }
}

/**
 * All locations data
 */
export const LOCATIONS: LocationSchema[] = [
  {
    name: 'Garden City',
    address: '520 Franklin Ave, Suite L1',
    city: 'Garden City',
    state: 'NY',
    zip: '11530',
    phone: '+1-631-371-3825',
    services: ['therapy', 'wellness'],
  },
  {
    name: 'Port Jefferson',
    address: '1227 Main Street, Suite 101',
    city: 'Port Jefferson',
    state: 'NY',
    zip: '11777',
    phone: '+1-631-371-3825',
    services: ['therapy', 'wellness'],
  },
  {
    name: 'Massapequa',
    address: '4160 Merrick Rd, Suite 5 & Suite 7',
    city: 'Massapequa',
    state: 'NY',
    zip: '11758',
    phone: '+1-631-371-3825',
    services: ['therapy', 'wellness'],
  },
  {
    name: 'Smithtown',
    address: '496 Smithtown Bypass, Suite 203 & Suite 204',
    city: 'Smithtown',
    state: 'NY',
    zip: '11787',
    phone: '+1-631-371-3825',
    services: ['therapy', 'wellness'],
  },
  {
    name: 'Rockville Centre',
    address: '53 N Park Ave, Suite 203',
    city: 'Rockville Centre',
    state: 'NY',
    zip: '11570',
    phone: '+1-631-371-3825',
    services: ['therapy', 'wellness'],
  },
]

/**
 * Insurance providers
 */
export const INSURANCE_PROVIDERS = [
  'Aetna',
  'Cigna',
  'Optum',
  'UHC',
  'Oxford',
  'UMR',
  'Oscar',
  '1199',
  'Meritain',
  'Magnacare',
  'Humana',
  'Medicare',
  'NYSHIP',
  'Student Resource Allied Benefit',
  'ComPsych',
  'VA Community Care benefits',
  'MVP',
  'Northwell Brighton Health',
]
