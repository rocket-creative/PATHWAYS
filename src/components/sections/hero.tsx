'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowDown } from 'lucide-react'

interface HeroSectionProps {
  /** Hero image path */
  image?: string
  /** Alt text for image */
  imageAlt?: string
}

/**
 * Hero Section - 1/3 content + 2/3 image layout for homepage
 */
export function HeroSection({ 
  image = '/hero-images/freepik__professional-studio-photograph-of-4-diverse-smilin__19260.jpeg',
  imageAlt = 'Diverse group of smiling people'
}: HeroSectionProps) {
  const scrollToNext = () => {
    const sections = document.querySelectorAll('section')
    if (sections[1]) {
      sections[1].scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[85vh]">
      <div className="grid min-h-[85vh] lg:grid-cols-5">
        {/* Left ~40% - Content */}
        <div className="relative z-10 flex flex-col justify-center bg-white px-6 py-12 sm:px-8 lg:col-span-2 lg:px-12 lg:py-20 xl:px-16">
          <Link href="/" className="mb-10 block lg:mb-14">
            <img 
              src="/pathways-logo.png" 
              alt="Pathways Within - Home" 
              className="w-[200px] transition-opacity hover:opacity-80 lg:w-[280px]"
            />
          </Link>
          
          <h1 className="mb-6 text-[rgb(var(--color-navy))]" style={{ lineHeight: 1.1 }}>
            Discover<br />
            your path<br />
            to wellness
          </h1>
          
          <p 
            className="mb-8 max-w-md text-lg text-[rgb(var(--color-text-light))]" 
            style={{ lineHeight: 1.7 }}
          >
            Since 2018, Pathways Within has offered integrated therapy and 
            wellness services across Long Island. Mind, body, and spirit — 
            we believe true healing honors the whole person.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/services" className="btn-pill btn-pill-primary">
              <span className="btn-text">Explore services</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
            <Link href="/contact" className="btn-pill btn-pill-secondary">
              <span className="btn-text">Book a session</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
        
        {/* Right ~60% - Full Image */}
        <div className="relative order-first min-h-[300px] lg:order-last lg:col-span-3">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sm text-[rgb(var(--color-text-light))] transition-colors hover:text-[rgb(var(--color-navy))] lg:flex"
        aria-label="Scroll to next section"
      >
        <span className="text-xs uppercase tracking-wider">View more</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  )
}
