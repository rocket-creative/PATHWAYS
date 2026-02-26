import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Phone, Clock, Car, Monitor } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { ResourcesSection } from '@/components/sections/resources-section'
import { locationsList } from '@/data/locations'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Our Locations | Pathways Within',
  description: 'Find Pathways Within - Wisdom and Wellness Collaborative at six convenient Long Island locations. Garden City (Wisdom & Wellness), Port Jefferson, Massapequa, Smithtown, and Rockville Centre.',
  alternates: { canonical: `${SITE_URL}/locations` },
  openGraph: { title: 'Our Locations | Pathways Within', url: `${SITE_URL}/locations` },
}

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Locations"
        headline="Find Us Near You"
        body="Pathways Within - Wisdom and Wellness Collaborative serves the greater Long Island area with six locations offering integrated mental health therapy and holistic wellness services."
        ctaText="GET STARTED"
        ctaHref="/client-intake"
      />

      {/* Locations Grid */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="animate-stagger grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {locationsList.map((location) => (
              <div
                key={location.id}
                className="animate-on-scroll bg-white"
              >
                {/* Color block header instead of image */}
                <div
                  className={`h-3 w-full ${
                    location.type === 'Wisdom'
                      ? 'bg-[rgb(var(--color-navy))]'
                      : location.type === 'Wellness'
                      ? 'bg-[rgb(var(--color-green))]'
                      : 'bg-gradient-to-r from-[rgb(var(--color-navy))] to-[rgb(var(--color-green))]'
                  }`}
                />

                <div className="p-8">
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider ${
                        location.type === 'Wisdom'
                          ? 'bg-[rgb(var(--color-navy))]/10 text-[rgb(var(--color-navy))]'
                          : location.type === 'Wellness'
                          ? 'bg-[rgb(var(--color-green))]/10 text-[rgb(var(--color-green))]'
                          : 'bg-[rgb(var(--color-linen))] text-[rgb(var(--color-navy))]'
                      }`}
                      style={{ fontFamily: 'var(--font-raleway)' }}
                    >
                      {location.type === 'Both' ? 'Wisdom & Wellness' : location.type}
                    </span>
                  </div>

                  <h3 className="mb-5 text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600 }}>
                    {location.displayName}
                  </h3>

                  <div className="mb-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[rgb(var(--color-green))]" />
                      <div className="text-sm text-[rgb(var(--color-text-light))]">
                        <p>{location.address}</p>
                        <p>{location.city} {location.zip}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 flex-shrink-0 text-[rgb(var(--color-green))]" />
                      <a
                        href={`tel:+1${location.phone.replace(/\D/g, '')}`}
                        className="text-sm text-[rgb(var(--color-text-light))] transition-colors hover:text-[rgb(var(--color-navy))]"
                      >
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Car className="h-4 w-4 flex-shrink-0 text-[rgb(var(--color-green))]" />
                      <p className="text-sm text-[rgb(var(--color-text-light))]">Dedicated parking available</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                      Services Available
                    </p>
                    <ul className="space-y-1">
                      {location.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[rgb(var(--color-text-light))]">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[rgb(var(--color-green))]" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-[rgb(var(--color-navy))] transition-colors hover:text-[rgb(var(--color-green))]"
                    style={{ fontFamily: 'var(--font-raleway)', fontWeight: 500 }}
                  >
                    Get Directions
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Services */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="animate-fade-left">
              <div className="mb-4 flex items-center gap-3">
                <Monitor className="h-6 w-6 text-[rgb(var(--color-green))]" />
                <p className="eyebrow">Virtual Services</p>
              </div>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Can&apos;t Make It In Person?</h2>
              <div className="space-y-5">
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  We offer virtual therapy appointments through SimplePractice, our HIPAA-compliant telehealth platform. Virtual sessions are available for clients in New York, New Jersey, North Carolina, and Florida.
                </p>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  Before your first virtual visit, we will send you a link to get set up. During onboarding, you will have the chance to get familiar with the platform in a no-pressure environment.
                </p>
                <Link href="/client-intake" className="btn-pill btn-pill-primary">
                  <span className="btn-text">GET STARTED VIRTUALLY</span>
                  <span className="btn-arrow"><ArrowRight /></span>
                </Link>
              </div>
            </div>
            <div className="animate-fade-right flex items-center">
              <div className="w-full bg-[rgb(var(--color-linen))] p-8">
                <h3 className="mb-4 text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600 }}>
                  Is Virtual Therapy Private?
                </h3>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  Absolutely. SimplePractice is both HIPAA-compliant and VeriSign security sealed. Your privacy is crucial to us, and we take every step to ensure confidentiality — in person and virtually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResourcesSection />

      {/* Hours */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <Clock className="h-6 w-6 text-[rgb(var(--color-green))]" />
              <p className="eyebrow">Hours</p>
            </div>
            <h2 className="mb-8 text-[rgb(var(--color-navy))]">When We Are Available</h2>

            <div className="mb-8 grid gap-4 text-center md:grid-cols-3">
              {[
                { day: 'Monday – Friday', hours: '9am – 6pm' },
                { day: 'Saturday', hours: '10am – 4pm' },
                { day: 'Sunday', hours: 'Closed' },
              ].map((item) => (
                <div key={item.day} className="bg-white p-6">
                  <p className="mb-1 text-sm font-semibold text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                    {item.day}
                  </p>
                  <p className="text-[rgb(var(--color-text-light))]">{item.hours}</p>
                </div>
              ))}
            </div>

            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              <strong className="text-[rgb(var(--color-navy))]">Extended hours available:</strong> Appointments can be offered up to 11pm with select clinicians. Contact us to discuss flexible scheduling options.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-white">Ready to Visit Us?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>
              Schedule your first appointment at any of our six locations or start with a virtual session.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/client-intake" className="btn-pill btn-pill-green">
                <span className="btn-text">GET STARTED</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </Link>
              <Link href="/contact" className="btn-pill btn-pill-white">
                <span className="btn-text">CONTACT US</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
