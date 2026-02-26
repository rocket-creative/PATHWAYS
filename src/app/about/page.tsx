import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, Heart, Sparkles, Shield } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { ResourcesSection } from '@/components/sections/resources-section'
import { managementTeam, welcomeTeam } from '@/data/about-team'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'About Us | Pathways Within - Wisdom and Wellness Collaborative',
  description: 'Learn about Pathways Within - Wisdom and Wellness Collaborative. Our vision, our founder Rachel Goldstein, our 360° approach to holistic healing, and our team.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: { title: 'About Us | Pathways Within', url: `${SITE_URL}/about` },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        headline="Wisdom and Wellness Collaborative"
        body="Pathways Within - Wisdom and Wellness Collaborative is built on one conviction: that the mind, body, and spirit cannot be treated in isolation. We built a space where they are healed together."
        ctaText="GET STARTED"
        ctaHref="/client-intake"
        ctaSecondaryText="MEET OUR PROVIDERS"
        ctaSecondaryHref="/providers"
      />

      {/* Vision & Purpose */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div className="animate-fade-left lg:col-span-5">
              <p className="eyebrow mb-4">Vision & Purpose</p>
              <h2 className="text-[rgb(var(--color-navy))]">Why We Exist</h2>
            </div>
            <div className="animate-fade-right space-y-5 lg:col-span-6 lg:col-start-7">
              <p className="text-lg text-[rgb(var(--color-navy))]" style={{ lineHeight: 1.8 }}>
                Have you ever experienced an event that completely changed your view of the world? Do you have negative thoughts or overwhelming emotions that prevent you from living the life you want?
              </p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                We started the Collaborative because we saw the gaps in traditional care — therapy in one building, wellness in another, no conversation between providers. Healing shouldn&apos;t require you to navigate a fragmented system.
              </p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Pathways Within brings licensed clinicians, holistic wellness providers, and medical professionals under one roof — coordinating care, sharing insights, and treating the whole person. That is the Collaborative model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-navy))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
            {/* Avatar placeholder with labyrinth */}
            <div className="lg:col-span-3">
              <div className="relative">
                <div className="aspect-square w-full max-w-xs bg-[rgb(var(--color-navy))]/50 border border-white/10 flex items-center justify-center">
                  <span className="text-6xl font-semibold text-white/20" style={{ fontFamily: 'var(--font-raleway)' }}>
                    RG
                  </span>
                </div>
                {/* Labyrinth symbol — visible, reinforces logo */}
                <div className="absolute -bottom-4 -right-4" aria-hidden="true">
                  <svg viewBox="0 0 100 100" className="h-24 w-24 text-[rgb(var(--color-green))]/50" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M 50 5 L 50 10 A 40 40 0 0 1 10 50 L 5 50 A 45 45 0 0 0 50 5 M 50 20 L 50 25 A 25 25 0 0 0 25 50 L 20 50 A 30 30 0 0 1 50 20 M 50 35 L 50 40 A 10 10 0 0 1 40 50 L 35 50 A 15 15 0 0 0 50 35 M 50 47 L 50 50" fill="none" />
                    <circle cx="50" cy="50" r="2.5" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-5 lg:col-span-8 lg:col-start-5">
              <p className="eyebrow text-[rgb(var(--color-green))]">Founder & CEO</p>
              <h2 className="text-white">Rachel Goldstein, LCSW</h2>
              <p className="text-xl text-white/75" style={{ lineHeight: 1.7, fontFamily: 'var(--font-clarendon), serif' }}>
                &ldquo;The labyrinth is not a maze. There are no dead ends. Every path leads inward — and eventually, out again.&rdquo;
              </p>
              <p className="text-white/60" style={{ lineHeight: 1.8 }}>
                Rachel Goldstein founded Pathways Within with a vision shaped by years of clinical practice and a deep belief that healing is non-linear. Like the labyrinth at the center of our logo — a symbol of the inward journey, ancient and universal — Rachel built the Collaborative as a space where clients can walk their own path, at their own pace, with the right support alongside them.
              </p>
              <p className="text-white/60" style={{ lineHeight: 1.8 }}>
                A Licensed Clinical Social Worker with specialization in trauma-informed care, EMDR, and somatic approaches, Rachel leads the Collaborative not just as its founder and CEO, but as an active clinician. Her conviction that mental health and physical wellbeing are inseparable is woven into every aspect of how the Collaborative operates.
              </p>
              <p className="text-white/60" style={{ lineHeight: 1.8 }}>
                Under Rachel&apos;s leadership, Pathways Within has grown to six Long Island locations — each designed to offer the full spectrum of the 360° model. She continues to advocate for integrated care as a standard, not a specialty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 360° Approach */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="animate-on-scroll mb-16 text-center">
            <p className="eyebrow mb-4">Our Approach</p>
            <h2 className="text-[rgb(var(--color-navy))]">The 360° Approach to Holistic Healing</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              We take a comprehensive view of healing — looking at both your mental and physical wellbeing simultaneously. During your intake, we explore what brings you in, how long it has been going on, and how it affects sleep, stress, digestion, energy, pain, and relationships.
            </p>
          </div>

          <div className="animate-stagger grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Heart,
                title: 'Integrated Care',
                body: 'Your therapy and wellness providers are in the same building and in communication. When your whole care team is connected, healing accelerates.',
              },
              {
                icon: Users,
                title: 'Personalized Plans',
                body: 'No two journeys look alike. We work with you to build a care plan that reflects your unique goals, timeline, and preferences.',
              },
              {
                icon: Sparkles,
                title: 'Whole Person',
                body: 'We address mind, body, and spirit — not just symptoms. Physical and emotional wellbeing are treated as equally important.',
              },
              {
                icon: Shield,
                title: 'Compassionate Space',
                body: 'Judgment-free, culturally competent, and collaborative. We create an environment where honesty and safety are non-negotiable.',
              },
            ].map((item) => (
              <div key={item.title} className="animate-on-scroll bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center bg-[rgb(var(--color-green))]/10">
                  <item.icon className="h-5 w-5 text-[rgb(var(--color-green))]" />
                </div>
                <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600, fontSize: '1rem' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section id="leadership" className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="animate-on-scroll mb-12">
            <p className="eyebrow mb-4">Leadership</p>
            <h2 className="text-[rgb(var(--color-navy))]">Management Team</h2>
            <p className="mt-4 max-w-xl text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              Our management team brings clinical expertise and operational leadership to every aspect of the Collaborative. Full provider bios available in the provider directory.
            </p>
          </div>

          <div className="animate-stagger grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {managementTeam.map((member) => {
              const cardClassName = `animate-on-scroll group border border-[rgb(var(--border))]/50 bg-white transition-all hover:border-[rgb(var(--color-green))]/40 ${member.providerId ? 'cursor-pointer hover:shadow-md' : ''}`
              const cardContent = (
                <div className="p-6">
                  <div className="mb-4 flex h-20 w-20 overflow-hidden bg-[rgb(var(--color-navy))]">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-raleway)' }}>
                        {member.name.split(' ').slice(0, 2).map((n) => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                    {member.role}
                  </p>
                  <h3 className="mt-1 text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600, fontSize: '1rem' }}>
                    {member.name}, {member.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.6 }}>
                    {member.shortBio.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[rgb(var(--color-green))]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {member.providerId && (
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--color-green))] group-hover:underline">
                      Full bio
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </div>
              )
              return member.providerId ? (
                <Link key={`${member.name}-${member.role}`} href="/providers" className={cardClassName}>
                  {cardContent}
                </Link>
              ) : (
                <div key={`${member.name}-${member.role}`} className={cardClassName}>
                  {cardContent}
                </div>
              )
            })}
          </div>

          <div className="mt-10">
            <Link href="/providers" className="btn-pill btn-pill-secondary">
              <span className="btn-text">VIEW ALL PROVIDERS</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Team */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-12">
            <p className="eyebrow mb-4">Front Desk & Support</p>
            <h2 className="text-[rgb(var(--color-navy))]">Welcome Team</h2>
            <p className="mt-4 max-w-xl text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              Our Welcome Team is your first point of contact. They coordinate scheduling, answer questions, and ensure your experience from the very first call is warm and seamless.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {welcomeTeam.map((member, i) => (
              <div key={i} className="bg-white p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden bg-[rgb(var(--color-placeholder))]">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-lg font-semibold text-[rgb(var(--color-text-light))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                      {member.name.split(' ').slice(0, 2).map((n) => n[0]).join('')}
                    </span>
                  )}
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                  {member.role}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)' }}>
                  {member.name}
                </h3>
                <p className="mt-2 text-xs text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.6 }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-4">Our Values</p>
            <h2 className="text-[rgb(var(--color-navy))]">What We Believe</h2>
          </div>

          <div className="grid gap-px overflow-hidden bg-[rgb(var(--border))]/30 md:grid-cols-2">
            {[
              { title: 'The Whole Person Matters', body: 'Your mind, body, and spirit are connected. True wellbeing comes from caring for all of yourself.' },
              { title: 'You Deserve Compassion', body: 'We create judgment-free spaces where you can feel safe to be yourself. There is no preachy advice or pressure here.' },
              { title: 'Healing Is Personal', body: 'There is no one-size-fits-all approach. We tailor every experience to your unique needs and goals.' },
              { title: 'Connection Heals', body: 'Whether working with a therapist or wellness provider, the relationship is part of the healing. We are here to walk alongside you.' },
            ].map((v) => (
              <div key={v.title} className="bg-white p-10">
                <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600, fontSize: '1rem' }}>
                  {v.title}
                </h3>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResourcesSection />

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-white">Ready to Begin?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>
              We look forward to meeting you. Your journey starts with a conversation.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/client-intake" className="btn-pill btn-pill-green">
                <span className="btn-text">GET STARTED TODAY</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </Link>
              <Link href="/providers" className="btn-pill btn-pill-white">
                <span className="btn-text">MEET OUR PROVIDERS</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
