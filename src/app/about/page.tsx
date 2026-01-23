import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, Users, Sparkles, Shield } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { JsonLd } from '@pathways/ui'
import { generateBreadcrumbSchema } from '@/lib/structured-data'
import { getHeroImageByIndex } from '@/lib/hero-images'

export const metadata: Metadata = {
  title: 'About Us | Pathways Within',
  description: 'Learn about Pathways Within, a Long Island collaborative offering integrated therapy and wellness services. Our 360 degree approach honors your whole self.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Pathways Within',
    description: 'Learn about Pathways Within, a Long Island collaborative offering integrated therapy and wellness services.',
    url: '/about',
  },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://pathwayswithin.com' },
  { name: 'About Us', url: 'https://pathwayswithin.com/about' },
])

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema} />
      {/* Hero - Offset image style */}
      <PageHero
        eyebrow="About Us"
        headline="Wisdom and Wellness Collaborative"
        subheadline="One entry. Many personalized routes."
        body="At Pathways Within, we believe true healing happens when we care for the whole person. Our 360 degree approach brings together mental health therapy and holistic wellness services in one collaborative environment."
        variant="offset"
        size="md"
        image={{ alt: 'Peaceful therapy and wellness environment', placeholder: true }}
        imageStyle="gradient"
      />

      {/* Philosophy Section */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p 
                className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                Our Philosophy
              </p>
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

      {/* 360 Approach Section */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p 
              className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              360° Approach
            </p>
            <h2 className="mb-8 text-[rgb(var(--color-navy))]">How we care for you</h2>
            <p className="text-lg text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              We take a 360 degree approach to healing, looking at both your mental and physical well being. During your intake, we explore what brings you in, how long it has been going on, and how it affects areas like sleep, stress, digestion, energy, pain, and relationships.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-linen))]">
                <span className="text-2xl font-normal text-[rgb(var(--color-navy))]">1</span>
              </div>
              <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 400 }}>Intake Conversation</h3>
              <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                We explore what brings you in and how it affects your daily life, discussing sleep, stress, energy, and what you've already tried.
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

      {/* What Makes Us Different */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-16">
            <p 
              className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Why Choose Us
            </p>
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
                  Unlike practices that offer only therapy or only body care, we bring both together. Your therapist and wellness providers can collaborate to support your complete well being.
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
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-16 text-center">
            <p 
              className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Our Values
            </p>
            <h2 className="text-[rgb(var(--color-navy))]">What we believe</h2>
          </div>
          
          <div className="grid gap-px overflow-hidden bg-[rgb(var(--border))]/30 md:grid-cols-2">
            <div className="bg-white p-10">
              <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>The whole person matters</h3>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                Your mind, body, and spirit are connected. True well being comes from caring for all of yourself.
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

      {/* Mid-Page CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-green))]">
        <div className="container-site py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <p className="text-lg text-white" style={{ fontWeight: 500 }}>
                Ready to experience the difference?
              </p>
              <p className="text-white/80">See why thousands choose Pathways Within for their care.</p>
            </div>
            <Link href="/start" className="btn-pill btn-pill-white flex-shrink-0">
              <span className="btn-text">Get Started</span>
              <span className="btn-arrow">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="relative aspect-[3/2] overflow-hidden shadow-md">
                <Image
                  src={getHeroImageByIndex(1)}
                  alt="Pathways Within community"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p 
                className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                Our Story
              </p>
              <h2 className="mb-8 text-[rgb(var(--color-navy))]">Founded with purpose</h2>
              <div className="space-y-6">
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  Pathways Within was founded with a vision of bringing together mental health care and holistic wellness under one roof. We saw how often people needed support for both their minds and their bodies, yet had to seek that care in separate places with providers who never communicated.
                </p>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  Our founder, Rachel Lessard, LCSW-R, built Pathways Within to change that. With certifications spanning clinical social work, energy work, and integrative wellness practices, Rachel created a sanctuary where clients can heal, grow, and embrace their most authentic self.
                </p>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  Today, our team has grown to include licensed therapists, certified wellness providers, and compassionate support staff across five Long Island locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p 
                className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                Our Team
              </p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Meet our team</h2>
              <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Our clinical team includes licensed clinical social workers, licensed mental health counselors, and licensed marriage and family therapists. Our wellness team includes certified massage therapists, licensed estheticians, registered nurses, and energy work practitioners. We even have two therapy dogs who specialize in comfort and cuddles.
              </p>
              <Link href="/team" className="btn-pill btn-pill-primary">
                <span className="btn-text">View full team</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="relative aspect-[3/2] overflow-hidden shadow-sm">
                  <Image
                    src={getHeroImageByIndex(index)}
                    alt={`Pathways Within community ${index}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
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
            <p className="mt-6 text-sm text-white/50">
              Insurance accepted • Same-week appointments available
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
