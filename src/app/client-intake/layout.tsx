import { Metadata } from 'next'
import { Suspense } from 'react'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'New Client Intake | Pathways Within',
  description: 'Complete your intake form for Pathways Within - Wisdom and Wellness Collaborative. Share your information so we can match you with the right provider.',
  alternates: { canonical: `${SITE_URL}/client-intake` },
  openGraph: {
    title: 'New Client Intake | Pathways Within',
    description: 'Complete your intake form so we can match you with the right provider.',
    url: `${SITE_URL}/client-intake`,
  },
}

export default function ClientIntakeLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>
}
