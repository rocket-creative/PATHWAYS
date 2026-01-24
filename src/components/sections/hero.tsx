'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowDown } from 'lucide-react'

interface HeroSectionProps {
  image?: string
  imageAlt?: string
}

export function HeroSection({ 
  image = '/images/hero/hero-original-4-people.jpeg',
  imageAlt = 'Diverse group of four people representing Pathways Within community'
}: HeroSectionProps) {
  const scrollToNext = () => {
    const sections = document.querySelectorAll('section')
    if (sections[1]) {
      sections[1].scrollIntoView({ behavior: 'smooth' })
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
        <div className="w-full px-6 py-12 sm:px-8 lg:max-w-[58%] lg:px-12 xl:px-16">
          {/* Content box with glass effect */}
          <div className="rounded-lg bg-white/50 p-8 shadow-2xl backdrop-blur-xl lg:p-12">
            <Link href="/" className="mb-8 block lg:mb-10">
              <Image 
                src="/logo.png" 
                alt="Pathways Within - Home" 
                width={280}
                height={100}
                className="w-[180px] transition-opacity hover:opacity-80 lg:w-[240px]"
              />
            </Link>
            
            <h1 className="mb-6 text-[rgb(var(--color-navy))]" style={{ lineHeight: 1.1, fontWeight: 300 }}>
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
              <Link href="/wisdom/services" className="btn-pill btn-pill-primary">
                <span className="btn-text">Explore therapy</span>
                <span className="btn-arrow"><ArrowRight aria-hidden="true" /></span>
              </Link>
              <Link href="/wellness/services" className="btn-pill btn-pill-secondary">
                <span className="btn-text">Explore wellness</span>
                <span className="btn-arrow"><ArrowRight aria-hidden="true" /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - centered */}
      <button 
        onClick={scrollToNext}
        className="scroll-indicator absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex"
        aria-label="Scroll to next section"
      >
        <span>View more</span>
        <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </button>
    </section>
  )
}
