'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  eyebrow?: string
  headline?: string
  body?: string
  ctaText?: string
  ctaHref?: string
}

export function CTASection({
  eyebrow = 'Begin your journey',
  headline = 'Ready to explore what wellness means for you?',
  body = "Whether you're seeking therapy, wellness services, or both, we're here to help you find your path. Your first conversation is about understanding what you need.",
  ctaText = 'Schedule a session',
  ctaHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-cream">
      <div className="container-site section-lg">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-0">
          
          {/* Left — Content */}
          <div className="animate-fade-left lg:col-span-5">
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
          
          {/* Right — Photo placeholder (landscape, 4:3, models from 3/8 shoot) */}
          <div className="animate-fade-right relative lg:col-span-6 lg:col-start-7" style={{ animationDelay: '180ms' }}>
            <div className="aspect-[4/3] w-full border border-[rgb(var(--border))]/60 bg-[rgb(var(--color-placeholder))] flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="h-10 w-10 text-[rgb(var(--color-text-light))]/30" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="4" y="4" width="40" height="40" rx="2" />
                <circle cx="18" cy="18" r="5" />
                <path d="M4 34l10-10 8 8 6-6 16 16" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
