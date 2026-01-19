/**
 * Content Meta Component
 * Displays author, reviewer, and date information for E-E-A-T compliance
 */

import { Calendar, User, BadgeCheck } from 'lucide-react'

interface ContentMetaProps {
  /** Author name */
  author?: string
  /** Author credentials (e.g., "LCSW, LMHC") */
  authorCredentials?: string
  /** Medical reviewer name */
  reviewer?: string
  /** Reviewer credentials */
  reviewerCredentials?: string
  /** Date content was last reviewed */
  lastReviewed?: string
  /** Date content was published */
  datePublished?: string
  /** Variant for display */
  variant?: 'compact' | 'full'
}

export function ContentMeta({
  author,
  authorCredentials,
  reviewer,
  reviewerCredentials,
  lastReviewed,
  datePublished,
  variant = 'compact',
}: ContentMetaProps) {
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center gap-4 text-sm text-[rgb(var(--color-text-light))]">
        {reviewer && (
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-[rgb(var(--color-green))]" aria-hidden="true" />
            <span>
              Reviewed by <span className="text-[rgb(var(--color-navy))]">{reviewer}</span>
              {reviewerCredentials && <span>, {reviewerCredentials}</span>}
            </span>
          </div>
        )}
        {lastReviewed && (
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span>Updated {lastReviewed}</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--color-cream))] p-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {author && (
          <div className="flex items-start gap-3">
            <User className="mt-0.5 h-4 w-4 text-[rgb(var(--color-green))]" aria-hidden="true" />
            <div>
              <p className="text-xs text-[rgb(var(--color-text-light))]">Written by</p>
              <p className="text-sm text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>
                {author}
                {authorCredentials && <span className="font-normal">, {authorCredentials}</span>}
              </p>
            </div>
          </div>
        )}
        {reviewer && (
          <div className="flex items-start gap-3">
            <BadgeCheck className="mt-0.5 h-4 w-4 text-[rgb(var(--color-green))]" aria-hidden="true" />
            <div>
              <p className="text-xs text-[rgb(var(--color-text-light))]">Medically reviewed by</p>
              <p className="text-sm text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>
                {reviewer}
                {reviewerCredentials && <span className="font-normal">, {reviewerCredentials}</span>}
              </p>
            </div>
          </div>
        )}
        {datePublished && (
          <div className="flex items-start gap-3">
            <Calendar className="mt-0.5 h-4 w-4 text-[rgb(var(--color-text-light))]" aria-hidden="true" />
            <div>
              <p className="text-xs text-[rgb(var(--color-text-light))]">Published</p>
              <p className="text-sm text-[rgb(var(--color-navy))]">{datePublished}</p>
            </div>
          </div>
        )}
        {lastReviewed && (
          <div className="flex items-start gap-3">
            <Calendar className="mt-0.5 h-4 w-4 text-[rgb(var(--color-text-light))]" aria-hidden="true" />
            <div>
              <p className="text-xs text-[rgb(var(--color-text-light))]">Last reviewed</p>
              <p className="text-sm text-[rgb(var(--color-navy))]">{lastReviewed}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
