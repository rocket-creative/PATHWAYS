import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Phone, Clock, Car, ArrowRight, Check, Video } from 'lucide-react'
import { PageHero, JsonLd, createBreadcrumbSchema } from '@pathways/ui'
import { createMedicalClinicSchema } from '@pathways/ui/lib/medical-schema'

const siteUrl = process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000'

// Location-specific data with unique content for local SEO
const locations: Record<string, {
  name: string
  slug: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  metaDescription: string
  headline: string
  aboutArea: string
  parking: string
  publicTransit?: string
  services: { therapy: string[]; wellness: string[] }
  hours: { days: string; hours: string }[]
  nearbyLandmarks: string[]
}> = {
  'garden-city': {
    name: 'Garden City',
    slug: 'garden-city',
    address: '520 Franklin Ave, Suite L1',
    city: 'Garden City',
    state: 'NY',
    zip: '11530',
    phone: '+1-631-371-3825',
    metaDescription: 'Pathways Within Garden City offers therapy and wellness services in Nassau County. Convenient Franklin Ave location with easy parking. Schedule today.',
    headline: 'Therapy and wellness in Nassau County',
    aboutArea: 'Our Garden City location serves Nassau County and surrounding communities including Hempstead, Mineola, and Westbury. Located on Franklin Avenue in the heart of the village, our office provides a peaceful setting for your healing journey.',
    parking: 'Free parking is available in the building lot. Additional street parking is available on Franklin Avenue. The entrance is located on the lower level.',
    publicTransit: 'The Garden City LIRR station is a 10 minute walk from our office. Several Nassau Inter-County Express (NICE) bus routes stop nearby.',
    services: {
      therapy: ['Individual therapy', 'Couples therapy', 'Family therapy', 'Child and teen therapy', 'EMDR', 'Trauma therapy'],
      wellness: ['Massage therapy', 'Acupuncture', 'Skincare and facials', 'IV vitamin infusion', 'Injectables'],
    },
    hours: [
      { days: 'Monday through Friday', hours: '9:00 AM to 6:00 PM' },
      { days: 'Saturday', hours: '10:00 AM to 4:00 PM' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    nearbyLandmarks: ['Nassau County Courthouse', 'Garden City Hotel', 'Roosevelt Field Mall'],
  },
  'port-jefferson': {
    name: 'Port Jefferson',
    slug: 'port-jefferson',
    address: '1227 Main Street, Suite 101',
    city: 'Port Jefferson',
    state: 'NY',
    zip: '11777',
    phone: '+1-631-371-3825',
    metaDescription: 'Pathways Within Port Jefferson provides therapy and wellness services on the North Shore. Main Street location in the village. Book your appointment.',
    headline: 'Therapy and wellness on the North Shore',
    aboutArea: 'Our Port Jefferson location serves the North Shore of Long Island, including Setauket, Stony Brook, and Mount Sinai. Located on historic Main Street, our office is steps from the harbor and village shops.',
    parking: 'Metered street parking is available on Main Street. Municipal parking lots are located within walking distance. Additional free parking is available on side streets.',
    publicTransit: 'The Port Jefferson LIRR station is a 5 minute walk from our office. The station is the end of the Port Jefferson Branch.',
    services: {
      therapy: ['Individual therapy', 'Couples therapy', 'Trauma therapy', 'EMDR', 'Somatic therapy'],
      wellness: ['Massage therapy', 'Acupuncture', 'Energy work'],
    },
    hours: [
      { days: 'Monday through Friday', hours: '9:00 AM to 6:00 PM' },
      { days: 'Saturday', hours: '10:00 AM to 4:00 PM' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    nearbyLandmarks: ['Port Jefferson Harbor', 'Bridgeport Ferry Terminal', 'Theatre Three'],
  },
  'massapequa': {
    name: 'Massapequa',
    slug: 'massapequa',
    address: '4160 Merrick Rd, Suite 5 & Suite 7',
    city: 'Massapequa',
    state: 'NY',
    zip: '11758',
    phone: '+1-631-371-3825',
    metaDescription: 'Pathways Within Massapequa offers comprehensive therapy and wellness services on Merrick Road. Serving South Shore communities. Book today.',
    headline: 'Therapy and wellness on the South Shore',
    aboutArea: 'Our Massapequa location serves the South Shore communities including Amityville, Seaford, and Wantagh. Located on Merrick Road, our expanded space includes two suites for therapy and wellness services.',
    parking: 'Free parking is available in the building lot directly in front of our entrance. Handicap accessible parking spaces are available.',
    services: {
      therapy: ['Individual therapy', 'Couples therapy', 'Family therapy', 'Child and teen therapy', 'Trauma therapy', 'EMDR'],
      wellness: ['Massage therapy', 'Acupuncture', 'Skincare and facials', 'HydraFacial', 'Laser treatments'],
    },
    hours: [
      { days: 'Monday through Friday', hours: '9:00 AM to 6:00 PM' },
      { days: 'Saturday', hours: '10:00 AM to 4:00 PM' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    nearbyLandmarks: ['Massapequa Preserve', 'Sunrise Mall', 'Bar Beach'],
  },
  'smithtown': {
    name: 'Smithtown',
    slug: 'smithtown',
    address: '496 Smithtown Bypass, Suite 203 & Suite 204',
    city: 'Smithtown',
    state: 'NY',
    zip: '11787',
    phone: '+1-631-371-3825',
    metaDescription: 'Pathways Within Smithtown provides therapy and wellness services in Suffolk County. Convenient Smithtown Bypass location. Schedule your visit.',
    headline: 'Therapy and wellness in central Suffolk',
    aboutArea: 'Our Smithtown location serves central Suffolk County including Hauppauge, Commack, and Nesconset. Located on Smithtown Bypass with easy access from Route 347 and the Long Island Expressway.',
    parking: 'Ample free parking is available in the building lot. Our office is located on the second floor with elevator access.',
    services: {
      therapy: ['Individual therapy', 'Couples therapy', 'Family therapy', 'Teen therapy', 'EMDR', 'Somatic therapy', 'IFS therapy'],
      wellness: ['Massage therapy', 'Acupuncture', 'Energy work', 'IV vitamin infusion', 'Cryotherapy'],
    },
    hours: [
      { days: 'Monday through Friday', hours: '9:00 AM to 6:00 PM' },
      { days: 'Saturday', hours: '10:00 AM to 4:00 PM' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    nearbyLandmarks: ['Smithtown Bull statue', 'Blydenburgh County Park', 'Smith Haven Mall'],
  },
  'rockville-centre': {
    name: 'Rockville Centre',
    slug: 'rockville-centre',
    address: '53 N Park Ave, Suite 203',
    city: 'Rockville Centre',
    state: 'NY',
    zip: '11570',
    phone: '+1-631-371-3825',
    metaDescription: 'Pathways Within Rockville Centre offers therapy and wellness services in southwestern Nassau County. N Park Ave location near LIRR.',
    headline: 'Therapy and wellness in southwestern Nassau',
    aboutArea: 'Our Rockville Centre location serves southwestern Nassau County including Lynbrook, Oceanside, and Baldwin. Located on North Park Avenue, just steps from the village center and LIRR station.',
    parking: 'Metered parking is available on North Park Avenue. Municipal parking lots are located within a short walk. The building has a dedicated lot for patients.',
    publicTransit: 'The Rockville Centre LIRR station is a 2 minute walk from our office, providing easy access from Long Beach, Valley Stream, and Penn Station.',
    services: {
      therapy: ['Individual therapy', 'Couples therapy', 'Trauma therapy', 'EMDR', 'Hypnotherapy'],
      wellness: ['Massage therapy', 'Skincare and facials', 'Injectables'],
    },
    hours: [
      { days: 'Monday through Friday', hours: '9:00 AM to 6:00 PM' },
      { days: 'Saturday', hours: '10:00 AM to 4:00 PM' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    nearbyLandmarks: ['Rockville Centre LIRR Station', 'Mill River', 'Sunrise Highway shopping'],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const location = locations[slug]
  
  if (!location) return { title: 'Location not found' }
  
  return {
    title: `${location.name} office`,
    description: location.metaDescription,
    openGraph: {
      title: `Pathways Within ${location.name} | Therapy & Wellness`,
      description: location.metaDescription,
    },
  }
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params
  const location = locations[slug]
  
  if (!location) notFound()

  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: location.name, url: `/locations/${slug}` },
  ], siteUrl)

  const clinicSchema = createMedicalClinicSchema({
    name: `Pathways Within ${location.name}`,
    description: `Therapy and wellness services in ${location.name}, Long Island`,
    url: `${siteUrl}/locations/${slug}`,
    telephone: location.phone,
    address: {
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.zip,
    },
    openingHours: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    medicalSpecialty: ['Psychology', 'Psychiatry', 'Integrative Medicine'],
    availableService: [...location.services.therapy, ...location.services.wellness],
  })

  return (
    <main>
      <JsonLd data={[breadcrumbs, clinicSchema]} />
      
      <PageHero
        eyebrow={`${location.name} office`}
        headline={location.headline}
        subheadline={`Serving ${location.city} and surrounding communities`}
        body={location.aboutArea}
        site="main"
      />

      {/* Quick Info */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))]" aria-hidden="true" />
              <address className="not-italic text-[rgb(var(--color-navy))]">
                {location.address}<br />
                {location.city}, {location.state} {location.zip}
              </address>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))]" aria-hidden="true" />
              <a href={`tel:${location.phone}`} className="text-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-green))]">
                (631) 371 3825
              </a>
            </div>
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(`${location.address}, ${location.city}, ${location.state} ${location.zip}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-primary"
            >
              <span className="btn-text">Get directions</span>
              <span className="btn-arrow"><ArrowRight aria-hidden="true" /></span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <h2 className="mb-8">Services at this location</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-[rgb(var(--border))]/50 p-6">
              <h3 className="mb-4 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>Therapy services</h3>
              <ul className="space-y-2">
                {location.services.therapy.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-sm text-[rgb(var(--color-text-light))]">
                    <Check className="h-4 w-4 text-[rgb(var(--color-green))]" aria-hidden="true" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-[rgb(var(--border))]/50 p-6">
              <h3 className="mb-4 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>Wellness services</h3>
              <ul className="space-y-2">
                {location.services.wellness.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-sm text-[rgb(var(--color-text-light))]">
                    <Check className="h-4 w-4 text-[rgb(var(--color-green))]" aria-hidden="true" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Telehealth Note */}
          <div className="mt-8 flex items-center gap-3 rounded-lg bg-[rgb(var(--color-green))]/10 p-4">
            <Video className="h-5 w-5 text-[rgb(var(--color-green))]" aria-hidden="true" />
            <p className="text-sm text-[rgb(var(--color-navy))]">
              <span style={{ fontWeight: 500 }}>Telehealth also available</span> for therapy clients in NY, NJ, NC, and FL
            </p>
          </div>
        </div>
      </section>

      {/* Hours and Parking */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site section">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-[rgb(var(--color-green))]" aria-hidden="true" />
                <h2>Office hours</h2>
              </div>
              <div className="rounded-lg bg-white p-6">
                <dl className="space-y-3">
                  {location.hours.map((item) => (
                    <div key={item.days} className="flex justify-between text-sm">
                      <dt className="text-[rgb(var(--color-text-light))]">{item.days}</dt>
                      <dd className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{item.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Car className="h-5 w-5 text-[rgb(var(--color-green))]" aria-hidden="true" />
                <h2>Getting here</h2>
              </div>
              <div className="space-y-4 rounded-lg bg-white p-6">
                <div>
                  <h3 className="mb-2 text-sm" style={{ fontWeight: 500 }}>Parking</h3>
                  <p className="text-sm text-[rgb(var(--color-text-light))]">{location.parking}</p>
                </div>
                {location.publicTransit && (
                  <div>
                    <h3 className="mb-2 text-sm" style={{ fontWeight: 500 }}>Public transit</h3>
                    <p className="text-sm text-[rgb(var(--color-text-light))]">{location.publicTransit}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section-sm">
          <p className="text-center text-sm text-[rgb(var(--color-text-light))]">
            <span style={{ fontWeight: 500 }}>Nearby landmarks:</span>{' '}
            {location.nearbyLandmarks.join(' • ')}
          </p>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="border-t border-[rgb(var(--border))]/50">
        <div className="img-placeholder aspect-[21/9]" aria-label={`Map of ${location.name} office location`} />
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">Ready to visit our {location.name} office?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Schedule your first appointment and begin your journey to wellness.
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
