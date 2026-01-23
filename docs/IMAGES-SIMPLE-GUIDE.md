# Simple Image Guide - NO MORE CONFUSION!

## For Hero Images: ONE SIMPLE RULE

### ✅ USE THIS:
```tsx
import { PLACEHOLDER_IMAGE } from '@/lib/placeholder-image'

<Image src={PLACEHOLDER_IMAGE} alt="..." fill />
```

### ❌ NEVER USE:
```tsx
import { getHeroImageByIndex } from '@/lib/hero-images'  // ❌ NO!
import { getOfficeImageByIndex } from '@/lib/office-images'  // ❌ NO!
```

## That's It!

### For Team Headshots (Different!)
```tsx
import { getHeadshotForPerson } from '@/lib/headshot-images'

<Image src={getHeadshotForPerson(person.name, index)} alt="..." fill />
```

### For Office Locations (Different!)
```tsx
// Use actual office photos in /public/offices/
<Image src="/offices/massapequa.jpg" alt="..." fill />
```

---

## Quick Reference Card

**Hero Images** → `PLACEHOLDER_IMAGE` from `@/lib/placeholder-image`  
**Team Photos** → `getHeadshotForPerson()` from `@/lib/headshot-images`  
**Office Photos** → Direct path like `"/offices/garden-city.jpg"`

## When You Add Real Hero Images

1. Add photos to `/public/hero-images/` or `/public/`
2. Create a new file: `/src/lib/real-hero-images.ts`
3. Update the imports to use real paths
4. Keep it simple - just export the paths!

Example:
```typescript
// /src/lib/real-hero-images.ts
export const HERO_IMAGES = {
  homepage: '/hero-images/homepage-hero.jpg',
  therapy: '/hero-images/therapy-hero.jpg',
  wellness: '/hero-images/wellness-hero.jpg',
}

// Then use in components:
import { HERO_IMAGES } from '@/lib/real-hero-images'
<Image src={HERO_IMAGES.homepage} alt="..." fill />
```

**KEEP IT SIMPLE. NO MORE COMPLEX FUNCTIONS.**
