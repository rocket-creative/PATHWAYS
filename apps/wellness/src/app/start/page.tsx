import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, Calendar, Heart, Sparkles } from 'lucide-react'
import { PageHero, JsonLd, createBreadcrumbSchema, ServiceFinder } from '@pathways/ui'

export const metadata: Metadata = {
  title: 'Get started',
  description: 'Begin your journey with Pathways Within. Take our service finder quiz or schedule a consultation for therapy and wellness services.',
  openGraph: {
    title: 'Get Started | Pathways Within',
    description: 'Begin your journey to wellness with our personalized intake process.',
  },
}

const siteUrl = process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000'

export default function StartPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Get Started', url: '/start' },
  ], siteUrl)

  return (
    <main>
      <JsonLd data={breadcrumbs} />
      
      <PageHero
        eyebrow="Get started"
        headline="Begin your journey"
        subheadline="Your path to wellness starts here"
        body="Whether you know exactly what you need or are just beginning to explore, we are here to guide you. Our personalized intake process helps match you with the right services."
        site="main"
        imageClass="img-placeholder-organic"
      />

      {/* Service Finder Quiz */}
      <ServiceFinder site="main" />

      {/* Or Contact Directly */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <div className="text-center">
            <p className="eyebrow mb-4">Prefer to talk?</p>
            <h2 className="mb-4">Schedule a consultation</h2>
            <p className="mx-auto mb-10 max-w-xl text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              If you would rather speak with someone directly, you can call us or schedule a consultation. 
              Your first conversation is about understanding what you need.
            </p>
            
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-pill btn-pill-primary">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <span className="btn-text">Schedule online</span>
                <span className="btn-arrow"><ArrowRight aria-hidden="true" /></span>
              </Link>
              <a href="tel:+16313713825" className="btn-pill btn-pill-secondary">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="btn-text">Call (631) 371 3825</span>
                <span className="btn-arrow"><ArrowRight aria-hidden="true" /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-4">What to expect</p>
            <h2>Your first visit</h2>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  icon: Heart,
                  title: 'Comprehensive intake',
                  desc: 'We take time to understand what brings you in, how long it has been going on, and how it affects areas like sleep, stress, energy, and relationships.',
                },
                {
                  icon: Sparkles,
                  title: 'Personalized recommendations',
                  desc: 'Based on our conversation, we may suggest therapy services, wellness services, or both. Recommendations are always optional and offered only when we feel they may truly support you.',
                },
                {
                  icon: Calendar,
                  title: 'Treatment plan',
                  desc: 'We create a personalized treatment plan, help you schedule next steps, and coordinate with your care team to ensure thoughtful, ongoing support.',
                },
                {
                  icon: Phone,
                  title: 'Ongoing communication',
                  desc: 'Your journey does not end after the first visit. We stay connected, adjust your plan as needed, and celebrate your progress along the way.',
                },
              ].map((step) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                    <step.icon className="h-5 w-5 text-[rgb(var(--color-green))]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-2" style={{ fontWeight: 500 }}>{step.title}</h3>
                    <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site section-sm">
          <div className="text-center">
            <h2 className="mb-4">Insurance accepted</h2>
            <p className="mx-auto mb-6 max-w-xl text-[rgb(var(--color-text-light))]">
              We accept most major insurance plans. Out of network options and sliding scale spots are also available.
            </p>
            <Link href="/faq#insurance-and-payment" className="inline-flex items-center gap-2 text-sm text-[rgb(var(--color-green))]">
              View accepted insurance
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
