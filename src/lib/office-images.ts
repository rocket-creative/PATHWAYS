/**
 * Utility functions for office images
 * Provides access to office images throughout the website
 */

export const OFFICE_IMAGES = [
  '/offices/garden-city.jpg',
  '/offices/port-jefferson.jpg',
  '/offices/massapequa.jpg',
  '/offices/smithtown.jpg',
  '/offices/rockville-centre.jpg',
] as const

/**
 * Get a random office image
 */
export function getRandomOfficeImage(): string {
  return OFFICE_IMAGES[Math.floor(Math.random() * OFFICE_IMAGES.length)]
}

/**
 * Get an office image by index (useful for consistent placement)
 */
export function getOfficeImageByIndex(index: number): string {
  return OFFICE_IMAGES[index % OFFICE_IMAGES.length]
}

/**
 * Get office image for a specific location name
 */
export function getOfficeImageForLocation(locationName: string): string {
  const imageMap: Record<string, string> = {
    'Garden City': '/offices/garden-city.jpg',
    'Port Jefferson': '/offices/port-jefferson.jpg',
    'Massapequa': '/offices/massapequa.jpg',
    'Smithtown': '/offices/smithtown.jpg',
    'Rockville Centre': '/offices/rockville-centre.jpg',
  }
  return imageMap[locationName] || OFFICE_IMAGES[0]
}

/**
 * Get all office images
 */
export function getAllOfficeImages(): readonly string[] {
  return OFFICE_IMAGES
}
