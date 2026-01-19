import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero, JsonLd, createBreadcrumbSchema } from '@pathways/ui'

export const metadata: Metadata = {
  title: 'Our team',
  description: 'Meet the licensed therapists, certified wellness practitioners, and dedicated support staff at Pathways Within.',
  openGraph: {
    title: 'Our Team | Pathways Within',
    description: 'Licensed therapists and certified wellness practitioners committed to your care.',
  },
}

const siteUrl = process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000'

// Team data would come from CMS or content files in production
const clinicians = [
  { name: 'Team Member Name', title: 'Licensed Clinical Social Worker', specialties: ['Individual Therapy', 'Trauma', 'Anxiety'] },
  { name: 'Team Member Name', title: 'Licensed Mental Health Counselor', specialties: ['Couples Therapy', 'Family Therapy'] },
  { name: 'Team Member Name', title: 'Licensed Marriage and Family Therapist', specialties: ['EMDR', 'Trauma Recovery'] },
  { name: 'Team Member Name', title: 'Licensed Clinical Social Worker', specialties: ['Child Therapy', 'Teen Therapy'] },
  { name: 'Team Member Name', title: 'Licensed Psychologist', specialties: ['Anxiety', 'Depression', 'Stress Management'] },
  { name: 'Team Member Name', title: 'Licensed Mental Health Counselor', specialties: ['Somatic Therapy', 'Mind Body Connection'] },
]

const wellnessProviders = [
  { name: 'Team Member Name', title: 'Licensed Massage Therapist', specialties: ['Deep Tissue', 'Swedish', 'Sports Massage'] },
  { name: 'Team Member Name', title: 'Licensed Acupuncturist', specialties: ['Pain Management', 'Stress Relief'] },
  { name: 'Team Member Name', title: 'Medical Aesthetician', specialties: ['HydraFacial', 'Skincare', 'Anti Aging'] },
  { name: 'Team Member Name', title: 'Nurse Practitioner', specialties: ['IV Therapy', 'Injectables'] },
  { name: 'Team Member Name', title: 'Energy Healer', specialties: ['Reiki', 'Energy Work'] },
]

const therapyDogs = [
  { name: 'Domino', title: 'Certified Therapy Dog', bio: 'A gentle presence who helps clients feel at ease during sessions.' },
  { name: 'Gypsy Sassafras', title: 'Certified Therapy Dog', bio: 'Brings comfort and joy to our Garden City location.' },
]

export default function TeamPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Our Team', url: '/team' },
  ], siteUrl)

  return (
    <main>
      <JsonLd data={breadcrumbs} />
      
      <PageHero
        eyebrow="Our team"
        headline="Experts in therapy and wellness"
        subheadline="Licensed professionals committed to your care"
        body="Our team brings decades of combined experience in mental health and integrative wellness. Every member is dedicated to supporting your journey to well being."
        site="main"
        layout="mosaic"
      />

      {/* Clinicians */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mb-12">
            <p className="eyebrow mb-4">Therapy team</p>
            <h2>Licensed clinicians</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clinicians.map((member, index) => (
              <article 
                key={index}
                className="group overflow-hidden rounded-lg border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))] transition-all hover:shadow-md"
              >
                <div className="img-placeholder aspect-[3/4]" aria-label={`Photo of ${member.name}`} />
                <div className="p-6">
                  <h3 className="mb-1 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{member.name}</h3>
                  <p className="mb-3 text-sm text-[rgb(var(--color-green))]">{member.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span 
                        key={specialty}
                        className="rounded-full bg-[rgb(var(--color-linen))] px-3 py-1 text-xs text-[rgb(var(--color-text-light))]"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Providers */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <div className="mb-12">
            <p className="eyebrow mb-4">Wellness team</p>
            <h2>Certified practitioners</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wellnessProviders.map((member, index) => (
              <article 
                key={index}
                className="group overflow-hidden rounded-lg border border-[rgb(var(--border))]/50 bg-white transition-all hover:shadow-md"
              >
                <div className="img-placeholder aspect-[3/4]" aria-label={`Photo of ${member.name}`} />
                <div className="p-6">
                  <h3 className="mb-1 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{member.name}</h3>
                  <p className="mb-3 text-sm text-[rgb(var(--color-green))]">{member.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span 
                        key={specialty}
                        className="rounded-full bg-[rgb(var(--color-linen))] px-3 py-1 text-xs text-[rgb(var(--color-text-light))]"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy Dogs */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-4">Special team members</p>
            <h2>Our therapy dogs</h2>
            <p className="mx-auto mt-4 max-w-xl text-[rgb(var(--color-text-light))]">
              Research shows that interaction with therapy animals can reduce stress, lower blood pressure, 
              and help clients feel more comfortable during sessions.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-2xl gap-8 md:grid-cols-2">
            {therapyDogs.map((dog) => (
              <article key={dog.name} className="text-center">
                <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                  <div className="img-placeholder h-full w-full" aria-label={`Photo of ${dog.name}`} />
                </div>
                <h3 className="mb-1 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{dog.name}</h3>
                <p className="mb-2 text-sm text-[rgb(var(--color-green))]">{dog.title}</p>
                <p className="text-sm text-[rgb(var(--color-text-light))]">{dog.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">Ready to meet your care team?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Schedule a consultation and we will match you with the right practitioner for your needs.
          </p>
          <Link href="/contact" className="btn-pill btn-pill-white">
            <span className="btn-text">Schedule a consultation</span>
            <span className="btn-arrow"><ArrowRight aria-hidden="true" /></span>
          </Link>
        </div>
      </section>
    </main>
  )
}
