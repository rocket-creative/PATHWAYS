import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero, JsonLd, createBreadcrumbSchema, createFAQSchema } from '@pathways/ui'
import { FAQAccordion } from './faq-accordion'

export const metadata: Metadata = {
  title: 'Frequently asked questions',
  description: 'Find answers to common questions about therapy, wellness services, insurance, scheduling, and more at Pathways Within.',
  openGraph: {
    title: 'FAQ | Pathways Within',
    description: 'Answers to common questions about our therapy and wellness services.',
  },
}

const siteUrl = process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000'

const faqCategories = [
  {
    title: 'General questions',
    faqs: [
      {
        question: 'What is Pathways Within?',
        answer: 'Pathways Within is a Wisdom and Wellness Collaborative offering integrated mental health therapy and holistic wellness services. We take a 360 degree approach to healing, looking at both your mental and physical well being under one roof.',
      },
      {
        question: 'How is Pathways Within different from other practices?',
        answer: 'Unlike traditional practices that separate mental health from physical wellness, we offer an integrated approach. Our therapists and wellness providers collaborate to create comprehensive care plans. You enter through one door and receive personalized recommendations based on your whole person needs.',
      },
      {
        question: 'Do I need a referral to start services?',
        answer: 'No referral is needed. You can schedule directly through our website or by calling our office. During your first visit, we will conduct a comprehensive intake to understand your needs and recommend the right services.',
      },
    ],
  },
  {
    title: 'Insurance and payment',
    faqs: [
      {
        question: 'Do you accept insurance?',
        answer: 'Yes, we accept most major insurance plans including Aetna, Cigna, UHC, Oxford, Oscar, Medicare, and many more. Insurance coverage applies to both therapy and applicable wellness services. Contact us to verify your specific benefits.',
      },
      {
        question: 'What if my insurance is not accepted?',
        answer: 'We offer out of network options and can provide superbills for reimbursement. We also have sliding scale spots available based on financial need because we believe everyone deserves access to quality care.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept cash, all major credit cards, HSA, and FSA. For wellness services, Cherry financing is available to help spread payments over time.',
      },
    ],
  },
  {
    title: 'Scheduling and sessions',
    faqs: [
      {
        question: 'How long are therapy sessions?',
        answer: 'Standard therapy sessions are 60 minutes. Initial intake sessions may be longer to allow time for comprehensive assessment.',
      },
      {
        question: 'Do you offer telehealth?',
        answer: 'Yes, we offer telehealth therapy to clients in New York, New Jersey, North Carolina, and Florida. Our platform is HIPAA compliant and completely secure.',
      },
      {
        question: 'What is your cancellation policy?',
        answer: 'We require 72 hours advance notice for cancellations. Late cancellations or missed appointments may incur a $75 fee. We understand life happens, so please communicate with us if you need to reschedule.',
      },
      {
        question: 'How do I schedule an appointment?',
        answer: 'You can schedule through our website contact form, by calling (631) 371 3825, or by emailing Welcome@pathwayswithin.com. Our team will help match you with the right provider based on your needs.',
      },
    ],
  },
  {
    title: 'Services',
    faqs: [
      {
        question: 'How do therapy and wellness services work together?',
        answer: 'Our 360 degree approach integrates therapeutic care with restorative wellness services. For example, someone processing trauma might benefit from both talk therapy and somatic bodywork. Your care team collaborates to create a unified treatment plan.',
      },
      {
        question: 'Can I receive only therapy or only wellness services?',
        answer: 'Absolutely. While we offer integrated care, you are welcome to use only the services that fit your needs. Many clients start with one and explore others over time.',
      },
      {
        question: 'What wellness services do you offer?',
        answer: 'We offer massage therapy, acupuncture, energy work, IV vitamin infusion, skincare and facials, HydraFacial, injectables, laser treatments, cryotherapy, and more. Visit our services page for the complete list.',
      },
    ],
  },
]

export default function FAQPage() {
  const allFaqs = faqCategories.flatMap(cat => cat.faqs)
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' },
  ], siteUrl)
  const faqSchema = createFAQSchema(allFaqs)

  return (
    <main>
      <JsonLd data={[breadcrumbs, faqSchema]} />
      
      <PageHero
        eyebrow="FAQ"
        headline="Frequently asked questions"
        subheadline="Answers to help you get started"
        body="Find answers to common questions about our services, insurance, scheduling, and more. If you do not find what you are looking for, please contact us."
        site="main"
      />

      {/* FAQ Categories */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mx-auto max-w-3xl">
            {faqCategories.map((category) => (
              <div key={category.title} className="mb-12 last:mb-0">
                <h2 className="mb-6 text-[rgb(var(--color-navy))]">{category.title}</h2>
                <FAQAccordion faqs={category.faqs} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section text-center">
          <h2 className="mb-4">Still have questions?</h2>
          <p className="mx-auto mb-8 max-w-xl text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
            Our team is happy to answer any questions you may have. Reach out and we will get back to you promptly.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-pill btn-pill-primary">
              <span className="btn-text">Contact us</span>
              <span className="btn-arrow"><ArrowRight aria-hidden="true" /></span>
            </Link>
            <a href="tel:+16313713825" className="btn-pill btn-pill-secondary">
              <span className="btn-text">Call (631) 371 3825</span>
              <span className="btn-arrow"><ArrowRight aria-hidden="true" /></span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
