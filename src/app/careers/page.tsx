import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { ResourcesSection } from '@/components/sections/resources-section'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Careers | Pathways Within - Wisdom and Wellness Collaborative',
  description: 'Join the team at Pathways Within - Wisdom and Wellness Collaborative. We are hiring licensed therapists, wellness providers, and support staff across Long Island.',
  alternates: { canonical: `${SITE_URL}/careers` },
  openGraph: { title: 'Careers | Pathways Within', url: `${SITE_URL}/careers` },
}

const openings = [
  {
    title: 'Licensed Clinical Social Worker (LCSW)',
    department: 'Mental Health',
    type: 'Full-Time or Part-Time',
    locations: ['Garden City', 'Smithtown', 'Massapequa'],
    description:
      'We are seeking licensed clinicians to join our growing therapy team. Ideal candidates have experience in trauma-informed care and are passionate about integrated, holistic treatment models.',
    requirements: [
      'LCSW, LMHC, or LMFT — New York State licensed',
      'Minimum 2 years post-licensure clinical experience',
      'Experience with trauma, anxiety, or mood disorders preferred',
      'Collaborative mindset and commitment to integrated care',
    ],
  },
  {
    title: 'Licensed Marriage and Family Therapist (LMFT)',
    department: 'Mental Health',
    type: 'Part-Time',
    locations: ['Port Jefferson', 'Rockville Centre'],
    description:
      'Join our team as a couples and family therapist. We are looking for a clinician with Gottman or EFT training who thrives in a collaborative, multi-disciplinary environment.',
    requirements: [
      'LMFT — New York State licensed',
      'Experience with couples and family modalities',
      'Gottman Method or EFT training a plus',
      'Strong communication and documentation skills',
    ],
  },
  {
    title: 'Certified Massage Therapist',
    department: 'Wellness',
    type: 'Part-Time',
    locations: ['Garden City', 'Massapequa'],
    description:
      'We are seeking a skilled massage therapist to join our wellness team. You will work alongside mental health clinicians and other wellness providers in a truly integrated care environment.',
    requirements: [
      'Current New York State massage therapy license',
      'Training in Swedish, deep tissue, and therapeutic massage',
      'Interest in collaborative care and integrative health',
      'Strong client communication skills',
    ],
  },
  {
    title: 'Front Desk — Welcome Team',
    department: 'Operations',
    type: 'Full-Time',
    locations: ['Smithtown', 'Massapequa'],
    description:
      'Our Welcome Team is the first voice clients hear. We are looking for warm, organized, and empathetic individuals who want to make a meaningful difference from the very first interaction.',
    requirements: [
      'Previous experience in healthcare or wellness front desk preferred',
      'Exceptional interpersonal and phone communication skills',
      'Familiarity with scheduling software (SimplePractice a plus)',
      'Ability to manage multiple tasks with professionalism and care',
    ],
  },
]

const perks = [
  'Collaborative, multi-disciplinary team environment',
  'Competitive compensation with flexible scheduling',
  'Clinical supervision available for pre-licensed clinicians',
  'Continuing education support',
  'Six Long Island locations with in-person and telehealth options',
  'A culture built on compassion, integrity, and whole-person care',
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        headline="Join the Collaborative"
        body="Pathways Within - Wisdom and Wellness Collaborative is growing. We are looking for licensed clinicians, wellness providers, and support staff who share our commitment to integrated, whole-person care."
        ctaText="VIEW OPEN POSITIONS"
        ctaHref="#openings"
        theme="navy"
      />

      {/* Culture */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="animate-fade-left">
              <p className="eyebrow mb-4">Why Work Here</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">A Different Kind of Practice</h2>
              <p className="mb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                At Pathways Within, we believe the clinician experience matters as much as the client experience. When providers feel supported, resourced, and connected to their colleagues, that energy flows directly into the care they offer.
              </p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                We have built a collaborative model — not a group practice where clinicians work in silos. Your therapist colleagues, wellness providers, and administrative team are genuinely working together.
              </p>
            </div>

            <div className="animate-fade-right bg-[rgb(var(--color-linen))] p-8">
              <p className="eyebrow mb-6">What We Offer</p>
              <ul className="space-y-4">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))]" />
                    <span className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.6 }}>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-12">
            <p className="eyebrow mb-4">Open Positions</p>
            <h2 className="text-[rgb(var(--color-navy))]">Current Openings</h2>
          </div>

          <div className="animate-stagger space-y-6">
            {openings.map((job) => (
              <div key={job.title} className="animate-on-scroll bg-white p-8">
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p
                      className="mb-1 text-xs uppercase tracking-wider text-[rgb(var(--color-green))]"
                      style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600 }}
                    >
                      {job.department} — {job.type}
                    </p>
                    <h3 className="text-xl text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600 }}>
                      {job.title}
                    </h3>
                    <p className="mt-1 text-sm text-[rgb(var(--color-text-light))]">
                      {job.locations.join(' · ')}
                    </p>
                  </div>
                  <Link
                    href={`/contact?position=${encodeURIComponent(job.title)}`}
                    className="btn-pill btn-pill-primary"
                  >
                    <span className="btn-text">APPLY NOW</span>
                    <span className="btn-arrow"><ArrowRight /></span>
                  </Link>
                </div>

                <p className="mb-5 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  {job.description}
                </p>

                <div>
                  <p
                    className="mb-3 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--color-navy))]"
                    style={{ fontFamily: 'var(--font-raleway)' }}
                  >
                    Requirements
                  </p>
                  <ul className="space-y-2">
                    {job.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-3 text-sm text-[rgb(var(--color-text-light))]">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[rgb(var(--color-green))]" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* General application */}
          <div className="mt-12 border border-[rgb(var(--border))]/50 bg-white p-8 text-center">
            <p className="eyebrow mb-3">Don&apos;t See Your Role?</p>
            <h3 className="mb-4 text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600 }}>
              Send a General Application
            </h3>
            <p className="mx-auto mb-6 max-w-lg text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              We are always interested in connecting with talented clinicians and wellness providers. Send us your resume and a brief note about your background.
            </p>
            <Link href="/contact?subject=General+Application" className="btn-pill btn-pill-secondary">
              <span className="btn-text">GET IN TOUCH</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>

      <ResourcesSection />

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-white">Ready to Join Us?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>
              We review all applications personally and will reach out within 5 business days.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-pill btn-pill-green">
                <span className="btn-text">APPLY NOW</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </Link>
              <Link href="/about" className="btn-pill btn-pill-white">
                <span className="btn-text">LEARN ABOUT US</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
