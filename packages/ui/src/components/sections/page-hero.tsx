'use client'

import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { type SiteName, SITE_CONFIG } from '../../lib/site-config'

type ImageStyle = 'default' | 'gradient' | 'warm' | 'cool' | 'dark' | 'organic' | 'geometric' | 'split' | 'waves' | 'dots'

interface PageHeroProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  body?: string
  site?: SiteName
  imageStyle?: ImageStyle
}

/**
 * Image placeholder with varied visual styles
 */
function ImagePlaceholder({ style = 'default', className = '' }: { style?: ImageStyle; className?: string }) {
  const baseClasses = `relative overflow-hidden ${className}`
  
  switch (style) {
    case 'gradient':
      return (
        <div className={baseClasses}>
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-navy))] via-[rgb(var(--color-navy))]/80 to-[rgb(var(--color-green))]/60" />
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(114,162,59,0.5) 0%, transparent 50%)' }} />
          <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[rgb(var(--color-breezy))]/20 blur-2xl" />
        </div>
      )
    case 'warm':
      return (
        <div className={baseClasses}>
          <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(var(--color-linen))] via-[rgb(var(--color-cream))] to-[rgb(var(--color-linen))]/80" />
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(114,162,59,0.3) 0%, transparent 40%)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[rgb(var(--color-navy))]/10 to-transparent" />
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[rgb(var(--color-green))]/10 blur-xl" />
        </div>
      )
    case 'cool':
      return (
        <div className={baseClasses}>
          <div className="absolute inset-0 bg-gradient-to-bl from-[rgb(var(--color-breezy))]/40 via-[rgb(var(--color-breezy))]/20 to-white" />
          <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(134,168,225,0.5) 0%, transparent 50%)' }} />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[rgb(var(--color-green))]/15 to-transparent" />
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-white/50 blur-xl" />
        </div>
      )
    case 'dark':
      return (
        <div className={baseClasses}>
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-navy))] to-[rgb(var(--color-navy))]/90" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)' }} />
          <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-tr from-[rgb(var(--color-green))]/20 to-transparent" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[rgb(var(--color-breezy))]/10 blur-lg" />
        </div>
      )
    case 'organic':
      return (
        <div className={baseClasses}>
          <div className="absolute inset-0 bg-[rgb(var(--color-cream))]" />
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[rgb(var(--color-green))]/15 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-[rgb(var(--color-breezy))]/25 blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[rgb(var(--color-navy))]/5 blur-xl" />
        </div>
      )
    case 'geometric':
      return (
        <div className={baseClasses}>
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-linen))] to-white" />
          <div className="absolute inset-0 opacity-[0.08]" style={{ 
            backgroundImage: `
              linear-gradient(30deg, rgb(var(--color-navy)) 12%, transparent 12.5%, transparent 87%, rgb(var(--color-navy)) 87.5%),
              linear-gradient(150deg, rgb(var(--color-navy)) 12%, transparent 12.5%, transparent 87%, rgb(var(--color-navy)) 87.5%),
              linear-gradient(30deg, rgb(var(--color-navy)) 12%, transparent 12.5%, transparent 87%, rgb(var(--color-navy)) 87.5%),
              linear-gradient(150deg, rgb(var(--color-navy)) 12%, transparent 12.5%, transparent 87%, rgb(var(--color-navy)) 87.5%),
              linear-gradient(60deg, rgba(114,162,59,0.4) 25%, transparent 25.5%, transparent 75%, rgba(114,162,59,0.4) 75%),
              linear-gradient(60deg, rgba(114,162,59,0.4) 25%, transparent 25.5%, transparent 75%, rgba(114,162,59,0.4) 75%)
            `, 
            backgroundSize: '80px 140px', 
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px' 
          }} />
        </div>
      )
    case 'split':
      return (
        <div className={baseClasses}>
          <div className="absolute inset-0 bg-[rgb(var(--color-cream))]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-navy))]/10 to-[rgb(var(--color-breezy))]/20" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 40% 100%)' }} />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[rgb(var(--color-green))]/20 to-transparent" />
        </div>
      )
    case 'waves':
      return (
        <div className={baseClasses}>
          <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--color-breezy))]/20 to-[rgb(var(--color-cream))]" />
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(134,168,225,0.4) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 70% 60%, rgba(114,162,59,0.3) 0%, transparent 50%),
              radial-gradient(ellipse 70% 50% at 50% 80%, rgba(134,168,225,0.3) 0%, transparent 50%)
            `
          }} />
        </div>
      )
    case 'dots':
      return (
        <div className={baseClasses}>
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 opacity-[0.15]" style={{
            backgroundImage: 'radial-gradient(rgb(var(--color-navy)) 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px'
          }} />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-[rgb(var(--color-green))]/10 blur-2xl" />
          <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[rgb(var(--color-breezy))]/15 blur-xl" />
        </div>
      )
    default:
      return (
        <div className={`img-placeholder ${className}`} />
      )
  }
}

/**
 * Page Hero - Reusable hero for inner pages with varied image styles
 */
export function PageHero({ eyebrow, headline, subheadline, body, site = 'main', imageStyle = 'default' }: PageHeroProps) {
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
          
          {/* Right image placeholder with varied styles */}
          <div className="lg:col-span-6">
            <ImagePlaceholder style={imageStyle} className="aspect-[4/3] w-full rounded-lg lg:aspect-[3/2]" />
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
