# Pathways Within Design System

> **LOCKED IN** - This document defines the official brand aesthetic. All future development MUST follow these guidelines.

---

## Brand Identity

**Pathways Within** - Wisdom and Wellness Collaborative

The brand represents a journey inward - the labyrinth logo symbolizes the path to self-discovery and healing. The design should feel:
- **Professional** yet warm
- **Clinical** yet approachable  
- **Modern** yet timeless
- **Calm** yet confident

---

## Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Navy** | `#01153D` | `1, 21, 61` | Primary brand color, headings, sidebar backgrounds, buttons |
| **Green** | `#72A23B` | `114, 162, 59` | Accent color, CTAs, success states, active indicators |

### Secondary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Breezy** | `#86A8E1` | `134, 168, 225` | Light blue, info states, pending indicators |
| **Cream** | `#FAF9F7` | `250, 249, 247` | Page backgrounds |
| **Linen** | `#F5F4F2` | `245, 244, 242` | Card backgrounds, borders, subtle backgrounds |
| **White** | `#FDFDFD` | `253, 253, 253` | Card surfaces, content areas |

### Color Scale Reference

```
Navy Scale (dark to light):
950: #010A1F  - Darkest (gradients)
900: #0D1C3D  - Dark (gradient tops)
DEFAULT: #01153D  - Primary navy
800: #182952
700: #2B3D73
600: #354B87
500: #3D5696
400: #5A6FA6
300: #7788B6
200: #9EAACB
100: #C5CCE0
50:  #E8EBF2  - Lightest

Green Scale:
600: #5E8A30  - Hover state
500: #72A23B  - Primary green (DEFAULT)
400: #8BBF52  - Lighter accent
100: #E4EED8  - Light background
50:  #F4F8EF  - Lightest background
```

### ❌ FORBIDDEN COLORS

These colors are **BANNED** from the Pathways codebase:

| Color | Reason |
|-------|--------|
| `sage-*` | Off-brand, replaced with green |
| `amber-*` | Off-brand yellow tones |
| `yellow-*` | Not part of brand palette |
| `orange-*` | Not part of brand palette |
| `stone-*` | Replaced with navy/linen/cream |

---

## Typography

### Font Families

| Type | Font | Fallback | Usage |
|------|------|----------|-------|
| **Serif** | Clarendon | Georgia, serif | Headings, logo wordmark, editorial content |
| **Sans** | Raleway | system-ui, sans-serif | Body text, UI elements, navigation |

### Font Weights

**Only 2 weights allowed** (per design philosophy):
- **Regular (400)** - Body text, descriptions
- **Semibold (600)** - Headings, emphasis, buttons

### Text Colors

| Usage | Class | Color |
|-------|-------|-------|
| Primary text | `text-navy` | Navy #01153D |
| Secondary text | `text-navy-400` | Muted navy |
| Subtle text | `text-navy-300` | Light navy |
| Text on dark | `text-white` | White |
| Text on dark (muted) | `text-white/70` | White 70% opacity |
| Links/Actions | `text-green` | Green #72A23B |

---

## Component Patterns

### Buttons

**Primary Button (CTA)**
```html
<button class="px-4 py-2 bg-green text-white font-medium rounded-full hover:bg-green-600 transition-colors">
  Action
</button>
```

**Secondary Button**
```html
<button class="px-4 py-2 bg-navy text-white font-medium rounded-lg hover:bg-navy-800 transition-colors">
  Action
</button>
```

**Ghost Button**
```html
<button class="px-3 py-1.5 text-green hover:bg-green-50 rounded-lg transition-colors">
  Action
</button>
```

### Cards

```html
<div class="bg-white rounded-lg border border-linen-300 shadow-sm">
  <!-- Card content -->
</div>
```

### Badges

| State | Classes |
|-------|---------|
| Confirmed/Success | `bg-green-100 text-green-700` |
| Pending/Info | `bg-breezy-100 text-navy-700` |
| Cancelled/Neutral | `bg-linen-200 text-navy-700` |
| Completed | `bg-navy text-white` |

### Form Inputs

```html
<input class="w-full px-3 py-2 border border-linen-200 rounded-lg text-navy placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
```

---

## Gradients

### Navy Sidebar Gradient
```css
bg-gradient-to-b from-navy-900 via-navy to-navy-950
```

