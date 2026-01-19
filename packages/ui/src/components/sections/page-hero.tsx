'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { type SiteName, SITE_CONFIG } from '../../lib/site-config'

/**
 * Layout variants for PageHero:
 * - single: One image (default)
 * - stacked: Two images stacked vertically
 * - sideBySide: Two images side by side
 * - overlapping: Two images with overlap effect
 * - trio: Three images in a grid
 * - carousel: Multiple images in a carousel
 * - mosaic: Asymmetric grid of images
 */
type LayoutVariant = 'single' | 'stacked' | 'sideBySide' | 'overlapping' | 'trio' | 'carousel' | 'mosaic'

interface PageHeroProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  body?: string
  site?: SiteName
  /** 
   * Layout variant for the image area:
   * - single: One image (default)
   * - stacked: Two images stacked vertically
   * - sideBySide: Two images side by side
   * - overlapping: Two images with overlap effect
   * - trio: Three images in a grid
   * - carousel: Multiple images in a carousel
   * - mosaic: Asymmetric grid of images
   */
  layout?: LayoutVariant
  /** 
   * CSS class for the image placeholder(s). Use img-placeholder-* classes from globals.css
   */
  imageClass?: string
}

/**
 * Page Hero - Reusable hero for inner pages with multiple layout options
 */
export function PageHero({ 
  eyebrow, 
  headline, 
  subheadline, 
  body, 
  site = 'main',
  layout = 'single',
  imageClass = 'img-placeholder'
}: PageHeroProps) {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const carouselCount = 4

  // Auto-advance carousel
  useEffect(() => {
    if (layout !== 'carousel') return
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselCount)
    }, 4000)
    return () => clearInterval(timer)
  }, [layout])

  const scrollToContent = () => {
    const main = document.querySelector('main')
    if (main) {
      const firstSection = main.querySelector('section:nth-child(2)')
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const homeUrl = site === 'main' ? '/' : SITE_CONFIG.main.url

  // Render different image layouts
  const renderImages = () => {
    switch (layout) {
      case 'stacked':
        return (
          <div className="flex flex-col gap-4">
            <div className={`${imageClass} aspect-[16/9] w-full rounded-lg`} />
            <div className={`${imageClass} aspect-[16/9] w-full rounded-lg opacity-80`} />
          </div>
        )

      case 'sideBySide':
        return (
          <div className="grid grid-cols-2 gap-4">
            <div className={`${imageClass} aspect-[3/4] w-full rounded-lg`} />
            <div className={`${imageClass} aspect-[3/4] w-full rounded-lg opacity-90`} />
          </div>
        )

      case 'overlapping':
        return (
          <div className="relative h-[300px] lg:h-[400px]">
            <div className={`${imageClass} absolute left-0 top-0 aspect-[4/3] w-[70%] rounded-lg shadow-lg`} />
            <div className={`${imageClass} absolute bottom-0 right-0 aspect-[4/3] w-[70%] rounded-lg shadow-lg opacity-95`} />
          </div>
        )

      case 'trio':
        return (
          <div className="grid grid-cols-2 gap-3">
            <div className={`${imageClass} col-span-2 aspect-[16/9] w-full rounded-lg`} />
            <div className={`${imageClass} aspect-square w-full rounded-lg opacity-90`} />
            <div className={`${imageClass} aspect-square w-full rounded-lg opacity-85`} />
          </div>
        )

      case 'carousel':
        return (
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
              >
                {[...Array(carouselCount)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`${imageClass} aspect-[4/3] w-full flex-shrink-0`}
                    style={{ opacity: 1 - (i * 0.05) }}
                  />
                ))}
              </div>
            </div>
            {/* Carousel controls */}
            <div className="mt-4 flex items-center justify-center gap-4">
              <button 
                onClick={() => setCarouselIndex((prev) => (prev - 1 + carouselCount) % carouselCount)}
                className="rounded-full bg-[rgb(var(--color-navy))]/10 p-2 transition-colors hover:bg-[rgb(var(--color-navy))]/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4 text-[rgb(var(--color-navy))]" />
              </button>
              <div className="flex gap-2">
                {[...Array(carouselCount)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === carouselIndex 
                        ? 'bg-[rgb(var(--color-green))]' 
                        : 'bg-[rgb(var(--color-navy))]/20'
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={() => setCarouselIndex((prev) => (prev + 1) % carouselCount)}
                className="rounded-full bg-[rgb(var(--color-navy))]/10 p-2 transition-colors hover:bg-[rgb(var(--color-navy))]/20"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4 text-[rgb(var(--color-navy))]" />
              </button>
            </div>
          </div>
        )

      case 'mosaic':
        return (
          <div className="grid grid-cols-3 grid-rows-2 gap-3">
            <div className={`${imageClass} col-span-2 row-span-2 rounded-lg`} />
            <div className={`${imageClass} rounded-lg opacity-90`} />
            <div className={`${imageClass} rounded-lg opacity-85`} />
          </div>
        )

      case 'single':
      default:
        return (
          <div className={`${imageClass} aspect-[4/3] w-full rounded-lg lg:aspect-[3/2]`} />
        )
    }
  }

  return (
    <section className="relative bg-white">
      <div className="container-site">
        <div className="pt-12 lg:pt-16">
          {site === 'main' ? (
            <Link href="/">
              <img 
                src="/pathways-logo.png" 
                alt="Pathways Within - Home" 
                className="w-[200px] transition-opacity hover:opacity-80 lg:w-[280px]"
              />
            </Link>
          ) : (
            <a href={homeUrl}>
              <img 
                src="/pathways-logo.png" 
                alt="Pathways Within - Home" 
                className="w-[200px] transition-opacity hover:opacity-80 lg:w-[280px]"
              />
            </a>
          )}
        </div>
        
        <div className="grid items-start gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
          {/* Left content */}
          <div className="lg:col-span-6">
            {eyebrow && (
              <p 
                className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                {eyebrow}
              </p>
            )}
            
            <h1 className="text-[rgb(var(--color-navy))]" style={{ lineHeight: 1.1 }}>
              {headline}
            </h1>
            
            {subheadline && (
              <p 
                className="mt-4 text-xl text-[rgb(var(--color-text-light))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}
              >
                {subheadline}
              </p>
            )}
            
            {body && (
              <p className="mt-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                {body}
              </p>
            )}
          </div>
          
          {/* Right image area */}
          <div className="lg:col-span-6">
            {renderImages()}
          </div>
        </div>
        
        <button 
          onClick={scrollToContent}
          className="scroll-indicator absolute bottom-4 left-1/2 hidden -translate-x-1/2 lg:flex"
          aria-label="Scroll to content"
        >
          <span>Explore</span>
          <ArrowDown className="h-4 w-4 text-[rgb(var(--color-text-light))]" />
        </button>
      </div>
    </section>
  )
}
