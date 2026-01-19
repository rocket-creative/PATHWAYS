import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_WISDOM_URL || 'http://localhost:3001'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
