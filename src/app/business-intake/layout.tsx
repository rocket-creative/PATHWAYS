import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Intake - Online Presence & Account Inventory | Pathways Within',
  description: 'Help us catalog all your existing online accounts, profiles, and listings to properly manage and optimize your digital presence.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function BusinessIntakeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
