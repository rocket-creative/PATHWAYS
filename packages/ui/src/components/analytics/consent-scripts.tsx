'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

type ConsentCategories = {
  necessary: boolean
  preferences: boolean
  analytics: boolean
  marketing: boolean
}

const CONSENT_STORAGE_KEY = 'pathways-consent'

export function ConsentScripts() {
  const [consent, setConsent] = useState<ConsentCategories | null>(null)

  useEffect(() => {
    const checkConsent = () => {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY)
      if (stored) {
        try {
          const parsed = JSON.parse(stored)
          setConsent(parsed.categories)
        } catch {
          setConsent(null)
        }
      }
    }

    checkConsent()

    const handleConsentUpdate = (e: CustomEvent<ConsentCategories>) => {
      setConsent(e.detail)
    }

    window.addEventListener('consent-updated', handleConsentUpdate as EventListener)
    
    return () => {
      window.removeEventListener('consent-updated', handleConsentUpdate as EventListener)
    }
  }, [])

  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <>
      {/* Google Analytics 4 */}
      {consent?.analytics && gaMeasurementId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}', {
                page_path: window.location.pathname,
                anonymize_ip: true
              });
            `}
          </Script>
        </>
      )}

      {/* Google Ads */}
      {consent?.marketing && googleAdsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-ads" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAdsId}');
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel */}
      {consent?.marketing && metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  )
}

declare global {
  interface Window {
    fbq: (action: string, eventName: string, params?: Record<string, unknown>) => void
    gtag: (command: string, ...args: unknown[]) => void
    dataLayer: unknown[]
  }
}
