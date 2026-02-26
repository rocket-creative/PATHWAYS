// About Us page team data
// Management Team: supports Craig's provider bios (short + long format), links to provider directory
// Welcome Team: short bios only (they only appear here)

export interface ManagementTeamMember {
  name: string
  title: string
  role: string
  shortBio: string[]
  longBio: string[]
  image: string
  /** Provider ID for linking to /providers - when set, card links to provider profile */
  providerId?: string
}

export interface WelcomeTeamMember {
  name: string
  role: string
  bio: string
  image: string
}

export const managementTeam: ManagementTeamMember[] = [
  {
    name: 'Rachel Goldstein',
    title: 'LCSW',
    role: 'Founder & CEO',
    shortBio: [
      'Founder and CEO of Pathways Within',
      'Specializes in trauma-informed care, EMDR, and somatic approaches',
      'Licensed Clinical Social Worker with over a decade of clinical experience',
    ],
    longBio: [
      'Rachel Goldstein founded Pathways Within with a vision shaped by years of clinical practice and a deep belief that healing is non-linear. Like the labyrinth at the center of our logo — a symbol of the inward journey, ancient and universal — Rachel built the Collaborative as a space where clients can walk their own path, at their own pace, with the right support alongside them.',
      'A Licensed Clinical Social Worker with specialization in trauma-informed care, EMDR, and somatic approaches, Rachel leads the Collaborative not just as its founder and CEO, but as an active clinician. Her conviction that mental health and physical wellbeing are inseparable is woven into every aspect of how the Collaborative operates.',
      'Under Rachel\'s leadership, Pathways Within has grown to six Long Island locations — each designed to offer the full spectrum of the 360° model. She continues to advocate for integrated care as a standard, not a specialty.',
    ],
    image: '',
    providerId: 'rachel-founder',
  },
  {
    name: 'Clinical Supervisor',
    title: 'Placeholder',
    role: 'Clinical Supervisor',
    shortBio: [
      'Clinical oversight across therapy providers',
      'Full bio being prepared by Craig',
    ],
    longBio: [
      'Full bio being prepared by Craig. This position supports clinical oversight across the Collaborative\'s therapy providers.',
    ],
    image: '',
    providerId: undefined,
  },
  {
    name: 'Wellness Director',
    title: 'Placeholder',
    role: 'Wellness Director',
    shortBio: [
      'Oversees all wellness service offerings',
      'Provider coordination and quality assurance',
      'Full bio being prepared by Craig',
    ],
    longBio: [
      'Full bio being prepared by Craig. Oversees all wellness service offerings and provider coordination.',
    ],
    image: '',
    providerId: undefined,
  },
]

export const welcomeTeam: WelcomeTeamMember[] = [
  {
    name: 'Welcome Team Member',
    role: 'Front Desk',
    bio: 'Coordinates scheduling, answers questions, and ensures your experience from the very first call is warm and seamless. Bio to be provided.',
    image: '',
  },
  {
    name: 'Welcome Team Member',
    role: 'Front Desk',
    bio: 'Your first point of contact for intake and appointment coordination. Bio to be provided.',
    image: '',
  },
  {
    name: 'Welcome Team Member',
    role: 'Front Desk',
    bio: 'Supports scheduling and administrative needs across all locations. Bio to be provided.',
    image: '',
  },
  {
    name: 'Welcome Team Member',
    role: 'Front Desk',
    bio: 'Helps coordinate care and answer questions about our services. Bio to be provided.',
    image: '',
  },
]
