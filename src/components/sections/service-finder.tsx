'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Sparkles, Heart, Brain, Leaf, Sun } from 'lucide-react'

/**
 * Service Finder Quiz - Interactive marketing intake to guide users to services
 * No HIPAA data collected - just preference-based routing
 */

type QuizStep = {
  question: string
  subtitle?: string
  options: {
    label: string
    icon: React.ReactNode
    value: string
  }[]
}

const quizSteps: QuizStep[] = [
  {
    question: "What brings you here today?",
    subtitle: "Select what resonates most with you",
    options: [
      { label: "Mental & emotional support", icon: <Brain className="h-6 w-6" />, value: "therapy" },
      { label: "Physical wellness & self-care", icon: <Leaf className="h-6 w-6" />, value: "wellness" },
      { label: "Both mind and body", icon: <Sun className="h-6 w-6" />, value: "both" },
      { label: "I'm not sure yet", icon: <Sparkles className="h-6 w-6" />, value: "explore" },
    ]
  },
  {
    question: "What are you hoping to address?",
    subtitle: "Choose all that apply, or pick the most important",
    options: [
      { label: "Anxiety, stress, or overwhelm", icon: <Brain className="h-6 w-6" />, value: "anxiety" },
      { label: "Relationship challenges", icon: <Heart className="h-6 w-6" />, value: "relationships" },
      { label: "Past trauma or difficult experiences", icon: <Sparkles className="h-6 w-6" />, value: "trauma" },
      { label: "Physical tension, pain, or fatigue", icon: <Leaf className="h-6 w-6" />, value: "physical" },
      { label: "Skin health or appearance goals", icon: <Sun className="h-6 w-6" />, value: "skin" },
      { label: "General wellness & prevention", icon: <Heart className="h-6 w-6" />, value: "general" },
    ]
  },
  {
    question: "How would you like to begin?",
    options: [
      { label: "One-on-one conversation", icon: <Heart className="h-6 w-6" />, value: "individual" },
      { label: "Hands-on treatment or service", icon: <Leaf className="h-6 w-6" />, value: "treatment" },
      { label: "Show me my options first", icon: <Sparkles className="h-6 w-6" />, value: "browse" },
    ]
  }
]

type ResultType = {
  title: string
  description: string
  services: { name: string; link: string }[]
  cta: string
}

const getResults = (answers: string[]): ResultType => {
  const [intent, focus] = answers
  
  // Therapy-focused results
  if (intent === 'therapy' || focus === 'anxiety' || focus === 'relationships' || focus === 'trauma') {
    if (focus === 'trauma') {
      return {
        title: "Trauma-Informed Care",
        description: "We specialize in gentle, evidence-based approaches to help you process difficult experiences and reclaim your sense of safety.",
        services: [
          { name: "EMDR Therapy", link: "/services/therapy/emdr-therapy" },
          { name: "Trauma Therapy", link: "/services/therapy/trauma-therapy" },
          { name: "Somatic Therapy", link: "/services/therapy/somatic-therapy" },
        ],
        cta: "Begin your healing journey"
      }
    }
    if (focus === 'relationships') {
      return {
        title: "Relationship Support",
        description: "Whether you're strengthening your partnership or working through challenges, our therapists create a safe space for connection.",
        services: [
          { name: "Couples Therapy", link: "/services/therapy/couples-therapy" },
          { name: "Individual Therapy", link: "/services/therapy/individual-therapy" },
        ],
        cta: "Strengthen your connections"
      }
    }
    return {
      title: "Mental Wellness Support",
      description: "Our licensed therapists are here to help you navigate life's challenges with compassion and evidence-based techniques.",
      services: [
        { name: "Individual Therapy", link: "/services/therapy/individual-therapy" },
        { name: "EMDR Therapy", link: "/services/therapy/emdr-therapy" },
        { name: "Hypnotherapy", link: "/services/therapy/hypnotherapy" },
      ],
      cta: "Start feeling better"
    }
  }
  
  // Wellness-focused results
  if (intent === 'wellness' || focus === 'physical' || focus === 'skin') {
    if (focus === 'skin') {
      return {
        title: "Skin & Beauty Wellness",
        description: "Reveal your natural radiance with our medical-grade skincare treatments and personalized beauty services.",
        services: [
          { name: "HydraFacial", link: "/services/wellness/hydrafacial" },
          { name: "PRP Vampire Facial", link: "/services/wellness/prp-vampire-facial" },
          { name: "Skincare Services", link: "/services/wellness/skincare" },
          { name: "Injectables", link: "/services/wellness/injectables" },
        ],
        cta: "Discover your glow"
      }
    }
    if (focus === 'physical') {
      return {
        title: "Body & Pain Relief",
        description: "Release tension, reduce pain, and restore your body's natural balance with our integrative wellness services.",
        services: [
          { name: "Massage Therapy", link: "/services/wellness/massage" },
          { name: "Acupuncture", link: "/services/wellness/acupuncture" },
          { name: "Pain Management", link: "/services/wellness/pain-management" },
          { name: "Cryotherapy", link: "/services/wellness/cryotherapy" },
        ],
        cta: "Find relief today"
      }
    }
    return {
      title: "Holistic Wellness",
      description: "Nurture your body with our range of wellness services designed to help you look and feel your best.",
      services: [
        { name: "Massage Therapy", link: "/services/wellness/massage" },
        { name: "IV Vitamin Infusion", link: "/services/wellness/iv-vitamin-infusion" },
        { name: "Acupuncture", link: "/services/wellness/acupuncture" },
      ],
      cta: "Explore wellness"
    }
  }
  
  // Both/Explore results
  return {
    title: "Integrated Mind-Body Care",
    description: "You're in the right place. Pathways Within offers both therapy and wellness services under one roof — true whole-person care.",
    services: [
      { name: "Individual Therapy", link: "/services/therapy/individual-therapy" },
      { name: "Massage Therapy", link: "/services/wellness/massage" },
      { name: "All Services", link: "/services" },
    ],
    cta: "Explore all options"
  }
}

