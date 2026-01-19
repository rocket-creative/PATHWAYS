# Pathways Within - Monorepo

A monorepo containing three connected websites for Pathways Within:

1. **Main Site** (`apps/main`) - Unified entry point at pathwayswithin.com
2. **Wisdom Site** (`apps/wisdom`) - Therapy services (NY State compliant separate URL)
3. **Wellness Site** (`apps/wellness`) - Wellness services (NY State compliant separate URL)

## Architecture

```
pathways-within/
├── apps/
│   ├── main/          # pathwayswithin.com - port 3000
│   ├── wisdom/        # wisdom.pathwayswithin.com - port 3001
│   └── wellness/      # wellness.pathwayswithin.com - port 3002
├── packages/
│   ├── ui/            # Shared React components
│   └── config/        # Shared Tailwind, styles, TypeScript config
├── public/            # Shared public assets (fonts, images)
└── content/           # Content markdown files
```

## Getting Started

### Prerequisites

- Node.js 18.17+
- pnpm 9.0+ (`npm install -g pnpm`)

### Installation

```bash
# Install dependencies
pnpm install

# Copy environment file
cp .env.example .env.local
```

### Development

```bash
# Run all sites simultaneously
pnpm dev

# Run individual sites
pnpm dev:main      # Main site on port 3000
pnpm dev:wisdom    # Wisdom site on port 3001
pnpm dev:wellness  # Wellness site on port 3002
```

### Building

```bash
# Build all sites
pnpm build

# Build individual sites
pnpm build:main
pnpm build:wisdom
pnpm build:wellness
```

## Cross-Site Navigation

The sites share a unified design system and navigation. When users click on:
- Therapy services from the main site → redirects to Wisdom site
- Wellness services from the main site → redirects to Wellness site
- About, Team, Locations, Contact → stays on/goes to Main site

This creates a seamless user experience while maintaining NY State compliance with separate URLs for different service types.

## Environment Variables

Create `.env.local` in each app directory with:

```env
NEXT_PUBLIC_MAIN_URL=http://localhost:3000
NEXT_PUBLIC_WISDOM_URL=http://localhost:3001
NEXT_PUBLIC_WELLNESS_URL=http://localhost:3002
```

For production, update these to your actual domains.

## Shared Packages

### @pathways/ui
Contains all shared React components:
- Layout: Navigation, Footer
- Sections: Hero, PageHero, Approach, CTA, etc.
- UI: CrisisBanner, CookieConsent, Button
- Utilities: useScrollAnimation, cn(), etc.

### @pathways/config
Contains shared configuration:
- Tailwind config
- PostCSS config
- Global CSS styles
- TypeScript config

## Deployment

Each app can be deployed independently to different domains:
- Main → pathwayswithin.com
- Wisdom → wisdom.pathwayswithin.com (or pathways-wisdom.com)
- Wellness → wellness.pathwayswithin.com (or pathways-wellness.com)

Recommended deployment platforms:
- Vercel (supports monorepos natively)
- Netlify
- Cloudflare Pages

## NY State Compliance Note

This architecture maintains separate URLs for therapy (Wisdom) and wellness services as required by NY State regulations, while presenting a unified brand experience to users.
