'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown, ChevronUp, Check, AlertCircle, ChevronLeft, Trash2, Save } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'

const STORAGE_KEY = 'pathways-client-intake-form'
const SECTIONS = [
  { id: 'social-media', title: 'Social media accounts', description: 'Facebook, Instagram, LinkedIn, Twitter/X, YouTube, TikTok, Pinterest' },
  { id: 'google-services', title: 'Google services', description: 'Google Business Profile, Ads, Analytics, Search Console, Tag Manager, Workspace' },
  { id: 'websites', title: 'Websites and domains', description: 'Primary website, additional domains, subdomains, hosting, and CMS access' },
  { id: 'healthcare-directories', title: 'Healthcare directories', description: 'Psychology Today, TherapyDen, GoodTherapy, Zocdoc, Healthgrades' },
  { id: 'business-directories', title: 'Business directories', description: 'Yelp, Yellow Pages, BBB, Angi, Thumbtack, Nextdoor' },
  { id: 'wellness-directories', title: 'Wellness directories', description: 'Spafinder, Wellness.com, MindBody, ClassPass' },
  { id: 'review-platforms', title: 'Review platforms', description: 'Google Reviews, Facebook Reviews, Yelp Reviews' },
  { id: 'email-crm', title: 'Email marketing and CRM', description: 'Mailchimp, Constant Contact, SendGrid, HubSpot, Salesforce' },
  { id: 'booking-systems', title: 'Booking systems', description: 'Jane App, SimplePractice, Acuity Scheduling, Calendly' },
  { id: 'payment-processors', title: 'Payment processors', description: 'Stripe, Square, PayPal Business, IvyPay, Cherry Financing' },
  { id: 'advertising', title: 'Advertising platforms', description: 'Facebook Ads, Instagram Ads, LinkedIn Ads, Microsoft Advertising' },
  { id: 'additional-info', title: 'Additional information', description: 'Known issues, accounts to create, priority accounts' },
]

