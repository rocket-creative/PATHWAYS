'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, Shield, Building2, Globe, ChevronDown, ChevronUp } from 'lucide-react'

type SectionKey = 
  | 'socialMedia'
  | 'google'
  | 'websites'
  | 'healthcareDirectories'
  | 'businessDirectories'
  | 'wellnessDirectories'
  | 'reviews'
  | 'emailCrm'
  | 'booking'
  | 'payments'
  | 'advertising'
  | 'content'
  | 'video'
  | 'professional'
  | 'additional'
  | 'security'

export default function BusinessIntakePage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<SectionKey, boolean>>({
    socialMedia: true,
    google: false,
    websites: false,
    healthcareDirectories: false,
    businessDirectories: false,
    wellnessDirectories: false,
    reviews: false,
    emailCrm: false,
    booking: false,
    payments: false,
    advertising: false,
    content: false,
    video: false,
    professional: false,
    additional: false,
    security: false,
  })

  const toggleSection = (section: SectionKey) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center">
        <div className="container max-w-2xl mx-auto px-6 py-20">
          <div className="rounded-2xl bg-green-50 border-2 border-green-200 p-12 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#72A23B]">
              <Check className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-[#01153D]">Thank you for completing the inventory</h2>
            <p className="mb-8 text-gray-700" style={{ lineHeight: 1.8 }}>
              We've received your online presence information. Our team will review this and reach out if we need any additional details. Please remember to share passwords through a secure method.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-[#72A23B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5a8a2e] transition-colors"
            >
              <span>Return home</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const SectionHeader = ({ title, section, icon: Icon }: { title: string; section: SectionKey; icon: React.ElementType }) => (
    <button
      type="button"
      onClick={() => toggleSection(section)}
      className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-t-lg border-b-2 border-gray-200 hover:bg-gray-100 transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#72A23B]">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h2 className="text-lg font-bold text-[#01153D]">{title}</h2>
      </div>
      {expandedSections[section] ? (
        <ChevronUp className="h-6 w-6 text-[#01153D]" />
      ) : (
        <ChevronDown className="h-6 w-6 text-[#01153D]" />
      )}
    </button>
  )

  const InputField = ({ label, placeholder, type = 'text' }: { label: string; placeholder?: string; type?: string }) => (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#01153D]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#72A23B] focus:outline-none focus:ring-2 focus:ring-[#72A23B]/20"
      />
    </div>
  )

  const CheckboxField = ({ label }: { label: string }) => (
    <label className="flex items-center gap-3 cursor-pointer">
      <input 
        type="checkbox" 
        className="h-5 w-5 rounded border-2 border-gray-400 text-[#72A23B] focus:ring-[#72A23B] focus:ring-2" 
      />
      <span className="text-sm font-medium text-gray-800">{label}</span>
    </label>
  )

  const AccountSection = ({ name, fields }: { name: string; fields: string[] }) => (
    <div className="border-b-2 border-gray-200 pb-6 last:border-0 last:pb-0">
      <h3 className="mb-4 text-base font-bold text-[#01153D]">{name}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map(field => (
          <InputField key={field} label={field} />
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#01153D] via-[#01153D] to-[#01153D]/95">
        <div className="container max-w-5xl mx-auto px-6 py-16 lg:py-24">
          <div className="mb-8">
            <Link href="/">
              <Image 
                src="/pathways-logo.png" 
                alt="Pathways Within - Home" 
                width={220}
                height={80}
                className="w-[180px] brightness-0 invert lg:w-[220px]"
              />
            </Link>
          </div>
          
          <div className="max-w-2xl">
            <p className="text-[#72A23B] text-sm font-medium uppercase tracking-wider mb-4">Business Intake</p>
            <h1 className="mb-6 text-4xl lg:text-5xl font-semibold text-white">Online Presence & Account Inventory</h1>
            <p className="text-xl text-white/80" style={{ lineHeight: 1.8 }}>
              Help us identify and catalog all existing online accounts, profiles, and listings. This ensures we can properly manage, optimize, and maintain your digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="border-b-2 border-gray-200 bg-white">
        <div className="container max-w-5xl mx-auto px-6 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-4 rounded-lg border-2 border-gray-200 bg-gray-50 p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#72A23B]">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold text-[#01153D]">Comprehensive</h3>
                <p className="text-sm text-gray-700">Covers all major platforms and services</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border-2 border-gray-200 bg-gray-50 p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#72A23B]">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold text-[#01153D]">Secure</h3>
                <p className="text-sm text-gray-700">Share passwords through a separate secure channel</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border-2 border-gray-200 bg-gray-50 p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#72A23B]">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold text-[#01153D]">Complete Picture</h3>
                <p className="text-sm text-gray-700">Helps us manage your entire digital footprint</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#FAF9F7]">
        <div className="container max-w-5xl mx-auto px-6 py-16 lg:py-24">
          <form 
            onSubmit={(e) => {
              e.preventDefault()
              setIsSubmitted(true)
              window.scrollTo(0, 0)
            }}
            className="space-y-6"
          >
            {/* 1. Social Media Accounts */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <SectionHeader title="1. Social Media Accounts" section="socialMedia" icon={Globe} />
              {expandedSections.socialMedia && (
                <div className="p-6 space-y-6">
                  <AccountSection 
                    name="Facebook Business Page" 
                    fields={['Page Name', 'Page URL', 'Username/Email', 'Admin Access', 'Notes']} 
                  />
                  <AccountSection 
                    name="Instagram Business" 
                    fields={['Username', 'Profile URL', 'Email', 'Admin Access', 'Notes']} 
                  />
                  <AccountSection 
                    name="LinkedIn Company Page" 
                    fields={['Company Page URL', 'Primary Admin Profile', 'Email', 'Admin Access', 'Notes']} 
                  />
                  <AccountSection 
                    name="Twitter/X" 
                    fields={['Username', 'Profile URL', 'Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="YouTube Channel" 
                    fields={['Channel Name', 'Channel URL', 'Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="TikTok" 
                    fields={['Username', 'Profile URL', 'Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Other Social Platforms" 
                    fields={['Platform Name', 'Username/URL', 'Email', 'Notes']} 
                  />
                </div>
              )}
            </div>

            {/* 2. Google Services */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <SectionHeader title="2. Google Services" section="google" icon={Globe} />
              {expandedSections.google && (
                <div className="p-6 space-y-6">
                  <AccountSection 
                    name="Google Business Profile" 
                    fields={['Business Name', 'Profile URL', 'Google Account Email', 'Number of Locations', 'Notes']} 
                  />
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="mb-4 font-bold text-[#01153D]">Verification Status</h3>
                    <div className="flex gap-6">
                      <CheckboxField label="Verified" />
                      <CheckboxField label="Unverified" />
                      <CheckboxField label="Pending" />
                    </div>
                  </div>
                  <AccountSection 
                    name="Google Ads Account" 
                    fields={['Account ID', 'Account Email', 'Billing Contact', 'Monthly Budget', 'Active Campaigns', 'Notes']} 
                  />
                  <AccountSection 
                    name="Google Analytics" 
                    fields={['Account Email', 'Property ID', 'Website URL Tracked', 'Notes']} 
                  />
                  <AccountSection 
                    name="Google Search Console" 
                    fields={['Account Email', 'Property URL', 'Notes']} 
                  />
                  <AccountSection 
                    name="Google Tag Manager" 
                    fields={['Account Email', 'Container ID', 'Notes']} 
                  />
                  <AccountSection 
                    name="Google Workspace (G Suite)" 
                    fields={['Admin Email', 'Domain', 'Number of Users', 'Notes']} 
                  />
                </div>
              )}
            </div>

            {/* 3. Websites & Domains */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <SectionHeader title="3. Websites & Domains" section="websites" icon={Globe} />
              {expandedSections.websites && (
                <div className="p-6 space-y-6">
                  <AccountSection 
                    name="Primary Website" 
                    fields={['Domain Name', 'Registrar', 'Registrar Account Email', 'Hosting Provider', 'Hosting Account Email', 'Notes']} 
                  />
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="mb-4 font-bold text-[#01153D]">CMS Platform</h3>
                    <div className="flex flex-wrap gap-4">
                      <CheckboxField label="WordPress" />
                      <CheckboxField label="Webflow" />
                      <CheckboxField label="Next.js" />
                      <CheckboxField label="Squarespace" />
                      <CheckboxField label="Wix" />
                      <CheckboxField label="Other" />
                    </div>
                    <div className="mt-4">
                      <InputField label="CMS Admin Email" />
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="mb-4 font-bold text-[#01153D]">SSL Certificate</h3>
                    <div className="flex gap-6">
                      <CheckboxField label="Active" />
                      <CheckboxField label="Expired" />
                      <CheckboxField label="Unknown" />
                    </div>
                  </div>
                  <AccountSection 
                    name="Additional Domains" 
                    fields={['Domain', 'Purpose', 'Registrar', 'Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Subdomains" 
                    fields={['Subdomain', 'Purpose', 'Notes']} 
                  />
                </div>
              )}
            </div>

            {/* 4. Healthcare & Therapy Directories */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <SectionHeader title="4. Healthcare & Therapy Directories" section="healthcareDirectories" icon={Building2} />
              {expandedSections.healthcareDirectories && (
                <div className="p-6 space-y-6">
                  <AccountSection 
                    name="Psychology Today" 
                    fields={['Profile URL', 'Username/Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="TherapyDen" 
                    fields={['Profile URL', 'Username/Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="GoodTherapy" 
                    fields={['Profile URL', 'Username/Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Zocdoc" 
                    fields={['Profile URL', 'Username/Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Healthgrades" 
                    fields={['Profile URL', 'Username/Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Vitals" 
                    fields={['Profile URL', 'Username/Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="WebMD" 
                    fields={['Profile URL', 'Username/Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="RateMDs" 
                    fields={['Profile URL', 'Username/Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Other Healthcare Directories" 
                    fields={['Directory Name', 'Profile URL', 'Username/Email', 'Notes']} 
                  />
                </div>
              )}
            </div>

            {/* 5. Business Directories */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <SectionHeader title="5. Business Directories & Listings" section="businessDirectories" icon={Building2} />
              {expandedSections.businessDirectories && (
                <div className="p-6 space-y-6">
                  <AccountSection 
                    name="Yelp" 
                    fields={['Business URL', 'Account Email', 'Number of Reviews', 'Notes']} 
                  />
                  <AccountSection 
                    name="Yellow Pages" 
                    fields={['Listing URL', 'Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Better Business Bureau (BBB)" 
                    fields={['Profile URL', 'Account Email', 'Rating', 'Notes']} 
                  />
                  <AccountSection 
                    name="Angi (formerly Angie's List)" 
                    fields={['Profile URL', 'Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Thumbtack" 
                    fields={['Profile URL', 'Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Nextdoor Business" 
                    fields={['Page URL', 'Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Local Chamber of Commerce" 
                    fields={['Organization', 'Contact', 'Notes']} 
                  />
                </div>
              )}
            </div>

            {/* 6. Wellness & Spa Directories */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <SectionHeader title="6. Wellness & Spa Directories" section="wellnessDirectories" icon={Building2} />
              {expandedSections.wellnessDirectories && (
                <div className="p-6 space-y-6">
                  <AccountSection 
                    name="Spafinder" 
                    fields={['Listing URL', 'Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Wellness.com" 
                    fields={['Listing URL', 'Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="MindBody" 
                    fields={['Business URL', 'Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="ClassPass" 
                    fields={['Listing URL', 'Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Other Wellness Directories" 
                    fields={['Directory Name', 'Listing URL', 'Account Email', 'Notes']} 
                  />
                </div>
              )}
            </div>

            {/* 7. Review Platforms */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <SectionHeader title="7. Review Platforms" section="reviews" icon={Globe} />
              {expandedSections.reviews && (
                <div className="p-6 space-y-6">
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="mb-4 font-bold text-[#01153D]">Google Reviews</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <InputField label="Number of Reviews" />
                      <InputField label="Average Rating" />
                    </div>
                    <div className="mt-4">
                      <CheckboxField label="Management Access" />
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="mb-4 font-bold text-[#01153D]">Facebook Reviews</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <InputField label="Number of Reviews" />
                      <InputField label="Average Rating" />
                    </div>
                    <div className="mt-4">
                      <CheckboxField label="Management Access" />
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="mb-4 font-bold text-[#01153D]">Yelp Reviews</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <InputField label="Number of Reviews" />
                      <InputField label="Average Rating" />
                    </div>
                    <div className="mt-4">
                      <CheckboxField label="Management Access" />
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-200 pb-6 last:border-0 last:pb-0">
                    <h3 className="mb-4 font-bold text-[#01153D]">Healthgrades Reviews</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <InputField label="Number of Reviews" />
                      <InputField label="Average Rating" />
                    </div>
                    <div className="mt-4">
                      <CheckboxField label="Management Access" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 8. Email Marketing & CRM */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <SectionHeader title="8. Email Marketing & CRM" section="emailCrm" icon={Globe} />
              {expandedSections.emailCrm && (
                <div className="p-6 space-y-6">
                  <AccountSection 
                    name="Mailchimp" 
                    fields={['Account Email', 'List Size', 'Notes']} 
                  />
                  <AccountSection 
                    name="Constant Contact" 
                    fields={['Account Email', 'List Size', 'Notes']} 
                  />
                  <AccountSection 
                    name="HubSpot" 
                    fields={['Account Email', 'Plan Type', 'Notes']} 
                  />
                  <AccountSection 
                    name="Salesforce" 
                    fields={['Account Email', 'Plan Type', 'Notes']} 
                  />
                  <AccountSection 
                    name="Other CRM/Email Platforms" 
                    fields={['Platform Name', 'Account Email', 'Notes']} 
                  />
                </div>
              )}
            </div>

            {/* 9. Booking & Scheduling Systems */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <SectionHeader title="9. Booking & Scheduling Systems" section="booking" icon={Building2} />
              {expandedSections.booking && (
                <div className="p-6 space-y-6">
                  <AccountSection 
                    name="Jane App (EHR)" 
                    fields={['Account Email', 'Account Type', 'Notes']} 
                  />
                  <AccountSection 
                    name="SimplePractice" 
                    fields={['Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Acuity Scheduling" 
                    fields={['Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Calendly" 
                    fields={['Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Other Booking Systems" 
                    fields={['Platform Name', 'Account Email', 'Notes']} 
                  />
                </div>
              )}
            </div>

            {/* 10. Payment & Financial Services */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <SectionHeader title="10. Payment & Financial Services" section="payments" icon={Building2} />
              {expandedSections.payments && (
                <div className="p-6 space-y-6">
                  <AccountSection 
                    name="Stripe" 
                    fields={['Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Square" 
                    fields={['Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="PayPal Business" 
                    fields={['Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="IvyPay" 
                    fields={['Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Cherry Financing" 
                    fields={['Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Other Payment Processors" 
                    fields={['Platform Name', 'Account Email', 'Notes']} 
                  />
                </div>
              )}
            </div>

            {/* 11. Advertising & Marketing Platforms */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <SectionHeader title="11. Advertising & Marketing Platforms" section="advertising" icon={Globe} />
              {expandedSections.advertising && (
                <div className="p-6 space-y-6">
                  <AccountSection 
                    name="Facebook Ads Manager" 
                    fields={['Account Email', 'Ad Account ID', 'Monthly Budget', 'Notes']} 
                  />
                  <AccountSection 
                    name="Instagram Ads" 
                    fields={['Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="LinkedIn Ads" 
                    fields={['Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Microsoft Advertising (Bing Ads)" 
                    fields={['Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Other Advertising Platforms" 
                    fields={['Platform Name', 'Account Email', 'Notes']} 
                  />
                </div>
              )}
            </div>

            {/* 12. Content Management & Blogging */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <SectionHeader title="12. Content Management & Blogging" section="content" icon={Globe} />
              {expandedSections.content && (
                <div className="p-6 space-y-6">
                  <AccountSection 
                    name="Medium" 
                    fields={['Publication URL', 'Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="WordPress.com" 
                    fields={['Blog URL', 'Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Substack" 
                    fields={['Newsletter URL', 'Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Other Content Platforms" 
                    fields={['Platform Name', 'URL', 'Account Email', 'Notes']} 
                  />
                </div>
              )}
            </div>

            {/* 13. Video & Media Platforms */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <SectionHeader title="13. Video & Media Platforms" section="video" icon={Globe} />
              {expandedSections.video && (
                <div className="p-6 space-y-6">
                  <AccountSection 
                    name="Vimeo" 
                    fields={['Account URL', 'Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Wistia" 
                    fields={['Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Other Video Platforms" 
                    fields={['Platform Name', 'Account Email', 'Notes']} 
                  />
                </div>
              )}
            </div>

            {/* 14. Professional Networks & Associations */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <SectionHeader title="14. Professional Networks & Associations" section="professional" icon={Building2} />
              {expandedSections.professional && (
                <div className="p-6 space-y-6">
                  <AccountSection 
                    name="Professional Association Memberships" 
                    fields={['Association Name', 'Member Profile URL', 'Account Email', 'Notes']} 
                  />
                  <AccountSection 
                    name="Industry Forums" 
                    fields={['Forum Name', 'Profile URL', 'Username', 'Notes']} 
                  />
                </div>
              )}
            </div>

            {/* 15. Additional Accounts & Services */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <SectionHeader title="15. Additional Accounts & Services" section="additional" icon={Globe} />
              {expandedSections.additional && (
                <div className="p-6 space-y-6">
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="mb-4 font-bold text-[#01153D]">Cloud Storage</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <CheckboxField label="Dropbox" />
                      <CheckboxField label="Google Drive" />
                      <CheckboxField label="OneDrive" />
                      <CheckboxField label="Other" />
                    </div>
                    <InputField label="Account Email" />
                  </div>
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="mb-4 font-bold text-[#01153D]">Design Tools</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <CheckboxField label="Canva" />
                      <CheckboxField label="Adobe Creative Cloud" />
                      <CheckboxField label="Figma" />
                      <CheckboxField label="Other" />
                    </div>
                    <InputField label="Account Email" />
                  </div>
                  <div className="border-b-2 border-gray-200 pb-6 last:border-0 last:pb-0">
                    <h3 className="mb-4 font-bold text-[#01153D]">Project Management</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <CheckboxField label="Asana" />
                      <CheckboxField label="Trello" />
                      <CheckboxField label="Monday.com" />
                      <CheckboxField label="Other" />
                    </div>
                    <InputField label="Account Email" />
                  </div>
                </div>
              )}
            </div>

            {/* 16. Security & Access Notes */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm">
              <SectionHeader title="16. Security & Access Notes" section="security" icon={Shield} />
              {expandedSections.security && (
                <div className="p-6 space-y-6">
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="mb-4 font-bold text-[#01153D]">Two Factor Authentication (2FA)</h3>
                    <p className="text-sm text-gray-700 mb-4">Please list accounts with 2FA enabled:</p>
                    <div className="space-y-3">
                      <InputField label="Account 1" />
                      <InputField label="Account 2" />
                      <InputField label="Account 3" />
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="mb-4 font-bold text-[#01153D]">Recovery Emails</h3>
                    <div className="space-y-3">
                      <InputField label="Recovery Email 1" type="email" />
                      <InputField label="Recovery Email 2" type="email" />
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-200 pb-6">
                    <h3 className="mb-4 font-bold text-[#01153D]">Password Manager</h3>
                    <div className="mb-4">
                      <CheckboxField label="Using password manager" />
                    </div>
                    <InputField label="Service Name" />
                  </div>
                  <div className="border-b-2 border-gray-200 pb-6 last:border-0 last:pb-0">
                    <h3 className="mb-4 font-bold text-[#01153D]">Shared Access</h3>
                    <p className="text-sm text-gray-700 mb-4">List any accounts shared with team members or third parties:</p>
                    <div className="grid gap-4 md:grid-cols-3">
                      <InputField label="Account" />
                      <InputField label="Shared With" />
                      <InputField label="Access Level" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Additional Information */}
            <div className="rounded-lg bg-white overflow-hidden shadow-sm p-6 space-y-6">
              <h2 className="text-xl font-bold text-[#01153D]">Additional Information</h2>
              
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#01153D]">Known Issues or Concerns</label>
                <textarea
                  rows={3}
                  placeholder="List any problems, outdated information, or concerns about existing accounts..."
                  className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#72A23B] focus:outline-none focus:ring-2 focus:ring-[#72A23B]/20"
                />
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#01153D]">Accounts to Create</label>
                <textarea
                  rows={3}
                  placeholder="List any accounts or profiles you would like us to create..."
                  className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#72A23B] focus:outline-none focus:ring-2 focus:ring-[#72A23B]/20"
                />
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#01153D]">Priority Accounts</label>
                <textarea
                  rows={3}
                  placeholder="Indicate which accounts are most important for your business..."
                  className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#72A23B] focus:outline-none focus:ring-2 focus:ring-[#72A23B]/20"
                />
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#01153D]">Additional Notes</label>
                <textarea
                  rows={3}
                  placeholder="Any additional information that would be helpful..."
                  className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#72A23B] focus:outline-none focus:ring-2 focus:ring-[#72A23B]/20"
                />
              </div>
            </div>

            {/* Security Reminder */}
            <div className="rounded-lg bg-blue-50 border-2 border-blue-200 p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#01153D] mb-2">Important Security Note</h3>
                  <p className="text-sm text-gray-800">
                    Please do not include sensitive passwords in this form. After submitting, share credentials through a separate, secure channel such as a password manager share link, encrypted email, or secure messaging.
                  </p>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 bg-[#72A23B] text-white px-8 py-4 rounded-full font-bold hover:bg-[#5a8a2e] transition-colors text-lg shadow-lg"
            >
              <span>Submit Inventory</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#01153D] py-8">
        <div className="container max-w-5xl mx-auto px-6 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Pathways Within Wisdom and Wellness Collaborative. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
