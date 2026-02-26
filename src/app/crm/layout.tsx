import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CRM Dashboard | Pathways Within',
  description: 'Staff portal for managing patients, appointments, and practice operations at Pathways Within.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function CRMLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
