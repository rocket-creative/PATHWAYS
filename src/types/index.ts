/**
 * Common types used throughout the application
 */

// Navigation
export interface NavLink {
  href: string
  label: string
  external?: boolean
  children?: NavLink[]
}

// Location
export interface Location {
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  services: {
    therapy: string[]
    wellness: string[]
  }
}

// Team member
export interface TeamMember {
  name: string
  credentials?: string
  title?: string
  bio: string
  specialties?: string[]
  image?: string
}

// Service
export interface Service {
  slug: string
  title: string
  category: 'therapy' | 'wellness'
  description: string
  benefits?: string[]
}

// Testimonial
export interface Testimonial {
  quote: string
  attribution: string
  service?: string
}

// FAQ Item
export interface FAQItem {
  question: string
  answer: string
  category?: string
}

// Contact form
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  interest: 'therapy' | 'wellness' | 'both' | 'general' | 'other'
  location?: string
  message?: string
  hearAboutUs?: string
  consentPrivacy: boolean
  consentSMS?: boolean
  consentMarketing?: boolean
}

// Cookie consent
export interface ConsentCategories {
  necessary: boolean
  preferences: boolean
  analytics: boolean
  marketing: boolean
}

export interface ConsentData {
  version: string
  timestamp: string
  categories: ConsentCategories
}

// Meta data
export interface PageMeta {
  title: string
  description: string
  keywords?: string[]
  image?: string
  noIndex?: boolean
}
