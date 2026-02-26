export type ProviderCategory = 'Mental Health' | 'Wellness' | 'Medication Management'

export interface Provider {
  id: string
  name: string
  title: string
  /** Optional headshot image path. Use placeholder/initials when absent. */
  image?: string
  licenses: string[]
  education: string[]
  psychologyTodayUrl?: string
  locations: string[]
  specialties: string[]
  populations: string[]
  category: ProviderCategory
  /** 3 bullet points for compact card preview */
  shortBio: string[]
  /** 3–4 paragraphs for expanded full bio */
  longBio: string[]
  available: boolean
}

export const providers: Provider[] = [
  {
    id: 'rachel-founder',
    name: 'Rachel Goldstein',
    title: 'LCSW, Founder & CEO',
    licenses: ['Licensed Clinical Social Worker (LCSW)', 'New York State Licensed'],
    education: [
      'MSW, Adelphi University School of Social Work',
      'BA, Psychology, University of Albany',
    ],
    psychologyTodayUrl: 'https://www.psychologytoday.com',
    locations: ['Garden City — Wisdom', 'Smithtown', 'Virtual'],
    specialties: [
      'Trauma & PTSD',
      'Anxiety',
      'Depression',
      'Life Transitions',
      'Women\'s Issues',
    ],
    populations: ['Adults', 'Young Adults', 'Women'],
    category: 'Mental Health',
    shortBio: [
      'Founder and CEO of Pathways Within - Wisdom and Wellness Collaborative',
      'Specializes in trauma-informed care using EMDR and somatic approaches',
      'Passionate about integrating mental health and holistic wellness',
    ],
    longBio: [
      'Rachel Goldstein, LCSW is the Founder and CEO of Pathways Within - Wisdom and Wellness Collaborative. With over a decade of experience in mental health practice, Rachel has dedicated her career to building a space where healing is truly holistic.',
      'Drawing on the metaphor of the labyrinth — a symbol of the inward journey — Rachel developed the Collaborative\'s 360° approach, which recognizes that mental, physical, and spiritual wellbeing are deeply interconnected.',
      'Rachel specializes in trauma-informed care and uses evidence-based approaches including EMDR and somatic therapy to support individuals through complex life experiences.',
    ],
    available: true,
  },
  {
    id: 'therapist-1',
    name: 'Sarah Chen',
    title: 'LMHC',
    licenses: ['Licensed Mental Health Counselor (LMHC)', 'New York State Licensed'],
    education: [
      'MA, Mental Health Counseling, Hofstra University',
      'BA, Psychology, Stony Brook University',
    ],
    psychologyTodayUrl: 'https://www.psychologytoday.com',
    locations: ['Massapequa', 'Port Jefferson', 'Virtual'],
    specialties: [
      'Anxiety',
      'Depression',
      'Couples Therapy',
      'Grief & Loss',
      'Cognitive Behavioral Therapy (CBT)',
    ],
    populations: ['Adults', 'Couples', 'Older Adults'],
    category: 'Mental Health',
    shortBio: [
      'Licensed Mental Health Counselor with 8 years of clinical experience',
      'Expertise in CBT, DBT, and mindfulness-based approaches',
      'Dedicated to creating a safe, non-judgmental space for healing',
    ],
    longBio: [
      'Sarah Chen, LMHC brings warmth and evidence-based practice together in her work with adults and couples. With 8 years of clinical experience, she draws on cognitive behavioral therapy, dialectical behavior therapy, and mindfulness-based interventions to help clients navigate anxiety, depression, grief, and relationship challenges.',
      'Sarah believes that therapy is a collaborative journey and works with each client to develop a treatment plan that honors their unique goals and pace.',
    ],
    available: true,
  },
  {
    id: 'therapist-2',
    name: 'Marcus Williams',
    title: 'LCSW',
    licenses: ['Licensed Clinical Social Worker (LCSW)', 'New York State Licensed'],
    education: [
      'MSW, Columbia University School of Social Work',
      'BA, Sociology, Fordham University',
    ],
    psychologyTodayUrl: 'https://www.psychologytoday.com',
    locations: ['Garden City — Wisdom', 'Rockville Centre', 'Virtual'],
    specialties: [
      'Trauma & PTSD',
      'EMDR Therapy',
      'Veterans & First Responders',
      'Anger Management',
      'Men\'s Issues',
    ],
    populations: ['Adults', 'Veterans', 'First Responders', 'Men'],
    category: 'Mental Health',
    shortBio: [
      'Certified EMDR therapist with specialized training in trauma recovery',
      'Cultural competency in working with veterans and first responders',
      'Committed to reducing the stigma around men seeking mental health support',
    ],
    longBio: [
      'Marcus Williams, LCSW is a certified EMDR therapist with specialized experience supporting veterans, first responders, and men navigating trauma and life challenges.',
      'Having trained at Columbia University, Marcus brings a rigorous clinical foundation to his work alongside deep cultural competency. He understands the unique pressures of service and creates a space where clients can engage with their healing without judgment.',
    ],
    available: true,
  },
  {
    id: 'therapist-3',
    name: 'Emily Torres',
    title: 'LMFT',
    licenses: ['Licensed Marriage and Family Therapist (LMFT)', 'New York State Licensed'],
    education: [
      'MS, Marriage and Family Therapy, Iona University',
      'BA, Communications, Queens College',
    ],
    psychologyTodayUrl: 'https://www.psychologytoday.com',
    locations: ['Smithtown', 'Massapequa', 'Virtual'],
    specialties: [
      'Child Therapy',
      'Teen Therapy',
      'Family Systems',
      'Play Therapy',
      'School-Related Challenges',
    ],
    populations: ['Children', 'Adolescents', 'Families'],
    category: 'Mental Health',
    shortBio: [
      'Licensed Marriage and Family Therapist specializing in children and teens',
      'Certified in play therapy and trauma-informed approaches for young people',
      'Partners with parents and schools to support the whole child',
    ],
    longBio: [
      'Emily Torres, LMFT specializes in supporting children, adolescents, and families through life\'s toughest moments. Using play therapy, family systems approaches, and trauma-informed practice, Emily creates a safe and creative environment where young clients can express themselves fully.',
      'She works closely with parents and, when appropriate, school systems to ensure consistent support across all areas of a child\'s life.',
    ],
    available: true,
  },
  {
    id: 'therapist-4',
    name: 'David Park',
    title: 'PhD, Licensed Psychologist',
    licenses: ['Licensed Psychologist', 'New York State Licensed'],
    education: [
      'PhD, Clinical Psychology, St. John\'s University',
      'MA, Psychology, The New School',
      'BA, Neuroscience, Cornell University',
    ],
    psychologyTodayUrl: 'https://www.psychologytoday.com',
    locations: ['Port Jefferson', 'Garden City — Wisdom', 'Virtual'],
    specialties: [
      'Somatic Therapy',
      'Hypnotherapy',
      'Chronic Pain',
      'Weight Loss Surgery Support',
      'Mind-Body Connection',
    ],
    populations: ['Adults', 'Older Adults'],
    category: 'Mental Health',
    shortBio: [
      'Licensed Psychologist with expertise in somatic and mind-body approaches',
      'Integrates hypnotherapy and somatic techniques for complex presentations',
      'Published researcher in the field of chronic pain and psychological wellbeing',
    ],
    longBio: [
      'Dr. David Park, PhD is a licensed psychologist whose practice sits at the intersection of mind and body. Drawing on somatic therapy, clinical hypnotherapy, and depth psychology, Dr. Park works with adults navigating chronic pain, unexplained physical symptoms, and the profound psychological dimensions of health challenges.',
      'He provides pre- and post-operative psychological support for bariatric surgery patients and brings a compassionate, scientifically grounded approach to each client.',
    ],
    available: true,
  },
  {
    id: 'np-med-management',
    name: 'Nurse Practitioner — Coming Soon',
    title: 'PMHNP',
    licenses: ['Psychiatric Mental Health Nurse Practitioner (PMHNP)', 'New York State Licensed'],
    education: [
      'MSN, Psychiatric Nursing, placeholder',
    ],
    locations: ['Garden City — Wisdom', 'Smithtown'],
    specialties: [
      'Medication Management',
      'Psychiatric Evaluation',
      'Depression',
      'Anxiety',
      'ADHD',
    ],
    populations: ['Adults', 'Adolescents'],
    category: 'Medication Management',
    shortBio: [
      'Psychiatric Mental Health Nurse Practitioner joining the Collaborative',
      'Specializes in psychiatric evaluation and medication management',
      'Full bio and details available upon onboarding',
    ],
    longBio: [
      'Our Psychiatric Mental Health Nurse Practitioner is joining the Pathways Within - Wisdom and Wellness Collaborative team. They will offer psychiatric evaluation and medication management services integrated within our 360° care model.',
      'Full provider details, including specialties and scheduling, will be available following their onboarding. We look forward to introducing this expanded service to our community.',
    ],
    available: false,
  },
]

export const providersList = providers

export function getProvidersByCategory(category: ProviderCategory) {
  return providers.filter((p) => p.category === category)
}

export function getProvidersByLocation(location: string) {
  return providers.filter((p) => p.locations.includes(location))
}

export function getAvailableProviders() {
  return providers.filter((p) => p.available)
}
