'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to observability service in production; avoid console as primary strategy per observability.mdc
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('App error:', error?.message, error?.digest)
    }
  }, [error])

  return (
    <div className="container-site flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <h1 className="mb-4 text-[rgb(var(--color-navy))]">Something went wrong</h1>
      <p className="mb-8 max-w-md text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
        We encountered an error. Please try again or return home.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="btn-pill btn-pill-primary"
        >
          <span className="btn-text">Try again</span>
        </button>
        <Link href="/" className="btn-pill btn-pill-secondary">
          <span className="btn-text">Go home</span>
        </Link>
      </div>
    </div>
  )
}
