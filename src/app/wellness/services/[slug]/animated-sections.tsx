'use client'

import Link from 'next/link'
import { ArrowRight, Check, Clock, MapPin, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '@/lib/use-scroll-animation'

interface ServiceAnimatedSectionsProps {
  service: {
    name: string
    benefits: string[]
    whatToExpect: string[]
    duration: string
    relatedServices: string[]
  }
  relatedServicesData: Array<{
    slug: string
    name: string
    headline: string
  }>
}

export function ServiceAnimatedSections({ service, relatedServicesData }: ServiceAnimatedSectionsProps) {
  const benefitsAnimation = useScrollAnimation(0.1)
  const expectAnimation = useScrollAnimation(0.1)
  const relatedAnimation = useScrollAnimation(0.1)

  return (
    <>
      {/* Benefits */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div 
            ref={benefitsAnimation.ref}
            className={`grid gap-16 lg:grid-cols-2 transition-all duration-700 ${
              benefitsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <p className="eyebrow mb-4">Benefits</p>
              <h2 className="mb-8">How this service helps</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li 
                    key={benefit} 
                    className="group flex items-start gap-3 rounded-lg p-3 -ml-3 transition-all duration-300 hover:bg-[rgb(var(--color-cream))] cursor-default"
                    style={{ 
                      transitionDelay: benefitsAnimation.isVisible ? `${index * 100}ms` : '0ms',
                      opacity: benefitsAnimation.isVisible ? 1 : 0,
                      transform: benefitsAnimation.isVisible ? 'translateX(0)' : 'translateX(-20px)'
                    }}
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10 transition-all duration-300 group-hover:bg-[rgb(var(--color-green))] group-hover:scale-110">
                      <Check className="h-3.5 w-3.5 text-[rgb(var(--color-green))] transition-colors group-hover:text-white" />
                    </span>
                    <span className="text-[rgb(var(--color-text-light))] transition-colors group-hover:text-[rgb(var(--color-navy))]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[rgb(var(--color-green))]/5 via-[rgb(var(--color-breezy))]/10 to-[rgb(var(--color-cream))] p-8 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="mx-auto h-12 w-12 text-[rgb(var(--color-green))]/40 mb-4" />
                  <p className="text-[rgb(var(--color-navy))]/60 text-sm">Experience the transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site section">
          <div 
            ref={expectAnimation.ref}
            className={`mb-12 transition-all duration-700 ${
              expectAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="eyebrow mb-4">What to expect</p>
            <h2>Your experience with us</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.whatToExpect.map((step, index) => (
              <div 
                key={step} 
                className="group rounded-xl bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white hover:to-[rgb(var(--color-cream))]/50 cursor-default"
                style={{ 
                  transitionDelay: expectAnimation.isVisible ? `${index * 100}ms` : '0ms',
                  opacity: expectAnimation.isVisible ? 1 : 0,
                  transform: expectAnimation.isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10 text-sm font-semibold text-[rgb(var(--color-green))] transition-all duration-300 group-hover:bg-[rgb(var(--color-green))] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[rgb(var(--color-green))]/20">
                  {index + 1}
                </span>
                <p className="font-semibold text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Info */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section-sm">
          <div className="flex flex-col items-center justify-center gap-8 text-center sm:flex-row sm:text-left">
            <div className="group flex items-center gap-3 rounded-xl p-4 transition-all duration-300 hover:bg-[rgb(var(--color-cream))] cursor-default">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10 transition-all duration-300 group-hover:bg-[rgb(var(--color-green))] group-hover:scale-110">
                <Clock className="h-5 w-5 text-[rgb(var(--color-green))] transition-colors group-hover:text-white" />
              </span>
              <div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">Treatment time</p>
                <p className="font-semibold text-[rgb(var(--color-navy))]">{service.duration}</p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-[rgb(var(--border))] sm:block" />
            <div className="group flex items-center gap-3 rounded-xl p-4 transition-all duration-300 hover:bg-[rgb(var(--color-cream))] cursor-default">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10 transition-all duration-300 group-hover:bg-[rgb(var(--color-green))] group-hover:scale-110">
                <MapPin className="h-5 w-5 text-[rgb(var(--color-green))] transition-colors group-hover:text-white" />
              </span>
              <div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">Available at</p>
                <p className="font-semibold text-[rgb(var(--color-navy))]">Select locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServicesData.length > 0 && (
        <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
          <div className="container-site section">
            <h2 
              ref={relatedAnimation.ref}
              className={`mb-8 text-center transition-all duration-700 ${
                relatedAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Related services
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServicesData.map((related, index) => (
                <Link
                  key={related.slug}
                  href={`/wellness/services/${related.slug}`}
                  className="group relative overflow-hidden rounded-xl bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  style={{ 
                    transitionDelay: relatedAnimation.isVisible ? `${index * 100}ms` : '0ms',
                    opacity: relatedAnimation.isVisible ? 1 : 0,
                    transform: relatedAnimation.isVisible ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-green))]/0 to-[rgb(var(--color-green))]/0 transition-all duration-300 group-hover:from-[rgb(var(--color-green))]/5 group-hover:to-[rgb(var(--color-breezy))]/5" />
                  
                  <div className="relative">
                    <h3 className="mb-2 font-semibold text-[rgb(var(--color-navy))] transition-colors duration-300 group-hover:text-[rgb(var(--color-green))]">
                      {related.name}
                    </h3>
                    <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]">{related.headline}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--color-green))]">
                      Learn more 
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
