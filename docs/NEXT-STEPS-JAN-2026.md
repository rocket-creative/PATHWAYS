# Pathways Within — Next Steps
## Team Meeting: January 19, 2026

---

## Executive Summary

The Pathways Within web platform is now fully integrated as a unified multi-site system. The landing page (main site) and both sub-sites (Wisdom for therapy, Wellness for wellness services) are connected and share a consistent design system, navigation, and user experience.

---

## What's Been Accomplished

### 1. Multi-Site Architecture — Complete ✅

We've built a monorepo containing three interconnected websites:

| Site | Purpose | Status | URL |
|------|---------|--------|-----|
| **Main** | Landing page, About, Team, Locations, Contact | Built | Needs deployment |
| **Wisdom** | Therapy services (NY State compliant) | **LIVE** | [wisdom-eight-topaz.vercel.app](https://wisdom-eight-topaz.vercel.app) |
| **Wellness** | Wellness services (NY State compliant) | Built | [wellness-phi-three.vercel.app](https://wellness-phi-three.vercel.app) |
| **CRM** | Internal staff dashboard | **LIVE** | [crm-sooty-one.vercel.app](https://crm-sooty-one.vercel.app) |

### 2. Unified Design System — Locked In ✅

All sites share:
- **Brand colors**: Navy (#01153D), Green (#72A23B), Breezy (#86A8E1), Cream (#FAF9F7)
- **Typography**: Clarendon (headings) + Raleway (body)
- **Component library**: Shared buttons, cards, navigation, footer
- **Consistent UX**: Same look and feel across all three sites

### 3. Cross-Site Navigation — Working ✅

Users experience ONE seamless website:
- Clicking "Therapy Services" → Routes to Wisdom site
- Clicking "Wellness Services" → Routes to Wellness site  
- Clicking "About", "Team", "Locations", "Contact" → Routes to Main site
- Footer links work across all sites
- Navigation is identical on all three sites

### 4. NY State Compliance — Built In ✅

The architecture maintains separate URLs for therapy and wellness services as required by NY State regulations, while presenting a unified brand experience to users.

---

## Current Deployment Status

```
✅ LIVE NOW:
   • Wisdom (therapy) — wisdom-eight-topaz.vercel.app
   • CRM (internal) — crm-sooty-one.vercel.app
   • Wellness — wellness-phi-three.vercel.app

⏳ NEEDS DEPLOYMENT:
   • Main site (apps/main) — contains /about, /team, /locations, /contact, /start, /faq
```

**Note:** Some navigation links currently show 404 errors because the main app hasn't been deployed yet. Once deployed, all links will work.

---

## What I Need From the Team

### 1. Team Member Information (For Website)

**I need permission to contact every team member who doesn't have a bio yet.**

**First, I need a list of all team members:**
- [ ] Full list of staff names
- [ ] Their email addresses or phone numbers
- [ ] Which department/location they belong to

**For each person, I will collect:**
- [ ] Professional headshot photo
- [ ] Full name and credentials (LCSW, MD, etc.)
- [ ] Job title / role
- [ ] Which location(s) they work at
- [ ] Services they provide

**Process:**
1. Team provides me with the full staff list and contact info
2. I'll reach out to each team member for photos and basic info
3. Add everyone to the website with placeholder bios
4. Hand off to whoever will write the final bios — they can take their time with that

---

### 2. Stakeholder Interviews (For CRM/Backend)

I need to schedule two interviews to understand workflows and pain points:

#### Interview #1: Trust Driven Care (Therapy Side)
- **Who:** Person who runs/manages the therapy practice
- **Purpose:** Understand billing, scheduling, pain points, wish list
- **Questions I'll cover:**
  - How do you currently handle intake?
  - What's your billing process?
  - What do you like about your current systems?
  - What frustrates you?
  - What would make your life easier?

#### Interview #2: Spa/Wellness Side
- **Who:** Person who manages the wellness/spa operations
- **Purpose:** Same as above — billing, scheduling, workflows
- **Questions I'll cover:**
  - How do you handle appointments and scheduling?
  - What's your billing/payment process?
  - What works well? What doesn't?
  - What features would help you most?

**Time needed:** ~30-45 minutes per interview

---

### 3. Account Access (For SEO & Marketing)

**I need login credentials for all online accounts/listings:**

| Platform | Username | Password | Status |
|----------|----------|----------|--------|
| GoDaddy (domain registrar) | ___________ | ___________ | ⬜ |
| Google Business Profile | ___________ | ___________ | ⬜ |
| Google Analytics | ___________ | ___________ | ⬜ |
| Google Search Console | ___________ | ___________ | ⬜ |
| Instagram | ___________ | ___________ | ⬜ |
| Facebook | ___________ | ___________ | ⬜ |
| Psychology Today | ___________ | ___________ | ⬜ |
| Yelp (if applicable) | ___________ | ___________ | ⬜ |
| Healthgrades (if applicable) | ___________ | ___________ | ⬜ |
| Square (payment processing) | ___________ | ___________ | ⬜ |
| Other directories | ___________ | ___________ | ⬜ |

**Why this matters:**
- GoDaddy access needed to point domains to the new site
- I'll audit everywhere you're currently listed
- Create a list of directories where you're NOT listed
- Get you listed everywhere relevant
- This significantly improves search visibility and SEO

---

### 4. Dedicated Credit Card for Project Expenses

**I need a single credit card assigned to this project for easy expense tracking.**

All project-related charges will go on this card:

| Expense Type | Estimated Cost | Frequency |
|--------------|----------------|-----------|
| Google Ads | $500 | Monthly |
| Retargeting Ads | $500 | Monthly |
| Hosting (Vercel) | ~$20-40 | Monthly |
| Domain renewals | ~$15-50 per domain | Annually |
| Email services (if needed) | TBD | Monthly |
| Directory listings (if paid) | TBD | Varies |
| Other tools/services | TBD | As needed |

**Process:**
- I will get approval before any purchase
- We can set a monthly budget cap
- All expenses tracked in one place for easy accounting

---

### 5. Marketing Budget Approval

**Recommended monthly ad spend:**

| Channel | Monthly Budget | Purpose | Expected Impact |
|---------|---------------|---------|-----------------|
| **Google Ads** | $500/month | Capture people actively searching for therapy/wellness services | Direct leads |
| **Retargeting Ads** | $500/month | Follow website visitors across Facebook, Instagram, web | 20-30% increase in conversions |
| **Total** | **$1,000/month** | | |

**How retargeting works:**
- Someone visits the Pathways website
- They leave without booking
- They see Pathways ads on Facebook, Instagram, and other sites
- The ad "follows them around" as a reminder
- They come back and book an appointment

**Expected ROI:** These two channels typically add 20-30% yield on conversions. People who see retargeting ads are significantly more likely to return and complete a booking.

---

## Immediate Next Steps

### Priority 1: Deploy Main Site
- [ ] Deploy `apps/main` to Vercel
- [ ] Update environment variables with production URL
- [ ] Verify all cross-site navigation works
- [ ] Test on mobile devices

### Priority 2: Domain Configuration
- [ ] Get GoDaddy login credentials
- [ ] Point `pathwayswithin.com` to main site
- [ ] Configure `wisdom.pathwayswithin.com` (or separate domain)
- [ ] Configure `wellness.pathwayswithin.com` (or separate domain)
- [ ] Set up SSL certificates
- [ ] Set up 301 redirects from old site URLs (if applicable)

### Priority 3: Content & Team Pages
- [ ] Get permission to contact team members
- [ ] Collect photos and basic info
- [ ] Add all team members to website
- [ ] Hand off bio writing to designated person

### Priority 4: Discovery & Research
- [ ] Schedule interview with Trust Driven Care lead
- [ ] Schedule interview with Spa/Wellness lead
- [ ] Gather all account logins
- [ ] Audit current online presence
- [ ] Create directory listing plan

### Priority 5: Marketing Setup
- [ ] Approve $1,000/month ad budget
- [ ] Set up Google Ads account
- [ ] Set up retargeting pixel on website
- [ ] Launch initial campaigns

---

## CRM Status

The internal CRM dashboard is live and includes:
- Dashboard with today's appointments
- Patient management
- Appointment scheduling
- Services catalog
- Payment tracking
- Settings

**Demo URL:** [crm-sooty-one.vercel.app](https://crm-sooty-one.vercel.app)

### CRM Next Steps
- [ ] Connect to Supabase database (currently using demo data)
- [ ] Implement authentication
- [ ] Set up HIPAA-compliant audit logging
- [ ] Integrate with Jane EHR (future)
- [ ] Add Square payment processing (future)

---

## Technical Architecture

```
pathways-within/
├── apps/
│   ├── main/          → pathwayswithin.com (port 3000)
│   ├── wisdom/        → wisdom.pathwayswithin.com (port 3001)
│   ├── wellness/      → wellness.pathwayswithin.com (port 3002)
│   └── crm/           → Internal staff dashboard
├── packages/
│   ├── ui/            → Shared React components
│   └── config/        → Shared Tailwind, styles, TypeScript
└── docs/              → Documentation
```

### Running Locally

```bash
# Install dependencies
pnpm install

# Run all sites simultaneously
pnpm dev

# Run individual sites
pnpm dev:main      # Main site on port 3000
pnpm dev:wisdom    # Wisdom site on port 3001
pnpm dev:wellness  # Wellness site on port 3002
```

---

## Pages Available

### Main Site (`apps/main`)
- `/` — Homepage
- `/about` — About Pathways Within
- `/services` — Services overview (links to Wisdom/Wellness)
- `/team` — Team members
- `/locations` — All 5 locations
- `/locations/[slug]` — Individual location pages
- `/contact` — Contact form
- `/start` — Get started / intake
- `/faq` — Frequently asked questions
- `/privacy` — Privacy policy
- `/terms` — Terms of service
- `/accessibility` — Accessibility statement
- `/cookies` — Cookie policy

### Wisdom Site (`apps/wisdom`)
- `/` — Therapy homepage
- `/services` — Therapy services list
- `/services/[slug]` — Individual therapy service pages
- `/conditions` — Conditions we treat
- `/conditions/[slug]` — Individual condition pages
- Plus: about, team, locations, contact, faq, privacy, terms, accessibility

### Wellness Site (`apps/wellness`)
- `/` — Wellness homepage
- `/services` — Wellness services list
- `/services/[slug]` — Individual wellness service pages
- Plus: about, team, locations, contact, faq, privacy, terms, accessibility

---

## Project Timeline

### Phase 1: Launch (Next 1-2 Weeks)
**Goal:** Get the website live and published

- [ ] Deploy main site to production
- [ ] Configure domains (need GoDaddy access)
- [ ] Add team member photos/info
- [ ] Final content review
- [ ] **GO LIVE**

### Content Approval Process (Post-Launch)

Once the site is live, here's how content updates will work:

1. **Submit:** Team members submit content changes/updates via a shared document or form
2. **Review:** Designated reviewer(s) approve or request revisions
3. **Publish:** I implement approved changes to the live site

**We need to determine:**
- [ ] Who is the designated content approver(s)?
- [ ] Preferred method for submitting changes (Google Doc, email, form)?
- [ ] Turnaround time expectations?

### Phase 2: SEO & Visibility (Weeks 2-4)
**Goal:** Get found on Google and directories

- [ ] Set up Google Search Console
- [ ] Audit and claim all directory listings
- [ ] Submit to directories where not listed
- [ ] Launch Google Ads campaign
- [ ] Set up retargeting

### Phase 3: Backend & Integrations (Weeks 4-8)
**Goal:** Build out the CRM and intake system

- [ ] Conduct stakeholder interviews
- [ ] Build intake form workflow
- [ ] Connect CRM to database
- [ ] Integrate with Jane EHR
- [ ] Payment processing setup

---

## Questions for Discussion

1. **Domain strategy**: Are we using subdomains (wisdom.pathwayswithin.com) or separate domains?
2. **Team bios**: Who will write the final bios once I have everyone's basic info?
3. **Interview scheduling**: When can I meet with the Trust Driven Care and Spa leads?
4. **Account access**: Who has the login credentials for Google Business, social media, directories?
5. **Credit card**: Who will provide the dedicated card for project expenses?

---

## Summary

The technical foundation is complete. All three sites are built, integrated, and share a unified design system. 

**What I need from this meeting:**

| Item | Action Required |
|------|-----------------|
| ✅ Team contacts | Permission to reach out to staff for photos/info |
| ✅ Interview scheduling | Set dates for Trust Driven Care + Spa interviews |
| ✅ Account logins | All social media, Google Business, directory credentials |
| ✅ Credit card | Dedicated card for all project expenses |
| ✅ Budget approval | ~$1,000/month for ads + hosting/services |

Once I have these, I can:
1. **Publish the site** within 1-2 weeks
2. **Start SEO work** — directories, Google Search, ads
3. **Build the backend** — intake forms, CRM, Jane integration

---

## Action Items Recap

### From the Team:
- [ ] Provide dedicated credit card for project expenses
- [ ] Provide full list of all team members (names, contact info, department)
- [ ] Grant permission to contact team members
- [ ] Schedule Trust Driven Care interview
- [ ] Schedule Spa/Wellness interview
- [ ] Provide all account logins (see table above) — especially GoDaddy, Google Analytics, Square
- [ ] Approve monthly budget (~$1,000/month for ads)

### From Me:
- [ ] **Get site published (1-2 weeks)**
- [ ] Contact team members for photos/info
- [ ] Add team members to website
- [ ] Set up SEO and Google Search
- [ ] Audit online presence and directory listings
- [ ] Launch ad campaigns (once approved)
- [ ] Conduct stakeholder interviews
- [ ] Build intake system and CRM backend
- [ ] Integrate with Jane EHR

---

*Document prepared: January 19, 2026*
