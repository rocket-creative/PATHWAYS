import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Pathways Within',
  description: 'Get in touch with Pathways Within. Contact us to schedule an appointment, ask questions, or learn more about our therapy and wellness services on Long Island.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Pathways Within',
    description: 'Get in touch with Pathways Within to schedule an appointment or learn more about our services.',
    url: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
