'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'

interface PageHeroProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  body?: string
  image: string
  imageAlt?: string
  ctaText?: string
  ctaHref?: string
}

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
    <section className="relative min-h-[85vh]">
      {/* Full-bleed Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />
      </div>

      {/* Content Overlay - positioned on the left */}
      <div className="relative flex min-h-[85vh] items-center">
        <div className="w-full px-6 py-12 sm:px-8 lg:max-w-[50%] lg:px-12 xl:px-16">
          {/* Content box with glass effect */}
          <div className="rounded-lg bg-white/70 p-8 shadow-2xl backdrop-blur-xl lg:p-12">
            {/* Logo */}
            <Link href="/" className="mb-8 block lg:mb-10">
              <Image 
                src="/logo.png" 
                alt="Pathways Within - Home" 
                width={280}
                height={100}
                className="w-[180px] transition-opacity hover:opacity-80 lg:w-[240px]"
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
            <h1 className="mb-4 text-[rgb(var(--color-navy))]" style={{ fontWeight: 300 }}>
              {headline}
            </h1>
            
            {/* Subheadline */}
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
                <Link href={ctaHref} className="btn-pill btn-pill-primary">
                  <span className="btn-text">{ctaText}</span>
                  <span className="btn-arrow"><ArrowRight /></span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - centered */}
      <button 
        onClick={scrollToContent}
        className="scroll-indicator absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex"
        aria-label="Scroll to content"
      >
        <span>Explore</span>
        <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </button>
    </section>
  )
}
