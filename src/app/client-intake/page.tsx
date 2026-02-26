'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, FileText, Shield, Clock } from 'lucide-react'

export default function ClientIntakePage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="container-site py-20">
          <div className="mx-auto max-w-2xl rounded-lg bg-[rgb(var(--color-green))]/10 p-12 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-green))]">
              <Check className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-4 text-[rgb(var(--color-navy))]">Thank you for completing the intake form</h2>
            <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              A member of our team will review your information and contact you within one business day to schedule your first appointment.
            </p>
            <Link href="/" className="btn-pill btn-pill-primary">
              <span className="btn-text">Return home</span>
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
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Pathways Within - Home" 
                width={220}
                height={80}
                className="w-[180px] brightness-0 invert lg:w-[220px]"
              />
            </Link>
          </div>
          
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Client Intake</p>
            <h1 className="mb-6 text-white">New Client Information Form</h1>
            <p className="text-xl text-white/80" style={{ lineHeight: 1.8 }}>
              Please complete this form to help us understand your needs and match you with the right provider.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-12">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-4 rounded-lg border border-[rgb(var(--border))]/50 p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                <FileText className="h-5 w-5 text-[rgb(var(--color-green))]" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-medium text-[rgb(var(--color-navy))]">Comprehensive</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]">Helps us understand your unique needs</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-[rgb(var(--border))]/50 p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                <Shield className="h-5 w-5 text-[rgb(var(--color-green))]" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-medium text-[rgb(var(--color-navy))]">Confidential</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]">Your information is protected by HIPAA</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-[rgb(var(--border))]/50 p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                <Clock className="h-5 w-5 text-[rgb(var(--color-green))]" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-medium text-[rgb(var(--color-navy))]">10-15 Minutes</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]">Estimated time to complete</p>
              </div>
            </div>
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
              <div className="rounded-lg bg-white p-8">
                <h2 className="mb-6 text-lg text-[rgb(var(--color-navy))]">Personal Information</h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-navy))]">
                      First Name <span className="text-[rgb(var(--color-green))]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-[rgb(var(--border))]/50 px-4 py-3 focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-navy))]">
                      Last Name <span className="text-[rgb(var(--color-green))]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-[rgb(var(--border))]/50 px-4 py-3 focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-navy))]">
                      Email <span className="text-[rgb(var(--color-green))]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg border border-[rgb(var(--border))]/50 px-4 py-3 focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-navy))]">
                      Phone <span className="text-[rgb(var(--color-green))]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full rounded-lg border border-[rgb(var(--border))]/50 px-4 py-3 focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-navy))]">
                      Date of Birth <span className="text-[rgb(var(--color-green))]">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full rounded-lg border border-[rgb(var(--border))]/50 px-4 py-3 focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-navy))]">
                      Preferred Location
                    </label>
                    <select className="w-full rounded-lg border border-[rgb(var(--border))]/50 bg-white px-4 py-3 focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]">
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
              </div>

              {/* Services */}
              <div className="rounded-lg bg-white p-8">
                <h2 className="mb-6 text-lg text-[rgb(var(--color-navy))]">Services of Interest</h2>
                
                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-[rgb(var(--border))] text-[rgb(var(--color-green))] focus:ring-[rgb(var(--color-green))]" />
                    <div>
                      <span className="text-[rgb(var(--color-navy))]">Individual Therapy</span>
                      <p className="text-sm text-[rgb(var(--color-text-light))]">One-on-one sessions with a therapist</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-[rgb(var(--border))] text-[rgb(var(--color-green))] focus:ring-[rgb(var(--color-green))]" />
                    <div>
                      <span className="text-[rgb(var(--color-navy))]">Couples/Family Therapy</span>
                      <p className="text-sm text-[rgb(var(--color-text-light))]">Sessions with partners or family members</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-[rgb(var(--border))] text-[rgb(var(--color-green))] focus:ring-[rgb(var(--color-green))]" />
                    <div>
                      <span className="text-[rgb(var(--color-navy))]">Wellness Services</span>
                      <p className="text-sm text-[rgb(var(--color-text-light))]">Massage, acupuncture, skincare, etc.</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Concerns */}
              <div className="rounded-lg bg-white p-8">
                <h2 className="mb-6 text-lg text-[rgb(var(--color-navy))]">What brings you in?</h2>
                
                <div>
                  <label className="mb-2 block text-sm font-medium text-[rgb(var(--color-navy))]">
                    Please describe what you are looking for help with
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-lg border border-[rgb(var(--border))]/50 px-4 py-3 focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
                    placeholder="Share as much or as little as you feel comfortable with..."
                  />
                </div>
              </div>

              {/* Consent */}
              <div className="rounded-lg bg-[rgb(var(--color-linen))] p-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    required 
                    className="mt-1 h-4 w-4 rounded border-[rgb(var(--border))] text-[rgb(var(--color-green))] focus:ring-[rgb(var(--color-green))]" 
                  />
                  <span className="text-sm text-[rgb(var(--color-text-light))]">
                    I consent to Pathways Within collecting and storing my personal information for the purpose of providing healthcare services. I understand my information is protected by HIPAA and will be kept confidential. <span className="text-[rgb(var(--color-green))]">*</span>
                  </span>
                </label>
              </div>

              <button type="submit" className="btn-pill btn-pill-primary w-full justify-center">
                <span className="btn-text">Submit Intake Form</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
