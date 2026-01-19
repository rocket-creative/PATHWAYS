import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, Video, ArrowRight, Navigation } from 'lucide-react'
import { PageHero, JsonLd, createBreadcrumbSchema, createLocalBusinessSchema, LOCATIONS } from '@pathways/ui'

export const metadata: Metadata = {
  title: 'Locations',
  description: 'Find Pathways Within therapy and wellness services at five convenient locations across Long Island: Garden City, Port Jefferson, Massapequa, Smithtown, and Rockville Centre.',
  openGraph: {
    title: 'Our Locations | Pathways Within',
    description: 'Five convenient locations across Long Island offering integrated therapy and wellness services.',
  },
}

const siteUrl = process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000'

export default function LocationsPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
  ], siteUrl)
  
  const locationSchemas = LOCATIONS.map(loc => createLocalBusinessSchema(loc, siteUrl))

  return (
    <main>
      <JsonLd data={[breadcrumbs, ...locationSchemas]} />
      
      <PageHero
        eyebrow="Our locations"
        headline="Five locations across Long Island"
        subheadline="Convenient access to therapy and wellness"
        body="Each of our locations offers both therapy and wellness services. Telehealth is also available for therapy clients in New York, New Jersey, North Carolina, and Florida."
        site="main"
        layout="carousel"
        imageClass="img-placeholder-geometric"
      />

      {/* Telehealth Banner */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-green))]">
        <div className="container-site py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <Video className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="text-white" style={{ fontWeight: 500 }}>
                Telehealth available in NY, NJ, NC, and FL
              </span>
            </div>
            <Link href="/contact" className="btn-pill btn-pill-white py-2 pl-4 pr-2 text-sm">
              <span className="btn-text">Schedule virtual session</span>
              <span className="btn-arrow !h-6 !w-6"><ArrowRight className="!h-3 !w-3" aria-hidden="true" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="grid gap-8 lg:grid-cols-2">
            {LOCATIONS.map((location) => (
              <article 
                key={location.name}
                id={location.name.toLowerCase().replace(/\s+/g, '-')}
                className="overflow-hidden rounded-lg border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]"
              >
                <div className="img-placeholder aspect-video" aria-label={`${location.name} office`} />
                <div className="p-6 lg:p-8">
                  <h2 className="mb-4 text-[rgb(var(--color-navy))]">{location.name}</h2>
                  
                  <div className="mb-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[rgb(var(--color-green))]" aria-hidden="true" />
                      <address className="not-italic text-sm text-[rgb(var(--color-text-light))]">
                        {location.address}<br />
                        {location.city}, {location.state} {location.zip}
                      </address>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 flex-shrink-0 text-[rgb(var(--color-green))]" aria-hidden="true" />
                      <a 
                        href={`tel:${location.phone}`}
                        className="text-sm text-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-green))]"
                      >
                        (631) 371 3825
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-[rgb(var(--color-green))]" aria-hidden="true" />
                      <div className="text-sm text-[rgb(var(--color-text-light))]">
                        <p>Monday through Friday: 9am to 6pm</p>
                        <p>Saturday: 10am to 4pm</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="mb-2 text-sm" style={{ fontWeight: 500 }}>Services available</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[rgb(var(--color-navy))]/10 px-3 py-1 text-xs text-[rgb(var(--color-navy))]">
                        Therapy
                      </span>
                      <span className="rounded-full bg-[rgb(var(--color-green))]/10 px-3 py-1 text-xs text-[rgb(var(--color-green))]">
                        Wellness
                      </span>
                    </div>
                  </div>

                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(`${location.address}, ${location.city}, ${location.state} ${location.zip}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-secondary"
                  >
                    <Navigation className="h-4 w-4" aria-hidden="true" />
                    <span className="btn-text">Get directions</span>
                    <span className="btn-arrow"><ArrowRight aria-hidden="true" /></span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Parking Info */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site section-sm">
          <div className="text-center">
            <h2 className="mb-4">Parking information</h2>
            <p className="mx-auto max-w-2xl text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              Free parking is available at all locations. Look for designated patient parking areas. 
              If you have difficulty finding parking, please call our office and we will assist you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">Ready to visit us?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Schedule your first appointment at the location most convenient for you.
          </p>
          <Link href="/contact" className="btn-pill btn-pill-white">
            <span className="btn-text">Book an appointment</span>
            <span className="btn-arrow"><ArrowRight aria-hidden="true" /></span>
          </Link>
        </div>
      </section>
    </main>
  )
}
