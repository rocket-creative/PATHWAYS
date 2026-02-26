import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'
import { QuizPopup } from '@/components/sections/quiz-popup'
import { ProviderSearchSection } from '@/components/sections/provider-search-section'
import { CTASection, ResourcesSection } from '@/components/sections'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Pathways Within | A 360° Approach to Holistic Care on Long Island',
  description: 'Pathways Within - Wisdom and Wellness Collaborative offers integrated mental health therapy, holistic wellness, and medication management at six Long Island locations.',
  alternates: { canonical: SITE_URL },
  openGraph: { url: SITE_URL },
}

export default function HomePage() {
  return (
    <>
      <QuizPopup />
      <HeroSection />
      <CollaborativeIntro />
      <ServicesSection />
      <ApproachSection />
      <ProviderSearchSection />
      <OfficePhotosStrip />
      <LocationsStrip />
      <ResourcesSection />
      <CTASection />
    </>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="hero-animated relative flex min-h-[90vh] flex-col overflow-hidden lg:min-h-screen">
      {/* Logo — vertically centered, inset from right */}
      <div className="absolute right-10 top-1/2 z-10 hidden -translate-y-1/2 lg:block xl:right-16" aria-hidden="true">
        <Image
          src="/logo.png"
          alt=""
          width={480}
          height={480}
          className="w-[260px] xl:w-[360px] 2xl:w-[420px] brightness-0 invert"
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Content */}
      <div className="container-site relative z-10 mt-auto pb-16 pt-28 lg:pb-20 lg:pt-0 lg:flex lg:flex-col lg:justify-center lg:min-h-screen lg:w-[58%] lg:pr-12">
        <p
          className="animate-hero-eyebrow mb-6 text-xs uppercase tracking-[0.3em] text-[rgb(var(--color-green))]"
          style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600 }}
        >
          Pathways Within &mdash; Wisdom and Wellness Collaborative
        </p>

        {/* Headline — very large, tight leading, editorial weight */}
        <h1
          className="animate-hero-headline mb-8 text-white"
          style={{
            fontFamily: 'var(--font-raleway)',
            fontWeight: 300,
            fontSize: 'clamp(2.75rem, 5.5vw, 6.5rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.035em',
          }}
        >
          A 360°<br />
          Approach<br />
          <em style={{ fontStyle: 'italic' }}>to holistic</em><br />
          care.
        </h1>

        <p
          className="animate-hero-body mb-10 text-lg text-white/60"
          style={{ lineHeight: 1.7, maxWidth: '48ch' }}
        >
          Pathways Within - Wisdom and Wellness Collaborative unifies mental health therapy, holistic wellness, and medication management in one 360° model of care. Six Long Island locations.
        </p>

        <div className="animate-hero-cta flex flex-wrap gap-4">
          <Link href="/providers" className="btn-pill btn-pill-green">
            <span className="btn-text">FIND A PROVIDER</span>
            <span className="btn-arrow"><ArrowRight /></span>
          </Link>
          <Link href="/client-intake" className="btn-pill btn-pill-outline">
            <span className="btn-text">GET STARTED</span>
            <span className="btn-arrow"><ArrowRight /></span>
          </Link>
        </div>
      </div>

      {/* Scroll indicator — bottom left */}
      <div className="container-site relative z-10 pb-8 hidden lg:flex items-center gap-3 text-white/30" aria-hidden="true">
        <div className="h-px w-12 bg-white/20" />
        <span className="text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600 }}>Scroll</span>
      </div>
    </section>
  )
}

// ─── Labyrinth Icon (reinforces logo symbol) ───────────────────────────────────
function LabyrinthIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path
        d="M 50 5 L 50 10 A 40 40 0 0 1 10 50 L 5 50 A 45 45 0 0 0 50 5 M 50 20 L 50 25 A 25 25 0 0 0 25 50 L 20 50 A 30 30 0 0 1 50 20 M 50 35 L 50 40 A 10 10 0 0 1 40 50 L 35 50 A 15 15 0 0 0 50 35 M 50 47 L 50 50"
        fill="none"
      />
      <circle cx="50" cy="50" r="2.5" fill="currentColor" />
    </svg>
  )
}

