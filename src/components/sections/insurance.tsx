'use client'

import { Check, Phone, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/lib/use-scroll-animation'

/**
 * Insurance Section - Linen background with scroll animation
 */
export function InsuranceSection() {
  const { ref, isVisible } = useScrollAnimation()
  
  const providers = [
    'Aetna',
    'Blue Cross Blue Shield',
    'Cigna',
    'United Healthcare',
    'Oxford',
    'Oscar Health',
  ]

  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-linen">
      <div ref={ref} className="container-site section">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Content */}
          <div
            style={{ 
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            <p className="eyebrow mb-4">Insurance</p>
            <h2 className="text-balance">
              We work with most major plans
            </h2>
            <div className="divider my-6" />
            <p className="mb-8 max-w-md text-muted">
              We accept most insurance plans and can help verify your benefits. 
              Self pay options are also available.
            </p>
            
            <a href="tel:+16313713825" className="btn-pill btn-pill-secondary">
              <Phone className="h-4 w-4" />
              <span className="btn-text">Verify your benefits</span>
              <span className="btn-arrow">
                <ArrowRight />
              </span>
            </a>
          </div>
          
          {/* Provider grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {providers.map((provider, index) => (
              <div 
                key={provider}
                className="flex items-center gap-3 border border-[rgb(var(--border))] bg-white px-4 py-3"
                style={{ 
                  transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
                  transitionDelay: `${index * 80}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(15px)'
                }}
              >
                <Check className="h-4 w-4 flex-shrink-0 text-[rgb(var(--color-green))]" strokeWidth={2} />
                <span className="whitespace-nowrap text-sm">{provider}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
