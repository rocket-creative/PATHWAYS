'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/lib/use-scroll-animation'

const faqs = [
  {
    question: 'Do you take insurance?',
    answer: 'Yes, we are in network for most major insurance providers in New York including Aetna, Cigna, UHC, Oxford, Oscar, and many more. We also offer sliding scale options for those paying out of pocket.',
  },
  {
    question: 'Do you offer virtual visits?',
    answer: 'Yes! We offer telehealth therapy to clients in New York, New Jersey, North Carolina, and Florida. Our platform is HIPAA compliant and completely secure.',
  },
  {
    question: 'How do therapy and wellness work together?',
    answer: 'Our 360 degree approach integrates therapeutic care with restorative wellness services. We believe true healing happens when the mind and body are supported together.',
  },
  {
    question: 'How long are sessions?',
    answer: 'Therapy sessions are one full hour. Wellness service durations vary—massage and acupuncture are typically 60-90 minutes, while other treatments may be shorter.',
  },
]

/**
 * FAQ Preview Section - White background with accordion
 */
export function FAQPreview() {
  const { ref, isVisible } = useScrollAnimation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-white">
      <div ref={ref} className="container-site section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left - Header */}
          <div 
            className="lg:col-span-4"
            style={{ 
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-balance" style={{ lineHeight: 1.15 }}>
              Common<br />questions
            </h2>
            <div className="divider my-6" />
            <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              Have more questions? We&apos;re always happy to help.
            </p>
            
            <Link href="/faq" className="btn-pill btn-pill-secondary">
              <span className="btn-text">View all FAQs</span>
              <span className="btn-arrow">
                <ArrowRight />
              </span>
            </Link>
          </div>
          
          {/* Right - Accordion */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="divide-y divide-[rgb(var(--border))]">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  style={{ 
                    transition: 'opacity 0.5s ease-out',
                    transitionDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center justify-between py-6 text-left"
                    aria-expanded={openIndex === index}
                  >
                    <h4 className="pr-4 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>
                      {faq.question}
                    </h4>
                    <ChevronDown 
                      className={`h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))] transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-48 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                      {faq.answer}
                    </p>
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
