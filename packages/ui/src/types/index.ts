export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  mainSiteUrl: string
  wisdomSiteUrl: string
  wellnessSiteUrl: string
}

export interface NavLink {
  href: string
  label: string
  external?: boolean
}

export interface Location {
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  services: ('therapy' | 'wellness')[]
}

export interface Service {
  name: string
  slug: string
  description: string
  category: 'therapy' | 'wellness'
}

export interface TeamMember {
  name: string
  role: string
  credentials?: string
  bio: string
  specialties?: string[]
  image?: string
}

export interface FAQ {
  question: string
  answer: string
  category?: string
}
