'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { X, ArrowRight, ChevronRight } from 'lucide-react'

const QUIZ_KEY = 'pw_quiz_shown'

interface QuizStep {
  id: string
  question: string
  options: { label: string; value: string }[]
}

const quizSteps: QuizStep[] = [
  {
    id: 'looking_for',
    question: 'What brings you to Pathways Within today?',
    options: [
      { label: 'Mental health support or therapy', value: 'mental_health' },
      { label: 'Wellness or holistic care', value: 'wellness' },
      { label: 'Medication evaluation', value: 'medication' },
      { label: 'Not sure — I need guidance', value: 'unsure' },
    ],
  },
  {
    id: 'age_group',
    question: 'Who is the care for?',
    options: [
      { label: 'Myself (adult)', value: 'adult' },
      { label: 'My child (under 12)', value: 'child' },
      { label: 'My teenager (12–17)', value: 'teen' },
      { label: 'My partner and myself', value: 'couple' },
    ],
  },
  {
    id: 'urgency',
    question: 'How soon are you hoping to get started?',
    options: [
      { label: 'As soon as possible', value: 'asap' },
      { label: 'Within the next 2–4 weeks', value: 'soon' },
      { label: 'Just exploring options right now', value: 'exploring' },
    ],
  },
  {
    id: 'location',
    question: 'Which location is most convenient for you?',
    options: [
      { label: 'Garden City', value: 'garden_city' },
      { label: 'Massapequa', value: 'massapequa' },
      { label: 'Smithtown', value: 'smithtown' },
      { label: 'Port Jefferson', value: 'port_jefferson' },
      { label: 'Rockville Centre', value: 'rockville_centre' },
      { label: 'Virtual / Telehealth', value: 'virtual' },
    ],
  },
]

export function QuizPopup() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  useEffect(() => {
    const shown = sessionStorage.getItem(QUIZ_KEY)
    if (!shown) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    sessionStorage.setItem(QUIZ_KEY, 'true')
    setIsVisible(false)
  }

  const handleNext = () => {
    if (!selectedOption) return
    const step = quizSteps[currentStep]
    const newAnswers = { ...answers, [step.id]: selectedOption }
    setAnswers(newAnswers)
    setSelectedOption(null)

    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Build query params and navigate to intake
      sessionStorage.setItem(QUIZ_KEY, 'true')
      const params = new URLSearchParams(newAnswers)
      router.push(`/client-intake?${params.toString()}`)
    }
  }

  if (!isVisible) return null

  const step = quizSteps[currentStep]
  const isLastStep = currentStep === quizSteps.length - 1
  const progress = ((currentStep) / quizSteps.length) * 100

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Find the right care for you"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[rgb(var(--color-navy))]/70 backdrop-blur-sm"
        onClick={handleDismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white">
        {/* Progress bar */}
        <div className="h-1 bg-[rgb(var(--border))]">
          <div
            className="h-full bg-[rgb(var(--color-green))] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[rgb(var(--border))]/50 px-6 py-4">
          <div>
            <p
              className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 600 }}
            >
              Find Your Path
            </p>
            <p className="text-xs text-[rgb(var(--color-text-light))]">
              Step {currentStep + 1} of {quizSteps.length}
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="flex h-8 w-8 items-center justify-center text-[rgb(var(--color-text-light))] transition-colors hover:text-[rgb(var(--color-navy))]"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Question */}
        <div className="px-6 py-8">
          <h2
            className="mb-6 text-xl text-[rgb(var(--color-navy))]"
            style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 600, lineHeight: 1.3 }}
          >
            {step.question}
          </h2>

          <div className="space-y-3">
            {step.options.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedOption(option.value)}
                className={`flex w-full items-center justify-between border p-4 text-left transition-all ${
                  selectedOption === option.value
                    ? 'border-[rgb(var(--color-green))] bg-[rgb(var(--color-green))]/5 text-[rgb(var(--color-navy))]'
                    : 'border-[rgb(var(--border))] text-[rgb(var(--color-navy))] hover:border-[rgb(var(--color-green))]/50'
                }`}
              >
                <span className="text-sm font-medium">{option.label}</span>
                <ChevronRight
                  className={`h-4 w-4 flex-shrink-0 transition-colors ${
                    selectedOption === option.value ? 'text-[rgb(var(--color-green))]' : 'text-[rgb(var(--border))]'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[rgb(var(--border))]/50 px-6 py-4">
          <button
            onClick={handleDismiss}
            className="text-sm text-[rgb(var(--color-text-light))] hover:text-[rgb(var(--color-navy))] transition-colors"
          >
            Skip for now
          </button>
          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className="btn-pill btn-pill-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span className="btn-text">{isLastStep ? 'SEE MY OPTIONS' : 'CONTINUE'}</span>
            <span className="btn-arrow">
              <ArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
