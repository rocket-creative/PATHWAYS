import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'
import { 
  createFAQSchema, 
  createBreadcrumbSchema,
  createOpenGraph,
  createTwitterCard,
  standardRobots,
} from '@/lib/structured-data'
import { allFaqs } from '@/data/faq'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Pathways Within',
  description: 'Frequently asked questions about Pathways Within. Learn about insurance, locations, telehealth, therapy and wellness services, and how to get started.',
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: createOpenGraph({
    title: 'Frequently Asked Questions | Pathways Within',
    description: 'Frequently asked questions about Pathways Within. Learn about insurance, locations, telehealth, therapy and wellness services, and how to get started.',
    url: `${SITE_URL}/faq`,
  }),
  twitter: createTwitterCard({
    title: 'Frequently Asked Questions | Pathways Within',
    description: 'Frequently asked questions about Pathways Within. Learn about insurance, locations, telehealth, therapy and wellness services, and how to get started.',
  }),
  robots: standardRobots,
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  const faqSchema = createFAQSchema(allFaqs)
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'FAQ', url: `${SITE_URL}/faq` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
