import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'
import { 
  createOpenGraph, 
  createTwitterCard, 
  standardRobots,
  createBreadcrumbSchema,
  createContactPageSchema,
  getOrganizationSchema,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Contact Us | Pathways Within Therapy and Wellness',
  description: 'Contact Pathways Within for therapy and wellness services. Call (631) 371-3825 or fill out our form. We respond within one business day.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: createOpenGraph({
    title: 'Contact Us | Pathways Within Therapy and Wellness',
    description: 'Contact Pathways Within for therapy and wellness services. Call (631) 371-3825 or fill out our form. We respond within one business day.',
    url: `${SITE_URL}/contact`,
  }),
  twitter: createTwitterCard({
    title: 'Contact Us | Pathways Within Therapy and Wellness',
    description: 'Contact Pathways Within for therapy and wellness services. Call (631) 371-3825 or fill out our form. We respond within one business day.',
  }),
  robots: standardRobots,
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Contact', url: `${SITE_URL}/contact` },
  ])
  const contactPageSchema = createContactPageSchema()
  const organizationSchema = getOrganizationSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {children}
    </>
  )
}
