'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Brain, Hand, Leaf } from 'lucide-react'
import { useScrollAnimation } from '../../lib/use-scroll-animation'
import { SITE_CONFIG, type SiteName } from '../../lib/site-config'

interface ServicesOverviewProps {
  site?: SiteName
}

/**
 * Services Overview - White background with scroll animation
 */
export function ServicesOverview({ site = 'main' }: ServicesOverviewProps) {
  const { ref, isVisible } = useScrollAnimation()
  
  const wisdomUrl = SITE_CONFIG.wisdom.url
  const wellnessUrl = SITE_CONFIG.wellness.url
  
  const services = [
    {
      icon: Brain,
      title: 'Therapy',
      description: 'Individual, couples, child, teen, trauma, and EMDR therapy with experienced clinicians.',
      href: site === 'main' ? '/services#therapy' : `${wisdomUrl}/services`,
    },
    {
      icon: Hand,
      title: 'Somatic & body work',
      description: 'Massage, acupuncture, and energy work to support your physical and emotional healing.',
      href: site === 'main' ? '/services#somatic' : `${wellnessUrl}/services`,
    },
    {
      icon: Leaf,
      title: 'Wellness',
      description: 'Skincare, IV therapy, and restorative treatments for complete well being.',
      href: site === 'main' ? '/services#wellness' : `${wellnessUrl}/services`,
    },
  ]

  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-white">
      <div ref={ref} className="container-site section-lg">
        <div 
          className="mb-16 grid gap-12 lg:grid-cols-12 lg:items-end"
          style={{ 
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Services</p>
            <h2 className="text-balance" style={{ lineHeight: 1.15 }}>
              Your<br />personalized<br />path to<br />wellness
            </h2>
          </div>
          
          <div className="lg:col-span-4 lg:col-start-7">
            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              Whatever brings you in, we meet you where you are and create a journey 
              that honors your whole self. Therapy, bodywork, or wellness — often a 
              combination works best.
            </p>
          </div>
          
          <div className="hidden lg:col-span-2 lg:col-start-11 lg:block">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image 
                src="/hero-images/freepik__professional-studio-photograph-of-subject-descript__19259.jpeg" 
                alt="Wellness services" 
                fill 
                className="object-cover" 
                sizes="200px" 
              />
            </div>
          </div>
        </div>

        <div className="grid gap-px bg-[rgb(var(--border))] lg:grid-cols-3">
          {services.map((service, index) => {
            const isExternal = service.href.startsWith('http')
            const LinkComp = isExternal ? 'a' : Link
            
            return (
              <LinkComp 
                key={service.title}
                href={service.href}
                className="group bg-[rgb(var(--color-cream))] p-8 transition-all hover:bg-[rgb(var(--color-linen))] lg:p-10"
                style={{ 
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, background-color 0.3s',
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgb(var(--color-navy))]/20 transition-colors group-hover:border-[rgb(var(--color-navy))] group-hover:bg-[rgb(var(--color-navy))]">
                    <service.icon className="h-5 w-5 text-[rgb(var(--color-navy))] transition-colors group-hover:text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs text-[rgb(var(--color-text-light))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}>
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="mb-3">{service.title}</h3>
                <p className="mb-8 text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                  {service.description}
                </p>
                
                <div className="flex items-center gap-3">
                  <span className="text-sm uppercase tracking-widest text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>
                    Explore
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgb(var(--color-linen))] transition-all group-hover:bg-[rgb(var(--color-navy))]">
                    <ArrowRight className="h-4 w-4 -translate-x-0.5 text-[rgb(var(--color-navy))] transition-all group-hover:translate-x-0.5 group-hover:text-white" />
                  </span>
                </div>
              </LinkComp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
