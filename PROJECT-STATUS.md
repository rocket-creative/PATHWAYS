# Pathways Within - Project Status

**Last Updated:** January 25, 2026  
**Project:** Marketing Website (Frontend)  
**Status:** Live

---

## Live Site

**URL:** https://pathways-8h3u-theta.vercel.app  
**Vercel Project:** `pathways-8h3u`  
**Repository:** `rocket-creative/PATHWAYS`  
**Branch:** `PATHWAYS-2_DEV` (development), `PATHWAYS-2_MAIN` (production)

---

## What's Built

### Pages

| Page | URL | Status |
|------|-----|--------|
| Homepage | `/` | ✅ Complete |
| About | `/about` | ✅ Complete |
| Locations | `/locations` | ✅ Complete |
| Get Started | `/start` | ✅ Complete |
| Contact | `/contact` | ✅ Complete |
| FAQ | `/faq` | ✅ Complete |
| **Therapy (Wisdom)** | | |
| Overview | `/wisdom` | ✅ Complete |
| All Services | `/wisdom/services` | ✅ Complete |
| Individual Service | `/wisdom/services/[slug]` | ✅ Complete (10 services) |
| Conditions | `/wisdom/conditions` | ✅ Complete |
| Individual Condition | `/wisdom/conditions/[slug]` | ✅ Complete (3 conditions) |
| Team | `/wisdom/team` | ✅ Complete |
| **Wellness** | | |
| Overview | `/wellness` | ✅ Complete |
| All Services | `/wellness/services` | ✅ Complete |
| Individual Service | `/wellness/services/[slug]` | ✅ Complete (15 services) |
| Team | `/wellness/team` | ✅ Complete |
| **Legal** | | |
| Privacy Policy | `/privacy` | ✅ Complete |
| Terms of Service | `/terms` | ✅ Complete |
| Accessibility | `/accessibility` | ✅ Complete |
| Cookie Policy | `/cookies` | ✅ Complete |
| Good Faith Estimate | `/good-faith-estimate` | ✅ Complete |
| **Internal Forms** | | |
| Business Intake | `/business-intake` | ✅ Complete (sends email via Resend) |
| Client Intake | `/client-intake` | ✅ Complete |
| CRM Placeholder | `/crm` | ⚠️ Placeholder only |

### Features

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized (meta tags, JSON-LD schemas)
- ✅ Accessibility (WCAG 2.1 AA)
- ✅ Cookie consent banner
- ✅ Crisis banner (988 Suicide Hotline)
- ✅ Contact form (sends to Resend)
- ✅ Business intake form (sends to Resend)
- ✅ Site indicator badge (shows domain preview in development)

### Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS |
| Hosting | Vercel |
| Email | Resend |
| Fonts | Raleway, Lora (Google Fonts) |

---

## Environment Variables (Vercel)

| Variable | Purpose | Status |
|----------|---------|--------|
| `resend` | Resend API key for email | ✅ Set |
| `NEXT_PUBLIC_HIDE_SITE_INDICATOR` | Hide domain badge | Not set (shows by default) |

---

## File Structure

```
PATHWAYS-2/
├── src/
│   ├── app/                    # Next.js pages
│   │   ├── page.tsx            # Homepage
│   │   ├── about/
│   │   ├── contact/
│   │   ├── wisdom/             # Therapy section
│   │   ├── wellness/           # Wellness section
│   │   ├── business-intake/    # Internal form
│   │   ├── client-intake/      # Client form
│   │   └── api/                # API routes
│   ├── components/
│   │   ├── layout/             # Navigation, Footer, etc.
│   │   ├── sections/           # Hero, CTA, etc.
│   │   └── ui/                 # Reusable UI components
│   ├── data/                   # Service/condition data
│   ├── lib/                    # Utilities, config
│   └── styles/                 # Global CSS
├── public/                     # Static assets (images)
├── docs/                       # Documentation
└── vercel.json                 # Vercel config
```

---

## What's NOT in This Project

This is the **marketing/frontend website only**. It does NOT include:

- ❌ Patient data storage
- ❌ HIPAA-compliant features
- ❌ User authentication
- ❌ Real CRM functionality
- ❌ Appointment booking (links to external system)
- ❌ Payment processing

---

## Next Phase: CRM

See `docs/PHASE-2-CRM-PLAN.md` for details.

**Key Decision:** The CRM must be a **SEPARATE PROJECT** because:

1. **Different hosting** - HIPAA requires AWS/GCP with BAA (not Vercel)
2. **Different security** - Encrypted database, MFA, audit logging
3. **Separation of concerns** - Marketing site has no access to PHI
4. **Independent deployment** - CRM changes don't affect public site
5. **Compliance isolation** - If CRM is audited, marketing site is out of scope

**Recommended structure:**
```
CURSER BUILDS/
├── PATHWAYS-2/              # This project (marketing site)
└── PATHWAYS-CRM/            # New project (HIPAA CRM)
```

---

## Deployment

**Auto-deploy:** Push to `PATHWAYS-2_MAIN` → Vercel deploys to production

**Manual deploy:**
```bash
cd "PATHWAYS-2"
npx vercel --prod
```

---

## Custom Domains (Future)

When ready to go live with custom domains:

1. Add domains in Vercel dashboard:
   - `pathwayswithin.com` → main site
   - `wisdom.pathwayswithin.com` → therapy content
   - `wellness.pathwayswithin.com` → wellness content

2. Set `NEXT_PUBLIC_HIDE_SITE_INDICATOR=true` in Vercel env vars

3. (Optional) Add middleware for domain-specific routing

---

## Contacts

- **Vercel Account:** georges-projects-3ea4d6aa
- **GitHub Repo:** rocket-creative/PATHWAYS
- **Email Service:** Resend (check dashboard for delivery status)

---

*This document reflects the state as of January 25, 2026*
