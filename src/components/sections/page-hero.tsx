'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

/**
 * Page Hero Variants - Multiple unique hero layouts for different pages
 * 
 * Variants:
 * - default: Standard side-by-side text + single image
 * - split: Two images side by side (great for dual categories)
 * - overlapping: Two images overlapping with depth effect
 * - carousel: Auto-rotating image carousel
 * - collage: Grid of 3-4 images in artistic layout
 * - fullBleed: Full-width background image with overlay
 * - minimal: Clean text-focused with small accent image
 * - stacked: Vertical layout with image above text
 * - diagonal: Diagonal split between content and image
 * - mosaic: Asymmetric image grid (4+ images)
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
  variant?: 'default' | 'split' | 'overlapping' | 'carousel' | 'collage' | 'fullBleed' | 'minimal' | 'stacked' | 'diagonal' | 'mosaic'
  images?: HeroImage[]
  darkMode?: boolean
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
  images = [{ alt: 'Hero image', placeholder: true }],
  darkMode = false
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

  const textColorClass = darkMode ? 'text-white' : 'text-[rgb(var(--color-navy))]'
  const textLightClass = darkMode ? 'text-white/70' : 'text-[rgb(var(--color-text-light))]'
  const bgClass = darkMode ? 'bg-gradient-navy' : 'bg-white'

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  
  useEffect(() => {
    if (variant === 'carousel' && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [variant, images.length])

  // Render different variants
  const renderVariant = () => {
    switch (variant) {
      // ===== SPLIT: Two images side by side =====
      case 'split':
        return (
          <section className={`relative ${bgClass}`}>
            <div className="container-site">
              <div className="pt-12 lg:pt-16">
                <Link href="/">
                  <Image 
                    src="/pathways-logo.png" 
                    alt="Pathways Within - Home" 
                    width={280}
                    height={280}
                    className={`w-[200px] transition-opacity hover:opacity-80 lg:w-[280px] ${darkMode ? 'brightness-0 invert' : ''}`}
                    priority
                  />
                </Link>
              </div>
              
              <div className="py-12 lg:py-16">
                <div className="mb-10 max-w-2xl">
                  {eyebrow && (
                    <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                      {eyebrow}
                    </p>
                  )}
                  <h1 className={textColorClass} style={{ lineHeight: 1.1 }}>{headline}</h1>
                  {subheadline && (
                    <p className={`mt-4 text-xl ${textLightClass}`} style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}>
                      {subheadline}
                    </p>
                  )}
                  {body && (
                    <p className={`mt-6 ${textLightClass}`} style={{ lineHeight: 1.8 }}>{body}</p>
                  )}
                </div>
                
                {/* Split images */}
                <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                    <HeroImage image={images[0] || { alt: 'Image 1', placeholder: true }} className="transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                    <HeroImage image={images[1] || { alt: 'Image 2', placeholder: true }} className="transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )

      // ===== OVERLAPPING: Two images with depth =====
      case 'overlapping':
        return (
          <section className={`relative overflow-hidden ${bgClass}`}>
            <div className="container-site">
              <div className="pt-12 lg:pt-16">
                <Link href="/">
                  <Image 
                    src="/pathways-logo.png" 
                    alt="Pathways Within - Home" 
                    width={280}
                    height={280}
                    className={`w-[200px] transition-opacity hover:opacity-80 lg:w-[280px] ${darkMode ? 'brightness-0 invert' : ''}`}
                    priority
                  />
                </Link>
              </div>
              
              <div className="grid items-center gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
                <div className="lg:col-span-5">
                  {eyebrow && (
                    <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                      {eyebrow}
                    </p>
                  )}
                  <h1 className={textColorClass} style={{ lineHeight: 1.1 }}>{headline}</h1>
                  {subheadline && (
                    <p className={`mt-4 text-xl ${textLightClass}`} style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}>
                      {subheadline}
                    </p>
                  )}
                  {body && (
                    <p className={`mt-6 ${textLightClass}`} style={{ lineHeight: 1.8 }}>{body}</p>
                  )}
                </div>
                
                {/* Overlapping images */}
                <div className="relative lg:col-span-7">
                  <div className="relative ml-auto w-[85%]">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                      <HeroImage image={images[0] || { alt: 'Primary image', placeholder: true }} />
                    </div>
                  </div>
                  <div className="absolute -bottom-8 left-0 w-[55%] lg:-bottom-12">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-xl">
                      <HeroImage image={images[1] || { alt: 'Secondary image', placeholder: true }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={scrollToContent}
              className="scroll-indicator absolute bottom-4 left-1/2 hidden -translate-x-1/2 lg:flex"
              aria-label="Scroll to content"
            >
              <span>Explore</span>
              <ArrowDown className={`h-4 w-4 ${textLightClass}`} />
            </button>
          </section>
        )

      // ===== CAROUSEL: Auto-rotating images =====
      case 'carousel':
        return (
          <section className={`relative ${bgClass}`}>
            <div className="container-site">
              <div className="pt-12 lg:pt-16">
                <Link href="/">
                  <Image 
                    src="/pathways-logo.png" 
                    alt="Pathways Within - Home" 
                    width={280}
                    height={280}
                    className={`w-[200px] transition-opacity hover:opacity-80 lg:w-[280px] ${darkMode ? 'brightness-0 invert' : ''}`}
                    priority
                  />
                </Link>
              </div>
              
              <div className="grid items-start gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
                <div className="lg:col-span-5">
                  {eyebrow && (
                    <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                      {eyebrow}
                    </p>
                  )}
                  <h1 className={textColorClass} style={{ lineHeight: 1.1 }}>{headline}</h1>
                  {subheadline && (
                    <p className={`mt-4 text-xl ${textLightClass}`} style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}>
                      {subheadline}
                    </p>
                  )}
                  {body && (
                    <p className={`mt-6 ${textLightClass}`} style={{ lineHeight: 1.8 }}>{body}</p>
                  )}
                </div>
                
                {/* Carousel */}
                <div className="relative lg:col-span-7">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    {images.map((image, idx) => (
                      <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-700 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <HeroImage image={image} />
                      </div>
                    ))}
                  </div>
                  
                  {/* Carousel controls */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:bg-white hover:scale-110"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-5 w-5 text-[rgb(var(--color-navy))]" />
                      </button>
                      <button
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:bg-white hover:scale-110"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-5 w-5 text-[rgb(var(--color-navy))]" />
                      </button>
                      
                      {/* Dots */}
                      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                        {images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-2 w-2 rounded-full transition-all ${idx === currentSlide ? 'w-6 bg-white' : 'bg-white/50'}`}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        )

      // ===== COLLAGE: Grid of 3-4 images =====
      case 'collage':
        return (
          <section className={`relative ${bgClass}`}>
            <div className="container-site">
              <div className="pt-12 lg:pt-16">
                <Link href="/">
                  <Image 
                    src="/pathways-logo.png" 
                    alt="Pathways Within - Home" 
                    width={280}
                    height={280}
                    className={`w-[200px] transition-opacity hover:opacity-80 lg:w-[280px] ${darkMode ? 'brightness-0 invert' : ''}`}
                    priority
                  />
                </Link>
              </div>
              
              <div className="grid items-start gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
                <div className="lg:col-span-5">
                  {eyebrow && (
                    <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                      {eyebrow}
                    </p>
                  )}
                  <h1 className={textColorClass} style={{ lineHeight: 1.1 }}>{headline}</h1>
                  {subheadline && (
                    <p className={`mt-4 text-xl ${textLightClass}`} style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}>
                      {subheadline}
                    </p>
                  )}
                  {body && (
                    <p className={`mt-6 ${textLightClass}`} style={{ lineHeight: 1.8 }}>{body}</p>
                  )}
                </div>
                
                {/* Collage grid */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <HeroImage image={images[0] || { alt: 'Collage 1', placeholder: true }} />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <HeroImage image={images[1] || { alt: 'Collage 2', placeholder: true }} />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <HeroImage image={images[2] || { alt: 'Collage 3', placeholder: true }} />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <HeroImage image={images[3] || { alt: 'Collage 4', placeholder: true }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )

      // ===== FULL BLEED: Background image with overlay =====
      case 'fullBleed':
        return (
          <section className="relative min-h-[70vh] overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
              <HeroImage image={images[0] || { alt: 'Background', placeholder: true }} />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--color-navy))]/90 via-[rgb(var(--color-navy))]/70 to-transparent" />
            </div>
            
            <div className="container-site relative z-10">
              <div className="pt-12 lg:pt-16">
                <Link href="/">
                  <Image 
                    src="/pathways-logo.png" 
                    alt="Pathways Within - Home" 
                    width={280}
                    height={280}
                    className="w-[200px] brightness-0 invert transition-opacity hover:opacity-80 lg:w-[280px]"
                    priority
                  />
                </Link>
              </div>
              
              <div className="max-w-2xl py-16 lg:py-24">
                {eyebrow && (
                  <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                    {eyebrow}
                  </p>
                )}
                <h1 className="text-white" style={{ lineHeight: 1.1 }}>{headline}</h1>
                {subheadline && (
                  <p className="mt-4 text-xl text-white/80" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}>
                    {subheadline}
                  </p>
                )}
                {body && (
                  <p className="mt-6 text-white/70" style={{ lineHeight: 1.8 }}>{body}</p>
                )}
              </div>
            </div>
            
            <button 
              onClick={scrollToContent}
              className="scroll-indicator absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex"
              aria-label="Scroll to content"
            >
              <span className="text-white/70">Explore</span>
              <ArrowDown className="h-4 w-4 text-white/50" />
            </button>
          </section>
        )

      // ===== MINIMAL: Clean with small accent image =====
      case 'minimal':
        return (
          <section className={`relative ${bgClass}`}>
            <div className="container-site">
              <div className="pt-12 lg:pt-16">
                <Link href="/">
                  <Image 
                    src="/pathways-logo.png" 
                    alt="Pathways Within - Home" 
                    width={280}
                    height={280}
                    className={`w-[200px] transition-opacity hover:opacity-80 lg:w-[280px] ${darkMode ? 'brightness-0 invert' : ''}`}
                    priority
                  />
                </Link>
              </div>
              
              <div className="py-12 lg:py-20">
                <div className="mx-auto max-w-3xl text-center">
                  {eyebrow && (
                    <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                      {eyebrow}
                    </p>
                  )}
                  <h1 className={textColorClass} style={{ lineHeight: 1.1 }}>{headline}</h1>
                  {subheadline && (
                    <p className={`mt-4 text-xl ${textLightClass}`} style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}>
                      {subheadline}
                    </p>
                  )}
                  {body && (
                    <p className={`mt-6 ${textLightClass}`} style={{ lineHeight: 1.8 }}>{body}</p>
                  )}
                </div>
                
                {/* Small accent image */}
                <div className="mx-auto mt-12 max-w-md">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                    <HeroImage image={images[0] || { alt: 'Accent image', placeholder: true }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )

      // ===== STACKED: Vertical with image above =====
      case 'stacked':
        return (
          <section className={`relative ${bgClass}`}>
            <div className="container-site">
              <div className="pt-12 lg:pt-16">
                <Link href="/">
                  <Image 
                    src="/pathways-logo.png" 
                    alt="Pathways Within - Home" 
                    width={280}
                    height={280}
                    className={`w-[200px] transition-opacity hover:opacity-80 lg:w-[280px] ${darkMode ? 'brightness-0 invert' : ''}`}
                    priority
                  />
                </Link>
              </div>
              
              <div className="py-12 lg:py-16">
                {/* Wide image on top */}
                <div className="relative mb-10 aspect-[21/9] overflow-hidden rounded-lg">
                  <HeroImage image={images[0] || { alt: 'Hero image', placeholder: true }} />
                </div>
                
                <div className="mx-auto max-w-3xl">
                  {eyebrow && (
                    <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                      {eyebrow}
                    </p>
                  )}
                  <h1 className={textColorClass} style={{ lineHeight: 1.1 }}>{headline}</h1>
                  {subheadline && (
                    <p className={`mt-4 text-xl ${textLightClass}`} style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}>
                      {subheadline}
                    </p>
                  )}
                  {body && (
                    <p className={`mt-6 ${textLightClass}`} style={{ lineHeight: 1.8 }}>{body}</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )

      // ===== DIAGONAL: Diagonal split =====
      case 'diagonal':
        return (
          <section className={`relative overflow-hidden ${bgClass}`}>
            <div className="container-site">
              <div className="pt-12 lg:pt-16">
                <Link href="/">
                  <Image 
                    src="/pathways-logo.png" 
                    alt="Pathways Within - Home" 
                    width={280}
                    height={280}
                    className={`w-[200px] transition-opacity hover:opacity-80 lg:w-[280px] ${darkMode ? 'brightness-0 invert' : ''}`}
                    priority
                  />
                </Link>
              </div>
              
              <div className="grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-0 lg:py-16">
                <div className="relative z-10 lg:pr-12">
                  {eyebrow && (
                    <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                      {eyebrow}
                    </p>
                  )}
                  <h1 className={textColorClass} style={{ lineHeight: 1.1 }}>{headline}</h1>
                  {subheadline && (
                    <p className={`mt-4 text-xl ${textLightClass}`} style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}>
                      {subheadline}
                    </p>
                  )}
                  {body && (
                    <p className={`mt-6 ${textLightClass}`} style={{ lineHeight: 1.8 }}>{body}</p>
                  )}
                </div>
                
                {/* Diagonal image */}
                <div className="relative">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg lg:-mr-20 lg:skew-x-[-3deg]">
                    <div className="h-full w-full lg:skew-x-[3deg] lg:scale-110">
                      <HeroImage image={images[0] || { alt: 'Hero image', placeholder: true }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )

      // ===== MOSAIC: Asymmetric multi-image grid =====
      case 'mosaic':
        return (
          <section className={`relative ${bgClass}`}>
            <div className="container-site">
              <div className="pt-12 lg:pt-16">
                <Link href="/">
                  <Image 
                    src="/pathways-logo.png" 
                    alt="Pathways Within - Home" 
                    width={280}
                    height={280}
                    className={`w-[200px] transition-opacity hover:opacity-80 lg:w-[280px] ${darkMode ? 'brightness-0 invert' : ''}`}
                    priority
                  />
                </Link>
              </div>
              
              <div className="grid items-start gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
                <div className="lg:col-span-5">
                  {eyebrow && (
                    <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                      {eyebrow}
                    </p>
                  )}
                  <h1 className={textColorClass} style={{ lineHeight: 1.1 }}>{headline}</h1>
                  {subheadline && (
                    <p className={`mt-4 text-xl ${textLightClass}`} style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}>
                      {subheadline}
                    </p>
                  )}
                  {body && (
                    <p className={`mt-6 ${textLightClass}`} style={{ lineHeight: 1.8 }}>{body}</p>
                  )}
                </div>
                
                {/* Mosaic grid */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2 row-span-2 relative aspect-square overflow-hidden rounded-lg">
                      <HeroImage image={images[0] || { alt: 'Mosaic 1', placeholder: true }} />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <HeroImage image={images[1] || { alt: 'Mosaic 2', placeholder: true }} />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <HeroImage image={images[2] || { alt: 'Mosaic 3', placeholder: true }} />
                    </div>
                    <div className="col-span-2 relative aspect-[2/1] overflow-hidden rounded-lg">
                      <HeroImage image={images[3] || { alt: 'Mosaic 4', placeholder: true }} />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <HeroImage image={images[4] || { alt: 'Mosaic 5', placeholder: true }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )

      // ===== DEFAULT: Standard side-by-side =====
      default:
        return (
          <section className={`relative ${bgClass}`}>
            <div className="container-site">
              <div className="pt-12 lg:pt-16">
                <Link href="/">
                  <Image 
                    src="/pathways-logo.png" 
                    alt="Pathways Within - Home" 
                    width={280}
                    height={280}
                    className={`w-[200px] transition-opacity hover:opacity-80 lg:w-[280px] ${darkMode ? 'brightness-0 invert' : ''}`}
                    priority
                  />
                </Link>
              </div>
              
              <div className="grid items-start gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
                <div className="lg:col-span-6">
                  {eyebrow && (
                    <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                      {eyebrow}
                    </p>
                  )}
                  <h1 className={textColorClass} style={{ lineHeight: 1.1 }}>{headline}</h1>
                  {subheadline && (
                    <p className={`mt-4 text-xl ${textLightClass}`} style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 400 }}>
                      {subheadline}
                    </p>
                  )}
                  {body && (
                    <p className={`mt-6 ${textLightClass}`} style={{ lineHeight: 1.8 }}>{body}</p>
                  )}
                </div>
                
                <div className="lg:col-span-6">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[3/2]">
                    <HeroImage image={images[0] || { alt: 'Hero image', placeholder: true }} />
                  </div>
                </div>
              </div>
              
              <button 
                onClick={scrollToContent}
                className="scroll-indicator absolute bottom-4 left-1/2 hidden -translate-x-1/2 lg:flex"
                aria-label="Scroll to content"
              >
                <span>Explore</span>
                <ArrowDown className={`h-4 w-4 ${textLightClass}`} />
              </button>
            </div>
          </section>
        )
    }
  }

  return renderVariant()
}
