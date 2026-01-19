'use client'

import { ClipboardList, Sparkles, Users } from 'lucide-react'
import { useScrollAnimation } from '../../lib/use-scroll-animation'

/**
 * Approach Section - Cream background with scroll animation
 */
export function ApproachSection() {
  const { ref, isVisible } = useScrollAnimation()
  
  const steps = [
    { 
      icon: ClipboardList,
      num: '01', 
      title: 'Comprehensive intake', 
      desc: 'Understanding the full picture of your wellness journey.' 
    },
    { 
      icon: Sparkles,
      num: '02', 
      title: 'Personalized plan', 
      desc: 'Therapy, somatic support, or wellness services tailored to you.' 
    },
    { 
      icon: Users,
      num: '03', 
      title: 'Coordinated care', 
      desc: 'Your care team works together for ongoing support.' 
    },
  ]

  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-cream">
      <div 
        ref={ref}
        className={`container-site section ${isVisible ? '' : 'opacity-0'}`}
        style={{ 
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
        }}
      >
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Our approach</p>
            <h2 className="text-balance">
              A 360 degree approach to healing
            </h2>
            <div className="divider my-6" />
          </div>
          
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="lead mb-12">
              We look at both your mental and physical well being. During your intake, 
              we explore what brings you in, how it affects your sleep, stress, energy, 
              and relationships.
            </p>
            
            <div className="grid gap-8 sm:grid-cols-3">
              {steps.map((item, index) => (
                <div 
                  key={item.num}
                  style={{ 
                    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                    transitionDelay: `${index * 150}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[rgb(var(--color-green))]">
                    <item.icon className="h-5 w-5 text-[rgb(var(--color-green))]" strokeWidth={1.5} />
                  </div>
                  <span 
                    className="text-sm text-[rgb(var(--color-green))]"
                    style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
                  >
                    Step {item.num}
                  </span>
                  <h4 className="mb-2 mt-1">{item.title}</h4>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
