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
  metadataBase: new URL(process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000'),
  title: {
    default: 'Pathways Within | Therapy and Wellness on Long Island',
    template: '%s | Pathways Within',
  },
  description: 'Experience integrated mental health therapy and holistic wellness services at Pathways Within. Our 360 degree approach supports your mind, body, and spirit at five Long Island locations.',
  authors: [{ name: 'Pathways Within' }],
  creator: 'Pathways Within',
  publisher: 'Pathways Within',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Pathways Within',
    title: 'Pathways Within | Therapy and Wellness on Long Island',
    description: 'Experience integrated mental health therapy and holistic wellness services.',
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
  '@type': 'MedicalOrganization',
  name: 'Pathways Within',
  description: 'Integrated therapy and wellness services on Long Island',
  url: process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000',
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground">
          Skip to main content
        </a>
        
        <div className="site-wrapper min-h-screen">
          <CrisisBanner />
          <Navigation site="main" />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer site="main" />
        </div>
        
        <CookieConsent />
        <ConsentScripts />
      </body>
    </html>
  )
}
