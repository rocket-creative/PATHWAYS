import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { SITE_URL } from '@/lib/site-config'
import { 
  createOpenGraph, 
  createTwitterCard, 
  standardRobots,
  createBreadcrumbSchema,
  createPersonSchema,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Wellness Providers on Long Island | Pathways Within',
  description: 'Meet our wellness team at Pathways Within. Certified massage therapists, licensed estheticians, nurses, and energy work practitioners on Long Island.',
  alternates: { canonical: `${SITE_URL}/wellness/team` },
  openGraph: createOpenGraph({
    title: 'Wellness Providers on Long Island | Pathways Within',
    description: 'Meet our wellness team at Pathways Within. Certified massage therapists, licensed estheticians, nurses, and energy work practitioners on Long Island.',
    url: `${SITE_URL}/wellness/team`,
  }),
  twitter: createTwitterCard({
    title: 'Wellness Providers on Long Island | Pathways Within',
    description: 'Meet our wellness team at Pathways Within. Certified massage therapists, licensed estheticians, nurses, and more.',
  }),
  robots: standardRobots,
}

const wellnessTeam = [
  {
    name: 'Rachel Lessard',
    title: 'Owner, LCSW-R',
    image: '/images/team/rachel-lessard.jpeg',
    bio: 'There is nothing I love more than combining various mind, body, and spirit practices to achieve ultimate wellness. I am always learning and evolving and feel that it is my life\'s purpose to do so and hold space for those along their own journeys of healing and growth.',
  },
  {
    name: 'Christine Cervo',
    title: 'Licensed Massage Therapist',
    image: '/images/team/christine-cervo.jpeg',
    bio: 'Christine is a licensed massage therapist graduate from New York College of Health Professions. During her time there she took extra classes that specialize in Aromatherapy, Reflexology, Sports Massage, and Pre-natal Massage. Christine is dedicated to helping people feel better through massage therapy.',
  },
  {
    name: 'Nicole Imbasciani',
    title: 'Medical Director, ANP-C',
    image: null,
    bio: 'Nicole has over 20 years of healthcare experience at a major medical center specializing in cardiology and critical care medicine. The preservation of health is easier than the cure of disease.',
  },
  {
    name: 'Evelina Abayev',
    title: 'Registered Nurse, Certified Injector',
    image: '/images/team/evelina-abayev.jpeg',
    bio: 'Evelina is a registered nurse for over 8 years and a certified botox and filler injector. Her goal is to help others feel confident in their skin by enhancing their natural beauty. She is constantly educating herself with the latest techniques and innovations to ensure safe and effective outcomes.',
  },
  {
    name: 'Angela Gestone',
    title: 'Licensed Esthetician & Brow Specialist',
    image: '/images/team/angela-gestone.jpeg',
    bio: 'With over a decade of hands-on experience in skincare and brow artistry, I\'ve built my career around one mission: enhancing natural beauty with precision and purpose. Since 2017, I\'ve specialized in microshading and microblading, helping clients achieve brows that stay flawless.',
  },
  {
    name: 'Gloria Saladino',
    title: 'Front Desk Manager',
    image: '/images/team/gloria-saladino.jpg',
    bio: 'As a front desk manager at Pathways Within, I\'m here to ensure every client\'s experience is welcoming, seamless and supportive. I\'m proud to be part of a team that honors whole-person wellness.',
  },
]

export default function WellnessTeamPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Wellness', url: `${SITE_URL}/wellness` },
    { name: 'Team', url: `${SITE_URL}/wellness/team` },
  ])
  
  const personSchemas = wellnessTeam
    .filter(m => m.image)
    .map(member => createPersonSchema({
      name: member.name,
      title: member.title,
      description: member.bio,
      image: member.image || undefined,
    }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {personSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHero
        eyebrow="Our Team"
        headline="Meet our wellness providers"
        body="Our wellness team includes certified massage therapists, licensed estheticians, registered nurses, and energy work practitioners. Each provider brings specialized training and a commitment to your wellbeing."
        image="/images/hero/freepik__catalog-style-portrait-blonde-white-woman-in-her-4__69759.jpeg"
        imageAlt="Wellness team at Pathways Within"
      />

      {/* Team Grid */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {wellnessTeam.map((member) => (
              <div key={member.name} className="overflow-hidden rounded-lg border border-[rgb(var(--border))]/50">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[rgb(var(--color-linen))]">
                  {member.image && (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      quality={100}
                      unoptimized
                    />
                  )}
                </div>
                <div className="p-5 text-center">
                  <h3 className="mb-1 text-[rgb(var(--color-navy))]" style={{ fontWeight: 600 }}>
                    {member.name}
                  </h3>
                  <p className="mb-3 text-sm text-[rgb(var(--color-green))]">{member.title}</p>
                  <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">About Pathways Within Wellness</p>
            <h2 className="mb-6 text-[rgb(var(--color-navy))]">A 360° approach to healing & transformation</h2>
            <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              Loving yourself is not about the way you look, but it can make a difference to feel like what you see on the outside matches the aspirations you&apos;re reaching for from within. Our team at Pathways Within Wellness is here to help you build a beautiful outside that matches your inside.
            </p>
          </div>
        </div>
      </section>

      {/* Why Our Team */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Why Choose Our Team</p>
            <h2 className="mb-8 text-[rgb(var(--color-navy))]">Expert care you can trust</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 600 }}>Certified & Licensed</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  All our providers hold current certifications and licenses in their respective fields.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 600 }}>Continuing Education</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  Our team stays current with the latest techniques and treatments through ongoing training.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 600 }}>Collaborative Care</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  We work together with our therapy team to provide truly integrated care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">Ready to book with our team?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Schedule your wellness appointment today and experience expert care.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-pill btn-pill-green">
              <span className="btn-text">Book appointment</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
            <Link href="/wellness/services" className="btn-pill btn-pill-white">
              <span className="btn-text">View services</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
