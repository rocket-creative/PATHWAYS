'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../lib/use-scroll-animation'
import { SITE_CONFIG, type SiteName } from '../../lib/site-config'

interface TeamPreviewProps {
  site?: SiteName
}

/**
 * Team Preview - Cream background with overlapping navy block
 */
export function TeamPreview({ site = 'main' }: TeamPreviewProps) {
  const { ref, isVisible } = useScrollAnimation()
  const teamUrl = site === 'main' ? '/team' : `${SITE_CONFIG.main.url}/team`
  
  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-cream">
      <div ref={ref} className="container-site section-lg">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-0">
          
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
                <div className="img-placeholder aspect-[3/4]" />
                <div className="img-placeholder aspect-square" />
              </div>
              <div className="mt-12 space-y-4">
                <div className="img-placeholder aspect-square" />
                <div className="img-placeholder aspect-[3/4]" />
              </div>
            </div>
          </div>

          <div 
            className="relative lg:col-span-6 lg:-ml-16"
            style={{ 
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              transitionDelay: '200ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)'
            }}
          >
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
              
              {site === 'main' ? (
                <Link href="/team" className="btn-pill btn-pill-white">
                  <span className="btn-text">Meet the team</span>
                  <span className="btn-arrow"><ArrowRight /></span>
                </Link>
              ) : (
                <a href={teamUrl} className="btn-pill btn-pill-white">
                  <span className="btn-text">Meet the team</span>
                  <span className="btn-arrow"><ArrowRight /></span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
