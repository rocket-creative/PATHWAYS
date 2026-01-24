// JSON-LD Structured Data for SEO
// Per RULES_2026/seo-ai-readability.mdc

import { SITE_URL, SITE_NAME } from './site-config'

// Default OG image for pages without specific images
export const DEFAULT_OG_IMAGE = '/images/og/og-default.jpg'

// Shared metadata configuration
export const sharedMetadata = {
  siteName: SITE_NAME,
  locale: 'en_US',
  type: 'website' as const,
}

// Helper to create full OpenGraph configuration
export function createOpenGraph(config: {
  title: string
  description: string
  url: string
  image?: string
  type?: 'website' | 'article'
}) {
  return {
    title: config.title,
    description: config.description,
    url: config.url,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: config.type || 'website',
    images: [
      {
        url: config.image || DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: config.title,
      },
    ],
  }
}

// Helper to create Twitter Card configuration
export function createTwitterCard(config: {
  title: string
  description: string
  image?: string
}) {
  return {
    card: 'summary_large_image' as const,
    title: config.title,
    description: config.description,
    images: [config.image || DEFAULT_OG_IMAGE],
  }
}

// Standard robots configuration
export const standardRobots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
  },
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness' as const,
    '@id': `${SITE_URL}/#organization`,
    name: 'Pathways Within',
    description: 'Integrated mental health therapy and holistic wellness services on Long Island. Our 360 degree approach supports your mind, body, and spirit.',
    url: SITE_URL,
    telephone: '+1-631-371-3825',
    email: 'info@pathwayswithin.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '520 Franklin Ave, Suite L1',
      addressLocality: 'Garden City',
      addressRegion: 'NY',
      postalCode: '11530',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7268,
      longitude: -73.6343,
    },
    medicalSpecialty: ['Psychiatry', 'Psychology'],
    availableService: [
      { '@type': 'MedicalTherapy', name: 'Individual Therapy', description: 'One on one therapy sessions with licensed clinicians' },
      { '@type': 'MedicalTherapy', name: 'Couples Therapy', description: 'Relationship counseling and couples therapy' },
      { '@type': 'MedicalTherapy', name: 'EMDR Therapy', description: 'Eye Movement Desensitization and Reprocessing for trauma' },
      { '@type': 'Service', name: 'Massage Therapy', description: 'Therapeutic massage for relaxation and pain relief' },
      { '@type': 'Service', name: 'Acupuncture', description: 'Traditional acupuncture for pain management and wellness' },
    ],
    sameAs: ['https://www.facebook.com/pathwayswithin', 'https://www.instagram.com/pathwayswithin'],
    priceRange: '$$',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '10:00', closes: '16:00' },
    ],
  }
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite' as const,
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Pathways Within',
    description: 'Integrated mental health therapy and holistic wellness services on Long Island',
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

export const locationSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pathwayswithin.com/locations#garden-city',
    name: 'Pathways Within Garden City',
    telephone: '(516) 243-9393',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '600 Old Country Rd Suite 335',
      addressLocality: 'Garden City',
      addressRegion: 'NY',
      postalCode: '11530',
      addressCountry: 'US',
    },
    parentOrganization: {
      '@id': 'https://pathwayswithin.com/#organization',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pathwayswithin.com/locations#massapequa',
    name: 'Pathways Within Massapequa',
    telephone: '(516) 243-9393',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4000 Sunrise Hwy Suite 200',
      addressLocality: 'Massapequa',
      addressRegion: 'NY',
      postalCode: '11758',
      addressCountry: 'US',
    },
    parentOrganization: {
      '@id': 'https://pathwayswithin.com/#organization',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pathwayswithin.com/locations#smithtown',
    name: 'Pathways Within Smithtown',
    telephone: '(631) 371-3825',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '70 Maple Ave',
      addressLocality: 'Smithtown',
      addressRegion: 'NY',
      postalCode: '11787',
      addressCountry: 'US',
    },
    parentOrganization: {
      '@id': 'https://pathwayswithin.com/#organization',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pathwayswithin.com/locations#port-jefferson',
    name: 'Pathways Within Port Jefferson',
    telephone: '(631) 371-3825',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '520 Main Street',
      addressLocality: 'Port Jefferson',
      addressRegion: 'NY',
      postalCode: '11777',
      addressCountry: 'US',
    },
    parentOrganization: {
      '@id': 'https://pathwayswithin.com/#organization',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pathwayswithin.com/locations#rockville-centre',
    name: 'Pathways Within Rockville Centre',
    telephone: '(516) 243-9393',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '121 N Village Ave',
      addressLocality: 'Rockville Centre',
      addressRegion: 'NY',
      postalCode: '11570',
      addressCountry: 'US',
    },
    parentOrganization: {
      '@id': 'https://pathwayswithin.com/#organization',
    },
  },
]

// Helper to create breadcrumb schema
export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Helper to create FAQ schema
export function createFAQSchema(faqs: { question: string; answer: string }[]) {
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

// Helper to create service schema
export function createServiceSchema(service: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service' as const,
    name: service.name,
    description: service.description,
    url: service.url,
    provider: { '@id': `${SITE_URL}/#organization` },
  }
}

// Helper to create medical therapy schema
export function createMedicalTherapySchema(therapy: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy' as const,
    name: therapy.name,
    description: therapy.description,
    url: therapy.url,
    provider: { '@id': `${SITE_URL}/#organization` },
  }
}

// Helper to create AboutPage schema
export function createAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: 'About Pathways Within',
    description: 'Learn about Pathways Within, a Long Island collaborative offering integrated therapy and wellness services.',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
  }
}

// Helper to create ContactPage schema
export function createContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name: 'Contact Pathways Within',
    description: 'Contact Pathways Within for therapy and wellness services on Long Island.',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: { '@id': `${SITE_URL}/#organization` },
  }
}

// Helper to create Person (therapist/provider) schema
export function createPersonSchema(person: {
  name: string
  title: string
  description: string
  image?: string
  specialties?: string[]
  url?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.title,
    description: person.description,
    image: person.image ? `${SITE_URL}${person.image}` : undefined,
    knowsAbout: person.specialties,
    url: person.url,
    worksFor: { '@id': `${SITE_URL}/#organization` },
  }
}

// Helper to create LocalBusiness schema for each location
export function createLocalBusinessSchema(location: {
  name: string
  slug: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  lat?: number
  lng?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${SITE_URL}/locations#${location.slug}`,
    name: `Pathways Within ${location.name}`,
    telephone: location.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.zip,
      addressCountry: 'US',
    },
    geo: location.lat && location.lng ? {
      '@type': 'GeoCoordinates',
      latitude: location.lat,
      longitude: location.lng,
    } : undefined,
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '10:00', closes: '16:00' },
    ],
  }
}

// Helper to create WebPage schema
export function createWebPageSchema(page: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${page.url}#webpage`,
    url: page.url,
    name: page.name,
    description: page.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
  }
}

// Helper to create MedicalCondition schema
export function createMedicalConditionSchema(condition: {
  name: string
  description: string
  url: string
  symptoms?: string[]
  possibleTreatment?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: condition.name,
    description: condition.description,
    url: condition.url,
    signOrSymptom: condition.symptoms?.map(s => ({ '@type': 'MedicalSignOrSymptom', name: s })),
    possibleTreatment: condition.possibleTreatment?.map(t => ({ '@type': 'MedicalTherapy', name: t })),
  }
}
