import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'
import { 
  createOpenGraph, 
  createTwitterCard, 
  standardRobots,
  createBreadcrumbSchema,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'New Client Intake Form | Pathways Within',
  description: 'Complete your intake form for Pathways Within. Share your information so we can match you with the right therapist or wellness provider.',
  alternates: { canonical: `${SITE_URL}/client-intake` },
  openGraph: createOpenGraph({
    title: 'New Client Intake Form | Pathways Within',
    description: 'Complete your intake form for Pathways Within. Share your information so we can match you with the right therapist or wellness provider.',
    url: `${SITE_URL}/client-intake`,
  }),
  twitter: createTwitterCard({
    title: 'New Client Intake Form | Pathways Within',
    description: 'Complete your intake form so we can match you with the right provider.',
  }),
  robots: standardRobots,
}

export default function ClientIntakeLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Client Intake', url: `${SITE_URL}/client-intake` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
