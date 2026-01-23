'use client'

import Image from 'next/image'
import { Heart, Users, MapPin, Shield } from 'lucide-react'
import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { getHeroImageByIndex } from '@/lib/hero-images'

/**
 * Why Pathways - Linen background with scroll animation
 */
export function WhyPathways() {
  const { ref, isVisible } = useScrollAnimation()
  
  const features = [
    { icon: Heart, title: 'Integrated care', description: 'Therapy and wellness services work together, not separately.' },
    { icon: Users, title: 'Expert team', description: 'Licensed clinicians and certified wellness practitioners.' },
    { icon: MapPin, title: 'Five locations', description: 'Convenient offices across Long Island plus telehealth.' },
    { icon: Shield, title: 'Insurance accepted', description: 'We work with most major insurance plans.' },
  ]

  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-linen">
      <div ref={ref} className="container-site section">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div 
            className="relative order-2 lg:order-1"
            style={{ 
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)'
            }}
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden">
              <Image
                src={"/placeholder-grey.svg"}
                alt="Pathways Within community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-[rgb(var(--color-green))] lg:-right-12 lg:h-48 lg:w-48" />
          </div>
          
          {/* Content */}
          <div 
            className="order-1 lg:order-2 lg:pl-8"
            style={{ 
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              transitionDelay: '150ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)'
            }}
          >
            <p className="eyebrow mb-4">Why Pathways Within</p>
            <h2 className="text-balance">
              One path, many routes to wellness
            </h2>
            <div className="divider my-6" />
            <p className="mb-10 max-w-md text-muted">
              Like the labyrinth in our logo, there is one entry point with many 
              personalized routes. Whatever path you choose, you receive care 
              that honors your whole person.
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="flex gap-4"
                  style={{ 
                    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                    transitionDelay: `${300 + index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(15px)'
                  }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-navy))]">
                    <feature.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
