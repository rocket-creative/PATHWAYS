'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight, Video } from 'lucide-react'
import { useScrollAnimation } from '@/lib/use-scroll-animation'

/**
 * Locations Preview - White background with scroll animation
 */
export function LocationsPreview() {
  const { ref, isVisible } = useScrollAnimation()
  
  const locations = [
    { name: 'Garden City', address: '666 Old Country Road, Suite 501' },
    { name: 'Port Jefferson', address: '101 E Broadway, Suite A203' },
    { name: 'Massapequa', address: '60 Carmans Road, Suite C' },
    { name: 'Smithtown', address: '212 E. Main Street, Suite 402' },
    { name: 'Rockville Centre', address: '4 North Village Avenue' },
  ]

  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-white">
      <div ref={ref} className="container-site section-lg">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-0">
          
          {/* Left - Office image */}
          <div 
            className="relative lg:col-span-6"
            style={{ 
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)'
            }}
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden lg:aspect-[3/2]">
              <Image
                src="/offices/massapequa.jpg"
                alt="Pathways Within office location"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Telehealth badge - overlapping */}
            <div className="absolute -bottom-4 right-4 flex items-center gap-2 bg-white px-4 py-3 shadow-sm lg:-right-8 lg:bottom-8">
              <Video className="h-4 w-4 text-[rgb(var(--color-green))]" strokeWidth={1.5} />
              <span 
                className="text-xs uppercase tracking-widest text-[rgb(var(--color-navy))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                Telehealth available
              </span>
            </div>
          </div>
          
          {/* Right - Content */}
          <div 
            className="lg:col-span-5 lg:col-start-8"
            style={{ 
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              transitionDelay: '150ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)'
            }}
          >
            <p className="eyebrow mb-4">Locations</p>
            
            <h2 className="mb-6" style={{ lineHeight: 1.15 }}>
              Five locations<br />
              across<br />
              Long Island
            </h2>
            
            <div className="mb-8 h-px w-16 bg-[rgb(var(--border))]" />
            
            {/* Location list */}
            <div className="mb-10 space-y-4">
              {locations.map((location, index) => (
                <div 
                  key={location.name}
                  className="flex items-start gap-3"
                  style={{ 
                    transition: 'opacity 0.4s ease-out',
                    transitionDelay: `${300 + index * 80}ms`,
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[rgb(var(--color-green))]" strokeWidth={1.5} />
                  <div>
                    <div 
                      className="text-sm text-[rgb(var(--color-navy))]"
                      style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
                    >
                      {location.name}
                    </div>
                    <div className="text-xs text-[rgb(var(--color-text-light))]">
                      {location.address}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <Link href="/locations" className="btn-pill btn-pill-primary">
              <span className="btn-text">Get directions</span>
              <span className="btn-arrow">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
