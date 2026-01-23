/**
 * Hero Images - AI-generated diverse people photos for hero sections
 * These are large, impressive photos meant for hero banners
 */

// All hero images - diverse people, couples, families, groups
export const HERO_IMAGES = [
  '/hero-images/freepik__a-diverse-group-of-smiling-adults-east-asian-femal__72299.jpeg',
  '/hero-images/freepik__a-group-of-smiling-adults-of-various-ethnicities-i__72292.jpeg',
  '/hero-images/freepik__a-diverse-group-of-three-young-adults-two-women-an__72250.jpeg',
  '/hero-images/freepik__a-black-couple-in-their-late-30s-holding-hands-and__72251.jpeg',
  '/hero-images/freepik__a-latina-woman-and-a-white-man-a-straight-couple-w__72281.jpeg',
  '/hero-images/freepik__a-latino-couple-a-man-and-woman-in-their-30s-with-__72268.jpeg',
  '/hero-images/freepik__a-mixedrace-couple-one-black-and-one-east-asian-in__72275.jpeg',
  '/hero-images/freepik__two-east-asian-women-a-lesbian-couple-beaming-with__72286.jpeg',
  '/hero-images/freepik__a-mixedrace-family-of-four-parents-and-two-childre__72248.jpeg',
  '/hero-images/freepik__a-latino-family-of-four-parents-and-two-children-o__72266.jpeg',
  '/hero-images/freepik__a-studio-shot-featuring-a-diverse-family-of-five-p__72245.jpeg',
  '/hero-images/freepik__a-multigenerational-black-family-of-three-includin__72259.jpeg',
  '/hero-images/freepik__a-group-of-three-friends-one-hispanic-woman-and-tw__72246.jpeg',
  '/hero-images/freepik__a-diverse-group-of-three-indian-people-including-a__72272.jpeg',
  '/hero-images/freepik__four-adults-two-men-and-two-women-of-diverse-desce__72293.jpeg',
  '/hero-images/freepik__a-mixedgender-group-of-adults-including-a-latina-w__72297.jpeg',
  '/hero-images/freepik__a-caucasian-family-of-four-parents-and-two-childre__72254.jpeg',
  '/hero-images/freepik__two-young-adult-latino-men-one-with-a-shaved-head-__72263.jpeg',
  '/hero-images/freepik__a-mixedage-group-of-3-black-individuals-a-family-p__72258.jpeg',
  '/hero-images/freepik__a-studio-shot-of-two-latino-women-one-in-her-40s-w__72267.jpeg',
] as const

/**
 * Get a random hero image
 */
export function getRandomHeroImage(): string {
  return HERO_IMAGES[Math.floor(Math.random() * HERO_IMAGES.length)] ?? HERO_IMAGES[0]!
}

/**
 * Get a hero image by index (for consistent placement)
 */
export function getHeroImageByIndex(index: number): string {
  return HERO_IMAGES[index % HERO_IMAGES.length] ?? HERO_IMAGES[0]!
}

/**
 * Get all hero images
 */
export function getAllHeroImages(): readonly string[] {
  return HERO_IMAGES
}
