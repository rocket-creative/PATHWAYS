import { MetadataRoute } from 'next'
import { wellnessServicesList } from '@/data/wellness-services'
import { therapyServicesList } from '@/data/therapy-services'
import { conditionsList } from '@/data/conditions'
import { SITE_URL } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/locations',
    '/start',
    '/contact',
    '/faq',
    '/client-intake',
    '/privacy',
    '/terms',
    '/accessibility',
    '/wellness',
    '/wellness/services',
    '/wellness/team',
    '/wisdom',
    '/wisdom/services',
    '/wisdom/conditions',
    '/wisdom/team',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
  
  // Wellness service pages
  const wellnessPages = wellnessServicesList.map(service => ({
    url: `${baseUrl}/wellness/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  // Therapy service pages
  const therapyPages = therapyServicesList.map(service => ({
    url: `${baseUrl}/wisdom/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  // Condition pages
  const conditionPages = conditionsList.map(condition => ({
    url: `${baseUrl}/wisdom/conditions/${condition.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  return [...staticPages, ...wellnessPages, ...therapyPages, ...conditionPages]
}
