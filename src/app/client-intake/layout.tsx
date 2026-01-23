import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Intake | Online Presence Inventory',
  description: 'Complete our comprehensive online presence inventory form to help us catalog and manage all your digital accounts, profiles, and listings.',
  openGraph: {
    title: 'Client Intake | Online Presence Inventory',
    description: 'Complete our comprehensive online presence inventory form to help us catalog and manage all your digital accounts.',
  },
  twitter: {
    card: 'summary',
    title: 'Client Intake | Online Presence Inventory',
    description: 'Complete our comprehensive online presence inventory form.',
  },
}

export default function ClientIntakeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
