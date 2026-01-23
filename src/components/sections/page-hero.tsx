'use client'

import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

interface PageHeroProps {
  /** Small label above headline */
  eyebrow?: string
  /** Main H1 heading */
  headline: string
  /** Subheadline - displays in green below headline */
  subheadline?: string
  /** Body text below subheadline */
  body?: string
  /** Hero image path - required */
  image: string
  /** Alt text for image */
  imageAlt?: string
  /** CTA button text */
  ctaText?: string
  /** CTA button link */
  ctaHref?: string
}

/**
 * Page Hero - Background image with text overlay on left
 * Used on all inner pages for consistent design
 */
export function PageHero({ 
  eyebrow, 
  headline, 
  subheadline,
  body, 
  image,
  imageAlt = 'Pathways Within',
  ctaText,
  ctaHref
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

  return (
    <section 
      className="relative min-h-[85vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
      role="img"
      aria-label={imageAlt}
    >
      {/* Two-column overlay */}
      <div className="flex min-h-[85vh]">
        {/* Left - Content with white background (~40%) */}
        <div className="flex w-full flex-col justify-center bg-white px-6 py-12 sm:px-8 lg:w-[40%] lg:px-12 xl:px-16">
          {/* Logo */}
          <Link href="/" className="mb-10 block lg:mb-14">
            <img 
              src="/pathways-logo.png" 
              alt="Pathways Within - Home" 
              className="w-[180px] transition-opacity hover:opacity-80 lg:w-[220px]"
            />
          </Link>
          
          {/* Eyebrow */}
          {eyebrow && (
            <p 
              className="mb-4 text-xs uppercase tracking-[0.2em] text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 600 }}
            >
              {eyebrow}
            </p>
          )}
          
          {/* Headline */}
          <h1 className="mb-4 text-[rgb(var(--color-navy))]">
            {headline}
          </h1>
          
          {/* Subheadline - green accent text */}
          {subheadline && (
            <p 
              className="mb-6 text-xl text-[rgb(var(--color-green))] lg:text-2xl"
              style={{ fontFamily: 'var(--font-clarendon), serif', fontWeight: 600, lineHeight: 1.3 }}
            >
              {subheadline}
            </p>
          )}
          
          {/* Body */}
          {body && (
            <p 
              className="mb-8 max-w-md text-lg text-[rgb(var(--color-text-light))]" 
              style={{ lineHeight: 1.7, letterSpacing: '-0.01em' }}
            >
              {body}
            </p>
          )}
          
          {/* CTA Button */}
          {ctaText && ctaHref && (
            <div>
              <Link
                href={ctaHref}
                className="btn-pill-primary inline-flex"
              >
                {ctaText}
              </Link>
            </div>
          )}
        </div>
        
        {/* Right - Empty spacer to show background image (~60%) */}
        <div className="hidden lg:block lg:w-[60%]" />
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-6 left-[20%] hidden -translate-x-1/2 flex-col items-center gap-2 text-sm text-[rgb(var(--color-text-light))] transition-colors hover:text-[rgb(var(--color-navy))] lg:flex"
        aria-label="Scroll to content"
      >
        <span className="text-xs uppercase tracking-wider">Explore</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  )
}
