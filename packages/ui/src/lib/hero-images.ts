/**
 * Consolidated Hero Images
 * Single source of truth for all hero images across all apps
 */

// Page-specific hero images
export const PAGE_HEROES = {
  // Main site pages
  homepage: '/hero-images/freepik__professional-studio-photograph-of-4-diverse-smilin__19260.jpeg',
  about: '/hero-images/freepik__professional-studio-photograph-of-23-diverse-profe__19266.jpeg',
  team: '/hero-images/freepik__professional-studio-photograph-of-a-small-group-34__19268.jpeg',
  locations: '/hero-images/freepik__professional-studio-portrait-of-one-person-30s40s-__19267.jpeg',
  contact: '/hero-images/freepik__professional-studio-photograph-of-a-person-standin__19269.jpeg',
  start: '/hero-images/freepik__professional-studio-portrait-of-a-person-diverse-w__19265.jpeg',
  faq: '/hero-images/freepik__professional-studio-photograph-of-a-woman-with-pea__19264.jpeg',
  services: '/hero-images/freepik__professional-studio-photograph-of-subject-descript__19259.jpeg',
  
  // Therapy service images
  individualTherapy: '/hero-images/freepik__professional-studio-portrait-of-one-person-woman-o__19262.jpeg',
  couplesTherapy: '/hero-images/freepik__professional-studio-photograph-of-a-couple-any-com__19261.jpeg',
  familyTherapy: '/hero-images/freepik__professional-studio-photograph-of-a-parent-and-tee__19263.jpeg',
  teenTherapy: '/hero-images/freepik__professional-studio-photograph-of-a-parent-and-tee__19263.jpeg',
  childTherapy: '/hero-images/freepik__professional-studio-photograph-of-a-parent-and-tee__19263.jpeg',
  traumaTherapy: '/hero-images/freepik__professional-studio-portrait-of-a-person-diverse-w__19265.jpeg',
  emdrTherapy: '/hero-images/freepik__professional-studio-portrait-of-a-person-diverse-w__19265.jpeg',
  somaticTherapy: '/hero-images/freepik__professional-studio-photograph-of-a-woman-with-pea__19264.jpeg',
  hypnotherapy: '/hero-images/freepik__professional-studio-photograph-of-a-woman-with-pea__19264.jpeg',
  veterans: '/hero-images/freepik__professional-studio-portrait-of-one-person-30s40s-__19267.jpeg',
  
  // Wellness service images
  wellness: '/hero-images/freepik__professional-studio-photograph-of-subject-descript__19259.jpeg',
  massage: '/hero-images/freepik__professional-studio-photograph-of-subject-descript__19259.jpeg',
  acupuncture: '/hero-images/freepik__professional-studio-photograph-of-subject-descript__19259.jpeg',
  skincare: '/hero-images/freepik__professional-studio-photograph-of-subject-descript__19259.jpeg',
} as const

export type PageHeroKey = keyof typeof PAGE_HEROES

/**
 * Get hero image for a specific page
 */
export function getHeroImage(page: PageHeroKey): string {
  return PAGE_HEROES[page]
}

/**
 * Get hero image with fallback
 */
export function getHeroImageSafe(page: string): string {
  const key = page as PageHeroKey
  return PAGE_HEROES[key] || PAGE_HEROES.homepage
}
