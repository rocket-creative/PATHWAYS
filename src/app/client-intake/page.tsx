'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Check, FileText, Shield, Clock } from 'lucide-react'

const LOCATION_OPTIONS = [
  { value: '', label: 'Select a location' },
  { value: 'garden-city-wisdom', label: 'Garden City — Wisdom' },
  { value: 'garden-city-wellness', label: 'Garden City — Wellness' },
  { value: 'port-jefferson', label: 'Port Jefferson' },
  { value: 'massapequa', label: 'Massapequa' },
  { value: 'smithtown', label: 'Smithtown' },
  { value: 'rockville-centre', label: 'Rockville Centre' },
  { value: 'virtual', label: 'Virtual / Telehealth' },
  { value: 'not-sure-yet', label: 'Not sure yet' },
]

const HOW_DID_YOU_HEAR_OPTIONS = [
  { value: '', label: 'Select one' },
  { value: 'google', label: 'Google' },
  { value: 'social', label: 'Social media' },
  { value: 'referral', label: 'Referral from friend or family' },
  { value: 'provider', label: 'Referral from provider' },
  { value: 'insurance', label: 'Insurance directory' },
  { value: 'other', label: 'Other' },
]

const SERVICE_OPTIONS = [
  { value: 'individual-therapy', label: 'Individual Therapy', description: 'One-on-one sessions with a licensed therapist' },
  { value: 'couples-therapy', label: 'Couples / Family Therapy', description: 'Sessions with partners or family members' },
  { value: 'child-therapy', label: 'Child Therapy', description: 'Specialized support for children (under 12)' },
  { value: 'teen-therapy', label: 'Teen Therapy', description: 'Support for adolescents (12–17)' },
  { value: 'trauma-therapy', label: 'Trauma Therapy / EMDR', description: 'Trauma-informed care and EMDR processing' },
  { value: 'wellness', label: 'Wellness Services', description: 'Massage, acupuncture, skincare, and more' },
  { value: 'medication-management', label: 'Medication Management', description: 'Psychiatric evaluation (coming soon)' },
  { value: 'unsure', label: 'Not Sure — I Need Guidance', description: 'Our team will help match you with the right service' },
]

function locationFromQuizAnswer(val: string): string {
  const map: Record<string, string> = {
    garden_city: 'garden-city-wisdom',
    massapequa: 'massapequa',
    smithtown: 'smithtown',
    port_jefferson: 'port-jefferson',
    rockville_centre: 'rockville-centre',
    virtual: 'virtual',
  }
  return map[val] ?? ''
}

function serviceFromQuizAnswer(val: string): string[] {
  const map: Record<string, string[]> = {
    mental_health: ['individual-therapy'],
    wellness: ['wellness'],
    medication: ['medication-management'],
    unsure: ['unsure'],
  }
  return map[val] ?? []
}

