# Pathways Within - Multi-Site Application

One Next.js application deployed to four Vercel projects:

1. **Main Site** (`pathways-main`) - Unified entry point at pathwayswithin.com
2. **Wisdom Site** (`pathways-wisdom`) - Therapy services (NY State compliant separate URL)
3. **Wellness Site** (`pathways-wellness`) - Wellness services (NY State compliant separate URL)
4. **CRM** (`pathways-crm`) - Internal staff dashboard

## Architecture

```
pathways-within/
├── src/app/
│   ├── (root)/        # Main site routes (/, /about, /contact, etc.)
│   ├── wisdom/        # Therapy routes (deployed to pathways-wisdom)
│   ├── wellness/      # Wellness routes (deployed to pathways-wellness)
│   └── crm/           # CRM routes (deployed to pathways-crm)
├── public/            # Public assets (fonts, images)
├── vercel.json        # Main site config
├── vercel.wisdom.json # Wisdom site config with rewrites
├── vercel.wellness.json # Wellness site config with rewrites
└── vercel.crm.json    # CRM config with rewrites
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

One repository deployed to 4 Vercel projects:

| Project | Domain (Future) | Current URL |
|---------|-----------------|-------------|
| pathways-main | pathwayswithin.com | pathways-main.vercel.app |
| pathways-wisdom | wisdom.pathwayswithin.com | pathways-wisdom.vercel.app |
| pathways-wellness | wellness.pathwayswithin.com | pathways-wellness.vercel.app |
| pathways-crm | crm.pathwayswithin.com | pathways-crm.vercel.app |

Each project uses rewrites to show only relevant routes (configured in vercel.*.json files).

## NY State Compliance Note

This architecture maintains separate URLs for therapy (Wisdom) and wellness services as required by NY State regulations, while presenting a unified brand experience to users.
