import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Client Intake',
  description: 'Complete your intake form for Pathways Within. Share your information so we can match you with the right therapist or wellness provider.',
  alternates: { canonical: `${SITE_URL}/client-intake` },
  openGraph: {
    title: 'Client Intake | Pathways Within',
    description: 'Complete your intake form so we can match you with the right provider.',
    url: `${SITE_URL}/client-intake`,
  },
}

export default function ClientIntakeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
