'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, Star, Shield, Clock, Heart, Brain, Leaf, Phone, Users, MapPin } from 'lucide-react'

const benefits = [
  { icon: Brain, title: 'Expert Therapists', description: 'Licensed clinicians with specialized training in trauma, anxiety, relationships, and more' },
  { icon: Shield, title: 'Insurance Accepted', description: 'We work with most major insurance providers to make care accessible' },
  { icon: Clock, title: 'Flexible Scheduling', description: 'Evening and weekend appointments available, plus telehealth options' },
  { icon: Heart, title: 'Whole-Person Care', description: 'Therapy and wellness services working together under one roof' },
]

const stats = [
  { number: '5,000+', label: 'Clients Helped' },
  { number: '98%', label: 'Would Recommend' },
  { number: '5', label: 'Convenient Locations' },
  { number: '15+', label: 'Years Experience' },
]

const testimonials = [
  {
    quote: "I finally feel like myself again. The combination of therapy and massage has been life-changing for my anxiety.",
    name: "Sarah M.",
    location: "Garden City",
    stars: 5
  },
  {
    quote: "After years of struggling alone, I found a team that actually listens. My therapist and the wellness staff work together on my care.",
    name: "Michael R.",
    location: "Smithtown",
    stars: 5
  },
  {
    quote: "The intake process was so easy and they found me an appointment within days. I wish I had done this sooner.",
    name: "Jennifer L.",
    location: "Massapequa",
    stars: 5
  },
]

const transformations = [
  { before: "Anxious and overwhelmed", after: "Calm and in control" },
  { before: "Disconnected from loved ones", after: "Deeper, healthier relationships" },
  { before: "Trapped by past trauma", after: "Free to live fully" },
  { before: "Chronic pain and tension", after: "Relief and relaxation" },
  { before: "Low self-esteem", after: "Confidence and self-love" },
  { before: "Burned out and exhausted", after: "Energized and balanced" },
]

