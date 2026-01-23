import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'
import { createFAQSchema } from '@/lib/structured-data'
import { allFaqs } from '@/data/faq'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Pathways Within. Insurance, locations, telehealth, therapy and wellness services, and how to get started.',
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: 'FAQ | Pathways Within',
    description: 'Frequently asked questions about therapy, wellness, insurance, and getting started.',
    url: `${SITE_URL}/faq`,
  },
}

const faqSchema = createFAQSchema(allFaqs)

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
