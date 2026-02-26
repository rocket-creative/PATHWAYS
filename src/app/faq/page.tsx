'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Phone, MessageCircle, AlertTriangle } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { ResourcesSection } from '@/components/sections/resources-section'
import { faqCategories } from '@/data/faq'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-[rgb(var(--border))]/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="pr-8 font-semibold text-[rgb(var(--color-navy))]">
          {question}
        </span>
        <ChevronDown 
          className={`h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))] transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('About the Collaborative')

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        headline="Frequently Asked Questions"
        body="Here are some of the most common things people ask us. If you are curious about anything else, just reach out — we are always happy to help."
        ctaText="CONTACT US"
        ctaHref="/contact"
      />

      {/* FAQ Content */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-16">
            {/* Category Navigation */}
            <div className="lg:col-span-1">
              <nav className="sticky top-32">
                <p className="eyebrow mb-4">Categories</p>
                <ul className="space-y-2">
                  {faqCategories.map((category) => (
                    <li key={category.name}>
                      <button
                        onClick={() => setActiveCategory(category.name)}
                        className={`w-full rounded-lg px-4 py-3 text-left transition-colors ${
                          activeCategory === category.name
                            ? 'bg-[rgb(var(--color-green))]/10 font-semibold text-[rgb(var(--color-green))]'
                            : 'font-normal text-[rgb(var(--color-text-light))] hover:bg-[rgb(var(--color-linen))]'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Questions */}
            <div className="lg:col-span-3">
              {faqCategories
                .filter((cat) => cat.name === activeCategory)
                .map((category) => (
                  <div key={category.name}>
                    <h2 className="mb-8 text-[rgb(var(--color-navy))]">{category.name} Questions</h2>
                    <div>
                      {category.questions.map((item, idx) => (
                        <FAQItem key={idx} question={item.q} answer={item.a} />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <ResourcesSection />

      {/* Crisis Resources */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-[rgb(var(--color-green))]" />
              <p className="eyebrow">Crisis Resources</p>
            </div>
            
            <h2 className="mb-6 text-[rgb(var(--color-navy))]">Need immediate help?</h2>
            <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              If you are experiencing suicidal thoughts or feel at risk of harm, please seek help immediately.
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[rgb(var(--color-green))]" />
                  <p className="font-semibold text-[rgb(var(--color-navy))]">988 Suicide & Crisis Lifeline</p>
                </div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  Call, text, or chat • Veterans: Press 1
                </p>
              </div>
              
              <div className="rounded-lg bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-[rgb(var(--color-green))]" />
                  <p className="font-semibold text-[rgb(var(--color-navy))]">Crisis Text Line</p>
                </div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  Text HOME to 741741
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-white">Ready to take the next step?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>
              We&apos;re here to help you on your journey. Let us show you what integrated care looks like.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/start" className="btn-pill btn-pill-green">
                <span className="btn-text">Get Started Today</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
              <Link href="/contact" className="btn-pill btn-pill-white">
                <span className="btn-text">Contact Us</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
