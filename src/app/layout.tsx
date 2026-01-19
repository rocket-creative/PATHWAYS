import type { Metadata, Viewport } from 'next'
import { Raleway } from 'next/font/google'
import localFont from 'next/font/local'
import '@/styles/globals.css'
import { 
  CrisisBanner, 
  Navigation, 
  Footer, 
  CookieConsent, 
  ConsentScripts,
  JsonLd 
} from '@pathways/ui'
import { organizationSchema, locationSchemas } from '@/lib/structured-data'

// Raleway - Headings (H1, H2, H3, H4)
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700'],
})

// Clarendon - Body text (local font)
const clarendon = localFont({
  src: '../../public/fonts/Clarendon-Regular.otf',
  display: 'swap',
  variable: '--font-clarendon',
  weight: '400',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Pathways Within | Therapy and Wellness on Long Island',
    template: '%s | Pathways Within',
  },
  description: 'Experience integrated mental health therapy and holistic wellness services at Pathways Within. Our 360 degree approach supports your mind, body, and spirit at five Long Island locations.',
  // NOTE: keywords meta tag is FORBIDDEN per project-pathways-within.mdc (obsolete, not used by search engines)
  authors: [{ name: 'Pathways Within' }],
  creator: 'Pathways Within',
  publisher: 'Pathways Within',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Pathways Within',
    title: 'Pathways Within | Therapy and Wellness on Long Island',
    description: 'Experience integrated mental health therapy and holistic wellness services. Our 360 degree approach supports your mind, body, and spirit.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pathways Within | Therapy and Wellness on Long Island',
    description: 'Experience integrated mental health therapy and holistic wellness services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#01153D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${raleway.variable} ${clarendon.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Structured Data for SEO and AI readability */}
        <JsonLd data={organizationSchema} />
        <JsonLd data={locationSchemas} />
      </head>
      <body className="min-h-screen font-sans antialiased">
        {/* Skip to main content - Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        
        {/* Site wrapper - ALL content within 1440px canvas */}
        <div className="site-wrapper min-h-screen">
          {/* Crisis Banner - Always visible per NY requirements */}
          <CrisisBanner />
          
          {/* Navigation */}
          <Navigation />
          
          {/* Main Content */}
          <main id="main-content" className="flex-1">
            {children}
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
        
        {/* Cookie Consent - GDPR/Privacy compliant (outside wrapper, fixed position) */}
        <CookieConsent />
        
        {/* Analytics & Marketing Scripts - Only load after consent */}
        <ConsentScripts />
      </body>
    </html>
  )
}
