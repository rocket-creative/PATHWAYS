'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'

interface PageHeroProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  body?: string
  ctaText?: string
  ctaHref?: string
  ctaSecondaryText?: string
  ctaSecondaryHref?: string
  theme?: 'navy' | 'cream'
}

export function PageHero({
  eyebrow,
  headline,
  subheadline,
  body,
  ctaText,
  ctaHref,
  ctaSecondaryText,
  ctaSecondaryHref,
  theme = 'navy',
}: PageHeroProps) {
  const scrollToContent = () => {
    const main = document.querySelector('main')
    if (main) {
      const firstSection = main.querySelector('section:nth-child(2)')
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const isNavy = theme === 'navy'

  return (
    <section className={`relative ${isNavy ? 'bg-hero-gradient' : 'bg-[rgb(var(--color-cream))]'}`}>
      {/* Large logo — vertically centered, inset from right */}
      <div className="absolute right-12 top-1/2 hidden -translate-y-1/2 lg:block xl:right-16" aria-hidden="true">
        <Image
          src="/logo.png"
          alt=""
          width={480}
          height={480}
          className={`w-[320px] xl:w-[420px] 2xl:w-[500px] ${isNavy ? 'brightness-0 invert' : ''}`}
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="container-site relative py-20 lg:py-28 xl:py-32">
        <div className="max-w-3xl">
          {eyebrow && (
            <p
              className={`mb-4 text-xs uppercase tracking-[0.2em] ${isNavy ? 'text-[rgb(var(--color-green))]' : 'text-[rgb(var(--color-green))]'}`}
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 600 }}
            >
              {eyebrow}
            </p>
          )}

          <h1 className={`mb-4 ${isNavy ? 'text-white' : 'text-[rgb(var(--color-navy))]'}`}>
            {headline}
          </h1>

          {subheadline && (
            <p
              className={`mb-6 text-xl lg:text-2xl ${isNavy ? 'text-[rgb(var(--color-green))]' : 'text-[rgb(var(--color-green))]'}`}
              style={{ fontFamily: 'var(--font-clarendon), serif', fontWeight: 600, lineHeight: 1.3 }}
            >
              {subheadline}
            </p>
          )}

          {body && (
            <p
              className={`mb-8 max-w-2xl text-lg ${isNavy ? 'text-white/80' : 'text-[rgb(var(--color-text-light))]'}`}
              style={{ lineHeight: 1.7 }}
            >
              {body}
            </p>
          )}

          {(ctaText && ctaHref) && (
            <div className="flex flex-wrap gap-4">
              <Link href={ctaHref} className={isNavy ? 'btn-pill btn-pill-green' : 'btn-pill btn-pill-primary'}>
                <span className="btn-text">{ctaText}</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </Link>
              {ctaSecondaryText && ctaSecondaryHref && (
                <Link href={ctaSecondaryHref} className={isNavy ? 'btn-pill btn-pill-white' : 'btn-pill btn-pill-secondary'}>
                  <span className="btn-text">{ctaSecondaryText}</span>
                  <span className="btn-arrow"><ArrowRight /></span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className={`absolute bottom-6 left-8 hidden flex-col items-center gap-2 text-xs uppercase tracking-wider transition-opacity hover:opacity-80 lg:flex ${isNavy ? 'text-white/40' : 'text-[rgb(var(--color-text-light))]'}`}
        aria-label="Scroll to content"
      >
        <span>Explore</span>
        <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </button>
    </section>
  )
}
