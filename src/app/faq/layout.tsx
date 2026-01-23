import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Pathways Within',
  description: 'Find answers to common questions about Pathways Within therapy and wellness services, insurance, scheduling, and more.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | Pathways Within',
    description: 'Find answers to common questions about our therapy and wellness services.',
    url: '/faq',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
