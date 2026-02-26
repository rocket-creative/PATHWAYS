// FAQ content for page and FAQPage JSON-LD schema

export const faqCategories = [
  {
    name: 'About the Collaborative',
    questions: [
      { q: 'What is Pathways Within - Wisdom and Wellness Collaborative?', a: 'Pathways Within - Wisdom and Wellness Collaborative is an integrated care practice on Long Island. We bring licensed mental health therapists, holistic wellness providers, and medical professionals together under one roof. Our 360° approach means your care team can coordinate directly — so your therapist, wellness provider, and medication manager are working from the same page.' },
      { q: 'What does the 360° approach mean?', a: 'The 360° approach means we look at the whole person, not just the presenting concern. During your intake, we explore what brings you in and how it affects sleep, stress, energy, relationships, physical health, and more. We may suggest therapy, wellness services, medication management, or a combination — always optional, always personalized, never prescriptive.' },
      { q: 'Who founded Pathways Within?', a: 'Rachel Goldstein, LCSW founded Pathways Within with a vision shaped by years of clinical practice and a deep belief that healing is non-linear. As Founder and CEO, Rachel leads the Collaborative as both its clinical director and an active clinician, specializing in trauma-informed care, EMDR, and somatic approaches.' },
      { q: 'What makes the Collaborative different from other practices?', a: 'Most practices keep therapy in one building and wellness in another, with no communication between providers. We built Pathways Within so your therapist, wellness provider, and medication manager are in the same space and can coordinate your care. That integration is the core of our model.' },
      { q: 'What is the meaning of the labyrinth in your logo?', a: 'The labyrinth is a symbol of the inward journey — ancient, non-linear, and purposeful. Unlike a maze, a labyrinth has no dead ends. Every path leads inward and eventually back out again. We chose it because healing works the same way: it is not always a straight line, but every step has meaning.' },
      { q: 'Where are you located?', a: 'We have six locations across the greater Long Island area: Garden City — Wisdom, Garden City — Wellness, Port Jefferson, Massapequa, Smithtown, and Rockville Centre. Each location offers dedicated parking for your convenience.' },
    ],
  },
  {
    name: 'Getting Started',
    questions: [
      { q: 'How do I get started?', a: 'The best first step is to complete our intake form at pathwayswithin.com/client-intake. Our front desk team will review your information and reach out within one business day to schedule your first appointment and match you with the right provider.' },
      { q: 'Do I need a referral?', a: 'No referral is needed. You can contact us directly, complete the intake form on our website, or call our office. Our team will guide you from there.' },
      { q: 'Can I take the quiz before filling out the intake form?', a: 'Yes. When you first visit our website, you will see a short quiz that helps us understand what you are looking for. Your answers will be used to prefill parts of your intake form so our team has everything they need before your first call.' },
      { q: 'How does booking work?', a: 'We do not use online booking. After you submit an intake form, our front desk team will personally reach out to schedule your appointment and ensure the right provider match. We believe the intake process is too important to leave to an automated system.' },
    ],
  },
  {
    name: 'Insurance',
    questions: [
      { q: 'Do you accept insurance?', a: 'Yes. We are in-network with most major insurance providers in New York. We accept Aetna, Cigna, Optum, UHC, Oxford, UMR, Oscar, 1199, Meritain, Magnacare, Humana, Medicare, NYSHIP, Student Resource Allied Benefit, ComPsych, VA Community Care benefits, MVP, and Northwell Brighton Health.' },
      { q: 'Is insurance the same for all providers?', a: 'Yes. All providers at Pathways Within operate under our practice-level insurance contracts. You do not need to verify individual provider insurance separately.' },
      { q: 'Do you offer sliding scale fees?', a: 'Yes. We offer a limited number of sliding scale spots based on financial need and availability. If you are paying out of pocket and have concerns about affordability, please speak with us directly. Our goal is to make care as accessible as possible.' },
    ],
  },
  {
    name: 'Scheduling',
    questions: [
      { q: 'How often will we meet?', a: 'At the beginning, we typically meet once a week — more often if therapeutically necessary. The work you are doing may grow or change, and the schedule will flex with you. You and your provider will decide together.' },
      { q: 'How long do sessions last?', a: 'Therapy sessions are one full hour. Some specialty sessions (such as EMDR) may run 60 to 90 minutes. Wellness service durations vary by treatment.' },
      { q: 'What is your cancellation policy?', a: 'Appointments must be canceled at least 72 hours in advance. There is a $75 fee for appointments canceled within the 72-hour window or missed without notice.' },
      { q: 'Do you offer evening appointments?', a: 'Yes. We offer appointments outside regular business hours with advance scheduling. Select clinicians are available up to 11pm.' },
    ],
  },
  {
    name: 'Telehealth',
    questions: [
      { q: 'Do you offer virtual therapy sessions?', a: 'Yes. Therapy sessions can be offered virtually through our HIPAA-compliant platform, SimplePractice. You can choose telehealth exclusively or alternate between in-person and virtual visits.' },
      { q: 'Is virtual therapy private?', a: 'Absolutely. SimplePractice is both HIPAA-compliant and VeriSign security sealed. Your privacy is crucial to us, and we take every step to ensure confidentiality — in person and virtually.' },
      { q: 'Where can you provide telehealth services?', a: 'We offer telehealth therapy to clients in New York, New Jersey, North Carolina, and Florida.' },
    ],
  },
  {
    name: 'Therapy',
    questions: [
      { q: 'Why would I want to talk to a therapist?', a: 'Therapists are trained to provide an unbiased, judgment-free perspective — something friends and family, no matter how supportive, cannot always offer. Therapy gives you dedicated space to process experiences, develop coping strategies, and work toward meaningful change at your own pace.' },
      { q: 'How long do I need to be in therapy?', a: 'Therapy works on your timeline. The length and frequency depends on your goals and what you are working through. Some clients come for a specific issue over a few months; others build an ongoing relationship with their therapist over years. You always have the choice.' },
      { q: 'How confidential is therapy?', a: 'We adhere strictly to HIPAA and APA ethical guidelines. Your information is confidential with limited exceptions: if there is imminent risk of harm to yourself or others, or if a child or elderly person is at risk, we are legally required to act. Your therapist will explain these limits at the start of treatment.' },
    ],
  },
] as const

export const allFaqs = faqCategories.flatMap((c) =>
  c.questions.map((q) => ({ question: q.q, answer: q.a }))
)
