'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

/**
 * Page Hero - Reusable hero for inner pages with varied layouts and heights
 * 
 * Variants (all use single image):
 * - default: Standard side-by-side text + image
 * - centered: Centered text with image below
 * - fullBleed: Full-width background image with overlay
 * - stacked: Wide banner image above text
 * - offset: Image offset/overlapping the edge
 * 
 * Sizes:
 * - sm: Compact hero for service pages
 * - md: Medium hero for main sections  
 * - lg: Large hero (default for main pages)
 */

interface HeroImage {
  src?: string
  alt: string
  placeholder?: boolean
}

interface PageHeroProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  body?: string
  variant?: 'default' | 'centered' | 'fullBleed' | 'stacked' | 'offset'
  size?: 'sm' | 'md' | 'lg'
  image?: HeroImage
}

// Image placeholder component
function ImagePlaceholder({ className, alt }: { className?: string; alt: string }) {
  return (
    <div 
      className={`img-placeholder ${className || ''}`}
      role="img"
      aria-label={alt}
    />
  )
}

// Actual image or placeholder
function HeroImage({ image, className }: { image: HeroImage; className?: string }) {
  if (image.placeholder || !image.src) {
    return <ImagePlaceholder className={className} alt={image.alt} />
  }
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      className={`object-cover ${className || ''}`}
    />
  )
}

