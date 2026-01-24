import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Phone, Clock, Car, Monitor } from 'lucide-react'
import { ImageCarousel } from '@/components/ui/image-carousel'
import { SITE_URL } from '@/lib/site-config'
import { 
  createOpenGraph, 
  createTwitterCard, 
  standardRobots,
  createBreadcrumbSchema,
  createLocalBusinessSchema,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Long Island Locations | Pathways Within Therapy and Wellness',
  description: 'Find Pathways Within at five Long Island locations: Garden City, Port Jefferson, Massapequa, Smithtown, and Rockville Centre. Therapy and wellness services.',
  alternates: { canonical: `${SITE_URL}/locations` },
  openGraph: createOpenGraph({
    title: 'Long Island Locations | Pathways Within Therapy and Wellness',
    description: 'Find Pathways Within at five Long Island locations: Garden City, Port Jefferson, Massapequa, Smithtown, and Rockville Centre. Therapy and wellness services.',
    url: `${SITE_URL}/locations`,
  }),
  twitter: createTwitterCard({
    title: 'Long Island Locations | Pathways Within Therapy and Wellness',
    description: 'Find Pathways Within at five Long Island locations: Garden City, Port Jefferson, Massapequa, Smithtown, and Rockville Centre. Therapy and wellness services.',
  }),
  robots: standardRobots,
}

const locations = [
  {
    name: 'Garden City',
    slug: 'garden-city',
    address: '520 Franklin Ave, Suite L1',
    city: 'Garden City, NY 11530',
    phone: '(631) 371-3825',
    services: ['Individual, couples, and family therapy', 'Child and teen therapy', 'Trauma and EMDR therapy', 'Wellness services (contact for availability)'],
    mapsUrl: 'https://maps.google.com/?q=520+Franklin+Ave+Suite+L1+Garden+City+NY+11530',
    images: ['/images/offices/garden-city/1.jpg', '/images/offices/garden-city/2.jpg', '/images/offices/garden-city/3.jpg', '/images/offices/garden-city/4.jpg'],
  },
  {
    name: 'Port Jefferson',
    slug: 'port-jefferson',
    address: '1227 Main Street, Suite 101',
    city: 'Port Jefferson, NY 11777',
    phone: '(631) 371-3825',
    services: ['Individual, couples, and family therapy', 'Child and teen therapy', 'Trauma and EMDR therapy', 'Wellness services (contact for availability)'],
    mapsUrl: 'https://maps.google.com/?q=1227+Main+Street+Suite+101+Port+Jefferson+NY+11777',
    images: ['/images/offices/port-jefferson/1.jpg', '/images/offices/port-jefferson/2.jpg', '/images/offices/port-jefferson/3.jpg', '/images/offices/port-jefferson/4.jpg'],
  },
  {
    name: 'Massapequa',
    slug: 'massapequa',
    address: '4160 Merrick Rd, Suite 5 & Suite 7',
    city: 'Massapequa, NY 11758',
    phone: '(631) 371-3825',
    services: ['Individual, couples, and family therapy', 'Child and teen therapy', 'Trauma and EMDR therapy', 'Full wellness services including massage, facials, injectables, and more'],
    featured: true,
    mapsUrl: 'https://maps.google.com/?q=4160+Merrick+Rd+Massapequa+NY+11758',
    images: ['/images/offices/massapequa/1.jpg', '/images/offices/massapequa/2.jpg', '/images/offices/massapequa/3.jpg', '/images/offices/massapequa/4.jpg'],
  },
  {
    name: 'Smithtown',
    slug: 'smithtown',
    address: '496 Smithtown Bypass, Suite 203 & Suite 204',
    city: 'Smithtown, NY 11787',
    phone: '(631) 371-3825',
    services: ['Individual, couples, and family therapy', 'Child and teen therapy', 'Trauma and EMDR therapy', 'Wellness services (contact for availability)'],
    mapsUrl: 'https://maps.google.com/?q=496+Smithtown+Bypass+Smithtown+NY+11787',
    images: ['/images/offices/smithtown/1.jpg', '/images/offices/smithtown/2.jpg', '/images/offices/smithtown/3.jpg', '/images/offices/smithtown/4.jpg'],
  },
  {
    name: 'Rockville Centre',
    slug: 'rockville-centre',
    address: '53 N Park Ave, Suite 203',
    city: 'Rockville Centre, NY 11570',
    phone: '(631) 371-3825',
    services: ['Individual, couples, and family therapy', 'Child and teen therapy', 'Trauma and EMDR therapy', 'Wellness services (contact for availability)'],
    mapsUrl: 'https://maps.google.com/?q=53+N+Park+Ave+Suite+203+Rockville+Centre+NY+11570',
    images: ['/images/offices/rockville-centre/1.jpg', '/images/offices/rockville-centre/2.jpg', '/images/offices/rockville-centre/3.jpg', '/images/offices/rockville-centre/4.jpg'],
  },
]

