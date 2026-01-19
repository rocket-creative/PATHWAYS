'use client'

import { useState, useEffect } from 'react'
import { Settings, ArrowRight } from 'lucide-react'

type ConsentCategories = {
  necessary: boolean
  preferences: boolean
  analytics: boolean
  marketing: boolean
}

const CONSENT_STORAGE_KEY = 'pathways-consent'
const CONSENT_VERSION = '1.0'

/**
 * Cookie Consent Component
 * GDPR/CCPA compliant consent management.
 */
export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<ConsentCategories>({
    necessary: true,
    preferences: false,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const gpcEnabled = typeof navigator !== 'undefined' && 
      // @ts-expect-error - GPC is not in TypeScript types yet
      navigator.globalPrivacyControl === true

    if (gpcEnabled) {
      saveConsent({
        necessary: true,
        preferences: false,
        analytics: false,
        marketing: false,
      })
      return
    }

    const stored = localStorage.getItem(CONSENT_STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (parsed.version === CONSENT_VERSION) {
          setConsent(parsed.categories)
          return
        }
      } catch {
        // Invalid stored consent
      }
    }

    setIsVisible(true)
  }, [])

  const saveConsent = (categories: ConsentCategories) => {
    const consentData = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      categories,
    }
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentData))
    setConsent(categories)
    setIsVisible(false)
    window.dispatchEvent(new CustomEvent('consent-updated', { detail: categories }))
  }

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    })
  }

  const handleRejectAll = () => {
    saveConsent({
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false,
    })
  }

  const handleSavePreferences = () => {
    saveConsent(consent)
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-40 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm text-[rgb(var(--color-navy))] shadow-lg transition-all hover:shadow-xl"
        aria-label="Cookie settings"
        style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
      >
        <Settings className="h-4 w-4" />
        Cookie Settings
      </button>
    )
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[rgb(var(--border))] bg-white p-6 shadow-2xl md:inset-x-auto md:bottom-4 md:left-4 md:max-w-md md:rounded-lg md:border"
    >
      <h2 
        id="cookie-consent-title" 
        className="mb-4 text-lg text-[rgb(var(--color-navy))]"
        style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
      >
        We value your privacy
      </h2>
      
      <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.6 }}>
        We use cookies to enhance your experience. Essential cookies are always active.
      </p>

      {showDetails ? (
        <div className="mb-4 space-y-3">
          <label className="flex items-start gap-3">
            <input type="checkbox" checked={true} disabled className="mt-1 h-4 w-4 rounded" />
            <div>
              <span className="text-sm font-medium text-[rgb(var(--color-navy))]">Necessary</span>
              <p className="text-xs text-[rgb(var(--color-text-light))]">Required for the site to function.</p>
            </div>
          </label>

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={consent.preferences}
              onChange={(e) => setConsent(prev => ({ ...prev, preferences: e.target.checked }))}
              className="mt-1 h-4 w-4 rounded accent-[rgb(var(--color-green))]"
            />
            <div>
              <span className="text-sm font-medium text-[rgb(var(--color-navy))]">Preferences</span>
              <p className="text-xs text-[rgb(var(--color-text-light))]">Remember your settings.</p>
            </div>
          </label>

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={consent.analytics}
              onChange={(e) => setConsent(prev => ({ ...prev, analytics: e.target.checked }))}
              className="mt-1 h-4 w-4 rounded accent-[rgb(var(--color-green))]"
            />
            <div>
              <span className="text-sm font-medium text-[rgb(var(--color-navy))]">Analytics</span>
              <p className="text-xs text-[rgb(var(--color-text-light))]">Help us understand usage.</p>
            </div>
          </label>

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={consent.marketing}
              onChange={(e) => setConsent(prev => ({ ...prev, marketing: e.target.checked }))}
              className="mt-1 h-4 w-4 rounded accent-[rgb(var(--color-green))]"
            />
            <div>
              <span className="text-sm font-medium text-[rgb(var(--color-navy))]">Marketing</span>
              <p className="text-xs text-[rgb(var(--color-text-light))]">Personalized content.</p>
            </div>
          </label>

          <button onClick={handleSavePreferences} className="btn-pill btn-pill-primary mt-4 w-full justify-center">
            <span className="btn-text">Save preferences</span>
            <span className="btn-arrow"><ArrowRight /></span>
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={handleRejectAll} className="btn-pill btn-pill-secondary flex-1 justify-center">
            <span className="btn-text">Reject all</span>
            <span className="btn-arrow"><ArrowRight /></span>
          </button>
          <button onClick={handleAcceptAll} className="btn-pill btn-pill-primary flex-1 justify-center">
            <span className="btn-text">Accept all</span>
            <span className="btn-arrow"><ArrowRight /></span>
          </button>
        </div>
      )}

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-4 w-full text-center text-sm text-[rgb(var(--color-green))] hover:underline"
      >
        {showDetails ? 'Hide details' : 'Customize preferences'}
      </button>
    </div>
  )
}
