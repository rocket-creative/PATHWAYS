'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, Star, Shield, Clock, Heart, Sparkles, Users, MapPin, Phone, Award, Zap, Brain, Leaf } from 'lucide-react'
import { getHeroImageByIndex } from '@/lib/hero-images'

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
    location: "Huntington",
    stars: 5
  },
  {
    quote: "After years of struggling alone, I found a team that actually listens. My therapist and the wellness staff work together on my care.",
    name: "Michael R.",
    location: "Commack",
    stars: 5
  },
  {
    quote: "The intake process was so easy and they found me an appointment within days. I wish I had done this sooner.",
    name: "Jennifer L.",
    location: "Plainview",
    stars: 5
  },
]

const painPoints = [
  "Feeling overwhelmed by stress, anxiety, or depression",
  "Struggling in your relationships or feeling disconnected",
  "Carrying trauma that affects your daily life",
  "Physical tension and pain that won't go away",
  "Lacking confidence or feeling stuck",
  "Exhausted from doing it all alone",
]

const transformations = [
  { before: "Anxious and overwhelmed", after: "Calm and in control" },
  { before: "Disconnected from loved ones", after: "Deeper, healthier relationships" },
  { before: "Trapped by past trauma", after: "Free to live fully" },
  { before: "Chronic pain and tension", after: "Relief and relaxation" },
  { before: "Low self-esteem", after: "Confidence and self-love" },
  { before: "Burned out and exhausted", after: "Energized and balanced" },
]

const objections = [
  {
    question: "Is therapy really going to help me?",
    answer: "Research shows that therapy is highly effective for anxiety, depression, trauma, and relationship issues. 98% of our clients report meaningful improvement. You deserve to feel better, and we have the expertise to help you get there."
  },
  {
    question: "I can't afford therapy right now.",
    answer: "We accept most major insurance plans, which often covers the full cost of therapy. We also offer sliding scale spots for those in need and accept HSA/FSA funds. Don't let cost be the barrier to your wellbeing."
  },
  {
    question: "I don't have time for this.",
    answer: "We offer flexible scheduling including evenings, weekends, and telehealth sessions you can do from anywhere. Investing one hour a week in yourself pays dividends in every area of your life."
  },
  {
    question: "What if I'm not ready to talk about everything?",
    answer: "You set the pace. Our therapists meet you where you are and never push you faster than you're comfortable. Building trust is part of the process, and we're here for the long haul."
  },
]

const insuranceProviders = [
  'Aetna', 'Cigna', 'Optum', 'UHC', 'Oxford', 'Oscar', 'Medicare', 'Humana', 'NYSHIP', 'MVP'
]

// Custom hook for scroll animations
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = ref.current?.querySelectorAll('.animate-on-scroll, .animate-stagger, .animate-fade-left, .animate-fade-right')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}

