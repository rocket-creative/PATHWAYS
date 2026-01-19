import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_WELLNESS_URL || 'http://localhost:3002'

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
