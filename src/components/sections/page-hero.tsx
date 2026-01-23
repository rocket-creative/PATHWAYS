'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

interface PageHeroProps {
  /** Small label above headline */
  eyebrow?: string
  /** Main H1 heading */
  headline: string
  /** Body text below headline */
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
 * Page Hero - Simple 1/3 content + 2/3 image layout
 * Used on all inner pages for consistent design
 */
export function PageHero({ 
  eyebrow, 
  headline, 
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
    <section className="relative min-h-[85vh] bg-white">
      <div className="grid min-h-[85vh] lg:grid-cols-3">
        {/* Left 1/3 - Content */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-8 lg:px-12 lg:py-20">
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
          <h1 className="mb-6 text-[rgb(var(--color-navy))]">
            {headline}
          </h1>
          
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
        
        {/* Right 2/3 - Full Image */}
        <div className="relative order-first min-h-[300px] lg:order-last lg:col-span-2">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sm text-[rgb(var(--color-text-light))] transition-colors hover:text-[rgb(var(--color-navy))] lg:flex"
        aria-label="Scroll to content"
      >
        <span className="text-xs uppercase tracking-wider">Explore</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  )
}
