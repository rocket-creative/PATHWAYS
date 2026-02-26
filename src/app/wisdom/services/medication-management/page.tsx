import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, MapPin, Check } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { ResourcesSection } from '@/components/sections/resources-section'
import { SITE_URL } from '@/lib/site-config'
import { createBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Medication Management | Pathways Within',
  description: 'Psychiatric evaluation and medication management at Pathways Within - Wisdom and Wellness Collaborative. Integrated with our 360° care model. Coming soon.',
  alternates: { canonical: `${SITE_URL}/wisdom/services/medication-management` },
  openGraph: {
    title: 'Medication Management | Pathways Within',
    url: `${SITE_URL}/wisdom/services/medication-management`,
  },
}

const serviceUrl = `${SITE_URL}/wisdom/services/medication-management`
const breadcrumb = createBreadcrumbSchema([
  { name: 'Home', url: SITE_URL },
  { name: 'Mental Health', url: `${SITE_URL}/wisdom` },
  { name: 'Services', url: `${SITE_URL}/wisdom/services` },
  { name: 'Medication Management', url: serviceUrl },
])

const whatToExpect = [
  'Comprehensive psychiatric evaluation during your first appointment',
  'Review of personal, medical, and psychiatric history',
  'Collaborative discussion of treatment goals and options',
  'Ongoing monitoring and medication adjustments as needed',
  'Coordination with your therapy team for integrated care',
  'Education about your medications and what to expect',
]

const conditions = [
  'Anxiety disorders',
  'Major depressive disorder',
  'Bipolar disorder',
  'ADHD (Attention Deficit Hyperactivity Disorder)',
  'PTSD and trauma-related conditions',
  'OCD and related disorders',
]

export default function MedicationManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <PageHero
        eyebrow="Medication Management"
        headline="Psychiatric Evaluation & Medication Management"
        subheadline="Integrated psychiatric care within the 360° model"
        body="Our Psychiatric Mental Health Nurse Practitioner provides comprehensive psychiatric evaluation and ongoing medication management as part of your integrated care plan at Pathways Within - Wisdom and Wellness Collaborative."
        ctaText="GET STARTED"
        ctaHref="/client-intake"
        ctaSecondaryText="MEET OUR PROVIDERS"
        ctaSecondaryHref="/providers"
      />

      {/* Coming Soon Banner */}
      <section className="bg-amber-50 border-y border-amber-200">
        <div className="container-site py-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
              <Clock className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="font-semibold text-amber-900" style={{ fontFamily: 'var(--font-raleway)' }}>
                Launching Soon
              </p>
              <p className="text-sm text-amber-700">
                Our Psychiatric Mental Health Nurse Practitioner is joining the Collaborative. Full scheduling will be available upon their onboarding. Submit an intake form to be notified.
              </p>
            </div>
            <Link href="/client-intake" className="btn-pill btn-pill-primary ml-auto flex-shrink-0">
              <span className="btn-text">STAY INFORMED</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* What Is It */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow mb-4">About This Service</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">What Is Medication Management?</h2>
              <div className="space-y-5">
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  Medication management is the clinical oversight of psychiatric medications — from initial evaluation through ongoing monitoring. At Pathways Within, this service is delivered by a board-certified Psychiatric Mental Health Nurse Practitioner (PMHNP) who has full prescriptive authority in New York State.
                </p>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  What makes our approach unique is integration. When your PMHNP and therapist are in the same collaborative, they communicate. Your medication plan is developed in the context of your therapy goals — not in a silo.
                </p>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  Medication is never automatically required. Some clients benefit from a combination of therapy and medication; others find therapy alone is sufficient. Our evaluation process helps determine what is right for you.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[rgb(var(--color-linen))] p-8">
                <p className="eyebrow mb-4">Conditions We Address</p>
                <ul className="space-y-2">
                  {conditions.map((c) => (
                    <li key={c} className="flex items-center gap-3 text-sm text-[rgb(var(--color-text-light))]">
                      <Check className="h-4 w-4 flex-shrink-0 text-[rgb(var(--color-green))]" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-12">
            <p className="eyebrow mb-4">The Process</p>
            <h2 className="text-[rgb(var(--color-navy))]">What to Expect</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whatToExpect.map((step, index) => (
              <div key={step} className="bg-white p-6">
                <span className="mb-3 flex h-8 w-8 items-center justify-center bg-[rgb(var(--color-green))]/10 text-sm font-semibold text-[rgb(var(--color-green))]">
                  {index + 1}
                </span>
                <p className="text-sm font-medium text-[rgb(var(--color-navy))]" style={{ lineHeight: 1.6 }}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Info */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-12">
          <div className="flex flex-col items-center justify-center gap-8 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-[rgb(var(--color-green))]" />
              <div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">Initial evaluation</p>
                <p className="font-semibold text-[rgb(var(--color-navy))]">60 to 90 minutes</p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-[rgb(var(--border))] sm:block" />
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-[rgb(var(--color-green))]" />
              <div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">Follow-up visits</p>
                <p className="font-semibold text-[rgb(var(--color-navy))]">15 to 30 minutes</p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-[rgb(var(--border))] sm:block" />
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[rgb(var(--color-green))]" />
              <div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">Available at</p>
                <p className="font-semibold text-[rgb(var(--color-navy))]">Garden City — Wisdom · Smithtown</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 360° Integration Note */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-navy))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4 text-[rgb(var(--color-green))]">The 360° Difference</p>
            <h2 className="mb-6 text-white">Medication Care That Connects</h2>
            <p className="text-lg text-white/70" style={{ lineHeight: 1.8 }}>
              At Pathways Within, medication management is never a standalone service. Your PMHNP, therapist, and wellness providers are part of the same Collaborative — sharing context, coordinating care, and keeping your wellbeing at the center of every decision.
            </p>
          </div>
        </div>
      </section>

      <ResourcesSection />

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28 text-center">
          <h2 className="mb-6 text-white">Interested in This Service?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Submit an intake form and let us know you are interested in psychiatric evaluation. We will reach out when scheduling becomes available.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/client-intake" className="btn-pill btn-pill-green">
              <span className="btn-text">SUBMIT INTAKE FORM</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
            <Link href="/wisdom/services" className="btn-pill btn-pill-white">
              <span className="btn-text">ALL SERVICES</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
