'use client'

import Link from 'next/link'
import { ArrowRight, Check, AlertCircle } from 'lucide-react'
import { useScrollAnimation } from '@/lib/use-scroll-animation'

interface ConditionAnimatedSectionsProps {
  condition: {
    name: string
    symptoms: Array<{ name: string; description: string }>
    causes: string[]
    prevalence: string
    treatments: Array<{ name: string; description: string; link: string }>
    selfCare: string[]
    whenToSeekHelp: string[]
  }
}

export function ConditionAnimatedSections({ condition }: ConditionAnimatedSectionsProps) {
  const symptomsAnimation = useScrollAnimation(0.1)
  const causesAnimation = useScrollAnimation(0.1)
  const treatmentsAnimation = useScrollAnimation(0.1)
  const selfCareAnimation = useScrollAnimation(0.1)

  return (
    <>
      {/* Symptoms */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div 
            ref={symptomsAnimation.ref}
            className={`mb-12 transition-all duration-700 ${
              symptomsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="eyebrow mb-4">Symptoms</p>
            <h2>Common signs and symptoms</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {condition.symptoms.map((symptom, index) => (
              <div 
                key={symptom.name} 
                className="group rounded-xl border border-[rgb(var(--border))]/50 p-6 transition-all duration-300 hover:border-[rgb(var(--color-green))]/50 hover:shadow-lg hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white hover:to-[rgb(var(--color-cream))]/30 cursor-default"
                style={{ 
                  transitionDelay: symptomsAnimation.isVisible ? `${index * 75}ms` : '0ms',
                  opacity: symptomsAnimation.isVisible ? 1 : 0,
                  transform: symptomsAnimation.isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <h3 className="mb-2 font-semibold text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]">
                  {symptom.name}
                </h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]">{symptom.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site section">
          <div 
            ref={causesAnimation.ref}
            className={`grid gap-12 lg:grid-cols-2 transition-all duration-700 ${
              causesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <p className="eyebrow mb-4">Causes</p>
              <h2 className="mb-8">What contributes to {condition.name.toLowerCase()}</h2>
              <ul className="space-y-4">
                {condition.causes.map((cause, index) => (
                  <li 
                    key={cause} 
                    className="group flex items-start gap-3 rounded-lg p-3 -ml-3 transition-all duration-300 hover:bg-white cursor-default"
                    style={{ 
                      transitionDelay: causesAnimation.isVisible ? `${index * 100}ms` : '0ms',
                      opacity: causesAnimation.isVisible ? 1 : 0,
                      transform: causesAnimation.isVisible ? 'translateX(0)' : 'translateX(-20px)'
                    }}
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10 transition-all duration-300 group-hover:bg-[rgb(var(--color-green))] group-hover:scale-110">
                      <Check className="h-3.5 w-3.5 text-[rgb(var(--color-green))] transition-colors group-hover:text-white" />
                    </span>
                    <span className="text-[rgb(var(--color-text-light))] transition-colors group-hover:text-[rgb(var(--color-navy))]">
                      {cause}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="group rounded-xl bg-white p-8 transition-all duration-300 hover:shadow-lg cursor-default">
              <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]">Prevalence</p>
              <p className="text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-navy))]" style={{ lineHeight: 1.8 }}>
                {condition.prevalence}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div 
            ref={treatmentsAnimation.ref}
            className={`mb-12 transition-all duration-700 ${
              treatmentsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="eyebrow mb-4">Treatment Options</p>
            <h2>How we can help</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {condition.treatments.map((treatment, index) => (
              <Link
                key={treatment.name}
                href={treatment.link}
                className="group relative overflow-hidden rounded-xl border border-[rgb(var(--border))]/50 bg-white p-6 transition-all duration-300 hover:border-[rgb(var(--color-green))] hover:shadow-xl hover:-translate-y-2"
                style={{ 
                  transitionDelay: treatmentsAnimation.isVisible ? `${index * 100}ms` : '0ms',
                  opacity: treatmentsAnimation.isVisible ? 1 : 0,
                  transform: treatmentsAnimation.isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-green))]/0 to-[rgb(var(--color-green))]/0 transition-all duration-300 group-hover:from-[rgb(var(--color-green))]/5 group-hover:to-[rgb(var(--color-breezy))]/5" />
                
                <div className="relative">
                  <h3 className="mb-2 font-semibold text-[rgb(var(--color-navy))] transition-colors duration-300 group-hover:text-[rgb(var(--color-green))]">
                    {treatment.name}
                  </h3>
                  <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]">{treatment.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--color-green))]">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Self care and when to seek help */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <div 
            ref={selfCareAnimation.ref}
            className={`grid gap-12 lg:grid-cols-2 transition-all duration-700 ${
              selfCareAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <p className="eyebrow mb-4">Self care</p>
              <h2 className="mb-8">What you can do</h2>
              <ul className="space-y-4">
                {condition.selfCare.map((tip, index) => (
                  <li 
                    key={tip} 
                    className="group flex items-start gap-3 rounded-lg p-3 -ml-3 transition-all duration-300 hover:bg-white cursor-default"
                    style={{ 
                      transitionDelay: selfCareAnimation.isVisible ? `${index * 100}ms` : '0ms',
                      opacity: selfCareAnimation.isVisible ? 1 : 0,
                      transform: selfCareAnimation.isVisible ? 'translateX(0)' : 'translateX(-20px)'
                    }}
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10 transition-all duration-300 group-hover:bg-[rgb(var(--color-green))] group-hover:scale-110">
                      <Check className="h-3.5 w-3.5 text-[rgb(var(--color-green))] transition-colors group-hover:text-white" />
                    </span>
                    <span className="text-[rgb(var(--color-text-light))] transition-colors group-hover:text-[rgb(var(--color-navy))]">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">When to Seek Help</p>
              <h2 className="mb-8">Signs you need support</h2>
              <ul className="space-y-4">
                {condition.whenToSeekHelp.map((sign, index) => (
                  <li 
                    key={sign} 
                    className="group flex items-start gap-3 rounded-lg p-3 -ml-3 transition-all duration-300 hover:bg-white cursor-default"
                    style={{ 
                      transitionDelay: selfCareAnimation.isVisible ? `${index * 100}ms` : '0ms',
                      opacity: selfCareAnimation.isVisible ? 1 : 0,
                      transform: selfCareAnimation.isVisible ? 'translateX(0)' : 'translateX(-20px)'
                    }}
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-breezy))]/20 transition-all duration-300 group-hover:bg-[rgb(var(--color-green))] group-hover:scale-110">
                      <AlertCircle className="h-3.5 w-3.5 text-[rgb(var(--color-navy))] transition-colors group-hover:text-white" />
                    </span>
                    <span className="text-[rgb(var(--color-text-light))] transition-colors group-hover:text-[rgb(var(--color-navy))]">
                      {sign}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
