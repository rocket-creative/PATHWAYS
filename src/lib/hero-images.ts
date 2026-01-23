/**
 * Hero Images - Simple mapping for all pages
 */

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
} as const

export type PageHeroKey = keyof typeof PAGE_HEROES

/**
 * Get hero image for a specific page
 */
export function getHeroImage(page: PageHeroKey): string {
  return PAGE_HEROES[page]
}

/**
 * Get homepage hero image
 */
export function getHomepageHeroImage(): string {
  return PAGE_HEROES.homepage
}