export function ServiceFinder() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const currentStep = quizSteps[step]!
  const progress = ((step + 1) / quizSteps.length) * 100

  const handleSelect = (value: string) => {
    setSelectedOption(value)
  }

  const handleNext = () => {
    if (!selectedOption) return
    
    const newAnswers = [...answers, selectedOption]
    setAnswers(newAnswers)
    setSelectedOption(null)
    
    if (step < quizSteps.length - 1) {
      setStep(step + 1)
    } else {
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
      setAnswers(answers.slice(0, -1))
      setSelectedOption(answers[answers.length - 1] || null)
    }
  }

  const handleReset = () => {
    setStep(0)
    setAnswers([])
    setShowResults(false)
    setSelectedOption(null)
  }

  const results = showResults ? getResults(answers) : null

  return (
    <section id="service-finder" className="border-t border-[rgb(var(--border))]/50 bg-white">
      <div className="container-site py-20 lg:py-28">
        <div className="mx-auto max-w-4xl">
          
          {/* Header */}
          <div className="mb-12 text-center">
            <p 
              className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Find Your Path
            </p>
            <h2 className="mb-4 text-[rgb(var(--color-navy))]">
              {showResults ? results?.title : "Not sure where to start?"}
            </h2>
            <p className="text-lg text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
              {showResults 
                ? results?.description 
                : "Take our 30-second quiz to discover which services are right for you."}
            </p>
          </div>

          {!showResults ? (
            <>
              {/* Progress bar */}
              <div className="mb-10">
                <div className="h-1 w-full overflow-hidden rounded-full bg-[rgb(var(--border))]/30">
                  <div 
                    className="h-full rounded-full bg-[rgb(var(--color-green))] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="mt-2 text-right text-sm text-[rgb(var(--color-text-light))]">
                  Step {step + 1} of {quizSteps.length}
                </p>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="mb-2 text-center text-[rgb(var(--color-navy))]" style={{ fontWeight: 400 }}>
                  {currentStep.question}
                </h3>
                {currentStep.subtitle && (
                  <p className="text-center text-[rgb(var(--color-text-light))]">
                    {currentStep.subtitle}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="mb-10 grid gap-4 sm:grid-cols-2">
                {currentStep.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={`group flex items-center gap-4 rounded-lg border p-5 text-left transition-all ${
                      selectedOption === option.value
                        ? 'border-[rgb(var(--color-green))] bg-[rgb(var(--color-green))]/5'
                        : 'border-[rgb(var(--border))]/50 bg-white hover:border-[rgb(var(--border))]'
                    }`}
                  >
                    <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                      selectedOption === option.value
                        ? 'bg-[rgb(var(--color-green))] text-white'
                        : 'bg-[rgb(var(--color-linen))] text-[rgb(var(--color-navy))]'
                    }`}>
                      {option.icon}
                    </span>
                    <span className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handleBack}
                  disabled={step === 0}
                  className={`inline-flex items-center gap-2 text-sm transition-colors ${
                    step === 0 
                      ? 'cursor-not-allowed text-[rgb(var(--color-text-light))]/50' 
                      : 'text-[rgb(var(--color-navy))] hover:text-[rgb(var(--color-green))]'
                  }`}
                  style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
                
                <button
                  onClick={handleNext}
                  disabled={!selectedOption}
                  className={`btn-pill ${
                    selectedOption 
                      ? 'btn-pill-primary' 
                      : 'pointer-events-none opacity-50'
                  }`}
                >
                  <span className="btn-text">
                    {step === quizSteps.length - 1 ? 'See results' : 'Continue'}
                  </span>
                  <span className="btn-arrow">
                    <ArrowRight />
                  </span>
                </button>
              </div>
            </>
          ) : (
            /* Results */
            <>
              {/* Recommended services */}
              <div className="mb-10 grid gap-4 sm:grid-cols-3">
                {results?.services.map((service) => (
                  <Link
                    key={service.link}
                    href={service.link}
                    className="group rounded-lg border border-[rgb(var(--border))]/50 bg-white p-6 text-center transition-all hover:border-[rgb(var(--color-green))] hover:shadow-md"
                  >
                    <span 
                      className="block text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]"
                      style={{ fontWeight: 500 }}
                    >
                      {service.name}
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm text-[rgb(var(--color-text-light))]">
                      Learn more
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact" className="btn-pill btn-pill-primary">
                  <span className="btn-text">{results?.cta}</span>
                  <span className="btn-arrow">
                    <ArrowRight />
                  </span>
                </Link>
                
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-sm text-[rgb(var(--color-navy))] transition-colors hover:text-[rgb(var(--color-green))]"
                  style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Take quiz again
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
