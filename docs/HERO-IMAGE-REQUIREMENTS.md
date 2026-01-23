# Hero Image Requirements - Pathways Within

## Image Specifications

### Aspect Ratio & Dimensions
**Aspect Ratio:** **Portrait (3:4 or 4:5)**
- **Recommended:** 3:4 (e.g., 1200x1600px)
- **Also works:** 4:5 (e.g., 1200x1500px)

**Minimum Dimensions:** 1200px width × 1500px height
**Optimal Dimensions:** 1600px width × 2000px height (for retina displays)

### Why Portrait?
The hero images fill the **full vertical height** of the hero section and sit on the **right side** of the page. Portrait orientation ensures:
- ✅ Full coverage without awkward cropping
- ✅ Professional editorial look
- ✅ Works on mobile and desktop
- ✅ Matches your design inspiration

### Technical Details
- **Format:** JPEG or WebP (preferred for smaller file size)
- **File Size:** Under 300KB (optimized for web)
- **Color Profile:** sRGB
- **Quality:** 80-85% (good balance of quality/size)

## How Many Images Needed?

### Minimum Viable Set: **5-10 unique images**
You can reuse images across similar pages, but variety is better for visual interest.

### Recommended Set: **15-20 unique images**
Provides good variety across the site without repetition.

### Full Coverage: **30+ images**
Every page has a unique hero image.

## Current Hero Image Locations

### Root App (Main Marketing Site)

**High Priority Pages:**
1. **Homepage** (`src/components/sections/hero.tsx`) - 1 image
   - Your most important hero - first impression
   
2. **Services Overview** (`src/app/services/page.tsx`) - 2 images
   - Main services landing page

3. **About Page** (`src/app/about/page.tsx`) - 5 images
   - Multiple sections showing team/facility

4. **Start/Getting Started** (`src/app/start/page.tsx`) - 1 image

**Therapy Services** (10 pages):
- Individual Therapy
- Couples Therapy
- Child Therapy
- Teen Therapy
- EMDR Therapy
- Hypnotherapy
- Somatic Therapy
- Trauma Therapy
- Veterans & First Responders
- Weight Loss Surgery Support

**Wellness Services** (15 pages):
- Acupuncture
- Cryotherapy
- Energy Work
- HydraFacial
- Injectables
- IV Vitamin Infusion
- KeraLase Hair Restoration
- Laser Hair Removal
- Laser Lipo
- Massage
- Pain Management
- Permanent Makeup
- PRP/Vampire Facial
- Skincare
- Teeth Whitening

**Component Sections** (Reused across site):
- CTA (Call-to-Action) - 1 image
- Team Preview - 4 images
- Services Overview - 1 image
- Why Pathways - 1 image

### Apps (Main, Wisdom, Wellness)
Each app has similar structure, so images can be shared across apps.

## Suggested Image Strategy

### Option 1: Minimal (5-10 images)
**Recommended for quick launch:**
1. **Homepage hero** - Welcoming diverse group
2. **Therapy services** - Compassionate, professional therapy setting (reuse for all 10 therapy pages)
3. **Wellness services** - Spa/wellness setting (reuse for all 15 wellness pages)
4. **About/Team** - Office environment, team collaboration (2-3 variations)
5. **Getting Started** - Warm, inviting, action-oriented

**Pros:** Quick to produce, cost-effective
**Cons:** Some repetition across pages

### Option 2: Moderate (15-20 images)
**Recommended for professional launch:**
- 1 Homepage hero
- 3-4 Therapy variations (rotate across 10 pages)
- 4-5 Wellness variations (rotate across 15 pages)
- 3-4 About/facility images
- 2-3 Lifestyle/general wellness images

**Pros:** Good variety, minimal obvious repetition
**Cons:** Moderate production time/cost

### Option 3: Full Coverage (30+ images)
**For premium brand experience:**
- Every page gets unique imagery
- No repetition
- Maximum visual interest

**Pros:** Premium feel, optimal UX
**Cons:** Higher production time/cost

## Image Content Guidelines

### DO:
✅ Show diverse, inclusive representation
✅ Professional, warm, welcoming atmosphere
✅ Natural, authentic moments (not overly posed)
✅ Soft, natural lighting
✅ Neutral/calming backgrounds
✅ Portrait orientation (3:4 or 4:5)

### DON'T:
❌ Overly staged or stock-photo feel
❌ Landscape orientation
❌ Dark or moody lighting
❌ Busy, distracting backgrounds
❌ Recognizable faces without releases (privacy/HIPAA)

## Priority Order for Production

1. **Homepage hero** (most important!)
2. **Services page** (high traffic)
3. **About page** (3-5 images)
4. **Individual therapy** (most common service)
5. **Massage/wellness** (popular services)
6. **Remaining therapy services** (8 pages)
7. **Remaining wellness services** (14 pages)
8. **Component sections** (CTA, team preview, etc.)

## Quick Start Guide

**If you need to launch quickly:**
1. Get 1 amazing homepage hero (portrait, 3:4 ratio)
2. Get 2 generic images: "therapy setting" + "wellness setting"
3. Reuse those 2 images across all service pages
4. Add more unique images over time as you produce them

**We can easily swap images later** - the code is set up to make updates simple!

---

**Questions?** The images use Next.js `<Image>` component with automatic optimization, so focus on getting good source material and we'll handle the rest!
