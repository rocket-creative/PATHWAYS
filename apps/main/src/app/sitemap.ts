import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000'

const locationSlugs = [
  'garden-city',
  'port-jefferson',
  'massapequa',
  'smithtown',
  'rockville-centre',
]

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/team',
    '/locations',
    '/faq',
    '/contact',
    '/start',
    '/privacy',
    '/terms',
    '/accessibility',
    '/cookies',
  ]

  const staticEntries = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : path === '/services' ? 0.9 : 0.8,
  }))

  // Location pages (high value for local SEO)
  const locationEntries = locationSlugs.map((slug) => ({
    url: `${siteUrl}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticEntries, ...locationEntries]
}
