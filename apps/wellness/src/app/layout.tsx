import type { Metadata, Viewport } from 'next'
import { Raleway } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { 
  CrisisBanner, 
  Navigation, 
  Footer, 
  CookieConsent, 
  ConsentScripts,
  JsonLd 
} from '@pathways/ui'

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700'],
})

const clarendon = localFont({
  src: '../../../../public/fonts/Clarendon-Regular.otf',
  display: 'swap',
  variable: '--font-clarendon',
  weight: '400',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WELLNESS_URL || 'http://localhost:3002'),
  title: {
    default: 'Pathways Within Wellness | Body Care & Beauty on Long Island',
    template: '%s | Pathways Within Wellness',
  },
  description: 'Holistic wellness services on Long Island including massage, acupuncture, skincare, IV therapy, and more. Professional body care and beauty treatments.',
  authors: [{ name: 'Pathways Within' }],
  creator: 'Pathways Within',
  publisher: 'Pathways Within',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Pathways Within Wellness',
    title: 'Pathways Within Wellness | Body Care & Beauty',
    description: 'Holistic wellness services on Long Island.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#01153D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Pathways Within Wellness',
  description: 'Holistic wellness and body care services on Long Island',
  url: process.env.NEXT_PUBLIC_WELLNESS_URL || 'http://localhost:3002',
  telephone: '+1-631-371-3825',
  email: 'info@pathwayswithin.com',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${clarendon.variable}`} suppressHydrationWarning>
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4">
          Skip to main content
        </a>
        
        <div className="site-wrapper min-h-screen">
          <CrisisBanner />
          <Navigation site="wellness" />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer site="wellness" />
        </div>
        
        <CookieConsent />
        <ConsentScripts />
      </body>
    </html>
  )
}
