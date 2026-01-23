import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Started | Pathways Within',
  description: 'Begin your journey with Pathways Within. Schedule your intake appointment and discover personalized therapy and wellness services tailored to your needs.',
  alternates: {
    canonical: '/start',
  },
  openGraph: {
    title: 'Get Started | Pathways Within',
    description: 'Begin your journey with Pathways Within. Schedule your intake appointment today.',
    url: '/start',
  },
}

export default function StartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
