'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { getRandomOfficeImage } from '@/lib/office-images'

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
 * Image Styles:
 * - default: Standard gray placeholder
 * - gradient: Navy to green gradient
 * - warm: Warm cream/linen tones
 * - cool: Cool breezy blue tones
 * - dark: Dark navy with subtle pattern
 * - organic: Soft organic shapes
 * - geometric: Geometric pattern overlay
 * - split: Split diagonal design
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
  imageStyle?: 'default' | 'gradient' | 'warm' | 'cool' | 'dark' | 'organic' | 'geometric' | 'split'
}

// Image placeholder component with varied styles
function ImagePlaceholder({ className, alt, style = 'default' }: { className?: string; alt: string; style?: string }) {
  const baseClasses = `absolute inset-0 ${className || ''}`
  
  switch (style) {
    case 'gradient':
      return (
        <div className={baseClasses} role="img" aria-label={alt}>
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-navy))] via-[rgb(var(--color-navy))]/80 to-[rgb(var(--color-green))]/60" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(114,162,59,0.4) 0%, transparent 50%)' }} />
        </div>
      )
    case 'warm':
      return (
        <div className={baseClasses} role="img" aria-label={alt}>
          <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(var(--color-linen))] via-[rgb(var(--color-cream))] to-[rgb(var(--color-linen))]/80" />
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(114,162,59,0.3) 0%, transparent 40%)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[rgb(var(--color-navy))]/10 to-transparent" />
        </div>
      )
    case 'cool':
      return (
        <div className={baseClasses} role="img" aria-label={alt}>
          <div className="absolute inset-0 bg-gradient-to-bl from-[rgb(var(--color-breezy))]/40 via-[rgb(var(--color-breezy))]/20 to-white" />
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(134,168,225,0.5) 0%, transparent 50%)' }} />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[rgb(var(--color-green))]/10 to-transparent" />
        </div>
      )
    case 'dark':
      return (
        <div className={baseClasses} role="img" aria-label={alt}>
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-navy))] to-[rgb(var(--color-navy))]/90" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)' }} />
          <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-tr from-[rgb(var(--color-green))]/20 to-transparent" />
        </div>
      )
    case 'organic':
      return (
        <div className={baseClasses} role="img" aria-label={alt}>
          <div className="absolute inset-0 bg-[rgb(var(--color-cream))]" />
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[rgb(var(--color-green))]/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-[rgb(var(--color-breezy))]/20 blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[rgb(var(--color-navy))]/5 blur-xl" />
        </div>
      )
    case 'geometric':
      return (
        <div className={baseClasses} role="img" aria-label={alt}>
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-linen))] to-white" />
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(30deg, rgb(var(--color-navy)) 12%, transparent 12.5%, transparent 87%, rgb(var(--color-navy)) 87.5%, rgb(var(--color-navy))), linear-gradient(150deg, rgb(var(--color-navy)) 12%, transparent 12.5%, transparent 87%, rgb(var(--color-navy)) 87.5%, rgb(var(--color-navy))), linear-gradient(30deg, rgb(var(--color-navy)) 12%, transparent 12.5%, transparent 87%, rgb(var(--color-navy)) 87.5%, rgb(var(--color-navy))), linear-gradient(150deg, rgb(var(--color-navy)) 12%, transparent 12.5%, transparent 87%, rgb(var(--color-navy)) 87.5%, rgb(var(--color-navy))), linear-gradient(60deg, rgba(114,162,59,0.3) 25%, transparent 25.5%, transparent 75%, rgba(114,162,59,0.3) 75%, rgba(114,162,59,0.3)), linear-gradient(60deg, rgba(114,162,59,0.3) 25%, transparent 25.5%, transparent 75%, rgba(114,162,59,0.3) 75%, rgba(114,162,59,0.3))', backgroundSize: '80px 140px', backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px' }} />
        </div>
      )
    case 'split':
      return (
        <div className={baseClasses} role="img" aria-label={alt}>
          <div className="absolute inset-0 bg-[rgb(var(--color-cream))]" />
          <div className="absolute inset-0 clip-diagonal bg-gradient-to-br from-[rgb(var(--color-navy))]/10 to-[rgb(var(--color-breezy))]/20" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 40% 100%)' }} />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[rgb(var(--color-green))]/15 to-transparent" />
        </div>
      )
    default:
      return (
        <div 
          className={`img-placeholder ${className || ''}`}
          role="img"
          aria-label={alt}
        />
      )
  }
}

// Actual image or placeholder
function HeroImage({ image, className, imageStyle = 'default' }: { image: HeroImage; className?: string; imageStyle?: string }) {
  // Use office image if placeholder is true or no src provided
  if (image.placeholder || !image.src) {
    return (
      <Image
        src={getRandomOfficeImage()}
        alt={image.alt}
        fill
        className={`object-cover ${className || ''}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    )
  }
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      className={`object-cover ${className || ''}`}
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
  image = { alt: 'Hero image', placeholder: true },
  imageStyle = 'default'
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
    sm: 'aspect-[3/2]',
    md: 'aspect-[3/2]',
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
                    <HeroImage image={image} imageStyle={imageStyle} />
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
              <HeroImage image={image} imageStyle={imageStyle} />
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
                  <HeroImage image={image} imageStyle={imageStyle} />
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
          sm: 'aspect-[3/2]',
          md: 'aspect-[3/2]',
          lg: 'aspect-[3/2]'
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
                    <HeroImage image={image} imageStyle={imageStyle} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )

      // ===== DEFAULT: Standard side-by-side =====
      default:
        const defaultImageAspect = {
          sm: 'aspect-[3/2]',
          md: 'aspect-[3/2]',
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
                    <HeroImage image={image} imageStyle={imageStyle} />
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