export default function StartPage() {
  const containerRef = useScrollReveal()

  return (
    <main ref={containerRef}>
      {/* Hero - Emotional Hook with single image */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="container-site py-12 lg:py-20">
          {/* Logo - Left justified hero feature, links to home */}
          <div className="mb-8 lg:mb-10">
            <Link href="/">
              <Image 
                src="/pathways-logo.png" 
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
              <p 
                className="animate-on-scroll mb-6 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                Long Island&apos;s Premier Therapy & Wellness Center
              </p>
              <h1 className="animate-on-scroll mb-6 text-white" style={{ transitionDelay: '100ms' }}>
                You Deserve to Feel <span className="text-[rgb(var(--color-green))]">Whole</span> Again
              </h1>
              <p className="animate-on-scroll mb-6 text-xl text-white/80" style={{ lineHeight: 1.8, transitionDelay: '200ms' }}>
                Stop struggling alone. Our expert therapists and wellness professionals 
                are ready to help you break free from anxiety, heal from trauma, and 
                finally live the life you deserve.
              </p>
              <div className="animate-on-scroll flex flex-col items-start gap-5 sm:flex-row" style={{ transitionDelay: '300ms' }}>
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
                  <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  Call Now: (631) 371-3825
                </a>
              </div>
              <p className="animate-on-scroll mt-6 text-sm text-white/50" style={{ transitionDelay: '400ms' }}>
                Insurance accepted • Same-week appointments available • No referral needed
              </p>
            </div>
            
            {/* Single hero image */}
            <div className="hidden lg:col-span-6 lg:block">
              <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src={getHeroImageByIndex(0)}
                    alt="Pathways Within community"
                    fill
                    className="object-cover"
                    sizes="50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-[rgb(var(--color-breezy))]/10 to-[rgb(var(--color-green))]/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative gradient orbs */}
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[rgb(var(--color-green))]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      </section>

      {/* Social Proof Stats */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-12 lg:py-16">
          <div className="animate-stagger grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-16">
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

      {/* Pain Points - Agitation */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p 
              className="animate-on-scroll mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Sound Familiar?
            </p>
            <h2 className="animate-on-scroll mb-10 text-[rgb(var(--color-navy))]" style={{ transitionDelay: '100ms' }}>
              Are you tired of feeling this way?
            </h2>
            <div className="animate-stagger grid gap-5 text-left md:grid-cols-2">
              {painPoints.map((point) => (
                <div 
                  key={point} 
                  className="group flex items-start gap-5 rounded-xl border border-[rgb(var(--border))]/50 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
                >
                  <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-100 transition-colors duration-300 group-hover:bg-red-200">
                    <span className="text-sm text-red-600">✗</span>
                  </div>
                  <p className="text-[rgb(var(--color-text))]">{point}</p>
                </div>
              ))}
            </div>
            <p className="animate-on-scroll mt-10 text-xl text-[rgb(var(--color-navy))]" style={{ fontWeight: 500, transitionDelay: '500ms' }}>
              You don&apos;t have to keep living like this.
            </p>
          </div>
        </div>
      </section>

      {/* Solution - What We Offer */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-16 lg:py-24">
          <div className="mb-12 text-center">
            <p 
              className="animate-on-scroll mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              The Pathways Within Difference
            </p>
            <h2 className="animate-on-scroll mb-6 text-[rgb(var(--color-navy))]" style={{ transitionDelay: '100ms' }}>
              Finally, care that actually works
            </h2>
            <p className="animate-on-scroll mx-auto max-w-2xl text-lg text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8, transitionDelay: '200ms' }}>
              We&apos;re not just another therapy office. We&apos;re Long Island&apos;s only 
              integrated mental health and wellness center—where your mind and body 
              get the attention they deserve.
            </p>
          </div>
          
          <div className="animate-stagger grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={benefit.title} 
                  className="group rounded-xl border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[rgb(var(--color-green))] hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[rgb(var(--color-green))]/20">
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

      {/* Transformation Section */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-16 lg:py-24">
          <div className="mb-12 text-center">
            <p 
              className="animate-on-scroll mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Your Transformation
            </p>
            <h2 className="animate-on-scroll mb-6 text-[rgb(var(--color-navy))]" style={{ transitionDelay: '100ms' }}>
              Imagine your life 3 months from now
            </h2>
          </div>
          
          <div className="animate-stagger grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
                  <Check className="h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))] transition-transform duration-300 group-hover:scale-125" />
                  <p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{item.after}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll mt-10 text-center" style={{ transitionDelay: '400ms' }}>
            <Link href="/contact" className="btn-pill btn-pill-green">
              <span className="btn-text">Start Your Transformation</span>
              <span className="btn-arrow">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-16 lg:py-24">
          <div className="mb-12 text-center">
            <p 
              className="animate-on-scroll mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Complete Care
            </p>
            <h2 className="animate-on-scroll mb-6 text-[rgb(var(--color-navy))]" style={{ transitionDelay: '100ms' }}>
              Everything you need under one roof
            </h2>
          </div>
          
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Therapy */}
            <div className="animate-fade-left group rounded-2xl border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))] p-10 transition-all duration-300 hover:shadow-xl lg:p-12">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10 transition-transform duration-300 group-hover:scale-110">
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
                href="/services" 
                className="group/link inline-flex items-center gap-2 text-[rgb(var(--color-green))] transition-colors hover:text-[rgb(var(--color-navy))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                View all therapy services 
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>

            {/* Wellness */}
            <div className="animate-fade-right group rounded-2xl border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))] p-10 transition-all duration-300 hover:shadow-xl lg:p-12">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10 transition-transform duration-300 group-hover:scale-110">
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
                href="/services" 
                className="group/link inline-flex items-center gap-2 text-[rgb(var(--color-green))] transition-colors hover:text-[rgb(var(--color-navy))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                View all wellness services 
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-16 lg:py-24">
          <div className="mb-12 text-center">
            <p 
              className="animate-on-scroll mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Real Results
            </p>
            <h2 className="animate-on-scroll mb-6 text-[rgb(var(--color-navy))]" style={{ transitionDelay: '100ms' }}>
              What our clients are saying
            </h2>
          </div>
          
          <div className="animate-stagger grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name} 
                className="group rounded-xl border border-[rgb(var(--border))]/50 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-10"
              >
                <div className="mb-6 flex gap-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[rgb(var(--color-green))] text-[rgb(var(--color-green))] transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <p className="mb-8 text-[rgb(var(--color-text))]" style={{ lineHeight: 1.8 }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--color-navy))] transition-transform duration-300 group-hover:scale-110">
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

      {/* Objection Handling */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-16 lg:py-24">
          <div className="mb-12 text-center">
            <p 
              className="animate-on-scroll mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Common Questions
            </p>
            <h2 className="animate-on-scroll mb-6 text-[rgb(var(--color-navy))]" style={{ transitionDelay: '100ms' }}>
              Still on the fence? Let&apos;s talk about it.
            </h2>
          </div>
          
          <div className="mx-auto max-w-3xl">
            {objections.map((item, i) => (
              <div 
                key={item.question} 
                className={`animate-on-scroll border-[rgb(var(--border))]/50 py-8 ${i !== objections.length - 1 ? 'border-b' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="mb-5 text-xl text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>
                  {item.question}
                </h3>
                <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.9 }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Trust */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="animate-fade-left">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                  <Shield className="h-6 w-6 text-[rgb(var(--color-green))]" />
                </div>
                <p 
                  className="text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
                  style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
                >
                  Insurance Accepted
                </p>
              </div>
              <h2 className="mb-8 text-[rgb(var(--color-navy))]">
                Your insurance may cover 100% of therapy
              </h2>
              <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.9 }}>
                We&apos;re in-network with most major providers. That means your copay could be as low as $0-30 per session. We also accept HSA/FSA funds, offer sliding scale options, and have financing available for wellness services.
              </p>
              <div className="flex flex-wrap gap-3">
                {insuranceProviders.map((provider) => (
                  <span 
                    key={provider}
                    className="rounded-full border border-[rgb(var(--border))]/50 bg-white px-5 py-2.5 text-sm text-[rgb(var(--color-text))] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {provider}
                  </span>
                ))}
                <span className="rounded-full border border-[rgb(var(--color-green))] bg-[rgb(var(--color-green))]/10 px-5 py-2.5 text-sm text-[rgb(var(--color-green))]">
                  + Many More
                </span>
              </div>
            </div>
            
            <div className="animate-fade-right">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                  <Award className="h-6 w-6 text-[rgb(var(--color-green))]" />
                </div>
                <p 
                  className="text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
                  style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
                >
                  Why Trust Us
                </p>
              </div>
              <h2 className="mb-8 text-[rgb(var(--color-navy))]">
                Your care is in expert hands
              </h2>
              <ul className="space-y-5">
                {[
                  'Licensed clinicians with advanced certifications',
                  'Specialized training in trauma, EMDR, and somatic therapy',
                  'Strict confidentiality and HIPAA compliance',
                  'Coordinated care between all your providers',
                  '5 convenient Long Island locations + telehealth',
                ].map((item) => (
                  <li key={item} className="group flex items-start gap-4">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))] transition-transform duration-300 group-hover:scale-125" />
                    <span className="text-[rgb(var(--color-text))]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-16 lg:py-24">
          <div className="mb-10 text-center">
            <p 
              className="animate-on-scroll mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Convenient Locations
            </p>
            <h2 className="animate-on-scroll mb-6 text-[rgb(var(--color-navy))]" style={{ transitionDelay: '100ms' }}>
              5 locations across Long Island
            </h2>
          </div>
          
          <div className="animate-stagger grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {['Huntington', 'Commack', 'Plainview', 'Smithtown', 'Lake Success'].map((location) => (
              <div 
                key={location}
                className="group flex items-center justify-center gap-3 rounded-xl border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))] px-5 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--color-green))] hover:shadow-lg"
              >
                <MapPin className="h-5 w-5 text-[rgb(var(--color-green))] transition-transform duration-300 group-hover:scale-110" />
                <span className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{location}</span>
              </div>
            ))}
          </div>
          
          <p className="animate-on-scroll mt-8 text-center text-[rgb(var(--color-text-light))]" style={{ transitionDelay: '400ms' }}>
            <Zap className="mb-1 mr-2 inline h-4 w-4 text-[rgb(var(--color-green))]" />
            Plus telehealth available throughout New York State
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-16 lg:py-24">
          <div className="mb-12 text-center">
            <p 
              className="animate-on-scroll mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Getting Started Is Easy
            </p>
            <h2 className="animate-on-scroll mb-6 text-[rgb(var(--color-navy))]" style={{ transitionDelay: '100ms' }}>
              Three simple steps to feeling better
            </h2>
          </div>
          
          <div className="animate-stagger grid gap-10 md:grid-cols-3">
            {[
              { step: '1', title: 'Book Your Free Consultation', description: 'Call us or fill out our contact form. We\'ll match you with the right provider based on your needs.' },
              { step: '2', title: 'Meet Your Care Team', description: 'Have an initial session to share your story and create a personalized treatment plan together.' },
              { step: '3', title: 'Start Feeling Better', description: 'Begin your journey with ongoing support, flexible scheduling, and a team that truly cares.' },
            ].map((item) => (
              <div key={item.step} className="group relative rounded-xl bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <span 
                  className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--color-green))] text-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 600 }}
                >
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
            <h2 className="animate-on-scroll mb-8 text-white">
              Your better life starts with one phone call
            </h2>
            <p className="animate-on-scroll mb-6 text-xl text-white/80" style={{ lineHeight: 1.8, transitionDelay: '100ms' }}>
              Don&apos;t spend another day feeling stuck. Our team is ready to help you 
              take the first step toward healing.
            </p>
            <p className="animate-on-scroll mb-12 text-white/50" style={{ transitionDelay: '200ms' }}>
              Same-week appointments available • Insurance accepted • Confidential
            </p>
            <div className="animate-on-scroll flex flex-col items-center gap-5 sm:flex-row sm:justify-center" style={{ transitionDelay: '300ms' }}>
              <Link href="/contact" className="btn-pill btn-pill-white">
                <span className="btn-text">Book Free Consultation</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
              <a 
                href="tel:+16313713825" 
                className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/20"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                (631) 371-3825
              </a>
            </div>
            <p className="animate-on-scroll mt-12 text-sm text-white/40" style={{ transitionDelay: '400ms' }}>
              <Users className="mb-1 mr-2 inline h-4 w-4" />
              Join 5,000+ Long Islanders who&apos;ve found their path to wellness
            </p>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-green))]">
        <div className="container-site py-8">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-center text-white md:text-left">
              <Sparkles className="mb-1 mr-2 inline h-4 w-4" />
              <strong>Limited availability:</strong> We have a few same-week appointments open. Don&apos;t wait.
            </p>
            <Link 
              href="/contact" 
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[rgb(var(--color-green))] transition-all duration-300 hover:shadow-lg"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Claim Your Spot 
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
