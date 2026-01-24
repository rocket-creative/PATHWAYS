'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, Clock, MapPin, AlertTriangle, MessageCircle, Check } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'

const locations = [
  { name: 'Garden City', address: '520 Franklin Ave, Suite L1', city: 'Garden City, NY 11530' },
  { name: 'Port Jefferson', address: '1227 Main Street, Suite 101', city: 'Port Jefferson, NY 11777' },
  { name: 'Massapequa', address: '4160 Merrick Rd, Suite 5 & 7', city: 'Massapequa, NY 11758' },
  { name: 'Smithtown', address: '496 Smithtown Bypass, Suite 203 & 204', city: 'Smithtown, NY 11787' },
  { name: 'Rockville Centre', address: '53 N Park Ave, Suite 203', city: 'Rockville Centre, NY 11570' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    location: '',
    message: '',
    privacyConsent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        const msg = (data?.error as { message?: string })?.message ?? 'Something went wrong. Please try again.'
        setError(msg)
        return
      }
      setIsSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        headline="Let's talk"
        body="Fill out the form below and someone from our team will be in touch. Or contact us directly by phone or email."
        image="/images/hero/hero-original-4-people.jpeg"
        imageAlt="Warm and welcoming reception area at Pathways Within"
      />

      {/* Contact Form Section */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="rounded-lg bg-[rgb(var(--color-green))]/10 p-12 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-green))]">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="mb-4 text-[rgb(var(--color-navy))]">Thank you for reaching out</h2>
                  <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                    A member of our team will contact you within one business day to discuss your needs and answer any questions.
                  </p>
                  <Link href="/" className="btn-pill btn-pill-primary">
                    <span className="btn-text">Return home</span>
                    <span className="btn-arrow">
                      <ArrowRight />
                    </span>
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div
                      className="rounded-lg border-l-4 border-[rgb(var(--color-green))] bg-[rgb(var(--color-linen))] p-4 text-sm text-[rgb(var(--color-navy))]"
                      role="alert"
                    >
                      {error}
                    </div>
                  )}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-[rgb(var(--color-navy))]">
                        First name <span className="text-[rgb(var(--color-green))]">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-[rgb(var(--border))]/50 px-4 py-3 text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-[rgb(var(--color-navy))]">
                        Last name <span className="text-[rgb(var(--color-green))]">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-[rgb(var(--border))]/50 px-4 py-3 text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[rgb(var(--color-navy))]">
                        Email <span className="text-[rgb(var(--color-green))]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-[rgb(var(--border))]/50 px-4 py-3 text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[rgb(var(--color-navy))]">
                        Phone <span className="text-[rgb(var(--color-green))]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-[rgb(var(--border))]/50 px-4 py-3 text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="interest" className="mb-2 block text-sm font-semibold text-[rgb(var(--color-navy))]">
                        How can we help you?
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-[rgb(var(--border))]/50 bg-white px-4 py-3 text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                      >
                        <option value="">Select an option</option>
                        <option value="therapy">I am interested in therapy services</option>
                        <option value="wellness">I am interested in wellness services</option>
                        <option value="both">I am interested in both</option>
                        <option value="question">I have a general question</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="location" className="mb-2 block text-sm font-semibold text-[rgb(var(--color-navy))]">
                        Preferred location
                      </label>
                      <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-[rgb(var(--border))]/50 bg-white px-4 py-3 text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                      >
                        <option value="">Select a location</option>
                        <option value="garden-city">Garden City</option>
                        <option value="port-jefferson">Port Jefferson</option>
                        <option value="massapequa">Massapequa</option>
                        <option value="smithtown">Smithtown</option>
                        <option value="rockville-centre">Rockville Centre</option>
                        <option value="virtual">Virtual/Telehealth</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[rgb(var(--color-navy))]">
                      Message (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[rgb(var(--border))]/50 px-4 py-3 text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                      placeholder="Tell us a bit about what you're looking for..."
                    />
                  </div>

                  <div className="rounded-lg bg-[rgb(var(--color-linen))] p-6">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        name="privacyConsent"
                        required
                        checked={formData.privacyConsent}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 rounded border-[rgb(var(--border))] text-[rgb(var(--color-green))] focus:ring-[rgb(var(--color-green))]"
                      />
                      <span className="text-sm text-[rgb(var(--color-text-light))]">
                        I agree to the <Link href="/privacy" className="text-[rgb(var(--color-green))] underline">Privacy Policy</Link> and <Link href="/terms" className="text-[rgb(var(--color-green))] underline">Terms of Service</Link> <span className="text-[rgb(var(--color-green))]">*</span>
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.privacyConsent}
                    className="btn-pill btn-pill-primary disabled:opacity-50"
                  >
                    <span className="btn-text">{isSubmitting ? 'Sending...' : 'Send message'}</span>
                    <span className="btn-arrow">
                      <ArrowRight />
                    </span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div>
                  <p className="eyebrow mb-4">Contact Directly</p>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:info@pathwayswithin.com"
                      className="flex items-center gap-3 text-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-green))]"
                    >
                      <Mail className="h-5 w-5 text-[rgb(var(--color-green))]" />
                      info@pathwayswithin.com
                    </a>
                    <a 
                      href="tel:+16313713825"
                      className="flex items-center gap-3 text-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-green))]"
                    >
                      <Phone className="h-5 w-5 text-[rgb(var(--color-green))]" />
                      (631) 371-3825
                    </a>
                  </div>
                </div>

                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[rgb(var(--color-green))]" />
                    <p className="eyebrow">Hours</p>
                  </div>
                  <div className="space-y-1 text-sm text-[rgb(var(--color-text-light))]">
                    <p>Monday – Friday: 9am – 6pm</p>
                    <p>Saturday: 10am – 4pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <p className="eyebrow mb-4">Our Locations</p>
              <h2 className="text-[rgb(var(--color-navy))]">Find us on Long Island</h2>
            </div>
            <Link 
              href="/locations" 
              className="hidden items-center gap-2 text-sm text-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-green))] md:flex"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              View all locations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {locations.map((location) => (
              <div key={location.name} className="rounded-lg bg-white p-6">
                <div className="mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[rgb(var(--color-green))]" />
                  <h3 className="text-sm font-medium text-[rgb(var(--color-navy))]">{location.name}</h3>
                </div>
                <p className="text-xs text-[rgb(var(--color-text-light))]">
                  {location.address}<br />
                  {location.city}
                </p>
              </div>
            ))}
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
                  <p className="font-medium text-[rgb(var(--color-navy))]">988 Suicide & Crisis Lifeline</p>
                </div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  Call, text, or chat • Veterans: Press 1
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
