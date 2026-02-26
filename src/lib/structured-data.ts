// JSON-LD Structured Data for SEO
// Per RULES_2026/seo-ai-readability.mdc

import { SITE_URL } from './site-config'

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness' as const,
    '@id': `${SITE_URL}/#organization`,
    name: 'Pathways Within',
    description: 'Integrated mental health therapy and holistic wellness services on Long Island. Our 360 degree approach supports your mind, body, and spirit.',
    url: SITE_URL,
    telephone: '(631) 371-3825',
    email: 'info@pathwayswithin.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Garden City',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    medicalSpecialty: ['Psychiatry', 'Psychology', 'Physical Therapy'],
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
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '14:00' },
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
