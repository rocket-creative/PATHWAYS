'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowDown } from 'lucide-react'

interface HeroSectionProps {
  image?: string
  imageAlt?: string
}

export function HeroSection({ 
  image = '/images/hero/freepik__4-diverse-happy-people-standing-together-on-right-__69755.jpeg',
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
      {/* Background Image - right justified */}
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

      {/* Content Overlay */}
      <div className="relative flex min-h-[85vh]">
        {/* Left - Content with white background (~40%) */}
        <div className="flex w-full flex-col justify-center bg-white px-6 py-12 sm:px-8 lg:w-[40%] lg:px-12 xl:px-16">
          <Link href="/" className="mb-10 block lg:mb-14">
            <Image 
              src="/logo.png" 
              alt="Pathways Within - Home" 
              width={280}
              height={100}
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
        
        {/* Right - Image area with overlapping content block (~60%) */}
        <div className="relative hidden lg:block lg:w-[60%]">
          {/* Overlapping content block - sits on image */}
          <div className="absolute bottom-24 left-0 w-96 bg-gradient-navy p-10 transition-transform duration-300 ease-out hover:-translate-y-2">
            <h3 className="mb-4 text-white" style={{ fontWeight: 400 }}>
              Therapy & Wellness
            </h3>
            <p className="mb-6 text-sm text-white/70" style={{ lineHeight: 1.7 }}>
              Individual therapy, couples counseling, massage, 
              acupuncture, skincare, and more — all under one roof.
            </p>
            <Link 
              href="/wisdom/services" 
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white transition-all hover:gap-3"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
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
