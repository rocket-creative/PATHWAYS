'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/lib/use-scroll-animation'

interface CTASectionProps {
  eyebrow?: string
  headline?: string
  body?: string
  ctaText?: string
  ctaHref?: string
  image?: string
  imageAlt?: string
}

export function CTASection({
  eyebrow = 'Begin your journey',
  headline = 'Ready to explore what wellness means for you?',
  body = "Whether you're seeking therapy, wellness services, or both, we're here to help you find your path. Your first conversation is about understanding what you need.",
  ctaText = 'Schedule a session',
  ctaHref = '/contact',
  image = '/images/cta/cta-woman.jpg',
  imageAlt = 'Woman finding peace and wellness'
}: CTASectionProps) {
  const { ref, isVisible } = useScrollAnimation()
  
  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-cream">
      <div ref={ref} className="container-site section-lg">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-0">
          
          {/* Left - Content */}
          <div 
            className="lg:col-span-5"
            style={{ 
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)'
            }}
          >
            <p className="eyebrow mb-4">{eyebrow}</p>
            
            <h2 className="mb-6" style={{ lineHeight: 1.15 }}>
              {headline}
            </h2>
            
            <div className="mb-8 h-px w-16 bg-[rgb(var(--border))]" />
            
            <p className="mb-10 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              {body}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link href={ctaHref} className="btn-pill btn-pill-primary">
                <span className="btn-text">{ctaText}</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
              
              <a 
                href="tel:+16313713825" 
                className="text-sm text-[rgb(var(--color-text-light))] underline-offset-4 hover:underline"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
              >
                or call (631) 371-3825
              </a>
            </div>
          </div>
          
          {/* Right - Image */}
          <div 
            className="relative lg:col-span-6 lg:col-start-7"
            style={{ 
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              transitionDelay: '200ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)'
            }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[rgb(var(--color-placeholder))]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
