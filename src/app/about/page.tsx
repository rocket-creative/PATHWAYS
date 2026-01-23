import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, Users, Sparkles, Shield } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Pathways Within, a Long Island collaborative offering integrated therapy and wellness services. Our 360 degree approach honors your whole self.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: { title: 'About Us | Pathways Within', url: `${SITE_URL}/about` },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        headline="Wisdom and Wellness Collaborative"
        body="At Pathways Within, we believe true healing happens when we care for the whole person. Our 360 degree approach brings together mental health therapy and holistic wellness services in one collaborative environment."
        image="/images/hero/about-hero.jpg"
        imageAlt="Diverse group representing the Pathways Within community"
        ctaText="Get Started"
        ctaHref="/start"
      />

      {/* Philosophy Section */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow mb-4">Our Philosophy</p>
              <h2 className="text-[rgb(var(--color-navy))]">The journey within</h2>
            </div>
            <div className="space-y-6">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Have you ever experienced an event that completely changed your view of the world? Do you have negative thoughts or overwhelming emotions that prevent you from living the life you want? Are you holding onto scars from the past? Is your body manifesting physical or spiritual pain?
              </p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Together we can explore your experiences to help you feel safe and secure again. We can develop new styles of communication that help you create the relationships you have always wanted. Whatever you may be dealing with, we can help.
              </p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                We believe some of the most powerful tools we have are the complementary approaches we call Wisdom and Wellness. This means we offer traditional therapy services like individual and couples therapy, along with holistic whole body services such as massage and acupuncture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-16">
            <p className="eyebrow mb-4">Why Choose Us</p>
            <h2 className="text-[rgb(var(--color-navy))]">Why we are different</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                <Heart className="h-5 w-5 text-[rgb(var(--color-green))]" />
              </div>
              <div>
                <h3 className="mb-2 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>Integrated Care</h3>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                  Unlike practices that offer only therapy or only body care, we bring both together. Your therapist and wellness providers can collaborate to support your complete wellbeing.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                <Sparkles className="h-5 w-5 text-[rgb(var(--color-green))]" />
              </div>
              <div>
                <h3 className="mb-2 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>Personalized Approach</h3>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                  The journey within should be as personal and individual as you are. We look to create an experience for each person that is uniquely theirs.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                <Users className="h-5 w-5 text-[rgb(var(--color-green))]" />
              </div>
              <div>
                <h3 className="mb-2 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>Expert Team</h3>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                  Our therapists are trained, licensed, and experienced in different areas of counseling. Each clinician works with special populations based on their expertise and passions.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                <Shield className="h-5 w-5 text-[rgb(var(--color-green))]" />
              </div>
              <div>
                <h3 className="mb-2 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>Accessible Care</h3>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                  We accept most major insurance for both therapy and applicable wellness services. Sliding scale options are available based on financial need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-16 text-center">
            <p className="eyebrow mb-4">Our Values</p>
            <h2 className="text-[rgb(var(--color-navy))]">What we believe</h2>
          </div>
          
          <div className="grid gap-px overflow-hidden bg-[rgb(var(--border))]/30 md:grid-cols-2">
            <div className="bg-white p-10">
              <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>The whole person matters</h3>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                Your mind, body, and spirit are connected. True wellbeing comes from caring for all of yourself.
              </p>
            </div>
            <div className="bg-white p-10">
              <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>You deserve compassion</h3>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                We create judgment free spaces where you can feel safe to be yourself. There is no preachy advice or pressure here.
              </p>
            </div>
            <div className="bg-white p-10">
              <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>Healing is personal</h3>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                There is no one size fits all approach. We tailor every experience to your unique needs and goals.
              </p>
            </div>
            <div className="bg-white p-10">
              <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>Connection heals</h3>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                Whether working with a therapist or wellness provider, the relationship is part of the healing. We are here to walk alongside you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-white">Ready to begin?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>
              We look forward to meeting you and helping you have the experiences you have been seeking. Your journey starts with a conversation.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/start" className="btn-pill btn-pill-green">
                <span className="btn-text">Get Started Today</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
              <Link href="/contact" className="btn-pill btn-pill-white">
                <span className="btn-text">Contact Us</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
