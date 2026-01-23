/**
 * Utility functions for team member headshots
 * Maps team member names to their headshot images
 */

// Headshot mapping by team member name
const HEADSHOT_MAP: Record<string, string> = {
  // Leadership - CEO/Founder only
  'Rachel Lessard': '/headshots/Rachel Lessard headshot 2.jpeg',
  
  // Clinical Team
  'Benjamin Marmorstein': '/headshots/Benjamin Marmorstein headshot 1.jpeg',
  'Beth Gabellini': '/headshots/Beth Gabellini headshot 1.jpg',
  'Carly Sandstrom': '/headshots/Carly Sandstrom headshot 1.jpg',
  'Jennifer Thieke': '/headshots/Jennifer Thieke headshot 1.jpg',
  'Joe Bush': '/headshots/Joseph Bush headshot 1.jpg',
  'Joseph Bush': '/headshots/Joseph Bush headshot 1.jpg',
  'Joy Fullhardt': '/headshots/Joy Fullhardt headshot 1.jpg',
  'Ksusha Cascio': '/headshots/Ksusha Cascio headshot 2.jpeg',
  'Laura DeSilva': '/headshots/Madiha Aziz headshot 1.jpg', // placeholder - needs correct headshot
  'Lauren Hollander': '/headshots/Lauren Vanchieri-Hollander and Gypsy headshot 1.jpeg',
  'Lee Wasser': '/headshots/Lee Wasser headshot 1.jpeg',
  'Paula Gonthier': '/headshots/Paula Gonthier headshot 1.jpeg',
  'Ryan Gallo': '/headshots/Ryan Gallo headshot 1 .jpeg',
  'Samantha Juravich': '/headshots/Gloria Saladino headshot 1.jpg', // placeholder - needs correct headshot
  'Samantha Tavel': '/headshots/Samantha Tavel headshot 1.jpg',
  'Stephanie Procopiou': '/headshots/Stephanie Procopiou headshot 1.jpeg',
  'Tia Baumohl': '/headshots/Tia Baumohl headshot 1.jpeg',
  
  // Associate Team
  'Anna Ostrow': '/headshots/Anna Ostrow headshot 1.jpeg',
  'Alexandra Cella': '/headshots/Alexandra Cella headshot 1.jpg',
  'Charity (Valen) Meyer': '/headshots/Charity (Valen) Meyer headshot 1.jpeg',
  'Chelsea Bell': '/headshots/Chelsea Bell headshot 1.jpg',
  'Frank Tropeano': '/headshots/Frank Tropeano headshot 1.jpeg',
  'Jen Brooks': '/headshots/Jennifer Brooks headshot 1.jpg',
  'Jennifer Brooks': '/headshots/Jennifer Brooks headshot 1.jpg',
  'Joshua P. Locantore': '/headshots/Kalovna Edmond headshot 1.jpeg', // placeholder
  'Juliette Squicciarini': '/headshots/Juliette Squicciarini headshot 1.jpeg',
  'Kaitlyn Kelly': '/headshots/Kaitlin Kelly headshot 2.jpeg',
  'Kathleen Dimartino': '/headshots/Kathleen DeMartino headshot 1.jpg',
  'Kelly Imperial': '/headshots/Kelly Imperial headshot-1.jpg',
  'Lindsay Laier': '/headshots/Lindsay Laier headshot 2.jpeg',
  'Maddy Zambri': '/headshots/Madeline Zambri headshot 1.jpeg',
  'Mariah Simone': '/headshots/Mariah Simone headshot 2.jpeg',
  'Nicole Duffy': '/headshots/Briana Nelson headshot 1.jpg', // placeholder
  'Zach Pardo': '/headshots/Frank Tropeano headshot 2.jpeg', // placeholder
  
  // Wellness Team
  'Christine Cervo': '/headshots/Christine Cervo headshot 1.jpeg',
  'Nicole Imbasciani': '/headshots/Emily Dugan headshot 2.jpeg', // placeholder
  'Evelina Abayev': '/headshots/Evelina Abayev headshot 1.jpeg',
  'Angela Gestone': '/headshots/Angela Gestone headshot 1.jpeg',
}

/**
 * Get headshot for a team member by name
 * Returns office image as fallback if no headshot found
 */
export function getHeadshotForPerson(name: string, fallbackOfficeIndex: number = 0): string {
  // Try exact match first
  if (HEADSHOT_MAP[name]) {
    return HEADSHOT_MAP[name]
  }
  
  // Try matching without credentials (e.g., "Rachel Lessard, LCSW-R" -> "Rachel Lessard")
  const nameWithoutCredentials = name.split(',')[0]?.trim()
  if (nameWithoutCredentials && HEADSHOT_MAP[nameWithoutCredentials]) {
    return HEADSHOT_MAP[nameWithoutCredentials]
  }
  
  // Fallback to placeholder
  const { PLACEHOLDER_IMAGE } = require('./placeholder-image')
  return PLACEHOLDER_IMAGE
}

/**
 * Check if a headshot exists for a person
 */
export function hasHeadshot(name: string): boolean {
  const nameWithoutCredentials = name.split(',')[0]?.trim()
  return !!(HEADSHOT_MAP[name] || (nameWithoutCredentials && HEADSHOT_MAP[nameWithoutCredentials]))
}