// ─── Collaborative Intro ──────────────────────────────────────────────────────
function CollaborativeIntro() {
  return (
    <section className="bg-[rgb(var(--color-cream))]/50">
      {/* Bridge from hero — 360° + Collaborative woven together */}
      <div className="container-site pb-12 pt-16 lg:pb-16 lg:pt-20">
        <p
          className="animate-fade-left max-w-3xl text-lg text-[rgb(var(--color-text-light))]"
          style={{ lineHeight: 1.8 }}
        >
          The Collaborative is our 360° approach in practice: therapy, wellness, and medication management under one roof, with providers who coordinate your care.
        </p>
      </div>

      {/* Editorial statement — labyrinth accent reinforces logo */}
      <div className="container-site pb-14 pt-4 lg:pb-20 lg:pt-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex items-start gap-6">
            <p
              className="animate-fade-left text-[rgb(var(--color-navy))]"
              style={{
                fontFamily: 'var(--font-clarendon), serif',
                fontWeight: 400,
                fontSize: 'clamp(2.25rem, 4.5vw, 5.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              &ldquo;True healing<br />
              honors the<br />
              <span style={{ color: 'rgb(var(--color-green))' }}>whole person.</span>&rdquo;
            </p>
            <LabyrinthIcon className="mt-2 hidden h-16 w-16 flex-shrink-0 text-[rgb(var(--color-green))]/40 lg:block" />
          </div>
          <div className="flex items-center gap-6">
            <div className="h-px w-16 bg-[rgb(var(--color-green))]" />
            <p className="eyebrow text-[rgb(var(--color-text-light))]">About the Collaborative</p>
          </div>
        </div>
      </div>

      {/* Body — asymmetric: portrait image left (narrow), long copy right (wide) */}
      <div className="grid bg-white lg:grid-cols-[38%_62%]">
        {/* Office photo — fills the column completely */}
        <div className="animate-fade-left relative hidden lg:block" style={{ minHeight: '560px' }}>
          <Image
            src="/images/offices/garden-city-wellness/3126d651-e563-4a1e-8638-90957252900c.jpg"
            alt="Pathways Within office"
            fill
            className="object-cover object-center"
            sizes="38vw"
          />
        </div>

        {/* Copy column — generous padding */}
        <div className="animate-fade-right container-site py-16 lg:pl-16 lg:pr-[clamp(2rem,6vw,7rem)] lg:py-20">
          <div className="max-w-[60ch] space-y-6">
            <p className="text-xl text-[rgb(var(--color-navy))]" style={{ lineHeight: 1.8 }}>
              Have you experienced an event that changed your view of the world? Are you holding onto scars from the past? Is your body manifesting pain that medicine alone cannot explain?
            </p>
            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.9 }}>
              Pathways Within was founded on the belief that the mind, body, and spirit are inseparable. We bring licensed mental health clinicians, holistic wellness providers, and medical professionals together in one space — so your care can finally be as whole as you are.
            </p>
            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.9 }}>
              Like the labyrinth in our logo — a symbol of the inward journey — healing is rarely a straight line. Our 360° model walks alongside you through every turn, every layer, every breakthrough.
            </p>
            <div className="pt-4">
              <Link href="/about" className="btn-pill btn-pill-secondary">
                <span className="btn-text">OUR STORY</span>
                <span className="btn-arrow"><ArrowRight /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services Section ─────────────────────────────────────────────────────────
