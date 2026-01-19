'use client'

import { useState } from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
  consent: boolean
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // In production, this would submit to an API endpoint
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
          <svg className="h-8 w-8 text-[rgb(var(--color-green))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2" style={{ fontWeight: 500 }}>Message sent</h3>
        <p className="text-sm text-[rgb(var(--color-text-light))]">
          Thank you for reaching out. We will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm" style={{ fontWeight: 500 }}>
            First name <span className="text-[rgb(var(--color-green))]" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full rounded-lg border border-[rgb(var(--border))] bg-white px-4 py-3 text-[rgb(var(--color-navy))] transition-colors focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-green))]/20"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm" style={{ fontWeight: 500 }}>
            Last name <span className="text-[rgb(var(--color-green))]" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            autoComplete="family-name"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full rounded-lg border border-[rgb(var(--border))] bg-white px-4 py-3 text-[rgb(var(--color-navy))] transition-colors focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-green))]/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm" style={{ fontWeight: 500 }}>
          Email <span className="text-[rgb(var(--color-green))]" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-lg border border-[rgb(var(--border))] bg-white px-4 py-3 text-[rgb(var(--color-navy))] transition-colors focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-green))]/20"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm" style={{ fontWeight: 500 }}>
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full rounded-lg border border-[rgb(var(--border))] bg-white px-4 py-3 text-[rgb(var(--color-navy))] transition-colors focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-green))]/20"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm" style={{ fontWeight: 500 }}>
          Interested in
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full rounded-lg border border-[rgb(var(--border))] bg-white px-4 py-3 text-[rgb(var(--color-navy))] transition-colors focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-green))]/20"
        >
          <option value="">Select a service</option>
          <option value="therapy">Therapy services</option>
          <option value="wellness">Wellness services</option>
          <option value="both">Both therapy and wellness</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm" style={{ fontWeight: 500 }}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us a bit about what brings you here (optional)"
          className="w-full resize-none rounded-lg border border-[rgb(var(--border))] bg-white px-4 py-3 text-[rgb(var(--color-navy))] transition-colors placeholder:text-[rgb(var(--color-text-light))]/50 focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-green))]/20"
        />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-[rgb(var(--border))] accent-[rgb(var(--color-green))]"
          />
          <span className="text-sm text-[rgb(var(--color-text-light))]">
            I consent to Pathways Within contacting me regarding my inquiry. 
            I understand my information will be handled according to the{' '}
            <a href="/privacy" className="text-[rgb(var(--color-green))] underline">privacy policy</a>.
            <span className="text-[rgb(var(--color-green))]" aria-hidden="true"> *</span>
            <span className="sr-only">(required)</span>
          </span>
        </label>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600" role="alert">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-pill btn-pill-primary w-full justify-center disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            <span className="btn-text">Sending...</span>
          </>
        ) : (
          <>
            <span className="btn-text">Send message</span>
            <span className="btn-arrow"><ArrowRight aria-hidden="true" /></span>
          </>
        )}
      </button>
    </form>
  )
}
