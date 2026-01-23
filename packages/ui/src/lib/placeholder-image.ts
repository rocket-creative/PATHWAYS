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

export default PLACEHOLDER_IMAGE