// Full-bleed alternating rows — not a template grid
function ServicesSection() {
  return (
    <section className="border-t border-[rgb(var(--border))]/50">

      {/* Row 1 — Mental Health: text left (navy), image right */}
      <div className="flex min-h-[75vh] flex-col lg:flex-row">
        <div className="flex flex-col justify-center bg-[rgb(var(--color-navy))] px-[clamp(2rem,6vw,8rem)] py-16 lg:w-[55%]">
          <p
            className="animate-hero-eyebrow mb-5 text-xs uppercase tracking-[0.25em] text-[rgb(var(--color-green))]"
            style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600 }}
          >
            Wisdom
          </p>
          <h2
            className="animate-hero-headline mb-6 text-white"
            style={{ fontFamily: 'var(--font-clarendon), serif', fontWeight: 400, lineHeight: 1.05 }}
          >
            Therapy &amp;<br />Counseling
          </h2>
          <p className="mb-10 text-white/60" style={{ lineHeight: 1.8, maxWidth: '50ch' }}>
            Individual, couples, child, teen, trauma, and EMDR therapy. Somatic work, hypnotherapy, veteran support — with licensed clinicians who meet you where you are.
          </p>
          <Link href="/wisdom/services" className="btn-pill btn-pill-green w-fit">
            <span className="btn-text">EXPLORE THERAPY</span>
            <span className="btn-arrow"><ArrowRight /></span>
          </Link>
        </div>
        <div className="relative flex-1 lg:w-[45%]" style={{ minHeight: '420px' }}>
          <Image
            src="/images/offices/garden-city-wellness/3126d651-e563-4a1e-8638-90957252900c.jpg"
            alt="Therapy office at Pathways Within"
            fill
            className="object-cover object-center"
            sizes="45vw"
          />
        </div>
      </div>

      {/* Row 2 — Wellness: image left, text right (cream) */}
      <div className="flex min-h-[75vh] flex-col lg:flex-row-reverse">
        <div className="flex flex-col justify-center bg-[rgb(var(--color-cream))] px-[clamp(2rem,6vw,8rem)] py-16 lg:w-[55%]">
          <p
            className="mb-5 text-xs uppercase tracking-[0.25em] text-[rgb(var(--color-green))]"
            style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600 }}
          >
            Wellness
          </p>
          <h2
            className="mb-6 text-[rgb(var(--color-navy))]"
            style={{ fontFamily: 'var(--font-clarendon), serif', fontWeight: 400, lineHeight: 1.05 }}
          >
            Holistic<br />Body Care
          </h2>
          <p className="mb-10 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8, maxWidth: '50ch' }}>
            Massage therapy, acupuncture, energy work, skincare, injectables, IV vitamin infusion, and pain management — whole-body care that complements your mental health journey.
          </p>
          <Link href="/wellness/services" className="btn-pill btn-pill-primary w-fit">
            <span className="btn-text">EXPLORE WELLNESS</span>
            <span className="btn-arrow"><ArrowRight /></span>
          </Link>
        </div>
        <div className="relative flex-1 lg:w-[45%]" style={{ minHeight: '420px' }}>
          <Image
            src="/images/offices/massage/83249798-a680-4196-9c22-9d8bc0ea6243.jpg"
            alt="Wellness treatment room"
            fill
            className="object-cover object-center"
            sizes="45vw"
          />
        </div>
      </div>

      {/* Row 3 — Medication Management: text left, office image right */}
      <div className="flex min-h-[50vh] flex-col lg:flex-row">
        <div className="flex flex-col justify-center bg-[rgb(var(--color-linen))] px-[clamp(2rem,6vw,8rem)] py-16 lg:w-[55%]">
          <div className="mb-5 flex items-center gap-4">
            <p
              className="text-xs uppercase tracking-[0.25em] text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600 }}
            >
              Medication Management
            </p>
            <span className="rounded-full bg-[rgb(var(--color-green))]/15 px-3 py-1 text-[10px] uppercase tracking-wider text-[rgb(var(--color-green))]">
              Coming Soon
            </span>
          </div>
          <h2
            className="text-[rgb(var(--color-navy))] mb-6"
            style={{ fontFamily: 'var(--font-clarendon), serif', fontWeight: 400, lineHeight: 1.05 }}
          >
            Psychiatric<br />Evaluation &amp; Care
          </h2>
          <p className="mb-8 text-[rgb(var(--color-text-light))] max-w-[44ch]" style={{ lineHeight: 1.9 }}>
            Our psychiatric nurse practitioner provides comprehensive evaluation and ongoing medication management as part of your integrated care plan.
          </p>
          <Link href="/wisdom/services/medication-management" className="btn-pill btn-pill-secondary w-fit">
            <span className="btn-text">LEARN MORE</span>
            <span className="btn-arrow"><ArrowRight /></span>
          </Link>
        </div>
        <div className="relative flex-1 lg:w-[45%]" style={{ minHeight: '320px' }}>
          <Image
            src="/images/offices/garden-city-wellness/250d0c64-0d4c-47e9-b88d-87399c4c6dbd.jpg"
            alt="Pathways Within office"
            fill
            className="object-cover object-center"
            sizes="45vw"
          />
        </div>
      </div>

    </section>
  )
}

