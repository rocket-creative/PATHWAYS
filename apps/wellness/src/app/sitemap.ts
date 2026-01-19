import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_WELLNESS_URL || 'http://localhost:3002'

const wellnessServices = [
  'massage',
  'acupuncture',
  'energy-work',
  'pain-management',
  'iv-vitamin-infusion',
  'injectables',
  'skincare',
  'hydrafacial',
  'keralase-hair-restoration',
  'laser-hair-removal',
  'prp-vampire-facial',
  'cryotherapy',
  'laser-lipo',
  'teeth-whitening',
  'permanent-makeup',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/services']
  
  const staticEntries = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.9,
  }))

  const serviceEntries = wellnessServices.map((slug) => ({
    url: `${siteUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticEntries, ...serviceEntries]
}
