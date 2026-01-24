import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'
import { 
  createOpenGraph, 
  createTwitterCard, 
  standardRobots,
  createBreadcrumbSchema,
  getOrganizationSchema,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Get Started with Therapy and Wellness | Pathways Within',
  description: 'Begin your journey at Pathways Within. Book a free consultation for therapy or wellness services. Insurance accepted, same week appointments available.',
  alternates: { canonical: `${SITE_URL}/start` },
  openGraph: createOpenGraph({
    title: 'Get Started with Therapy and Wellness | Pathways Within',
    description: 'Begin your journey at Pathways Within. Book a free consultation for therapy or wellness services. Insurance accepted, same week appointments available.',
    url: `${SITE_URL}/start`,
  }),
  twitter: createTwitterCard({
    title: 'Get Started with Therapy and Wellness | Pathways Within',
    description: 'Begin your journey at Pathways Within. Book a free consultation for therapy or wellness services.',
  }),
  robots: standardRobots,
}

export default function StartLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Get Started', url: `${SITE_URL}/start` },
  ])
  const organizationSchema = getOrganizationSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {children}
    </>
  )
}
