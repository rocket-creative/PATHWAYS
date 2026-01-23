'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown, Phone, MessageCircle, AlertTriangle } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { getRandomOfficeImage } from '@/lib/office-images'

const faqCategories = [
  {
    name: 'General',
    questions: [
      {
        q: 'Where are you located?',
        a: 'We have five locations in the greater Long Island area. You can find us in Garden City, Port Jefferson, Massapequa, Smithtown, and Rockville Centre. Each location offers both therapy and wellness services. To minimize stress before and after your appointments, each location has dedicated parking for your convenience.',
      },
      {
        q: 'Do you take insurance?',
        a: 'We are in network for most major insurance providers in New York. Insurance coverage applies to both therapy and applicable wellness services. We accept Aetna, Cigna, Optum, UHC, Oxford, UMR, Oscar, 1199, Meritain, Magnacare, Humana, Medicare, NYSHIP, Student Resource Allied Benefit, ComPsych, VA Community Care benefits, MVP, and Northwell Brighton Health. Out of network options are also available.',
      },
      {
        q: 'Do you offer discounts or sliding scale fees?',
        a: 'Yes, we offer a limited number of sliding scale spots based on financial need and availability. If you are paying out of pocket and have concerns about affordability, we encourage you to speak with us directly. Our goal is to make therapy as accessible as possible, and we are happy to explore options that support your care.',
      },
      {
        q: 'How do you incorporate therapy and wellness in a collaborative treatment plan?',
        a: 'At Pathways Within, we believe true healing happens when the mind and body are supported together. Our therapy services focus on emotional insight, personal growth, and mental well being, but we do not stop there. Through our 360 degree approach to care, we provide a truly holistic experience. Together, we support your journey from the inside out, integrating therapeutic care with restorative wellness services.',
      },
    ],
  },
  {
    name: 'Scheduling',
    questions: [
      {
        q: 'How often will we meet?',
        a: 'At the beginning, we will meet once a week, more often if it is deemed therapeutically necessary, for as long as our therapeutic relationship feels beneficial to you. The work you are doing may grow or change, and the schedule you need may vary. We will remain flexible and responsive to the way your growth needs change throughout our relationship.',
      },
      {
        q: 'How long do sessions last?',
        a: 'Each therapy session will be one full hour. This is your hour and we are committed to showing up wholly to support the work you are so bravely doing. In exchange, we ask that you commit to your scheduled time each week (it will always be the same day and time) to optimize the time spent with your clinician.',
      },
      {
        q: 'What is your cancellation policy?',
        a: 'Appointments must be canceled 72 hours in advance. There will be a $75 fee for appointments canceled within the 72 hour window or missed without notice. All clients must have a credit card on file. Your information will be stored through IvyPay, a HIPAA compliant provider.',
      },
      {
        q: 'Do you have evening appointments?',
        a: 'We do offer appointments outside regular business hours. With advance scheduling, we can accommodate schedules of every kind. Our appointments can be offered up to 11pm with select clinicians.',
      },
    ],
  },
  {
    name: 'Telehealth',
    questions: [
      {
        q: 'Do you offer virtual visits?',
        a: 'Yes, we offer virtual visits! Called telehealth, our therapy services can be offered in any format you feel most comfortable with. Whether that means you meet with your therapist every time through our virtual platform or you switch it up between telehealth and in person visits, we are happy to work with you.',
      },
      {
        q: 'Is virtual therapy private?',
        a: 'Absolutely. SimplePractice is both HIPAA compliant and VeriSign security sealed. Your privacy is crucial to us, and we take every step to ensure confidentiality in every format.',
      },
      {
        q: 'Where can you provide telehealth?',
        a: 'We offer telehealth therapy to clients in New York, New Jersey, North Carolina, and Florida.',
      },
    ],
  },
  {
    name: 'Therapy',
    questions: [
      {
        q: 'Why would I want to talk to a therapist?',
        a: 'Therapists are people too! The benefit of talking to a therapist is the training and experience we have collected over the years. Friends can be a great source of support, but they are often unable to provide an unbiased and judgment free perspective. Many people thrive on both: friends who love and cherish you, and a therapist who can help guide and support you through your mental health journey.',
      },
      {
        q: 'How long do I have to be in therapy?',
        a: 'Therapy is meant to work for you, so that means we accommodate any preferences you may have. The length and frequency of therapy will depend on your goals and the effort you put forth. You get to decide and the process can be as flexible as you need. You can see us for a few months, stop, and start back up again.',
      },
      {
        q: 'How confidential is therapy?',
        a: 'Your privacy is a major ethical concern for us. We adhere to the guidelines set forth by the American Psychological Association (APA) and HIPAA. There are some limitations: if you express the intent to hurt a child, an elderly person, or yourself, we are required to report some information to relevant authorities. Aside from these stipulations, what you say is completely confidential.',
      },
      {
        q: 'What happens in a counseling session?',
        a: 'Part of that is entirely up to you. We want your session to be yours. It is a space for you to talk about whatever is on your mind. Your first session will be where you have the opportunity to work out your specific concerns. In return, we will ask questions to get to know you and your situation better. You can think of the role of the therapist like a conductor on a train—you decide which tunnel to explore and your therapist drives the train.',
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-[rgb(var(--border))]/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="pr-8 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>
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
    <main>
      {/* Hero - Centered clean design */}
      <PageHero
        eyebrow="FAQ"
        headline="We love answering questions"
        subheadline="Here are some of the most common things people ask us"
        body="If you are curious about anything else, just reach out. We are always happy to help."
        variant="centered"
        size="sm"
        image={{ alt: 'Friendly conversation in a comfortable setting', placeholder: true }}
        imageStyle="cool"
      />

      {/* FAQ Content */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-16">
            {/* Category Navigation */}
            <div className="lg:col-span-1">
              <nav className="sticky top-32">
                {/* Small decorative image */}
                <div className="relative mb-8 aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={getRandomOfficeImage()}
                    alt="Pathways Within"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
                
                <p 
                  className="mb-4 text-xs uppercase tracking-widest text-[rgb(var(--color-text-light))]"
                  style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
                >
                  Categories
                </p>
                <ul className="space-y-2">
                  {faqCategories.map((category) => (
                    <li key={category.name}>
                      <button
                        onClick={() => setActiveCategory(category.name)}
                        className={`w-full rounded-lg px-4 py-3 text-left transition-colors ${
                          activeCategory === category.name
                            ? 'bg-[rgb(var(--color-green))]/10 text-[rgb(var(--color-green))]'
                            : 'text-[rgb(var(--color-text-light))] hover:bg-[rgb(var(--color-linen))]'
                        }`}
                        style={{ fontWeight: activeCategory === category.name ? 500 : 400 }}
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
              <p 
                className="text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                Crisis Resources
              </p>
            </div>
            
            <h2 className="mb-6 text-[rgb(var(--color-navy))]">Need immediate help?</h2>
            <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              If you are experiencing suicidal thoughts or feel at risk of harm, please seek help immediately. Do not wait for an appointment.
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[rgb(var(--color-green))]" />
                  <p className="font-medium text-[rgb(var(--color-navy))]">988 Suicide & Crisis Lifeline</p>
                </div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  Call, text, or chat<br />
                  Veterans: Press 1<br />
                  Spanish: Presione 2
                </p>
              </div>
              
              <div className="rounded-lg bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-[rgb(var(--color-green))]" />
                  <p className="font-medium text-[rgb(var(--color-navy))]">Crisis Text Line</p>
                </div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  Text HOME to 741741
                </p>
              </div>
              
              <div className="rounded-lg bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[rgb(var(--color-green))]" />
                  <p className="font-medium text-[rgb(var(--color-navy))]">NYC Well</p>
                </div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  888-NYC-WELL (888-692-9355)
                </p>
              </div>
              
              <div className="rounded-lg bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <p className="font-medium text-[rgb(var(--color-navy))]">Emergency</p>
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
            <p className="mt-6 text-sm text-white/50">
              Insurance accepted • Same-week appointments available
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
