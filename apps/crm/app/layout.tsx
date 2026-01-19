import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pathways Within CRM',
  description: 'Practice management for Pathways Within',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
