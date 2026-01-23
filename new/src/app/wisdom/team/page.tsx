import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Therapy Team',
  description: 'Meet our therapy team at Pathways Within. Licensed clinical social workers, mental health counselors, and marriage and family therapists on Long Island.',
  alternates: { canonical: `${SITE_URL}/wisdom/team` },
  openGraph: { title: 'Therapy Team | Pathways Within', url: `${SITE_URL}/wisdom/team` },
}

const therapyTeam = [
  {
    name: 'Rachel Lessard',
    title: 'LCSW-R, Founder & Clinical Director',
    bio: 'Rachel founded Pathways Within with a vision of integrated mental health and wellness care. She specializes in trauma, EMDR, and energy work.',
    credentials: ['Licensed Clinical Social Worker', 'EMDR Certified', 'Integrative Energy Therapy Practitioner'],
  },
  {
    name: 'Clinical Team Member',
    title: 'LMHC',
    bio: 'Specializes in anxiety, depression, and life transitions. Uses cognitive behavioral and mindfulness-based approaches.',
    credentials: ['Licensed Mental Health Counselor', 'Certified in CBT'],
  },
  {
    name: 'Clinical Team Member',
    title: 'LCSW',
    bio: 'Works with children, teens, and families. Trained in play therapy and family systems approaches.',
    credentials: ['Licensed Clinical Social Worker', 'Registered Play Therapist'],
  },
  {
    name: 'Clinical Team Member',
    title: 'LMFT',
    bio: 'Specializes in couples and family therapy. Uses Gottman Method and Emotionally Focused Therapy.',
    credentials: ['Licensed Marriage and Family Therapist', 'Gottman Level 2 Trained'],
  },
]

export default function TherapyTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        headline="Meet our therapists"
        body="Our clinical team includes licensed clinical social workers, licensed mental health counselors, and licensed marriage and family therapists. Each clinician works with special populations based on their expertise and passions."
        image="/images/hero/therapy-team-hero.jpg"
        imageAlt="Therapy team at Pathways Within"
      />

      {/* Team Grid */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="grid gap-8 md:grid-cols-2">
            {therapyTeam.map((member) => (
              <div key={member.name} className="rounded-lg border border-[rgb(var(--border))]/50 p-8">
                <div className="mb-6 flex items-start gap-6">
                  <div className="aspect-square w-24 flex-shrink-0 overflow-hidden rounded-full bg-[rgb(var(--color-placeholder))]" />
                  <div>
                    <h3 className="font-semibold text-[rgb(var(--color-navy))]">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[rgb(var(--color-green))]">{member.title}</p>
                  </div>
                </div>
                <p className="mb-4 text-[rgb(var(--color-text-light))]">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.credentials.map((credential) => (
                    <span
                      key={credential}
                      className="rounded-full bg-[rgb(var(--color-linen))] px-3 py-1 text-xs text-[rgb(var(--color-navy))]"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
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
                <h3 className="mb-3 font-semibold text-[rgb(var(--color-navy))]">Licensed & Experienced</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  All our therapists are fully licensed and have years of clinical experience.
                </p>
              </div>
              <div>
                <h3 className="mb-3 font-semibold text-[rgb(var(--color-navy))]">Specialized Training</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  Our team holds certifications in EMDR, trauma therapy, play therapy, and more.
                </p>
              </div>
              <div>
                <h3 className="mb-3 font-semibold text-[rgb(var(--color-navy))]">Collaborative Approach</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  We work together with our wellness team to provide integrated care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Insurance</p>
            <h2 className="mb-6 text-[rgb(var(--color-navy))]">We accept most major insurance</h2>
            <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              We are in-network with Aetna, Cigna, Optum, UHC, Oxford, Oscar, Medicare, Humana, NYSHIP, MVP, and more. We also accept VA Community Care benefits for veterans.
            </p>
            <Link href="/contact" className="btn-pill btn-pill-secondary">
              <span className="btn-text">Verify your coverage</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">Ready to find your therapist?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Schedule a consultation and we will match you with the right clinician for your needs.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-pill btn-pill-green">
              <span className="btn-text">Schedule consultation</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
            <Link href="/wisdom/services" className="btn-pill btn-pill-white">
              <span className="btn-text">View services</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
