/**
 * JSON-LD Structured Data for Pathways Within
 * 
 * Provides semantic markup for:
 * - Organization schema
 * - LocalBusiness schema for each location
 * - MedicalBusiness schema
 * - BreadcrumbList schema
 * - FAQPage schema
 * 
 * This improves SEO and AI readability (Google, Bing, ChatGPT, etc.)
 */

// Organization Schema - represents Pathways Within as a whole
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': 'https://pathwayswithin.com/#organization',
  name: 'Pathways Within',
  alternateName: 'Pathways Within Wisdom and Wellness Collaborative',
  description: 'Integrated mental health therapy and holistic wellness services on Long Island. Our 360 degree approach supports your mind, body, and spirit.',
  url: 'https://pathwayswithin.com',
  logo: 'https://pathwayswithin.com/images/logo.png',
  image: 'https://pathwayswithin.com/images/pathways-within-og.jpg',
  telephone: '+1-631-371-3825',
  email: 'info@pathwayswithin.com',
  priceRange: '$$',
  medicalSpecialty: [
    'Psychiatry',
    'MentalHealth',
  ],
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'Individual Therapy',
      description: 'Personalized one on one therapy sessions using evidence based approaches.',
    },
    {
      '@type': 'MedicalTherapy',
      name: 'EMDR Therapy',
      description: 'Eye Movement Desensitization and Reprocessing for trauma treatment.',
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Couples Therapy',
      description: 'Gottman Method based couples counseling to strengthen relationships.',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Massage Therapy',
      description: 'Therapeutic massage including Swedish, deep tissue, and sports massage.',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Acupuncture',
      description: 'Traditional and contemporary acupuncture for pain relief and wellness.',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'IV Vitamin Infusion',
      description: 'Customized vitamin infusions for hydration, energy, and immune support.',
    },
  ],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 40.7282,
      longitude: -73.4257,
    },
    geoRadius: '50000',
  },
  sameAs: [
    'https://www.facebook.com/pathwayswithin',
    'https://www.instagram.com/pathwayswithin',
  ],
}

// Individual location schemas
export const locationSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://pathwayswithin.com/locations/garden-city#location',
    name: 'Pathways Within Garden City',
    description: 'Therapy and wellness services in Garden City, Long Island.',
    url: 'https://pathwayswithin.com/locations/garden-city',
    telephone: '+1-631-371-3825',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '666 Old Country Road, Suite 501',
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    parentOrganization: {
      '@id': 'https://pathwayswithin.com/#organization',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://pathwayswithin.com/locations/port-jefferson#location',
    name: 'Pathways Within Port Jefferson',
    description: 'Therapy and wellness services in Port Jefferson, Long Island.',
    url: 'https://pathwayswithin.com/locations/port-jefferson',
    telephone: '+1-631-371-3825',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '101 E Broadway, Suite A203',
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
    '@type': 'MedicalBusiness',
    '@id': 'https://pathwayswithin.com/locations/massapequa#location',
    name: 'Pathways Within Massapequa',
    description: 'Therapy and wellness services in Massapequa, Long Island.',
    url: 'https://pathwayswithin.com/locations/massapequa',
    telephone: '+1-631-371-3825',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '60 Carmans Road, Suite C',
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
    '@type': 'MedicalBusiness',
    '@id': 'https://pathwayswithin.com/locations/smithtown#location',
    name: 'Pathways Within Smithtown',
    description: 'Therapy and wellness services in Smithtown, Long Island.',
    url: 'https://pathwayswithin.com/locations/smithtown',
    telephone: '+1-631-371-3825',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '212 E. Main Street, Suite 402',
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
    '@type': 'MedicalBusiness',
    '@id': 'https://pathwayswithin.com/locations/rockville-centre#location',
    name: 'Pathways Within Rockville Centre',
    description: 'Therapy and wellness services in Rockville Centre, Long Island.',
    url: 'https://pathwayswithin.com/locations/rockville-centre',
    telephone: '+1-631-371-3825',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4 North Village Avenue',
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

// Helper to generate breadcrumb schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
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

// Helper to generate FAQ schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
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

// Helper to generate service schema
export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
  category: 'therapy' | 'wellness'
}) {
  return {
    '@context': 'https://schema.org',
    '@type': service.category === 'therapy' ? 'MedicalTherapy' : 'MedicalProcedure',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@id': 'https://pathwayswithin.com/#organization',
    },
  }
}
