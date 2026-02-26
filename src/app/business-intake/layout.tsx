import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'
import { createBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Online Presence Inventory | Pathways Within Business',
  description: 'Help us catalog all your existing online accounts, profiles, and listings to properly manage and optimize your digital presence.',
  alternates: { canonical: `${SITE_URL}/business-intake` },
  robots: {
    index: false,
    follow: false,
  },
}

export default function BusinessIntakeLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Business Intake', url: `${SITE_URL}/business-intake` },
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
