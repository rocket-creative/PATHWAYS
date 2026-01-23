'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { type SiteName, SITE_CONFIG } from '../../lib/site-config'

// Hero images - Large, impressive AI-generated people photos for hero sections
const HERO_IMAGES = [
  '/hero-images/freepik__a-diverse-group-of-smiling-adults-east-asian-femal__72299.jpeg',
  '/hero-images/freepik__a-group-of-smiling-adults-of-various-ethnicities-i__72292.jpeg',
  '/hero-images/freepik__a-diverse-group-of-three-young-adults-two-women-an__72250.jpeg',
  '/hero-images/freepik__a-black-couple-in-their-late-30s-holding-hands-and__72251.jpeg',
  '/hero-images/freepik__a-latina-woman-and-a-white-man-a-straight-couple-w__72281.jpeg',
  '/hero-images/freepik__a-latino-couple-a-man-and-woman-in-their-30s-with-__72268.jpeg',
  '/hero-images/freepik__a-mixedrace-couple-one-black-and-one-east-asian-in__72275.jpeg',
  '/hero-images/freepik__two-east-asian-women-a-lesbian-couple-beaming-with__72286.jpeg',
  '/hero-images/freepik__a-mixedrace-family-of-four-parents-and-two-childre__72248.jpeg',
  '/hero-images/freepik__a-latino-family-of-four-parents-and-two-children-o__72266.jpeg',
]

function getHeroImageByIndex(index: number): string {
  return HERO_IMAGES[index % HERO_IMAGES.length] || HERO_IMAGES[0]!
}

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
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-md">
              <Image
                src={getHeroImageByIndex(0)}
                alt="Pathways Within community"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-md lg:hidden">
              <Image
                src={getHeroImageByIndex(1)}
                alt="Pathways Within community"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </div>
        )

      case 'sideBySide':
        return (
          <div className="relative aspect-[4/5] w-full overflow-hidden shadow-lg">
            <Image
              src={getHeroImageByIndex(0)}
              alt="Pathways Within community"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        )

      case 'overlapping':
        return (
          <div className="relative h-[300px] lg:h-[400px]">
            <div className="absolute left-0 top-0 w-[70%] overflow-hidden shadow-lg">
              <div className="relative aspect-[3/2]">
                <Image
                  src={getHeroImageByIndex(0)}
                  alt="Pathways Within community"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 70vw, 35vw"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[70%] overflow-hidden shadow-lg">
              <div className="relative aspect-[3/2]">
                <Image
                  src={getHeroImageByIndex(1)}
                  alt="Pathways Within community"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 70vw, 35vw"
                />
              </div>
            </div>
          </div>
        )

      case 'trio':
        return (
          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[3/2] w-full overflow-hidden shadow-lg">
              <Image
                src={getHeroImageByIndex(0)}
                alt="Pathways Within community"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[3/2] w-full overflow-hidden shadow-md">
              <Image
                src={getHeroImageByIndex(1)}
                alt="Pathways Within community"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[3/2] w-full overflow-hidden shadow-md">
              <Image
                src={getHeroImageByIndex(2)}
                alt="Pathways Within community"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        )

      case 'carousel':
        return (
          <div className="relative">
            <div className="overflow-hidden shadow-lg">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
              >
                {[...Array(carouselCount)].map((_, i) => (
                  <div 
                    key={i} 
                    className="relative aspect-[3/2] w-full flex-shrink-0"
                  >
                    <Image
                      src={getHeroImageByIndex(i)}
                      alt={`Pathways Within office ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
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
            <div className="relative col-span-2 row-span-2 overflow-hidden shadow-lg">
              <Image
                src={getHeroImageByIndex(0)}
                alt="Pathways Within community"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden shadow-md">
              <Image
                src={getHeroImageByIndex(1)}
                alt="Pathways Within community"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden shadow-md">
              <Image
                src={getHeroImageByIndex(2)}
                alt="Pathways Within community"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </div>
        )

      case 'single':
      default:
        return (
          <div className="relative aspect-[3/2] w-full overflow-hidden shadow-md">
            <Image
              src={getHeroImageByIndex(0)}
              alt="Pathways Within community"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )
    }
  }

  return (
    <section className="relative bg-white">
      <div className="container-site">        
        <div className="grid min-h-[75vh] items-center gap-16 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
          {/* Left content - Logo + Text */}
          <div className="order-1">
            {site === 'main' ? (
              <Link href="/" className="mb-12 block lg:mb-16">
                <img 
                  src="/pathways-logo.png" 
                  alt="Pathways Within - Home" 
                  className="w-[200px] transition-opacity hover:opacity-80 lg:w-[280px]"
                />
              </Link>
            ) : (
              <a href={homeUrl} className="mb-12 block lg:mb-16">
                <img 
                  src="/pathways-logo.png" 
                  alt="Pathways Within - Home" 
                  className="w-[200px] transition-opacity hover:opacity-80 lg:w-[280px]"
                />
              </a>
            )}
            
            {eyebrow && (
              <p 
                className="mb-6 text-xs uppercase tracking-[0.2em] text-[rgb(var(--color-green))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 600 }}
              >
                {eyebrow}
              </p>
            )}
            
            <h1 className="mb-8 text-[rgb(var(--color-navy))]" style={{ lineHeight: 0.95, fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 700, letterSpacing: '-0.04em' }}>
              {headline}
            </h1>
            
            {subheadline && (
              <p 
                className="mb-8 text-2xl text-[rgb(var(--color-green))] lg:text-3xl"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 600, letterSpacing: '-0.02em' }}
              >
                {subheadline}
              </p>
            )}
            
            {body && (
              <p className="max-w-lg text-xl text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.6, letterSpacing: '-0.01em' }}>
                {body}
              </p>
            )}
          </div>
          
          {/* Right image area */}
          <div className="order-2">
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
