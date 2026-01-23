'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { getHeroImageByIndex } from '@/lib/hero-images'

/**
 * Hero Section - Editorial asymmetric layout with single tall image
 */
export function HeroSection() {
  const scrollToNext = () => {
    const sections = document.querySelectorAll('section')
    if (sections[1]) {
      sections[1].scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-site">
        {/* Main hero grid - magazine editorial layout */}
        <div className="grid min-h-[90vh] items-center gap-12 py-20 lg:grid-cols-12 lg:gap-20 lg:py-28">
          
          {/* Left content - magazine style */}
          <div className="relative z-10 lg:col-span-6">
            {/* Logo - links to home */}
            <Link href="/">
              <Image 
                src="/pathways-logo.png" 
                alt="Pathways Within - Home" 
                width={350}
                height={350}
                className="mb-8 w-[350px] transition-opacity hover:opacity-80"
                priority
              />
            </Link>
            
            <h1 className="mb-8 text-[rgb(var(--color-navy))]">
              Discover your path to wellness
            </h1>
            
            <p className="mb-12 max-w-lg text-xl text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.6, letterSpacing: '-0.01em' }}>
              Since 2018, Pathways Within has offered integrated therapy and 
              wellness services across Long Island. Mind, body, and spirit — 
              we believe true healing honors the whole person.
            </p>
            
            {/* Buttons with animated arrows */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/services" className="btn-pill btn-pill-primary">
                <span className="btn-text">Explore services</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
              
              <Link href="/contact" className="btn-pill btn-pill-secondary">
                <span className="btn-text">Book a session</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          </div>
          
          {/* Right image area - full height */}
          <div className="relative lg:col-span-6 lg:h-full">
            {/* Main hero image - full vertical height */}
            <div className="relative h-full w-full overflow-hidden lg:absolute lg:inset-0">
              <Image
                src="/placeholder-grey.svg"
                alt="Pathways Within community"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Magazine-style text overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 lg:p-12">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/60" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}>
                Mind • Body • Spirit
              </p>
              <h3 className="mb-3 text-2xl text-white lg:text-3xl" style={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
                Therapy & Wellness
              </h3>
              <p className="max-w-md text-sm text-white/80" style={{ lineHeight: 1.6 }}>
                Individual therapy, couples counseling, massage, 
                acupuncture, skincare, and more.
              </p>
            </div>
          </div>
        </div>
        
        {/* Interactive scroll indicator - positioned lower */}
        <button 
          onClick={scrollToNext}
          className="scroll-indicator absolute -bottom-4 left-1/2 hidden -translate-x-1/2 pb-8 lg:flex"
          aria-label="Scroll to next section"
        >
          <span>View more</span>
          <ArrowDown className="h-4 w-4 text-[rgb(var(--color-text-light))]" />
        </button>
      </div>
    </section>
  )
}
