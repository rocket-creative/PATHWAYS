export type ServiceCategory = 'Mental Health' | 'Wellness' | 'Medication Management'

export interface ServiceEntry {
  slug: string
  name: string
  headline: string
  category: ServiceCategory
  href: string
  comingSoon?: boolean
}

export const allServices: ServiceEntry[] = [
  // Mental Health (Wisdom)
  {
    slug: 'individual-therapy',
    name: 'Individual Therapy',
    headline: 'Personal growth and healing',
    category: 'Mental Health',
    href: '/wisdom/services/individual-therapy',
  },
  {
    slug: 'couples-therapy',
    name: 'Couples Therapy',
    headline: 'Strengthening your connection',
    category: 'Mental Health',
    href: '/wisdom/services/couples-therapy',
  },
  {
    slug: 'child-therapy',
    name: 'Child Therapy',
    headline: 'Supporting young minds',
    category: 'Mental Health',
    href: '/wisdom/services/child-therapy',
  },
  {
    slug: 'teen-therapy',
    name: 'Teen Therapy',
    headline: 'Support for adolescents',
    category: 'Mental Health',
    href: '/wisdom/services/teen-therapy',
  },
  {
    slug: 'trauma-therapy',
    name: 'Trauma Therapy',
    headline: 'Healing from difficult experiences',
    category: 'Mental Health',
    href: '/wisdom/services/trauma-therapy',
  },
  {
    slug: 'emdr-therapy',
    name: 'EMDR Therapy',
    headline: 'Eye Movement Desensitization and Reprocessing',
    category: 'Mental Health',
    href: '/wisdom/services/emdr-therapy',
  },
  {
    slug: 'somatic-therapy',
    name: 'Somatic Therapy',
    headline: 'Healing through the body',
    category: 'Mental Health',
    href: '/wisdom/services/somatic-therapy',
  },
  {
    slug: 'hypnotherapy',
    name: 'Hypnotherapy',
    headline: 'Access your unconscious mind',
    category: 'Mental Health',
    href: '/wisdom/services/hypnotherapy',
  },
  {
    slug: 'veterans-first-responders',
    name: 'Veterans & First Responders',
    headline: 'Support for those who serve',
    category: 'Mental Health',
    href: '/wisdom/services/veterans-first-responders',
  },
  {
    slug: 'weight-loss-surgery-support',
    name: 'Weight Loss Surgery Support',
    headline: 'Pre and post operative care',
    category: 'Mental Health',
    href: '/wisdom/services/weight-loss-surgery-support',
  },
  // Medication Management
  {
    slug: 'medication-management',
    name: 'Medication Management',
    headline: 'Psychiatric evaluation and ongoing medication care',
    category: 'Medication Management',
    href: '/wisdom/services/medication-management',
    comingSoon: true,
  },
  // Wellness
  {
    slug: 'massage',
    name: 'Massage Therapy',
    headline: 'Relaxation and relief',
    category: 'Wellness',
    href: '/wellness/services/massage',
  },
  {
    slug: 'acupuncture',
    name: 'Acupuncture',
    headline: 'Traditional Chinese medicine',
    category: 'Wellness',
    href: '/wellness/services/acupuncture',
  },
  {
    slug: 'energy-work',
    name: 'Energy Work',
    headline: 'Restore your natural balance',
    category: 'Wellness',
    href: '/wellness/services/energy-work',
  },
  {
    slug: 'pain-management',
    name: 'Pain Management',
    headline: 'Natural approaches to chronic pain',
    category: 'Wellness',
    href: '/wellness/services/pain-management',
  },
  {
    slug: 'iv-vitamin-infusion',
    name: 'IV Vitamin Infusion',
    headline: 'Rehydrate and revitalize',
    category: 'Wellness',
    href: '/wellness/services/iv-vitamin-infusion',
  },
  {
    slug: 'injectables',
    name: 'Injectables',
    headline: 'Neuromodulators and dermal fillers',
    category: 'Wellness',
    href: '/wellness/services/injectables',
  },
  {
    slug: 'skincare',
    name: 'Skincare',
    headline: 'Customized skin health',
    category: 'Wellness',
    href: '/wellness/services/skincare',
  },
  {
    slug: 'hydrafacial',
    name: 'HydraFacial',
    headline: 'Advanced skin resurfacing',
    category: 'Wellness',
    href: '/wellness/services/hydrafacial',
  },
]

export function getServicesByCategory(category: ServiceCategory) {
  return allServices.filter((s) => s.category === category)
}
