import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Wellness Team',
  description: 'Meet our wellness team at Pathways Within. Certified massage therapists, licensed estheticians, nurses, and energy work practitioners on Long Island.',
  alternates: { canonical: `${SITE_URL}/wellness/team` },
  openGraph: { title: 'Wellness Team | Pathways Within', url: `${SITE_URL}/wellness/team` },
}

const wellnessTeam = [
  {
    name: 'Christine Cervo',
    title: 'Certified Massage Therapist',
    bio: 'Christine brings years of experience in therapeutic massage, specializing in deep tissue, Swedish, and sports massage techniques.',
  },
  {
    name: 'Nicole Imbasciani',
    title: 'Medical Director',
    bio: 'Nicole oversees our medical wellness services and brings expertise in aesthetic treatments and patient care.',
  },
  {
    name: 'Evelina Abayev',
    title: 'Registered Nurse',
    bio: 'Evelina provides IV vitamin therapy and injectable treatments with precision and care.',
  },
  {
    name: 'Angela Gestone',
    title: 'Licensed Esthetician',
    bio: 'Angela specializes in advanced skincare treatments including HydraFacials, microneedling, and customized facials.',
  },
]

export default function WellnessTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        headline="Meet our wellness providers"
        body="Our wellness team includes certified massage therapists, licensed estheticians, registered nurses, and energy work practitioners. Each provider brings specialized training and a commitment to your wellbeing."
        image="/images/hero/wellness-team-hero.jpg"
        imageAlt="Wellness team at Pathways Within"
      />

      {/* Team Grid */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {wellnessTeam.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto mb-4 aspect-square w-full max-w-[200px] overflow-hidden rounded-full bg-[rgb(var(--color-placeholder))]" />
                <h3 className="mb-1 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>
                  {member.name}
                </h3>
                <p className="mb-3 text-sm text-[rgb(var(--color-green))]">{member.title}</p>
                <p className="text-sm text-[rgb(var(--color-text-light))]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Team */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Why Choose Our Team</p>
            <h2 className="mb-8 text-[rgb(var(--color-navy))]">Expert care you can trust</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>Certified & Licensed</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  All our providers hold current certifications and licenses in their respective fields.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>Continuing Education</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  Our team stays current with the latest techniques and treatments through ongoing training.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>Collaborative Care</h3>
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