export default function StartPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="container-site relative py-12 lg:py-20">
          <div className="mb-8 lg:mb-10">
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Pathways Within - Home" 
                width={280}
                height={280}
                className="w-[200px] brightness-0 invert transition-opacity hover:opacity-80 lg:w-[260px]"
                priority
              />
            </Link>
          </div>
          
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="max-w-xl lg:col-span-6">
              <p className="eyebrow mb-6">Long Island&apos;s Premier Therapy & Wellness Center</p>
              <h1 className="mb-6 text-white" style={{ transitionDelay: '100ms' }}>
                You Deserve to Feel <span className="text-[rgb(var(--color-green))]">Whole</span> Again
              </h1>
              <p className="mb-6 text-xl text-white/80" style={{ lineHeight: 1.8 }}>
                Stop struggling alone. Our expert therapists and wellness professionals 
                are ready to help you break free from anxiety, heal from trauma, and 
                finally live the life you deserve.
              </p>
              <div className="flex flex-col items-start gap-5 sm:flex-row">
                <Link href="/contact" className="btn-pill btn-pill-green">
                  <span className="btn-text">Book Free Consultation</span>
                  <span className="btn-arrow">
                    <ArrowRight />
                  </span>
                </Link>
                <a 
                  href="tel:+16313713825" 
                  className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
                  style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
                >
                  <Phone className="h-4 w-4" />
                  Call Now: (631) 371-3825
                </a>
              </div>
              <p className="mt-6 text-sm text-white/50">
                Insurance accepted • Same-week appointments available • No referral needed
              </p>
            </div>
            
            {/* Desktop Hero Image - Right Justified, Not Full Bleed */}
            <div className="relative hidden aspect-[3/4] overflow-hidden rounded-2xl lg:col-span-6 lg:block">
              <Image
                src="/images/hero/hero-4-people.png"
                alt="People finding wellness at Pathways Within"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            
            {/* Mobile Hero Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:hidden">
              <Image
                src="/images/hero/hero-4-people.png"
                alt="People finding wellness at Pathways Within"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-12 lg:py-16">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-light text-[rgb(var(--color-navy))] lg:text-6xl" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}>
                  {stat.number}
                </p>
                <p className="mt-3 text-sm text-[rgb(var(--color-text-light))]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-16 lg:py-24">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-4">The Pathways Within Difference</p>
            <h2 className="mb-6 text-[rgb(var(--color-navy))]">
              Finally, care that actually works
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              We&apos;re not just another therapy office. We&apos;re Long Island&apos;s only 
              integrated mental health and wellness center—where your mind and body 
              get the attention they deserve.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={benefit.title} 
                  className="group rounded-xl border border-[rgb(var(--border))]/50 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[rgb(var(--color-green))] hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                    <Icon className="h-7 w-7 text-[rgb(var(--color-green))]" />
                  </div>
                  <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{benefit.title}</h3>
                  <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-16 lg:py-24">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-4">Your Transformation</p>
            <h2 className="mb-6 text-[rgb(var(--color-navy))]">
              Imagine your life 3 months from now
            </h2>
          </div>
          
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {transformations.map((item) => (
              <div 
                key={item.before} 
                className="group overflow-hidden rounded-xl border border-[rgb(var(--border))]/50 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="border-b border-[rgb(var(--border))]/50 bg-[rgb(var(--color-navy))]/5 px-7 py-5">
                  <p className="text-sm text-[rgb(var(--color-text-light))]">
                    <span className="line-through opacity-70">{item.before}</span>
                  </p>
                </div>
                <div className="flex items-center gap-4 px-7 py-5">
                  <Check className="h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))]" />
                  <p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{item.after}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-pill btn-pill-green">
              <span className="btn-text">Start Your Transformation</span>
              <span className="btn-arrow">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-16 lg:py-24">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-4">Complete Care</p>
            <h2 className="mb-6 text-[rgb(var(--color-navy))]">
              Everything you need under one roof
            </h2>
          </div>
          
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="group rounded-2xl border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))] p-10 lg:p-12">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                  <Brain className="h-7 w-7 text-[rgb(var(--color-green))]" />
                </div>
                <h3 className="text-2xl text-[rgb(var(--color-navy))]">Therapy Services</h3>
              </div>
              <ul className="mb-8 space-y-4">
                {['Individual Therapy', 'Couples & Family Therapy', 'Child & Teen Therapy', 'Trauma & EMDR', 'Anxiety & Depression', 'Somatic & Hypnotherapy'].map((service) => (
                  <li key={service} className="flex items-center gap-4">
                    <Check className="h-4 w-4 text-[rgb(var(--color-green))]" />
                    <span className="text-[rgb(var(--color-text))]">{service}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/wisdom/services" 
                className="inline-flex items-center gap-2 text-[rgb(var(--color-green))] hover:text-[rgb(var(--color-navy))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                View all therapy services 
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="group rounded-2xl border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))] p-10 lg:p-12">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                  <Leaf className="h-7 w-7 text-[rgb(var(--color-green))]" />
                </div>
                <h3 className="text-2xl text-[rgb(var(--color-navy))]">Wellness Services</h3>
              </div>
              <ul className="mb-8 space-y-4">
                {['Massage Therapy', 'Acupuncture', 'IV Vitamin Infusions', 'Skincare & Facials', 'Injectables & Aesthetics', 'Pain Management'].map((service) => (
                  <li key={service} className="flex items-center gap-4">
                    <Check className="h-4 w-4 text-[rgb(var(--color-green))]" />
                    <span className="text-[rgb(var(--color-text))]">{service}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/wellness/services" 
                className="inline-flex items-center gap-2 text-[rgb(var(--color-green))] hover:text-[rgb(var(--color-navy))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                View all wellness services 
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-16 lg:py-24">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-4">Real Results</p>
            <h2 className="mb-6 text-[rgb(var(--color-navy))]">
              What our clients are saying
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name} 
                className="group rounded-xl border border-[rgb(var(--border))]/50 bg-white p-8 lg:p-10"
              >
                <div className="mb-6 flex gap-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[rgb(var(--color-green))] text-[rgb(var(--color-green))]" />
                  ))}
                </div>
                <p className="mb-8 text-[rgb(var(--color-text))]" style={{ lineHeight: 1.8 }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--color-navy))]">
                    <span className="text-sm text-white" style={{ fontWeight: 500 }}>
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{testimonial.name}</p>
                    <p className="text-xs text-[rgb(var(--color-text-light))]">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-16 lg:py-24">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-4">Getting Started Is Easy</p>
            <h2 className="mb-6 text-[rgb(var(--color-navy))]">
              Three simple steps to feeling better
            </h2>
          </div>
          
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { step: '1', title: 'Book Your Free Consultation', description: 'Call us or fill out our contact form. We\'ll match you with the right provider based on your needs.' },
              { step: '2', title: 'Meet Your Care Team', description: 'Have an initial session to share your story and create a personalized treatment plan together.' },
              { step: '3', title: 'Start Feeling Better', description: 'Begin your journey with ongoing support, flexible scheduling, and a team that truly cares.' },
            ].map((item) => (
              <div key={item.step} className="group relative rounded-xl bg-[rgb(var(--color-cream))] p-10">
                <span className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--color-green))] text-xl text-white shadow-lg">
                  {item.step}
                </span>
                <h3 className="mb-4 mt-5 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{item.title}</h3>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-hero-gradient-radial">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-white">
              Your better life starts with one phone call
            </h2>
            <p className="mb-6 text-xl text-white/80" style={{ lineHeight: 1.8 }}>
              Don&apos;t spend another day feeling stuck. Our team is ready to help you 
              take the first step toward healing.
            </p>
            <p className="mb-12 text-white/50">
              Same-week appointments available • Insurance accepted • Confidential
            </p>
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-pill btn-pill-white">
                <span className="btn-text">Book Free Consultation</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
              <a 
                href="tel:+16313713825" 
                className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-white backdrop-blur-sm"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                <Phone className="h-4 w-4" />
                (631) 371-3825
              </a>
            </div>
            <p className="mt-12 text-sm text-white/40">
              <Users className="mb-1 mr-2 inline h-4 w-4" />
              Join 5,000+ Long Islanders who&apos;ve found their path to wellness
            </p>
            <p className="mt-4 text-sm text-white/50">
              New to Pathways? Complete our{' '}
              <Link href="/client-intake" className="text-white underline hover:no-underline">
                intake form
              </Link>
              {' '}to help us match you with the right provider.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