export default function LocationsPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Locations', url: `${SITE_URL}/locations` },
  ])

  const locationSchemas = locations.map(loc => createLocalBusinessSchema({
    name: loc.name,
    slug: loc.slug,
    address: loc.address,
    city: loc.city.split(',')[0],
    state: 'NY',
    zip: loc.city.split(' ').pop() || '',
    phone: loc.phone,
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {locationSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* Map Hero Section */}
      <section className="bg-[rgb(var(--color-cream))]">
        <div className="container-site py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <p className="eyebrow mb-4">Our Locations</p>
              <h1 className="mb-6 text-[rgb(var(--color-navy))]">Five locations to serve you</h1>
              <p className="text-lg text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                We have five locations across the greater Long Island area. Each location offers both therapy and wellness services with dedicated parking for your convenience.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {locations.map((loc) => (
                  <a
                    key={loc.slug}
                    href={`#${loc.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[rgb(var(--color-navy))] shadow-sm transition-all hover:bg-[rgb(var(--color-green))] hover:text-white"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    {loc.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Google Map Embed - Long Island Overview */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799181496!2d-73.6048447!3d40.7575431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24369470a592b%3A0x4109d18b6c5c7b05!2sLong%20Island%2C%20NY!5e0!3m2!1sen!2sus!4v1706000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pathways Within Long Island Locations"
                className="grayscale-[20%] contrast-[1.1]"
              />
              {/* Map Overlay with Brand Touch */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-navy))]/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <div 
                key={location.name}
                id={location.slug}
                className={`overflow-hidden rounded-lg bg-white shadow-sm scroll-mt-24 ${location.featured ? 'ring-2 ring-[rgb(var(--color-green))]' : ''}`}
              >
                <ImageCarousel images={location.images} locationName={location.name} />
                
                <div className="p-8">
                  {location.featured && (
                    <p className="eyebrow mb-4">Full Wellness Services</p>
                  )}
                  
                  <h3 className="mb-4 text-[rgb(var(--color-navy))]">{location.name}</h3>
                  
                  <div className="mb-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[rgb(var(--color-green))]" />
                      <div className="text-sm text-[rgb(var(--color-text-light))]">
                        <p>{location.address}</p>
                        <p>{location.city}</p>
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
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[rgb(var(--color-navy))]">Services available:</p>
                    <ul className="space-y-1">
                      {location.services.map((service, idx) => (
                        <li key={idx} className="text-sm text-[rgb(var(--color-text-light))]">• {service}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-[rgb(var(--color-navy))] transition-colors hover:text-[rgb(var(--color-green))]"
                    style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
                  >
                    Get directions
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
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Monitor className="h-6 w-6 text-[rgb(var(--color-green))]" />
                <p className="eyebrow">Virtual Services</p>
              </div>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Can't make it in person?</h2>
              <div className="space-y-6">
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  We offer virtual therapy appointments through SimplePractice, our HIPAA compliant telehealth platform. Virtual sessions are available for clients in New York, New Jersey, North Carolina, and Florida.
                </p>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  Before your first virtual visit, we will send you a link to get set up. During this onboarding process, you will have the chance to get familiar with our platform.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="rounded-lg bg-[rgb(var(--color-linen))] p-8">
                <h3 className="mb-4 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>Is virtual therapy private?</h3>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  Absolutely. SimplePractice is both HIPAA compliant and VeriSign security sealed. Your privacy is crucial to us, and we take every step to ensure confidentiality in every format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <Clock className="h-6 w-6 text-[rgb(var(--color-green))]" />
              <p className="eyebrow">Hours</p>
            </div>
            <h2 className="mb-8 text-[rgb(var(--color-navy))]">When we are available</h2>
            
            <div className="mb-8 grid gap-4 text-center md:grid-cols-3">
              <div className="rounded-lg bg-white p-6">
                <p className="mb-1 text-sm font-medium text-[rgb(var(--color-navy))]">Monday – Friday</p>
                <p className="text-[rgb(var(--color-text-light))]">9am – 6pm</p>
              </div>
              <div className="rounded-lg bg-white p-6">
                <p className="mb-1 text-sm font-medium text-[rgb(var(--color-navy))]">Saturday</p>
                <p className="text-[rgb(var(--color-text-light))]">10am – 4pm</p>
              </div>
              <div className="rounded-lg bg-white p-6">
                <p className="mb-1 text-sm font-medium text-[rgb(var(--color-navy))]">Sunday</p>
                <p className="text-[rgb(var(--color-text-light))]">Closed</p>
              </div>
            </div>
            
            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              <strong className="text-[rgb(var(--color-navy))]">Extended hours available:</strong> We offer appointments outside regular business hours with advance scheduling. Appointments can be offered up to 11pm with select clinicians.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-white">Ready to visit us?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>
              Schedule your first appointment at any of our five locations or start with a virtual session.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/start" className="btn-pill btn-pill-green">
                <span className="btn-text">Get Started Today</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
              <Link href="/contact" className="btn-pill btn-pill-white">
                <span className="btn-text">Contact Us</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
