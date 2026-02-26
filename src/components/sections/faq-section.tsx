'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FAQItem {
  q: string
  a: string
}

interface FAQSectionProps {
  title?: string
  eyebrow?: string
  faqs: FAQItem[]
}

export function FAQSection({ title = 'Frequently Asked Questions', eyebrow = 'FAQ', faqs }: FAQSectionProps) {
  if (!faqs || faqs.length === 0) return null

  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-white">
      <div className="container-site py-20 lg:py-28">
        <div className="mx-auto max-w-3xl">
          {eyebrow && (
            <p className="eyebrow mb-4">{eyebrow}</p>
          )}
          <h2 className="mb-10 text-[rgb(var(--color-navy))]">{title}</h2>
          <div className="space-y-0">
            {faqs.map((item, idx) => (
              <FAQAccordionItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQAccordionItem({ question, answer }: { question: string; answer: string }) {
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
