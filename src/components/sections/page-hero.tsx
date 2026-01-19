'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

/**
 * Page Hero - Reusable hero for inner pages with image placeholder
 */

interface PageHeroProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  body?: string
}

export function PageHero({ eyebrow, headline, subheadline, body }: PageHeroProps) {
  const scrollToContent = () => {
    const main = document.querySelector('main')
    if (main) {
      const firstSection = main.querySelector('section:nth-child(2)')
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="relative bg-white">
      <div className="container-site">
        {/* Logo - Left justified hero feature, links to home */}
        <div className="pt-12 lg:pt-16">
          <Link href="/">
            <Image 
              src="/pathways-logo.png" 
              alt="Pathways Within - Home" 
              width={280}
              height={280}
              className="w-[200px] transition-opacity hover:opacity-80 lg:w-[280px]"
              priority
            />
          </Link>
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
          
          {/* Right image placeholder */}
          <div className="lg:col-span-6">
            <div className="img-placeholder aspect-[4/3] w-full lg:aspect-[3/2]" />
          </div>
        </div>
        
        {/* Scroll indicator */}
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
