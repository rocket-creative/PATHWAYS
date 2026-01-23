/**
 * Hero Images - Professional studio photos for hero sections
 * These are the new 3:4 portrait images with white backgrounds
 */

// ============================================================================
// HOMEPAGE HERO - Diverse groups, warm and welcoming
// ============================================================================

export const HOMEPAGE_HERO_IMAGES = [
  '/hero-images/freepik__professional-studio-photograph-of-4-diverse-smilin__19260.jpeg',
  '/hero-images/freepik__professional-studio-photograph-of-23-diverse-profe__19266.jpeg',
] as const

// ============================================================================
// THERAPY IMAGES
// ============================================================================

/** Individual therapy - single person, reflective, peaceful */
export const INDIVIDUAL_THERAPY_IMAGES = [
  '/hero-images/freepik__professional-studio-photograph-of-a-woman-with-pea__19264.jpeg',
  '/hero-images/freepik__professional-studio-portrait-of-one-person-30s40s-__19267.jpeg',
  '/hero-images/freepik__professional-studio-portrait-of-one-person-woman-o__19262.jpeg',
  '/hero-images/freepik__professional-studio-portrait-of-a-person-diverse-w__19265.jpeg',
] as const

/** Couples therapy - two people, connection, trust */
export const COUPLES_THERAPY_IMAGES = [
  '/hero-images/freepik__professional-studio-photograph-of-a-couple-any-com__19261.jpeg',
] as const

/** Family therapy - parent + child/teen */
export const FAMILY_THERAPY_IMAGES = [
  '/hero-images/freepik__professional-studio-photograph-of-a-parent-and-tee__19263.jpeg',
] as const

// ============================================================================
// WELLNESS IMAGES
// ============================================================================

export const WELLNESS_IMAGES = [
  '/hero-images/freepik__professional-studio-photograph-of-subject-descript__19259.jpeg',
] as const

// ============================================================================
// ABOUT / TEAM IMAGES
// ============================================================================

export const TEAM_IMAGES = [
  '/hero-images/freepik__professional-studio-photograph-of-a-small-group-34__19268.jpeg',
] as const

// ============================================================================
// GETTING STARTED / CTA IMAGES
// ============================================================================

export const CTA_IMAGES = [
  '/hero-images/freepik__professional-studio-photograph-of-a-person-standin__19269.jpeg',
] as const

// ============================================================================
// ALL HERO IMAGES (includes both old and new)
// ============================================================================

export const ALL_HERO_IMAGES = [
  ...HOMEPAGE_HERO_IMAGES,
  ...INDIVIDUAL_THERAPY_IMAGES,
  ...COUPLES_THERAPY_IMAGES,
  ...FAMILY_THERAPY_IMAGES,
  ...WELLNESS_IMAGES,
  ...TEAM_IMAGES,
  ...CTA_IMAGES,
] as const

// Legacy array for backwards compatibility
export const HERO_IMAGES = ALL_HERO_IMAGES

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get the primary homepage hero image
 */
export function getHomepageHeroImage(): string {
  return HOMEPAGE_HERO_IMAGES[0]
}

/**
 * Get a random hero image
 */
export function getRandomHeroImage(): string {
  return ALL_HERO_IMAGES[Math.floor(Math.random() * ALL_HERO_IMAGES.length)] ?? ALL_HERO_IMAGES[0]
}

/**
 * Get a random image from a category
 */
export function getRandomImage(images: readonly string[]): string {
  return images[Math.floor(Math.random() * images.length)] ?? images[0]
}

/**
 * Get a hero image by index (for consistent placement)
 */
export function getHeroImageByIndex(index: number): string {
  return ALL_HERO_IMAGES[index % ALL_HERO_IMAGES.length] ?? ALL_HERO_IMAGES[0]
}

/**
 * Get an image by index (for consistent placement)
 */
export function getImageByIndex(images: readonly string[], index: number): string {
  return images[index % images.length] ?? images[0]
}

/**
 * Get all hero images
 */
export function getAllHeroImages(): readonly string[] {
  return ALL_HERO_IMAGES
}

/**
 * Image categories for easy access
 */
export const HERO_IMAGE_CATEGORIES = {
  homepage: HOMEPAGE_HERO_IMAGES,
  individualTherapy: INDIVIDUAL_THERAPY_IMAGES,
  couplesTherapy: COUPLES_THERAPY_IMAGES,
  familyTherapy: FAMILY_THERAPY_IMAGES,
  wellness: WELLNESS_IMAGES,
  team: TEAM_IMAGES,
  cta: CTA_IMAGES,
  all: ALL_HERO_IMAGES,
} as const
