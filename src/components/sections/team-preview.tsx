'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { getOfficeImageByIndex } from '@/lib/office-images'

/**
 * Team Preview - Cream background with overlapping navy block
 */
export function TeamPreview() {
  const { ref, isVisible } = useScrollAnimation()
  
  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-cream">
      <div ref={ref} className="container-site section-lg">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-0">
          
          {/* Left - Images with offset grid */}
          <div 
            className="relative lg:col-span-6"
            style={{ 
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)'
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
                  <Image
                    src={getOfficeImageByIndex(0)}
                    alt="Pathways Within office"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
                  <Image
                    src={getOfficeImageByIndex(1)}
                    alt="Pathways Within office"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="mt-12 space-y-4">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
                  <Image
                    src={getOfficeImageByIndex(2)}
                    alt="Pathways Within office"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
                  <Image
                    src={getOfficeImageByIndex(3)}
                    alt="Pathways Within office"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content with overlapping block effect */}
          <div 
            className="relative lg:col-span-6 lg:-ml-16"
            style={{ 
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              transitionDelay: '200ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)'
            }}
          >
            {/* Content block that overlaps images */}
            <div className="bg-gradient-navy p-10 lg:p-14">
              <p className="eyebrow mb-4">Our team</p>
              
              <h2 className="mb-6 text-white" style={{ fontWeight: 400, lineHeight: 1.2 }}>
                Experts in<br />
                therapy &<br />
                wellness
              </h2>
              
              <div className="mb-8 h-px w-16 bg-white/30" />
              
              <p className="mb-8 text-white/70" style={{ lineHeight: 1.8 }}>
                Our team brings decades of combined experience in mental health and 
                integrative wellness. Licensed therapists, certified practitioners, 
                and dedicated support staff — all committed to your care.
              </p>
              
              <div className="mb-10 flex items-center gap-6">
                <div>
                  <div className="text-3xl text-white" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 300 }}>25+</div>
                  <div className="text-xs uppercase tracking-wider text-white/50">Practitioners</div>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div>
                  <div className="text-3xl text-white" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 300 }}>5</div>
                  <div className="text-xs uppercase tracking-wider text-white/50">Locations</div>
                </div>
              </div>
              
              {/* Pill button */}
              <Link href="/team" className="btn-pill btn-pill-white">
                <span className="btn-text">Meet the team</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
