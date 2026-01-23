/**
 * PLACEHOLDER IMAGE UTILITY
 * 
 * USE THIS EVERYWHERE FOR HERO IMAGES
 * Dead simple - just returns the placeholder path
 */

export const PLACEHOLDER_IMAGE = '/placeholder-grey.svg'

/**
 * Get placeholder image
 * This is the ONLY function to use for hero images until real photos are added
 */
export function getPlaceholderImage(): string {
  return PLACEHOLDER_IMAGE
}

/**
 * @deprecated - DO NOT USE - Use getPlaceholderImage() instead
 */
export function getHeroImageByIndex(index: number): string {
  console.warn('⚠️ getHeroImageByIndex is deprecated - use getPlaceholderImage() instead')
  return PLACEHOLDER_IMAGE
}

/**
 * @deprecated - DO NOT USE - Use getPlaceholderImage() instead
 */
export function getOfficeImageByIndex(index: number): string {
  console.warn('⚠️ getOfficeImageByIndex is deprecated - use getPlaceholderImage() instead')
  return PLACEHOLDER_IMAGE
}

export default PLACEHOLDER_IMAGE
