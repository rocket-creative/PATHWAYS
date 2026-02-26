'use client'

import { useMemo, useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { ArrowRight, X, ChevronDown } from 'lucide-react'

export type ServiceCategory = 'Mental Health' | 'Wellness' | 'Medication Management'

export interface FilterableService {
  slug: string
  name: string
  headline: string
  description: string
  category: ServiceCategory
  locations: readonly string[]
  specializations: readonly string[]
}

const ALL_CATEGORIES: ServiceCategory[] = ['Mental Health', 'Wellness', 'Medication Management']

const ALL_LOCATIONS = [
  'Garden City — Wisdom',
  'Garden City — Wellness',
  'Port Jefferson',
  'Massapequa',
  'Smithtown',
  'Rockville Centre',
] as const

interface FilteredServicesSectionProps {
  services: FilterableService[]
  serviceHrefPrefix: string
  /** Optional: limit which categories appear in the filter (e.g. wisdom only shows Mental Health) */
  categories?: ServiceCategory[]
}

export function FilteredServicesSection({
  services,
  serviceHrefPrefix,
  categories = ALL_CATEGORIES,
}: FilteredServicesSectionProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const [category, setCategory] = useState<ServiceCategory | ''>(
    () => (searchParams.get('category') as ServiceCategory) || ''
  )
  const [location, setLocation] = useState(
    () => searchParams.get('location') || ''
  )
  const [service, setService] = useState(() => searchParams.get('service') || '')
  const [specialization, setSpecialization] = useState(
    () => searchParams.get('specialization') || ''
  )
  const [filtersOpen, setFiltersOpen] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams()
    if (category) params.set('category', category)
    if (location) params.set('location', location)
    if (service) params.set('service', service)
    if (specialization) params.set('specialization', specialization)
    const query = params.toString()
    const url = query ? `${pathname}?${query}` : pathname
    router.replace(url, { scroll: false })
  }, [category, location, service, specialization, pathname, router])

  const serviceOptions = useMemo(
    () => [...new Set(services.map((s) => s.name))].sort(),
    [services]
  )

  const specializationOptions = useMemo(() => {
    const set = new Set<string>()
    services.forEach((s) => s.specializations.forEach((sp) => set.add(sp)))
    return [...set].sort()
  }, [services])

  const filtered = useMemo(() => {
    return services.filter((s) => {
      if (category && s.category !== category) return false
      if (location && !s.locations.includes(location)) return false
      if (service && s.name !== service) return false
      if (specialization && !s.specializations.includes(specialization))
        return false
      return true
    })
  }, [services, category, location, service, specialization])

  const hasFilters = category || location || service || specialization

  const clearFilters = useCallback(() => {
    setCategory('')
    setLocation('')
    setService('')
    setSpecialization('')
  }, [])

  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-white">
      <div className="container-site section">
        {/* Filter Bar */}
        <div className="mb-8 bg-[rgb(var(--color-cream))] p-5 lg:p-6">
          {/* Mobile filter toggle */}
          <button
            type="button"
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex w-full items-center justify-between py-2 text-sm font-semibold text-[rgb(var(--color-navy))] md:hidden"
            style={{ fontFamily: 'var(--font-raleway)' }}
          >
            Filters{' '}
            {hasFilters && (
              <span className="ml-2 rounded-full bg-[rgb(var(--color-green))] px-2 py-0.5 text-xs text-white">
                Active
              </span>
            )}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${filtersOpen ? 'rotate-180' : ''}`}
            />
          </button>

          <div className={`${filtersOpen ? 'block' : 'hidden'} md:block`}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {/* Category */}
              <div>
                <label
                  htmlFor="filter-category"
                  className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-[rgb(var(--color-text-light))]"
                >
                  Category
                </label>
                <select
                  id="filter-category"
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value as ServiceCategory | '')
                  }
                  className="w-full border border-[rgb(var(--border))] bg-white px-4 py-3 text-sm text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none"
                >
                  <option value="">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="filter-location"
                  className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-[rgb(var(--color-text-light))]"
                >
                  Location
                </label>
                <select
                  id="filter-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-[rgb(var(--border))] bg-white px-4 py-3 text-sm text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none"
                >
                  <option value="">All Locations</option>
                  {ALL_LOCATIONS.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="filter-service"
                  className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-[rgb(var(--color-text-light))]"
                >
                  Service
                </label>
                <select
                  id="filter-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full border border-[rgb(var(--border))] bg-white px-4 py-3 text-sm text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none"
                >
                  <option value="">All Services</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Specialization */}
              <div>
                <label
                  htmlFor="filter-specialization"
                  className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-[rgb(var(--color-text-light))]"
                >
                  Specialization
                </label>
                <select
                  id="filter-specialization"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  className="w-full border border-[rgb(var(--border))] bg-white px-4 py-3 text-sm text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none"
                >
                  <option value="">All Specializations</option>
                  {specializationOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear */}
              {hasFilters && (
                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="flex w-full items-center justify-center gap-2 border border-[rgb(var(--border))] px-4 py-3 text-sm text-[rgb(var(--color-text-light))] transition-colors hover:border-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-navy))]"
                  >
                    <X className="h-4 w-4" />
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-[rgb(var(--color-text-light))]">
          Showing{' '}
          <strong className="text-[rgb(var(--color-navy))]">{filtered.length}</strong>{' '}
          service{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Services Grid */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="mb-3 text-lg font-semibold text-[rgb(var(--color-navy))]">
              No services match your filters
            </p>
            <p className="mb-6 text-[rgb(var(--color-text-light))]">
              Try adjusting your search criteria or clear all filters.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="btn-pill btn-pill-secondary inline-flex"
            >
              <span className="btn-text">CLEAR FILTERS</span>
              <span className="btn-arrow">
                <ArrowRight />
              </span>
            </button>
          </div>
        ) : (
          <div className="animate-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <Link
                key={s.slug}
                href={`${serviceHrefPrefix}${s.slug}`}
                className="animate-on-scroll group rounded-lg border border-[rgb(var(--border))]/50 bg-white p-6 transition-all hover:border-[rgb(var(--color-green))] hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-medium text-[rgb(var(--color-navy))]">
                  {s.name}
                </h3>
                <p className="mb-2 text-sm text-[rgb(var(--color-green))]">
                  {s.headline}
                </p>
                <p className="mb-4 text-sm text-[rgb(var(--color-text-light))] line-clamp-2">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--color-green))]">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
