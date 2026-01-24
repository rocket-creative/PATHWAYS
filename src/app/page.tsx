import { Metadata } from 'next'
import { HeroSection, CTASection, TestimonialSection } from '@/components/sections'
import { SITE_URL, SITE_NAME } from '@/lib/site-config'
import { 
  getOrganizationSchema, 
  getWebsiteSchema, 
  createOpenGraph, 
  createTwitterCard, 
  standardRobots 
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Therapy and Wellness on Long Island | Pathways Within',
  description: 'Integrated mental health therapy and holistic wellness at Pathways Within. Individual, couples, and trauma therapy plus massage, acupuncture, and more at five Long Island locations.',
  alternates: { canonical: SITE_URL },
  openGraph: createOpenGraph({
    title: 'Therapy and Wellness on Long Island | Pathways Within',
    description: 'Integrated mental health therapy and holistic wellness at Pathways Within. Individual, couples, and trauma therapy plus massage, acupuncture, and more.',
    url: SITE_URL,
  }),
  twitter: createTwitterCard({
    title: 'Therapy and Wellness on Long Island | Pathways Within',
    description: 'Integrated mental health therapy and holistic wellness at Pathways Within. Individual, couples, and trauma therapy plus massage, acupuncture, and more.',
  }),
  robots: standardRobots,
}

export default function HomePage() {
  const organizationSchema = getOrganizationSchema()
  const websiteSchema = getWebsiteSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HeroSection />
      <ServicesPreview />
      <ApproachSection />
      <TestimonialSection 
        quote="Pathways Within helped me find balance in my life. The combination of therapy and wellness services was exactly what I needed."
        author="Sarah M."
        role="Client since 2022"
      />
      <CTASection />
    </>
  )
}

// Inline components for homepage

function ServicesPreview() {
  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
      <div className="container-site section">
        <div className="mb-12 text-center">
          <p className="eyebrow mb-4">Our Services</p>
          <h2>Wisdom and Wellness</h2>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Therapy */}
          <div className="rounded-lg border border-[rgb(var(--border))]/50 bg-white p-8 lg:p-10">
            <p className="eyebrow mb-4">Wisdom</p>
            <h3 className="mb-4 text-[rgb(var(--color-navy))]">Therapy Services</h3>
            <p className="mb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              Individual, couples, child, and teen therapy. Trauma, EMDR, somatic therapy, and more with licensed clinicians.
            </p>
            <a 
              href="/wisdom/services" 
              className="text-[rgb(var(--color-green))] hover:underline"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 600 }}
            >
              Explore therapy services →
            </a>
          </div>
          
          {/* Wellness */}
          <div className="rounded-lg border border-[rgb(var(--border))]/50 bg-white p-8 lg:p-10">
            <p className="eyebrow mb-4">Wellness</p>
            <h3 className="mb-4 text-[rgb(var(--color-navy))]">Wellness Services</h3>
            <p className="mb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              Massage, acupuncture, skincare, injectables, IV vitamin therapy, and more for your whole body wellness.
            </p>
            <a 
              href="/wellness/services" 
              className="text-[rgb(var(--color-green))] hover:underline"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 600 }}
            >
              Explore wellness services →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ApproachSection() {
  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-white">
      <div className="container-site section">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">360° Approach</p>
          <h2 className="mb-8 text-[rgb(var(--color-navy))]">How we care for you</h2>
          <p className="text-lg text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
            We take a 360 degree approach to healing, looking at both your mental and physical wellbeing. During your intake, we explore what brings you in, how long it has been going on, and how it affects areas like sleep, stress, digestion, energy, pain, and relationships.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-linen))]">
              <span className="text-2xl font-normal text-[rgb(var(--color-navy))]">1</span>
            </div>
            <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 400 }}>Intake Conversation</h3>
            <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
              We explore what brings you in and how it affects your daily life, discussing sleep, stress, energy, and what you have already tried.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-linen))]">
              <span className="text-2xl font-normal text-[rgb(var(--color-navy))]">2</span>
            </div>
            <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 400 }}>Personalized Plan</h3>
            <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
              Based on our conversation, we may suggest therapy, wellness services, or both—always optional and offered only when truly supportive.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-linen))]">
              <span className="text-2xl font-normal text-[rgb(var(--color-navy))]">3</span>
            </div>
            <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 400 }}>Ongoing Support</h3>
            <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
              We help you schedule next steps and coordinate with your care team to ensure thoughtful, ongoing support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
