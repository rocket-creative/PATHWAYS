import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Get Started',
  description: 'Begin your journey at Pathways Within. Learn what to expect, see our locations, and take the first step toward integrated therapy and wellness care.',
  alternates: { canonical: `${SITE_URL}/start` },
  openGraph: {
    title: 'Get Started | Pathways Within',
    description: 'Begin your journey at Pathways Within. Learn what to expect and take the first step.',
    url: `${SITE_URL}/start`,
  },
}

export default function StartLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