export default function ClientIntakePage() {
  const searchParams = useSearchParams()
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Pre-fill from quiz answers
  const quizLookingFor = searchParams.get('looking_for') ?? ''
  const quizAgeGroup = searchParams.get('age_group') ?? ''
  const quizLocation = searchParams.get('location') ?? ''

  const [selectedServices, setSelectedServices] = useState<string[]>(() =>
    serviceFromQuizAnswer(quizLookingFor)
  )
  const [preferredLocation, setPreferredLocation] = useState(() =>
    locationFromQuizAnswer(quizLocation)
  )

  const toggleService = (value: string) => {
    setSelectedServices((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    )
  }

  if (isSubmitted) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="container-site py-20">
          <div className="mx-auto max-w-2xl bg-[rgb(var(--color-green))]/10 p-12 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-green))]">
              <Check className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-4 text-[rgb(var(--color-navy))]">Thank You for Completing Your Intake Form</h2>
            <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              A member of our team will review your information and contact you within one business day to schedule your first appointment and confirm your provider match.
            </p>
            <Link href="/" className="btn-pill btn-pill-primary">
              <span className="btn-text">RETURN HOME</span>
              <span className="btn-arrow">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient">
        <div className="container-site py-16 lg:py-24">
          <div className="mb-8">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Pathways Within - Home"
                className="w-[180px] brightness-0 invert lg:w-[220px]"
              />
            </Link>
          </div>

          <div className="max-w-2xl">
            <p className="eyebrow mb-4 text-[rgb(var(--color-green))]">New Client Intake</p>
            <h1 className="mb-6 text-white">New Client Information Form</h1>
            <p className="text-lg text-white/75" style={{ lineHeight: 1.8 }}>
              Please complete this form to help us understand your needs and match you with the right provider. Our front desk team will reach out within one business day.
            </p>
            {quizLookingFor && (
              <div className="mt-6 border border-white/20 bg-white/10 p-4">
                <p className="text-sm text-white/80">
                  We&apos;ve pre-filled some fields based on your quiz answers. Please review and adjust as needed.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-10">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: FileText, title: 'Comprehensive', body: 'Helps us understand your unique needs and goals' },
              { icon: Shield, title: 'Confidential', body: 'Your information is protected under HIPAA' },
              { icon: Clock, title: '10–15 Minutes', body: 'Estimated time to complete this form' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 border border-[rgb(var(--border))]/50 p-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-[rgb(var(--color-green))]/10">
                  <item.icon className="h-5 w-5 text-[rgb(var(--color-green))]" />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>{item.title}</h3>
                  <p className="text-sm text-[rgb(var(--color-text-light))]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-16 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setIsSubmitted(true)
              }}
              className="space-y-8"
            >
              {/* Personal Information */}
              <div className="bg-white p-8">
                <h2 className="mb-6 text-base font-semibold text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                  Personal Information
                </h2>

                <div className="grid gap-5 md:grid-cols-2">
                  {[
                    { label: 'First Name', type: 'text', required: true },
                    { label: 'Last Name', type: 'text', required: true },
                    { label: 'Email', type: 'email', required: true },
                    { label: 'Phone', type: 'tel', required: true },
                    { label: 'Date of Birth', type: 'date', required: true },
                  ].map((field) => (
                    <div key={field.label} className={field.label === 'Date of Birth' ? 'md:col-span-1' : ''}>
                      <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-navy))]">
                        {field.label} {field.required && <span className="text-[rgb(var(--color-green))]">*</span>}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        className="w-full border border-[rgb(var(--border))]/50 px-4 py-3 focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-navy))]">
                      Preferred Location
                    </label>
                    <select
                      value={preferredLocation}
                      onChange={(e) => setPreferredLocation(e.target.value)}
                      className="w-full border border-[rgb(var(--border))]/50 bg-white px-4 py-3 focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                    >
                      {LOCATION_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-navy))]">
                      How did you hear about us?
                    </label>
                    <select
                      name="howDidYouHear"
                      className="w-full border border-[rgb(var(--border))]/50 bg-white px-4 py-3 focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                    >
                      {HOW_DID_YOU_HEAR_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Age / Who is care for — from quiz */}
                {quizAgeGroup && (
                  <div className="mt-5">
                    <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-navy))]">
                      Who Is This Care For?
                    </label>
                    <select
                      defaultValue={quizAgeGroup}
                      className="w-full border border-[rgb(var(--border))]/50 bg-white px-4 py-3 focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                    >
                      <option value="adult">Myself (adult)</option>
                      <option value="child">My child (under 12)</option>
                      <option value="teen">My teenager (12–17)</option>
                      <option value="couple">My partner and myself</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Services of Interest */}
              <div className="bg-white p-8">
                <h2 className="mb-2 text-base font-semibold text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                  Services of Interest
                </h2>
                <p className="mb-6 text-sm text-[rgb(var(--color-text-light))]">Select all that apply. Not sure? Select &quot;I Need Guidance&quot; and we will help.</p>

                <div className="space-y-3">
                  {SERVICE_OPTIONS.map((option) => (
                    <label key={option.value} className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(option.value)}
                        onChange={() => toggleService(option.value)}
                        className="mt-1 h-4 w-4 border-[rgb(var(--border))] text-[rgb(var(--color-green))] focus:ring-[rgb(var(--color-green))]"
                      />
                      <div>
                        <span className="font-medium text-[rgb(var(--color-navy))]">{option.label}</span>
                        <p className="text-sm text-[rgb(var(--color-text-light))]">{option.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Presenting Concerns */}
              <div className="bg-white p-8">
                <h2 className="mb-2 text-base font-semibold text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                  What Brings You In?
                </h2>
                <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]">
                  Please describe what you are looking for help with. Share as much or as little as you are comfortable with.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-navy))]">
                      What has been going on? <span className="text-[rgb(var(--color-green))]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full border border-[rgb(var(--border))]/50 px-4 py-3 focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                      placeholder="Tell us what is on your mind..."
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-navy))]">
                      How long have you been experiencing this?
                    </label>
                    <select className="w-full border border-[rgb(var(--border))]/50 bg-white px-4 py-3 focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]">
                      <option value="">Select one</option>
                      <option>Less than a month</option>
                      <option>1–6 months</option>
                      <option>6 months – 1 year</option>
                      <option>1–3 years</option>
                      <option>More than 3 years</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-navy))]">
                      Have you received therapy or mental health treatment before?
                    </label>
                    <select className="w-full border border-[rgb(var(--border))]/50 bg-white px-4 py-3 focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]">
                      <option value="">Select one</option>
                      <option>Yes — currently in treatment elsewhere</option>
                      <option>Yes — previously, not currently</option>
                      <option>No — this is my first time seeking support</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* HIPAA Consent */}
              <div className="bg-[rgb(var(--color-linen))] p-8">
                <h2 className="mb-4 text-base font-semibold text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                  HIPAA Consent
                </h2>
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 border-[rgb(var(--border))] text-[rgb(var(--color-green))] focus:ring-[rgb(var(--color-green))]"
                  />
                  <span className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                    I consent to Pathways Within - Wisdom and Wellness Collaborative collecting and storing my personal information for the purpose of providing healthcare services. I understand my information is protected by HIPAA and will be kept strictly confidential. <span className="text-[rgb(var(--color-green))]">*</span>
                  </span>
                </label>
              </div>

              {/* Optional Marketing Consents */}
              <div className="bg-white p-8">
                <h2 className="mb-4 text-base font-semibold text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                  Optional Communications
                </h2>
                <div className="space-y-4">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      name="smsConsent"
                      className="mt-1 h-4 w-4 border-[rgb(var(--border))] text-[rgb(var(--color-green))] focus:ring-[rgb(var(--color-green))]"
                    />
                    <span className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                      I agree to receive appointment reminders and practice updates via text message (SMS) at the number provided. Message and data rates may apply. Reply STOP to opt out at any time.
                    </span>
                  </label>
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      name="emailMarketingConsent"
                      className="mt-1 h-4 w-4 border-[rgb(var(--border))] text-[rgb(var(--color-green))] focus:ring-[rgb(var(--color-green))]"
                    />
                    <span className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                      I would like to receive occasional email updates about Pathways Within services, wellness tips, and practice news. I can unsubscribe at any time.
                    </span>
                  </label>
                </div>
              </div>

              {/* Good Faith Estimate Notice */}
              <div className="rounded-lg border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))] p-6">
                <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                  <strong className="text-[rgb(var(--color-navy))]">Good Faith Estimate:</strong> You have the right to receive a Good Faith Estimate for the total expected cost of your care. <Link href="/good-faith-estimate" className="text-[rgb(var(--color-green))] underline">Learn more</Link>.
                </p>
              </div>

              <div className="text-center">
                <button type="submit" className="btn-pill btn-pill-primary px-12">
                  <span className="btn-text">SUBMIT INTAKE FORM</span>
                  <span className="btn-arrow">
                    <ArrowRight />
                  </span>
                </button>
                <p className="mt-4 text-xs text-[rgb(var(--color-text-light))]">
                  Our team will review your form and contact you within one business day. No online booking — scheduling is handled personally by our front desk.
                </p>
              </div>
            </form>

            {/* What happens next */}
            <div className="mx-auto mt-16 max-w-2xl">
              <h2 className="mb-6 text-center text-lg font-semibold text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                What happens next?
              </h2>
              <ol className="space-y-4">
                {[
                  { step: 1, title: 'We review your form', body: 'A member of our team will reach out within one business day.' },
                  { step: 2, title: 'We match you with a provider', body: 'Based on your needs, location, and availability, we will find the right fit.' },
                  { step: 3, title: 'We schedule your first appointment', body: 'We will confirm your preferred time and send you the intake paperwork.' },
                  { step: 4, title: 'You arrive for your first session', body: 'Come to your chosen location or join virtually. We will be ready for you.' },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/20 text-sm font-semibold text-[rgb(var(--color-green))]">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-medium text-[rgb(var(--color-navy))]">{item.title}</p>
                      <p className="text-sm text-[rgb(var(--color-text-light))]">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