### Green Accent Gradient
```css
bg-gradient-to-r from-green-500 to-green-600
/* or */
bg-gradient-to-br from-green-400 to-green-600
```

### Active State with Glow
```css
bg-gradient-to-r from-green-500 to-green-600 shadow-lg shadow-green/20
```

---

## Logo Usage

### Full Logo
- Use `pathways-logo.png` for full circular labyrinth with wordmark
- On dark backgrounds: Apply `brightness-0 invert` filter for white version
- Minimum size: 120px width
- Preferred size: 160px in sidebars/headers

### Logo on Dark Background
```jsx
<Image 
  src="/logo.png" 
  alt="Pathways Within"
  width={160}
  height={160}
  className="brightness-0 invert opacity-95"
/>
```

---

## Spacing & Layout

### Consistent Spacing Scale
- `px-5` / `py-5` - Standard component padding
- `px-6` / `py-6` - Larger sections
- `gap-3` - Between related items
- `gap-4` - Between components
- `space-y-1` - Tight vertical spacing (nav items)
- `space-y-6` - Section spacing

### Border Radius
- `rounded-lg` - Cards, inputs, buttons
- `rounded-xl` - Logo containers, featured elements
- `rounded-full` - Pills, avatars, circular buttons

---

## Dark UI Elements (Sidebar)

### Background
```css
bg-gradient-to-b from-navy-900 via-navy to-navy-950
```

### Borders
```css
border-white/10
```

### Text
- Active: `text-white`
- Inactive: `text-white/70`
- Muted: `text-white/50`

### Hover States
```css
hover:text-white hover:bg-white/10
```

### Active Navigation Item
```css
bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green/20
```

---

## Tailwind Config Reference

```typescript
// apps/crm/tailwind.config.ts - CANONICAL COLORS
colors: {
  navy: {
    DEFAULT: '#01153D',
    50: '#E8EBF2',
    100: '#C5CCE0',
    200: '#9EAACB',
    300: '#7788B6',
    400: '#5A6FA6',
    500: '#3D5696',
    600: '#354B87',
    700: '#2B3D73',
    800: '#182952',
    900: '#0D1C3D',
    950: '#010A1F',
  },
  green: {
    DEFAULT: '#72A23B',
    50: '#F4F8EF',
    100: '#E4EED8',
    200: '#C9DDB1',
    300: '#AECC8A',
    400: '#8BBF52',
    500: '#72A23B',
    600: '#5E8A30',
    700: '#4A6E26',
    800: '#3A5422',
    900: '#2E441C',
    950: '#1A2710',
  },
  cream: {
    DEFAULT: '#FAF9F7',
    50: '#FDFDFD',
    100: '#FAF9F7',
    200: '#F5F4F2',
    300: '#E6E4E0',
    400: '#DCDAD5',
  },
  linen: {
    DEFAULT: '#F5F4F2',
    50: '#FAFAF9',
    100: '#F5F4F2',
    200: '#ECEAE6',
    300: '#E0DDD8',
  },
  breezy: {
    DEFAULT: '#86A8E1',
    100: '#E8EFF9',
    200: '#C5D7F2',
    300: '#A3C0EB',
    400: '#86A8E1',
    500: '#6490D7',
  },
}
```

---

## Checklist for New Features

Before submitting any UI code, verify:

- [ ] Only using navy/green/breezy/cream/linen colors
- [ ] No sage, amber, yellow, orange, or stone colors
- [ ] Headings use `text-navy` with serif font
- [ ] Body text uses `text-navy` or `text-navy-400`
- [ ] Buttons follow the established patterns
- [ ] Cards have `border-linen-300 shadow-sm`
- [ ] Focus states use `ring-green-500`
- [ ] Dark backgrounds use navy gradient
- [ ] Active states use green gradient with shadow

---

## File Locations

| Asset | Path |
|-------|------|
| Logo PNG | `/pathways-logo.png` (root) |
| CRM Logo | `/apps/crm/public/logo.png` |
| Design System | `/docs/DESIGN-SYSTEM.md` |
| CRM Tailwind Config | `/apps/crm/tailwind.config.ts` |

---

*Last updated: January 2026*
*Version: 1.0 - LOCKED*
