import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { PageHero, JsonLd, createBreadcrumbSchema, LOCATIONS } from '@pathways/ui'
import { ContactForm } from './contact-form'

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Contact Pathways Within to schedule an appointment for therapy or wellness services. Call (631) 371 3825 or use our contact form.',
  openGraph: {
    title: 'Contact Us | Pathways Within',
    description: 'Schedule an appointment for therapy or wellness services on Long Island.',
  },
}

const siteUrl = process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000'

export default function ContactPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ], siteUrl)

  return (
    <main>
      <JsonLd data={breadcrumbs} />
      
      <PageHero
        eyebrow="Contact us"
        headline="Let's start your journey"
        subheadline="We're here to help"
        body="Whether you have questions about our services or are ready to schedule your first appointment, we are here to support you every step of the way."
        site="main"
        layout="single"
        imageClass="img-placeholder-dark"
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="grid gap-16 lg:grid-cols-2">
            
            {/* Contact Info */}
            <div>
              <h2 className="mb-8">Get in touch</h2>
              
              <div className="mb-10 space-y-6">
                <a 
                  href="tel:+16313713825"
                  className="flex items-start gap-4 rounded-lg border border-[rgb(var(--border))]/50 p-4 transition-all hover:border-[rgb(var(--color-green))] hover:bg-[rgb(var(--color-cream))]"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                    <Phone className="h-5 w-5 text-[rgb(var(--color-green))]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm" style={{ fontWeight: 500 }}>Phone</h3>
                    <p className="text-[rgb(var(--color-navy))]">(631) 371 3825</p>
                  </div>
                </a>

                <a 
                  href="mailto:Welcome@pathwayswithin.com"
                  className="flex items-start gap-4 rounded-lg border border-[rgb(var(--border))]/50 p-4 transition-all hover:border-[rgb(var(--color-green))] hover:bg-[rgb(var(--color-cream))]"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                    <Mail className="h-5 w-5 text-[rgb(var(--color-green))]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm" style={{ fontWeight: 500 }}>Email</h3>
                    <p className="text-[rgb(var(--color-navy))]">Welcome@pathwayswithin.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-lg border border-[rgb(var(--border))]/50 p-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                    <Clock className="h-5 w-5 text-[rgb(var(--color-green))]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm" style={{ fontWeight: 500 }}>Hours</h3>
                    <p className="text-sm text-[rgb(var(--color-text-light))]">
                      Monday through Friday: 9am to 6pm<br />
                      Saturday: 10am to 4pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Locations Quick List */}
              <div>
                <h3 className="mb-4" style={{ fontWeight: 500 }}>Our locations</h3>
                <div className="space-y-3">
                  {LOCATIONS.map((location) => (
                    <div key={location.name} className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[rgb(var(--color-green))]" aria-hidden="true" />
                      <div className="text-sm">
                        <p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{location.name}</p>
                        <p className="text-[rgb(var(--color-text-light))]">{location.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg bg-[rgb(var(--color-cream))] p-8 lg:p-10">
              <h2 className="mb-2">Send us a message</h2>
              <p className="mb-8 text-sm text-[rgb(var(--color-text-light))]">
                Fill out the form below and we will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Resources */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site section-sm">
          <div className="text-center">
            <h2 className="mb-4">In crisis?</h2>
            <p className="mx-auto mb-6 max-w-xl text-[rgb(var(--color-text-light))]">
              If you or someone you know is in immediate danger, please call 911. 
              For mental health crisis support, the following resources are available 24/7.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a 
                href="tel:988"
                className="btn-pill btn-pill-primary"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="btn-text">988 Crisis Lifeline</span>
              </a>
              <a 
                href="sms:741741&body=HOME"
                className="btn-pill btn-pill-secondary"
              >
                <span className="btn-text">Text HOME to 741741</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
