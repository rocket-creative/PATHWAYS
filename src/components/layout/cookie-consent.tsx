'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const STORAGE_KEY = 'pathways-cookie-consent'
const CONSENT_VERSION = '1'

export type ConsentState = {
  necessary: true
  analytics: boolean
  marketing: boolean
  version: string
} | null

function loadConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as ConsentState
    return parsed?.version === CONSENT_VERSION ? parsed : null
  } catch {
    return null
  }
}

function saveConsent(state: ConsentState) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, version: CONSENT_VERSION }))
  } catch {
    /* ignore */
  }
}

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  const openSettings = useCallback(() => {
    setShowBanner(true)
    setShowSettings(true)
  }, [])

  useEffect(() => {
    const stored = loadConsent()
    setConsent(stored)
    setShowBanner(!stored)
    if (stored) {
      setAnalytics(stored.analytics)
      setMarketing(stored.marketing)
    }
  }, [])

  useEffect(() => {
    const handler = () => openSettings()
    window.addEventListener('open-cookie-settings', handler)
    return () => window.removeEventListener('open-cookie-settings', handler)
  }, [openSettings])

  const acceptAll = () => {
    const state: ConsentState = { necessary: true, analytics: true, marketing: true, version: CONSENT_VERSION }
    saveConsent(state)
    setConsent(state)
    setShowBanner(false)
    setShowSettings(false)
  }

  const rejectNonEssential = () => {
    const state: ConsentState = { necessary: true, analytics: false, marketing: false, version: CONSENT_VERSION }
    saveConsent(state)
    setConsent(state)
    setShowBanner(false)
    setShowSettings(false)
  }

  const saveSettings = () => {
    const state: ConsentState = { necessary: true, analytics, marketing, version: CONSENT_VERSION }
    saveConsent(state)
    setConsent(state)
    setShowBanner(false)
    setShowSettings(false)
  }

  if (!showBanner) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-[rgb(var(--border))] bg-white p-4 shadow-lg sm:p-6"
    >
      <div className="container-site">
        {!showSettings ? (
          <>
            <p className="mb-4 text-sm text-[rgb(var(--color-navy))]" style={{ lineHeight: 1.6 }}>
              We use cookies for necessary site function and, with your consent, analytics and marketing. See our{' '}
              <Link href="/privacy" className="text-[rgb(var(--color-green))] underline hover:no-underline">
                Privacy policy
              </Link>
              .
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={acceptAll}
                className="btn-pill btn-pill-green"
              >
                <span className="btn-text">Accept all</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="btn-pill btn-pill-secondary"
              >
                <span className="btn-text">Reject non-essential</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="text-sm text-[rgb(var(--color-navy))] underline hover:no-underline"
              >
                Cookie settings
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="mb-2 font-semibold text-[rgb(var(--color-navy))]">Cookie preferences</h3>
            <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.6 }}>
              Necessary cookies are always on. Choose optional categories.
            </p>
            <div className="mb-4 space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="h-4 w-4 rounded border-[rgb(var(--border))]"
                />
                <span className="text-sm text-[rgb(var(--color-navy))]">Analytics</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="h-4 w-4 rounded border-[rgb(var(--border))]"
                />
                <span className="text-sm text-[rgb(var(--color-navy))]">Marketing</span>
              </label>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" onClick={saveSettings} className="btn-pill btn-pill-green">
                <span className="btn-text">Save</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="text-sm text-[rgb(var(--color-navy))] underline hover:no-underline"
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export function CookieSettingsTrigger() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
      className="text-xs text-[rgb(var(--color-text-light))] hover:text-[rgb(var(--color-navy))]"
    >
      Cookie settings
    </button>
  )
}
