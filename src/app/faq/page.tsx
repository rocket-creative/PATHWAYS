'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Phone, MessageCircle, AlertTriangle, PhoneCall } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
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
  const [activeCategory, setActiveCategory] = useState('General')

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        headline="We love answering questions"
        body="Here are some of the most common things people ask us. If you are curious about anything else, just reach out. We are always happy to help."
        image="/images/hero/hero-4-people.png"
        imageAlt="Friendly conversation"
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
              If you are experiencing suicidal thoughts or feel at risk of harm, please seek help immediately. Do not wait for an appointment.
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[rgb(var(--color-green))]" />
                  <p className="font-semibold text-[rgb(var(--color-navy))]">988 Suicide & Crisis Lifeline</p>
                </div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  Call, text, or chat • Veterans: Press 1 • Spanish: Presione 2
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
              
              <div className="rounded-lg bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <PhoneCall className="h-5 w-5 text-[rgb(var(--color-green))]" />
                  <p className="font-semibold text-[rgb(var(--color-navy))]">NYC Well</p>
                </div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  888 NYC WELL (888 692 9355)
                </p>
              </div>
              
              <div className="rounded-lg bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[rgb(var(--color-green))]" />
                  <p className="font-semibold text-[rgb(var(--color-navy))]">Emergency</p>
                </div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  Call 911
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
            <h2 className="mb-6 text-white">Still have questions?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>
              We are always happy to chat. Reach out and let us help you figure out the next step on your journey.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-pill btn-pill-green">
                <span className="btn-text">Contact us</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
              <a href="tel:+16313713825" className="btn-pill btn-pill-white">
                <span className="btn-text">Call (631) 371-3825</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </a>
            </div>
            <p className="mt-6 text-sm text-white/60">
              New client?{' '}
              <Link href="/client-intake" className="text-white underline hover:no-underline">
                Complete our intake form
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
