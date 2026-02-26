'use client'

import { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Search, X, ArrowRight, ChevronDown, ExternalLink, MapPin, GraduationCap, Award } from 'lucide-react'
import { providers, type Provider, type ProviderCategory } from '@/data/providers'
import { PageHero } from '@/components/sections/page-hero'

const ALL_LOCATIONS = [
  'Garden City — Wisdom',
  'Garden City — Wellness',
  'Port Jefferson',
  'Massapequa',
  'Smithtown',
  'Rockville Centre',
  'Virtual',
]

const ALL_SPECIALTIES = [
  'Anxiety',
  'Depression',
  'Trauma & PTSD',
  'EMDR Therapy',
  'Couples Therapy',
  'Child Therapy',
  'Teen Therapy',
  'Somatic Therapy',
  'Medication Management',
  'Men\'s Issues',
  'Women\'s Issues',
  'Grief & Loss',
  'Veterans & First Responders',
]

const CATEGORIES: ProviderCategory[] = ['Mental Health', 'Wellness', 'Medication Management']

export function ProviderDirectory() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<ProviderCategory | ''>('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [filtersOpen, setFiltersOpen] = useState(false)

  useEffect(() => {
    const category = searchParams.get('category') as ProviderCategory | null
    const location = searchParams.get('location')
    const specialization = searchParams.get('specialization')
    if (category && CATEGORIES.includes(category)) setSelectedCategory(category)
    if (location && ALL_LOCATIONS.includes(location)) setSelectedLocation(location)
    if (specialization && ALL_SPECIALTIES.includes(specialization)) setSelectedSpecialty(specialization)
  }, [searchParams])

  const filtered = useMemo(() => {
    return providers.filter((p) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase()
        const match =
          p.name.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q) ||
          p.specialties.some((s) => s.toLowerCase().includes(q))
        if (!match) return false
      }
      if (selectedCategory && p.category !== selectedCategory) return false
      if (selectedLocation && !p.locations.includes(selectedLocation)) return false
      if (selectedSpecialty && !p.specialties.includes(selectedSpecialty)) return false
      return true
    })
  }, [searchQuery, selectedCategory, selectedLocation, selectedSpecialty])

  const hasFilters = searchQuery || selectedCategory || selectedLocation || selectedSpecialty

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('')
    setSelectedLocation('')
    setSelectedSpecialty('')
  }

  return (
    <>
      <PageHero
        eyebrow="Our Providers"
        headline="Find Your Provider"
        body="Browse our team of licensed therapists, wellness providers, and medical professionals. Use the filters to find the right match for your needs."
        ctaText="GET STARTED"
        ctaHref="/client-intake"
      />

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 border-b border-[rgb(var(--border))]/50 bg-white shadow-sm">
        <div className="container-site py-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex w-full items-center justify-between py-2 text-sm font-semibold text-[rgb(var(--color-navy))] md:hidden"
            style={{ fontFamily: 'var(--font-raleway)' }}
          >
            Filters {hasFilters && <span className="ml-2 rounded-full bg-[rgb(var(--color-green))] px-2 py-0.5 text-xs text-white">Active</span>}
            <ChevronDown className={`h-4 w-4 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
          </button>

          <div className={`${filtersOpen ? 'block' : 'hidden'} md:block`}>
            <div className="grid gap-3 md:grid-cols-5">
              {/* Search */}
              <div className="relative md:col-span-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--color-text-light))]" />
                <input
                  type="text"
                  placeholder="Search providers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-[rgb(var(--border))] bg-[rgb(var(--color-cream))] py-2.5 pl-9 pr-3 text-sm text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none"
                />
              </div>

              {/* Category */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as ProviderCategory | '')}
                  className="w-full border border-[rgb(var(--border))] bg-[rgb(var(--color-cream))] px-3 py-2.5 text-sm text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none"
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full border border-[rgb(var(--border))] bg-[rgb(var(--color-cream))] px-3 py-2.5 text-sm text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none"
                >
                  <option value="">All Locations</option>
                  {ALL_LOCATIONS.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              {/* Specialty */}
              <div>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full border border-[rgb(var(--border))] bg-[rgb(var(--color-cream))] px-3 py-2.5 text-sm text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none"
                >
                  <option value="">All Specializations</option>
                  {ALL_SPECIALTIES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Clear */}
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center justify-center gap-2 border border-[rgb(var(--border))] px-3 py-2.5 text-sm text-[rgb(var(--color-text-light))] transition-colors hover:border-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-navy))]"
                >
                  <X className="h-4 w-4" />
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-[rgb(var(--color-cream))]">
        <div className="container-site py-12">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-[rgb(var(--color-text-light))]">
              Showing <strong className="text-[rgb(var(--color-navy))]">{filtered.length}</strong> provider{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="mb-3 text-lg font-semibold text-[rgb(var(--color-navy))]">No providers match your filters</p>
              <p className="mb-6 text-[rgb(var(--color-text-light))]">Try adjusting your search criteria or clear all filters.</p>
              <button onClick={clearFilters} className="btn-pill btn-pill-secondary">
                <span className="btn-text">CLEAR FILTERS</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((provider) => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  isExpanded={expandedId === provider.id}
                  onToggle={() => setExpandedId(expandedId === provider.id ? null : provider.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">Ready to Connect?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Our front desk team will match you with the right provider and schedule your first appointment. No online booking — just personalized coordination.
          </p>
          <Link href="/client-intake" className="btn-pill btn-pill-green">
            <span className="btn-text">COMPLETE INTAKE FORM</span>
            <span className="btn-arrow"><ArrowRight /></span>
          </Link>
        </div>
      </section>
    </>
  )
}

function ProviderCard({
  provider,
  isExpanded,
  onToggle,
}: {
  provider: Provider
  isExpanded: boolean
  onToggle: () => void
}) {
  const initials = provider.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')

  return (
    <div className="border border-[rgb(var(--border))]/50 bg-white">
      {/* Compact view — Lifestance-style short card */}
      <div
        className="flex cursor-pointer items-center gap-4 p-4 transition-colors hover:bg-[rgb(var(--color-cream))]/30"
        onClick={onToggle}
        role="button"
        aria-expanded={isExpanded}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onToggle()}
      >
        {/* Small headshot — 48px to reduce over-sharpening */}
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-[rgb(var(--color-navy))]">
          {provider.image ? (
            <Image
              src={provider.image}
              alt={provider.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-white">
              {initials}
            </span>
          )}
        </div>

        {/* Info — compact */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <h3
              className="text-sm font-semibold text-[rgb(var(--color-navy))]"
              style={{ fontFamily: 'var(--font-raleway)' }}
            >
              {provider.name}
            </h3>
            {!provider.available && (
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                Coming Soon
              </span>
            )}
          </div>
          <p className="text-xs text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600 }}>
            {provider.title}
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            <span className="rounded-full border border-[rgb(var(--color-navy))]/20 px-2 py-0.5 text-xs text-[rgb(var(--color-navy))]">
              {provider.category}
            </span>
            {provider.locations.slice(0, 2).map((loc) => (
              <span
                key={loc}
                className="inline-flex items-center gap-1 rounded-full bg-[rgb(var(--color-cream))] px-2 py-0.5 text-xs text-[rgb(var(--color-text-light))]"
              >
                <MapPin className="h-2.5 w-2.5" />
                {loc}
              </span>
            ))}
            {provider.locations.length > 2 && (
              <span className="rounded-full bg-[rgb(var(--color-cream))] px-2 py-0.5 text-xs text-[rgb(var(--color-text-light))]">
                +{provider.locations.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Expand indicator */}
        <ChevronDown
          className={`h-4 w-4 flex-shrink-0 text-[rgb(var(--color-text-light))] transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Expanded detail — full in-depth info */}
      {isExpanded && (
        <div className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))] px-6 py-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Bio */}
            <div className="lg:col-span-2">
              <p className="eyebrow mb-4">About {provider.name.split(' ')[0]}</p>
              <ul className="mb-4 space-y-1">
                {provider.shortBio.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[rgb(var(--color-text-light))]">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[rgb(var(--color-green))]" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="space-y-4 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                {provider.longBio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Sidebar details */}
            <div className="space-y-6">
              {/* Licenses */}
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Award className="h-4 w-4 text-[rgb(var(--color-green))]" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                    Licenses
                  </p>
                </div>
                <ul className="space-y-1">
                  {provider.licenses.map((lic) => (
                    <li key={lic} className="text-sm text-[rgb(var(--color-text-light))]">{lic}</li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-[rgb(var(--color-green))]" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                    Education
                  </p>
                </div>
                <ul className="space-y-1">
                  {provider.education.map((edu) => (
                    <li key={edu} className="text-sm text-[rgb(var(--color-text-light))]">{edu}</li>
                  ))}
                </ul>
              </div>

              {/* Locations */}
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[rgb(var(--color-green))]" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                    Locations
                  </p>
                </div>
                <ul className="space-y-1">
                  {provider.locations.map((loc) => (
                    <li key={loc} className="text-sm text-[rgb(var(--color-text-light))]">{loc}</li>
                  ))}
                </ul>
              </div>

              {/* Specialties */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                  Specialties
                </p>
                <div className="flex flex-wrap gap-2">
                  {provider.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-white px-2.5 py-1 text-xs text-[rgb(var(--color-navy))]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Populations */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                  Population Served
                </p>
                <div className="flex flex-wrap gap-2">
                  {provider.populations.map((pop) => (
                    <span
                      key={pop}
                      className="rounded-full border border-[rgb(var(--border))]/50 px-2.5 py-1 text-xs text-[rgb(var(--color-text-light))]"
                    >
                      {pop}
                    </span>
                  ))}
                </div>
              </div>

              {/* Psychology Today */}
              {provider.psychologyTodayUrl && (
                <a
                  href={provider.psychologyTodayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[rgb(var(--color-green))] hover:underline"
                  style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600 }}
                >
                  View Psychology Today Profile
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}

              {/* CTA */}
              <div className="pt-2">
                <Link href="/client-intake" className="btn-pill btn-pill-primary w-full justify-center">
                  <span className="btn-text">CONTACT US TO BOOK</span>
                  <span className="btn-arrow"><ArrowRight /></span>
                </Link>
                <p className="mt-3 text-xs text-[rgb(var(--color-text-light))] text-center">
                  Our front desk will schedule your appointment after reviewing your intake form.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