// ─── 360° Approach ────────────────────────────────────────────────────────────
function ApproachSection() {
  const steps = [
    {
      num: '01',
      title: 'Intake Conversation',
      body: 'We explore what brings you in and how it affects your daily life — sleep, stress, energy, relationships, and what you have already tried.',
    },
    {
      num: '02',
      title: 'Personalized Plan',
      body: 'Based on our conversation, we may suggest therapy, wellness services, or both. Always optional, always tailored, never prescriptive.',
    },
    {
      num: '03',
      title: 'Collaborative Care',
      body: 'Your clinicians and wellness providers work together. When your therapist and massage therapist are in the same building, care becomes truly integrated.',
    },
  ]

  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
      {/* Header — full width, asymmetric split */}
      <div className="grid lg:grid-cols-[55%_45%]">
        <div className="container-site py-16 lg:py-20 lg:pr-12">
          <p className="eyebrow mb-5">Our Approach</p>
          <h2 className="text-[rgb(var(--color-navy))]">The 360°<br />Model</h2>
        </div>
        {/* Office photo */}
        <div className="relative hidden lg:block" style={{ minHeight: '280px' }}>
          <Image
            src="/images/offices/garden-city-wellness/b2b0a50b-47c1-402a-abec-021ad72c0e52.jpg"
            alt="Pathways Within office space"
            fill
            className="object-cover object-center"
            sizes="45vw"
          />
        </div>
      </div>

      {/* Steps — horizontal ruled rows, not boxes */}
      <div className="container-site border-t border-[rgb(var(--border))]/40">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="animate-on-scroll grid gap-6 border-b border-[rgb(var(--border))]/40 py-10 lg:grid-cols-[80px_1fr_2fr] lg:items-baseline lg:gap-12 lg:py-12"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Ghost number */}
            <span
              className="select-none text-[4.5rem] leading-none text-[rgb(var(--color-navy))]/10"
              style={{ fontFamily: 'var(--font-raleway)', fontWeight: 700 }}
            >
              {step.num}
            </span>
            {/* Title */}
            <h3
              className="text-[rgb(var(--color-navy))]"
              style={{ fontFamily: 'var(--font-raleway)', fontWeight: 600, fontSize: '1.1rem' }}
            >
              {step.title}
            </h3>
            {/* Body */}
            <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.85, maxWidth: '58ch' }}>
              {step.body}
            </p>
          </div>
        ))}
      </div>

      <div className="container-site py-12">
        <Link href="/about" className="btn-pill btn-pill-primary">
          <span className="btn-text">LEARN ABOUT OUR APPROACH</span>
          <span className="btn-arrow"><ArrowRight /></span>
        </Link>
      </div>
    </section>
  )
}

// ─── Office Photos Strip ─────────────────────────────────────────────────────
const OFFICE_PHOTOS = [
  { src: '/images/offices/garden-city-wellness/34912fbd-0d4a-4f51-9ff0-95d3ec07b447.jpg', alt: 'Garden City Wellness office' },
  { src: '/images/offices/massage/4fce5ce9-3cdd-440f-b081-c50a2c8b3c57.jpg', alt: 'Massage treatment room' },
  { src: '/images/offices/massapequa-wellness/2c5e85c2-a7c9-4fc4-95b0-cc7bcacb7362.jpg', alt: 'Massapequa Wellness office' },
  { src: '/images/offices/garden-city-wellness/eeafec35-303c-4682-a4c8-3adeb7ab63f7.jpg', alt: 'Pathways Within office space' },
  { src: '/images/offices/massage/1ae09d8c-8f97-4c68-a914-00622ddba67c.jpg', alt: 'Wellness treatment room' },
]

function OfficePhotosStrip() {
  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-white">
      <div className="container-site py-12">
        <p className="eyebrow mb-4">Our Spaces</p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-5">
          {OFFICE_PHOTOS.map(({ src, alt }) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Locations Strip ──────────────────────────────────────────────────────────
function LocationsStrip() {
  const locs = [
    'Garden City — Wisdom',
    'Garden City — Wellness',
    'Port Jefferson',
    'Massapequa',
    'Smithtown',
    'Rockville Centre',
  ]

  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
      <div className="container-site py-14">
        <div className="animate-on-scroll mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow mb-2">Where We Are</p>
            <h3
              className="text-[rgb(var(--color-navy))]"
              style={{ fontFamily: 'var(--font-clarendon), serif', fontWeight: 400, fontSize: 'clamp(1.75rem, 3vw, 3rem)' }}
            >
              Six Long Island Locations
            </h3>
          </div>
          <Link href="/locations" className="btn-pill btn-pill-secondary hidden sm:inline-flex">
            <span className="btn-text">VIEW ALL</span>
            <span className="btn-arrow"><ArrowRight /></span>
          </Link>
        </div>

        {/* Locations as a horizontal rule list */}
        <div className="animate-stagger divide-y divide-[rgb(var(--border))]/40">
          {locs.map((loc) => (
            <Link
              key={loc}
              href="/locations"
              className="group flex items-center justify-between py-4 text-[rgb(var(--color-navy))] transition-colors hover:text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway)', fontWeight: 400, fontSize: '1.0625rem' }}
            >
              <span className="flex items-center gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 text-[rgb(var(--color-green))]/50 transition-colors group-hover:text-[rgb(var(--color-green))]" />
                {loc}
              </span>
              <ArrowRight className="h-4 w-4 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
