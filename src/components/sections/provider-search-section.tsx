'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

const CATEGORY_OPTIONS = [
  { value: '', label: 'All Categories' },
  { value: 'Mental Health', label: 'Mental Health' },
  { value: 'Wellness', label: 'Wellness' },
  { value: 'Medication Management', label: 'Medication Management' },
]

const LOCATION_OPTIONS = [
  { value: '', label: 'All Locations' },
  { value: 'Garden City — Wisdom', label: 'Garden City — Wisdom' },
  { value: 'Garden City — Wellness', label: 'Garden City — Wellness' },
  { value: 'Massapequa', label: 'Massapequa' },
  { value: 'Smithtown', label: 'Smithtown' },
  { value: 'Port Jefferson', label: 'Port Jefferson' },
  { value: 'Rockville Centre', label: 'Rockville Centre' },
]

const SPECIALIZATION_OPTIONS = [
  { value: '', label: 'All Specializations' },
  { value: 'Anxiety', label: 'Anxiety' },
  { value: 'Depression', label: 'Depression' },
  { value: 'Trauma & PTSD', label: 'Trauma & PTSD' },
  { value: 'EMDR Therapy', label: 'EMDR' },
  { value: 'Couples Therapy', label: 'Couples' },
  { value: 'Child Therapy', label: 'Children & Teens' },
]

export function ProviderSearchSection() {
  const router = useRouter()
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [specialization, setSpecialization] = useState('')

  const handleFindProvider = () => {
    const params = new URLSearchParams()
    if (category) params.set('category', category)
    if (location) params.set('location', location)
    if (specialization) params.set('specialization', specialization)
    const query = params.toString()
    router.push(query ? `/providers?${query}` : '/providers')
  }

  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-white">
      {/* Headline + headshot strip — full width, no inner box */}
      <div className="container-site py-16 lg:py-20">
        <div className="animate-on-scroll mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-3">Our Providers</p>
            <h2 className="text-[rgb(var(--color-navy))]">Find the<br />Right Match</h2>
          </div>
          <p className="text-[rgb(var(--color-text-light))] lg:max-w-[44ch] lg:text-right" style={{ lineHeight: 1.8 }}>
            Browse by category, location, or specialization — or visit the full directory for detailed bios and credentials.
          </p>
        </div>

        {/* Provider headshots — real clinician photos */}
        <div className="animate-stagger mb-12 grid grid-cols-6 gap-2 sm:gap-4">
          {[
            { src: '/images/headshots/rachel-lessard-headshot-11.jpg', name: 'Rachel Lessard' },
            { src: '/images/headshots/jennifer-brooks-headshot-1.jpg', name: 'Jennifer Brooks' },
            { src: '/images/headshots/frank-tropeano-headshot-2.jpeg', name: 'Frank Tropeano' },
            { src: '/images/headshots/kaitlin-kelly-headshot-2.jpeg', name: 'Kaitlin Kelly' },
            { src: '/images/headshots/leonard-ma-headshot-2.jpeg', name: 'Leonard Ma' },
            { src: '/images/headshots/emily-dugan-headshot-2.jpeg', name: 'Emily Dugan' },
          ].map(({ src, name }) => (
            <div key={name} className="relative aspect-square w-full overflow-hidden rounded-full">
              <Image src={src} alt={name} fill className="object-cover object-top" sizes="15vw" />
            </div>
          ))}
        </div>

        {/* Filter strip — flush edge to edge within padding */}
        <div className="animate-on-scroll bg-[rgb(var(--color-cream))] p-5 lg:p-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label htmlFor="home-category" className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-[rgb(var(--color-text-light))]">
                Category
              </label>
              <select
                id="home-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-[rgb(var(--border))] bg-white px-4 py-3 text-sm text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none"
              >
                {CATEGORY_OPTIONS.map((o) => (
                  <option key={o.value || 'all'} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="home-location" className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-[rgb(var(--color-text-light))]">
                Location
              </label>
              <select
                id="home-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-[rgb(var(--border))] bg-white px-4 py-3 text-sm text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none"
              >
                {LOCATION_OPTIONS.map((o) => (
                  <option key={o.value || 'all'} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="home-specialization" className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-[rgb(var(--color-text-light))]">
                Specialization
              </label>
              <select
                id="home-specialization"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                className="w-full border border-[rgb(var(--border))] bg-white px-4 py-3 text-sm text-[rgb(var(--color-navy))] focus:border-[rgb(var(--color-green))] focus:outline-none"
              >
                {SPECIALIZATION_OPTIONS.map((o) => (
                  <option key={o.value || 'all'} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="button"
                onClick={handleFindProvider}
                className="btn-pill btn-pill-primary w-full justify-center"
              >
                <span className="btn-text">FIND A PROVIDER</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