export default function ClientIntakePage() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [openSections, setOpenSections] = useState<Set<string>>(new Set([SECTIONS[0]?.id || 'social-media']))
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        try {
          const parsed = JSON.parse(saved)
          setFormData(parsed.data || {})
          setCurrentSectionIndex(parsed.currentSectionIndex || 0)
          setOpenSections(new Set(parsed.openSections || [SECTIONS[0]?.id || 'social-media']))
          setLastSaved(parsed.lastSaved ? new Date(parsed.lastSaved) : null)
        } catch (e) {
          console.error('Failed to load saved form data:', e)
        }
      }
    }
  }, [])

  // Save to localStorage whenever formData changes
  useEffect(() => {
    if (typeof window !== 'undefined' && Object.keys(formData).length > 0) {
      const dataToSave = {
        data: formData,
        currentSectionIndex,
        openSections: Array.from(openSections),
        lastSaved: new Date().toISOString(),
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave))
      setLastSaved(new Date())
      setHasUnsavedChanges(false)
    }
  }, [formData, currentSectionIndex, openSections])

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => {
      const next = new Set(prev)
      if (next.has(sectionId)) {
        next.delete(sectionId)
      } else {
        next.add(sectionId)
      }
      return next
    })
  }

  const goToSection = (index: number) => {
    if (index >= 0 && index < SECTIONS.length) {
      setCurrentSectionIndex(index)
      const sectionId = SECTIONS[index]?.id
      if (sectionId) {
        setOpenSections(prev => new Set([...prev, sectionId]))
        // Scroll to section
        setTimeout(() => {
          const element = document.getElementById(`section-${sectionId}`)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    }
  }

  const goToNext = () => {
    if (currentSectionIndex < SECTIONS.length - 1) {
      goToSection(currentSectionIndex + 1)
    }
  }

  const goToPrevious = () => {
    if (currentSectionIndex > 0) {
      goToSection(currentSectionIndex - 1)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    setHasUnsavedChanges(true)
  }

  const clearSection = (sectionId: string) => {
    if (confirm('Are you sure you want to clear all data in this section? This cannot be undone.')) {
      // Get all field names that belong to this section
      const sectionFields = Object.keys(formData).filter(key => {
        // Simple heuristic: if field name contains section keywords
        const sectionKeywords: Record<string, string[]> = {
          'social-media': ['facebook', 'instagram', 'linkedin', 'twitter', 'youtube', 'tiktok', 'pinterest', 'other_social'],
          'google-services': ['gbp', 'ads', 'analytics', 'search_console', 'gtm', 'workspace'],
          'websites': ['domain', 'registrar', 'hosting', 'cms', 'ssl', 'subdomain'],
          'healthcare-directories': ['psychology', 'therapyden', 'goodtherapy', 'zocdoc', 'healthgrades', 'vitals', 'webmd', 'ratemds', 'other_healthcare'],
          'business-directories': ['yelp', 'yellow', 'bbb', 'angi', 'thumbtack', 'nextdoor', 'chamber'],
          'wellness-directories': ['spafinder', 'wellness', 'mindbody', 'classpass'],
          'review-platforms': ['reviews', 'rating'],
          'email-crm': ['mailchimp', 'constant', 'sendgrid', 'hubspot', 'salesforce'],
          'booking-systems': ['jane', 'simplepractice', 'acuity', 'calendly'],
          'payment-processors': ['stripe', 'square', 'paypal', 'ivypay', 'cherry'],
          'advertising': ['facebook_ads', 'instagram_ads', 'linkedin_ads', 'microsoft'],
          'additional-info': ['known_issues', 'accounts_to_create', 'priority_accounts', 'additional_notes'],
        }
        const keywords = sectionKeywords[sectionId] || []
        return keywords.some(keyword => key.toLowerCase().includes(keyword))
      })
      
      setFormData(prev => {
        const next = { ...prev }
        sectionFields.forEach(field => {
          delete next[field]
        })
        return next
      })
    }
  }

  const clearAllData = () => {
    if (confirm('Are you sure you want to clear ALL form data? This cannot be undone.')) {
      setFormData({})
      localStorage.removeItem(STORAGE_KEY)
      setLastSaved(null)
      setHasUnsavedChanges(false)
      setCurrentSectionIndex(0)
      setOpenSections(new Set([SECTIONS[0]?.id || 'social-media']))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/client-intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      // Clear localStorage on successful submission
      localStorage.removeItem(STORAGE_KEY)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your form. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getProgress = () => {
    const totalFields = Object.keys(formData).length
    const filledFields = Object.values(formData).filter(v => v !== '' && v !== false && v !== null && v !== undefined).length
    return totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0
  }

  const InputField = ({ label, name, type = 'text', required = false, placeholder, className = '' }: {
    label: string
    name: string
    type?: string
    required?: boolean
    placeholder?: string
    className?: string
  }) => (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-[rgb(var(--color-navy))]">
        {label} {required && <span className="text-[rgb(var(--color-green))]">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        value={formData[name] || ''}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[rgb(var(--border))]/50 px-4 py-3 text-[rgb(var(--color-navy))] placeholder:text-[rgb(var(--color-text-light))] transition-colors focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
      />
    </div>
  )

  const TextareaField = ({ label, name, required = false, placeholder, rows = 3, className = '' }: {
    label: string
    name: string
    required?: boolean
    placeholder?: string
    rows?: number
    className?: string
  }) => (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-[rgb(var(--color-navy))]">
        {label} {required && <span className="text-[rgb(var(--color-green))]">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        value={formData[name] || ''}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full rounded-lg border border-[rgb(var(--border))]/50 px-4 py-3 text-[rgb(var(--color-navy))] placeholder:text-[rgb(var(--color-text-light))] transition-colors focus:border-[rgb(var(--color-green))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-green))]"
      />
    </div>
  )

  const CheckboxField = ({ label, name, required = false }: { label: string; name: string; required?: boolean }) => (
    <label className="flex cursor-pointer items-start gap-3">
      <input
        type="checkbox"
        name={name}
        required={required}
        checked={formData[name] || false}
        onChange={handleChange}
        className="mt-1 h-4 w-4 rounded border-[rgb(var(--border))] text-[rgb(var(--color-green))] focus:ring-[rgb(var(--color-green))]"
      />
      <span className="text-sm text-[rgb(var(--color-text-light))]">
        {label} {required && <span className="text-[rgb(var(--color-green))]">*</span>}
      </span>
    </label>
  )

  const SectionHeader = ({ id, title, description, index }: { id: string; title: string; description?: string; index: number }) => {
    const isOpen = openSections.has(id)
    const isCurrent = index === currentSectionIndex
    return (
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => toggleSection(id)}
          className={`flex flex-1 items-center justify-between rounded-lg bg-white p-6 text-left transition-colors hover:bg-[rgb(var(--color-linen))] ${isCurrent ? 'ring-2 ring-[rgb(var(--color-green))]' : ''}`}
        >
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgb(var(--color-navy))] text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[rgb(var(--color-navy))]">{title}</h3>
                {description && (
                  <p className="mt-1 text-sm text-[rgb(var(--color-text-light))]">{description}</p>
                )}
              </div>
            </div>
          </div>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-[rgb(var(--color-text-light))]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-[rgb(var(--color-text-light))]" />
          )}
        </button>
        <button
          type="button"
          onClick={() => clearSection(id)}
          className="rounded-lg border border-[rgb(var(--border))]/50 bg-white p-3 text-[rgb(var(--color-text-light))] transition-colors hover:bg-[rgb(var(--color-linen))] hover:text-[rgb(var(--color-navy))]"
          title="Clear this section"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    )
  }

  const FormSection = ({ id, title, description, children, index }: { id: string; title: string; description?: string; children: React.ReactNode; index: number }) => {
    const isOpen = openSections.has(id)
    return (
      <div id={`section-${id}`} className="rounded-lg border border-[rgb(var(--border))]/50 bg-white shadow-sm">
        <SectionHeader id={id} title={title} description={description} index={index} />
        {isOpen && (
          <div className="border-t border-[rgb(var(--border))]/50 p-6">
            {children}
          </div>
        )}
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <main>
        <PageHero
          eyebrow="Thank you"
          headline="Form submitted successfully"
          subheadline="We have received your information"
          body="A member of our team will review your submission and contact you within one business day. For security purposes, please provide passwords through a secure method after completing this form."
          variant="centered"
          size="sm"
        />
        <section className="border-t border-[rgb(var(--border))]/50 bg-white">
          <div className="container-site py-20">
            <div className="mx-auto max-w-2xl">
              <div className="rounded-lg bg-[rgb(var(--color-green))]/10 p-12 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-green))]">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h2 className="mb-4 text-[rgb(var(--color-navy))]">Thank you for your submission</h2>
                <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  We will review your online presence inventory and contact you to discuss next steps. Please do not include passwords in this form. We will arrange a secure method to share credentials.
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
        </section>
      </main>
    )
  }

  const progress = getProgress()
  const currentSection = SECTIONS[currentSectionIndex]

  return (
    <main>
      <PageHero
        eyebrow="Client Intake"
        headline="Online presence inventory"
        subheadline="Help us catalog your digital accounts and listings"
        body="This comprehensive form helps us identify and manage all your online accounts, profiles, and listings. Your progress is automatically saved as you type. You can navigate between sections and return anytime to continue where you left off."
        variant="default"
        size="sm"
        image={{ alt: 'Professional workspace with digital devices', placeholder: true }}
        imageStyle="warm"
      />

      {/* Progress & Save Status */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-4">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between text-xs text-[rgb(var(--color-text-light))]">
                    <span>Form progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 w-64 rounded-full bg-white">
                    <div 
                      className="h-2 rounded-full bg-[rgb(var(--color-green))] transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                {lastSaved && (
                  <div className="flex items-center gap-2 text-xs text-[rgb(var(--color-text-light))]">
                    <Save className="h-3 w-3" />
                    <span>Saved {lastSaved.toLocaleTimeString()}</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={clearAllData}
                  className="rounded-lg border border-[rgb(var(--border))]/50 bg-white px-3 py-1.5 text-xs text-[rgb(var(--color-text-light))] transition-colors hover:bg-[rgb(var(--color-linen))] hover:text-[rgb(var(--color-navy))]"
                >
                  Clear all
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-start gap-4 rounded-lg bg-white p-4 border border-[rgb(var(--color-breezy))]/30">
              <AlertCircle className="h-5 w-5 flex-shrink-0 text-[rgb(var(--color-breezy))] mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-[rgb(var(--color-navy))]">Security notice</p>
                <p className="mt-1 text-sm text-[rgb(var(--color-text-light))]">
                  For your security, please do not include passwords in this form. After submission, we will arrange a secure method to share credentials. This form is for cataloging accounts and URLs only. Your data is automatically saved locally in your browser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={goToPrevious}
                disabled={currentSectionIndex === 0}
                className="flex items-center gap-2 rounded-lg border border-[rgb(var(--border))]/50 bg-white px-4 py-2 text-sm text-[rgb(var(--color-navy))] transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[rgb(var(--color-linen))]"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </button>
              
              <div className="flex items-center gap-2">
                {SECTIONS.map((section, index) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => goToSection(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === currentSectionIndex
                        ? 'bg-[rgb(var(--color-green))]'
                        : index < currentSectionIndex
                        ? 'bg-[rgb(var(--color-green))]/50'
                        : 'bg-[rgb(var(--color-linen))]'
                    }`}
                    title={section.title}
                    aria-label={`Go to ${section.title}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goToNext}
                disabled={currentSectionIndex === SECTIONS.length - 1}
                className="flex items-center gap-2 rounded-lg border border-[rgb(var(--border))]/50 bg-white px-4 py-2 text-sm text-[rgb(var(--color-navy))] transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[rgb(var(--color-linen))]"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20">
          <form onSubmit={handleSubmit} className="mx-auto max-w-4xl space-y-6">
            
            {/* 1. Social Media Accounts */}
            <FormSection
              id="social-media"
              title="Social media accounts"
              description="Facebook, Instagram, LinkedIn, Twitter/X, YouTube, TikTok, Pinterest, and other platforms"
              index={0}
            >
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <InputField label="Facebook Page Name" name="facebook_page_name" placeholder="Pathways Within" />
                  <InputField label="Facebook Page URL" name="facebook_url" type="url" placeholder="https://facebook.com/pathwayswithin" />
                  <InputField label="Facebook Email/Username" name="facebook_email" type="email" />
                  <InputField label="Admin Access Email" name="facebook_admin" type="email" />
                </div>
                <TextareaField label="Facebook Notes" name="facebook_notes" placeholder="Any additional information about your Facebook presence" />

                <div className="grid gap-6 md:grid-cols-2">
                  <InputField label="Instagram Username" name="instagram_username" placeholder="@pathwayswithin" />
                  <InputField label="Instagram Profile URL" name="instagram_url" type="url" />
                  <InputField label="Instagram Email" name="instagram_email" type="email" />
                  <InputField label="Admin Access Email" name="instagram_admin" type="email" />
                </div>
                <TextareaField label="Instagram Notes" name="instagram_notes" />

                <div className="grid gap-6 md:grid-cols-2">
                  <InputField label="LinkedIn Company Page URL" name="linkedin_url" type="url" />
                  <InputField label="LinkedIn Admin Profile" name="linkedin_admin" />
                  <InputField label="LinkedIn Email" name="linkedin_email" type="email" />
                </div>
                <TextareaField label="LinkedIn Notes" name="linkedin_notes" />

                <div className="grid gap-6 md:grid-cols-2">
                  <InputField label="Twitter/X Username" name="twitter_username" placeholder="@pathwayswithin" />
                  <InputField label="Twitter/X Profile URL" name="twitter_url" type="url" />
                  <InputField label="Twitter/X Email" name="twitter_email" type="email" />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <InputField label="YouTube Channel Name" name="youtube_channel" />
                  <InputField label="YouTube Channel URL" name="youtube_url" type="url" />
                  <InputField label="YouTube Email" name="youtube_email" type="email" />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <InputField label="TikTok Username" name="tiktok_username" placeholder="@pathwayswithin" />
                  <InputField label="TikTok Profile URL" name="tiktok_url" type="url" />
                  <InputField label="TikTok Email" name="tiktok_email" type="email" />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <InputField label="Pinterest Username" name="pinterest_username" />
                  <InputField label="Pinterest Profile URL" name="pinterest_url" type="url" />
                  <InputField label="Pinterest Email" name="pinterest_email" type="email" />
                </div>

                <div className="border-t border-[rgb(var(--border))]/50 pt-6">
                  <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">Other social platforms</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <InputField label="Platform Name" name="other_social_platform" placeholder="e.g., Snapchat, Reddit" />
                    <InputField label="Profile URL" name="other_social_url" type="url" />
                    <InputField label="Username" name="other_social_username" />
                    <InputField label="Email" name="other_social_email" type="email" />
                  </div>
                  <TextareaField label="Notes" name="other_social_notes" className="mt-4" />
                </div>
              </div>
            </FormSection>

            {/* 2. Google Services */}
            <FormSection
              id="google-services"
              title="Google services"
              description="Google Business Profile, Google Ads, Analytics, Search Console, Tag Manager, and Workspace"
              index={1}
            >
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <InputField label="Google Business Profile Name" name="gbp_name" />
                  <InputField label="Google Business Profile URL" name="gbp_url" type="url" />
                  <InputField label="Google Account Email" name="gbp_email" type="email" />
                  <InputField label="Number of Locations" name="gbp_locations" type="number" />
                </div>
                <div className="flex gap-4">
                  <CheckboxField label="Verified" name="gbp_verified" />
                  <CheckboxField label="Unverified" name="gbp_unverified" />
                  <CheckboxField label="Pending Verification" name="gbp_pending" />
                </div>
                <TextareaField label="Google Business Profile Notes" name="gbp_notes" />

                <div className="border-t border-[rgb(var(--border))]/50 pt-6">
                  <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">Google Ads</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <InputField label="Google Ads Account ID" name="ads_account_id" />
                    <InputField label="Account Email" name="ads_email" type="email" />
                    <InputField label="Billing Contact" name="ads_billing" />
                    <InputField label="Monthly Budget" name="ads_budget" type="number" />
                  </div>
                  <TextareaField label="Active Campaigns" name="ads_campaigns" placeholder="List active campaigns" />
                </div>

                <div className="border-t border-[rgb(var(--border))]/50 pt-6">
                  <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">Google Analytics</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <InputField label="Analytics Account Email" name="analytics_email" type="email" />
                    <InputField label="Property ID" name="analytics_property_id" />
                    <InputField label="Website URL Tracked" name="analytics_url" type="url" />
                  </div>
                </div>

                <div className="border-t border-[rgb(var(--border))]/50 pt-6">
                  <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">Google Search Console</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <InputField label="Search Console Email" name="search_console_email" type="email" />
                    <InputField label="Property URL" name="search_console_url" type="url" />
                  </div>
                </div>

                <div className="border-t border-[rgb(var(--border))]/50 pt-6">
                  <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">Google Tag Manager</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <InputField label="Tag Manager Email" name="gtm_email" type="email" />
                    <InputField label="Container ID" name="gtm_container_id" />
                  </div>
                </div>

                <div className="border-t border-[rgb(var(--border))]/50 pt-6">
                  <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">Google Workspace</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <InputField label="Admin Email" name="workspace_email" type="email" />
                    <InputField label="Domain" name="workspace_domain" placeholder="pathwayswithin.com" />
                    <InputField label="Number of Users" name="workspace_users" type="number" />
                  </div>
                </div>
              </div>
            </FormSection>

            {/* 3. Websites & Domains */}
            <FormSection
              id="websites"
              title="Websites and domains"
              description="Primary website, additional domains, subdomains, hosting, and CMS access"
              index={2}
            >
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <InputField label="Primary Domain Name" name="primary_domain" placeholder="pathwayswithin.com" />
                  <InputField label="Registrar" name="domain_registrar" placeholder="GoDaddy, Namecheap, etc." />
                  <InputField label="Registrar Account Email" name="registrar_email" type="email" />
                  <InputField label="Hosting Provider" name="hosting_provider" placeholder="Vercel, Bluehost, etc." />
                  <InputField label="Hosting Account Email" name="hosting_email" type="email" />
                  <InputField label="CMS Platform" name="cms_platform" placeholder="WordPress, Webflow, Next.js" />
                  <InputField label="CMS Admin Email" name="cms_email" type="email" />
                </div>
                <div className="flex gap-4">
                  <CheckboxField label="SSL Certificate Active" name="ssl_active" />
                  <CheckboxField label="SSL Certificate Expired" name="ssl_expired" />
                </div>
                <TextareaField label="Website Notes" name="website_notes" />

                <div className="border-t border-[rgb(var(--border))]/50 pt-6">
                  <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">Additional domains</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <InputField label="Domain Name" name="additional_domain" />
                    <InputField label="Purpose" name="additional_domain_purpose" placeholder="Redirect, landing page, etc." />
                    <InputField label="Registrar" name="additional_domain_registrar" />
                    <InputField label="Account Email" name="additional_domain_email" type="email" />
                  </div>
                </div>

                <div className="border-t border-[rgb(var(--border))]/50 pt-6">
                  <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">Subdomains</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <InputField label="Subdomain" name="subdomain" placeholder="blog.pathwayswithin.com" />
                    <InputField label="Purpose" name="subdomain_purpose" />
                  </div>
                </div>
              </div>
            </FormSection>

            {/* 4. Healthcare Directories */}
            <FormSection
              id="healthcare-directories"
              title="Healthcare and therapy directories"
              description="Psychology Today, TherapyDen, GoodTherapy, Zocdoc, Healthgrades, and other professional directories"
              index={3}
            >
              <div className="space-y-6">
                {['Psychology Today', 'TherapyDen', 'GoodTherapy', 'Zocdoc', 'Healthgrades', 'Vitals', 'WebMD', 'RateMDs'].map((directory) => {
                  const key = directory.toLowerCase().replace(/\s+/g, '_')
                  return (
                    <div key={key} className="border-t border-[rgb(var(--border))]/50 pt-6 first:border-t-0 first:pt-0">
                      <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">{directory}</h4>
                      <div className="grid gap-6 md:grid-cols-2">
                        <CheckboxField label={`${directory} profile exists`} name={`${key}_exists`} />
                        <InputField label="Profile URL" name={`${key}_url`} type="url" />
                        <InputField label="Username/Email" name={`${key}_email`} type="email" />
                      </div>
                      <TextareaField label="Notes" name={`${key}_notes`} className="mt-4" />
                    </div>
                  )
                })}

                <div className="border-t border-[rgb(var(--border))]/50 pt-6">
                  <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">Other healthcare directories</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <InputField label="Directory Name" name="other_healthcare_directory" />
                    <InputField label="Profile URL" name="other_healthcare_url" type="url" />
                    <InputField label="Username/Email" name="other_healthcare_email" type="email" />
                  </div>
                  <TextareaField label="Notes" name="other_healthcare_notes" className="mt-4" />
                </div>
              </div>
            </FormSection>

            {/* 5. Business Directories */}
            <FormSection
              id="business-directories"
              title="Business directories and listings"
              description="Yelp, Yellow Pages, BBB, Angi, Thumbtack, Nextdoor, and local chamber of commerce"
              index={4}
            >
              <div className="space-y-6">
                {['Yelp', 'Yellow Pages', 'Better Business Bureau', 'Angi', 'Thumbtack', 'Nextdoor'].map((directory) => {
                  const key = directory.toLowerCase().replace(/\s+/g, '_')
                  return (
                    <div key={key} className="border-t border-[rgb(var(--border))]/50 pt-6 first:border-t-0 first:pt-0">
                      <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">{directory}</h4>
                      <div className="grid gap-6 md:grid-cols-2">
                        <CheckboxField label={`${directory} listing exists`} name={`${key}_exists`} />
                        <InputField label="Listing URL" name={`${key}_url`} type="url" />
                        <InputField label="Account Email" name={`${key}_email`} type="email" />
                        {directory === 'Yelp' && (
                          <InputField label="Number of Reviews" name="yelp_reviews" type="number" />
                        )}
                      </div>
                      <TextareaField label="Notes" name={`${key}_notes`} className="mt-4" />
                    </div>
                  )
                })}

                <div className="border-t border-[rgb(var(--border))]/50 pt-6">
                  <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">Local chamber of commerce</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <InputField label="Organization Name" name="chamber_org" />
                    <InputField label="Contact Information" name="chamber_contact" />
                  </div>
                  <TextareaField label="Notes" name="chamber_notes" className="mt-4" />
                </div>
              </div>
            </FormSection>

            {/* 6. Wellness Directories */}
            <FormSection
              id="wellness-directories"
              title="Wellness and spa directories"
              description="Spafinder, Wellness.com, MindBody, ClassPass, and other wellness platforms"
              index={5}
            >
              <div className="space-y-6">
                {['Spafinder', 'Wellness.com', 'MindBody', 'ClassPass'].map((directory) => {
                  const key = directory.toLowerCase().replace(/\s+/g, '_').replace('.', '')
                  return (
                    <div key={key} className="border-t border-[rgb(var(--border))]/50 pt-6 first:border-t-0 first:pt-0">
                      <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">{directory}</h4>
                      <div className="grid gap-6 md:grid-cols-2">
                        <CheckboxField label={`${directory} listing exists`} name={`${key}_exists`} />
                        <InputField label="Listing URL" name={`${key}_url`} type="url" />
                        <InputField label="Account Email" name={`${key}_email`} type="email" />
                      </div>
                      <TextareaField label="Notes" name={`${key}_notes`} className="mt-4" />
                    </div>
                  )
                })}
              </div>
            </FormSection>

            {/* 7. Review Platforms */}
            <FormSection
              id="review-platforms"
              title="Review platforms"
              description="Google Reviews, Facebook Reviews, Yelp Reviews, Healthgrades Reviews"
              index={6}
            >
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <InputField label="Google Reviews Count" name="google_reviews_count" type="number" />
                  <InputField label="Google Reviews Average Rating" name="google_reviews_rating" placeholder="4.5" />
                  <CheckboxField label="Management Access" name="google_reviews_access" />
                </div>

                <div className="border-t border-[rgb(var(--border))]/50 pt-6">
                  <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">Facebook Reviews</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <InputField label="Number of Reviews" name="facebook_reviews_count" type="number" />
                    <InputField label="Average Rating" name="facebook_reviews_rating" placeholder="4.5" />
                    <CheckboxField label="Management Access" name="facebook_reviews_access" />
                  </div>
                </div>

                <div className="border-t border-[rgb(var(--border))]/50 pt-6">
                  <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">Yelp Reviews</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <InputField label="Number of Reviews" name="yelp_reviews_count" type="number" />
                    <InputField label="Average Rating" name="yelp_reviews_rating" placeholder="4.5" />
                    <CheckboxField label="Management Access" name="yelp_reviews_access" />
                  </div>
                </div>
              </div>
            </FormSection>

            {/* 8. Email Marketing & CRM */}
            <FormSection
              id="email-crm"
              title="Email marketing and CRM"
              description="Mailchimp, Constant Contact, SendGrid, HubSpot, Salesforce"
              index={7}
            >
              <div className="space-y-6">
                {['Mailchimp', 'Constant Contact', 'SendGrid', 'HubSpot', 'Salesforce'].map((service) => {
                  const key = service.toLowerCase().replace(/\s+/g, '_')
                  return (
                    <div key={key} className="border-t border-[rgb(var(--border))]/50 pt-6 first:border-t-0 first:pt-0">
                      <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">{service}</h4>
                      <div className="grid gap-6 md:grid-cols-2">
                        <CheckboxField label={`${service} account exists`} name={`${key}_exists`} />
                        <InputField label="Account Email" name={`${key}_email`} type="email" />
                        {(key === 'mailchimp' || key === 'constant_contact') && (
                          <InputField label="List Size" name={`${key}_list_size`} type="number" />
                        )}
                        {(key === 'hubspot' || key === 'salesforce') && (
                          <InputField label="Plan Type" name={`${key}_plan`} placeholder="Professional, Enterprise, etc." />
                        )}
                      </div>
                      <TextareaField label="Notes" name={`${key}_notes`} className="mt-4" />
                    </div>
                  )
                })}
              </div>
            </FormSection>

            {/* 9. Booking Systems */}
            <FormSection
              id="booking-systems"
              title="Booking and scheduling systems"
              description="Jane App, SimplePractice, Acuity Scheduling, Calendly"
              index={8}
            >
              <div className="space-y-6">
                {['Jane App', 'SimplePractice', 'Acuity Scheduling', 'Calendly'].map((service) => {
                  const key = service.toLowerCase().replace(/\s+/g, '_')
                  return (
                    <div key={key} className="border-t border-[rgb(var(--border))]/50 pt-6 first:border-t-0 first:pt-0">
                      <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">{service}</h4>
                      <div className="grid gap-6 md:grid-cols-2">
                        <CheckboxField label={`${service} account exists`} name={`${key}_exists`} />
                        <InputField label="Account Email" name={`${key}_email`} type="email" />
                        {key === 'jane_app' && (
                          <InputField label="Account Type" name="jane_app_type" placeholder="EHR, Booking, etc." />
                        )}
                      </div>
                      <TextareaField label="Notes" name={`${key}_notes`} className="mt-4" />
                    </div>
                  )
                })}
              </div>
            </FormSection>

            {/* 10. Payment Processors */}
            <FormSection
              id="payment-processors"
              title="Payment and financial services"
              description="Stripe, Square, PayPal Business, IvyPay, Cherry Financing"
              index={9}
            >
              <div className="space-y-6">
                {['Stripe', 'Square', 'PayPal Business', 'IvyPay', 'Cherry Financing'].map((service) => {
                  const key = service.toLowerCase().replace(/\s+/g, '_')
                  return (
                    <div key={key} className="border-t border-[rgb(var(--border))]/50 pt-6 first:border-t-0 first:pt-0">
                      <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">{service}</h4>
                      <div className="grid gap-6 md:grid-cols-2">
                        <CheckboxField label={`${service} account exists`} name={`${key}_exists`} />
                        <InputField label="Account Email" name={`${key}_email`} type="email" />
                      </div>
                      <TextareaField label="Notes" name={`${key}_notes`} className="mt-4" />
                    </div>
                  )
                })}
              </div>
            </FormSection>

            {/* 11. Advertising Platforms */}
            <FormSection
              id="advertising"
              title="Advertising and marketing platforms"
              description="Facebook Ads, Instagram Ads, LinkedIn Ads, Microsoft Advertising"
              index={10}
            >
              <div className="space-y-6">
                {['Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'Microsoft Advertising'].map((service) => {
                  const key = service.toLowerCase().replace(/\s+/g, '_')
                  return (
                    <div key={key} className="border-t border-[rgb(var(--border))]/50 pt-6 first:border-t-0 first:pt-0">
                      <h4 className="mb-4 text-sm font-semibold text-[rgb(var(--color-navy))]">{service}</h4>
                      <div className="grid gap-6 md:grid-cols-2">
                        <CheckboxField label={`${service} account exists`} name={`${key}_exists`} />
                        <InputField label="Account Email" name={`${key}_email`} type="email" />
                        {key === 'facebook_ads' && (
                          <>
                            <InputField label="Ad Account ID" name="facebook_ads_account_id" />
                            <InputField label="Monthly Budget" name="facebook_ads_budget" type="number" />
                          </>
                        )}
                      </div>
                      <TextareaField label="Notes" name={`${key}_notes`} className="mt-4" />
                    </div>
                  )
                })}
              </div>
            </FormSection>

            {/* 12. Additional Information */}
            <FormSection
              id="additional-info"
              title="Additional information"
              description="Known issues, accounts to create, priority accounts, and other notes"
              index={11}
            >
              <div className="space-y-6">
                <TextareaField
                  label="Known Issues or Concerns"
                  name="known_issues"
                  rows={4}
                  placeholder="List any problems, outdated information, or concerns about existing accounts"
                />
                <TextareaField
                  label="Accounts to Create"
                  name="accounts_to_create"
                  rows={4}
                  placeholder="List any accounts or profiles you would like us to create"
                />
                <TextareaField
                  label="Priority Accounts"
                  name="priority_accounts"
                  rows={4}
                  placeholder="Indicate which accounts are most important for your business"
                />
                <TextareaField
                  label="Additional Notes"
                  name="additional_notes"
                  rows={4}
                  placeholder="Any other information that would be helpful"
                />
              </div>
            </FormSection>

            {/* Contact Information */}
            <div className="rounded-lg border border-[rgb(var(--border))]/50 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-[rgb(var(--color-navy))]">Your contact information</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <InputField label="Your Name" name="contact_name" required />
                <InputField label="Your Email" name="contact_email" type="email" required />
                <InputField label="Your Phone" name="contact_phone" type="tel" required />
                <InputField label="Company Name" name="contact_company" />
              </div>
            </div>

            {/* Consent */}
            <div className="rounded-lg bg-[rgb(var(--color-linen))] p-6">
              <CheckboxField
                label="I understand that I should not include passwords in this form. I will provide credentials through a secure method after submission."
                name="security_consent"
                required
              />
              <CheckboxField
                label="I agree to the Privacy Policy and Terms of Service"
                name="privacy_consent"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting || !formData.security_consent || !formData.privacy_consent}
                className="btn-pill btn-pill-primary disabled:opacity-50"
              >
                <span className="btn-text">{isSubmitting ? 'Submitting...' : 'Submit form'}</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
