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
  metadataBase: new URL(process.env.NEXT_PUBLIC_WISDOM_URL || 'http://localhost:3001'),
  title: {
    default: 'Pathways Within Wisdom | Therapy Services on Long Island',
    template: '%s | Pathways Within Wisdom',
  },
  description: 'Licensed mental health therapy services on Long Island. Individual, couples, child, teen, trauma, and EMDR therapy with experienced clinicians.',
  authors: [{ name: 'Pathways Within' }],
  creator: 'Pathways Within',
  publisher: 'Pathways Within',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Pathways Within Wisdom',
    title: 'Pathways Within Wisdom | Therapy Services',
    description: 'Licensed mental health therapy services on Long Island.',
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
  name: 'Pathways Within Wisdom',
  description: 'Licensed mental health therapy services on Long Island',
  url: process.env.NEXT_PUBLIC_WISDOM_URL || 'http://localhost:3001',
  telephone: '+1-631-371-3825',
  email: 'info@pathwayswithin.com',
  medicalSpecialty: 'Psychiatry',
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
          <Navigation site="wisdom" />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer site="wisdom" />
        </div>
        
        <CookieConsent />
        <ConsentScripts />
      </body>
    </html>
  )
}
