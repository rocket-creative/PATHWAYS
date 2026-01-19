'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-[rgb(var(--border))]" role="list">
      {faqs.map((faq, index) => (
        <div key={index} role="listitem">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between py-5 text-left"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <h3 
              className="pr-4 text-[rgb(var(--color-navy))]" 
              style={{ fontWeight: 500, fontSize: '1rem' }}
            >
              {faq.question}
            </h3>
            <ChevronDown 
              className={`h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))] transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>
          <div 
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
            aria-hidden={openIndex !== index}
          >
            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
