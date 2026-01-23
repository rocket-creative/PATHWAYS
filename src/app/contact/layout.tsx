import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Pathways Within. Fill out our form, call (631) 371-3825, or email. We respond within one business day.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact | Pathways Within',
    description: 'Get in touch with Pathways Within. We respond within one business day.',
    url: `${SITE_URL}/contact`,
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
