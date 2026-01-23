import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pathwayswithin.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  
  // Core pages
  const corePages = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/team`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/client-intake`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Therapy service pages
  const therapyServices = [
    'individual-therapy',
    'child-therapy',
    'teen-therapy',
    'couples-therapy',
    'trauma-therapy',
    'emdr-therapy',
    'somatic-therapy',
    'hypnotherapy',
    'veterans-first-responders',
    'weight-loss-surgery-support',
  ].map((service) => ({
    url: `${BASE_URL}/services/therapy/${service}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Wellness service pages
  const wellnessServices = [
    'massage',
    'acupuncture',
    'energy-work',
    'iv-vitamin-infusion',
    'pain-management',
    'skincare',
    'hydrafacial',
    'injectables',
    'prp-vampire-facial',
    'laser-hair-removal',
    'keralase-hair-restoration',
    'cryotherapy',
    'laser-lipo',
    'teeth-whitening',
    'permanent-makeup',
  ].map((service) => ({
    url: `${BASE_URL}/services/wellness/${service}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Location pages
  const locations = [
    'garden-city',
    'port-jefferson',
    'massapequa',
    'smithtown',
    'rockville-centre',
  ].map((location) => ({
    url: `${BASE_URL}/locations/${location}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...corePages, ...therapyServices, ...wellnessServices, ...locations]
}
