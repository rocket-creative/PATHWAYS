'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { getRandomOfficeImage } from '@/lib/office-images'

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
        {/* Main hero grid - asymmetric */}
        <div className="grid min-h-[85vh] items-start gap-8 pt-4 pb-16 lg:grid-cols-12 lg:gap-0 lg:pt-6 lg:pb-0">
          
          {/* Left content - spans 5 cols */}
          <div className="relative z-10 lg:col-span-5 lg:pt-8 lg:pb-24">
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
            
            <h1 className="mb-8 text-[rgb(var(--color-navy))]" style={{ lineHeight: 1.1 }}>
              Discover<br />
              your path<br />
              to wellness
            </h1>
            
            <p className="mb-10 max-w-md text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
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
          
          {/* Right image area - spans 7 cols, single tall image */}
          <div className="relative lg:col-span-7 lg:-mr-10">
            {/* Main tall image */}
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-2xl lg:aspect-[3/2]">
              <Image
                src={getRandomOfficeImage()}
                alt="Pathways Within office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
            </div>
            
            {/* Overlapping content block - sits on image */}
            <div className="absolute -bottom-8 left-0 right-8 bg-gradient-navy p-8 transition-transform duration-300 ease-out hover:-translate-y-2 hover:translate-x-1 lg:-left-16 lg:bottom-24 lg:right-auto lg:w-96 lg:p-12">
              <h3 className="mb-4 text-white" style={{ fontWeight: 400 }}>
                Therapy & Wellness
              </h3>
              <p className="mb-6 text-sm text-white/70" style={{ lineHeight: 1.7 }}>
                Individual therapy, couples counseling, massage, 
                acupuncture, skincare, and more — all under one roof.
              </p>
              <Link 
                href="/services" 
                className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white transition-all hover:gap-3"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
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
