import type { Metadata, Viewport } from 'next'
import { Raleway, Lora } from 'next/font/google'
import '@/styles/globals.css'
import { Navigation, Footer, CrisisBanner, CookieConsent } from '@/components/layout'
import { getOrganizationSchema, getWebsiteSchema } from '@/lib/structured-data'
import { SITE_URL } from '@/lib/site-config'

// Raleway - Headings (only 400 and 600 weights per design rules)
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['400', '600'],
})

// Lora as fallback for Clarendon (serif body text)
const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-clarendon',
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
      className={`${raleway.variable} ${lora.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteSchema()) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        {/* Skip to main content - Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[rgb(var(--color-navy))] focus:text-white"
        >
          Skip to main content
        </a>
        
        {/* Site wrapper - ALL content within 1440px canvas */}
        <div className="site-wrapper min-h-screen">
          {/* Crisis Banner */}
          <CrisisBanner />
          
          {/* Navigation */}
          <Navigation />
          
          {/* Main Content */}
          <main id="main-content" className="flex-1">
            {children}
          </main>
          
          {/* Footer */}
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  )
}
