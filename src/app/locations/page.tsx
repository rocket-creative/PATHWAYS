import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, Phone, Clock, Car, Monitor } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { JsonLd } from '@pathways/ui'
import { generateBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Our Locations | Pathways Within',
  description: 'Find Pathways Within at five convenient Long Island locations. Garden City, Port Jefferson, Massapequa, Smithtown, and Rockville Centre offer both therapy and wellness services.',
  alternates: {
    canonical: '/locations',
  },
  openGraph: {
    title: 'Our Locations | Pathways Within',
    description: 'Find Pathways Within at five convenient Long Island locations offering both therapy and wellness services.',
    url: '/locations',
  },
}

// Helper function to get image path for location
function getLocationImagePath(locationName: string): string {
  const imageMap: Record<string, string> = {
    'Garden City': '/offices/garden-city.jpg',
    'Port Jefferson': '/offices/port-jefferson.jpg',
    'Massapequa': '/offices/massapequa.jpg',
    'Smithtown': '/offices/smithtown.jpg',
    'Rockville Centre': '/offices/rockville-centre.jpg',
  }
  return imageMap[locationName] || '/offices/garden-city.jpg'
}

const locations = [
  {
    name: 'Garden City',
    address: '520 Franklin Ave, Suite L1',
    city: 'Garden City, NY 11530',
    phone: '(631) 371-3825',
    services: ['Individual, couples, and family therapy', 'Child and teen therapy', 'Trauma and EMDR therapy', 'Wellness services (contact for availability)'],
    mapsUrl: 'https://maps.google.com/?q=520+Franklin+Ave+Suite+L1+Garden+City+NY+11530',
  },
  {
    name: 'Port Jefferson',
    address: '1227 Main Street, Suite 101',
    city: 'Port Jefferson, NY 11777',
    phone: '(631) 371-3825',
    services: ['Individual, couples, and family therapy', 'Child and teen therapy', 'Trauma and EMDR therapy', 'Wellness services (contact for availability)'],
    mapsUrl: 'https://maps.google.com/?q=1227+Main+Street+Suite+101+Port+Jefferson+NY+11777',
  },
  {
    name: 'Massapequa',
    address: '4160 Merrick Rd, Suite 5 & Suite 7',
    city: 'Massapequa, NY 11758',
    phone: '(631) 371-3825',
    services: ['Individual, couples, and family therapy', 'Child and teen therapy', 'Trauma and EMDR therapy', 'Full wellness services including massage, facials, injectables, and more'],
    featured: true,
    mapsUrl: 'https://maps.google.com/?q=4160+Merrick+Rd+Massapequa+NY+11758',
  },
  {
    name: 'Smithtown',
    address: '496 Smithtown Bypass, Suite 203 & Suite 204',
    city: 'Smithtown, NY 11787',
    phone: '(631) 371-3825',
    services: ['Individual, couples, and family therapy', 'Child and teen therapy', 'Trauma and EMDR therapy', 'Wellness services (contact for availability)'],
    mapsUrl: 'https://maps.google.com/?q=496+Smithtown+Bypass+Smithtown+NY+11787',
  },
  {
    name: 'Rockville Centre',
    address: '53 N Park Ave, Suite 203',
    city: 'Rockville Centre, NY 11570',
    phone: '(631) 371-3825',
    services: ['Individual, couples, and family therapy', 'Child and teen therapy', 'Trauma and EMDR therapy', 'Wellness services (contact for availability)'],
    mapsUrl: 'https://maps.google.com/?q=53+N+Park+Ave+Suite+203+Rockville+Centre+NY+11570',
  },
]

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://pathwayswithin.com' },
  { name: 'Our Locations', url: 'https://pathwayswithin.com/locations' },
])

export default function LocationsPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema} />
      {/* Hero - Centered style */}
      <PageHero
        eyebrow="Our Locations"
        headline="Five locations to serve you"
        body="We have five locations across the greater Long Island area. Each location offers both therapy and wellness services with dedicated parking for your convenience."
        image="/hero-images/freepik__professional-studio-portrait-of-one-person-30s40s-__19267.jpeg"
        imageAlt="Pathways Within Long Island locations"
      />

      {/* Locations Grid */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <div 
                key={location.name} 
                className={`overflow-hidden bg-white ${location.featured ? 'ring-2 ring-[rgb(var(--color-green))]' : ''}`}
              >
                {/* Location image */}
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={getLocationImagePath(location.name)}
                    alt={`${location.name} office location`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                
                <div className="p-8">
                {location.featured && (
                  <p 
                    className="mb-4 text-xs uppercase tracking-widest text-[rgb(var(--color-green))]"
                    style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
                  >
                    Full Wellness Services
                  </p>
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
                <p 
                  className="text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
                  style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
                >
                  Virtual Services
                </p>
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
              <p 
                className="text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                Hours
              </p>
            </div>
            <h2 className="mb-8 text-[rgb(var(--color-navy))]">When we're available</h2>
            
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
            <p className="mt-6 text-sm text-white/50">
              5 locations • Telehealth available • Same-week appointments
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
