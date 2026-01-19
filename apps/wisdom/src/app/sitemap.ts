import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_WISDOM_URL || 'http://localhost:3001'

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
]

const conditions = [
  'anxiety',
  'depression',
  'trauma',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/services', '/conditions']
  
  const staticEntries = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.9,
  }))

  const serviceEntries = therapyServices.map((slug) => ({
    url: `${siteUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Condition pages are high-value for SEO (informational content)
  const conditionEntries = conditions.map((slug) => ({
    url: `${siteUrl}/conditions/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticEntries, ...serviceEntries, ...conditionEntries]
}
