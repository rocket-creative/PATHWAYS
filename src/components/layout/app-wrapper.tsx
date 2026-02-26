'use client'

import { usePathname } from 'next/navigation'
import { Navigation, Footer, CrisisBanner, CookieConsent } from '@/components/layout'
import { SiteIndicator } from './site-indicator'

interface AppWrapperProps {
  children: React.ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  const pathname = usePathname()

  // Don't show navigation and footer on admin pages
  const isAdminPage = pathname.startsWith('/crm') ||
                      pathname.startsWith('/business-intake') ||
                      pathname.startsWith('/client-intake')

  if (isAdminPage) {
    return (
      <>
        {children}
        <SiteIndicator />
      </>
    )
  }

  return (
    <>
      <CrisisBanner />
      <Navigation />
      {children}
      <Footer />
      <CookieConsent />
      <SiteIndicator />
    </>
  )
}