export function PageHero({ 
  eyebrow, 
  headline, 
  subheadline, 
  body, 
  variant = 'default',
  size = 'md',
  image = { alt: 'Hero image', placeholder: true }
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

  // Size-based padding
  const sizePadding = {
    sm: 'py-8 lg:py-12',
    md: 'py-10 lg:py-14',
    lg: 'py-12 lg:py-16'
  }

  // Size-based image aspect ratios
  const imageAspect = {
    sm: 'aspect-[16/9]',
    md: 'aspect-[4/3]',
    lg: 'aspect-[3/2]'
  }

  // Render different variants
  const renderVariant = () => {
    switch (variant) {
      // ===== CENTERED: Centered text with image below =====
      case 'centered':
        return (
          <section className="relative bg-white">
            <div className="container-site">
              <div className="pt-10 lg:pt-14">
                <Link href="/">
                  <Image 
                    src="/pathways-logo.png" 
                    alt="Pathways Within - Home" 
                    width={240}
                    height={240}
                    className="mx-auto w-[180px] transition-opacity hover:opacity-80 lg:w-[240px]"
                    priority
                  />
                </Link>
              </div>
              
              <div className={sizePadding[size]}>
                <div className="mx-auto max-w-3xl text-center">
                  {eyebrow && (
                    <p className="mb-3 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                      {eyebrow}
                    </p>
                  )}
                  <h1 className="text-[rgb(var(--color-navy))]" style={{ lineHeight: 1.1 }}>{headline}</h1>
                  {subheadline && (
                    <p className="mt-4 text-lg text-[rgb(var(--color-text-light))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}>
                      {subheadline}
                    </p>
                  )}
                  {body && (
                    <p className="mt-5 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>{body}</p>
                  )}
                </div>
                
                {/* Single image below */}
                <div className="mx-auto mt-10 max-w-4xl">
                  <div className={`relative ${imageAspect[size]} overflow-hidden rounded-lg`}>
                    <HeroImage image={image} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )

      // ===== FULL BLEED: Background image with overlay =====
      case 'fullBleed':
        const fullBleedHeight = {
          sm: 'min-h-[40vh]',
          md: 'min-h-[50vh]',
          lg: 'min-h-[60vh]'
        }
        return (
          <section className={`relative overflow-hidden ${fullBleedHeight[size]}`}>
            {/* Background image */}
            <div className="absolute inset-0">
              <HeroImage image={image} />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--color-navy))]/90 via-[rgb(var(--color-navy))]/70 to-transparent" />
            </div>
            
            <div className="container-site relative z-10">
              <div className="pt-10 lg:pt-14">
                <Link href="/">
                  <Image 
                    src="/pathways-logo.png" 
                    alt="Pathways Within - Home" 
                    width={240}
                    height={240}
                    className="w-[180px] brightness-0 invert transition-opacity hover:opacity-80 lg:w-[240px]"
                    priority
                  />
                </Link>
              </div>
              
              <div className={`max-w-2xl ${sizePadding[size]}`}>
                {eyebrow && (
                  <p className="mb-3 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                    {eyebrow}
                  </p>
                )}
                <h1 className="text-white" style={{ lineHeight: 1.1 }}>{headline}</h1>
                {subheadline && (
                  <p className="mt-4 text-lg text-white/80" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}>
                    {subheadline}
                  </p>
                )}
                {body && (
                  <p className="mt-5 text-white/70" style={{ lineHeight: 1.8 }}>{body}</p>
                )}
              </div>
            </div>
            
            <button 
              onClick={scrollToContent}
              className="scroll-indicator absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:flex"
              aria-label="Scroll to content"
            >
              <span className="text-white/70">Explore</span>
              <ArrowDown className="h-4 w-4 text-white/50" />
            </button>
          </section>
        )

      // ===== STACKED: Wide banner image above text =====
      case 'stacked':
        const stackedImageAspect = {
          sm: 'aspect-[21/7]',
          md: 'aspect-[21/8]',
          lg: 'aspect-[21/9]'
        }
        return (
          <section className="relative bg-white">
            <div className="container-site">
              <div className="pt-10 lg:pt-14">
                <Link href="/">
                  <Image 
                    src="/pathways-logo.png" 
                    alt="Pathways Within - Home" 
                    width={240}
                    height={240}
                    className="w-[180px] transition-opacity hover:opacity-80 lg:w-[240px]"
                    priority
                  />
                </Link>
              </div>
              
              <div className={sizePadding[size]}>
                {/* Wide banner image on top */}
                <div className={`relative mb-8 ${stackedImageAspect[size]} overflow-hidden rounded-lg`}>
                  <HeroImage image={image} />
                </div>
                
                <div className="max-w-3xl">
                  {eyebrow && (
                    <p className="mb-3 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                      {eyebrow}
                    </p>
                  )}
                  <h1 className="text-[rgb(var(--color-navy))]" style={{ lineHeight: 1.1 }}>{headline}</h1>
                  {subheadline && (
                    <p className="mt-4 text-lg text-[rgb(var(--color-text-light))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}>
                      {subheadline}
                    </p>
                  )}
                  {body && (
                    <p className="mt-5 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>{body}</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )

      // ===== OFFSET: Image offset/overlapping edge =====
      case 'offset':
        const offsetImageAspect = {
          sm: 'aspect-[4/3]',
          md: 'aspect-[4/3]',
          lg: 'aspect-[3/4]'
        }
        return (
          <section className="relative overflow-hidden bg-white">
            <div className="container-site">
              <div className="pt-10 lg:pt-14">
                <Link href="/">
                  <Image 
                    src="/pathways-logo.png" 
                    alt="Pathways Within - Home" 
                    width={240}
                    height={240}
                    className="w-[180px] transition-opacity hover:opacity-80 lg:w-[240px]"
                    priority
                  />
                </Link>
              </div>
              
              <div className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${sizePadding[size]}`}>
                <div className="lg:col-span-5">
                  {eyebrow && (
                    <p className="mb-3 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                      {eyebrow}
                    </p>
                  )}
                  <h1 className="text-[rgb(var(--color-navy))]" style={{ lineHeight: 1.1 }}>{headline}</h1>
                  {subheadline && (
                    <p className="mt-4 text-lg text-[rgb(var(--color-text-light))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}>
                      {subheadline}
                    </p>
                  )}
                  {body && (
                    <p className="mt-5 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>{body}</p>
                  )}
                </div>
                
                {/* Offset image - extends past container on right */}
                <div className="relative lg:col-span-7 lg:-mr-20">
                  <div className={`relative ${offsetImageAspect[size]} overflow-hidden rounded-lg shadow-xl`}>
                    <HeroImage image={image} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )

      // ===== DEFAULT: Standard side-by-side =====
      default:
        const defaultImageAspect = {
          sm: 'aspect-[4/3]',
          md: 'aspect-[4/3]',
          lg: 'aspect-[3/2]'
        }
        return (
          <section className="relative bg-white">
            <div className="container-site">
              <div className="pt-10 lg:pt-14">
                <Link href="/">
                  <Image 
                    src="/pathways-logo.png" 
                    alt="Pathways Within - Home" 
                    width={240}
                    height={240}
                    className="w-[180px] transition-opacity hover:opacity-80 lg:w-[240px]"
                    priority
                  />
                </Link>
              </div>
              
              <div className={`grid items-start gap-8 lg:grid-cols-12 lg:gap-12 ${sizePadding[size]}`}>
                <div className="lg:col-span-6">
                  {eyebrow && (
                    <p className="mb-3 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                      {eyebrow}
                    </p>
                  )}
                  <h1 className="text-[rgb(var(--color-navy))]" style={{ lineHeight: 1.1 }}>{headline}</h1>
                  {subheadline && (
                    <p className="mt-4 text-lg text-[rgb(var(--color-text-light))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}>
                      {subheadline}
                    </p>
                  )}
                  {body && (
                    <p className="mt-5 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>{body}</p>
                  )}
                </div>
                
                <div className="lg:col-span-6">
                  <div className={`relative ${defaultImageAspect[size]} overflow-hidden rounded-lg`}>
                    <HeroImage image={image} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
  }

  return renderVariant()
}
